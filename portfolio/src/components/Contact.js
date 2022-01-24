import React, { useRef,useState } from 'react';
import Phone from "../img/Phone.png"
import Email from "../img/Email.png"
import Address from "../img/Address.png"
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useContext,useEffect } from 'react';
import { ThemeContext } from '../Context';
import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2c3g5oi', 'template_qcl0tcp', formRef.current, 'user_7Tx3vsR2dRQdqCZuD1ois')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="c" data-aos="fade-up" id = "contact">
            <div className="c-bg">
            </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> 0971050602
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> romtham.thang@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> สถาบันเทคโนโลยีพระจอมเกล้าลาดกระบัง ตึก ECC ห้อง 508
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>ติดต่อมาได้</b> ไม่ว่าจะเป็นเรื่องงาน หรือ โปรเจค ถ้าช่วยได้จะพยายามช่วยให้สุดความสามารถ
                    </p>
                    <form ref = {formRef} onSubmit={handleSubmit}>
                        <input style = {{backgroundColor : darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" />
                        <input style = {{backgroundColor : darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style = {{backgroundColor : darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style = {{backgroundColor : darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
