import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import '../../assets/css/contact.css';
const axios = require('axios').default;

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

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);

    //     axios({
    //         method: "POST",
    //         url: "/Contact",
    //         data: formState
    //     }).then((response) => {
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             setFormState({name: '', email: '', message: ''})
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3000/#/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    

    // console.log(formState)

    return (
        <section>
            <h1 className="contact-title">Contact me</h1>

            <form id="contact-form" method='POST' action="send" encType="multipart/form-data" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="label-title" htmlFor="name">Name:</label>
                    <input type="text" className="form-control" type="text" name="name" placeholder="Zaphod Beeblebrox" defaultValue={name} onBlur={handleChange} />
                </div>

                <div className="form-group">
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

                <button type="submit" value="submit">Submit</button>

            </form>

        </section>
    );
}

export default ContactForm;