import React from 'react';

class UserDetailsClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    render() {
        const { count } = this.state;
        return (
            <div className='user_details'>
                <h1>this is calss</h1>
                <h1>Name: {this.props.name}</h1>
                <h1>Age: {this.props.age}</h1>
                <h1>Location: {this.props.location}</h1>

                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    // this.setState((prevState) => ({ count: prevState.count + 1 }));
                    this.setState({count: this.state.count+1})
                }}>count</button>
            </div>
        )
    }
}

export default UserDetailsClass;