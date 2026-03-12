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

## Test In A Consumer React Native Project

1. In your RN app (`react-native >= 0.80`), install this package and peers:

```bash
npm install -D @magikbee/eslint-config-magikbee-react-native @react-native/eslint-config @react-native/typescript-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-native eslint-plugin-reactotron prettier typescript
```

2. Configure the app:

- `.eslintrc`

```json
{
  "extends": ["@magikbee/eslint-config-magikbee-react-native"]
}
```

- `prettier.config.cjs`

```js
module.exports = require("@magikbee/eslint-config-magikbee-react-native/prettier")
```

- `tsconfig.json`

```json
{
  "extends": "@magikbee/eslint-config-magikbee-react-native/tsconfig"
}
```

3. Add scripts in the app `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format:check": "prettier . --check",
    "typecheck": "tsc --noEmit"
  }
}
```

4. Run the checks:

```bash
npm run lint
npm run format:check
npm run typecheck
```

5. Quick smoke test:

- Create a temporary file with bad formatting and an unused variable.
- Run `npm run lint` and `npm run format:check` and confirm errors are reported.
- Fix the file (or run prettier), rerun checks, and confirm they pass.
