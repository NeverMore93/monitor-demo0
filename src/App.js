import React, { Component } from 'react';
import { Layout } from 'antd';
import Headbar from './Head/Headbar';
import Main from './Content/Main';

const { Header, Sider } = Layout;


class App extends Component {

    render() {
        return (
            <Layout>
                <Headbar/>
                <Main/>
            </Layout>
        );
    }
}

export default App;
