import React, { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// output
// import { convertToHTML } from 'draft-convert';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const App = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        const content = editorState.getCurrentContent();

        // using draft-convert
        // let value = convertToHTML(content);

        // using draftjs-to-html
        const rawContentState = convertToRaw(content);
        const value = draftToHtml(rawContentState);

        setConvertedContent(value);
    }
    const createMarkup = (html) => {
        // console.log(html);
        // return {
        //     __html: html
        // }

        return {
            __html: DOMPurify.sanitize(html)
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                Rich Text Editor Example
            </header>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
    )
}
export default App;