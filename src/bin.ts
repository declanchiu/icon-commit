#!/usr/bin/env node
import program from 'commander';
import locale from './locale';
import { onPrintCommitDes } from './log/commitPrint';
import { onGitCommit, onGitCommitAllProcess } from './execAll';

program
  .command("all")
  .description(locale.CMD_DES_ALL)
  .action(() => {
    onPrintCommitDes();
  })

program
  .command("r <commitType> <message>")
  .description(locale.CMD_DES_R)
  .action((commitType, message) => {
    onGitCommit({commitType, message});
  })

program
  .command("p <originName> <branch> <commitType> <message>")
  .description(locale.CMD_DES_P)
  .action((originName, branch, commitType, message) => {
    onGitCommitAllProcess({originName, branch, commitType, message});
  })

program.parse(process.argv);
