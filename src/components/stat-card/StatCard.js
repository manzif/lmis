import { Card } from 'antd';
import './stat-card.scss';
import { ArrowUpOutlined, ToolOutlined } from '@ant-design/icons';

export const StatCard = ({ item }) => (
    <Card className="stat-card">
        <div className="container">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h4 className="number">{item.number}</h4>
                <span style={{ backgroundColor: '#1d84c9', width: '50px', height: '50px', borderRadius: '25px', textAlign: 'center', paddingTop: '14px' }}>
                    <ToolOutlined  style={{ fontSize: '20px' }} />
                </span>
            </div>
            <p className="title">{item.title}</p>
            <p className="percentage"><ArrowUpOutlined />{item.percentage}</p>
            <small className="date">{item.date}</small>
        </div>
    </Card>
)