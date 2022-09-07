import React from 'react'
import Categories from './categories';
import { useContext } from "react";
// import axios from "axios";
// import {useEffect, useState } from "react";

function Menus(props) {

  return (
    <div>
        <h2>Voici les menus </h2>
        <ul>
        {
            props.menus.map((menu) => {
                return (
                    <div>
                    <li key={menu.id}>
                        <input 
                        type="checkbox" 
                        checked={menu.status ? "checked": ""} 
                        value = {menu.id}
                        onChange={ props.updateFunction}
                        />
                         {menu.name} 
                         <button
                         onClick={props.deleteFunction}
                         value = {menu.id}>
                            X
                         </button>
                         <Categories menu_id={menu.id}/>
                        
                    </li>
                    </div>
                )
                
            })
        }
        </ul>
    </div>
  )
}

export default Menus