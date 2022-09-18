import { exec } from 'shelljs';
import { CommitTypeEnum, Commit_Icons } from './config/commitType';

export const onGitCommit = (type: CommitTypeEnum, message: string) => {
  exec(`git commit -m '${type}: ${Commit_Icons[type]} ${message}'`)
}

export const onGitCommitAllProcess = async (type: CommitTypeEnum, message: string) => {
  exec(`git add .`, {async:true});
  onGitCommit(type, message);
  exec(`git push`);
}