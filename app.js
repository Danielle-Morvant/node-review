import { validateEmail, hidePhoneNumber } from './utils.js'
import chalk from 'chalk';

console.log(chalk.bgBlackBright("working app.js"));

console.log(chalk.bgWhite(validateEmail("danielle@gmail.com")));
console.log(chalk.bgGreen(validateEmail("fab@disney@hi.com")));

console.log(chalk.magenta("hello world"));

hidePhoneNumber('(543)453-7890');

