import React from 'react';

class Messages extends React.Component {

    componentWillMount() {
        this.props.gettingMess();
    }

    render() {
        return (
            <div>
                <p id='messages'/>
                <div className='messages'>
                    <button onClick={this.props.gettingMess}>Click me!</button>
                </div>
            </div>
        );
    }
}

export default Messages;