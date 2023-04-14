import React, { useState } from 'react';
import Editor from './component/Editor';
import Previewer from './component/Previewer';
import './style/appStyle.css';

const App = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="editor-container">
        <Editor text={text} handleChange={handleChange} />
      </div>
      <br/>
      <br/>
      <div className="previewer-container">
        <Previewer text={text} />
      </div>
    </div>
  );
};

export default App;
