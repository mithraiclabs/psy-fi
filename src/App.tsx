import React from 'react';
import logo from './logo.svg';
import ReactMarkdown from 'react-markdown';
import './App.css';

const spaceRockets = `
⊹  ✦  　　　 ·　 ✹  . 🚀\n
　 　 　 · ✺  ⋆ 　 · 　\n
　    　 · 　　\n
　　.✷  　    \n
\n
 ✧　.\n
`;

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>psyoptions-euros-UI</h1>
        <h2>Coming Soon</h2>
        <div className='space-rockets'>
          <ReactMarkdown>
            {spaceRockets}
          </ReactMarkdown>
        </div>
        <h3>Status</h3>
        <ul>
          <li>Deploying the environment for the squad</li>
          <li>Default `create-react-app`</li>
          <li>Architectural mods to follow</li>
          <li>Re our most current patterns</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
