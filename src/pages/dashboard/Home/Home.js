import React from 'react';

import DashboardWelcome from './Welcome';
import DashboardTitleButton from './titleButton';
import DashboardFigures from './Figures';
import DashboardTable from './Table';
import DashboardLabour from './Labour';
import './home.scss';

const item = {
    name: 'Main Figures',
    button: 'Download'
}
const secondItem = {
    name: 'Key Labour market indicator',
    button: 'Download'
}
function Dashboard() {
  return (
    <div className="container-home">
      <DashboardWelcome/>
      <DashboardTitleButton item={item} />
      <DashboardFigures/>
      <DashboardTitleButton item={secondItem} />
      <DashboardLabour />
      <DashboardTable />
    </div>
  );
}

export default Dashboard;