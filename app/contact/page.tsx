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
                    <h1>Get in Touch with Nuka-Cola</h1>
                    <p>Thank you for your interest in Nuka-Cola! We value feedback from our loyal fans and customers. Whether you're interested in our products, have a question, or just want to share your Nuka-Cola experience, we're here to help!</p>

                    <div className="contact-info">
                        <h2>Reach Us</h2>
                        <ul>
                            <li><strong>Customer Service:</strong> <a href="tel:+18001234567">1-800-123-4567</a></li>
                            <li><strong>Email:</strong> <a href="mailto:contact@nukacola.com">contact@nukacola.com</a></li>
                            <li><strong>Mailing Address:</strong> Nuka-Cola Corporation, 123 Vault-Tec Plaza, Washington, DC</li>
                        </ul>
                    </div>

                    <Footer />
                    
                </div>
            </div>
        </div>
    </>
}