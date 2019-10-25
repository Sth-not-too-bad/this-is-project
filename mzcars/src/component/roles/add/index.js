import React, { Component } from 'react'
import SelectMany from './selectMany'
import { Card, Table, Spin, Button, PageHeader, Divider, Select, message, Checkbox } from 'antd'
import { Row, Col, Form, Input, DatePicker } from 'antd';
import { actions, asyncGet } from '../models';
import { connect } from 'react-redux';

const FormItem = Form.Item;
const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

export const formItemLayout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 14,
    },
};
class AddRoles extends Component {
    handleChange = (value) => {
        console.log(value)
    }
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    /**
     * 返回
     */
    handleBack = () => {
        this.props.form.resetFields();
        this.listShow();
    }

    listShow = () => {
        message.success('成功');
        this.props.listShow();
        this.props.clearItem();
    }


    /**
     * 保存
     */
    handleSave = () => {
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                values.key = Math.random() * 10000;
                this.props.addList([values]);
                this.listShow();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { item } = this.props;
        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    //onBack={() => { this.props.history.push('/cars/set/roles') }}
                    //onClick={this.jump.bind(this,'/cars/set/roles/addroles')}
                    title="添加角色"
                />

                <Card>
                    <Form onSubmit={this.handleOk}>
                        <Row className="c_searchBox">
                            <div style={{ textAlign: 'right' }}>
                                <Button type="default" style={{ margin: '0px 10px 10px' }} onClick={this.handleBack}>返回</Button>
                            </div>
                            <Row>
                                <Col span={12}>
                                    <FormItem label="角色名字"  {...formItemLayout} >
                                        {getFieldDecorator('name', {
                                            initialValue: item.name,
                                        })(<Input style={{ width: '100%', marginLeft: '60%' }} placeholder="角色名字" />)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <FormItem label="操作权限" {...formItemLayout} >
                                        {getFieldDecorator('action', {
                                            initialValue: item.action,
                                        })(
                                            <CheckboxGroup style={{ width: '400px' }} >
                                                <Row style={{ marginTop: '10px' }}>
                                                    <Row>
                                                        <Col span={3}>
                                                            <span>应用:</span>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Checkbox value="雷达销售">雷达销售</Checkbox>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Checkbox value="雷达管理">雷达管理</Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            </CheckboxGroup>,
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <FormItem label=" " {...formItemLayout} >
                                        {getFieldDecorator('action2', {
                                            initialValue: item.action2,
                                        })(
                                            <CheckboxGroup style={{ width: '400px' }} >
                                                <Row style={{ marginTop: '10px' }}>
                                                    <Row>
                                                        <Col span={3}>
                                                            <span>客户:</span>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Checkbox value="客户新增">客户新增</Checkbox>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Checkbox value="客户删除">客户删除</Checkbox>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Checkbox value="客户查看">客户查看</Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            </CheckboxGroup>,
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <FormItem label="数据权限"  {...formItemLayout}>
                                        {getFieldDecorator('role', {
                                            initialValue: item.role,
                                        })(
                                            <Select style={{ width: '100%' }} placeholder="请选择数据权限">
                                                <Option value={'全公司'}>全公司</Option>
                                                <Option value={'部门'}>部门</Option>
                                                <Option value={'个人'}>个人</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Col style={{ textAlign: 'center' }}>
                                    <Button type="primary" onClick={this.handleSave} style={{ margin: '0 20px' }}>提交</Button>
                                </Col>
                            </Row>
                        </Row>
                    </Form>
                </Card>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    item: state.roles.item,
});
const mapDispatchToProps = dispatch => ({
    addList: params => dispatch(actions.add(params)),
    listShow: () => dispatch(actions.changeUiStatus({ isListShow: true })),
    clearItem: () => dispatch(actions.changeItems({})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Form.create({
        name: 'roles',
    })(AddRoles)
);
