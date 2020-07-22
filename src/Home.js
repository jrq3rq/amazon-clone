import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NWMxMzg2ZjUt/NWMxMzg2ZjUt-ODcwNDM1NDQt-w1500._CB410890200_.jpg" alt=""/>
            {/* product id, title, price, rating, image */}
        
            <div className="home_row">
                <Product 
                    id="12375785858"
                    title="Waltz & Crystal Apple Paperweight Craft Decoration (red)"
                    price={11.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61bmZ0KXLcL._AC_SL1100_.jpg"
                />
                <Product 
                    id="12375785858"
                    title="Shure MV88 Portable iOS Microphone for iPhone/iPad/iPod via Lightning Connector, Professional-Quality Sound, Digital Stereo Condenser Mic for Vloggers, Filmmakers, Music Makers & Journalists"
                    price={149.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61gbcSulIaL._AC_SL1500_.jpg"
                />
                
            </div>
            <div className="home_row">
                <Product 
                    id="12375785858"
                    title="Conversational Design Paperback – January 1, 2018"
                    price={38.61}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31AVrgHJXBL._SX298_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12375785858"
                    title="The Handbook of Jungian Psychology: Theory, Practice and Applications 1st Edition"
                    price={40.22}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41cSiWRhKLL._SX331_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12375785858"
                    title="Furry Cover Windscreen Windshield Muff Compatible for SHURE MV88 Microphone"
                    price={12.92}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61KBkfX8KaL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="12375785858"
                    title="Gudetama Lazy Egg Open Face PopSockets Stand for Smartphones and Tablets PopSockets Grip and Stand for Phones and Tablets"
                    price={14.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51olZTvGalL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home

