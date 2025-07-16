import UserDetails from './UserDetails'
import UserDetailsClass from './UserDetails(class)'

const About = () => {
    return (
        <div className='about'>
            <h1>About Us Page</h1>
                <UserDetails 
                    name= {"Gopi"} 
                    age= {23}
                    location= {"Ongole"}
                    />

                    <UserDetailsClass 
                    name= {"sudheer"} 
                    age= {23}
                    location= {"Ongole"}
                    />
            </div>
    )
}

export default About;