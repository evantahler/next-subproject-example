# next-subproject-example

This project aims to demonstrate how you can ship a next.js application as a node_module.

This sample project has been published to NPM as `next-subproject-example`.

1. Make a new project with the following `package.json`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cd node_modules/next-subproject-example && npm run dev"
  },
  "dependencies": {
    "next-subproject-example": "latest"
  },
  "devDependencies": {
    "@types/node": "^13.9.5",
    "@types/react": "^16.9.26"
  }
  "license": "ISC"
}
```

2. `npm install`
3. `npm run dev`

See that there are errors with next building the pages.

```
[ error ] ./pages/index.tsx 2:9
Module parse failed: Unexpected token (2:9)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| export default function Index() {
>   return <h1>Hello from Next</h1>;
| }
|
```

---

Observations:

- If you use `npm link` in this module and then `npm link next-subproject-example` in your project, the next project will build properly. This is not the case when installed from NPM.
