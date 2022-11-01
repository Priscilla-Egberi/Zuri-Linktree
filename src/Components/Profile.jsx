import { IoArrowRedoOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
export default function Link() {
    const imgsrc = "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    return (
        <>
            <div className="container">
                <div className="pt-5 text-center" style={{ position: "relative" }}>
                    <img src={imgsrc} alt="" id="profile__img" width="100px" height="100px" className="rounded-circle" />
                    <span className="icon pb-1 px-1" style={{ borderRadius: "20px", border: '1px dashed #D0D5DD' }}>
                        <IoArrowRedoOutline className="d-none d-md-inline" />
                        <BsThreeDots className="d-md-none" />
                    </span>
                </div>
                <p className="text-center fw-bold my-3" id="twitter">PEgberi</p>
                <p className="text-center fw-bold my-3 d-none">Pricilla Egberi</p>
            </div>
        </>
    )
}