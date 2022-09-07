import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";


function getApiData(menu_id){
    return axios.get("http://localhost:3000/api/v1/menus/"+ menu_id +"/categories").then((response)=> response.data)
  }

  

function Categories(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      let mounted = true;
      getApiData(props.menu_id).then((items) =>{
        if(mounted){
          setCategories(items);
        }
      });
      return () => (mounted = false);
    }, []);

  return (
    <ul>
    {categories.map((categorie => {
        return(
            <li>{categorie.name}</li>
        )
    }))}
    </ul>
  )
}

export default Categories