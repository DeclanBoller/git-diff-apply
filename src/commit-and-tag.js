'use strict';

const commit = require('./commit');
const run = require('./run');

module.exports = async function commitAndTag(tag, options) {
  await commit(options);
  await run(`git tag ${tag}`, options);
};
