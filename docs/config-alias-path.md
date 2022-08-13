# Create a paths alias

This feature is util for avoid imports in deep layers of application

Replace this:

```ts
import { Loading } from '../../../components/Loading'
```

for this:

```ts
import { Loading } from '@/components/Loading'
```

## Summary

- [Define alias](#define-alias)

- [Define path alias for work with Vite](#define-path-alias-for-work-with-vite)

- [Define path alias for work with Storybook](#define-path-alias-for-work-with-storybook)

- [References](#references)

## Define alias

1 - Create in root project a file named `ts.config.paths.json`

`ts.config.paths.json`

```json
ts.config.paths.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2 - In file `ts.config.json` extends the file `ts.config.paths.json`

```json
{
  "compilerOptions": {
    // ...some-options
  },
  // ...some-options
  "extends": "./tsconfig.paths.json"
}
```

Now the typescript understand our paths, but the webpack don't known. We go setting our manager application

## Define path alias for work with [Vite](https://vitejs.dev/)

`vite.config.ts`

```ts
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(\_\_dirname, "./src")
    }
  },
  plugins: [react()],
});
```

## Define path alias for work with [Storybook](https://storybook.js.org/)

`.storybook/main.js`

```ts
const path = require('path')

module.exports = {
  //...some-options
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },
}
```

## References

- [How to Configure a Path Alias in a React Typescript App for cleaner imports](https://plusreturn.com/blog/how-to-configure-a-path-alias-in-a-react-typescript-app-for-cleaner-imports/)

- [Import Aliases in Vite](https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/)

- [How to resolve a path alias in Storybook](https://plusreturn.com/blog/how-to-resolve-a-path-alias-in-storybook/)
