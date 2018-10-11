import React from "react";
import NProgress from "nprogress";
import { withRouter } from "next/router";
import NProgressStyles from "./styles";

class NProgressContainer extends React.Component {
  constructor (props) {
    super(props)
    this.timer = null;
  }

  componentDidMount () {
    const { nprogressOptions, router, showAfterMs = 300 } = this.props;

    if (nprogressOptions) {
      NProgress.configure(nprogressOptions);
    }

    router.onRouteChangeStart = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(NProgress.start, showAfterMs);
    };

    router.onRouteChangeComplete = () => {
      clearTimeout(this.timer);
      NProgress.done();
    };

    router.onRouteChangeError = () => {
      clearTimeout(this.timer);
      NProgress.done();
    };
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  render () {
    const { color = "#29d", spinner = true } = this.props;
    return (
      <NProgressStyles color={color} spinner={spinner} />
    );
  }
}

export default withRouter(NProgressContainer);
