# DEPENDENCY LISTING

## Requirements

Everytime an dependency is added, the reason for adding it should be written down here. E.g. purpose, etc.

### Component
[**@blueprintjs**](https://blueprintjs.com/)

	The core framework UI including basic components

[**recompose**](https://github.com/acdlite/recompose)

	A React utility belt for function components and higher-order components.
	Very helpful in Functional Programming

[**@storybook**](https://github.com/storybooks/storybook)

	Storybook runs outside of your app. This allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed.


[**formik**](https://github.com/jaredpalmer/formik)

	Working with form (could be intergrated redux)

[**react-sidebar**](https://github.com/balloob/react-sidebar)

	Create a sidebar 

[**react-vega**/ **vega**]

	Draw charts for React(**Warning**: It's not supporting Typescript now, we're using it without type)



### Logic

#### Redux

[**immer**](https://github.com/mweststrate/immer)

	Like immutable but without API

[**redux-packaged**](https://github.com/tomzaku/redux-packaged)

	Wrappable redux (Writed for purposing: Component Base Architecture)

[**redux-saga**](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)

	The middleware to handle async in redux

[**reselect**]()

	Tool to help selector /get state

[**redux-persist**]()

	Tool to sync data from localStorage and redux's state

[**connected-react-router**](https://github.com/supasate/connected-react-router)

	Add router state in redux

[**seamless-immutable**]() **Deprecated

	Will remove this packaged in the next version, replaced by immer



### Style/ CSS

#### CSS

[flexboxgrid](https://getbootstrap.com/docs/4.0/layout/grid/)

	Adding className based on bootstrap


[include-media](https://include-media.com/)

	Sass library for writing CSS media queries in an easy and maintainable way, using a natural and simplistic syntax.

#### JSS

[react-responsive](https://github.com/contra/react-responsive)
	Using Media Query for JS

### HTTP/ Route

[**axios**](https://github.com/axios/axios)

	Promise based HTTP client for the browser and node.js

[**react-router**](https://reacttraining.com/react-router/core/guides/philosophy)

	Router for main app



### Tool/ Helper

[**ramda**](https://ramdajs.com/docs/)

Same as lodash used in Functional Programming



### Development (Webpack/ Type)

#### Webpack

[**autoprefixer**](https://github.com/postcss/autoprefixer)

	PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values

[**duplicate-package-checker-webpack-plugin**]()

	Remove dupplicated package in node_modules

[**error-overlay-webpack-plugin**]()

	Catch error with style used in react

[**optimize-css-assets-webpack-plugin**](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

	A Webpack plugin to optimize \ minimize CSS assets.
	It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified).
	
[**webpack-bundle-analyzer**]()

	Help you analyze bundle.js size

### Test and dubugger

[jest]()

	Test appplication

[**logrocket**]()

	Catch user tracking the app



### Others

[**react-intl**]()

Support multi languages i18n
