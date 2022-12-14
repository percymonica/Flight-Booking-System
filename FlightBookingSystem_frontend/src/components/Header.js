import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';


function Header(props) {
    const history = useHistory();
    const flightuser = localStorage.getItem('user');

    
    const loggedIn = (
        
            <ul className="nav justify-content-end">
             <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-light">Home</button>
                </Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/login">
                    <button className="btn btn-outline-light">Login</button>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/register">
                    <button className="btn btn-outline-light">Register</button>
                </Link>
                </li>
            </ul>
        
    );

    const userClear = () => (
        localStorage.removeItem('user'),
        localStorage.removeItem('plane'),
        localStorage.removeItem('bid'),
        localStorage.removeItem('sid'),
        localStorage.removeItem('tickets'),
        localStorage.removeItem('nop'),
        localStorage.removeItem('ticket'),
        localStorage.clear()
    )

    
    const onTickets= () => {
       history.push('/tickets')
    }

   
    const loggedOut = (
            <ul className="nav justify-content-end">
                {}
               

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button className="btn btn-outline-light">Home</button>
                    </Link>
                </li>
                

                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1 
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/addFlight">
                        <button className="btn btn-outline-light">Add Flight</button>
                    </Link>
                </li>}


                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/allFlights">
                        <button className="btn btn-outline-light">All Flights</button>
                    </Link>
                </li>
                }

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button onClick={userClear} className="btn btn-outline-light">Logout</button>
                    </Link>
                </li>

                { localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===0 
                &&  
                <li className="nav-item nav-link text-info">
                    <h6 style={{marginTop:'7px'}}><b className='text-warning'>Welcome, {JSON.parse(localStorage.getItem('user')).username}</b></h6>
                </li>
                }

                
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/admin">
                        <button className="btn btn-outline-info">Admin</button>
                    </Link>
                </li>
                }


            </ul>
    );
    

    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <Link style={navstyle.navbar_brand} to="/">
                        Flight Booking System
                    </Link>
                       

                    { localStorage.getItem('user')  ? loggedOut : loggedIn  }
                    {}
                   
                </div>
            </nav>
        </div>
    );
};

let navstyle = {
    bg : {
        backgroundColor : "#0c60b6",
    },
    navbar_brand : {
        color: "#ffffff",
        fontSize: "x-large",
        fontFamily: "Verdana",
        fontStyle: "bold",
        textDecoration: "none"
    }

}

export default Header;