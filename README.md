# next-nprogress

Next.js HOC to integrate NProgress inside your app.

This is configured to run only after a delay of (default) 300ms. This means if the page change takes too long it will render the progress bar, but if it's fast enough it will avoid rendering it.

## Installation

```bash
yarn add next-nprogress
```

## Usage

### Component

Import it inside your `pages/_app.js`;

```js
import NProgress from "next-nprogress/component";
```

Render the component in your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E):

```jsx
<NProgress />
```

That's it. Now NProgress will work automatically and render the correct styles using styled-jsx.

### Higher order component

Import it inside your `pages/_app.js`;

```js
import withNProgress from "next-nprogress";
```

Wrap your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E) with it

```js
const msDelay = 1000; // default is 300
export default withNProgress(msDelay)(MyApp);
```

Internally it will use the NProgress component and render it alongside your application.

### Advanced Config

You can configure further configure NProgress using its [configuration options](https://github.com/rstacruz/nprogress#configuration).

Configure the component:

```jsx
<NProgress
  color="#29d"
  options={{ trickleSpeed: 50 }}
  showAfterMs={300}
  spinner
/>
```

Configure the HOC:

```js
const msDelay = 200;
const options = { trickleSpeed: 50 };
export default withNProgress(msDelay, options)(MyApp);
```
