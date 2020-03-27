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
  "license": "ISC"
}
```

2. `npm install`
3. `npm run dev`

See that there are errors with next building the pages.

---

Observations:

- If you use `npm link` in this module and then `npm link next-subproject-example` in your project, the next project will build properly. This is not the case when installed from NPM.
