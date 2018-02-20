#!/usr/bin/env node

const Alfreda = require('./alfreda')
// const program = require('commander');
const speech = require('./speechModule')
const vision = require('./readImageModule')

const alfreda = new Alfreda();

alfreda.use(speech)
alfreda.use(vision)


alfreda.parse(process.argv);