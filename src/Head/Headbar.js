import React, { Component } from 'react';
import { Layout } from 'antd';

import logo from './../mf_logo_blue.svg';
const { Header } = Layout;
class Headbar extends Component {

    render() {

        const headerStyle={
            backgroundColor:'#61dafb'
        };

        return (
            <Header className="header" style={headerStyle}>
                <img src={logo} alt="logo" />
            </Header>
        );
    }
}

export default Headbar;


