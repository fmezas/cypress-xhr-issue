## Set up

1. Start up server

`cd server && npm install && npm start`

2. Start up client

`cd client && npm install && npm run start`

3. Start up cypress

`cd ui-tests && npm install && ./node_modules/.bin/cypress open`

## Reproduce issue

Open `test1.js` in cypress. You will see an XHR request that receives a response with code 200 according to the browser, but cypress will continue waiting for a response eventually timing out in `cy.wait`
