import React from "react";
import { connect } from "react-redux";

import Menu from "./menu";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  };
}

export default connect(mapStateToProps)(Main);
