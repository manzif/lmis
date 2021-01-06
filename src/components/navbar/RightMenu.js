import React, { useState } from 'react';
import { Menu, Grid, Button } from 'antd';
import LoginForm from '../login/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../register/RegisterForm';
import { UserOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [register, setRegister] = useState(false);

  const handleCreate = (values) => {
    const { username, password } = values;
    if (username === 'test' && password === 'test') {
      setVisible(false);
      history.push('/admin/home');
    } else {
      alert('Username or password is incorrect');
    }
  };

  const handleRegister = (values) => (console.log(values));

  return (
    <Menu mode={md ? "horizontal" : "inline"} className="auth-menu">
      <Menu.Item key="1">
        <Button type="primary" icon={<UserOutlined />} className="auth-btn" onClick={() => setVisible(true)}>Log In</Button>
        <LoginForm visible={visible} onCancel={() => setVisible(false)} onCreate={handleCreate} />
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="primary" className="auth-btn" onClick={() => setRegister(true)}>Sign Up</Button>
        <RegisterForm visible={register} onCancel={() => setRegister(false)} onCreate={handleRegister} />
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;


// TODO: we will start to use once we have the endpoints
// import { Button, Grid, Menu } from 'antd';
// import React from 'react';
// import { connect } from "react-redux";
// import * as actions from '../../actions';
// import LoginForm from '../login/LoginForm';
// import RegisterForm from '../register/RegisterForm';

// // TODO: use custom hooks
// // const { useBreakpoint } = Grid;
// // const { md } = useBreakpoint();
// class RightMenu extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       showLogin: false,
//       showRegister: false
//     }

//     this.login = this.login.bind(this);
//     this.register = this.register.bind(this);
//     this.handleCreate = this.handleCreate.bind(this);
//   }

//   login(userData) {
//     this.props.dispatch(actions.login(userData));
//   }

//   register(userData) {
//     this.props.dispatch(actions.register(userData))
//   }

//   toggleModal = (type, value) => {
//     if (type === 'login') {
//       this.setState({ showLogin: value});
//     } else if (type === 'register') {
//       this.setState({ showRegister: value });
//     }
//   }

//   handleCreate = (values) => {
//     const { username, password } = values;
//     if (username === 'test' && password === 'test') {
//       this.toggleModal('login', false);
//       this.props.history.push('/admin/home');
//     } else {
//       alert('Username or password is incorrect');
//     }
//   };

//   render() {
//     // with these values, you can show error messages and loading spinner
//     const { isAuth, logging, errors } = this.props.auth;

//     return (
//       // {md ? "horizontal" : "inline"}
//       <Menu mode="horizontal" className="auth-menu">
//         <Menu.Item key="1">
//           <Button type="primary" className="auth-btn" onClick={() => this.toggleModal('login', true)}>Log In</Button>
//           <LoginForm visible={this.state.showLogin} onCancel={() => this.toggleModal('login', false)} onCreate={this.handleCreate} />
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Button type="primary" className="auth-btn" onClick={() => this.toggleModal('register', true)}>Sign Up</Button>
//           <RegisterForm visible={this.state.showRegister} onCancel={() => this.toggleModal('register', false)} onCreate={this.register} />
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//     register: state.register
//   }
// }

// export default connect(mapStateToProps)(RightMenu);