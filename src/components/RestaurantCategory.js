import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({data}) => {
    console.log("Inisde RestaurantCategory component",data);

    const [showAccordionBody, setShowAccordionBody] = useState(false);

    const handleClick = () => {
        setShowAccordionBody(!showAccordionBody);
    }

    return(
        <div className="restaurant-category-container ">
            {/* Custom Accordion */}
            <div className="category-wrapper max-w-full mt-4 shadow-lg bg-gray-50">
                {/* Accordion header */}
                <div onClick={() => handleClick()}className="font-bold flex justify-between cursor-pointer h-12 p-3 mb-2 ">
                    <div className="">{data.title} ({data.itemCards.length})</div>
                    <div>🔽</div>
                </div>
                {/* Accordion body */}
                {
                    showAccordionBody &&
                        <CategoryItemList items={data.itemCards}/>
                }
                
            </div>
        </div>
    )
}

export default RestaurantCategory;