import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Table, Button } from 'antd'
import { actions } from '../models';
//import {Item} from 'rc-menu'
class UserList extends Component {

    columns = [
        {
            title: '角色名称',
            dataIndex: 'name',
            width: 170,
            height: 80,
            key: 'name',
        },
        {
            title: '角色数据权限',
            dataIndex: 'role',
            width: 400,
            height: 80,
            key: 'role',
        },
        {
            title: '操作',
            dataIndex: 'action',
            width: 200,
            height: 80,
            key: 'right',
            render: (text, record) => {
                return (
                    <div>
                        <Button size='small' type='primary' onClick={() => this.onShow(record)}>编辑</Button>
                        <Button size='small' type='primary' onClick={() => this.onShow(record)}>查看</Button>
                        <Button size='small' type='danger' onClick={() => this.onDel(record)}>删除</Button>
                    </div>
                )
            }
        }
    ]
    dataSource = [
        { name: "超级管理员", role: "全公司", key: 1 },
        { name: "管理员", role: "全公司", key: 2 },
        { name: "超级管理员", role: "全公司", key: 3 },
        { name: "管理员", role: "全公司", key: 4 },
        { name: "超级管理员", role: "全公司", key: 5 },
        { name: "管理员", role: "全公司", key: 6 },
        { name: "超级管理员", role: "全公司", key: 7 },
        { name: "管理员", role: "全公司", key: 8 },
        { name: "超级管理员", role: "全公司", key: 9 },
        { name: "管理员", role: "全公司", key: 10 },
        { name: "超级管理员", role: "全公司", key: 11 },
        { name: "管理员", role: "全公司", key: 12 },
    ]

    onDel = item => {
        console.log(item)
        this.props.delList(item.key);
    }

    onShow = item => {
        this.props.changeItem(item);
        this.props.listHide();
    }

    jump = () => {
        this.props.listHide();
    }
    render() {
        let { list } = this.props;
        return (
            <div>
                <Card>
                    <Button size="large" type="primary" className="addUser" onClick={this.jump.bind(this, '/cars/set/roles/addroles')}>添加角色权限</Button>
                    <Table
                        width="800"
                        dataSource={list}
                        columns={this.columns}
                    >

                    </Table>
                </Card>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    list: state.roles.list,
});

const mapDispatchToProps = dispatch => ({
    listHide: () => dispatch(actions.changeUiStatus({ isListShow: false })),
    delList: params => dispatch(actions.del(params)),
    changeItem: params => dispatch(actions.changeItems(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
