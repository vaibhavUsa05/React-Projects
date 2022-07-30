import React from 'react'
import ReactDom from 'react';
import { useState, useEffect } from 'react';
import Menu  from './data.js';
import "../App.css";
const NavbarComp= ({SearchFilter}) => {
const [searchApi,setSearchApi]=useState(Menu)



 
  return ([
 
 <div className="navHeading">
 <button className="lunch" onClick={()=>SearchFilter("lunch")}>Lunch</button>
 <button className="breakfast"
onClick={()=>SearchFilter("breakfast")}
 >Breakfast</button>
 <button className="dinner"
 onClick={()=>SearchFilter("shakes")}
 >snacks</button>
<button className="All" 
onClick={()=>SearchFilter("All")}>All</button>
 
 
 
</div>
    ])
}
export default NavbarComp;