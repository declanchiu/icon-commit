import program from 'commander';

import print from './print';

export function registerCommand() {
  program
    .name("iconc")
    .usage('[commands] [options]')
    .arguments('<cmd>')
    .action((cmd) => {
      console.log("cmd", cmd);
    })

  program.on('--help', function () {
    print('Examples:');
    print(' $iconc -a');
    print(' $iconc --feat 新增一个功能模块');
  })

  program.parse(process.argv);
}