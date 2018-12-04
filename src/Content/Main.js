import React, { Component } from 'react';
import {Box,Text,DataTable} from 'grommet';
import {List,ListItem,ListItemText,Divider } from '@material-ui/core';
import moment from 'moment';


class Main extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    genMetadata=()=>{
        let tmp={
            name:"",
            T:""
        };
        for (let i = 1; i <= 12; i++) {
            tmp[`T-${i*5}`]="";
        }
        return tmp;
    };

    genData=(serviceNames,metadata)=>{
        let data = [];
        for(let i=0;i<serviceNames.length;i++){
            metadata["name"]=serviceNames[i];
            data.push(metadata);
        }
        return data;
    };

    render() {

        const metadata = this.genMetadata();

        const leftSideStyle={
            width:'20%'
        };

        const mainStyle={
            width:'80%'
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
        const {date}=this.state;
        const scenario  = ['AppPulse Active','AppPulse Mobile','AppPulse Trace','BSM-Login','Service Portal'];
        const scenarioHealth  = ['health','warning','health','health','error'];
        const serviceNames=["service1,service2","service3","service4","service5","service6","service6"];

        const serviceNamesData=this.genMetadata(serviceNames,metadata);

        const nowTime = moment(date).utc().format("hh:mm");
        const columns = [
            {
                property: "name",
                header: <Text>Service Name</Text>,
                primary: true,
                footer: "Total"
            },
            {
                property: "T",
                header: <Text>{nowTime}</Text>,
            }
        ];

        for (let i = 1; i <= 12; i++) {
            columns.push({
                property: `T-${i*5}`,
                header: <Text>{moment(date).subtract(i*5, 'minutes').utc().format("hh:mm")}</Text>,
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
                    <DataTable columns={columns} data={serviceNamesData} />
                </Box>
            </Box>
        );
    }
}

export default Main;
