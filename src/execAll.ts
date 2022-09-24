import { exec } from 'shelljs';
import { CommitTypeEnum, Commit_Icons } from './config/commitType';

interface BaseArg {
  commitType: CommitTypeEnum,
  message: string
}
interface CommitAllProcessArg extends BaseArg {
  originName: string;
  branch: string;
}

export const onGitCommit = (arg: BaseArg) => {
  const { commitType, message } = arg;

  exec(`git commit -m '${commitType}: ${Commit_Icons[commitType]} ${message}'`)
}

export const onGitCommitAllProcess = async (arg: CommitAllProcessArg) => {
  const { originName = 'origin', branch, commitType, message } = arg;

  exec(`git add .`, {async:true});
  onGitCommit({commitType, message});
  exec(`git push ${originName} ${branch}`);
}