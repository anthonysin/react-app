import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">

                <Header />

                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://cdnb.artstation.com/p/assets/images/images/070/436/323/large/axl-brett-image-2023-12-13-211415443.jpg?1702521212" />
                    <h1>About Us</h1>
                    <p>
                        Nuka-Cola is the beloved soft drink brand of America, originating from the pre-war era. 
                        Known for its distinctively refreshing taste and iconic bottle design, Nuka-Cola became the drink of choice across the Wasteland. 
                        Created by the Nuka-Cola Corporation in the late 2040s, it quickly rose to popularity, becoming synonymous with American consumerism and innovation. 
                        The drink's catchy slogan, "Drink Nuka-Cola for that refreshing taste of adventure," captured the spirit of the era. Even after the Great War, 
                        Nuka-Cola's legacy endured, with many variants—like Nuka-Cola Quantum—emerging in the post-apocalyptic world, offering both nostalgia and a hint of mystery.
                    </p>
                    <h2>Ingredients</h2>
                    <ol>
                        <li>Carbonated water</li>
                        <li>Sugar</li>
                        <li>Caffeine</li>
                        <li>Phosphoric acid</li>
                        <li>Citric acid</li>
                        <li>Caramel color</li>
                        <li>Potassium benzoate</li>
                        <li>Natural flavorings</li>
                    </ol>
                </div>

                <Footer />
            </div>
        </div>
    </>
}