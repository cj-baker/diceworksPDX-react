import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import "../styles/Contact.css"



function Contact(){
return(
    <body className="contact-body">
        <Navigation/>
        <header className="contact-header">
        <h2>Contact Us</h2>
        </header>
        <main className="contact-main">
        <img src="" alt="" />
            You can reach me on the Noha's Art Photography facebook page, or by email at nohasart06@gmail.com.
        <br/>
                Ready to roll some new dice for your next adventure? Download and fill out a <a className="order-link" href="../files/">Custom Dice Order Sheet</a> and email it over and we can get pouring!
        </main>
        <Footer/>
        </body>
)

}


export default Contact