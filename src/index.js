import NProgress from "nprogress";
import Router from "next/router";

let delayMs = 300;
let timer = null;

// when a route change start run a timeout to init the progress bar
Router.onRouteChangeStart = () => {
  timer = setTimeout(NProgress.start, delayMs);
};

// when completed finish the progress bar and clear the timeout
Router.onRouteChangeComplete = () => {
  NProgress.done();
  clearTimeout(timer);
};

// when errored finish the progress bar and clear the timeout
Router.onRouteChangeError = () => {
  NProgress.done();
  clearTimeout(timer);
};

export default (_delayMs = delayMs) => {
  delayMs = _delayMs;

  // receive page and return it as is
  return Page => Page;
};
