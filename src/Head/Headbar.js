import React, { Component } from 'react';
import { Image,Box,Text } from "grommet";
import logo from './../mf_logo_blue.svg';
import moment from 'moment';
class Headbar extends Component {

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

    render() {
        const { date } = this.state;
        const formattedDate = moment(date).utc().format("YYYY.MM.DD hh:mm");

        const headerStyle={
            backgroundColor:'#61dafb'
        };

        const logStyle={
            height:'40px',
            marginBottom:'10px',
            marginTop:'10px',
            marginLeft:'30px'
        };

        const verticalLineStyle={
            // border-left:'6px solid green',
            // height: 500px;
            border:'2px solid black',
            marginBottom:'auto',
            marginTop:'auto',
            height:'35px'
        };

        const dateTimeStyle={
            marginBottom:'auto',
            marginTop:'auto',
            marginRight:'20px',
            marginLeft:'auto'
        };

        const titleStyle={
            marginBottom:'auto',
            marginTop:'auto',
            marginLeft:'3px'
        };



        return (
            <Box direction='row' style={headerStyle} >
                <Image src={logo} alt="logo" style={logStyle} />
                <div style={verticalLineStyle}/>
                <Text style={titleStyle} size='xlarge'>SMAX Health Status Report</Text>
                <Box style={dateTimeStyle}>
                    <Text size='medium'>Current Time(UTC): {formattedDate}</Text>
                    <Text size='medium'>Next Maint(UTC): 2019.02.02 00:00 ~ 02:00</Text>
                </Box>

            </Box>
        );
    }
}

export default Headbar;
