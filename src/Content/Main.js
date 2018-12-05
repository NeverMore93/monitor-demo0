import React, { Component } from 'react';
import {Box,Text} from 'grommet';
import moment from 'moment';
import _ from 'lodash';
import {Table,TableBody,TableCell,TableHead,TableRow,Button,List,ListItem,ListItemText,Divider} from '@material-ui/core';


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
            margin:'auto'
        };

        const lableStyle={
            margin:'auto'
        };

        this.state = {
            date: new Date(),
            leftSideStyle:leftSideStyle,
            mainStyle:mainStyle,
            allStyle:allStyle,
            listStyle:listStyle,
            lableStyle:lableStyle
        };
    }

    componentDidMount() {

    }

    createTableHeadCells = () =>{
        const {date}=this.state;
        let tableHeadCells=[];
        tableHeadCells.push(<TableCell padding="none"><Text>Service Name</Text></TableCell>);
        for(let i=0;i<7;i++){
            tableHeadCells.push(<TableCell style={{width:"100px"}}><Text>{moment(date).subtract(i,'day').utc().format("DD/MM")}</Text></TableCell>)
        }
        return tableHeadCells;
    };

    createTableBodyRows=(serviceNames)=>{
        let tableBodyRows=[];
        for(let i=0;i<serviceNames.length;i++){
            tableBodyRows.push(<TableRow rowKey={i}>{this.createTableBodyCells(serviceNames[i])}</TableRow>)
        }
        return tableBodyRows;
    };


    createTableBodyCells = (serviceName) =>{
        let tableBodyCells=[];
        const healthButton=(<Button style={{backgroundColor:"green",width:"60px"}}>Running</Button>);
        const unHealthButton=(<Button style={{backgroundColor:"red",width:"60px"}}>Error</Button>);
        const buttons=[healthButton,unHealthButton];
        tableBodyCells.push(<TableCell style={{width:"100px"}}><Text>{serviceName}</Text></TableCell>);
        for(let i=0;i<7;i++){
            tableBodyCells.push(<TableCell index={i} style={{width:"100px"}}>{buttons[Math.round(Math.random())]}</TableCell>)
        }
        return tableBodyCells;
    };

    createScenarioList=(scenarios)=>{
        const {allStyle}=this.state;
        const scenarioHealth  = ['health','warning','health','health','error'];
        let scenarioList=[];
        for(let i=0;i<scenarios.length;i++){
            scenarioList.push(
                <Box style={{margin:"auto"}}>
                    <ListItem style={allStyle[`${scenarioHealth[i]}ItemStyle`]} key={i}>
                        <ListItemText primary={scenarios[i]} secondary={scenarioHealth[i]}/>
                    </ListItem>
                    <Divider/>
                </Box>
            )
        }
        return scenarioList;
    };

    render() {
        const {leftSideStyle,mainStyle,listStyle,lableStyle}=this.state;
        const scenarios  = ['AppPulse Active','AppPulse Mobile','AppPulse Trace','BSM-Login','Service Portal'];
        const scenarioHealth  = ['health','warning','health','health','error'];
        const serviceNames=["service1","service2","service3","service4","service5","service6","service7","node1","node2","node3","node4","node5"];

        return (
            <Box direction="row">
                <Box style={leftSideStyle}>
                    <Box style={{margin:"auto"}}>
                        <Text style={lableStyle} alignSelf='center' truncate={true} textAlign='center'>Internal Customer Production Farm</Text>
                        <Text style={lableStyle} alignSelf='center' textAlign='center'>Current Status: Running</Text>
                        <Text style={lableStyle} alignSelf='center' textAlign='center'>Availability: 99.9992%</Text>
                    </Box>
                    <List style={listStyle}>
                        {this.createScenarioList(scenarios)}
                    </List>
                </Box>
                <Box style={mainStyle}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {this.createTableHeadCells()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.createTableBodyRows(serviceNames)}
                        </TableBody>

                    </Table>
                </Box>
            </Box>
        );
    }
}

export default Main;
