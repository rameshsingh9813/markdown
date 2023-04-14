import React, { useState } from 'react';
import Editor from './component/Editor';
import Previewer from './component/Previewer';
import './style/appStyle.css';

const App = () => {
  const [text, setText] = useState( `
  # My Website
  
  ## About Me
  
  My name is John Smith and I'm a web developer.
  
  Check out my [portfolio](https://www.example.com) to see some of my work.
  
  Here's an example of some \`inline code\`.
  
  \`\`\`javascript
  function myFunction() {
    console.log('This is a code block.');
  }
  myFunction();
  \`\`\`
  
  - List item 1
  - List item 2
  
  > "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
  
  ![My Image](https://www.example.com/images/myimage.jpg)
  
  **This text is bold.**
  `);

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
