#!/usr/bin/env node

//Above makes this a shell command, add a few items to the package json and run `npm link` to create the link
//to unlink `npm unlink`

'use strict';

const open = require ('open');
const superagent = require('superagent');
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');

program
  .version('0.0.1')
  .description('npm-package-test-deploy')

//RETRIEVE ALL MODULES AVAILABLE:::::::::::::::::

program
  .command('number') 
  .alias('n') 
  .description('enter two numbers')
  .action(function () {

    const question = [{
      type: 'input', 
      name: 'numberOne',
      message: 'enter a number',
      }
    ]

    inquirer
    .prompt(question)
    .then(answer => {
      
      console.log('You entered: ', answer.numberOne);
    })
  })

  program.parse(process.argv);

module.exports = program;