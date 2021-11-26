
import { Link } from 'react-router-dom';
import styles from '../styles/ProjectList.module.scss';
import {
  // useRecoilState,
  useRecoilValue
} from 'recoil';
import {
  // projectListFilterKey,
  selectProjectList
 } from '../state';

const ProjectList = () => {
  // const [filter, setFilter] = useRecoilState(projectListFilterKey);
  const projects = useRecoilValue(selectProjectList);
  return (
    <div className={styles['project-list']}>
      <h1>Recoil Demo</h1>
      <section>
        <ul>
          {projects.map((item, i) => {
            return (
              <li key={i}>
                <Link to='/contributor'>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
};

export default ProjectList;
