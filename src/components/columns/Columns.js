import imagePlaceholder from '../../assets/image-placeholder.png';
import { DownloadOutlined, EditOutlined, DeleteFilled } from '@ant-design/icons';
import { Space, Button, Tag } from 'antd';

const columns = [
    {
        title: '',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <img src={imagePlaceholder} alt="cover" />,
    },
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
      render: name => <span>{name}</span>,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: type => <Tag>E-book</Tag>,
    },
    {
        title: 'Published',
        dataIndex: 'published',
        key: 'published',
        render: published => <span>Self-publishing</span>,
    },
    {
        title: 'Date',
        dataIndex: 'created_on',
        key: 'created_on',
        render: date => date !== undefined ? <span>{date.split("T")[0]}</span> : 'Null',
    },
    {
      title: 'Action',
      dataIndex: 'download_url',
      key: 'download_url',
      render: (download_url) => (
        <a href={download_url} download>
            <Space size="middle">
                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="medium"/>
            </Space> 
        </a>
      ),
    },
];

const actions = {
    title: "Action",
    key: "download_url",
    render: (record) => (
      <div>
        <a href={record.download_url} download>
            <Button type="link" style={{ marginRight: 5, color: "#287be7" }}><DownloadOutlined style={{ fontSize: '20px' }} /></Button>
        </a>
        <Button size="middle" type="link" style={{ marginRight: 5, color: "#ffb229" }}><EditOutlined style={{ fontSize: '20px' }} /></Button>
        <Button size="middle" type="link"  style={{ marginRight: 5, color: "#ff6660" }}><DeleteFilled style={{ fontSize: '20px' }} /></Button>
      </div>
    )
}


export const getColumns = (page) => {
    if (page === 'home') {
        return columns;
    } else if (page === 'admin') {
        columns.pop();
        columns.push(actions);
        return columns;
    }
}