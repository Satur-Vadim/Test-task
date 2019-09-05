import React from 'react';

class Messages extends React.Component {

    componentDidMount() {
        this.props.gettingMess();
    }
    render() {
        return (
            <div>
                <p id='messages'>
                    {this.props.message}
                </p>
                <div className='messages'>
                    <button onClick={this.props.gettingMess}>Click me!</button>
                </div>
            </div>
        );
    }
}

export default Messages;