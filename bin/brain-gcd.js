#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {helloName} from '../src/cli.js';
import {brainGcd} from '../games/games-gcd.js';

helloName();
brainGcd();
