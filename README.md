# VUE 3 components library sample

This is a sample with a few components to demonstrate how to implement a library of components for vue 3 with vite, ts, cypress and storybook.

under components' dir you'll find each component on its own dir with the storybook and cypress files.


## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

```sh
yarn test:unit # or `npm run test:unit:ci` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn build
yarn test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
