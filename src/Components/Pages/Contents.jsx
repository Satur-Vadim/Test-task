import React from 'react';
import {Route} from "react-router-dom";
import Main from "./Main/Main";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";

class Contents extends React.Component{

    render() {
        return(
            <div className='main_app'>
                <Route exact path="/" render={() => <Main />}/>
                <Route path="/settings" render={() => <Settings updateData={this.props.updateData} color={this.props.color}/>}/>
                <Route path="/messages" render={() => <Messages gettingMess={this.props.gettingMess}/>}/>
            </div>
        );
    }
}
export default Contents;