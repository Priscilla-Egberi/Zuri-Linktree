export default function Contact(){
    const name="{name}"
    return(
        <section>
        <p>Contact Me</p>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
            <input type="text" placeholder="Enter your first name" id='first_name' />
            <input type="text" placeholder="Enter your last name" id='last_name'/>
            <input type="email" placeholder="yourname@email.com" id='email'/>
            <textarea name="" placeholder="Send me a message and I'll reply you as soon as possible..." id="" cols="30" rows="10"></textarea>
            <input type="checkbox" /> <span>You agree to providing your data to {name} who may contact you.</span>
            <button id="btn__submit">Send message</button>
        </form>
        </section>
    )
}