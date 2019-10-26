import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Tabs, Card } from 'antd';
import Home from './home'
import Add from './add'

class Container extends Component {
  render() {
    const { isListShow } = this.props;
    return (
      <div>
        {isListShow === true ?
          <Card>
            <Home />
          </Card>
          :
          <div>
            <Add />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isListShow: state.roles.uiStatus.isListShow,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Container);