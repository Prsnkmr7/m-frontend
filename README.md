# Shared App

This example is written using webpack5 module federation to share components at runtime
This example demos a basic host application loading remote component.

## Application Details
home - standalone application - home for many components

pdp - standalone application

cart - standalone application

addtocart - standalone application

server - standalone application for Server side code in next js

### Running Details
localhost:3000 (HOST) - home

localhost:3001 (STANDALONE REMOTE) - pdp

localhost:3002 (STANDALONE REMOTE) - cart

localhost:3003 (STANDALONE REMOTE) - addtocart

localhost:8080 (STANDALONE REMOTE) - server
