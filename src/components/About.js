import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css"
import Romtham from "../img/Romtham_FLOOR.png"

function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="a" id="about">
            <div className="a-left">
                <div className="a-card bg" data-aos="fade-zoom-in"></div>
                <div className="a-card" data-aos="fade-up">
                    <img src={Romtham} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right" data-aos="fade-left">
                <h1 className="a-title">
                    แนะนำตัว
                </h1>
                <div className="a-sub">
                    <p>สวัสดีครับ ผมมีชื่อว่า ร่มธรรม ตั้งสุนันท์ธรรม อยู่ คณะ วิศวกรรมศาสตร์ สาขา วิศวกรรมคอมพิวเตอร์  จาก สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เป็นคนที่ไม่ค่อยยุ่งสุงสิงกับใคร(แต่ไม่ใช่ว่าจะคุยกับใครไม่ได้นะ) คติประจำใจคือจะรับผิดชอบงานของตนเองให้ดีที่สุด</p>
                    <p>สายเรียนหลักคือ Software - Network</p>
                </div>
                <div className="a-desc">
                    <div className="hardware">
                        <h2>Hardware</h2>
                        <ul>
                            <li>
                                Arduino(Arduino)
                            </li>
                            <li>
                                Esp32(Arduino)
                            </li>
                            <li>
                                Esp8266(Arduino)
                            </li>
                            <li>
                                FPGA(VHDL)
                            </li>
                        </ul>
                    </div>
                    <div className="software">
                        <h2>Software</h2>
                        <ul>
                            <li>
                                C++
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Javascript
                            </li>
                            <li>
                                C#
                            </li>
                            <li>
                                SQL
                            </li>
                        </ul>
                    </div>
                    <div className="network">
                        <h2>Network</h2>
                        <ul>
                            <li>TCP/IP</li>
                            <li>Subnet</li>
                            <li>IPv4,IPv6</li>
                            <li>ACL</li>
                            <li>Nat</li>
                            <li>Vlan + VTP</li>
                            <li>DNS</li>
                            <li>DHCP</li>
                            <li>Router</li>
                            <li>Switch + Spanning Tree</li>
                            <li>Static routing</li>
                            <li>Dynamic routing(RIP,OSPF,EIGRP)</li>
                            <li>Exterior gateway protocol(BGP)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
