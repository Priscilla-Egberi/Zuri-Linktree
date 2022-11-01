import img1 from "../Assets/slack.jpg"
import {FaGithub} from "react-icons/fa"
export default function Link(){
    return(
        <>
        <div className="container" style={{marginTop:"2rem"}}>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Twitter</button>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Zuri team</button>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Zuri books</button>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Python books</button>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Background check for coders</button>
        <button className="btn btn-light w-100 py-3 mb-3 bold" >Design books</button>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <img src={img1} alt="" className="me-4" /> 
            <FaGithub />
        </div>
        </>

    )
}