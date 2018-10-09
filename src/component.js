import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import NProgressStyles from "./styles";

class NProgressContainer extends React.Component {
  constructor (props) {
    super(props)
    this.timer = null;
  }

  componentDidMount () {
    if (this.props.nprogressOptions) {
      NProgress.configure(this.props.nprogressOptions);
    }

    Router.onRouteChangeStart = () => {
      this.clearTimer();
      this.timer = setTimeout(NProgress.start, this.props.showAfterMs || 300);
    };

    Router.onRouteChangeComplete = () => {
      NProgress.done();
      this.clearTimer();
    };

    Router.onRouteChangeError = () => {
      NProgress.done();
      this.clearTimer();
    };
  }

  clearTimer () {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render () {
    const { color = "#29d", spinner = true } = this.props;
    return (
      <React.Fragment>
        <NProgressStyles color={color} spinner={spinner} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default NProgressContainer;
