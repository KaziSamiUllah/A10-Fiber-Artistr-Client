
const FAQ = () => {

    return (
        <div className="my-10 lg:mx-20">
            <h1 className="font-extrabold text-4xl text-center my-10">FAQs</h1>

            <div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-2xl font-medium">
                        Do you accept custom orders?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we do accept custom orders! Whether you are looking for a unique embroidery design, personalized sizing, or specific fabric choices, we are happy to work with you to create a custom piece. Please reach out to us directly to discuss your ideas and requirements.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we accept returns within 30 days of purchase for a full refund or exchange. Please note that items must be in their original condition with tags attached. For more information, please see our detailed return policy.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-2xl font-medium">
                        What are your shipping options?
                    </div>
                    <div className="collapse-content">
                        <p>We offer various shipping options to accommodate your needs. Standard shipping typically takes 3-5 business days for domestic orders, while expedited shipping is available for faster delivery. International shipping options are also available, with delivery times varying depending on the destination. You can select your preferred shipping method during checkout.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FAQ;