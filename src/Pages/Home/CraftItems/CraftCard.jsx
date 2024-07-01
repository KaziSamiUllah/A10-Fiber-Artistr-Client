import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
    // console.log(craft)
    const { _id, image, itemName, subcategoryName, description, price, processingTime, rating, stockStatus, userName, email
    } = craft;
    return (
        <div>
            <div className=" lg:max-w-sm mx-auto overflow-hidden shadow-lg rounded-2xl bg-white flex flex-col ">
                <div className="h-60 overflow-hidden">
                <img src={image} alt={itemName} className="w-full h-60" />
                </div>
                

                <div className="px-6 py-4 h-80">
                    <div className="font-bold text-xl mb-2">Craft: {itemName}</div>
                    <p className="text-gray-700 text-base mb-2">Subcategory: {subcategoryName}</p>
                    <p className="text-gray-700 text-base mb-2">Description: {description.slice(0, 100)}...</p>
                    <p className="text-gray-700 text-base mb-2">Stockstatus: {stockStatus}</p>
                    <p className="text-gray-700 text-base mb-2">Price: {price}</p>
                    <p className="text-gray-700 text-base mb-2">Process Time: {processingTime}</p>
                    <p className="text-gray-700 text-base mb-2">Rating: {rating}</p>
                </div>
                <div className="flex  justify-center h-20">
                    <Link to={`/items/${_id}`}>
                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Read more about ${itemName} `}>
                            
                        
                        <button className="btn">View details</button> </a>
                    </Link>
                </div>





            </div>
        </div>
    );
};

export default CraftCard;