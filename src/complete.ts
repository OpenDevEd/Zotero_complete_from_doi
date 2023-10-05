import { Command } from 'commander';
import { DoiComplete,CommanderOptions} from './DoiComptele';



const program = new Command();

program.version('0.0.1');

program
  .option('-d, --debug', 'debug')
  .option('--quiet', 'do not print output to command line');

async function runner(
  fn: (values: CommanderOptions,options:any) => Promise<void>,
  values: CommanderOptions,options:any
) {
  await fn( values,options);
}

program
  .command('from-doi <doi...>')
  .description(
    'Add item to collection from DOI. Item must be journal articles.'
  )
  .option('-t --test', 'test mode')
  .action(async (values,options) => {
    runner(DoiComplete, values,options);
  });

program.parse(process.argv);
