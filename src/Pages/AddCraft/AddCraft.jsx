import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const AddCraft = () => {
    const { user } = useContext(AuthContext)
    console.log(user.displayName
    )
    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get('image');
        const itemName = formData.get('itemName');
        const subcategoryName = formData.get('subcategoryName');
        const description = formData.get('description');
        const price = formData.get('price');
        const rating = formData.get('rating');
        const customization = formData.get('customization');
        const processingTime = formData.get('processingTime');
        const stockStatus = formData.get('stockStatus');
        const email = user.email
        const userName = user.displayName
            || formData.get('userName');

        const itemDetails = {
            image,
            itemName,
            subcategoryName,
            description,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            email,
            userName
        };



        console.log(itemDetails);

        fetch("https://assignment-10-rq-2-server.vercel.app/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            });
    };




    return (
        <div className="lg:mx-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl ">Add an item</h1>
            </div>
            <form onSubmit={handleSubmit} className="max-w-full mx-auto border-2 p-5 rounded-xl bg-slate-50 drop-shadow-lg text-black">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className=" mb-2">
                            Image URL:
                            <input type="text" name="image" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                        <label className=" mb-2">
                            Item Name:
                            <input type="text" name="itemName" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                        <label className=" mb-2">
                            Subcategory Name:
                            <select  name="subcategoryName" className="w-full border border-gray-300 rounded px-3 py-2">
                                <option value="Embroidery">Embroidery</option>
                                <option value="Knitting & Crocheting">Knitting</option>
                                <option value="Quilting">Quilting</option>
                                <option value="Beadwork">Beadwork</option>
                                <option value="Tie-Dyeing">Tie-Dyeing</option>
                                <option value="Macrame">Macrame</option>
                            </select>
                        </label>
                        <label className="mb-2">
                            Short Description:
                            <textarea name="description" className="w-full border border-gray-300 rounded h-24 px-3 py-2 "></textarea>
                        </label>
                        <label className=" mb-2">
                            Price:
                            <input type="number" name="price" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                    </div>
                    <div>

                        <label className=" mb-2">
                            Rating:
                            <input type="number" name="rating" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                        <label className=" mb-2">
                            Customization:
                            <select name="customization" className="w-full border border-gray-300 rounded px-3 py-2">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <label className=" mb-2">
                            Processing Time:
                            <input type="text" name="processingTime" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                        <label className=" mb-2">
                            Stock Status:
                            <select name="stockStatus" className="w-full border border-gray-300 rounded px-3 py-2">
                                <option value="In stock">In stock</option>
                                <option value="Limited Stock">Limited Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </label>
                        <label className=" mb-2">
                            User Email:
                            <input type="email" name="email" value={user.email} disabled className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                        <label className=" mb-2">
                            User Name:
                            <input type="text" name="userName" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddCraft;