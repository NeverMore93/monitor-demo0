import React, { Component } from 'react';
import { Layout } from 'antd';
import Headbar from './Head/Headbar';
const { Header, Content, Sider } = Layout;


class App extends Component {

    render() {
        return (
            <Layout>
                <Headbar/>
            </Layout>
        );
    }
}

export default App;
