import { useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const { id } = useParams();
  const loadedCrafts = useLoaderData();
  const craftDetail = loadedCrafts.filter(craft => craft._id === id)
  const craft = craftDetail[0]
  console.log(craft)
  const { image, itemName, subcategoryName, description, price, processingTime, rating, stockStatus, userName, customization } = craft;


  return (
    <div>
      <div className="flex justify-center items-center py-[2vh]">
        <div className="w-10/12 rounded-xl shadow-xl  flex gap-10 p-5">
          <img className="w-1/2 my-auto h-96 rounded-lg" src={image} alt={itemName} />
          <div className="py-5 px-10">
            <div className="font-bold text-xl mb-2">{itemName}</div>
            <p className="text-gray-700 text-base text-justify">
              <strong>Description:</strong> {description}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Customization:</strong> {customization}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Price:</strong> ${price}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Processing Time:</strong> {processingTime} days
            </p>
            <p className="text-gray-700 text-base">
              <strong>Rating:</strong> {rating}/10
            </p>
            <p className="text-gray-700 text-base">
              <strong>Stock Status:</strong> {stockStatus}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Category:</strong> {subcategoryName}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Listed by:</strong> {userName || 'Not found'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;