import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";


const useRestaurantInfoDetails = (resId) => {

    const [resInfo, setResInfo]= useState(null);
    
    useEffect(()=>{
        fetchData();
    },[resId]);

     const fetchData = async () => {
        // const data = await fetch(RES_MENU_URL + resId);
        const data = await fetch(`${RES_MENU_URL}${resId}`)
        const json = await data.json();

        console.log("Res Data",json.data);
        setResInfo(json.data);
    } 

    // const fetchData = async () => {
    //     try {
    //       const url = `${RES_MENU_URL}${resId}`;
    //       const response = await fetch(url);
    //       console.log("Fetch status", response.status);
      
    //       const text = await response.text();
    //       console.log("Raw body:", text.slice(0,200));   // preview first 200 chars
      
    //       if (!response.ok) {
    //         console.error("API responded with non-OK status", response.status);
    //         return;
    //       }
      
    //       if (!text) {
    //         console.warn("Empty body");
    //         return;
    //       }
      
    //       if (text.trim().startsWith("<")) {
    //         console.warn("Body appears HTML, likely blocked or error page");
    //         return;
    //       }
      
    //       const json = JSON.parse(text);
    //       console.log("Parsed JSON:", json);
    //       setResInfo(json.data);
    //     } catch (err) {
    //       console.error("Fetch or parse failed:", err);
    //     }
    //   };
      
      

    return resInfo;
}

export default useRestaurantInfoDetails;