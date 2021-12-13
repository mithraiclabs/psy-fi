import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles_init from '../styles/Init.module.scss';
const spaceRockets = `
⊹  ✦  　　　 ·　 ✹  . 🚀\n
　 　 　 · ✺  ⋆ 　 · 　\n
　    　 · 　　\n
　　.✷  　    \n
\n
 ✧　.\n
`;
const Init = () => {
  return (
    <div className={styles_init.init}>
      <h1 style={{marginBottom: '20px'}}>psyoptions-euros-UI</h1>
      <p>⭐️&nbsp;&nbsp;&nbsp;<Link to='/market' style={{marginBottom: '20px'}}>Link: market component, current build focus</Link></p>
      <h2 style={{margin: '20px 0'}}>In Development</h2>
      <div className='space-rockets' style={{marginBottom: '20px'}}>
        <ReactMarkdown>
          {spaceRockets}
        </ReactMarkdown>
      </div>
      <h3 style={{margin: '20px 0'}}>Roadmap</h3>
      <ul>
        <li>Project planning</li>
        <li>First iterations blockchain setup</li>
        <li>Build out UX lo-res with mock data</li>
        <li>Hi-Res blockchain integration</li>
        <li>Devnet</li>
        <li>Hi-Res UX Iteration 1</li>
        <li>Mainnet</li>
        <li>Hi-Res UX Iteration X</li>
      </ul>
    </div>
  );
};

export default Init;
