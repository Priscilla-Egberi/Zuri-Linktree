import img1 from "../Assets/slack.jpg"
import {FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function Links(){
    return(
        <>
        <div className="container">
        <a href="/" className="btn btn-light w-100 py-3 mb-3 bold" >Twitter</a>
        <a href="https://training.zuri.team/" id="btn__zuri" className="btn btn-light w-100 py-3 mb-3 bold" >Zuri Team</a>
        <a href="http://books.zuri.team " id="books" className="btn btn-light w-100 py-3 mb-3 bold" >Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=priscillaegberi" id="book__python" className="btn btn-light w-100 py-3 mb-3 bold" >Python Books</a>
        <a href="https://background.zuri.team" id="pitch" className="btn btn-light w-100 py-3 mb-3 bold" >Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" className="btn btn-light w-100 py-3 mb-3 bold" >Design Books</a>
        <Link to="/contact" id="contact" className="btn btn-light w-100 py-3 mb-3 bold" >Contact Me</Link>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-5">
            <img src={img1} alt="" className="me-4" /> 
            <FaGithub />
        </div>
        </>

    )
}