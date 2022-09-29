//images
import engFlag from '../images/eng-flag.png'
import teeTimeLogo from '../images/tee-time-logo.png'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css'

export default function GameOrderConfirmation() {
    return (
        <div >
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
            <body >
                {/* onbeforeunload=”HandleBackFunctionality()” */}
                <div className="container">
                    <div className="form_title"> <span id="ufld:TITLE_ORDER_GAME.DUMMY.MAALE">הזמנת משחק</span> </div>
                    <div className="order_panel">
                        <div className="row DateCenter">
                            <div className="my_orders_panel_title_date pull-dir"> <span>17.4.16</span> </div>
                            {/* <!-- End my_orders_panel_title_date --> */}
                            <div className="my_orders_panel_title_box pull-dir">
                                <div className="my_orders_panel_title_line_1"> <span>יום ד'</span> </div>
                                <div className="my_orders_panel_title_line_2 "> <span>17:40</span> </div>
                            </div>
                            {/* <!-- End my_orders_panel_title_box --> */}
                            <div className="my_orders_panel_title_box pull-dir ">
                                <div className="my_orders_panel_title_line_1"> <span>מגרש</span> </div>
                                <div className="my_orders_panel_title_line_2"> <span>18 גומות</span> </div>
                                {/* <!-- End my_orders_panel_title_box --> */}
                            </div>
                            {/* <!-- End orders_panel_title --> */}
                        </div>
                        <div className="Devider"></div>
                        <div className="form_subtitle"> <span id="ufld:TITLE_PARTICIPANT.DUMMY.MAALE">משתתפים</span> </div>
                        <div className="orders_golfer_box">
                            <div className="orders_golfer_name_box">
                                <div className="my_orders_golfer_name pull-dir"> <span id="ufld:CUST_NAME.GOLFER1.MAALE">ישראל ישראלי</span> </div>
                                <div id="remove_golfer_btn" className="pull-opp-dir">
                                    <button type="button" id="ufld:PB_REMOVE_GOLFER.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                </div>
                            </div>
                            {/* <!-- End orders_golfer_name_box --> */}

                            <div className="orders_golfer_car_box">
                                <div><div id="remove_golfer_btn" className="pull-opp-dir">
                                    <button type="button" id="ufld:PB_CAR.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                </div>
                                    <a href="#" className="OrderCarLink">
                                        <div className="add-car"></div>
                                        <div id="ufld:TITLE_ORDER_CAR.GOLFER1.MAALE" className="OrderCar">הזמן רכב</div>
                                    </a></div>


                                <div id="ufld:CAR_MESSAGE.GOLFER1.MAALE" className="CarAdded">צורף רכב להזמנה</div>
                            </div>
                            {/* <!-- End orders_golfer_car_box --> */}

                            <div className="orders_golfer_club_box">
                                <div>
                                    <div id="remove_golfer_btn" className="pull-opp-dir">
                                        <button type="button" id="ufld:PB_PB_STICK.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                    </div>
                                    <a href="#" className="OrderCarLink">
                                        <div className="add-golf"></div>
                                        <div id="ufld:TITLE_ORDER_BAT.GOLFER1.MAALE" className="OrderGolf">הזמן סט גולף</div>
                                    </a>

                                </div>

                                <div className="orders_golfer_club_type row NoPadding">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_gender_box NoPadding">
                                        <div id="ufld:TITLE1.GOLFER1.MAALE">בחר מגדר</div>
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_GNDR_M.GOLFER1.MAALE" checked autocomplete="off" />
                                                גבר </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_GNDR_F.GOLFER1.MAALE" autocomplete="off" />
                                                אישה </label>
                                        </div>
                                    </div>
                                    {/* <!-- End orders_golfer_gender_box --> */}

                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_mtrl_box NoPadding">
                                        <div id="ufld:TITLE2.GOLFER1.MAALE">בחר מחבט</div>
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_KIND_GRAFIT.GOLFER1.MAALE" checked autocomplete="off" />
                                                גרפיט </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_KIND_IRON.GOLFER1.MAALE" autocomplete="off" />
                                                ברזל </label>
                                        </div>

                                    </div>
                                    {/* <!-- End orders_golfer_mtrl_box --> */}

                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_hand_box NoPadding">
                                        <div id="ufld:TITLE3.GOLFER1.MAALE">בחר יד</div>

                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_HND_RIGHT.GOLFER1.MAALE" checked autocomplete="off" />
                                                יד ימין </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_HND_LEFT.GOLFER1.MAALE" autocomplete="off" />
                                                יד שמאל </label>
                                        </div>
                                    </div>
                                    {/* <!-- End orders_golfer_hand_box --> */}

                                </div>


                                <div className="orders_golfer_club_type row"> </div>
                            </div>
                        </div>
                        {/* <!-- End orders_golfer_box --> */}

                        <div className="orders_golfer_box">
                            <div className="orders_golfer_name_box">
                                <div className="my_orders_golfer_name pull-dir"> <span id="ufld:CUST_NAME.GOLFER1.MAALE">ישראל ישראלי</span> </div>
                                <div id="remove_golfer_btn" className="pull-opp-dir">
                                    <button type="button" id="ufld:PB_REMOVE_GOLFER.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                </div>
                            </div>
                            {/* <!-- End orders_golfer_name_box --> */}

                            <div className="orders_golfer_car_box">
                                <div><div id="remove_golfer_btn" className="pull-opp-dir">
                                    <button type="button" id="ufld:PB_CAR.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                </div>
                                    <a href="#" className="OrderCarLink">
                                        <div className="add-car"></div>
                                        <div id="ufld:TITLE_ORDER_CAR.GOLFER1.MAALE" className="OrderCar">הזמן רכב</div>
                                    </a></div>


                                <div id="ufld:CAR_MESSAGE.GOLFER1.MAALE" className="CarAdded">צורף רכב להזמנה</div>
                            </div>
                            {/* <!-- End orders_golfer_car_box --> */}

                            <div className="orders_golfer_club_box">
                                <div>
                                    <div id="remove_golfer_btn" className="pull-opp-dir">
                                        <button type="button" id="ufld:PB_PB_STICK.GOLFER1.MAALE" className="btn btn-sm btn-default">הסר</button>
                                    </div>
                                    <a href="#" className="OrderCarLink">
                                        <div className="add-golf"></div>
                                        <div id="ufld:TITLE_ORDER_BAT.GOLFER1.MAALE" className="OrderGolf">הזמן סט גולף</div>
                                    </a>
                                </div>
                                <div className="orders_golfer_club_type row NoPadding">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_gender_box NoPadding">
                                        <div id="ufld:TITLE1.GOLFER1.MAALE">בחר מגדר</div>
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_GNDR_M.GOLFER1.MAALE" checked autocomplete="off" />
                                                גבר </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_GNDR_F.GOLFER1.MAALE" autocomplete="off" />
                                                אישה </label>
                                        </div>
                                    </div>
                                    {/* <!-- End orders_golfer_gender_box --> */}

                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_mtrl_box NoPadding">
                                        <div id="ufld:TITLE2.GOLFER1.MAALE">בחר מחבט</div>
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_KIND_GRAFIT.GOLFER1.MAALE" checked autocomplete="off" />
                                                גרפיט </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_KIND_IRON.GOLFER1.MAALE" autocomplete="off" />
                                                ברזל </label>
                                        </div>

                                    </div>
                                    {/* <!-- End orders_golfer_mtrl_box --> */}

                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 orders_golfer_hand_box NoPadding">
                                        <div id="ufld:TITLE3.GOLFER1.MAALE">בחר יד</div>

                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" id="ufld:BTN_HND_RIGHT.GOLFER1.MAALE" checked autocomplete="off" />
                                                יד ימין </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" id="ufld:BTN_HND_LEFT.GOLFER1.MAALE" autocomplete="off" />
                                                יד שמאל </label>
                                        </div>
                                    </div>
                                    {/* <!-- End orders_golfer_hand_box --> */}

                                </div>
                                <div className="orders_golfer_club_type row"> </div>
                            </div>
                        </div>
                        {/* <!-- End orders_golfer_box --> */}
                    </div>
                    {/* <!-- End order_panel --> */}
                    <div className="add_golfer_box">
                        <a href="#" className="OrderCarLink">
                            <div className="add-friend"></div>
                            <div id="ufld:ADD_MEMBER.DUMMY.MAALE" className="OrderGolf">הוסף חבר</div>
                        </a>
                    </div>

                    <div className="ord_approval">
                        <button type="button" id="ufld:PB_ACCEPT.GOLFER1.MAALE" className="btn btn-sm btn-info btn-block btn-reg">אישור הזמנה</button>
                    </div>
                </div>
            </body >
        </div >
    )
}
