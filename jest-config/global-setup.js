const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `yarn run dev`,
    launchTimeout: 50000,
    host: 'localhost',
    port: 1234,
  })
}
