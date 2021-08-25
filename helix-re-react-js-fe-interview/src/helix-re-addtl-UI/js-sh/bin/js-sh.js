#!/usr/bin/env node

const commander = require('commander');
const shell = require('shelljs');

const package = require('../package.json');

const program = new commander.Command();

program
  .command('toc')
  .option('-s, --source <file>', 'File where we want to insert table of contents.', 'README.md')
  .description('Inserts table of contents into file. The target file must include comment tags `<!--js-sh-toc-start-->` and `<!--js-sh-toc-end-->`.')
  .action((cmd) => {
    const pwd = shell.pwd();
    const pathToPackage = pwd.endsWith('js-sh')
      ? '/'
      : `/node_modules/${package.name}/`;
    const path = `${pwd + pathToPackage}scripts/toc.sh`;

    if (shell.exec(`sh ${path} --insert ${cmd.source}`).code !== 0) {
      shell.echo(`js-sh: Could not insert table of contents into ${cmd.source}`);
      shell.exit(1);
    }

    if (shell.exec(`git add ${cmd.source}`).code !== 0) {
      shell.echo(`js-sh: Could not stage ${cmd.source} for commit.`);
      shell.exit(1);
    }
  });

program.parse(process.argv);
