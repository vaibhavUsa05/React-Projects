import React from 'react'
import ReactDom  from 'react'
import {useState,useEffect} from 'react';
const MenuShowItems=({menudax})=>{
  const [menuApi,setMenuApi]=useState(menudax);

  return ([
    
    
 <h3>{console.log(menuApi)}</h3>,
  <div className="containerBack">
  { menuApi.map((user,index)=>{
   return (
  <div className="container" key={index}>
  <img src={user.img}/>
  <div className="europeanDish">
    <h3>{user.title}</h3>
    <h3>{user.price}</h3>
    </div>
    <span>{user.desc}</span>
    
    </div>
    )
    })
 }
 </div>
    
    
    
    
    
    ])
}
export default MenuShowItems;


