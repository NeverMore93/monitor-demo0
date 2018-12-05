import React, { Component } from 'react';
import {Box,Text,DataTable} from 'grommet';
import {List,ListItem,ListItemText,Divider } from '@material-ui/core';
import moment from 'moment';
import _ from 'lodash';


class Main extends Component {

    constructor() {
        super();

        const leftSideStyle={
            width:'20%'
        };

        const mainStyle={
            width:'80%',
            margin:'auto'
        };
        const allStyle={
            healthItemStyle:{
                backgroundColor:'green'
            },
            warningItemStyle:{
                backgroundColor:'yellow'
            },
            errorItemStyle:{
                backgroundColor:'red'
            }
        };

        const listStyle={
            margin:'20px'
        };

        const titleStyle={
            marginTop:'10px'
        };

        this.state = {
            date: new Date(),
            leftSideStyle:leftSideStyle,
            mainStyle:mainStyle,
            allStyle:allStyle,
            listStyle:listStyle,
            titleStyle:titleStyle
        };
    }

    componentDidMount() {

    }

    genData=(serviceNames)=>{
        let data = [];
        for(let i=0;i<serviceNames.length;i++){
            let tmp = {

            };
            tmp["name"]=serviceNames[i];
            tmp["T"]=Math.round(Math.random());
            for (let i = 1; i <= 12; i++) {
                tmp[`T_${i*5}`]=Math.round(Math.random());
            }
            data.push(tmp);
        }
        return data;
    };

    render() {
        const {date,leftSideStyle,mainStyle,allStyle,listStyle,titleStyle}=this.state;
        const scenario  = ['AppPulse Active','AppPulse Mobile','AppPulse Trace','BSM-Login','Service Portal'];
        const scenarioHealth  = ['health','warning','health','health','error'];
        const serviceNames=["service1","service2","service3","service4","service5","service6","service7"];
        const serviceNamesData=this.genData(serviceNames);
        console.log(serviceNamesData);
        const nowTime = moment(date).utc().format("hh:mm");
        const columns = [
            {
                property: "name",
                header: <Text truncate={true}>Service</Text>,
                primary: true,
            },
            {
                property: "T",
                header: <Text>{nowTime}</Text>
            }
        ];

        for (let i = 1; i <= 12; i++) {
            columns.push({
                property: `T_${i*5}`,
                header: <Text>{moment(date).subtract(i*5, 'minutes').utc().format("hh:mm")}</Text>
            })
        }

        const items=scenario.map((item,index)=>{
            return(
                <Box>
                    <ListItem style={allStyle[`${scenarioHealth[index]}ItemStyle`]} key={index}>
                        <ListItemText primary={item} secondary={scenarioHealth[index]}/>
                    </ListItem>
                    <Divider/>
                </Box>
            )
        });

        return (
            <Box direction="row">
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
                    <DataTable columns={columns} size="xlarge" resizeable={true} data={serviceNamesData} sortable={true}/>
                </Box>
            </Box>
        );
    }
}

export default Main;
