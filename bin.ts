#!/usr/bin/env node

import { Alfreda } from './alfreda'
const program = require('commander');

const alfreda = new Alfreda();

program
    .version('0.0.1')
    .description('Your personal assistant');

program
    .command('speak <text>')
    .alias('s')
    .description('Make Alfreda Speak (max 240 chars)')
    .action(text => alfreda.speak(text))




program.parse(process.argv);