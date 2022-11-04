import img1 from "../Assets/slack.jpg"
import {FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function Links(){
    return(
        <>
        <div className="container">
        <Link to="/contact" id="contact" className="btn btn-light w-100 py-3 mb-3 bold" >Contact me</Link>
        <a href="/" className="btn btn-light w-100 py-3 mb-3 bold" >Twitter</a>
        <a href="https://training.zuri.team/" id="btn__zuri" className="btn btn-light w-100 py-3 mb-3 bold" >Zuri team</a>
        <a href="http://books.zuri.team " id="books" className="btn btn-light w-100 py-3 mb-3 bold" >Zuri books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=priscillaegberi" id="book__python" className="btn btn-light w-100 py-3 mb-3 bold" >Python books</a>
        <a href="https://background.zuri.team" id="pitch" className="btn btn-light w-100 py-3 mb-3 bold" >Background check for coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" className="btn btn-light w-100 py-3 mb-3 bold" >Design books</a>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-5">
            <img src={img1} alt="" className="me-4" /> 
            <FaGithub />
        </div>
        </>

    )
}