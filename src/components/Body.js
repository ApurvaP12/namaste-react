import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData.js";
import Shimmer from './common/Shimmer.js'
import { Link } from "react-router";


const Body = () => {
    //Local state variavle- super powerful variable
    //useState give Array
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // JS-Actualy it is array destructuring
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log("Swiggy actual API response",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body-container">
            <div className="top-area">
                <div style={{width: "200px"}}>Total restaurants: <b>{listOfRestaurants.length}</b></div>
                {/* Search Area */}
                <div className="search-container">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search.." value={searchText} onChange={(event)=>{
                            setSearchText(event.target.value);
                        }}/>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={()=>{
                            console.log(searchText)
                            const filteredResList = listOfRestaurants.filter((res)=> 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredRestaurants(filteredResList);
                        }}>Search</button>
                    </div>
                </div>
                {/* Filter Area */}
                <div className="filter-container">
                    <button className="filter-btn" onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating > 4.5
                        )
                        setListOfRestaurants(filteredList); //Trigger for Diff algorithm 
                    }}>⭐Top Rated Restaurants</button>
                </div>
            </div>
            
            {/* Restaurant Card Layout */}
            {
                listOfRestaurants.length === 0 ? <Shimmer/>
                :
                <div className="card-container">
                    {
                        filteredRestaurants.map(restaurant => 
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                            <RestaurantCard  resData={restaurant}/>
                        </Link>)
                    }

                    {/* Props to component */}
                    {/* <Card resName="Deep's Kitchen" cuisine="Asian, Indian, Chinese"/>
                    <Card resName="Mc'Donalds" cuisine="Burgers, Fries, Fast Food"/> */}

                    {/* With Array of Object list */}
                    {/* <Card resData={resList [0]} />
                    <Card resData={resList [1]} />
                    <Card resData={resList [2]} /> */}
                    
                </div>
            }   
        </div>
    )
}

export default Body;