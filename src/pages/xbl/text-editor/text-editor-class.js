import React, { useState, useEffect } from "react";
import {
    convertToRaw,
    CompositeDecorator,
    Editor,
    EditorState,
    RichUtils,
    getDefaultKeyBinding
} from 'draft-js';

// output
// import { convertToHTML } from 'draft-convert';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';

import Select from "../../../components/Select";


import Overlay from "../overlay";
// import testUtils from "react-dom/test-utils";


class TextEditorClass extends React.Component {
    constructor(props) {
        super(props);

        const decorator = new CompositeDecorator([
            {
                strategy: findLinkEntities,
                component: Link,
            },
        ]);

        this.state = {
            editorState: EditorState.createEmpty(decorator),
            showURLInput: false,
            urlValue: '',
            urlTarget: "",
            value: '',
        };



        this.focus = () => this.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });

        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();

            // using draft-convert
            // let value = convertToHTML(content);

            // using draftjs-to-html
            const rawContentState = convertToRaw(content);
            const value = draftToHtml(rawContentState);

            this.setState({ value })
        };


        this.createMarkup = (html) => {
            // return { __html: html };

            return {
                __html: DOMPurify.sanitize(html)
            }
        }



        // link
        this.promptForLink = this._promptForLink.bind(this);
        this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
        this.onTargetChange = (e) => {
            let t = e.target.checked ? "_blank" : "_self"
            this.setState({ urlTarget: t });
            console.log(t);
        };
        this.confirmLink = this._confirmLink.bind(this);
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
        this.removeLink = this._removeLink.bind(this);


        // rich
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    }








    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4, /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }


    _promptForLink(e) {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent();
            const startKey = editorState.getSelection().getStartKey();
            const startOffset = editorState.getSelection().getStartOffset();
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

            let url = '';
            let target = '_self';
            if (linkKey) {
                const linkInstance = contentState.getEntity(linkKey);

                url = linkInstance.getData().url;
                target = linkInstance.getData().target;
            }

            this.setState({
                showURLInput: true,
                urlValue: url,
                urlTarget: target,
            }, () => {
                setTimeout(() => this.url.focus(), 0);
            });
        }
    }

    _confirmLink(e) {
        e.preventDefault();
        const { editorState, urlValue, urlTarget } = this.state;



        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            {
                url: urlValue,
                target: urlTarget
            }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            ),
            showURLInput: false,
            urlValue: '',
            urlTarget: '_self',
        }, () => {
            setTimeout(() => this.editor.focus(), 0);
        });
    }

    _onLinkInputKeyDown(e) {
        if (e.which === 13) {
            this._confirmLink(e);
        }
    }

    _removeLink(e) {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            });
        }
    }

    render() {
        const { editorState } = this.state;

        let urlInput;
        if (this.state.showURLInput) {
            urlInput = <Overlay show="1" onClose={() => this.setState({ showURLInput: false })}>
                <>
                    <input
                        onChange={this.onURLChange}
                        // ref="url"
                        ref={e => this.url = e}
                        type="text"
                        value={this.state.urlValue}
                        onKeyDown={this.onLinkInputKeyDown}
                    />
                    <label>
                        <input
                            type="checkbox"
                            onChange={this.onTargetChange}
                            checked={this.state.urlTarget === true || this.state.urlTarget === "_blank"}
                        /> New Tab
                    </label>

                    <button onMouseDown={this.confirmLink}>Add link</button>
                </>
            </Overlay>;
        }

        return (
            <React.StrictMode>
                <div className='p2 bg0'>
                    <h1>Rich text editor</h1>


                    <div className="editor">
                        <div className="controls">
                            <InlineStyleControls
                                editorState={editorState}
                                onToggle={this.toggleInlineStyle}
                            />
                            <span
                                className="sbtn xbl-link"
                                title="Add link"
                                onMouseDown={this.promptForLink}
                            />
                            <span
                                className="sbtn xbl-unlink"
                                title="Remove link"
                                onMouseDown={this.removeLink}
                            />

                            <HeadingControls
                                editorState={editorState}
                                onToggle={this.toggleBlockType}
                            />
                            <BlockStyleControls
                                editorState={editorState}
                                onToggle={this.toggleBlockType}
                            />

                            {urlInput}
                        </div>
                        <hr />
                        <div onClick={this.focus}>
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={editorState}
                                onChange={this.onChange}
                                handleKeyCommand={this.handleKeyCommand}
                                keyBindingFn={this.mapKeyToEditorCommand}
                                placeholder="Tell a story..."
                                // ref="editor"
                                ref={e => this.editor = e}
                                spellCheck={true}
                            />
                        </div>
                        <input
                            onClick={this.logState}
                            type="button"
                            value="Log State"
                        />
                    </div>

                    <div>
                        <h3>Output</h3>
                        <div dangerouslySetInnerHTML={this.createMarkup(this.state.value)}></div>
                    </div>

                </div>
            </React.StrictMode >
        );
    }
}
export default TextEditorClass;










































// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}









var INLINE_STYLES = [
    { icon: 'xbl-bold', label: "Bold", style: 'BOLD' },
    { icon: 'xbl-italic', label: "Italic", style: 'ITALIC' },
    { icon: 'xbl-underline', label: "underline", style: 'UNDERLINE' },
    { icon: 'xbl-monospace', label: "Monospace", style: 'CODE' },
];

const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return <>
        {INLINE_STYLES.map((type) =>
            <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                icon={type.icon}
                onToggle={props.onToggle}
                style={type.style}
            />
        )}
    </>
};










class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = `sbtn ${this.props.icon ? this.props.icon : ""}`;
        if (this.props.active) {
            className += ' active';
        }

        return (
            <span className={className} title={this.props.label} onMouseDown={this.onToggle} />
        );
    }
}

const HeadingControls = (props) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const HEADING_TYPES = [
            { label: 'Heading 1', value: "1", style: 'header-one' },
            { label: 'Heading 2', value: "2", style: 'header-two' },
            { label: 'Heading 3', value: "3", style: 'header-three' },
            { label: 'Heading 4', value: "4", style: 'header-four' },
            { label: 'Heading 5', value: "5", style: 'header-five' },
            { label: 'Heading 6', value: "6", style: 'header-six' }
        ];
        setState(HEADING_TYPES.map((type, i) => {
            type.label = (
                <span
                    key={i}
                    onMouseDown={() => props.onToggle(type.style)}
                    style={{ fontSize: "14px" }}
                >
                    {type.label}
                </span>
            );
            return type;
        }));

    }, [props])



    return (
        <Select
            className="pr z10"
            options={state}
            isSearchable={false}
            value={"3"}
            placeholder="Heading"
        />
    );
};






const BLOCK_TYPES = [
    { icon: "xbl-blockquote", label: 'Blockquote', style: 'blockquote' },
    { icon: "xbl-list-bullet", label: 'Bullet list', style: 'unordered-list-item' },
    { icon: "xbl-list-numbered", label: 'Numbered list', style: 'ordered-list-item' },
    { icon: "CB", label: 'Code Block', style: 'code-block' },
];



const BlockStyleControls = (props) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <>
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    icon={type.icon}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </>
    );
};

















// add remove link
function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}

const Link = (props) => {
    const { url, target } = props.contentState.getEntity(props.entityKey).getData();
    return (
        <a href={url} target={target}>
            {props.children}
        </a>
    );
};
// add remove link

