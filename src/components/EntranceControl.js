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

export default function EntranceControl() {
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
            <body>

                <div className="container">
                    <div className="form_title"> <span>בקרת כניסות למגרש</span> </div>
                    {/* <!-- End form_title --> */}
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-3"></div>
                        <div className="select_area col-xs-12 col-sm-8 col-md-6 col-lg-6">
                            <div className="form_subtitle "> <span id="ufld:FIELD_TYPE.DUMMY.MAALE">מגרש: 18 גומות</span> </div>
                            {/* <!-- End form_subtitle --> */}
                            <div className="pick_day_box">
                                <div className="backward_box col-xs-4 col-sm-3 col-md-3 col-lg-3 NoPadding">

                                    <div className="pull-dir"><button type="button" className="btn btn-default btn-sm" id="ufld:BACKWARD_F.DUMMY.MAALE" alt="שבעה ימים אחורה">&lt;&lt;</button></div>
                                    <div className="pull-dir  Padding-dir-7"><button type="button" className="btn btn-default btn-sm" id="ufld:BACKWARD_S.DUMMY.MAALE" alt="יום אחד לאחור">&lt;</button></div>

                                    <div className=" pull-dir"><img src={butWeekRight} className="img-responsive" id="ufld:BACKWARD_F.DUMMY.MAALE" alt="שבעה ימים אחורה" /></div>
                                    <div className=" pull-dir Padding-dir-7"><img src={butDayRight} className="img-responsive" id="ufld:BACKWARD_S.DUMMY.MAALE" alt="יום אחד לאחור" /></div>

                                </div>
                                {/* <!-- End back_box --> */}
                                <div className="selected_date col-xs-4 col-sm-6 col-md-6 col-lg-6 NoPadding"> <span id="ufld:PICKDATE.DUMMY.MAALE">06/06/2016</span> &nbsp;|&nbsp; <span id="ufld:H_E_DAY.DUMMY.MAALE">יום ב'</span> </div>
                                {/* <!-- End selected_date --> */}
                                <div className="forward_box col-xs-4 col-sm-3 col-md-3 col-lg-3 NoPadding">

                                    <div className="pull-opp-dir NoPadding"><button type="button" className="btn btn-default btn-sm" id="ufld:FORWARD_F.DUMMY.MAALE" alt="שבעה ימים קדימה">&gt;&gt;</button></div>
                                    <div className="pull-opp-dir Padding-opp-dir-7"><button type="button" className="btn btn-default btn-sm" id="ufld:FORWARD_S.DUMMY.MAALE" alt="יום אחד קדימה">&gt;</button></div>

                                    <div className="pull-opp-dir NoPadding "><img src={butWeekLeft} className="img-responsive" id="ufld:FORWARD_F.DUMMY.MAALE" alt="שבעה ימים קדימה" /></div>
                                    <div className="pull-opp-dir Padding-opp-dir-7"><img src={butDayLeft} className="img-responsive" id="ufld:FORWARD_S.DUMMY.MAALE" alt="יום אחד קדימה" /></div>
                                </div>
                                {/* <!-- End forward_box --> */}
                            </div>
                        </div>
                        {/* <!-- End pick_day_box --> */}
                    </div>
                    {/* <!-- End select_area -->
                    <!-- End hour_spread --> */}
                </div>

                <div className=" buttons-entrance-control">
                    <div className=" pull-opp-dir ">
                        <button type="button" id="" className="btn btn-info btn-reg-side"><span className="refresh-icon"></span> רענן</button>
                        <a href="#" data-toggle="modal" data-target="#PopUpModal" title="הוספת חבר">
                            <button type="button" id="" className="btn btn-info btn-reg-side "><span className="plus-icon"></span> הוסף כניסת חבר</button></a>
                    </div>
                </div>
                <div className="entrance-control-table">
                    <div className="col-xs-12 control-head">
                        <div className="col-xs-2 col-md-2">  שעת כניסה</div>
                        <div className="col-xs-2 col-md-2">עמדה </div>
                        <div className="col-xs-2 col-md-2"> מקור</div>
                        <div className="col-xs-2 col-md-2"> שם חבר</div>
                        <div className="col-xs-2 col-md-2 text-center">מאושר/לא מאושר </div>
                        <div className="col-xs-2 col-md-2 text-center">תמונה </div>
                    </div>

                    <div className="col-xs-12 control-line">
                        <div className="col-xs-2 col-md-2 ">11:21  <a href="#" data-toggle="modal" data-target="#member-entrance-img" title="תמונת כניסה"> <span className="camera-icon"></span></a></div>
                        <div className="col-xs-2 col-md-2">גומה 10 </div>
                        <div className="col-xs-2 col-md-2"> ידני</div>
                        <div className="col-xs-2 col-md-2 name-control">אלקובי דן</div>
                        <div className="col-xs-2 col-md-2"><span className="approved-icon"></span>  </div>
                        <div className="col-xs-2 col-md-2 text-center">  <a href="#" data-toggle="modal" data-target="#member-img" title="תמונת חבר"> <img src={picThumb} className="thumb-member" /> </a>   </div>
                        <div className="devider-control"></div>
                    </div>

                    <div className="col-xs-12 control-line">
                        <div className="col-xs-2 col-md-2 ">11:21 <a href="#" data-toggle="modal" data-target="#member-entrance-img" title="תמונת כניסה"> <span className="camera-icon"></span></a></div>
                        <div className="col-xs-2 col-md-2">מרשל  </div>
                        <div className="col-xs-2 col-md-2"> אוט'</div>
                        <div className="col-xs-2 col-md-2 name-control">אלקובי דן</div>
                        <div className="col-xs-2 col-md-2"><span className="forbidden-icon"></span>  </div>
                        <div className="col-xs-2 col-md-2 text-center">  <a href="#" data-toggle="modal" data-target="#member-img" title="תמונת חבר"> <img src={picThumb} className="thumb-member" /> </a>   </div>
                        <div className="devider-control"></div>
                    </div>

                    <div className="col-xs-12 control-line">
                        <div className="col-xs-2 col-md-2 ">11:21 <a href="#" data-toggle="modal" data-target="#member-entrance-img" title="תמונת כניסה"> <span className="camera-icon"></span></a></div>
                        <div className="col-xs-2 col-md-2">ידני  </div>
                        <div className="col-xs-2 col-md-2"> אוט'</div>
                        <div className="col-xs-2 col-md-2 name-control">אלקובי דן</div>
                        <div className="col-xs-2 col-md-2"><span className="approved-icon"></span>  </div>
                        <div className="col-xs-2 col-md-2 text-center">  <a href="#" data-toggle="modal" data-target="#member-img" title="תמונת חבר"> <img src={picThumb} className="thumb-member" /> </a>   </div>
                        <div className="devider-control"></div>
                    </div>

                    <div className="col-xs-12 control-line">
                        <div className="col-xs-2 col-md-2 ">11:21 <a href="#" data-toggle="modal" data-target="#member-entrance-img" title="תמונת כניסה"> <span className="camera-icon"></span></a></div>
                        <div className="col-xs-2 col-md-2">גומה 1 </div>
                        <div className="col-xs-2 col-md-2"> אוט'</div>
                        <div className="col-xs-2 col-md-2 name-control">אלקובי דן</div>
                        <div className="col-xs-2 col-md-2"><span className="approved-icon"></span>  </div>
                        <div className="col-xs-2 col-md-2 text-center">  <a href="#" data-toggle="modal" data-target="#member-img" title="תמונת חבר"> <img src={picThumb} className="thumb-member" /> </a>   </div>
                        <div className="devider-control"></div>
                    </div>

                </div>

                <div>פופאפים נוספים:</div>
                <div>
                    <a href="#" data-toggle="modal" data-target="#PopUpModal-approved" title="כניסה מאושרת">כניסה מאושרת</a>
                </div>
                <div>
                    <a href="#" data-toggle="modal" data-target="#PopUpModal-not-approved" title="כניסה לא מאושרת">כניסה לא מאושרת</a>

                </div>
                {/* <!-- End container --> */}


                {/* <!-- Modals--> */}
                <div className="modal fade in" id="PopUpModal" tabindex="-1" role="dialog" aria-hidden="false" >
                    <div className="modal-dialog modal-XL">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="LoadProposalTitle">הוספת חבר</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form">
                                    <div className="form_group">
                                        <div>
                                            <label for="ufld:GOLFER_CODE.DUMMY.MAALE" id="ufld:HEAD_TEXT.DUMMY.MAALE"> הכנס מס' או שם משתתף </label>
                                        </div>
                                        <div className="input_group">
                                            <input id="ufld:GOLFER_CODE.DUMMY.MAALE" value="" className="input-numner" />
                                            <span><img src={magnify} alt="גולף קיסריה" title="גולף קיסריה" className="magnify" /></span> </div>
                                    </div>
                                    <div className="form_group">
                                        <div className="golfer_mate_name"> <span id="ufld:GOLFER_NAME.DUMMY.MAALE">Static Text</span> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="golfer_mate_button">
                                    <button type="button" className="btn btn-success pull-opp-dir" id="ufld:PB_ACCEPT.DUMMY.MAALE">אישור</button>
                                    <button type="button" className="btn btn-md btn-default pull-dir" id="ufld:PB_CANCEL.DUMMY.MAALE">ביטול</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade in" id="PopUpModal-approved" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-XL">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="LoadProposalTitle">הוספת חבר</h4>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    ענת כהן
                                </div>
                                <div className="text-center entrance-approved">
                                    הכניסה מאושרת
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="golfer_mate_button">
                                    <button type="button" className="btn btn-success pull-opp-dir" id="ufld:PB_ACCEPT.DUMMY.MAALE">אישור</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade in" id="PopUpModal-not-approved" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-XL">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="LoadProposalTitle">הוספת חבר</h4>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    ענת כהן
                                </div>
                                <div className="text-center entrance-not-approved">
                                    כניסה לא מאושרת
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="golfer_mate_button">
                                    <button type="button" className="btn btn-success pull-opp-dir" id="ufld:PB_ACCEPT.DUMMY.MAALE">המשך ברישום</button>
                                    <button type="button" className="btn btn-md btn-default pull-dir" id="ufld:PB_CANCEL.DUMMY.MAALE">לא להמשיך ברישום</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade in" id="member-img" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-XL">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="LoadProposalTitle">אלקובי דן</h4>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img src={picMember} className="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade in" id="member-entrance-img" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-XL">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="LoadProposalTitle">אלקובי דן</h4>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img src={picMemberEntrance} className="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <!-- End Modals--> */}


                {/* 
                <script>
                    function jumpto(anchor){
                        location.hash = "#" + anchor;
              }
                </script> */}
                <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
                {/* <!-- Latest compiled and minified JavaScript --> */}
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
                <script src="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>
            </body>
        </div >
    )
}
