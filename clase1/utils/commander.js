import {Command} from 'commander'

const program = new Command()

program
        .option('-p  <port>',"",8080)
        .option('--mode <mode>',"","development")

 program.parse()

export const options = program.opts()