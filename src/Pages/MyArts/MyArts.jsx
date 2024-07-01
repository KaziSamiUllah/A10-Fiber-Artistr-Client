import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";



const MyArts = () => {
    const loadedCrafts = useLoaderData()
    const { user } = useContext(AuthContext)
    const userSpecificData = loadedCrafts.filter(crafts => crafts.email == user.email)
    const [viewCrafts, setViewCrafts] = useState(userSpecificData)

    console.log(userSpecificData)




    const filter = () => {
        var filterState = document.getElementById('filter').value;
        const customizable = userSpecificData.filter(crafts => crafts.customization === "Yes")
        const standard = userSpecificData.filter(crafts => crafts.customization === "No")


        console.log(filterState)
        if (filterState === "Yes") {
            setViewCrafts(customizable)
        }
        else if (filterState === "No") {
            setViewCrafts(standard)
        }
        else if (filterState === "All") {
            setViewCrafts(userSpecificData)
        }
    }

    console.log(viewCrafts)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-rq-2-server.vercel.app/items/${id}`,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const updatedList = viewCrafts.filter((craft) => craft._id !== id)
                            setViewCrafts(updatedList);
                        }
                    })


                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });



    }



    return (
        <div className="p-10">
            <div>
                <h1>My crafts</h1>
                <div>
                    <select id="filter" className="select w-fit max-w-xs" onChangeCapture={filter} defaultValue="default">
                        <option disabled value="default"> Filter
                        </option>
                        <option value="All">View all</option>
                        <option value="Yes">Customizable</option>
                        <option value="No">Standard</option>
                    </select>
                </div>
            </div>
            <div>
                {
                    viewCrafts.map((item, idx) => <div key={item._id}>
                        <div className="flex items-center border border-gray-200 rounded-xl p-4 mb-4 lg:flex-row flex-col">
                            <h1 className="mr-5 ml-2">{idx + 1}</h1>
                            <div className="flex-shrink-0 lg:mr-4 ">
                                <img src={item.image} alt={item.item_name} className="lg:h-24 lg:w-24 rounded-md object-cover " />
                            </div>

                            <div className="flex-1 ">
                                <div>
                                    <h3 className="text-lg font-semibold ">{item.itemName}</h3>
                                </div>

                                <div className="flex lg:items-center mt-1  justify-between lg:w-2/3  lg:flex-row flex-col">
                                    <div className="flex flex-row items-center">
                                        <p className="text-gray-600">Price: ${item.price}</p>
                                    </div>
                                    <p>{item.customization === "Yes" ? "customizable" : "Not Customizable"}</p>
                                    <p>{item.stockStatus}</p>

                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 fill-current text-yellow-500 mr-1" viewBox="0 0 20 20">
                                            <path d="M10 1l2.6 6.6H18l-5.1 4.2L15.9 19 10 15.4 4.1 19l1.5-7.2L2 7.6h5.4L10 1z" />
                                        </svg>
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto lg:ml-auto flex space-x-2  justify-center">
                                <Link to={`/update/${item._id}`}>
                                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
                                        Update
                                    </button></Link>
                                <button onClick={() => handleDelete(item._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">
                                    Delete
                                </button>
                            </div>
                        </div>



                    </div>)
                }
            </div>

        </div>
    );
};

export default MyArts;