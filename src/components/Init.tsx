import ReactMarkdown from 'react-markdown';
import ProjectList from '../components/ProjectList';
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
      {/* Recoil Demo */}
      <ProjectList />
    </div>
  );
};

export default Init;
