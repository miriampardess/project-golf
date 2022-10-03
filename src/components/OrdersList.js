//images
import engFlag from '../images/eng-flag.png'
import teeTimeLogo from '../images/tee-time-logo.png'
import picMember from '../images/pic-member.png'
import magnify from "../images/magnify.png"
import picThumb from "../images/pic-thumb.png"
import butDayLeft from "../images/but-day-left.png"
import butWeekLeft from "../images/but-week-left.png"
import butDayRight from "../images/but-day-right.png"
import butWeekRight from "../images/but-week-right.png"
import picMemberEntrance from "../images/pic-member-entrance.png"


//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css'
import { useState } from 'react'

export default function EntranceControl() {

    //!סטייט לפופ אפ שאין הזמנות - תעדכני אותו לטרו איפה שצריך
    const [showNoOrdersPopup , setShowNoOrdersPopup] = useState(false);

    //!לסגירת הפופאפ
    const handleClosePopup =()=>{
        setShowNoOrdersPopup(false)
    }

    return (
        <div >
            {/* //! פופאפ ללא נמצאו הזמנות 
            */}
                    <Modal
                      show={showNoOrdersPopup}
                      onCancel={setShowNoOrdersPopup} 
                      header="Tee Time"
                      modalButtonLeft="Ok"
                      left="35%"
                      right="35%"
                    >
                      <p>לא נמצאו הזמנות</p>
                    </Modal>
            {/* <html lang="he" /> */}

            <title>Tee Time</title>
            {/* <!-- לבקשת ירון --> */}
            <meta name="Default" content="Uniface 9" />
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="../css/udsp.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
            {/* <!-- Optional theme --> */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" />
            <link rel="stylesheet" type="text/css" href="../css/reset.css" />
            {/* <!-- Latest compiled and minified CSS --> */}
            <link rel="stylesheet" type="text/css" href="../css/golfstyle.css" />
            <link rel="stylesheet" type="text/css" href="../css/golf-rtl.css" />
            <link href="https://fonts.googleapis.com/css?family=Assistant" rel="stylesheet" />
            <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
            {/* <!-- Latest compiled and minified JavaScript --> */}
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
            <script src="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>

            <body>
                <div className="container">
                    <div className="form_title">
                        <span>ההזמנות שלי</span>
                    </div>
                    <div className="my_orders_panel">
                        <div className="row my_orders_panel_title">
                            <div className="my_orders_panel_title_date pull-dir">
                                <span>17.4.16</span>
                            </div>
                             {/* <!-- End my_orders_panel_title_date --> */}
                            <div className="my_orders_panel_title_box pull-dir">
                                <div className="my_orders_panel_title_line_1">
                                    <span>יום ד'</span>
                                </div>
                                <div className="my_orders_panel_title_line_2 ">
                                    <span>17:40</span>
                                </div>
                            </div> 
                            {/* <!-- End my_orders_panel_title_box --> */}
                            <div className="my_orders_panel_title_box pull-dir ">
                                <div className="my_orders_panel_title_line_1">
                                    <span>מגרש</span>
                                </div>
                                <div className="my_orders_panel_title_line_2">
                                    <span>18 גומות</span>
                                </div>
                            </div> 
                            {/* <!-- End my_orders_panel_title_box --> */}
                        </div> 
                        {/* <!-- End my_orders_panel_title --> */}
                        <div className="my_orders_golfer_box">
                            <div className="my_orders_golfer_name">
                                <img src={golpherIcon}/>
                                    <span className="Name">ישראל ישראלי</span>
                            </div>
                            <div className="my_orders_golfer_clubs">
                                <div className="Ident"></div>
                                <span ><img src={golpherClub}/></span>
                                <span className="TextIdent">גבר | גרפיט | ימני</span>
                            </div>
                            <div className="my_orders_club_car">
                                <div className="Ident"></div>
                                <img src={clubCar}/>
                            </div>
                        </div>
                        {/* <!-- End my_orders_golfer_box --> */}
                        <div className="my_orders_golfer_box">
                            <div className="my_orders_golfer_name">
                                <img src={golpherIcon}/>
                                    <span className="Name">ישראל ישראלי</span>
                            </div>
                        </div>
                        {/* <!-- End my_orders_golfer_box2 --> */}
                        <div className="my_orders_footer">
                            <div className="pull-dir"><button type="button" className="btn btn-default">בטל השתתפות</button></div>
                            <div className="pull-opp-dir"><button type="button" className="btn btn-success">ערוך</button></div>
                        </div> 
                        {/* <!-- End my_orders_golfer_box --> */}
                    </div>
                    {/* <!-- End my_orders_panel --> */}
                    <div className="my_orders_panel">
                        <div className="row my_orders_panel_title">
                            <div className="my_orders_panel_title_date pull-dir">
                                <span>17.4.16</span>
                            </div> 
                            {/* <!-- End my_orders_panel_title_date --> */}
                            <div className="my_orders_panel_title_box pull-dir">
                                <div className="my_orders_panel_title_line_1">
                                    <span>יום ד'</span>
                                </div>
                                <div className="my_orders_panel_title_line_2 ">
                                    <span>17:40</span>
                                </div>
                            </div>
                             {/* <!-- End my_orders_panel_title_box --> */}
                            <div className="my_orders_panel_title_box pull-dir ">
                                <div className="my_orders_panel_title_line_1">
                                    <span>מגרש</span>
                                </div>
                                <div className="my_orders_panel_title_line_2">
                                    <span>18 גומות</span>
                                </div>
                            </div> 
                            {/* <!-- End my_orders_panel_title_box --> */}
                        </div>
                         {/* <!-- End my_orders_panel_title --> */}
                        <div className="my_orders_golfer_box">
                            <div className="my_orders_golfer_name">
                                <img src={golpherIcon}/>
                                    <span className="Name">ישראל ישראלי</span>
                            </div>
                            <div className="my_orders_golfer_clubs">
                                <div className="Ident"></div>
                                <span ><img src={golpherIcon}/></span>
                                <span className="TextIdent">גבר | גרפיט | ימני</span>
                            </div>
                            <div className="my_orders_club_car">
                                <div className="Ident"></div>
                                <img src={clubCar}/>
                            </div>
                        </div>
                        {/* <!-- End my_orders_golfer_box --> */}
                        <div className="my_orders_golfer_box">
                            <div className="my_orders_golfer_name">
                                <img src="../images/golpher-icon.png"/>
                                    <span className="Name">ישראל ישראלי</span>
                            </div>
                        </div>
                        {/* <!-- End my_orders_golfer_box2 --> */}
                        <div className="my_orders_footer">
                            <div className="pull-dir"><button type="button" className="btn btn-default">בטל השתתפות</button></div>
                            <div className="pull-opp-dir"><button type="button" className="btn btn-success">ערוך</button></div>

                        </div> 
                        {/* <!-- End my_orders_golfer_box --> */}
                    </div>
                </div>
                 {/* <!-- End container --> */}
                <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
                {/* <!-- Latest compiled and minified JavaScript --> */}
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
            </body>
        </div >
    )
}
