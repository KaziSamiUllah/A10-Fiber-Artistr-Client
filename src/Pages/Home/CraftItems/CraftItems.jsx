import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const CraftItems = () => {
    const loadedItems =  useLoaderData()
    console.log(loadedItems)
    return (
        <div>
            <div className="text-center my-10">
            <h1 className="text-3xl">Threaded Treasures</h1>
            <p>Discover Our Textile Art Collection: Threads of Inspiration Unraveled</p>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-20 ">
            {
                loadedItems.map((craft)=><CraftCard className key={craft._id}
                craft={craft}></CraftCard>)
            }
            </div>
        </div>
    );
};

export default CraftItems;