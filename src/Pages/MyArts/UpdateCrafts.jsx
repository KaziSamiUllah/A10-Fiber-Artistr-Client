import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateCrafts = () => {
    const { id } = useParams()
    const loadedData = useLoaderData()
    const arrayCraft = loadedData.filter(item => item._id === id)
    const craft = arrayCraft[0];
    console.log(craft)
    console.log(id)



    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get('image') || craft.image;
        const itemName = formData.get('itemName') || craft.itemName;
        const subcategoryName = formData.get('subcategoryName') || craft.subcategoryName;
        const description = formData.get('description') || craft.description;
        const price = formData.get('price') || craft.price;
        const rating = formData.get('rating') || craft.rating;
        const customization = formData.get('customization') || craft.customization;
        const processingTime = formData.get('processingTime') || craft.processingTime;
        const stockStatus = formData.get('stockStatus') || craft.stockStatus;
        const email = formData.get('email') || craft.email;
        const userName = formData.get('userName') || craft.userName

        const itemDetails = { image, itemName, subcategoryName, description, price, rating, customization, processingTime, stockStatus, email, userName };

        console.log(itemDetails);

        fetch(`https://assignment-10-rq-2-server.vercel.app/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemDetails }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Data updates successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    footer: '<a href="/">Go to home</a>'
                });
            })


    };




    return (
        <div className="mx-20 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl">Update craft info</h1>
            </div>
            <form onSubmit={handleUpdate} className="max-w-full mx-auto border-2 p-5 rounded-xl bg-slate-50 drop-shadow-lg">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className=" mb-2">
                            Image URL:
                            <input type="text" name="image" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.image} />
                        </label>
                        <label className=" mb-2">
                            Item Name:
                            <input type="text" name="itemName" className=" w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.itemName} />
                        </label>
                        <label className=" mb-2">
                            Subcategory Name:
                            <select  name="stockStatus" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.subcategoryName}>
                                <option value="Embroidery">Embroidery</option>
                                <option value="Knitting & Crocheting">Knitting & Crocheting</option>
                                <option value="Quilting">Quilting</option>
                                <option value="Beadwork">Beadwork</option>
                                <option value="Tie-Dyeing">Tie-Dyeing</option>
                                <option value="Macrame">Macrame</option>
                            </select>
                        </label>
                        <label className="mb-2">
                            Short Description:
                            <textarea name="description" className="w-full border border-gray-300 rounded h-28 px-3 py-2 " defaultValue={craft.description}></textarea>
                        </label>

                    </div>
                    <div>
                        <label className=" mb-2">
                            Price:
                            <input type="number" name="price" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.price} />
                        </label>

                        <label className=" mb-2">
                            Rating:
                            <input type="number" name="rating" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.rating} />
                        </label>
                        <label className=" mb-2">
                            Customization:
                            <select defaultValue={craft.customization} name="customization" className="w-full border border-gray-300 rounded px-3 py-2">
                                <option value="Yes" >Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className=" mb-2">
                            Processing Time:
                            <input type="text" name="processingTime" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue={craft.processingTime} />
                        </label>
                        <label className=" mb-2">
                            Stock Status:
                            <select defaultValue={craft.stockStatus} name="stockStatus" className="w-full border border-gray-300 rounded px-3 py-2">
                                <option value="In stock">In stock</option>
                                <option value="Limited Stock">Limited Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </label>

                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                    Update
                </button>
            </form>
        </div>
    );
};


export default UpdateCrafts;