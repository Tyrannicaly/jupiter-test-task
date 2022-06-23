
import C from "./items.module.css";

const Item = ({ sort, name, _id, img,removeItem, setCurrentSearch,setRemoveItem }) => {


  const border = removeItem == _id
    ? {
        border: "8px solid #16cd53",
        height: "400px",
        width: "354px",
      }
    : {};

    const clickItem = () => setRemoveItem(removeItem == _id ? null : _id)
    
   
  const bg = { background: `url(${img}) 0 0 / 100% 100% no-repeat` };
  return (
    <div className={C.item} style={{...bg,...border}} onClick={clickItem}>
      <div className={C.C_text}>
        <p className={C.sort} onClick={() => setCurrentSearch(sort)}>
          {sort}
        </p>
        <p className={C.name}>{name}</p>
      </div>
    </div>
  );
};

export default Item;
