#!/usr/bin/env node
const { program } = require('commander');
const api = require('./index')
const pkg = require('./package.json')

program
    .version(pkg.version)

program
    .command('add <taskName...>')
    .description('add a task')
    .action((taskName) => {
        const words = taskName.join(' ')
        api.add(words).then(() => {console.log('add succeed')}, () => {console.log('add failed')})
    });

program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(() => {console.log('clear succeed')}, () => {console.log('clear failed')})
    });

program
    .command('tasks')
    .description('show all tasks')
    .action((...args) => {
        api.showAll()
    });


// console.log(process.argv)
program.parse(process.argv)
