import React from 'react'
import ReactDom from 'react'
import Menu from './data.js'
import {useState,useEffect} from 'react';
import MenuShowItems from './menuShowUp.jsx';
import "../App.css";
import Navbar from './navbar.jsx';
import NavbarComp from './navbarComp.jsx'
const MenuData=()=>{  
 const [menudata,MenuDataComp]=useState(Menu);
const [searchApi,setSearchApi]=useState(Menu)

const SearchFilter=(category)=>{

 const data=Menu.filter((elem)=>{
   if(elem.category===category){
     
   return elem.category===category
   }} 
   )
   
  if(category==="all"){
     setSearchApi(Menu);
     return;
   }
   if(data.length!=0){
  setSearchApi(data);
   }
}
 
 

 
 return (
   [
     <NavbarComp SearchFilter={SearchFilter}/>,
     
       <div className="containerBack">
   { searchApi.map((user,index)=>{
        return (
       <div className="container" key={index}>
       <img src={user.img}/>
        <div className="europeanDish">
           <h3>{user.title}</h3>
           <h3 className="dollarUsa">${user.price}</h3>
        </div> 
       <span>{user.desc}</span>
       
        </div>
  )})
   }
   </div>,
     
// <MenuShowItems menudax={searchApi}/>,
  // passing api from this parent component to child component MenuShowItems .
  //menudata={menudata} , LHS->normal props  && RHS ->{Menu json or Api || variable || function}.
  // props i.e LHS name can be be anything like hustlers={menudata} || greatData={menudata} or anything .
 //but  same prop name should be used in child components to render it .
  // props are frequently passed from parent to child , in rare cases they are passed from child to parent very rare 
   <h3>{console.log(searchApi)}</h3>,
    ]
   )
}
   export default MenuData;
  
 
  
  
  
  
  
  
