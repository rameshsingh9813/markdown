import React from 'react';
import { parse } from 'marked';

function Markdown(props) {
//   const { text } = props;
  const html = parse(props.text);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Markdown;
