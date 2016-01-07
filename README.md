# bifypack-sample

[bifypack](https://github.com/dolymood/bifypack)示例

不用全局安装就可以，执行的话依赖于`npm`的`script`配置，然后通过`npm run xx`即可。

本项目的`package.json`：

```js
{
  "name": "bifypack-sample",
  "version": "0.1.0",
  "description": "bifypack示例",
  "keywords": ["bifypack-sample", "bifypack sample", "bifypack demo"],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dolymood/bifypack-sample.git"
  },
  "author": "dolymood",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/dolymood/bifypack-sample/issues"
  },
  "homepage": "https://github.com/dolymood/bifypack-sample",
  "dependencies": {
    "jquery": "^2.1.4",
    "underscore": "^1.8.3"
  },
  "devDependencies": {
    "bifypack": "^1.1.2",
    "jstify": "^0.13.0",
    "lodash.template": "^3.6.2",
    "partialify": "^3.1.5",
    "node-lessify": "dolymood/node-lessify",
    "pre-commit": "*"
  },
  "pre-commit": [
    "lint"
  ],
  "scripts": {
    "dev": "bifypack reload",
    "lint": "bifypack eslint",
    "build": "bifypack rev"
  }
}
```

然后在开发的时候只需要`npm run dev`即可；如果需要build，则执行`npm run build`。
