import Button from 'react-bootstrap/Button';
import NavBar from '../components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


let Profile = () =>{

    const {setToken} = useContext(UserContext)

    return(
        <>
            <NavBar/>
            <div className='mx-auto d-flex justify-content-evenly align-items-center my-3'>
                <p className='m-0 mx-3'>Usuario@mammamia.com</p>
                <Button variant="dark" onClick={()=>setToken(false)}>Cerrar Sesion</Button>
            </div>
        </>
    )
}

export default Profile