import React, { Component } from 'react';
import {Box,Text,DataTable} from 'grommet';
import {List,ListItem,ListItemText,Divider } from '@material-ui/core';


class Main extends Component {

    render() {

        const leftSideStyle={
            width:'20%'
        };

        const mainStyle={
            width:'80%'
        };

        const healthItem={
            backgroundColor:'green'
        };

        const unhealthItem={
            backgroundColor:'yellow'
        };

        const errorItem={
            backgroundColor:'red'
        };

        const listStyle={
            margin:'20px'
        };

        const titleStyle={
            marginTop:'10px'
        };


        return (
            <Box>
                <Box style={leftSideStyle}>
                    <Box>
                        <Text style={titleStyle} alignSelf='center' truncate={true} textAlign='center'>Farm:Internal Customer Production Farm</Text>
                        <Text alignSelf='center' textAlign='center'>Current Status: Running</Text>
                        <Text alignSelf='center' textAlign='center'>Availability: 99.9992%</Text>
                        <Text alignSelf='center' truncate={true} textAlign='center'>Next Maint.(UTC): 2019/02/02 00:00 ~ 02:00</Text>

                    </Box>
                    <List style={listStyle}>
                        <ListItem style={healthItem}>
                            <ListItemText primary="AppPulse Active" secondary="health"/>
                        </ListItem>
                        <Divider />
                        <ListItem style={unhealthItem}>
                            <ListItemText primary="AppPulse Mobile" secondary="unhealth"/>
                        </ListItem>
                        <Divider />
                        <ListItem style={healthItem}>
                            <ListItemText primary="AppPulse Trace" secondary="health"/>
                        </ListItem>
                        <Divider />
                        <ListItem style={healthItem}>
                            <ListItemText primary="BSM-Login" secondary="health"/>
                        </ListItem>
                        <Divider />
                        <ListItem style={errorItem}>
                            <ListItemText primary="Service Portal" secondary="error"/>
                        </ListItem>
                    </List>
                </Box>
                <Box style={mainStyle}>
                    <DataTable>

                    </DataTable>
                </Box>
            </Box>
        );
    }
}

export default Main;
