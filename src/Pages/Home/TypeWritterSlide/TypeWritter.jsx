import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
    return (
        <div>
            <h1 className="font-serif font-bold text-3xl text-center"
                style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Our exploration consists of {' '}
                <span style={{ color: 'gold', fontWeight: 'bold' }}>
                    <Typewriter
                        words={[
                            'Embroidery',
                            'Knitting & Crocheting', 'Quilting',
                            'Beadwork',
                            'Tie-Dyeing',
                            'Macrame'
                        ]}
                        loop={10}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
        </div>
    );
};

export default TypeWritter;