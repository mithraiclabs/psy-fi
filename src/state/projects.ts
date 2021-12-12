import data from '../content/projectList.json';
import { Project } from '../models';
import {
  atom,
  selector
} from 'recoil';

export const projectListFilterKey = atom({
  key: 'projectListFilterState',
  default: 'psyoptions'
});

export const projectList = atom<Project[]>({
  key: 'projectList',
  default: data,
});

export const selectProjectList = selector({
  key: 'selectProjectList',
  get: ({ get }) => {
    return get(projectList);
  }
});

export const selectProject = selector({
  key: 'selectProject',
  get: ({ get }) => {
    return get(projectList).filter(
      project => project.key === get(projectListFilterKey)
    )[0] as Project;
  }
});

// Occassional warning, to be reviewed (recoil is officially experimental currently)
// // Duplicate atom key "selectProject". This is a FATAL ERROR in
// //       production. But it is safe to ignore this warning if it occurred because of
// //       hot module replacement.
