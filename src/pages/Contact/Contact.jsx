import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { myDetails } from '../../components/Objects'
import './Contact.css'

function Contact() {
    return (
        <>

            <div id="contact-page">

                <BreadCrumb title="Contact" />

                <div id="my-details">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-content">
                                <div className="inner-grid">
                                    {myDetails.map((item) => (
                                        <div className="detail-card" key={item.id}>
                                            <div className="icon">{item.icon}</div>
                                            <div className="text">{item.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="form-area">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    <div><span>Get In</span> Touch</div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="inner-grid">
                                    <div className="image">
                                        <img src="/explore/contact.png" alt="..." className="w-100 h-100" />
                                    </div>
                                    <div className="form-block">
                                        <div className="head">Send a Line</div>
                                        <div className="group-input">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="email">E-Mail</label>
                                            <input type="email" name="email" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="number">Number</label>
                                            <input type="number" name="number" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                        <div className="btn-block">
                                            <button className="box-button"><span>Reset</span></button>
                                            <button className="box-button"><span>Submit</span></button>
                                        </div>
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

export default Contact
