import { useState, useEffect } from "react";
import RestaurantCard , {withDiscoutLabel, withVegLabel} from "./RestaurantCard";
import { resList } from "../utils/mockData.js";
import Shimmer from './common/Shimmer.js'
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {
    //Local state variavle- super powerful variable
    //useState give Array
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //const RestaurantCardDiscount = withDiscoutLabel(RestaurantCard);
    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    console.log("Body render", listOfRestaurants);

    // JS-Actualy it is array destructuring
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        //Swiggy Actual API (facing issues in response)
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        //Swiggy Dummy API
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

        const json = await data.json();

        console.log("Dummy API Res", json?.data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // console.log("Swiggy actual API response",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        //Swiggy Actual API
        //setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //Swiggy Dummy API
        setListOfRestaurants(json?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <div style={{textAlign: "center"}}>
                <h1 >Looks like you're offline! </h1>
                <h2>Please check your internet connection 🛜</h2>
            </div>
        )
    }

    return (
        <div className="body-container">
            <div className="top-area">
                <div style={{width: "200px"}}>Total restaurants: <b>{listOfRestaurants.length}</b></div>
                {/* Search Area */}
                <div className="search-container">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search.." className="focus: ring-2" value={searchText} onChange={(event)=>{
                            setSearchText(event.target.value);
                        }}/>
                    </div>
                    <div className="button-wrapper">
                        <button className="bg-sky-500 hover:bg-sky-700 " onClick={()=>{
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
                            {
                                //restaurant.info.aggregatedDiscountInfoV3?.discountTag ?
                                restaurant.info.veg ?

                                <RestaurantCardVeg  resData={restaurant}/>
                                :
                                <RestaurantCard  resData={restaurant}/>
                            }
                           
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