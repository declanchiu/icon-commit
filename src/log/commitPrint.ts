import print from './print';
import Table from 'cli-tableau';
import { COMMIT_CONFIG } from '../config/commitConfig';

const table = new Table({
  head: ['图标', '命令', '用途'],
  colWidths: [10, 12, 100],
  borders: true
})


export function onPrintCommitDes() {
  print(`commit command: `)
  COMMIT_CONFIG.forEach((commitItem) => {
    const itemTable = [commitItem.icon, commitItem.commandName, commitItem.description]
    table.push(itemTable);
  })

  print(table.toString());
}
