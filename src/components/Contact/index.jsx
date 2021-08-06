import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import '../../assets/css/contact.css';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log("🚀 ~ file: index.jsx ~ line 14 ~ handleChange ~ isValid", isValid);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
            
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // console.log(formState)

    return (
        <section>
            <h1 className="contact-title">Contact me</h1>

            <form id="contact-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="label-title" htmlFor="name">Name:</label>
                    <input type="text" className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                <div class="form-group">
                    <label className="label-title" htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} />
                </div>

                <div className="form-group">
                    <label className="label-title" htmlFor="message">Message:</label>
                    <textarea className="input-box form-control" name="message" row="5" defaultValue={message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}

                <button type="submit">Submit</button>

            </form>

        </section>
    )
}

export default ContactForm;