import Navigation from "../components/Navigation"
import "../styles/Work.css"
import ImageGallery from "../components/ImageGallery"
import Footer from "../components/Footer"

function Work() {
    return(
        <div className="work-body">
            <Navigation/>
            
            <header className="work-header"><h2>Our Work</h2>
            <p>Take a peek at some past pours and some unfinished gems.</p></header>
            <main className="work-main">
            <ImageGallery />
            </main>
            <Footer/>
        </div>
    )

}

export default Work