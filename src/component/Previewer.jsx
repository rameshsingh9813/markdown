import React from 'react';
import {parse} from 'marked';
import '../style/previewerStyle.css';

const Previewer = ({ text }) => {
  const html = parse(text);

  return (
    <div className="previewer-container">
      <h2 className='heading2'>Previewer</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Previewer;
