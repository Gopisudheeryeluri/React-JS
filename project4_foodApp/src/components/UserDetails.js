import {useState} from 'react';

const UserDetails = (props) => {
    const [count, setCount] = useState(0);
    return (
        
        <div className='user_details'>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Location: {props.location}</h1>
        

            <h1>{count}</h1>
            <button onClick = {() => {setCount(count+1)}}>count</button>
        
        </div>

        
    )
}

export default UserDetails;