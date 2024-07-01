import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CraftCard from "../Home/CraftItems/CraftCard";

const ViewSubCat = () => {
    const { subcategoryName } = useParams()
    // const loadedItems = useLoaderData()
    const [item, setItems] = useState([])

    useEffect(() => {
        fetch(`https://assignment-10-rq-2-server.vercel.app/items/${subcategoryName}`)
            .then(res => res.json())
            .then(data => { setItems(data) })
}, []);
console.log(item)


return (
    <div>
        <h1 className="font-bold text-3xl text-center my-5"> Popular Items in {subcategoryName} </h1>
        <div className="flex gap-5 m-10">
        {
            item.map(craft=><CraftCard key={craft._id} craft={craft} ></CraftCard>)
        }
        </div>
    </div>
);
};

export default ViewSubCat;