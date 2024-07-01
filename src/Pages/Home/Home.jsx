
import ContactForm from "./ContactForm/ContactForm";
import CraftItems from "./CraftItems/CraftItems";
import FAQ from "./FAQ/FAQ";
import Slider from "./Slider/Slider";
import Subcategories from "./Subcategories/Subcategories";
import TypeWritter from "./TypeWritterSlide/TypeWritter";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <TypeWritter></TypeWritter>
            <Subcategories></Subcategories>
            <ContactForm></ContactForm>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;