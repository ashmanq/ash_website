# Ashir's Personal Website

This repo is for the front and back end of my personal website.

The App uses a Node.js server for the back end. This uses express for routing
and is used as an API by the front end. Data is stored on a MySQL database.

The front end is run using the Vue.js JavaScript framework.

## Production Setup Notes

### Back End

The back end uses node to create a server api. This is installed using the
server cPanel GUI on my webspace. When creating a Node.js web app you have to
specify a custom Environmental Variable called 'base_uri' with a value of
the sub route of the app. E.g if the app is going to be on
www.yoursite.com/backend then the base_uri will be '/backend'.

####Notes: 

I had to change the server.js filename to app.js as the Node.js app manager
didn't use the specified application startup file and just created an app.js
file in its place. Also make sure to use Node.js version 11+ as the default is
10.19 currently.

I had to modify app.js so that if a environment value of 'base_uri' existed it
would append this value to all routes.
