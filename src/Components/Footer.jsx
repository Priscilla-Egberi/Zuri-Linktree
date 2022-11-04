import img1 from "../Assets/IMG.jpg"
export default function Footer(){
    return(
        <>
        <section className="container">
        <hr className="mx-md-4" />
        <div className="d-block d-md-flex justify-content-between align-items-center container py-2 px-md-4">
            <p className="h4 mb-3">Zuri<span className="text-danger fs-1">.</span>Internship</p>
            <p className="text-muted my-3" style={{fontSize:"0.8rem"}}>HNG Internship 9 Frontend task</p>
            <img src={img1} alt="" width='110px' className="my-3" />
        </div>
        </section>
        </>
    )
}