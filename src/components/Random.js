import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import myhook from "../hook/myhook"
import useGif from "../hook/myhook";
function Random()
{
    const{gif, loading, fetchData} = useGif();
    return (
        <div className="flex flex-col mx-auto my-10 bg-green-600 w-1/2 justify-between rounded-3xl border-red-200">
            <p className="font-bold text-2xl text-center underline uppercase my-5">a Random gif</p>
            {
                loading ? (<Spinner/>) : (<img src={gif} className="mx-auto"></img>)
            }
            
            <button onClick={fetchData}className="bg-white uppercase rounded-lg my-5 w-[600px] mx-auto font-bold pt-2 pb-2">generate</button>
        </div>
    );
}

export default Random;