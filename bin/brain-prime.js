#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {helloName} from '../src/cli.js';
import {brainPrime} from '../games/games-prime.js';

helloName();
brainPrime();
