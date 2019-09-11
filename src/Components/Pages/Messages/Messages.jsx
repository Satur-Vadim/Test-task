import React from 'react';

class Messages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            iteration: 0
        };
    }

    componentDidMount() {
        this.props.gettingMess().then( () => {
            console.log('success!');
        }, function() {
            console.log('error');
        });
    }

    PlusIteration = () => {
        if (this.state.iteration === 4){
            this.setState({iteration: 0 });
        }
        else this.setState({iteration: this.state.iteration + 1 });
    };

    render() {
        return (
            <div>
                <p id='messages'>
                    {console.log(this.state.iteration)}
                    {this.props.message[this.state.iteration]}
                </p>
                <div className='messages'>
                    <button onClick={ this.PlusIteration }>Click me!</button>
                </div>
            </div>
        );
    }
}

export default Messages;