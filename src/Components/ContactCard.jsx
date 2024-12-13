import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactCard = () => {
   const form=useRef()

    const sendEmail=(e)=>
    {
        e.preventDefault();

        emailjs
          .sendForm('service_np1g24l', 'template_cxocymx', form.current, 'IcE7HpDSS6NjZOaiJ')
          .then(
            (result) => {
              console.log(result.text);
              alert('message sent successfully');
              form.current.reset();
            },
            (error) => {
              console.log(error.text);
            }
          );
    
        

    }
    return (
        <div>
            <div className='project-card'>

                <div className='project-item '>
                    <h1 className='project-item'>Contact</h1>

                </div>

            </div>
            <div className='img-field'>
                <img class="profile-small d-inline-block mx-auto rounded-circle mb-3 img-contact" src="../Images/Mizan.png" alt=""></img>
            </div>
            <div className='contact-card'>
                <div className="contact-cont">
                    <h5>I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch</h5>
                    <div className='footer-item contact-media'>
                        <div >
                            <a href="https://www.facebook.com/profile.php?id=100020495491917" target="_blank" rel="noopener noreferrer">
                                <img src="../Images/Facebook.jpeg" alt="Facebook" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            <a href="https://www.instagram.com/mizanuranr/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src="../Images/instragram.jpeg" alt="Instagram" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/mizanur-rahman-66b806248/" target="_blank" rel="noopener noreferrer">
                                <img src="../Images/LinkedIn.jpeg" alt="LinkedIn" className='footer-image' />
                            </a>

                        </div>
                        <div>
                            {/* <a href="https://www.facebook.com/profile.php?id=100020495491917" target="_blank" rel="noopener noreferrer"> */}
                            <img src="../Images/twitter.jpeg" alt="twiter" className='footer-image' />
                            {/* </a> */}

                        </div>
                        <div>
                            <a href="https://t.me/mizanuranr" target="_blank" rel="noopener noreferrer">
                                <img src="../Images/telegram.jpeg" alt="telegram" className='footer-image' />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:whitedevil1jdk@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="../Images/email.jpeg" alt="email" className='footer-image' />
                            </a>

                        </div>
                    </div>
                </div>


            </div>
            <div className="contact-card">
                <div className="contact-cont">
                    <h2 style={{ textAlign: 'center' }}>Get In Touch</h2>
                </div>
                <div className="contact-cont">
                    <form action="" ref={form}>
                        <div className="form-cont">
                        <input type="text" placeholder='Name' className='form-element' name='name' />
                        <input type="email" placeholder='Email' className='form-element' required  name='email'/>

                        </div>
                        <input type="text" placeholder='Subject' className='form-element' name='subject' />
                        <textarea name="message" id=""  rows="10" placeholder='type message' className='text-area' required 
                        ></textarea>
                        <button className='text-area btn' type='submit' onClick={sendEmail} >send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactCard