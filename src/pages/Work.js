import Navigation from "../components/Navigation"
import "../styles/Work.css"
import ImageGallery from "../components/ImageGallery"


function Work() {
    return(
        <body className="work-body">
            <Navigation/>
            <main className="work-main">
            <h2>Our Work</h2>
            <p>Take a peek at some past pours and some unfinished gems.</p>
            <ImageGallery />
            </main>
            <footer>
        <h1>This is the Footer</h1>
      </footer>
        </body>
    )

}

export default Work