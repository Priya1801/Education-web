import React from 'react';
import "./Style.css";

 const Navbar = ({filterItem,subList}) =>{
    return (
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filterItem("Data Structures & Algorithms")}>Data Structures & Algorithms</button>
                <button className='btn-group__item' onClick={() => filterItem("Operating System")}>Operating System</button>
                <button className='btn-group__item' onClick={() => filterItem("DBMS")}>DBMS</button>
                <button className='btn-group__item' onClick={() => filterItem("Computer Networks")}>Computer Networks</button>
                <button className='btn-group__item' onClick={() => filterItem("OOPS")}>OOPS</button>
            </div>
        </nav>
    )
}

export default Navbar;
