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

Wrap the page content in your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E) in it:

```jsx
<NProgress>
  {pageContent}
</NProgress>
```

That's it. Now NProgress will work automatically and will render the correct styles using styled-jsx.

### Higher order component

Import it inside your `pages/_app.js`;

```js
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
```

Wrap your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E) with it

```js
const msDelay = 300; // default is 300
export default withNProgress(msDelay)(MyApp);
```

And render `NProgressStyles` inside your App container or [layout component](https://github.com/zeit/next.js/tree/canary/examples/layout-component)

```js
// the default progress bar and spinner color is #29d, it could be changed for any CSS color
// Also, the default is to show the spinner, but that can be turned off.
<NProgressStyles color="#29d" spinner={false} />
```

### Advanced Config

You can configure further configure NProgress using its [configuration options](https://github.com/rstacruz/nprogress#configuration).

Configure the component:

```jsx
<NProgress color="#29d" nprogressOptions={{ trickleSpeed: 50 }} showAfterMs={300} spinner>
  {pageContent}
</NProgress>
```

Configure the HOC:

```js
const msDelay = 200;
const configOptions = { trickleSpeed: 50 };
export default withNProgress(msDelay, configOptions)(MyApp);
```
