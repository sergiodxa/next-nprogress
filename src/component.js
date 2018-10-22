import React from "react";
import NProgress from "nprogress";
import { withRouter } from "next/router";
import NProgressStyles from "./styles";

class NProgressContainer extends React.Component {
  static defaultProps = {
    color: "#2299DD",
    showAfterMs: 300,
    spinner: true
  };

  timer = null;

  componentDidMount () {
    const { options, router, showAfterMs } = this.props;

    if (options) {
      NProgress.configure(options);
    }

    const previousChangeStartCallback = Router.onRouteChangeStart
    const previousChangeCompleteCallback = Router.onRouteChangeComplete
    const previousChangeErrorCallback = Router.onRouteChangeError
    router.onRouteChangeStart = () => {
      if (typeof previousChangeStartCallback === "function") {
        previousChangeStartCallback();
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(NProgress.start, showAfterMs);
    };

    router.onRouteChangeComplete = () => {
      if (typeof previousChangeCompleteCallback === "function") {
        previousChangeCompleteCallback();
      }
      clearTimeout(this.timer);
      NProgress.done();
    };

    router.onRouteChangeError = () => {
      if (typeof previousChangeErrorCallback === "function") {
        previousChangeErrorCallback();
      }
      clearTimeout(this.timer);
      NProgress.done();
    };
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  render () {
    const { color, spinner } = this.props;
    return (
      <NProgressStyles color={color} spinner={spinner} />
    );
  }
}

export default withRouter(NProgressContainer);
