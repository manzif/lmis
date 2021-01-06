import { Button } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

export const usersColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Date Joined',
    dataIndex: 'dateJoined',
    key: 'dateJoined',
  },
  {
    title: 'Last Activity',
    dataIndex: 'lastActivity',
    key: 'lastActivity',
  },
  {
    title: "Action",
    key: "action",
    render: record => (
      <div>
        <Button size='small' type="link" style={{ marginRight: 5, color: "#ffb229" }}><EditOutlined /></Button>
        <Button type="link" size='small' style={{ marginRight: 5, color: "#ff6660" }}><DeleteFilled /></Button>
      </div>
    )
  }
];

export const organizationColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Date Joined',
    dataIndex: 'dateJoined',
    key: 'dateJoined',
  },
  {
    title: 'Last Activity',
    dataIndex: 'lastActivity',
    key: 'lastActivity',
  },
  {
    title: "Action",
    key: "action",
    render: record => (
      <div>
        <Button size='small' type="link" style={{ marginRight: 5, color: "#ffb229" }}><EditOutlined /></Button>
        <Button type="link" size='small' style={{ marginRight: 5, color: "#ff6660" }}><DeleteFilled /></Button>
      </div>
    )
  }
];

export const usersData = [
  {
    key: '1',
    id: '0032',
    user: 'Kamali Jonas',
    email: 'kamali@gmail.com',
    organization: 'NISR',
    role: 'Read Only User',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '2',
    id: '0032',
    user: 'Kamali Jonas',
    email: 'kamali@gmail.com',
    organization: 'NISR',
    role: 'Read Only User',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '3',
    id: '0032',
    user: 'Kamali Jonas',
    email: 'kamali@gmail.com',
    organization: 'NISR',
    role: 'Read Only User',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '4',
    id: '0032',
    user: 'Kamali Jonas',
    email: 'kamali@gmail.com',
    organization: 'NISR',
    role: 'Read Only User',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '5',
    id: '0032',
    user: 'Kamali Jonas',
    email: 'kamali@gmail.com',
    organization: 'NISR',
    role: 'Read Only User',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
];

export const organizationData = [
  {
    key: '1',
    id: '0032',
    organization: 'NISR',
    email: 'kamali@gmail.com',
    website: 'nisr.rw',
    role: 'Data Provider',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '2',
    id: '0032',
    organization: 'NISR',
    email: 'kamali@gmail.com',
    website: 'nisr.rw',
    role: 'Regulator',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '3',
    id: '0032',
    organization: 'NISR',
    email: 'kamali@gmail.com',
    website: 'nisr.rw',
    role: 'Data Consumer',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '4',
    id: '0032',
    organization: 'NISR',
    email: 'kamali@gmail.com',
    website: 'nisr.rw',
    role: 'Data Consumer',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
  {
    key: '5',
    id: '0032',
    organization: 'NISR',
    email: 'kamali@gmail.com',
    website: 'nisr.rw',
    role: 'Data Consumer',
    dateJoined: '12/06/2020',
    lastActivity: '12/06/2020 12:00am'
  },
];


export const employmentTableData = [
  {
    key: '1',
    ageGroup: '16-25',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
  {
    key: '2',
    ageGroup: '26-35',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
  {
    key: '3',
    ageGroup: '36-45',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
  {
    key: '4',
    ageGroup: '46-55',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
  {
    key: '5',
    ageGroup: '55-65',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
  {
    key: '6',
    ageGroup: '66+',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  },
    {
    key: '7',
    ageGroup: '16+',
    male: '3,493 +8%',
    female: '3,493 +8%',
    total: '3,493 +8%'
  }
];

export const employmentTableColumns = [
  {
    title: 'age group',
    dataIndex: 'ageGroup',
    key: 'ageGroup',
  },
  {
    title: 'Male',
    dataIndex: 'male',
    key: 'male',
  },
  {
    title: 'Female',
    dataIndex: 'female',
    key: 'female',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  }
];

export const userRoleTableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Users',
    dataIndex: 'users',
    key: 'users',
  },
  {
    title: 'Permissions',
    dataIndex: 'permissions',
    key: 'permissions',
  },
  {
    key: "action",
    render: record => (
      <div>
        <Button size='small' type="link" style={{ marginRight: 5, color: "#ffb229" }}><EditOutlined /></Button>
        <Button type="link" size='small' style={{ marginRight: 5, color: "#ff6660" }}><DeleteFilled /></Button>
      </div>
    )
  }
];


export const userRoleTableData = [
  {
    key: '1',
    name: 'Super Admin',
    users: '1',
    permissions: '12'
  },
  {
    key: '2',
    name: 'Data Manager',
    users: '4',
    permissions: '11'
  },
  {
    key: '3',
    name: 'Support',
    users: '3',
    permissions: '8'
  },
  {
    key: '4',
    name: 'User',
    users: '30',
    permissions: '4'
  },
  {
    key: '5',
    name: 'Restricted User',
    users: '200',
    permissions: '2'
  },
  {
    key: '6',
    name: 'Read-Only',
    users: '3972',
    permissions: '1'
  }
];