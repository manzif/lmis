import React, { useState } from 'react';
import { Collapse, Checkbox, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Panel } = Collapse;

const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        // event.stopPropagation();
      }}
    />
);
const popUp = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        // event.stopPropagation();
      }}
    />
);
export const SiderLayout = () => {
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

    const data = [ 
        {
            title: 'Status in employment',
            range: [
                {
                    name: 'Employed'
                },
                {
                    name: 'Unemployed'
                }
            ],
        },
        {
            title: 'Gender',
            range: [
                {
                    name: 'Male'
                },
                {
                    name: 'Female'
                }
            ]
        },
        {
            title: 'Age',
            range: [
                {
                    name: '16-25'
                },
                {
                    name: '26-35'
                },
                {
                    name: '46-55'
                },
                {
                    name: '56-65'
                }
            ]
        },
        {
            title: 'Sector',
            range: [
                {
                    name: 'Gasabo'
                },
                {
                    name: 'Kicukiro'
                }
            ]
        },
        {
            title: 'Region',
            range: [
                {
                    name: 'Northern',
                },
                {
                    name: 'Southern'
                }
            ]
        },
        {
            title: 'Occupation',
            range: [
                {
                    name: 'Engineer'
                },
                {
                    name: 'Doctor'
                }
            ]
        },
        {
            title: 'Hours of work per week',
            range: [
                {
                    name: 'Less than 40 hours'
                },
                {
                    name: '40 hours'
                },
                {
                    name: 'Greater than 40 hours'
                }
            ]
        },
        {
            title: 'Status',
            range: []
        },
        {
            title: 'Broad economic sector',
            range: []
        }
    ]

    return (
        <>
            <Layout>
                <Sider theme="light" width="300">
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={callback}
                        expandIconPosition='right'
                        >
                        { data.length > 0  && data.map((category, index) => (
                            <React.Fragment key={index}>
                                <Panel showArrow={false} header={<Checkbox onChange={onChange}>{category.title}</Checkbox>} key={category.title} extra={genExtra()}>
                                    {category.range.map((item, i) => (<p key={i}><Checkbox>{item.name}</Checkbox></p>))}
                                </Panel>
                            </React.Fragment>
                        )) }
                    </Collapse>
                </Sider>
            </Layout>
        </>
    )
}
