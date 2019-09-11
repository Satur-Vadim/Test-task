import React from 'react';
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Header from "./includes/Header";
import Sidebar from "./includes/Sidebar";
import Contents from "./Pages/Contents";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            mess: ''
        };
    }

    //Changes the color of the theme when clicked.
    updateData = (color) => {
        this.setState({active: color})
    };

    //It works when you click on the button that is in the <GroupButtons /> and shows the message
    gettingMess = async () => {
        const api_url = await fetch(`https://baconipsum.com/api/?callback=?`); //Data that I get from the API
        const data = await api_url.json(); //Converting data
        this.setState({mess: data});
    };

    render() {
        let color = this.state.active ? 'white' : 'black'; //current theme color
        return (
            <BrowserRouter>
            <div className = {color + ' container row'}>
                <Header/>
                <Sidebar/>
                <Contents updateData  = {this.updateData}  color  = {this.state.active}
                          gettingMess = {this.gettingMess} message = {this.state.mess}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;


