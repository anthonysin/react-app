import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">
                <Header />
                <Nav />
                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://cdnb.artstation.com/p/assets/images/images/070/436/323/large/axl-brett-image-2023-12-13-211415443.jpg?1702521212" />
                    <h1>Welcome Vault Dweller!</h1>
                    <p>
                        Welcome to the official Nuka-Cola website, brought to you by the Nuka-Cola Corporation! For decades, Nuka-Cola has been the refreshing drink of choice for adventurers, settlers, and survivors alike. Whether you're looking for the classic Nuka-Cola or our exciting new variants like Nuka-Cola Quantum, we've got something to quench every thirst in the Wasteland. At Nuka-Cola, we believe in delivering the perfect blend of refreshment, nostalgia, and adventure in every sip. Join us as we continue to spread the joy of Nuka-Cola across the wasteland—one bottle at a time. Drink up and embrace the future of flavor!
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    </>
}