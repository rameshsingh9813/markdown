import React from 'react';
import {parse} from 'marked';
import '../style/previewerStyle.css';

const Previewer = ({ text }) => {
  const html = parse(text,{breaks:true});

  return (
    <div className="previewer-container" >
      <h1 className='heading2'>Previewer</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} id="preview" />
    </div>
  );
};

export default Previewer;
