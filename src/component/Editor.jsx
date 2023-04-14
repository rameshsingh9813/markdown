import React from 'react';
import '../style/editorStyle.css'

const Editor = ({ text, handleChange }) => {
  return (
    <div className="editor-container">
      <h2 className='heading2'>Editor</h2>
      <textarea className="editor-textarea" value={text} onChange={handleChange} />
    </div>
  );
};

export default Editor;
