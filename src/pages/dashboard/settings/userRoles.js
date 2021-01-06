import React from 'react';
import SettingsUsers from './users';
import { userRoleTableColumns, userRoleTableData } from './data'
import { Row, Button, Col, Card, Switch, Divider } from 'antd';

function UserRoles() {
  return(
    <div className="userRoles-container">
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{span: 3 }}>
                        <p className="addRoleTitle">Roles</p>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{span: 3 }}>
                        <Button className="addRolesButton">Add roles</Button>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }} xxl={{span: 18 }}>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[0, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                        <SettingsUsers columns={userRoleTableColumns} data={userRoleTableData}/>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                        <Card className="userPermissionCard">
                            <Row gutter={[0, 24]}>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Permissions of Super Admin
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Allow
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    All
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                                <Divider style={{ marginBottom: '15px', marginTop: '15px'}}/>
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Upload Data
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                                <Divider style={{ marginBottom: '15px', marginTop: '15px'}}/>                            
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Download Data
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                            <Divider style={{ marginBottom: '15px', marginTop: '15px'}}/>
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Edit User
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                            <Divider style={{ marginBottom: '15px', marginTop: '15px'}}/>                           
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Upload Resources
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                                <Divider style={{ marginBottom: '15px', marginTop: '15px'}}/>
                            <Row>
                                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    Download Resources
                                </Col>
                                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                                    <Switch />
                                </Col>
                            </Row>
                            <Divider style={{ marginBottom: '10px', marginTop: '10px'}}/>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>  
  );
}

export default UserRoles;