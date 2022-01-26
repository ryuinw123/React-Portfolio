import React from 'react';
import "./Intro.css"
import Me from "../img/Romtham.png"
function Intro() {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>
            สวัสดีครับ ผมชื่อ
          </h2>
          <h1 className="i-name">
            ร่มธรรม ตั้งสุนันท์ธรรม
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                Web Developer
              </div>
              <div className="i-title-item">
                Wannabe Full Stack Developer
              </div>
              <div className="i-title-item">
                Computer Engineering
              </div>
              <div className="i-title-item">
                Networking
              </div>
              <div className="i-title-item">
                Internet of things
              </div>
              <div className="i-title-item">
                Gamer
              </div>
            </div>
          </div>
          <p className="i-desc">
            เด็กหนุ่มผู้รักการเขียนโปรแกรม นั่งปั่นโปรเจคทั้งวันทั้งคืน มีความสามารถที่ทำได้ตั้งแต่บัดกรียันต่อวงจรเครือข่าย
            สามารถเขียนโปรแกรมได้หลากหลายภาษาและทำงานได้หลายอย่าง(แต่ต้องให้เวลาศึกษาก่อนนะ 😂) ชอบดื่มโอวัลตินเป็นชีวิตจิตใจ 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">

        </div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;
