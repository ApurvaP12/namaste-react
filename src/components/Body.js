import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData.js";


const Body = () => {
    //Local state variavle- super powerful variable
    //useState give Array
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // JS-Actualy it is array destructuring
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;

    return (
        <div className="body-container">
            <div className="top-area">
                <div style={{width: "200px"}}>Total restaurants: <b>{listOfRestaurants.length}</b></div>
                {/* Search Area */}
                <div className="search-container">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search.."/>
                    </div>
                    <div className="button-wrapper">
                        <button>Search</button>
                    </div>
                </div>
                {/* Filter Area */}
                <div className="filter-container">
                    <button className="filter-btn" onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.data.avgRating > 4.5
                        )
                        setListOfRestaurants(filteredList); //Trigger for Diff algorithm 
                    }}>⭐Top Rated Restaurants</button>
                </div>
            </div>
            
            {/* Restaurant Card Layout */}
            <div className="card-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }

                {/* Props to component */}
                {/* <Card resName="Deep's Kitchen" cuisine="Asian, Indian, Chinese"/>
                <Card resName="Mc'Donalds" cuisine="Burgers, Fries, Fast Food"/> */}

                {/* With Array of Object list */}
                {/* <Card resData={resList [0]} />
                <Card resData={resList [1]} />
                <Card resData={resList [2]} /> */}
                
            </div>
        </div>
    )
}

export default Body;