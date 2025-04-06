#!/usr/bin/env node

import {helloName} from '../src/cli.js';
import brainEven from '../bin/brain-even.js';
import readlineSync from 'readline-sync';

helloName();
brainEven();
