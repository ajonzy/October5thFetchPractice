import React from 'react'
import { NavLink } from "react-router-dom"

export default function navbar(props) {
   return (
       <div className='navbar-wrapper'>
           <NavLink to="/books">Books</NavLink>
           <NavLink to="/add-book">Add Book</NavLink>
       </div>
   )
}