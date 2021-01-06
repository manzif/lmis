import React from 'react';
import { Tabs, Button, Table } from 'antd';
import { getColumns } from '../../../components/columns/Columns';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import './resources.scss';

const { TabPane } = Tabs;

const UploadBtn = <Button style={{ backgroundColor: "#ffffff", borderColor: "#1d84c9", borderRadius: "6px", color: "#1d84c9" }}>Upload</Button>;
class DashboardResources extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchResources());
  }

  render() {
    let resources = [];
    const { fetching, resources:data } = this.props.resources;

    // adding key object to resource object
    if (data.length > 0) {
      resources = data.map((elt) => {
          const res = Object.assign({}, elt);
          res.key = elt.id;
          return res;
      });
    }

    return(
      <div className="dashboardSettings">
        <Tabs tabBarExtraContent={UploadBtn}>
          <TabPane tab="My Resources" key="1">
              <Table columns={getColumns('admin')}  dataSource={resources} loading={fetching} className="resource-table"/>
          </TabPane>
          <TabPane tab="All Resources" key="2">
              All Resources
          </TabPane>
        </Tabs>
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
      resources: state.resources
  }
}

export default connect(mapStateToProps)(DashboardResources);