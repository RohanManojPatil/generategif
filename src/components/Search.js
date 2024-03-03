import { useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.js";
import myhook from "../hook/myhook.js";
import useGif from "../hook/myhook.js";
function Search()
{
    const{gif, loading, fetchData, setSearch, search} = useGif();
    const handleChange = (event) => 
    {
        setSearch(event.target.value);
    }   
    
    
    return (
        <div className="flex flex-col mx-auto bg-blue-400 w-1/2 justify-between rounded-3xl border-red-200">
            <p className="font-bold text-2xl text-center underline uppercase my-5">a Random gif</p>
            {
                loading ? (<Spinner/>) : (<img src={gif} className="mx-auto"></img>)
            }
            <input type="text" value={search.info} name="info" onChange={handleChange} className="w-[600px] mx-auto rounded-lg py-3 hover:outline mt-5"/> 
            <button onClick={fetchData}className="bg-white uppercase rounded-lg my-5 w-[600px] mx-auto font-bold pt-2 pb-2">generate</button>
        </div>
    );
}

export default Search;