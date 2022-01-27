import React, { useEffect, useRef, useState } from 'react'
import { MdFolderOpen, MdTimeline } from 'react-icons/md'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { GrReactjs } from 'react-icons/gr'
import { FaMedal } from 'react-icons/fa'
import { AiOutlineIdcard, AiOutlinePhone } from 'react-icons/ai'

import "./Navbar.css"


function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
    var startingY = window.pageYOffset
    var elementY = getElementY(element) + 0.1
    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    var diff = targetY - startingY
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
    var start

    if (!diff) return

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1)
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent)

        window.scrollTo(0, startingY + diff * percent)

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step)
        }
    })
}


function Navbar(data) {
    const navscroll = useRef(1);
    useEffect(() => {
        function handleScroll() {
            let windowLocation = window.pageYOffset + window.innerHeight / 2
            if (getElementY("#contact") < windowLocation ){
                if (navscroll.current === 6)
                {
                    return
                }
                navscroll.current = 6;
                handleDark6()
            }
            else if (getElementY("#certificate ") < windowLocation){
                if (navscroll.current === 5)
                {
                    return
                }
                navscroll.current = 5;
                handleDark5()
            }
            else if (getElementY("#project") < windowLocation){
                if (navscroll.current === 4)
                {
                    return
                }
                navscroll.current = 4;
                handleDark4()
            }
            else if (getElementY("#story") < windowLocation){
                if (navscroll.current === 3)
                {
                    return
                }
                navscroll.current = 3;
                handleDark3()
            }
            else if (getElementY("#about") < windowLocation){
                if (navscroll.current === 2)
                {
                    return
                }
                navscroll.current = 2;

                handleDark2()
            }
            else if (getElementY("#intro") < windowLocation){
                if (navscroll.current === 1)
                {
                    return
                }
                navscroll.current = 1;
                handleDark1()
            }
        }
        window.addEventListener('scroll', handleScroll)
    })

    const [click, setClick] = useState(false)
    const [shrink, setShrink] = useState(true)


    const handleClick = () => {
        setClick(!click)
        handleShrink()
    }

    const handleShrink = () => {
        setShrink(true)
        setTimeout(
            () => {
                setShrink(false)
            }, 500
        )

    }


    //DarkBackground event
    const [topPosition, setTopPosition] = useState(2.5)
    const [dark1, setDark1] = useState(true)
    const [dark2, setDark2] = useState(false)
    const [dark3, setDark3] = useState(false)
    const [dark4, setDark4] = useState(false)
    const [dark5, setDark5] = useState(false)
    const [dark6, setDark6] = useState(false)

    function moveActiveTab(activeIndex) {
        let topPosition = activeIndex * 58 + 2.5;
        setTopPosition(topPosition);
    }
    const handleDark1 = () => {
        setDark1(true)
        setDark2(false)
        setDark3(false)
        setDark4(false)
        setDark5(false)
        setDark6(false)
        moveActiveTab(0)
    }
    const handleDark2 = () => {
        setDark1(false)
        setDark2(true)
        setDark3(false)
        setDark4(false)
        setDark5(false)
        setDark6(false)
        moveActiveTab(1)
    }
    const handleDark3 = () => {
        setDark1(false)
        setDark2(false)
        setDark3(true)
        setDark4(false)
        setDark5(false)
        setDark6(false)
        moveActiveTab(2)
    }
    const handleDark4 = () => {
        setDark1(false)
        setDark2(false)
        setDark3(false)
        setDark4(true)
        setDark5(false)
        setDark6(false)
        moveActiveTab(3)
    }
    const handleDark5 = () => {
        setDark1(false)
        setDark2(false)
        setDark3(false)
        setDark4(false)
        setDark5(true)
        setDark6(false)
        moveActiveTab(4)
    }
    const handleDark6 = () => {
        setDark1(false)
        setDark2(false)
        setDark3(false)
        setDark4(false)
        setDark5(false)
        setDark6(true)
        moveActiveTab(5)
    }



    return (
        <>
            <div className={click ? 'navigation active' : 'navigation'}>
                <div className="sidebar-top">
                    <div className={shrink ? "shrink-btn hovered" : "shrink-btn"} onClick={handleClick}>
                        <i><HiChevronDoubleRight /></i>
                    </div>

                    <div className="sidebar-logo">
                        <GrReactjs className="logo" />
                        <h3 className="hide">PortFolio</h3>
                    </div>
                </div>
                <div className="sidebar-links">
                    <ul>
                        <div className="active-tab" style={{ top: topPosition }}></div>
                        <li>
                            <div className={dark1 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#intro",2000)}>
                                <AiOutlineIdcard className='icon' />
                                <span className="link hide">Overview</span>
                            </div>
                        </li>
                        <li>
                            <div className={dark2 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#about",2000)}>
                                <CgProfile className='icon' />
                                <span className="link hide">Profile</span>
                            </div>
                        </li>
                        <li>
                            <div className={dark3 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#story",2000)}>

                                <MdTimeline className='icon' />
                                <span className="link hide">About</span>
                            </div>
                        </li>
                        <li>
                            <div className={dark4 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#project",2000)}>
                                <MdFolderOpen className='icon' />
                                <span className="link hide">Project</span>
                            </div>
                        </li>
                        <li>
                            <div className={dark5 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#certificate",2000)}>
                                <FaMedal className='icon' />
                                <span className="link hide">Certificate</span>
                            </div>
                        </li>
                        <li>
                            <div className={dark6 ? 'sidelink active' : 'sidelink'} onClick={() => doScrolling("#contact",2000)}>
                                <AiOutlinePhone className='icon' />
                                <span className="link hide">Contact me</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
