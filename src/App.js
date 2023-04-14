// import React from "react";
// import './style/appStyle.css';
// import Editor from "./component/Editor";
// import Previewer from "./component/Previewer";

// function App() {
//   return (
//     <div className="container">
//     <div className="center">
//        <Editor/>
//        <Previewer/>
//     </div>
//     </div>
    
//   );
// }

// export default App;





import React from 'react';
import Markdown from './component/Markdown';

function App() {
  const markdownText = `~hello~ 
   This is a sub-heading...   **bold**  or _bold_
  `;

  return (
    <div>
      <Markdown text={markdownText} />
    </div>
  );
}

export default App;
