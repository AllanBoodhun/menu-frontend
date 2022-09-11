import axios from "axios";
import Menus from "../menus";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/";


function getApiData(API_URL){
  return axios.get(API_URL + "menus").then((response)=> response.data)
}


function Home() {
  const [menus, setMenus] = useState([]);
  const [menuName, setMenuName] = useState();


  function handleSubmit(e){
    e.preventDefault();
    const data = {
        name: menuName,
        status: false
      };
    axios.post("http://localhost:3000/api/v1/menus/", data)
    .then(res => {
        setMenus([...menus, res.data ]);
        setMenuName("");
      })
        .catch(err => console.log(err)); 
  }

  function handleUpdate(e){
    const menu_id = e.target.value;
    const newStatus = e.target.checked;
    axios.put(`http://localhost:3000/api/v1/menus/${menu_id}`, {
      status: newStatus
    }).then(response => {
      const newMenus = menus.map((menu) => {
        if (menu.id === menu_id){
          return {...menu, status: newStatus}
        }
        return menu
      });
      setMenus(newMenus);
    })
  }

  function handleDelete(e){
    const menu_id = e.target.value;
    axios.delete(`http://localhost:3000/api/v1/menus/${menu_id}`)
    .then(response => {
      const index = menus.findIndex((item)=>{
        return item.id === response.data.id;
      })
    
      const newMenus = [
        ...menus.slice(0, index),
        ...menus.slice(index + 1, menus.length)
      ];
      setMenus(newMenus);
    })
    .catch(err => console.log(err)); 
  }

  useEffect(() => {
    let mounted = true;
    getApiData(API_URL).then((items) =>{
      if(mounted){
        setMenus(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="Home">
        <h1> Menu </h1>
        <Menus menus={menus} updateFunction = {handleUpdate} deleteFunction = {handleDelete}/>

        <form className="post" onSubmit={(e) => handleSubmit(e)}>
           <input
            placeholder="Nom de la catégorie" 
            onChange={(e) => setMenuName(e.target.value)} required
            value={menuName}
           />
   
          <button type="submit">Create Post</button>
        </form>

    </div>
  );
}

export default Home;
