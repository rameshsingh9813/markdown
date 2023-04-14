import React from 'react'
import '../style/editorStyle.css'
import Markdown from './component/Markdown';

const Editor = () => {
  const markdownText = `~hello~ 
  This is a sub-heading...   **bold**  or _bold_
 `;

  return (
    <div className='editorwrap'>
        <div className='toolbar'>
            <h2>Editor</h2>
            {/* <i class="fa fa-arrows-alt"></i> */}
        </div>
        <textarea id="message" name="message" className='editortextarea'>
        <Markdown text={markdownText} />
        </textarea>
    </div>
  )
}

export default Editor