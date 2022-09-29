//images
import engFlag from '../images/eng-flag.png'
import teeTimeLogo from '../images/tee-time-logo.png'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css'

export default function Header() {
    return (
        <div className="Header">
            <div className="navbar navbar-fixed-top navbar-inverse navbar-custom" id="MainMenu">
                    <div className="container">
                        <div className="navbar-header"><a href="" className="navbar-brand"><img src={teeTimeLogo} alt="" /></a></div>
                        {/* <!-- Navbar Header--> */}
                    </div>
                    {/* <!-- End Container--> */}
                </div>
        </div>
    )
}


