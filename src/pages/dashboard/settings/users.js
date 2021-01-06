import React from 'react';

import { Table } from 'antd';

function SettingsUsers({columns, data}) {
  return(
    <div>
        <Table columns={columns}  dataSource={data} />
    </div>  
  );
}

export default SettingsUsers;