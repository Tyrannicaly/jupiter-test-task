import C from "./main.module.css";
import I from "./Items/items.module.css";
import Search from "./Search/Search";
import { search, items } from "../../data";
import { useState, useEffect } from "react";
import Item from "./Items/Items"
import { width } from "../../helps";

let id = null;
let flak = items;

const Main = () => {
  const [currentSearch, setCurrentSearch] = useState(0);
    const [allItems, setAllItems] = useState(items);
    const [limit, setLimit] = useState(9)
    const [removeItem, setRemoveItem] = useState(null)

const removeOneItem = () => {
    const newAllItems = flak.filter(elem=>elem._id !== id )
    setAllItems(newAllItems)
}

    useEffect(()=>{
     width() > 1040 &&  window.document.addEventListener('keydown',(e)=>{
          ( e.key === 'Delete' && id) && removeOneItem()
        })
    },[])

useEffect(()=>{
id = removeItem;
flak = allItems;
},[removeItem,allItems])

  return (
    <main className={C.main}>
       
      <div className={C.C_main}>
        <Search
          search={search}
          setCurrentSearch={setCurrentSearch}
          currentSearch={currentSearch}
        />
        <div className={I.C_items}>
            {
            allItems
            .filter((e,i)=>(i < limit && (currentSearch == 0 ? true : currentSearch == e.sort) ))
            .map(e=><Item key={e._id} {...e} setCurrentSearch={setCurrentSearch} removeItem={removeItem} setRemoveItem={setRemoveItem}/>)
            }
        </div>

        <button className={C.button} onClick={()=>setLimit(limit+9)}>
            LOAD MORE
        </button>
        
      </div>
    </main>
  );
};

export default Main;
