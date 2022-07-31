import chalk from 'chalk';
import print from './print';

export function printLogo() {
  const { version } = require("../package.json");
  print(
    chalk.hex('#306abe').bold(
      `
      
    ██╗ ██████╗ ██████╗ ███╗   ██╗     ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗████████╗
    ██║██╔════╝██╔═══██╗████╗  ██║    ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║╚══██╔══╝
    ██║██║     ██║   ██║██╔██╗ ██║    ██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║   
    ██║██║     ██║   ██║██║╚██╗██║    ██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║   
    ██║╚██████╗╚██████╔╝██║ ╚████║    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║   ██║   
    ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝
      
                                                                    当前版本：v${version} 
      `
    )
  )
  
}