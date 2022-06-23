
import { width } from "../../../helps";
import C from "./search.module.css";
import arrow from "./Triangle.svg"

const Search = ({search,currentSearch,setCurrentSearch}) => {


const w = width(); 
    return <div className={C.search}>
{
    w > 1040 
    ? <>
    <button
             onClick={()=>setCurrentSearch(0)} 
             className={C.search_button+' '+ (currentSearch == 0 ? C.active : '')}
             >Show All</button>

            {search.map(srch=> <button
             key={srch} 
             onClick={()=>setCurrentSearch(srch)} 
             className={C.search_button+' '+ (currentSearch == srch ? C.active : '')}
             >{srch}</button>)}
    </>
    : <div className={C.C_select}>
        <select className={C.select} onChange={(e)=>setCurrentSearch(e.target.value)}>
            <option value={0}>Show All</option>
            {
            search.map(srch=><option value={srch} key={srch} >{srch}</option>)
            }
        </select>
        <img src={arrow} alt="search list from the left" />
    </div>
}
            
    </div>
}

export default Search