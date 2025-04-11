#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {helloName} from '../src/cli.js';
import {brainProgression} from '../games/games-progression.js';

helloName();
brainProgression();

/*
sudo npm rm -g
npm init
npm link --dry-run
chmod +x bin/brain-even.js
chmod +x bin/brain-calc.js
chmod +x bin/brain-gcd.js
chmod +x bin/brain-progression.js
npm publish --dry-run
sudo npm link
*/