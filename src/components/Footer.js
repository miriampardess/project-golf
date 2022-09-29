//images
import profileLogo from '../images/profile-logo.png'
import one1logo from '../images/one1-logo.png'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="row FooterBottom container">
                <div className="col-xs-12 col-sm-6 col-md-6 cl-lg-6 FooterTextBottom">© 2016 כל הזכויות שמורות לגולף קיסריה | <a href="/#" title="תנאי שימוש באתר">תנאי שימוש באתר</a></div>
                <div className="col-xs-12 col-sm-6 col-md-6 cl-lg-6">
                    <img src={profileLogo} alt="UX, UI, Web Development" title="UX, UI, Web Development" className="pull-opp-dir FooterTextBottom" /><img src={one1logo} alt="one1" className="pull-opp-dir Padding-dir-20" title="one1" /></div>
            </div>
        </div>
    )
}


