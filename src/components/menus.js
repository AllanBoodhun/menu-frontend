import React from 'react'
import Categories from './categories';
import { useContext } from "react";
import MenuContextProvider, { MenuContext } from '../context/MenuContext';
// import axios from "axios";
// import {useEffect, useState } from "react";

function Menus(props) {
    const test = useContext(MenuContext);
    console.log(test);

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
                        // onChange={ props.menusFunction(menu.id, menu.name, menu.status )}
                        />
                         {menu.name} 
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