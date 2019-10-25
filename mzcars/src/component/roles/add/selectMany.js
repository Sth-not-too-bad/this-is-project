import React,{Component} from 'react'

import { Checkbox, Card ,Divider} from 'antd';


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
    return (
      <Card>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            客户
          </Checkbox>

        <Divider dashed/>
        <CheckboxGroup
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </Card>
    );
  }
}

export default SelectMany