#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {helloName} from '../src/cli.js';
import {brainCalc} from '../games/games-calc.js';

helloName();
brainCalc();


/*
sudo npm rm -g
npm init
npm link --dry-run
chmod +x bin/brain-even.js
chmod +x bin/brain-calc.js
npm publish --dry-run
sudo npm link
*/