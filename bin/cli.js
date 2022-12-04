// shebang
#!/usr/bin/env node

// imports
import minimist from 'minimist';
import { roll } from '../lib/roll.js';

const args = minimist(process.argv.slice(2));

// setting values for vars
var sides = 6;
var dice = 2;
var rolls = 1;

// changes if args. true
if (args.sides) {
    var sides = args.sides
}

if(args.dice) {
    var dice = args.dice
}

if(args.rolls) {
    var rolls = args.rolls
}

console.log(roll(sides, dice, rolls))
