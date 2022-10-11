# ESLint config for React Native projects

- Use an [extension of eslint-config-standard, made for TypeScript](https://github.com/standard/eslint-config-standard-with-typescript)

## Installing

1. In your project folder, run:

```
npm install -D @magikbee/eslint-config-magikbee-react-native
```

2. Install peer dependencies:

```
npm install -D eslint@^8.25.0 eslint-plugin-react@^7.31.9 eslint-plugin-react-native@^4.0.0 @typescript-eslint/eslint-plugin@^5.39.0 @typescript-eslint/parser@^5.39.0 eslint-config-standard-with-typescript@^23.0.0 eslint-plugin-import@^2.26.0 eslint-plugin-n@^15.3.0 eslint-plugin-promise@^6.0.1 typescript@^4.8.4
```

3. Create (or update) a `.eslintrc` file in your project folder with the following content:

```js
{
  "extends": [
    "@magikbee/eslint-config-magikbee-react-native"
  ]
}
```

## How To Override Default Config

1. Add your custom ESLint rules directly in .eslintrc file under "rules"

## Extend TSConfig (Config required for Standard plugin)

1. Create (or update) a `.tsconfig.json` file in your project folder and add the following content: 

```json
{
  ...
  "extends": "@magikbee/eslint-config-magikbee-react-native/.tsconfig.json", 
  ...
}
```

## Integration with VSCode

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Edit VSCode settings and edit or add the following settings:

```json
//tells the ESLint extension which languages it should check
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
// avoid conflicts with eslint rules
"editor.formatOnSave": false,
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// turns on Auto Fix for ESLint
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

- User settings: applied to all workspaces.
- Workspace settings: only applied to the current workspace.