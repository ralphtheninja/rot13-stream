#!/usr/bin/env node
var rot13 = require('..')();
process.stdin.pipe(rot13).pipe(process.stdout);
