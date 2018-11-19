# Create React App Material-UI, TypeScript, Redux and Routing, Theme, Language

# Usuage

## Prefix
```
yarn install
```

#### 1. Run dev-server

```
yarn start
```

#### 2. Build

```
yarn build
```

#### 3. Run server from build

```
yarn start:server
```

# Tips

### Vscode
Code > Preferences > Settings.
Add some lines below for autoFix(tslint)
``` js
{
    "tslint.autoFixOnSave": true,
    "tslint.configFile": "./tslint.ide.json"
}
```

### Redux

Add extension redux in chrome at [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### React

Add extension react in chrome at [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### Create module/app by using 'zkr' CLI (feature comming soon)

#### Install

```
npm install --global zkrn
```


#### Usage

```
zkr module create [nameApp]
```


# Todo

## Webpack

+ [ ] Remove unused css
+ [x] Remove unused js
+ [x] GZip js
+ [x] Convert scss -> css
+ [x] Adding analyze size of bundle.js -> css

## Test

+ [ ] Config Jest
+ [ ] Add Jest

## Theme

+ [x] Add Theme SCSS

### Language

+ [x] Add Language (react-i18n)

### Redux

+ [x] Add redux
+ [ ] Add saga
