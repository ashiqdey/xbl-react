import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

import 'draft-js/dist/Draft.css';

export default function RichtextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const formatInline = [
        {
            display: 'B',
            format: 'BOLD',
        },
        {
            display: 'I',
            format: 'ITALIC',
        },
        {
            display: 'U',
            format: 'UNDERLINE',
        },
        {
            display: 'S',
            format: 'STRIKETHROUGH',
        },
        {
            display: 'C',
            format: 'CODE',
        }
    ];



    const formatBlock = [
        { display: 'H1', format: 'header-one' },
        { display: 'H2', format: 'header-two' },
        { display: 'H3', format: 'header-three' },
        { display: 'H4', format: 'header-four' },
        { display: 'H5', format: 'header-five' },
        { display: 'H6', format: 'header-six' },
        { display: 'Blockquote', format: 'blockquote' },
        { display: 'UL', format: 'unordered-list-item' },
        { display: 'OL', format: 'ordered-list-item' },
        { display: 'Code Block', format: 'code-block' },
    ];



    const _onMouseDown = (e, format, type) => {
        e.preventDefault();
        if (type === "inline") {
            setEditorState(RichUtils.toggleInlineStyle(editorState, format))
        }
        else if (type === "block") {
            setEditorState(RichUtils.toggleBlockType(editorState, format))
        }
    }







    return (
        <div className='p2'>
            <h1>Test editor</h1>

            <div className="mt2">
                {
                    formatInline.map((option, i) => <button key={i} onMouseDown={e => { _onMouseDown(e, option.format, "inline") }}>{option.display}</button>)
                }
                {
                    formatBlock.map((option, i) => <button key={i} onMouseDown={e => { _onMouseDown(e, option.format, "block") }}>{option.display}</button>)
                }

                <Editor
                    placeholder="Enter something here"
                    editorState={editorState}
                    onChange={setEditorState}

                />
            </div>
        </div>
    )
}
