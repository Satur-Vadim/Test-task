import React from 'react';

class Settings extends React.Component {

    render() {
        return (
            <div className='swith_color'>
                <label>Swith theme color</label>
                <button
                    onClick={() => {
                        this.props.updateData(!this.props.color);
                    }}>
                    {this.props.color ? 'black' : 'white'}
                </button>

            </div>
        );
    }
}

export default Settings;
