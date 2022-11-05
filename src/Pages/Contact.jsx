import { useState } from "react"

const Result = () => {
    return (<p style={{ color: "red", fontSize: '0.8rem' }}>Please enter a message</p>)
}
export default function Contact() {
    const name = "Priscilla"
    const [textEmpty, setEmptyText] = useState(false)
    const [text, setText] = useState('')
    const [notCheck, setCheck] = useState(true)
    const [classed, setClass] = useState('')
    const handleChange = (e) => {
        const newValue = e.target.value
        setText(newValue)
    }
    const handleClick = (e) => {
        e.preventDefault()
        if (text === '') {
            setEmptyText(true)
            setClass('text-input-outline')
        }
        else {
            setEmptyText(false)
            setClass('')
            setText('')
        }
    }
    const handleCheckChange = (e) => {
        if (e.target.checked) {
           setCheck(false)
           console.log('checked')
        }
        else {
            setCheck(true)
            console.log('notChecked')
        }
    }
    return (
        <section className="container container-contact px-3">
            <p className="h2">Contact Me</p>
            <p className="mb-4 mt-4">Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="row mb-3">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label>First name</label>
                        <input type="text" placeholder="Enter your first name" id='first_name' className="w-100" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Last name</label>
                        <input type="text" placeholder="Enter your last name" id='last_name' className="w-100" />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" placeholder="yourname@email.com" id='email' className="w-100" />
                </div>
                <div className="mb-3">
                    <label>Message</label>
                    <textarea name="" placeholder="Send me a message and I'll reply you as soon as possible..." id="" rows="5" className={`${classed} w-100`} onChange={handleChange} value={text} required></textarea>
                    <div>{textEmpty ? <Result /> : null}</div>
                </div>
                <div className="d-flex mb-3 align-items-start">
                    <input type="checkbox" className="mt-2 me-3" onChange={handleCheckChange} value={notCheck} />
                    <span>You agree to providing your data to {name} who may contact you.</span>
                </div>
                
                {notCheck ? <input  type="submit" id="btn__submit" className="w-100 btn-contact" value="Send message" onClick={handleClick} disabled  /> : <input  type="submit" id="btn__submit" className="w-100 btn-contact" value="Send message" onClick={handleClick}  />};
        
            </form>
        </section>
    )
}