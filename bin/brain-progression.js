#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {helloName} from '../src/cli.js';
import {brainProgression} from '../games/games-progression.js';

helloName();
brainProgression();