# next-subproject-example

This project aims to demonstrate how you can ship a next.js application as a node_module.

This sample project has been published to NPM as `next-subproject-example`.

1. Make a new project with the following `package.json`, which aims to consume `next-subproject-example`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cd node_modules/next-subproject-example && npm run dev",
    "build": "cd node_modules/next-subproject-example && npm run prepare"
  },
  "dependencies": {
    "next-subproject-example": "latest"
  },
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^13.9.5",
    "@types/react": "^16.9.26"
  }
}
```

2. `npm install`
3. `npm run dev`
4. `npm run build`

## How does this work?

We patch next's webpack loader in [`config.next.js`](https://github.com/evantahler/next-subproject-example/blob/master/next.config.js). By default, next.js excludes building all node_modules... but we want to! We metaprogram around the original webpack rule, and explicitly allow our node_module.
