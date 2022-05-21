# Install and configure [Storybook](https://storybook.js.org/docs/ember/get-started/install)

## Summary

- [Install](#install)
- [Issues](#issues)
- [Configure](#configure-tailwind-with-storybook)

## Install

```sh
npx storybook init
```

## Issues

### **_Tailwind not work with Storybook_**

![](assets%5Cissue-tailwind-not-work-wit-storybook.gif)

## Configure tailwind with storybook

1 - Install postcss

```sh
yarn add @storybook/addon-postcss
```

2 - Configure postcss in storybook

[`.storybook/main.js`](..%5C.storybook%5Cmain.js)

```javascript
  //...
  addons: [
    //... some addons
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
```

3 - Import [tailwind styles](..%5Csrc%5Cindex.css)

[`.storybook/preview.js`](..%5C.storybook%5Cpreview.js)

```javascript
import "../src/index.css";

export const parameters = {
//... configs
};
```

![](assets%5Cfix-tailwind-not-work-wit-storybook.gif)