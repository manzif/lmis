import React, { useState } from 'react';
import { Menu, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';


export const Data = () => {
    const [tab, setTab] = useState('population');

    function handleClick({key}) {
        setTab(key);
    }

    function callback(key) {
        console.log(key);
    }

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item key="population"><Link to="/admin/population">Population</Link></Menu.Item>
                <Menu.Item key="employment"><Link to="/admin/data">Employment</Link></Menu.Item>
                <Menu.Item key="labour-force"><Link to="/admin/labourforce">Labour Force</Link></Menu.Item>
                <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <Button style={{ float:'right' }} type="primary">Upload</Button></Popconfirm>
            </Menu>
        </>
    )
}
