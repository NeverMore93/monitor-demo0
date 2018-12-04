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

        const healthItemStyle={
            backgroundColor:'green'
        };

        const warningItemStyle={
            backgroundColor:'yellow'
        };

        const errorItemStyle={
            backgroundColor:'red'
        };

        const listStyle={
            margin:'20px'
        };

        const titleStyle={
            marginTop:'10px'
        };

        const scenario  = ['AppPulse Active','AppPulse Mobile','AppPulse Trace','BSM-Login','Service Portal'];
        const scenarioHealth  = ['health','warning','health','health','error'];

        const items=scenario.map((item,index)=>{
            return(
                <ListItem style={`${scenarioHealth[index]}+ItemStyle`}>
                    <ListItemText primary={item} secondary={scenarioHealth[index]}/>
                </ListItem>
            )
        });

        return (
            <Box>
                <Box style={leftSideStyle}>
                    <Box>
                        <Text style={titleStyle} alignSelf='center' truncate={true} textAlign='center'>Internal Customer Production Farm</Text>
                        <Text alignSelf='center' textAlign='center'>Current Status: Running</Text>
                        <Text alignSelf='center' textAlign='center'>Availability: 99.9992%</Text>
                    </Box>

                    <List style={listStyle}>
                        {items}
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
