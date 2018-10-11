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
      clearTimeout(this.timer);
      this.timer = setTimeout(NProgress.start, this.props.showAfterMs || 300);
    };

    Router.onRouteChangeComplete = () => {
      clearTimeout(this.timer);
      NProgress.done();
    };

    Router.onRouteChangeError = () => {
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

export default NProgressContainer;
