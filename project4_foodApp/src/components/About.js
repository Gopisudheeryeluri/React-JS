import {useState, useEffect } from 'react'
import UserDetails from './UserDetails'
import UserDetailsClass from './UserDetails(class)'
import useUserDetails from '../utils/useUserDetails';

const About = () => {

    const userDetails = useUserDetails();
    return (
        <div className='about'>
            {/* <h1>About Us Page</h1>
                <UserDetails 
                    name= {"Gopi"} 
                    age= {23}
                    location= {"Ongole"}
                    />

                    <UserDetailsClass 
                    name= {"sudheer"} 
                    age= {23}
                    location= {"Ongole"}
                    /> */}
                    <div>
                        <img src={userDetails?.avatar_url}/>
                        <p>name: {userDetails?.name}</p> 
                        <p>location: {userDetails?.location}</p>
                    </div>
            </div>
    )
}

export default About;