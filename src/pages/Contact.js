import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import "../styles/Contact.css"



function Contact(){
return(
    <div className="contact-body">
        <Navigation/>
        <header className="contact-header">
        <h2>Contact Us</h2>
        </header>
        <main className="contact-main">
            <p>You can shoot us a quick DM on the DiceworksPDX Instagram, or email us at diceworkspdx@gmail.com.
            <br/>
            Ready to roll some new dice for your next adventure? Download and fill out a <a className="order-link" href="../files/">Custom Dice Order Sheet</a> and email it over and we can get pouring!
            </p>
        <img className="contact-image" src="https://lh3.googleusercontent.com/d/19e31wHaf2uldIi8Fw8s438Hz8WRtNGM7" title="DiceworksPDX CEO of Cute" alt="cat laying on bed"/>
        **Hover for important info**
        
        </main>
        <Footer/>
        </div>
)

}


export default Contact