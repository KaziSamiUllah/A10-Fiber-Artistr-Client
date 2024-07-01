import { useEffect, useState } from "react";
import LoopingText from "../../../Components/Extras/LoopingText";
import { Link } from "react-router-dom";

const Subcategories = () => {

    const [subcategories, setSubCats] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-rq-2-server.vercel.app/subcategories')
            .then(res => res.json())
            .then(data => {
                setSubCats(data)
            })
    }, [])









    return (

        <div className="flex flex-col gap-5 lg:px-24">
            {
                subcategories.map((subcategory, idx) =>
                    <Link key={idx} to={`/subCatDetails/${subcategory.subcategoryName}`}>
                        

                        <div className={` my-5 justify-between border-2 flex flex-col ${idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#F2EFE5] text-black rounded-2xl`}>
                            <div className=" flex lg:w-1/2 p-5  justify-center">

                                <img className=" w-full rounded-2xl h-full" src={subcategory.image} alt="image" />
                            </div>
                            {/* Text Area */}
                            <div className={`lg:my-auto lg:space-y-2 lg:w-1/2  ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} py-10 p-10`}>
                                <h1 className="text-3xl font-bold">{subcategory.subcategoryName}</h1>
                                <p className="text-xl">{subcategory.description}</p>
                                <div>
                                    <h1 className="text-lg font-bold">Techniques:</h1>
                                    <div className="text-xl text-orange-400 font-bold ">
                                        <LoopingText words={subcategory.techniques} interval={2000} />
                                    </div>
                                </div>
                                <div className={`flex gap-2 ${idx % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                    {
                                        subcategory.examples.map((example, idx) =>
                                            <h1 className="bg-[#E3E1D9] p-1 rounded-full px-2 " key={idx}>{example}</h1>)
                                    }
                                </div>
                            </div>
                        </div>  
                </Link>)
}
        
        </div >
    
    );
};

export default Subcategories;