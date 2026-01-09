import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants.js";
import { addItem } from "../utils/cartSlice.js";


const CategoryItemList = ({items}) => {
    console.log("Inside CategoryItemList" , items);

    const dispatch = useDispatch();

    //Dispatch an action after clicking on this button
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="p-3">
            <ul>
                {
                    items.map((item)=>
                        <li key={item.card.info.id}>
                            <div className="flex mb-3 justify-between border-b-1 border-b-gray-300 divide-hidden">
                                <div className="left-info-wrapper">
                                    <div className="font-semibold">{item.card?.info?.name}</div>
                                    <div className="text-sm font-semibold mb-1">₹{item.card?.info?.price/100}</div>
                                    <div className="font-light">{item.card?.info?.description}</div>
                                </div>
                                <div className="right-img-wrapper h-auto w-38 relative">
                                    <img className="rounded" alt="category-item-img" src={CDN_URL + item.card?.info?.imageId}/>
                                    <button className="cursor-pointer h-7 w-20 rounded bg-white text-emerald-600 absolute bottom-0 right-0 left-0 m-auto text-center font-bold"
                                    onClick={() => handleAddItem(item)}>Add +</button>
                                </div>
                            </div>
                            
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CategoryItemList;