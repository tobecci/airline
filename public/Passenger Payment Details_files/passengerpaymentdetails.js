var oPaxDetailsInfo = {};
var oPaxDetailsError = null;
var oPaymentDetailsError = null;
var PaxPaymentDetailsBookingCurrency = null;
var oPaxPaymentDetailsTranslations = null;
var rePaxFieldIDPrefix = new RegExp("(passenger\\d+)");
var oPaxPaymentDetailsPaymentCharges = false;
var oPaxPaymentDetailsCurrentCardNumber = "";
var PaymentChargesApplicable = false;
var ConfirmingPaymentCharges = false;
var PaymentChargesConfirmed = true;
var sPaxPaymentDetailsPageRequestPrefix = "";
var IsTicketTimeLimitPaymentRequest = false;
var MaxNewRemarks = 10;
var PaymentTermsAndConditionsAccepted = false;
var IsPaymentAgentMode = false;
var AirMilesPaymentValidated = false;
//var oPassengerPaymentProperties = { "Payment": { "PaymentChargesEnabled": false }, "Passenger": {} };
wantInitDatpicker = false;

jQuery(document).ready(function () {
    try {
        if ((new RegExp("/Agent/", "i")).test(window.location.href)) {
            sPaxPaymentDetailsPageRequestPrefix = "../";
            IsPaymentAgentMode = true;
        }
        // try { $('li.expander').expander(); } catch (e) { }

        InitialisePassengerDetails();
        InitialisePaymentDetails();

        jQuery("#btnManageRemarksAddAnother, #btnManageRemarksRemoveLast").click(function () {
            btnAddRemoveNewRemark_onClick(jQuery(this));
        });

        try { FQTVMemberLoggedIn.addHandler(PassengerPaymentDetails_onFQTVMemberLoggedIn); } catch (e) { }
        DisplayPaymentMessage();
    } catch (e) { }
});


function DisableEnableCompleteBookingLinks(bDisable) {
    try {
        jQuery("#PageNavButtonTopBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPaymentDetailsNext").each(function () {
            jQuery(this).get(0).disabled = bDisable;
        });
    } catch (e) { }
}

function InitialisePaymentDetails() {
    try {

        oPaxPaymentDetailsCurrentCardNumber = "";
        jQuery("input[type=radio][id^=optpaymentformofpayment]").click(function () {
            FormOfPayment_onClick(jQuery(this));
        });

        PaymentChargesApplicable = false;
        jQuery("input:checked[type=radio][id^=optpaymentformofpayment]").each(function () {
            var re = new RegExp("'", "g");
            var reCCPayment = new RegExp("^(CreditCard|ManualCreditCard)$", "i");
            var oFOPRequest = null;

            try {
                oFOPRequest = jQuery.parseJSON(jQuery(this).val().replace(re, "\""));
                if (oFOPRequest.PaymentChargesEnabled) {
                    PaymentChargesApplicable = true;
                    if (reCCPayment.test(oFOPRequest.PaymentType)) {
                        jQuery("#paymentcardnumber").blur(function () {
                            ConfirmingPaymentCharges = false;
                            CardNumber_onChange(jQuery(this));
                        });
                    }
                }
            } catch (e) { }
        });

        jQuery("#chkpaymentuseleadpassengeraddress").click(function () {
        $('li.expander').expander();

        });

        if (jQuery("#chkpayment_agreetermsandconditions").length == 1) {
            jQuery("#chkpayment_agreetermsandconditions").get(0).checked = PaymentTermsAndConditionsAccepted;
        }

    } catch (e) { }
}

/*
    get height including not visible fields
*/
function GetColHeight( selector ) {
var newHeight = 0;
$(selector).children().each( function() {
newHeight += $(this).height();
});
return newHeight;
}
function GetColVertPadding( selector ) {
return (parseInt($(selector).css('padding-top'), 10) + parseInt($(selector).css('padding-bottom'), 10));
}
/* set up column layout */
function SizePaymnentColsToFit() {
    try {
        $(".PassengerDetailsPanelAdult").each(function () {

            // N.B. scrollHeight does not work in FireFox
            var col1Height = Math.max($(this).find(".PassengerDetailsColumn1").height(), GetColHeight($(this).find(".PassengerDetailsColumn1")) - GetColVertPadding($(this).find(".PassengerDetailsColumn1")));
            var col2Height = Math.max($(this).find(".PassengerDetailsColumn2").height(), GetColHeight($(this).find(".PassengerDetailsColumn2")) - GetColVertPadding($(this).find(".PassengerDetailsColumn2")));
            var col3Height = Math.max($(this).find(".PassengerDetailsColumn3").height(), GetColHeight($(this).find(".PassengerDetailsColumn3")) - GetColVertPadding($(this).find(".PassengerDetailsColumn3")));

            var colMax = Math.max(col1Height, col2Height, col3Height);
            /* set this for all three */
            $(this).find(".PassengerDetailsColumn1").height(colMax);
            $(this).find(".PassengerDetailsColumn2").height(colMax);
            $(this).find(".PassengerDetailsColumn3").height(colMax);

        });
        /* widths */
        var col1w = $(".PassengerDetailsColumn1").outerWidth();
        var col2w = $(".PassengerDetailsColumn2").outerWidth();
        var sepw = $(".PassengerDetailsSeparator").outerWidth() * 3;
        var colw = $(".PassengerDetailsPanel").innerWidth();
        var col3Padding = parseInt($(".PassengerDetailsColumn3").css('padding-left'), 10) + parseInt($(".PassengerDetailsColumn3").css('padding-right'), 10);
        $(".PassengerDetailsColumn3").width(colw - col1w - col2w - col3Padding - sepw);
    } catch (e) { }
}


function InitialisePassengerDetails() {
    try {

        /* set up column layout */
        SizePaymnentColsToFit();

        jQuery("input[type=hidden][id$=passengertype]").each(function () {
            try {
                var sPaxType = jQuery(this).val();
                var sPaxIndex = jQuery(this).attr("id").replace("passenger", "").replace("passengertype", "");
                try { InitialiseDatePicker("-120y", "-0d"); } catch (e) { }
                InitialisePaxDOBObject(sPaxIndex, sPaxType);
            } catch (e) { }
        });

        jQuery("input[type=text][id$=passportissuedate]").each(function () {
            jQuery(this).datepicker("option", { "dateFormat": "dd-M-yy", "minDate": "-20y", "maxDate": "-1d", "changeYear": true, "yearRange": "c-20:c+10" });
        });

        jQuery("input[type=text][id$=passportexpirydate]").each(function () {
            $(this).datepicker({ dateFormat: "dd-M-yy", minDate: "-1y", maxDate: "+20y", closeText: "Close", showButtonPanel: true, changeYear: true });
            jQuery(this).datepicker("option", { "changeYear": true, "yearRange": "c-10:c+20" });
        });

        jQuery("input[type=radio][id$=specialservicerequest]").click(function () {
            try {
                var fldIDPrefix = jQuery(this).attr("id");
                var selectedValue = jQuery(this).val();
                var oDiv = jQuery("#div" + fldIDPrefix + "_selecteditems");

                switch (selectedValue) {
                    case "0":
                        jQuery("input[type=checkbox][id^=" + fldIDPrefix + "_ssritem]").each(function () {
                            jQuery(this).get(0).checked = false;
                        });

                        oDiv.hide();
                        break;
                    default:
                        oDiv.show();
                        break;
                }
                // resize 
                setTimeout("SizePaymnentColsToFit()", 1000);
            } catch (e) { }
        });

        jQuery("input[type=text][id$=phonenumber]").click(function () {
            jQuery(this).get(0).select();
        });

        jQuery("input[type=checkbox][id$=ffpquickregistration]").click(function () {
            try {
                var fld = jQuery("#" + jQuery(this).attr("id"));
                var sPaxIndex = fld.get(0).value;
                var fldPrefix = "passenger" + sPaxIndex + "ffpquickregistration";

                if (fld.get(0).checked) {
                    try {
                        jQuery("#passenger" + sPaxIndex + "ffpnumber").get(0).value = "";
                        if (jQuery("#passenger" + sPaxIndex + "ffp").length == 1) { jQuery("#passenger" + sPaxIndex + "ffp").get(0).selectedIndex = 0; }
                    } catch (e) { }
                    jQuery("#div" + fldPrefix + "panel").show();
                } else {
                    jQuery("#" + fldPrefix + "password").get(0).value = "";
                    jQuery("#" + fldPrefix + "confirmpassword").get(0).value = "";
                    jQuery("#div" + fldPrefix + "panel").hide();
                }
            } catch (e) { }
        });

        jQuery("span[id$=ffpreminderlink]").css({ "cursor": "pointer" }).click(function () {
            DoFQTVForgotUserName(jQuery(this));
        });

        jQuery("#spanFrequentFlyerLogin_ForgotDetails").css({ "cursor": "pointer" }).click(function () {
            try { IBEMasterPage_GetFQTVForgotAccountLoginDetailsDialog(); } catch (e) { }
        });

        jQuery("span[id$=specialservicerequest_clearlist]").click(function () {
            try {
                var fldPrefix = jQuery(this).attr("id").replace("specialservicerequest_clearlist", "").replace("span", "");
                jQuery("input[type=radio][id=" + fldPrefix + "specialservicerequest]").click();
            } catch (e) { }
        });

        jQuery("#btnFqtvLogin").click(function () {
            var url = "WebServices/MmbWS.asmx/GetFqtvLoginDialog";
            // ShowLoadingProgressDialog("Please Wait...");
            if ((new RegExp("/Agent/", "i")).test(window.location.href) || (new RegExp("/mmb/", "i")).test(window.location.href) || (new RegExp("/fqtv/", "i")).test(window.location.href)) {
                // agent page
                url = "../" + url;
            }
            SendAjaxRequest(url, "", "html", GetFqtvLoginDialog_onSuccess, null, "");
            return false;
        });


        if (jQuery("#btnFrequentFlyerLogin_Login").length == 1) {
            jQuery("#btnFrequentFlyerLogin_Login").unbind("click").click(function () {
                if (jQuery("#txtFrequentFlyerLoginUsername").length == 1) {
                    IBEMasterPage_DoFQTVMemberLogin(jQuery("#txtFrequentFlyerLoginUsername").val(), jQuery("#txtFrequentFlyerLoginPassword").val());
                }
                return false;
            });
        }

        jQuery("input[type=checkbox][id$=connectingflight]").click(function () {
            var detailsFld = jQuery("#" + jQuery(this).attr("id") + "details");
            if (detailsFld.length == 1) {
                if (detailsFld.is(":visible")) {
                    if (jQuery(this).get(0).checked) {
                        detailsFld.get(0).disabled = false;
                    } else {
                        detailsFld.val("");
                        detailsFld.get(0).disabled = true;
                    }
                }
            }
        });

        InitPaxDetails();

    } catch (e) { }
}

function RemoveQueryString() {
    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }
    //Display the new URL without any querystrings.
    //alert(document.URL);
}

function GetFqtvLoginDialog_onSuccess(msg) {
    try {
        if (msg.Data != null) {
            if (msg.Data != "") {
                var oButtons = {
                    "Ok": function () {
                        IBEMasterPage_DoFQTVMemberLogin(jQuery("#txtFrequentFlyerLoginUsername").val(), jQuery("#txtFrequentFlyerLoginPassword").val());
                    },
                    Cancel: function () {
                        jQuery(this).dialog("destroy");
                    }
                }

                ShowModalDialog(msg.Data, msg.ErrorBoxTitle, 200, 200, oButtons);

                // enter key pressed
                $("#txtFrequentFlyerLoginPassword").bind('keypress', function (e) {
                    var code = (e.keyCode ? e.keyCode : e.which);
                    if (code == 13) {
                        //Enter keycode   
                        e.preventDefault();
                        IBEMasterPage_DoFQTVMemberLogin(jQuery("#txtFrequentFlyerLoginUsername").val(), jQuery("#txtFrequentFlyerLoginPassword").val());
                    }
                });

            }
        }
    } catch (e) { }
}


function InitialisePaxDOBObject(sPaxIndex, sPaxType) {
    try {
        
        var iPaxTypeCode = 0;
        var oDOBField = jQuery("input.datepicker[type=text][id=passenger" + sPaxIndex + "dob]");
        var iYearNow = parseInt((new Date()).getFullYear(), 10);
        var dMinDate;
        var dMaxDate;
        var dMinYear;
        var dMaxYear;
        try { iPaxTypeCode = parseInt(sPaxType, 10); } catch (e) { }

        if (oDOBField.length == 1) {

            switch (iPaxTypeCode) {
                case oPaxDetailsInfo.Seniors.PaxTypeCode:
                    dMinDate = new Date(oPaxDetailsInfo.Seniors.MinDateParams[0], oPaxDetailsInfo.Seniors.MinDateParams[1], oPaxDetailsInfo.Seniors.MinDateParams[2], 0, 0, 0);
                    dMaxDate = new Date(oPaxDetailsInfo.Seniors.MaxDateParams[0], oPaxDetailsInfo.Seniors.MaxDateParams[1], oPaxDetailsInfo.Seniors.MaxDateParams[2], 0, 0, 0);
                    dMinYear = oPaxDetailsInfo.Seniors.MinDateParams[0];
                    dMaxYear = oPaxDetailsInfo.Seniors.MaxDateParams[0];
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    // oDOBField.datepicker("option", { "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true, "yearRange": oPaxDetailsInfo.Children.MinDateParams[0].toString() + ":" + oPaxDetailsInfo.Children.MaxDateParams[0].toString() }); //, "yearRange": "c-15:c+15"
                    oDOBField.datepicker("option", { "yearRange": dMinYear + ":" + dMaxYear , "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true }); //, "yearRange": "c-15:c+15"
                    break;
                case oPaxDetailsInfo.Children.PaxTypeCode:
                    dMinDate = new Date(oPaxDetailsInfo.Children.MinDateParams[0], oPaxDetailsInfo.Children.MinDateParams[1], oPaxDetailsInfo.Children.MinDateParams[2], 0, 0, 0);
                    dMaxDate = new Date(oPaxDetailsInfo.Children.MaxDateParams[0], oPaxDetailsInfo.Children.MaxDateParams[1], oPaxDetailsInfo.Children.MaxDateParams[2], 0, 0, 0);
                    dMinYear = oPaxDetailsInfo.Children.MinDateParams[0];
                    dMaxYear = oPaxDetailsInfo.Children.MaxDateParams[0];
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    // oDOBField.datepicker("option", { "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true, "yearRange": oPaxDetailsInfo.Children.MinDateParams[0].toString() + ":" + oPaxDetailsInfo.Children.MaxDateParams[0].toString() }); //, "yearRange": "c-15:c+15"
                    oDOBField.datepicker("option", { "yearRange": dMinYear + ":" + dMaxYear , "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true }); //, "yearRange": "c-15:c+15"
                    break;
                case oPaxDetailsInfo.SmallChildren.PaxTypeCode:
                    dMinDate = new Date(oPaxDetailsInfo.SmallChildren.MinDateParams[0], oPaxDetailsInfo.SmallChildren.MinDateParams[1], oPaxDetailsInfo.SmallChildren.MinDateParams[2], 0, 0, 0);
                    dMaxDate = new Date(oPaxDetailsInfo.SmallChildren.MaxDateParams[0], oPaxDetailsInfo.SmallChildren.MaxDateParams[1], oPaxDetailsInfo.SmallChildren.MaxDateParams[2], 0, 0, 0);
                    dMinYear = oPaxDetailsInfo.SmallChildren.MinDateParams[0];
                    dMaxYear = oPaxDetailsInfo.SmallChildren.MaxDateParams[0];
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    // oDOBField.datepicker("option", { "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true, "yearRange": oPaxDetailsInfo.Children.eMinDateParams[0].toString() + ":" + oPaxDetailsInfo.Children.MaxDateParams[0].toString() }); //, "yearRange": "c-15:c+15"
                    oDOBField.datepicker("option", { "yearRange": dMinYear + ":" + dMaxYear, "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true }); //, "yearRange": "c-15:c+15"
                    break;
                case oPaxDetailsInfo.Infants.PaxTypeCode:
                    dMinDate = new Date(oPaxDetailsInfo.Infants.MinDateParams[0], oPaxDetailsInfo.Infants.MinDateParams[1], oPaxDetailsInfo.Infants.MinDateParams[2], 0, 0, 0);
                    dMaxDate = new Date(oPaxDetailsInfo.Infants.MaxDateParams[0], oPaxDetailsInfo.Infants.MaxDateParams[1], oPaxDetailsInfo.Infants.MaxDateParams[2], 0, 0, 0);
                    dMinYear = oPaxDetailsInfo.Infants.MinDateParams[0];
                    dMaxYear = oPaxDetailsInfo.Infants.MaxDateParams[0];
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    oDOBField.datepicker("option", { "yearRange": dMinYear + ":" + dMaxYear, "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true });
                    break;
                case oPaxDetailsInfo.Youths.PaxTypeCode:
                    dMinDate = new Date(oPaxDetailsInfo.Youths.MinDateParams[0], oPaxDetailsInfo.Youths.MinDateParams[1], oPaxDetailsInfo.Youths.MinDateParams[2], 0, 0, 0);
                    dMaxDate = new Date(oPaxDetailsInfo.Youths.MaxDateParams[0], oPaxDetailsInfo.Youths.MaxDateParams[1], oPaxDetailsInfo.Youths.MaxDateParams[2], 0, 0, 0);
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    dMinYear = oPaxDetailsInfo.Youths.MinDateParams[0];
                    dMaxYear = oPaxDetailsInfo.Youths.MaxDateParams[0];
                    oDOBField.datepicker("option", { "yearRange": dMinYear + ":" + dMaxYear, "minDate": dMinDate, "maxDate": dMaxDate, "changeYear": true });
                    break;
                default:
                    dMaxDate = new Date(oPaxDetailsInfo.Children.MaxDateParams[0], oPaxDetailsInfo.Children.MaxDateParams[1], oPaxDetailsInfo.Children.MaxDateParams[2], 0, 0, 0);
                    iYearNow = parseInt(dMaxDate.getFullYear(), 10);
                    oDOBField.datepicker("option", {  "minDate": "-150y", "maxDate": dMaxDate, "changeYear": true, "yearRange": "c-120:c+120" }); //, "yearRange": "c-15:c+15"
                    break;
            }
        }
    } catch (e) { }
}

function CompleteBooking(bsWait) {
    var CompleteBookingRequest = { "CompleteBookingRequest": { "Passengers": [], "Payments": null } };   //, "PaymentsPaymentScheme": []
    var paxField = null;
    var sDefaultErrorMessage = "";
    var sPleaseWaitMessage = "";
    var iLoop;

    try {
        // clear old errors
        $('.PassengerDetailsErrorField').removeClass('PassengerDetailsErrorField');
        if (!IsTermsAndCondictionsAccepted()) {
            enableButtons();
            return false;
        }

        IsTicketTimeLimitPaymentRequest = false;
        // confirm payment charges if applicable
        if ((PaymentChargesApplicable) && (!PaymentChargesConfirmed)) {
            ConfirmingPaymentCharges = true;
            oPaxPaymentDetailsCurrentCardNumber = "";
            if (jQuery("#paymentcardnumber").length == 1) {
                CardNumber_onChange(jQuery("#paymentcardnumber"));
                enableButtons();
                return false;
            }
        }
        ConfirmingPaymentCharges = false;

        if (!AirMilesPaymentValidated) {
            if (jQuery("#formofpaymentredeemingairmiles").length == 1) {
                if (jQuery("#formofpaymentredeemingairmiles").val().toLowerCase() == "true") {
                    ValidateRedeemAirMiles();
                    enableButtons();
                    return false;
                } else {
                AirMilesPaymentValidated = true;
                }
            } else {
                AirMilesPaymentValidated = true;
            }
        }
        if (jQuery("#passenger1firstname").length > 0 ) {
            for (iLoop = 1; iLoop <= oPaxDetailsInfo.NoPassengers; iLoop++) {
                oPassenger = GetNewPassengerObject(iLoop);
                oPassenger.Title = GetPaxFieldValue(iLoop, "title", null);
                oPassenger.FirstName = GetPaxFieldValue(iLoop, "firstname", null);
                oPassenger.MiddleName = GetPaxFieldValue(iLoop, "middlename", null);
                oPassenger.RedressNo = GetPaxFieldValue(iLoop, "redressno", null);
                oPassenger.Surname = GetPaxFieldValue(iLoop, "lastname", null);
                oPassenger.AdsNo = GetPaxFieldValue(iLoop, "adsno", null);
                oPassenger.AdsPin = GetPaxFieldValue(iLoop, "adspin", null);
                oPassenger.ADSChecked = GetPaxFieldValue(iLoop, "adschecked", null);
                oPassenger.FQTVno = GetPaxFieldValue(iLoop, "fqtvno", null);
                if (iLoop == 1) {
                    oPassenger.FQTVpw = GetPaxFieldValue(iLoop, "FQTVpassword", null);
                }
                paxField = GetPaxFieldValue(iLoop, "dob", null);
                if (paxField != null) { oPassenger.DateOfBirth = paxField.toDateString(); } // new Date(2000, 0, 1); //

                oPassenger.ContactEmailAddress = GetPaxContactFieldValue(iLoop, "emailaddress");
                oPassenger.EmailAddressVerification = GetPaxFieldValue(iLoop, "emailaddressverification", null);
                oPassenger.EmailMessageFormat = GetPaxFieldValue(iLoop, "emailmessageformat", null);

                paxField = null;
                paxField = GetPaxContactPhoneNumbersFieldValue(iLoop);
                if (paxField != null) { oPassenger.ContactPhoneNumbers = paxField; }


                oPassenger.CountryOfResidence = GetPaxFieldValue(iLoop, "countryofresidence", null);

                oPassenger.FrequentFlyerInfo = GetPaxFrequentFlyerFieldValue(iLoop, "ffpno");

                oPassenger.Gender = GetPaxFieldValue(iLoop, "gender", null);

                paxField = null;
                paxField = GetPaxFieldValue(iLoop, "mealrequest", null);
                if (paxField != null) { oPassenger.MealRequest = paxField; }

                paxField = null;
                paxField = GetPaxFieldValue(iLoop, "specialservicerequest", null);
                if (paxField != null) { oPassenger.SpecialServiceRequests = paxField; }

                if (iLoop == 1) {
                    oPassenger.ConnectingFlight = GetPaxFieldValue(iLoop, "connectingflight", null);
                    oPassenger.OtherInformation = GetPaxFieldValue(iLoop, "otherinformation", null);
                }

                oPassenger.Weight = GetPaxFieldValue(iLoop, "paxweight", null);
                oPassenger.Passport = GetPaxPassportFieldValue(iLoop, "passportnumber");
                oPassenger.ReceiveNewsletter = GetPaxFieldCheckedValue(iLoop, "newsletter");
                oPassenger.RememberDetailsInCookie = GetPaxFieldCheckedValue(iLoop, "rememberdetailsincookie");
                oPassenger.MarketingOptIn = GetPaxFieldCheckedValue(iLoop, "marketingoptin");
                oPassenger.MarketingCountry = GetPaxFieldValue(iLoop, "marketingcountry", null);
                oPassenger.MarketingPostCode = GetPaxFieldValue(iLoop, "marketingpostcode", null);
                oPassenger.MarketingCity = GetPaxFieldValue(iLoop, "marketingcity", null);
                oPassenger.PaxExtraField = GetPaxFieldValue(iLoop, "paxExtraField", null);
                oPassenger.IsPWD = GetPaxFieldCheckedValue(iLoop, "SeniorDisabilityResidentDiscountchkResidentDiscount", null);
                oPassenger.DisabilitySeniorDiscountCode = GetPaxFieldValue(iLoop, "SeniorDisabilityResidentDiscount", null);
                
                CompleteBookingRequest.CompleteBookingRequest.Passengers[iLoop - 1] = oPassenger;
            }
        }

     //   CompleteBookingRequest.CompleteBookingRequest.Payments = GetPaymentData();
        if ((CompleteBookingRequest.CompleteBookingRequest.Payments == null) && (IsTicketTimeLimitPaymentRequest)) {
            //CompleteBookingRequest.CompleteBookingRequest.IsTicketTimeLimit = true;
            CompleteBookingRequest.CompleteBookingRequest.TicketTimeLimit = {};
        }

        CompleteBookingRequest.CompleteBookingRequest.PaxRelatedProducts = GetPaxRelatedProducts();
        CompleteBookingRequest.CompleteBookingRequest.BookingRemarks = GetBookingRemarks();

        if (jQuery("#txtAgentPassword").length == 1) {
            CompleteBookingRequest.CompleteBookingRequest.AgentPassword = jQuery("#txtAgentPassword").val();
            jQuery("#txtAgentPassword").removeClass("PassengerDetailsErrorField");
        }

        var ErrorMsg = "";
        ErrorMsg = ValidatePaymentFields("",bsWait)
        if (ErrorMsg.length > 0) {
            ShowModalDialog(ErrorMsg);
            enableButtons();
            return false;
        }

        CompleteBookingRequest.CompleteBookingRequest.AdditionalBookingInfo = GetAdditionalBookingInfo();

        //CompleteBookingRequest.CompleteBookingRequest.formData = $("form").serializeArray();
        CompleteBookingRequest.CompleteBookingRequest.formData = $("#divPaxDetails").serializeArray();
        CompleteBookingRequest.CompleteBookingRequest.paymentFormData = $("input:checked[type=radio][id^=optpaymentformofpayment]").parent().parent().find('input, select').serializeArray();
   /*      CompleteBookingRequest.CompleteBookingRequest.paymentFormData = $('.PayOptTable.Selected').find('input').serializeArray(); */
        var oFormData = getJSONStringFromObject(CompleteBookingRequest);
        oFormData = oFormData.replace('"[{', '[{').replace('}]"', '}]').replace('"{','{').replace('}"','}');
        
        oPaxDetailsError = null;
        oPaymentDetailsError = null;
        try { sDefaultErrorMessage = oPaxPaymentDetailsTranslations.DefaultSaveErrorMessage; } catch (e) { }
        try { sPleaseWaitMessage = oPaxPaymentDetailsTranslations.DefaultSavingMessage; } catch (e) { }

        jQuery("input[type=checkbox][id*=paxrelateproduct]").removeClass("PassengerDetailsErrorField");
        //if (IsPaymentDataValid()) {
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/ValidateBooking", oFormData, null, ValidateBooking_onSuccess, ValidateBooking_onError, sDefaultErrorMessage, true, sPleaseWaitMessage, null, null, bsWait); //, 130000
        //}
    } catch (e) {  }
}

function IsPaymentDataValid() {
    var form = "";
    return true;
}

function IsTermsAndCondictionsAccepted() {
    var IsAccepted = true;
    var IsPaymentTermsAccepted = true;
    //var sAgreeTermsAndConditionsError = "You must accept the terms and conditions before proceeeding.";
    //var sAgreePaymentTermsAndConditionsError = "You must accept the payment terms and conditions before proceeding.";
    //var sAgreeTermsAndConditionsError = PaymentTranslationsMsgs.AgreeTermsAndConditionsError.html;
    
    var sErrorMessage = "";
    var ErrMsg = PaymentTranslationsMsgs.AgreeTermsAndConditionsError;
    var ErrorMessageCount = 0;

    try {
        if (jQuery("#chkAgreeTermsAndConditions").length == 1) {
            IsAccepted = jQuery("#chkAgreeTermsAndConditions").get(0).checked;

            if (!IsAccepted) {
               // try { sAgreeTermsAndConditionsError = oPaxPaymentDetailsTranslations.AgreeTermsAndConditionsError; } catch (e) { }
                // sErrorMessage = sAgreeTermsAndConditionsError;
                ErrorMessageCount += 1;
            }
        }

        if (jQuery("#chkpayment_agreetermsandconditions").length == 1) {
            IsPaymentTermsAccepted = jQuery("#chkpayment_agreetermsandconditions").get(0).checked;
            PaymentTermsAndConditionsAccepted = IsPaymentTermsAccepted;

            if (!IsPaymentTermsAccepted) {
                //try { sAgreePaymentTermsAndConditionsError = PaymentTranslationsMsgs.AgreePaymentTermsAndConditionsError.html; } catch (e) { }
                //try { sAgreePaymentTermsAndConditionsError = oPaxPaymentDetailsTranslations.AgreePaymentTermsAndConditionsError; } catch (e) { }
                if (ErrorMessageCount == 0) {
                    //sErrorMessage = sAgreePaymentTermsAndConditionsError;
                    ErrMsg = PaymentTranslationsMsgs.AgreePaymentTermsAndConditionsError;
                } else {
                    ErrMsg.html += PaymentTranslationsMsgs.AgreePaymentTermsAndConditionsError.html;
                    //sErrorMessage = "<li>" + sErrorMessage + "</li><li>" + sAgreePaymentTermsAndConditionsError + "</li>";
                }
                ErrorMessageCount += 1;
            }
        }

        if (ErrorMessageCount == 1) {
            //ShowIBEMasterModalDialog(sErrorMessage);
            modalDialog(ErrMsg);
        } else if (ErrorMessageCount > 1) {
            //ShowIBEMasterModalDialog("<ul>" + sErrorMessage + "</ul>", "auto", "auto");
            modalDialog(ErrMsg);
        }
    } catch (e) { }

    return (IsAccepted && IsPaymentTermsAccepted);
}

function ValidateBooking_onSuccess(msg) {
    var sDefaultErrorMessage = "";
    var sPleaseWaitMessage = "";

    try {
        if (msg.Requires3DSecureVerification) {

        } else {
            try { sDefaultErrorMessage = oPaxPaymentDetailsTranslations.DefaultSaveErrorMessage; } catch (e) { }
            try { sPleaseWaitMessage = oPaxPaymentDetailsTranslations.DefaultSavingMessage; } catch (e) { }
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/CompleteBooking", null, null, CompleteBooking_onSuccess, CompleteBooking_onError, sDefaultErrorMessage, true, sPleaseWaitMessage, null, null, msg.bsWait); //, 130000
        }
    } catch (e) { }
}

function ValidateBooking_onError(errormsg, msg) {
    var oDiv = null;
    var HasPassengerDetailsError = false;
    var HasPaymentDetailsError = false;
    var HasPaxRelatedProductsError = false;
    var InvalidAgentPassword = false;
    var oButtons;

    try {
        if (msg != null) {
            try { HasPassengerDetailsError = ((msg.PassengerDetailsErrorMsg != null) && (msg.PassengerDetailsErrorMsg.length > 0)); } catch (e) { }
            try { HasPaymentDetailsError = ((msg.PaymentDetailsErrorMsg != null) && (msg.PaymentDetailsErrorMsg.length > 0)); } catch (e) { }
            try { HasPaxRelatedProductsError = ((msg.PaxRelatedProductsErrorMsg != null) && (msg.PaxRelatedProductsErrorMsg.length > 0)); } catch (e) { }
            try { InvalidAgentPassword = ((msg.AgentPasswordErrorMsg != null) && (msg.AgentPasswordErrorMsg.length > 0)); } catch (e) { }

            if (HasPassengerDetailsError || HasPaymentDetailsError || HasPaxRelatedProductsError || InvalidAgentPassword) {
                if (HasPassengerDetailsError) {
                    if ($("#divPaxDetails").children().length > 0) {
                        if (msg.PassengerDetailsFormData.length > 0) {
                            $("#divPaxDetails").html(msg.PassengerDetailsFormData);
                        }
                    } else {
                        oDiv = jQuery("div[id$=divPassengerDetailsUIPanel]");
                        if (oDiv.length == 1) {
                            if (msg.PassengerDetailsFormData.length > 0) {
                                oDiv.html(msg.PassengerDetailsFormData);
                            }
                        }
                    }
                    InitialisePassengerDetails();
                }

                if (HasPaymentDetailsError) {
                    oDiv = jQuery("div[id$=divPaymentDetailsUIPanel]");
                    if (oDiv.length == 1) {
                        if (msg.PaymentDetailsFormData.length > 0) {
                            oDiv.html(msg.PaymentDetailsFormData);
                        }
                        InitialisePaymentDetails();
                    }
                }

                try { IBEMasterInitialiseHelp(); } catch (e) { }

                oButtons = { "OK": function () { jQuery(this).dialog("destroy"); oPaxDetailsError = null; oPaymentDetailsError = null; } };

                if (HasPaxRelatedProductsError) {
                    oPaxDetailsError = (oPaxDetailsError == null) ? msg.PaxRelatedProductsErrorMsg : oPaxDetailsError += msg.PaxRelatedProductsErrorMsg;
                    jQuery("input:not(:checked)[type=checkbox][id*=paxrelateproduct]").addClass("PassengerDetailsErrorField");
                }

                if (InvalidAgentPassword) {
                    oPaxDetailsError = (oPaxDetailsError == null) ? msg.AgentPasswordErrorMsg : oPaxDetailsError += msg.AgentPasswordErrorMsg;
                    jQuery("#txtAgentPassword").addClass("PassengerDetailsErrorField");
                }

                if (oPaxDetailsError != null) {
                    if (oPaymentDetailsError != null) {
                        oButtons = { "OK": function () {
                            jQuery(this).dialog("destroy");
                            ShowModalDialog(oPaymentDetailsError, "", "auto", "auto", { "OK": function () { jQuery(this).dialog("destroy"); oPaxDetailsError = null; oPaymentDetailsError = null; } });
                            oPaymentDetailsError = null;
                        }
                        };
                        ShowModalDialog(oPaxDetailsError, "", "auto", "auto", oButtons);

                    } else {
                        ShowModalDialog(oPaxDetailsError,"",  "auto", "auto", oButtons);
                        oPaxDetailsError = null;
                        jQuery("div[id$=divPaymentDetailsUIPanel]").find("input.PaymentDetailsErrorField").each(function () {
                            jQuery(this).removeClass("PaymentDetailsErrorField");
                        });
                    }
                } else if (oPaymentDetailsError != null) {
                    ShowModalDialog(oPaymentDetailsError, "", "auto", "auto", oButtons);
                    oPaymentDetailsError = null;
                    jQuery("div[id$=divPassengerDetailsUIPanel]").find("input.PassengerDetailsErrorField").each(function () {
                        jQuery(this).removeClass("PassengerDetailsErrorField");
                    });
                } else if (msg.PaymentDetailsErrorMsg != null && msg.PaymentDetailsErrorMsg != "") {
                    ShowModalDialog(msg.PaymentDetailsErrorMsg, "","auto", "auto", oButtons);
                } else {
                    ShowModalDialog(errormsg);
                }
            } else {
                ShowModalDialog(errormsg);
            }
        }
    } catch (e) { }
}



function CompleteBooking_onSuccess(msg) {
    var oButtons = null;
    var sNextURL = "Logout.aspx";
    var sPleaseWaitMessage = "";

    try {
        if (msg.Result == "WAIT") {
            // UpdateLoadingProgressDialog(msg.ErrorMsg);
            // retry complete
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/CheckBookingState", null, null, CompleteBooking_onSuccess, CompleteBooking_onError, msg.ErrorMsg, true, msg.ErrorMsg, null, null, msg.bsWait); //, 130000
        } else if (msg.ResponseAction == "DisplayMessage") {
            oButtons = {
                "OK": function () {
                    jQuery(this).dialog("destroy");
                }
            };
            ShowModalDialog(msg.Data,"", "auto", "auto", oButtons);
        
        } else if ((msg.ExternalPaymentURL != null) && (msg.ExternalPaymentURL.length > 0)) {
            //external payment - post form
            // window.top.location = msg.ExternalPaymentURL;

            var rePaymentPageTarget = new RegExp("_top", "i");
            var PaymentPageTarget = "";
            var PaymentPageFormData = "";
            var PreTransactionDisplayMessage = "";
            var ExternalHTTPMethod = "";
            //var ExternalPaymentFingerPrint = "";

            try { PaymentPageTarget = (msg.ExternalPaymentURLTarget == null) ? "" : msg.ExternalPaymentURLTarget; } catch (e) { }
            try { PaymentPageFormData = (msg.ExternalPaymentFormData == null) ? "" : msg.ExternalPaymentFormData; } catch (e) { }
            try { ExternalHTTPMethod = (msg.ExternalHTTPMethod == null) ? "" : msg.ExternalHTTPMethod; } catch (e) { }

            try {
                //ExternalPaymentFingerPrint = msg.ExternalPaymentFingerPrint;
                //$(ExternalPaymentFingerPrint).insertBefore("form");
              //  var temp;
             //   $.getScript(temp);
                PreTransactionDisplayMessage = msg.ExternalPaymentDisplayMessageBeforeTransaction;
                if (PreTransactionDisplayMessage.length > 0) {
                    oButtons = { "OK": function () {
                        if (PaymentPageFormData.length == 0) {
                            if ((PaymentPageTarget.length == 0) || (rePaymentPageTarget.test(PaymentPageTarget))) {
                                //window.top.location = msg.ExternalPaymentURL;
                                GoToPage(msg.ExternalPaymentURL, msg.bsWait);
                            } else {
                                PostExternalPaymentFormData(msg.ExternalPaymentURL, "", PaymentPageTarget);
                            }
                        } else {
                            PostExternalPaymentFormData(msg.ExternalPaymentURL, PaymentPageFormData, PaymentPageTarget);
                        }
                        jQuery(this).dialog("destroy");
                    }
                    };

                    //ShowModalDialog(PreTransactionDisplayMessage, "", "auto", "auto", oButtons);
                    BootstrapModalDialogMessageDisplay(PreTransactionDisplayMessage, "Payment",'',oButtons);//,'modal-header-info');

                } else {
                    if (PaymentPageFormData.length == 0) {
                        if ((PaymentPageTarget.length == 0) || (rePaymentPageTarget.test(PaymentPageTarget))) {
                            //Check if GET needed otherwise use default POST
                            if ((ExternalHTTPMethod.length > 0) && (ExternalHTTPMethod == "GET")) {
                                window.top.location = msg.ExternalPaymentURL;
                            } else {
                                //window.top.location = msg.ExternalPaymentURL;
                                GoToPage(msg.ExternalPaymentURL, msg.bsWait);
                            }
                            //window.top.location = msg.ExternalPaymentURL;
                            //GoToPage(msg.ExternalPaymentURL);
                        } else {
                            PostExternalPaymentFormData(msg.ExternalPaymentURL, "", PaymentPageTarget);
                        }
                    } else {
                        PostExternalPaymentFormData(msg.ExternalPaymentURL, PaymentPageFormData, PaymentPageTarget);
                    }
                }                                                             
                 } catch (e) { }

        }
        else if ((msg.ExternalPaymentURL != null) && (msg.ExternalPaymentURL.length == 0) && (msg.ExternalPaymentFormData != null) && (msg.ExternalPaymentFormData.length > 0)) {
            ExternalPaymentDialog(msg.ExternalPaymentFormData);
        }

        else {
            if ((msg.NextURL != null) && (msg.NextURL.length > 0)) { sNextURL = msg.NextURL; }
            if ((msg.Data != null) && (msg.Data.length > 0)) {
                oButtons = { "OK": function () {
                    jQuery(this).dialog("destroy");
                    //window.top.location = sNextURL;
                    GoToPage(sNextURL, msg.bsWait);
                }
                };
                ShowModalDialog(msg.Data,"", "auto", "auto", oButtons);
            } else {
                if (msg.bsWait == false) {
                    try { sPleaseWaitMessage = oPaxPaymentDetailsTranslations.DefaultSavingMessage; } catch (e) { }
                    ShowLoadingProgressDialog(sPleaseWaitMessage);
                }
                //window.top.location = sNextURL;
                GoToPage(sNextURL, msg.bsWait);
            }
        }
    } catch (e) {
        GoToPage("Logout.aspx");
        // window.top.location = "Logout.aspx"; 
    }
}

function CompleteBooking_onError(errormsg, msg) {
    var rePageURL;
    var sNextURL = "";

    try {
        if (msg != null) {
            // Complete booking error
            rePageURL = new RegExp("PassengerPaymentDetails.aspx", "i");
            if ((msg.ErrorMsg != null) && (msg.ErrorMsg.length > 0)) {
                oButtons = { "OK": function () {
                    jQuery(this).dialog("destroy");
                    if (!rePageURL.test(msg.NextURL) && (msg.NextURL != null && msg.NextURL.length > 0)) {
                        GoToPage(msg.NextURL);
                    }
                }
                };
                if (msg.bsWait == true) {
                    var dlgMsg = new Object;
                    dlgMsg.title = "Error";
                    dlgMsg.html = msg.ErrorMsg;
                    if (!rePageURL.test(msg.NextURL) && (msg.NextURL != null && msg.NextURL.length > 0)) {
                        dlgMsg.OkAction = "GoToPage('" + msg.NextURL + "');";
                    }
                    modalDialog(dlgMsg);

                } else {
                    ShowModalDialog(msg.ErrorMsg, "", "auto", "auto", oButtons);
                }
            }
        }
    } catch (e) { }
}

var dialogTimeout;
function PaymentDialogTimeout() {
    if (dialogTimeout > 1) {
        dialogTimeout--;
        setTimeout("PaymentDialogTimeout()", 60 * 1000); // check time every minute
        setExternPaymentDialogTitle("Please complete payment details, " + dialogTimeout + " minutes remaining");
    } else {
        $("div[id$=divExternalPaymentPanel]").dialog("destroy");
        //window.top.location = "returnfromexternalpayment.aspx";
        GoToPage("returnfromexternalpayment.aspx?VarsSessionID=" + $('#VarsSessionID').val());
    }
}

function setExternPaymentDialogTitle(ttl) {
    $("div[id$=divExternalPaymentPanel]").dialog("option", "title", ttl);
}

//function PostExternalPaymentFormData(PageURL, formData, formTarget) {
//    var sForm = "";
//    var rePaymentPageTarget = new RegExp("(_top|_blank)", "i");

//    try {
//        //alert(PageURL);
//        formTarget = (typeof (formTarget) == "undefined") ? "_top" : formTarget;
//        formData = (typeof (formData) == "undefined") ? "" : formData;

//        if ((formTarget == null) || (formTarget.length == 0)) { formTarget = "_top"; }

//        if (formData == null) { formData = ""; }

//        if (!rePaymentPageTarget.test(formTarget)) {
//            formTarget = "iframeExternalPaymentPage";
//            ShowExternalPaymentIFrame(PageURL);
//        }

//        sForm += "<form id='frmExternalPayment' name='ExternalPaymentFrame' action='" + PageURL + "' target='" + formTarget + "' method='post'>";
//        if (formData.length > 0) {
//            sForm += formData;
//        }
//        sForm += "</form>";

//        jQuery("form").after(sForm);
//        jQuery("#frmExternalPayment").submit();
//    } catch (e) { }
//}

function PassengerPaymentDetails_onFQTVMemberLoggedIn(bSuccess, oError) {
    try {
        if (bSuccess) {
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/ReloadPassengerDetails", null, null, ReloadPassengerDetails_onSuccess, null, "", false);
        } else {
            
        }
    } catch (e) { }
}

function ReloadPassengerDetails_onSuccess(msg) {
    try {
        if (msg.Data.length > 0) {
            oDiv = jQuery("div[id$=divPassengerDetailsUIPanel]");
            if (oDiv.length == 1) {
                oDiv.html(msg.Data);
                InitialisePassengerDetails();
                try { IBEMasterInitialiseHelp(); } catch (e) { }
            }
        }
    } catch (e) { }
}

function GetNewPassengerObject(iPaxNo) {
    var oPassenger = {};

    try {
        oPassenger.PaxNo = iPaxNo;
        oPassenger.PaxType = jQuery("#passenger" + iPaxNo + "passengertype").val();
        oPassenger.PaxTypeNo = jQuery("#passenger" + iPaxNo + "passengertypenumber").val();
        oPassenger.Title = "";
        oPassenger.FirstName = "";
        oPassenger.Surname = "";
        //oPassenger.DateOfBirth = null;  // does not parse null date value

        oPassenger.ContactEmailAddress = null;
        oPassenger.EmailAddressVerification = null;
        oPassenger.EmailMessageFormat = null;
        oPassenger.ContactPhoneNumbers = new Array();
        oPassenger.CountryOfResidence = null;
        oPassenger.FrequentFlyerInfo = null;
        oPassenger.Gender = null;
        oPassenger.MealRequest = new Array();
        oPassenger.SpecialServiceRequests = new Array();
        oPassenger.Passport = null;
        oPassenger.Weight = null;
        oPassenger.OtherInformation = null;
        oPassenger.ConnectingFlight = null;
        oPassenger.ReceiveNewsletter = false;
        oPassenger.RememberDetailsInCookie = false;
        oPassenger.MarketingOptIn = false;
        oPassenger.MarketingCountry = '';
        oPassenger.MarketingPostCode = '';
        oPassenger.MarketingCity = '';
        oPassenger.PaxExtraField = null;
        oPassenger.IsPWD = false;
        oPassenger.DisabilitySeniorDiscountCode = null;
    } catch (e) { }

    return oPassenger;
}

function GetPaxFieldValue(PaxNo, fldName, fldDefaultValue) {
    var fldVal = null;
    var oField = null;

    try {
        switch (fldName) {
            case "dob":
            case "passportissuedate":
            case "expirydatepassport":
                fldVal = GetPaxDateFieldValue(PaxNo, fldName);
                break;
            case "gender":
            case "countryofresidence":
            case "paxweight":
            case "mealrequest":
            case "connectingflight":
            case "otherinformation":
            case "specialservicerequest":
            case "paxExtraField":
                fldVal = GetAirportOrGeneralFactFieldValue(PaxNo, fldName);
                break;
            default:
                if (PaxNo != null) {
                    oField = jQuery("#passenger" + PaxNo.toString() + fldName);
                    if (oField.length == 1) {
                        fldVal = oField.val();
                        if (typeof (fldVal) != "undefined") {
                            if (fldVal != null) {
                                if (fldVal.toString().length == 0) {
                                    fldVal = GetDefaultFieldValue(fldDefaultValue);
                                }
                            }
                        }
                    } else {
                        fldVal = GetDefaultFieldValue(fldDefaultValue);
                    }
                }
                break;
        }
    } catch (e) {
        fldVal = GetDefaultFieldValue(fldDefaultValue);
    }

    return fldVal;
}

function GetAirportOrGeneralFactFieldValue(PaxNo, fldName) {
    var fldVal = null;
    var fldJSON = null;
    var oField = null;
    var oApGenFax = { "Pax": null, "Seg": null, "Value": null, "GenFaxID": null, "AFXID": null };
    var arraySSR = null;
    var iSSRCount = 0;
    var oSSR = null;
    var iLoop = 0;
    var returnArray = false;

    try {
        oField = jQuery("#passenger" + PaxNo.toString() + fldName);
        oApGenFax.Pax = PaxNo.toString();
        if (oField.length === 1) {
            switch (fldName) {
                case "gender":
                case "countryofresidence":
                    fldJSON = GetJSONFieldValue(oField.val());
                    if (fldJSON != null) {
                        oSSR = GetApGenFaxObject(PaxNo);
                        oSSR.GenFaxID = fldJSON.FaxCode;
                        if (typeof (fldJSON.FaxValue) != "undefined") { oSSR.Value = fldJSON.FaxValue; }
                    }
                    break;
                case "mealrequest":
                    returnArray = true;
                    fldJSON = GetJSONFieldValue(oField.val());
                    if (fldJSON != null) {
                        oSSR = GetApGenFaxObject(PaxNo);
                        for (iLoop = 1; iLoop <= oPaxDetailsInfo.FlightSegmentCount; iLoop++) {
                            if (fldName === "mealrequest") {
                                oSSR.HasLimitedQuantity = false;
                                oSSR.AFXID = fldJSON.FaxCode;
                            } else {
                                oSSR.GenFaxID = fldJSON.FaxCode;
                            }
                            if (typeof (fldJSON.FaxValue) != "undefined") { oSSR.Value = fldJSON.FaxValue; }
                            oSSR.Seg = iLoop.toString();

                            if (arraySSR == null) { arraySSR = new Array(iSSRCount); }
                            arraySSR[iSSRCount] = oSSR;
                            iSSRCount += 1;
                        }
                    }
                    break;
                case "paxExtraField":
                    oSSR = GetApGenFaxObject(PaxNo);
                    oSSR.AFXID = oField.val();
                    var fldPaxExtra = jQuery("#passenger" + PaxNo.toString() + fldName + "details");
                    if (fldPaxExtra.length === 1) {
                        if (fldPaxExtra.val().length > 0) {
                            oSSR.Value = fldPaxExtra.val();
                        } else {
                            oSSR = null;
                        }
                    }
                    break;
                case "connectingflight":
                    returnArray = false;
                    if (oField.get(0).checked) {
                        oSSR = GetApGenFaxObject(PaxNo);
                        oSSR.GenFaxID = oField.val();
                        var fldConnFlightDetails = jQuery("#passenger" + PaxNo.toString() + fldName + "details");
                        if (fldConnFlightDetails.length === 1) {
                            oSSR.Value = fldConnFlightDetails.val();
                        }
                        
                        /*if (arraySSR == null) { arraySSR = new Array(iSSRCount); }
                        arraySSR[iSSRCount] = oSSR;
                        iSSRCount += 1;*/
                    }
                    break;
                case "otherinformation":
                    oSSR = GetApGenFaxObject(PaxNo);
                    oSSR.GenFaxID = oField.val();
                    var fldOtherInfo = jQuery("#passenger" + PaxNo.toString() + fldName + "details");
                    if (fldOtherInfo.length === 1) {
                        if (fldOtherInfo.val().length > 0) {
                            oSSR.Value = fldOtherInfo.val();
                        } else {
                            oSSR = null;
                        }
                    }
                    break;
                case "paxweight":
                    returnArray = false;
                    var fldUOM = jQuery("#passenger" + PaxNo.toString() + fldName + "unitofmeasure");
                    if (fldUOM.length === 1) {
                        fldJSON = GetJSONFieldValue(fldUOM.val());

                        var sUOM;

                        //NEED TO COPE WITH OLD AND NEW STYLE WEIGHT CONTROL

                        //OLD STYLE
                        if (fldJSON) {
                            sUOM = fldJSON.UnitOfMeasure;
                        }
                        //NEW STYLE
                        else {
                            sUOM = fldUOM.val();
                        }

                        //if (fldJSON != null) {
                            oSSR = GetApGenFaxObject(PaxNo);
                            oSSR.GenFaxID = 'PWGT';

                            //oSSR.Value = jQuery("#passenger" + PaxNo.toString() + fldName).val() + " " + fldUOM.val();
                            //oSSR.Value = GetJSONFieldValue(oField.val()) + " " + fldUOM.val(); // fldJSON.UnitOfMeasure;
                        oSSR.Value = GetJSONFieldValue(oField.val()) + " " + sUOM;
                        //}
                    }
                    break;
                default:
                    // special service request
                    returnArray = true;
                    jQuery("input:checked[type=checkbox][id^=passenger" + PaxNo.toString() + "specialservicerequest_ssritem]").each(function () {
                        fldJSON = GetJSONFieldValue(jQuery("#" + jQuery(this).attr("id")).val());
                        if (fldJSON != null) {
                            for (iLoop = 1; iLoop <= oPaxDetailsInfo.FlightSegmentCount; iLoop++) {
                                oSSR = GetApGenFaxObject(PaxNo);
                                oSSR.AFXID = fldJSON.FaxCode;
                                if (typeof (fldJSON.FaxValue) != "undefined") { oSSR.Value = fldJSON.FaxValue; }
                                if (typeof (fldJSON.IsQuantityCheckRequired) != "undefined") {
                                    oSSR.HasLimitedQuantity = fldJSON.IsQuantityCheckRequired;
                                } else {
                                    oSSR.HasLimitedQuantity = false;
                                }
                                oSSR.Seg = iLoop.toString();

                                if (arraySSR == null) { arraySSR = new Array(iSSRCount); }
                                arraySSR[iSSRCount] = oSSR;
                                iSSRCount += 1;
                            }
                        }
                    });

                    break;
            }
        }
    } catch (e) { arraySSR = null; }

    if (returnArray) {
        fldVal = arraySSR;
    } else {
        /*if (arraySSR != null) {
            fldVal = arraySSR[0];
        }*/
        fldVal = oSSR;
    }
    return fldVal;
}

function GetApGenFaxObject(PaxNo) {
    var oApGenFax = null;

    try {
        oApGenFax = { "Pax": PaxNo.toString(), "Seg": null, "Value": null };
        //, "GenFaxID": null, "AFXID": null

    } catch (e) { }

    return oApGenFax;
}

function GetDefaultFieldValue(fldDefaultValue) {
    var defaultValue = null;

    try {
        if (typeof (fldDefaultValue) != "undefined") {
            defaultValue = fldDefaultValue;
        }
    } catch (e) { }

    return defaultValue;
}

function GetPaxDateFieldValue(PaxNo, fldName) {
    var fldVal = null;
    var fldDate = null;
    var fldDateYear = null;
    var fldDateMonth = null;
    var fldDateDay = null;

    try {
        if (PaxNo) {
            fldDate = jQuery("#passenger" + PaxNo.toString() + fldName);
            if (fldDate.length == 1) {

                return fldDate.datepicker("getDate");
            } else {
                fldDateDay = jQuery("#passenger" + PaxNo.toString() + fldName + "_day");
                fldDateMonth = jQuery("#passenger" + PaxNo.toString() + fldName + "_month");
                fldDateYear = jQuery("#passenger" + PaxNo.toString() + fldName + "_year");

                if ((fldDateDay.length == 1) && (fldDateMonth.length == 1) && (fldDateYear.length == 1)) {
                    var sDay = fldDateDay.val();
                    var sMonth = fldDateMonth.val();
                    var sYear = fldDateYear.val();

                    if ((!isNaN(sDay)) && (!isNaN(sMonth)) && (!isNaN(sYear))) {
                        return new Date(parseInt(sDay, 10), parseInt(sMonth, 10) - 1, parseInt(sDay, 10), 0, 0, 0);
                    }
                }
            }
        }
    } catch (e) { fldVal = null; }

    return fldVal;
}

function GetPaxFrequentFlyerFieldValue(PaxNo, fldName) {
    var fldVal = null;
    var oFQTV = { "PaxNo": null, "FrequentFlyerProgramme": null, "FrequentFlyerNumber": null, "IsQuickRegistration": false, "QuickRegistrationPassword": null, "QuickRegistrationPasswordConfirmation": null };
    var IsQuickRegistrationOn = false;
    var sPassword = null;
    var sConfirmPassword = null;

    try {
        IsQuickRegistrationOn = GetPaxFieldCheckedValue(PaxNo, "ffpquickregistration");
        if (!IsQuickRegistrationOn) {
            //if other style that doesn't use checkbox is in use
            if ((jQuery("#passenger" + PaxNo + "ffpquickregistration").length == 0) && (jQuery("#passenger" + PaxNo + "ffpquickregistrationpassword").length == 1)) {
                sPassword = GetPaxFieldValue(PaxNo, "ffpquickregistrationpassword", null);
                sConfirmPassword = GetPaxFieldValue(PaxNo, "ffpquickregistrationconfirmpassword", null);
                sPassword = (sPassword == null) ? "" : sPassword;
                sConfirmPassword = (sConfirmPassword == null) ? "" : sConfirmPassword;
                IsQuickRegistrationOn = sPassword.length > 0 || sConfirmPassword.length > 0;
            }
        }

        if (IsQuickRegistrationOn) {
            oFQTV.PaxNo = PaxNo;
            oFQTV.IsQuickRegistration = true;
            oFQTV.QuickRegistrationPassword = GetPaxFieldValue(PaxNo, "ffpquickregistrationpassword", null);
            oFQTV.QuickRegistrationPasswordConfirmation = GetPaxFieldValue(PaxNo, "ffpquickregistrationconfirmpassword", null);
            oFQTV.FrequentFlyerProgramme = GetPaxFieldValue(PaxNo, "ffp", null);
            fldVal = oFQTV;
        } else {
            oFQTV.PaxNo = PaxNo;
            oFQTV.FrequentFlyerNumber = GetPaxFieldValue(PaxNo, "ffpnumber", null);
            oFQTV.FrequentFlyerProgramme = GetPaxFieldValue(PaxNo, "ffp", null);
            if ((oFQTV.FrequentFlyerNumber != null) || (oFQTV.FrequentFlyerProgramme != null)) {
                if ((oFQTV.FrequentFlyerNumber.length > 0) || (oFQTV.FrequentFlyerProgramme.length > 0)) {
                    fldVal = oFQTV;
                }
            }
        }
    } catch (e) { }

    return fldVal;
}

function GetPaxPassportFieldValue(PaxNo, fldName) {
    var fldVal = null;
    var oPassport = { "PaxNo": 0, "PassportNumber": null, "CountryOfIssue": null, "Nationality": null };
    var fldPassport;
    var passportDateFld = null;

    try {
        fldPassport = jQuery("#passenger" + PaxNo.toString() + fldName);
        if (fldPassport.length == 1) {
            oPassport.PassportNumber = fldPassport.val();
            oPassport.PaxNo = PaxNo;

            //country of issue
            fldPassport = null;
            fldPassport = jQuery("#passenger" + PaxNo.toString() + "passportcountryofissue");
            if (fldPassport.length == 1) {
                oPassport.CountryOfIssue = fldPassport.val();
            }

            //Date of Issue
            passportDateFld = GetPaxDateFieldValue(PaxNo, "passportissuedate");
            if (passportDateFld != null) { oPassport.IssueDate = passportDateFld.toDateString(); }

            //Expiry Date
            passportDateFld = GetPaxDateFieldValue(PaxNo, "passportexpirydate");
            if (passportDateFld != null) { oPassport.ExpiryDate = passportDateFld.toDateString(); }

            //Nationality
            fldPassport = jQuery("#passenger" + PaxNo.toString() + "passportnationality");
            if (fldPassport.length == 1) {
                oPassport.Nationality = fldPassport.val();
            }

            fldVal = oPassport;
        }

    } catch (e) { }

    return fldVal;
}

function GetPaxContactPhoneNumbersFieldValue(PaxNo) {
    var fldValue = new Array();
    var fldPhoneValue = null;
    var arrayPhoneNumbers = new Array();
    var iCount = 0;
    var fldPrefix = "";
    var arrayPhoneTypes;
    var iLoop;
    var iArrayUBound;
    var fldSelector = "";
    var re;
    var fldPhoneName = null;

    try {
        fldPrefix = "passenger" + PaxNo.toString();
        arrayPhoneTypes = ["homephone", "mobilephone", "workphone"];
        re = new RegExp("(passenger\\d+)(homephone|mobilephone|workphone)(number)");
        
        iArrayUBound = arrayPhoneTypes.length;
        for (iLoop = 0; iLoop < iArrayUBound; iLoop++) {
            if (fldSelector.length > 0) { fldSelector += ", "; }
            fldSelector += "input[id=" + fldPrefix + arrayPhoneTypes[iLoop] + "number]";
        }

        jQuery(fldSelector).each(function () {
            fldPhoneName = jQuery(this).attr("id").replace(re, "$2");
            fldPhoneValue = GetPaxContactFieldValue(PaxNo, fldPhoneName);
            if (fldPhoneValue != null) {
                if (arrayPhoneNumbers == null) { arrayPhoneNumbers = new Array(iCount); }
                arrayPhoneNumbers[iCount] = fldPhoneValue;
                iCount += 1;
            }
        });

        fldValue = arrayPhoneNumbers;
    } catch (e) { }

    return fldValue;
}

function GetPaxContactFieldValue(PaxNo, fldName) {
    var fldVal = null;
    var fldPhoneNo = null;
    var fldIntDialCode = null;
    var fldPhoneType = null;
    var fldEmail = null;
    var oContactInfo = { "ContactType": null, "PaxNumber": 0 };

    try {
        switch (fldName) {
            case "emailaddress":
                fldEmail = jQuery("#passenger" + PaxNo.toString() + fldName);
                if (fldEmail.length == 1) {
                    oContactInfo.EmailAddress = fldEmail.val();
                    oContactInfo.ContactType = oPaxDetailsInfo.ContactInformationTypeCodes.EmailAddress;
                    oContactInfo.PaxNumber = PaxNo;
                    fldVal = oContactInfo;
                }
                break;
            case "address":
                break;
            default:
                // phone numbers
                fldPhoneNo = jQuery("#passenger" + PaxNo.toString() + fldName + "number");
                fldPhoneType = jQuery("#passenger" + PaxNo.toString() + fldName + "numbertype");
                fldIntDialCode = jQuery("#passenger" + PaxNo.toString() + fldName + "countrycode");
                if (fldPhoneNo.length == 1) {
                    oContactInfo.PhoneNumber = fldPhoneNo.val();
                    if (fldIntDialCode.length == 1) {
                        oContactInfo.InternationalDialCode = fldIntDialCode.val();
                    }
                    oContactInfo.ContactType = fldPhoneType.val();
                    oContactInfo.PaxNumber = PaxNo;
                    fldVal = oContactInfo;
                }
                break;
        }
    } catch (e) { }

    return fldVal;
}

function GetPaxFieldCheckedValue(PaxNo, fldName) {
    var fldValue = false;
    var fld = null;

    try {
        fld = jQuery("#passenger" + PaxNo.toString() + fldName);
        if (fld.length == 1) {
            fldValue = fld.get(0).checked;
        }
    } catch (e) { }

    return fldValue;
}

function GetJSONFieldValue(fldVal) {
    var jsonVal = null;
    var re = new RegExp("'", "g");

    try {
        if (typeof (fldVal) != "undefined") {
            if (fldVal) {
                if (fldVal.length > 0) {
                    fldVal = fldVal.toString().replace(re, "\"");
                    jsonVal = jQuery.parseJSON(fldVal);
                }
            }
        }
    } catch (e) { }

    return jsonVal;
}

function FormOfPayment_onClick(optClicked) {
    var re = new RegExp("'", "g");
    var sFormData = "";
    var oFOPRequest = null;

    try {
        oFOPRequest = { "SelectedFormOfPayment" : jQuery.parseJSON(optClicked.val().replace(re, "\"")) };
        sFormData = getJSONStringFromObject(oFOPRequest);
        SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/LoadFormOfPaymentForm", sFormData, null, LoadFormOfPaymentForm_onSuccess, null, "", false);
    } catch (e) { }
}

function LoadFormOfPaymentForm_onSuccess(msg) {
    try {
        if (msg.Data.length > 0) {
            oDiv = jQuery("div[id$=divPaymentDetailsUIPanel]");
            if (oDiv.length == 1) {
                oDiv.html(msg.Data);
                InitialisePaymentDetails();
                try { IBEMasterInitialiseHelp(); } catch (e) { }
            }
        }

    } catch (e) { }
}

function CardNumber_onChange(oCardNumber) {
    var sCardNumber = "";
    var oPaymentChargeRequest = { "PaymentChargeRequest": {} };
    var oSelectedFOP = null;
    var re = new RegExp("'", "g");
    var oFormData = "";

    try {
        sCardNumber = oCardNumber.val();
        if (sCardNumber.length >= 6) {
            if (oPaxPaymentDetailsCurrentCardNumber != sCardNumber) {
                oPaxPaymentDetailsCurrentCardNumber = sCardNumber;
                oSelectedFOP = jQuery.parseJSON(jQuery("input:checked[type=radio][id^=optpaymentformofpayment]").val().replace(re, "\""));
                if (oSelectedFOP != null) {
                    oPaymentChargeRequest.PaymentChargeRequest.FormOfPayment = oSelectedFOP.FormOfPayment;
                    oPaymentChargeRequest.PaymentChargeRequest.PaymentAmount = oSelectedFOP.PaymentAmount;
                    oPaymentChargeRequest.PaymentChargeRequest.PaymentCurrency = oSelectedFOP.PaymentCurrency;
                    oPaymentChargeRequest.PaymentChargeRequest.CardNumber = sCardNumber;

                    oFormData = getJSONStringFromObject(oPaymentChargeRequest);
                    //alert(oFormData);
                    DisableEnableCompleteBookingLinks(true);
                    SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/CalculatePaymentCharge", oFormData, null, CalculatePaymentCharge_onSuccess, CalculatePaymentCharge_onError, "", false);
                }
            }
        } else if (ConfirmingPaymentCharges) {
            DisableEnableCompleteBookingLinks(false);
            PaymentChargesConfirmed = true;
            CompleteBooking();
            return;
        }
    } catch (e) { }
}

function CalculatePaymentCharge_onError(msg) {
    try {
        DisableEnableCompleteBookingLinks(false);
    } catch (e) { }
}

function CalculatePaymentCharge_onSuccess(msg) {
    var oPayment = null;
    var oPaymentChargeField = null;
    var PreviousPaymentCharges = "";
    //var reDoubleQuote = new RegExp("\"", "g");

    try {
        DisableEnableCompleteBookingLinks(false);
        if (msg != null) {
            oPayment = jQuery.parseJSON(msg.Data);

            if (jQuery("#paymentfopformindex").length == 1) {
                oPaymentChargeField = jQuery("#payment_paymentcharge");
            } else {
                oPaymentChargeField = jQuery("#payment" + oPayment.FormOfPaymentIndex + "_paymentcharge");
            }

            try { PreviousPaymentCharges = oPaymentChargeField.val(); } catch (e) { }

            if (oPayment.PaymentCharges == null) {
                oPaymentChargeField.val("");
                jQuery("#divpaymentchargestext").html("");
            } else {
                if (oPaymentChargeField.length == 1) {
                    //jQuery("#paymentformofpayment_paymentcharge").val(getJSONStringFromObject(oPayment.PaymentCharges));  //.replace(reDoubleQuote, "'")
                    oPaymentChargeField.val(oPayment.PaymentCharges);
                }

                if (jQuery("#divpaymentchargestext").length == 1) {
                    jQuery("#divpaymentchargestext").html(jQuery("#hfldpaymentchargestext").val() + oPayment.PaymentAmountText);
                }
            }

            if (ConfirmingPaymentCharges) {
                if (PreviousPaymentCharges != oPaymentChargeField.val()) {
                    if (oPaymentChargeField.val().length > 0) {
                        var oButtons = { "OK": function () { jQuery(this).dialog("destroy"); PaymentChargesConfirmed = true; CompleteBooking(); },
                            "Cancel": function () { jQuery(this).dialog("destroy"); ConfirmingPaymentCharges = false; PaymentChargesConfirmed = false; }
                        };
                        ShowModalDialog(jQuery("#divpaymentchargestext").html(), "", "auto", "auto", oButtons);
                    } else {
                        PaymentChargesConfirmed = true;
                        CompleteBooking();
                        return;
                    }
                } else {
                    PaymentChargesConfirmed = true;
                    CompleteBooking();
                    return;
                }
            }
        }
    } catch (e) {
        oPaxPaymentDetailsCurrentCardNumber = "";
        try {
            jQuery("#divpaymentchargestext").html("");
            jQuery("#payment_paymentcharge").val("");
        } catch (e) { }
    }
}

function GetPaymentsPaymentScheme(SelectedPayment) {
    var oPaymentData = { "FormOfPayment": -1, "PaymentSchemeID": 0, "PaymentSchemeName": null };
    var oFOP = null;
    var re = new RegExp("'", "g");

    try {
        if (SelectedPayment != null) {
            oFOP = jQuery.parseJSON(SelectedPayment.val().replace(re, "\""));
            oPaymentData.FormOfPayment = oFOP.FormOfPayment;
            oPaymentData.PaymentSchemeID = oFOP.PaymentSchemeID;
            oPaymentData.PaymentSchemeName = oFOP.PaymentSchemeName;
        } else {
            oPaymentData = null;
        }
    } catch (e) {
        oPaymentData = null;
    }

    return oPaymentData;
}

//function GetCreditCardData(sFOPIndex, oCreditCardData) {
//    //var oCreditCardData = {};
//    var oValue = null;

//    try {

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardnumber", null);
//        if (oValue != null) {
//            oCreditCardData.CardNumber = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardtype", null);
//        if (oValue != null) {
//            oCreditCardData.CardType = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardissuenumber", null);
//        if (oValue != null) {
//            oCreditCardData.IssueNumber = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardsecuritycode", null);
//        if (oValue != null) {
//            oCreditCardData.SecurityCode = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardholder", null);
//        if (oValue != null) {
//            oCreditCardData.CardHolder = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardholderfirstname", null);
//        if (oValue != null) {
//            oCreditCardData.CardHolderFirstname = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardholdersurname", null);
//        if (oValue != null) {
//            oCreditCardData.CardHolderSurname = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "cardauthorisationcode", null);
//        if (oValue != null) {
//            oCreditCardData.AuthorisationCode = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline1", null);
//        if (oValue != null) {
//            oCreditCardData.BillingAddressLine1 = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline2", null);
//        if (oValue != null) {
//            oCreditCardData.BillingAddressLine2 = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline3", null);
//        if (oValue != null) {
//            oCreditCardData.BillingAddressLine3 = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline4", null);
//        if (oValue != null) {
//            oCreditCardData.BillingAddressLine4 = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddresspostzipcode", null);
//        if (oValue != null) {
//            oCreditCardData.BillingPostalCode = oValue;
//        }

//        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddresscountry", null);
//        if (oValue != null) {
//            oCreditCardData.BillingAddressCountryCode = oValue;
//        }

//        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardexpirydatemonth", null);
//        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardexpirydateyear", null);
//        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
//            oCreditCardData.ExpiryDate = paymentDateFieldMonth + paymentDateFieldYear;
//            oCreditCardData.ExpiryMonth = paymentDateFieldMonth;
//            oCreditCardData.ExpiryYear = paymentDateFieldYear;
//        }

//        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardstartdatemonth", null);
//        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardstartdateyear", null);
//        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
//            oCreditCardData.StartDate = paymentDateFieldMonth + paymentDateFieldYear;
//        }

//        return oCreditCardData;
//    } catch (e) {
//        oPaymentData = null;
//    }
//}

//function GetPaymentData() {
//    var oPayments = null;
//    var re = new RegExp("'", "g");
//    var sFOPIndex = "";
//    var MultipleFormsOfPayment = false;


//    try {
//        try { MultipleFormsOfPayment = (jQuery("#paymentfopformindex").length == 0); } catch (e) { }

//        jQuery("input:checked[type=radio][id^=optpaymentformofpayment]").each(function () {
//            try {
//                var SelectedPayment = jQuery(this);
//                var oPaymentData = { "Amount": 0, "Currency": null, "PaymentReference": null, "PaymentSchemeID": 0 };
//                var oFOP = null;
//                var sPaymentType = "";
//                var paymentDateFieldMonth = null;
//                var paymentDateFieldYear = null;
//                var sPaymentCharge = null;

//                oFOP = jQuery.parseJSON(SelectedPayment.val().replace(re, "\""));

//                if ((new RegExp("BuyNowPayLater", "i")).test(oFOP.PaymentType)) {
//                    IsTicketTimeLimitPaymentRequest = true;
//                    return null;
//                }

//                try {
//                    if (MultipleFormsOfPayment) { sFOPIndex = oFOP.FormOfPaymentIndex.toString(); }
//                } catch (e) { }

//                oPaymentData.Amount = oFOP.PaymentAmount;
//                oPaymentData.Currency = oFOP.PaymentCurrency;
//                oPaymentData.PaymentSchemeID = oFOP.PaymentSchemeID;
//                oPaymentData.PaymentReference = GetPaymentFieldValue(sFOPIndex, "paymentreference", null);

//                if (jQuery("#paymentfopformindex").length == 1) {
//                    sPaymentCharge = GetPaymentFieldValue(sFOPIndex, "_paymentcharge", null);
//                } else {
//                    sPaymentCharge = GetPaymentFieldValue(sFOPIndex, jQuery("#payment" + oFOP.FormOfPaymentIndex + "fopformindex") + "_paymentcharge", null);
//                }
//                if (sPaymentCharge != null) {
//                    if (sPaymentCharge.length > 0) {
//                        try { oPaymentData.PaymentCharge = jQuery.parseJSON(sPaymentCharge.replace(re, "\"")); } catch (e) { oPaymentData.PaymentCharge = null; }
//                    }
//                }

//                sPaymentType = oFOP.PaymentType.toLowerCase();
//                switch (sPaymentType) {
//                    case "creditcard":
//                    case "manualcreditcard":
//                        GetCreditCardData(sFOPIndex, oPaymentData);
//                        //GetCreditCardData(sFOPIndex);

//                        //oPaymentData.CardPaymentType = oFOP.CardPaymentType;   
//                        //    oPaymentData.CardNumber = GetPaymentFieldValue(sFOPIndex, "cardnumber", null);
//                        //oPaymentData.CardType = GetPaymentFieldValue(sFOPIndex, "cardtype", null);
//                        //oPaymentData.IssueNumber = GetPaymentFieldValue(sFOPIndex, "cardissuenumber", null);
//                        //                        oPaymentData.SecurityCode = GetPaymentFieldValue(sFOPIndex, "cardsecuritycode", null);
//                        //                        oPaymentData.CardHolder = GetPaymentFieldValue(sFOPIndex, "cardholder", null);
//                        //                        oPaymentData.CardHolderFirstname = GetPaymentFieldValue(sFOPIndex, "cardholderfirstname", null);
//                        //                        oPaymentData.CardHolderSurname = GetPaymentFieldValue(sFOPIndex, "cardholdersurname", null);
//                        //                        oPaymentData.AuthorisationCode = GetPaymentFieldValue(sFOPIndex, "cardauthorisationcode", null);
//                        //                        oPaymentData.BillingAddressLine1 = GetPaymentFieldValue(sFOPIndex, "billingaddressline1", null);
//                        //                        oPaymentData.BillingAddressLine2 = GetPaymentFieldValue(sFOPIndex, "billingaddressline2", null);
//                        //                        oPaymentData.BillingAddressLine3 = GetPaymentFieldValue(sFOPIndex, "billingaddressline3", null);
//                        //                        oPaymentData.BillingAddressLine4 = GetPaymentFieldValue(sFOPIndex, "billingaddressline4", null);
//                        //                        oPaymentData.BillingPostalCode = GetPaymentFieldValue(sFOPIndex, "billingaddresspostzipcode", null);
//                        //                        //oPaymentData.BillingAddressCountry = GetPaymentFieldValue(sFOPIndex, "billingaddresscountry", null);
//                        //                        oPaymentData.BillingAddressCountryCode = GetPaymentFieldValue(sFOPIndex, "billingaddresscountry", null);

//                        //                        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardexpirydatemonth", null);
//                        //                        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardexpirydateyear", null);
//                        //                        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
//                        //                            oPaymentData.ExpiryDate = paymentDateFieldMonth + paymentDateFieldYear;
//                        //                        }

//                        //                        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardstartdatemonth", null);
//                        //                        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardstartdateyear", null);
//                        //                        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
//                        //                            oPaymentData.StartDate = paymentDateFieldMonth + paymentDateFieldYear;
//                        //                        }

//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.CardPayment = oPaymentData;
//                        break;
//                    case "invoice":
//                    case "invoicevoucher":
//                        oPaymentData.AccountReference = GetPaymentFieldValue(sFOPIndex, "accountreference", null);
//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.InvoicePayment = oPaymentData;
//                        break;
//                    case "externalpayment":
//                        var temp = {};
//                        oPaymentData.PaymentCardDetails = GetCreditCardData(sFOPIndex, temp);
//                        oPaymentData.PaymentSchemeName = GetPaymentFieldValue(sFOPIndex, "externalpaymentschemename", null);
//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.ExternalPayment = oPaymentData;
//                        break;
//                    case "cash":
//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.CashPayment = oPaymentData;
//                        break;
//                    case "cheque":
//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.ChequePayment = oPaymentData;
//                    case "airmiles":
//                        if (oPayments == null) { oPayments = {}; }
//                        oPayments.AirMilesPayment = oPaymentData;
//                        break;
//                    default:
//                        break;
//                }

//            } catch (e) { }
//        });

//    } catch (e) { oPayments = null; }

//    return oPayments;
//}

//function GetPaymentFieldValue(sFOPIndex, fldName, fldDefaultValue) {
//    var fldVal = null;
//    var oField = null;

//    try {
//        if (typeof (FOPIndex) == "undefined") {
//            sFOPIndex = "";
//        } else if (FOPIndex == null) {
//            sFOPIndex = ""
//        }

//        switch (fldName) {
//            case "":
//                break;
//            default:
//                    oField = jQuery("#payment" + sFOPIndex + fldName);
//                    if (oField.length == 1) {
//                        fldVal = oField.val();
//                        if (typeof (fldVal) != "undefined") {
//                            if (fldVal != null) {
//                                if (fldVal.toString().length == 0) {
//                                    fldVal = GetDefaultFieldValue(fldDefaultValue);
//                                }
//                            }
//                        }
//                    } else {
//                        fldVal = GetDefaultFieldValue(fldDefaultValue);
//                    }

//                break;
//        }
//    } catch (e) {
//        fldVal = GetDefaultFieldValue(fldDefaultValue);
//    }

//    return fldVal;
//}

function GetPaxRelatedProducts() {
    var oPaxRelatedProducts = null;
    var iCount = 0;

    try {
        jQuery("input:checked[type=checkbox][id*=paxrelateproduct]").each(function () {
            var re = new RegExp("'", "g");
            var oPaxRelateProductDetails = null;

            try {
                oPaxRelateProductDetails = jQuery.parseJSON(jQuery(this).val().replace(re, "\""));
                if (oPaxRelatedProducts == null) {
                    oPaxRelatedProducts = new Array();
                }
                oPaxRelatedProducts[iCount] = { "PaxIndex": oPaxRelateProductDetails.PaxIndex.toString(), "ProductBasketIndices": oPaxRelateProductDetails.ProductBasketIndices.toString(), "ProductCode": oPaxRelateProductDetails.ProductCode };

                iCount += 1;
            } catch (e) { }
        });
    } catch (e) { oPaxRelatedProducts = null; }

    return oPaxRelatedProducts;
}
function GetAdditionalBookingInfo() {
    var oAdditionalBookingInfo = { VatNumber: "", VatCompany: "", PurchaseOrderNumber: "", Remark: ""};

    try {

        oAdditionalBookingInfo.VatNumber = $("#vatNumber").val();
        oAdditionalBookingInfo.VatCompany = $("#vatCompany").val();
        oAdditionalBookingInfo.PurchaseOrderNumber = $("#poNumber").val();
        oAdditionalBookingInfo.Remark = $("#remark").val();

    } catch (e) { oAdditionalBookingInfo = null; }

    return oAdditionalBookingInfo;

}
function GetBookingRemarks() {
    var oBookingRemarks = null;
    var aBookingRemarks = new Array();
    var iRemarkCount = 0;

    try {
        if (jQuery("#tblIBERemarksEditor").length == 1) {
            var LastVisibleRemarkRow = jQuery("#tblIBERemarksEditor").find("tr[id^=trManageRemarksAddNew]:visible:last");
            var LastVisibleRemarkItemIndex = parseInt(LastVisibleRemarkRow.attr("id").replace("trManageRemarksAddNew", ""), 10);

            for (var iLoop = 1; iLoop <= LastVisibleRemarkItemIndex; iLoop++) {
                var RemarkFld = jQuery("#txtManageRemarksAddNew" + iLoop);
                if (RemarkFld.length == 1) {
                    if (RemarkFld.val().length > 0) {
                        aBookingRemarks[iRemarkCount] = RemarkFld.val();
                        iRemarkCount++;
                    }
                }
            }

            if (iRemarkCount > 0) { oBookingRemarks = aBookingRemarks; }
        }
    } catch (e) {oBookingRemarks = null; }

    return oBookingRemarks;
}

function btnAddRemoveNewRemark_onClick(oButton) {
    try {
        if (oButton != null) {
            var reButtonTest = /btnManageRemarksAddAnother/;
            var oTable = jQuery("#tblIBERemarksEditor");
            var LastVisibleRemarkRow = oTable.find("tr[id^=trManageRemarksAddNew]:visible:last");

            if (LastVisibleRemarkRow.length == 1) {
                var LastVisibleRowIndex = LastVisibleRemarkRow.get(0).rowIndex;
                var LastVisibleRemarkItemIndex = parseInt(LastVisibleRemarkRow.attr("id").replace("trManageRemarksAddNew", ""), 10);
                var txtField;

                if (reButtonTest.test(oButton.attr("id"))) {
                    if (LastVisibleRemarkItemIndex < MaxNewRemarks) {
                        oTable.find("tr:eq(" + (LastVisibleRowIndex + 1).toString() + ")").show();
                        txtField = jQuery("#txtManageRemarksAddNew" + (LastVisibleRemarkItemIndex + 1).toString());
                        txtField.val("").get(0).focus();
                    }
                } else {
                    if (LastVisibleRemarkItemIndex > 1) {
                        oTable.find("tr:eq(" + LastVisibleRowIndex.toString() + ")").hide();
                        txtField = jQuery("#txtManageRemarksAddNew" + (LastVisibleRemarkItemIndex + 1).toString());
                        txtField.val("");
                    }
                }
            }
        }
    } catch (e) { }

    return false;
}

function DoFQTVForgotUserName(ffpField) {
    var ForgotUserNameRequest = { "ForgotAccountDetailsRequest": { "Email": "", "Firstname": "", "Surname": "", "ForgotWhat" : "username"} };
    
    try {
        var fldID = ffpField.attr("id");
        var sPaxIndex = fldID.replace(new RegExp("^(passenger)(\\d*)(ffpreminderlink)$"), "$2");
        ForgotUserNameRequest.ForgotAccountDetailsRequest.Email = GetPaxFieldValue(sPaxIndex, "emailaddress", null);
        ForgotUserNameRequest.ForgotAccountDetailsRequest.FirstName = GetPaxFieldValue(sPaxIndex, "firstname", null);
        ForgotUserNameRequest.ForgotAccountDetailsRequest.Surname = GetPaxFieldValue(sPaxIndex, "lastname", null);

        var oFormData = getJSONStringFromObject(ForgotUserNameRequest);
        //jQuery("input[type=checkbox][id*=paxrelateproduct]").removeClass("PassengerDetailsErrorField");

        IBEMasterPage_DoFQTVForgotAccountDetails(oFormData, DoFQTVForgotUserName_onError);
    } catch (e) { }
}

function DoFQTVForgotUserName_onError(errormsg, msg) {
    try {
        if ((msg.ErrorMsg != null) && (msg.ErrorMsg.length > 0)) {
            if (msg.FailedFields != null) {
                if (msg.FailedFields.length > 0) {

                }
            }

            ShowModalDialog(msg.ErrorMsg,"", "auto", "auto");
        }
    } catch (e) { }
}


function ValidateRedeemAirMiles() {
    var FrequentFlyerUsername = "";

    try {
        DisableEnableCompleteBookingLinks(true);
        if (IsPaymentAgentMode) {
            FrequentFlyerUsername = GetPaxFieldValue(1, "ffpnumber", null);
            if (FrequentFlyerUsername == null) { FrequentFlyerUsername = ""; }
            var sFormData = "{'Username':'" + FrequentFlyerUsername + "'}";
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/ValidateAirMilesRedemptionForAgent", sFormData, null, ValidateAirMilesRedemption_onSuccess, ValidateAirMilesRedemption_onError, null, true, null);
        } else {
            SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/ValidateAirMilesRedemption", null, null, ValidateAirMilesRedemption_onSuccess, ValidateAirMilesRedemption_onError, "", true);
        }

    } catch (e) { DisableEnableCompleteBookingLinks(false); }

    return false;
}

function ValidateAirMilesRedemption_onSuccess(msg) {
    try {
        DisableEnableCompleteBookingLinks(false);
        if ((msg.Result != null) && (msg.Result.toUpperCase() == "OK")) {
            AirMilesPaymentValidated = true;
            CompleteBooking();
        }
    } catch (e) { }
}

function ValidateAirMilesRedemption_onError(ErrorMsg, msg) {
    try {
        DisableEnableCompleteBookingLinks(false);
        if ((ErrorMsg != null) && (ErrorMsg.length > 0)) {
            ShowModalDialog(ErrorMsg, "", "auto", "470px");
        }
    } catch (e) { }
}
