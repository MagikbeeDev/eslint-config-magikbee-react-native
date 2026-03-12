# React Native Lint/Format/TS Baseline

Shared config package for React Native projects (`react-native >= 0.80.0`) with:

- ESLint config
- Prettier config
- TypeScript config

## Install In Consumer Project

```bash
npm install -D @magikbee/eslint-config-magikbee-react-native
```

Install peer dependencies:

```bash
npm install -D @react-native/eslint-config @react-native/typescript-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-native eslint-plugin-reactotron prettier typescript
```

## Use ESLint Config

Create/update `.eslintrc`:

```json
{
  "extends": ["@magikbee/eslint-config-magikbee-react-native"]
}
```

This shared config includes `@react-native` as the React Native baseline required by recent RN versions.

## Use Prettier Config

Create/update `prettier.config.cjs`:

```js
module.exports = require("@magikbee/eslint-config-magikbee-react-native/prettier")
```

## Use TypeScript Config

Create/update `tsconfig.json`:

```json
{
  "extends": "@magikbee/eslint-config-magikbee-react-native/tsconfig"
}
```

## Override Rules

Add custom ESLint rules in the consumer `.eslintrc`:

```json
{
  "extends": ["@magikbee/eslint-config-magikbee-react-native"],
  "rules": {
    "no-console": "off"
  }
}
```

## Integration With VSCode

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and set:

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.formatOnSave": false,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
