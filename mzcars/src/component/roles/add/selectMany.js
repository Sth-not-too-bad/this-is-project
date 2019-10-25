import React, { Component } from 'react'

import { Checkbox, Card, Divider } from 'antd';


const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class SelectMany extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
    console.log(this.state.checkedList)
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    const { name, _plainOptions, _defaultCheckedList } = this.props;
    return (
      <Card>
        <Checkbox
          indeterminate={this.state.indeterminate}
          onChange={this.onCheckAllChange}
          checked={this.state.checkAll}
        >
          {name}
        </Checkbox>

        <Divider dashed />
        <CheckboxGroup
          options={_plainOptions}
          value={_defaultCheckedList}
          onChange={this.onChange}
        />
      </Card>
    );
  }
}

export default SelectMany