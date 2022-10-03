import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from './UI-Comps/Modal'

//images
import engFlag from '../images/eng-flag.png'
import teeTimeLogo from '../images/tee-time-logo.png'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css'

export default function Header() {
    
    const [showFeedbackPopup,setShowFeedbackPopup] =useState(false)


    const handleFeedBackClick =()=>{
        setShowFeedbackPopup(showFeedbackPopup=>!showFeedbackPopup)
    }

    const sendFeedbackHandler =(e)=>{
        e.preventDefault();
        console.log('כאן מאשרים את השליחה')
    }
    return (
        <div className="Header">
            <div className="navbar navbar-fixed-top navbar-inverse navbar-custom" id="MainMenu">
                <div className="container">
                    {/* <!-- Navbar --> */}
                    <nav className="navbar navbar-inverse navbar-fixed-top" id="MainMenu2">

                        <div className="container">
                            <div>
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu-collapse2">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-header"><a href="" className="navbar-brand"><img src={teeTimeLogo} alt="" /></a></div>
                            <div className="collapse navbar-collapse" id="menu-collapse2">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/Main"><span id="ufld:MAIN.DUMMY.MAALE">ראשי</span></Link></li>
                                    <li><Link to="/OrderList"><span id="ufld:MYBOOKING.DUMMY.MAALE">הזמנות שלי</span></Link></li>
                                    <li><Link to="/Login"><span id="ufld:LOGOUT.DUMMY.MAALE">יציאה</span></Link></li>
                                    <li><span  className="link-to-feedback" id="ufld:LOGOUT.DUMMY.MAALE" onClick={handleFeedBackClick}>פידבק מחברים</span></li>
                                    <Modal
                                        show={showFeedbackPopup}
                                        onCancel={handleFeedBackClick} //for canceling when we click the backdrop
                                        onSubmit={sendFeedbackHandler}
                                        header="אנא הקלד את הודעתך:"
                                        modalButtonLeft="שלח"
                                        contentClass="textarea-container"
                                        left="35%"
                                        right="35%"
                                        >
                                        {/* תוכן המודל נכתב בין שתי התגיות שלו */}
                                        <textarea id="feedback" name="feedback" rows="5" style={{width: '28vw',margin:'auto'}} ></textarea>
                                     </Modal>

                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Container--> */}
                    </nav>
                    {/* <!-- End navbar --> */}
                    <div className="navbar-header"><a href="" className="navbar-brand"><img src={teeTimeLogo} alt="" /></a></div>
                    {/* <!-- Navbar Header--> */}
                </div>
                {/* <!-- End Container--> */}
            </div>
        </div>
    )
}

