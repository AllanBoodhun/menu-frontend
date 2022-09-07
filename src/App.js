import './App.css';
import axios from "axios";
import Menus from "./components/menus";
import { useContext, useEffect, useState } from "react";
import MenuContextProvider, { MenuContext } from './context/MenuContext';

const API_URL = "http://localhost:3000/api/v1/";


function getApiData(API_URL){
  return axios.get(API_URL + "menus").then((response)=> response.data)
}

function App() {
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
    <div className="App">
      <MenuContextProvider>
        <h1> Menu </h1>
        <Menus menus={menus}/>

        <form className="post" onSubmit={(e) => handleSubmit(e)}>
           <input
            placeholder="Nom de la catégorie" 
            onChange={(e) => setMenuName(e.target.value)} required
            value={menuName}
           />
   
          <button type="submit">Create Post</button>
        </form>
      </MenuContextProvider>
    </div>
  );
}

export default App;
