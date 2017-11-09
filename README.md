# minimal-universal-node-backend

A proof of concept of a minimal node.js that can require css and image files and return the correct values as javascript objects.

This is for serverside rendering without changing the sourcecode.

Previously I have used webpack for this but sourcemaps and concatenation is a downside once the project because bigger.

This project allows you to:
- use ES2015 `import`
- importing css and get hashed css classes `{ Table5: 'app-style---Table5---3m6AY' }`
- importing image files and get a hash of the file as filename eg. `/images/mPP07vN.jpg`
- hot-loading the assets by only removing only changed assets from the require cache

This will allow you to render correct react from the backend and continue rendering in the front-end without changing anything.

## using it

```
$ yarn
```

```
NODE_ENV=development node index.js
```
