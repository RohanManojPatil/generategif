import { useState } from "react";
import axios from "axios";
function useGif()
{
    const[gif, setGif] = useState('');
    const[loading, setLoading] = useState(true);
    const[search, setSearch] = useState("");
    async function fetchData() {
        try
        {
            setLoading(true);
            const URL = `https://api.giphy.com/v1/gifs/random?api_key=MfOZvppcWBGrciMy4zTMttLBtkicfrOU&tag=${search}&rating=g`;
            const {data} = await axios.get(URL);
            const info = data.data.images.downsized.url;
            setLoading(false);
            setGif(info);
           
        }
        catch(e)
        {
            alert("Something Went Wrong");
        }
        
    }
    
    function clickHandler()
    {
        fetchData();
    }

    return {gif, loading, fetchData, setSearch, search};
}

export default useGif;