# ESLint config for React Native projects

- Use an [extension of eslint-config-standard, made for TypeScript](https://github.com/standard/eslint-config-standard-with-typescript)

## Installing

1. In your project folder, run:

```
npm install eslint @magikbee/eslint-config-magikbee-react-native --save-dev
```

2. Create (or update) a `.eslintrc` file in your project folder with the following content:

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