'use strict';

const run = require('./run');

module.exports = async function gitInit(options) {
  await run('git init', options);
  await run('git config user.email "you@example.com"', options);
  await run('git config user.name "Your Name"', options);

  // ignore any global .gitignore that will mess with us
  await run('git config --local core.excludesfile false', options);
};
