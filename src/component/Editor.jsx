import React from 'react';
import '../style/editorStyle.css'

const Editor = ({ text, handleChange }) => {
  return (
    <div className="editor-container" >
      <h1 className='heading2'>Editor</h1>
      <textarea className="editor-textarea" id="editor"  value={text} onChange={handleChange} />
    </div>
  );
};

export default Editor;
