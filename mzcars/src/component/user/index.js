import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Tabs, Card } from 'antd';
import AllUser from './AllUser'
import AddUser from './WaitUser'

const { TabPane } = Tabs;
class Container extends Component {
  render() {
    const { isListShow } = this.props;
    return (
      <div>
        {isListShow === true ?
          <Card>
            <AllUser />
          </Card>
          :
          <div>
            <AddUser />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isListShow: state.user.uiStatus.isListShow,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Container);