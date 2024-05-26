import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import emailjs, { init } from "@emailjs/browser";
import './ContactForm.css'
import { useRef } from 'react';

function ContactForm() {
    init("vdsZYw09DIeG_2xbfQza5");
    const form = useRef();

    const handleReset = () => {
        form.current.reset()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_roq31ep", "template_k7mfkso", form.current, "uxlDe88Gsnw3GmG2H").then(
            (result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        handleReset()
    };
    return (
        <>

            <div id="contact-me">
                <div className="container">
                    <div className="inner-container">
                        <div className="section-head">
                            <div className="main-head">
                                <div>Let&lsquo;s Build Something</div>
                                <div><span>Great Together.</span></div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="inner-grid">
                                <div className="form-block">
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <div className="group-input">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" required />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="number">Contact Number</label>
                                            <input type="number" name="number" required />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="email">E-Mail</label>
                                            <input type="email" name="email" required />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" required></textarea>
                                        </div>
                                        <div className="btn-block">
                                            <button type='button' className="box-button" onClick={handleReset}>
                                                <span>Reset</span>
                                            </button>
                                            <button type='submit' className="box-button">
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="detail-block">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                    </div>
                                    <div className="block">
                                        <div>+91 8765057868</div>
                                    </div>
                                    <div className="block">
                                        <div>pyushsahud123@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm
