/* admin menu */

$(".AdminMenuBtn").unbind("click").click(function (e) {
    var formData = $("form").serializeArray();

    if ($(this).prop("id") === "ReplenishAccount") {
        AdminAction("ButtonMenuClick", "REPLENISHACCOUNT", null, "VARS.BookingLibrary.Controls.Pages.Account");
    } else {
        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.PublicAgentMenuView", false, null, true);
    }
    return false;

});

$(".CargoMenuBtn").unbind("click").click(function (e) {
    var formData = $("form").serializeArray();

    if ($(this).prop("id") === "ReplenishAccount") {
        AdminAction("ButtonMenuClick", "REPLENISHACCOUNT", null, "VARS.BookingLibrary.Controls.Pages.Account");
    } else {
        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.CargoMenuView", false, null, true);
    }
    return false;

});﻿//var WantTreeCheckBox = true;
var WantTreeMenu = true;
var hiddenMsg;
var cbList;
var useBsWait = false;
var rootMenu = { "edit": { name: "No Action", icon: "", disabled: true } };
var parentMenu = { "edit": { name: "No Action", icon: "", disabled: true } };
var WantSizeToFit = true;
//function leafMenu(node) { return { "edit": { name: "Delete", icon: "cut", disabled: true } } };
var ValidateFltNo = false;

/*  AdminPages.js  - in VARS Public and VARS Agent - UPDATE BOTH */

function LinkedViewHook() {

    try {
        $(".CopyFrom").unbind("click").click(function (evt) {
            // copy value to linked edits
            var fromEditClass = $(this).data("from");
            var toEditClass = $(this).data("to");
            $(toEditClass).val($(fromEditClass).val());
            return false;
        });
    } catch (e) { }

}


function ScheduleEdit() {
    try {
        InitDatePickers();
    } catch (e) { }
    try {
        //$('input[name$="_arrivetime"], input[name$="_departtime"]').mask('00:00', { reverse: true });
        $('.timeMask').mask('00:00', { reverse: true });
        $('.numeric').mask('0000000');

        //$('.alpha').mask('S#');

        if (ValidateFltNo == true) {
            $("#FltNo,#flight").unbind("keyup").keyup(function (e) {
                // format flight number AAA0000
                var val = $(this).val().toUpperCase();
                if (e.keyCode > 48) {
                    var ac = "";
                    var fltNo = "";
                    for (var i = 0; i < val.length; i++) {
                        var char = val.charAt(i);

                        if ((i < 3) && ((char <= 'Z' && char >= 'A') || (char <= '9' && char >= '0'))) {
                            ac += char;
                        } else if ((i > 1) && (fltNo.length < 4) && (char <= '9' && char >= '0')) {
                            // skip leading '0's
                            if ((fltNo.length == 0) && (char == '0')) {
                            } else {
                                fltNo += char;
                            }
                        }
                    }
                    if ((ac.length > 0) && (fltNo.length > 0)) {
                        fltNo = pad(fltNo, 4);
                    }
                    $(this).val(ac + fltNo);
                }
            });
        }
    } catch (e) { }

    try {
        $(".ExpandButton, .CollapseButton").unbind("click").click(function (evt) {
            if ($(this).hasClass("ExpandButton")) {
                ExpandRows($(this));
            } else {
                CollapseRows($(this));
            }
            return false;
        });

        // set up tab order
        $('.autotab1a').autotab({ format: 'alpha', uppercase: true, maxlength: 1 });
        $('#r1_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r1_departtime' });
        $('#r2_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r2_arrivetime' });
        $('#r3_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r3_arrivetime' });
        $('#r4_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r4_arrivetime' });
        $('#r5_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r5_arrivetime' });
        $('#r6_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r6_arrivetime' });
        $('#r7_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r7_arrivetime' });
        $('#r8_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r8_arrivetime' });
        $('#r9_city').autotab({ format: 'alpha', uppercase: true, maxlength: 3, target: '#r9_arrivetime' });

        $(".classCap").unbind("change").change(function () {
            // copy to Agent cap
            var val = $(this).val();
            var id = $(this).prop('id');
            $("#" + id.replace('_cap', '_agentcap')).val(val);

            // rebuild Route detail - id = r_0_cap etc, target like r_1_rcap_1_col_1
            var id = $(this).prop("id");
            var val;
            if ($(this).val() == "") {
                val = $(this).val();
            } else {
                val = parseInt($(this).val(), 10);
            }
            id = id.replace("r", "");
            id = parseInt(id.replace("_cap", ""), 10);
            for (i = 1; i < 9; i++) {
                $("#rcap_" + i + "_col_" + id).val(val);
                $("#rcap_" + i + "_col_" + id).text(val);
                // populate restrictions
                for (j = 1; j < 9; j++) {
                    var otherCity = $("#rod_" + i + "_se_" + j).val();
                    if (typeof (otherCity) != "undefined" && otherCity.length > 0) {
                        var curVal = $("#roc_" + i + "_se_" + j + "_" + (id + 1)).val();
                        if (curVal == "" || curVal > val) {
                            // set if not cur value or new val lower 
                            $("#roc_" + i + "_se_" + j + "_" + (id + 1)).val(val);
                        }
                    }
                }
                // "#roc_" + i + "_se_" & sector & "_" & blnkCol
            }

        });
        $(".routeCity").unbind("change").change(function () {
            // go through routes building restrictions
            for (i = 1; i < 9; i++) {   // check each segment
                var thisCity = $("#r" + i + "_city").val();
                if (thisCity.length > 0) {
                    var id = 1;
                    // build legs from this city to all later ones
                    for (j = i + 1; j <= 9; j++) {
                        var otherCity = $("#r" + j + "_city").val();
                        if (otherCity.length > 0) {
                            // add to table
                            if ($("#rod_" + i + "_se_" + id).val() == "") {
                                // no old val, add values
                                for (m = 0; m < 26; m++) {
                                    if ($("#rcap_" + i + "_col_" + m).val() != "") {

                                        $("#roc_" + i + "_se_" + id + "_" + (m + 1)).val($("#rcap_" + i + "_col_" + m).val());
                                    }
                                }
                            }
                            //// show row
                            //$("#roa_" + i + "_se_" + id).parent("tr").show();
                            // populate cities
                            $("#rod_" + i + "_se_" + id).val(thisCity);
                            $("#roa_" + i + "_se_" + id).val(otherCity);
                            // show edit boxes
                            for (k = 1; k <= 26; k++) {
                                $("#roc_" + i + "_se_" + id + "_" + k).removeClass("hidden");
                            }
                            id++;
                        }
                    }
                }
            }
            var val = $(this).val();

        });

        $("#operatingfltno").on("blur", function () {
            // this does not alway work in IE!! - use focus too
            if ($("#operatingfltno").val().length > 0) {
                $("#marketingfltno").prop('disabled', true);
                $("#marketingfltno2").prop('disabled', true);
                $("#marketingfltno3").prop('disabled', true);
                $("#marketingfltno4").prop('disabled', true);
                $("#marketingfltno5").prop('disabled', true);
            } else {
                $("#marketingfltno").prop('disabled', false);
                $("#marketingfltno2").prop('disabled', false);
                $("#marketingfltno3").prop('disabled', false);
                $("#marketingfltno4").prop('disabled', false);
                $("#marketingfltno5").prop('disabled', false);
            }
        });

        $("#marketingfltno,#marketingfltno2,#marketingfltno3,#marketingfltno4,#marketingfltno5").on("blur", function () {
            // this does not alway work in IE!! - use focus too
            if ($("#marketingfltno").val().length > 0) {
                $("#operatingfltno").prop('disabled', true);
            } else {
                $("#operatingfltno").prop('disabled', false);
            }
        });


        $("#r-1_seatplanname,#seatplanname").unbind("change").change(function () {
            var val = $(this).val();

            var oButtons = {
                "YES": {
                    text: GeneralStrings.YES,
                    click: function () {
                        var formData = $("#ScheduleEditorForm").serializeArray();
                        AdminAction("ButtonMenuClick", "APPLYSEATPLAN", formData, $("#AdminClass").val());

                        jQuery(this).dialog("destroy");
                    }
                },
                "NO": {
                    text: GeneralStrings.NO,
                    click: function () {
                        //jQuery(this).dialog("close");
                        jQuery(this).dialog("destroy");
                    }
                }
            };

            // MessageDialog("Overwrite Class Configuration", "Seatplan Change", "ui-icon-alert", "", oButtons);
            if (confirm("Overwrite Class Configuration?") == true) {
                var formData = $("#ScheduleEditorForm").serializeArray();
                AdminAction("ButtonMenuClick", "APPLYSEATPLAN", formData, $("#AdminClass").val());
            }
        });

        //$(".ActionButton,.ButtonClick,.MenuClick").unbind("click").click(function () {
        //    var formData = $("form").serializeArray();
        //    // add selected node!
        //    var node = $(".AdminTree").fancytree("getActiveNode");
        //    if (node) {
        //        //if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
        //        if ((typeof $(node).prop("extraClasses") != "undefined") && ($(node).prop("extraClasses").indexOf('leaf') > -1)) {
        //            var id = $(node).prop("key");
        //            var idVal = new Object;
        //            idVal.name = "selectedNodeID";
        //            idVal.value = id;
        //            formData.push(idVal);

        //        }
        //    }
        //    AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.Controls.Pages.SchedulePage");
        //    return false;
        //});


    } catch (e) { }
}

function ExpandRows(obj) {
    $(obj).addClass("CollapseButton");
    if ($(obj).hasClass("ui-icon-circle-plus")) {
        $(obj).addClass("ui-icon-circle-minus");
        $(obj).removeClass("ui-icon-circle-plus");
    }
    if ($(obj).hasClass("fa-plus")) {
        $(obj).addClass("fa-minus");
        $(obj).removeClass("fa-plus");
    }

    $(obj).removeClass("ExpandButton");
    $(obj).parent().removeClass("ExpandButton");

    var id = $(obj).attr("id");

    $("." + id).removeClass("hidden");
    $("." + id).show();
}
function CollapseRows(obj) {
    $(obj).removeClass("CollapseButton");

    if ($(obj).hasClass("ui-icon-circle-minus")) {
        $(obj).removeClass(" ui-icon-circle-minus");
        $(obj).addClass(" ui-icon-circle-plus");
    }
    if ($(obj).hasClass("fa-minus")) {
        $(obj).addClass("fa-plus");
        $(obj).removeClass("fa-minus");
    }

    $(obj).addClass("ExpandButton");

    var id = $(obj).attr("id");
    $("." + id).addClass("hidden");
    $("." + id).hide();

}


function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function hookupAutoComplete() {
    try {
        // autocomplete for sales office
        $(".auto").autocomplete({
            source: function (request, response) {
                var wsRq = new Object;
                var form = $("form").serializeArray();
                wsRq.webServiceRequest = new Object;

                wsRq.webServiceRequest.ID = request.term;
                wsRq.webServiceRequest.Action = "autocomplete";
                wsRq.webServiceRequest.formData = form;
                wsRq.webServiceRequest.Data = $("#AdminClass").val();
                wsRq.webServiceRequest.Confirm = "0";

                var rq = $.toJSON(wsRq);

                $.ajax({
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    type: 'POST',
                    url: GetAjaxUrl(),
                    data: rq,
                    success: function (data) {
                        $('.auto').removeClass('ui-autocomplete-loading');  // hide loading image
                        var arr = data.d.Data.split(",");
                        response($.map(arr, function (item) {
                            // your operation on data
                            return {
                                label: item.split('|')[0] + " (" + item.split('|')[1] + ")",
                                value: item.split('|')[0]
                            };
                        }));
                    },
                    error: function (rq, error) {
                        $('.auto').removeClass('ui-autocomplete-loading');
                    }
                });
            },
            minLength: 2
        });
        $('.timeMask').mask('00:00', { reverse: true });

    } catch (e) { }
}

function GetCbData() {
    var cbData = [];
    if (typeof (cbList) != 'undefined') {
        var checkData = [];
        $(cbList).each(function () {
            var id = this.id;
            // find row
            var row = $('.DlgDataTable tr[id="' + id + '"]');
            if (row.length > 0) {
                this.checked = row.find('input:checkbox').first().is(":checked");
            }
            checkData.push(GetKeyPair(id, this.checked));
        });
        cbData.push(checkData);
    }
    return cbData;
}

function hookupAdminGrid(msg) {
    AdminPageSizeToFit();
    // and on resize
    $(window).resize(function () {
        AdminPageSizeToFit();
    });

    $('A.widget-stats, A.breadCrumb').unbind("click").click(function () {
        GoToPage($(this).attr("href"));
        return false;
    });

    $("#_S_Origin").unbind("change").change(function () {
        var formData = $("form").serializeArray();
        AdminAction("ButtonMenuClick", "reloadFltNo", formData, "VARS.BookingLibrary.Controls.Pages.SchedulePage");
    });
    $("#_S_Destination").unbind("change").change(function () {
        var formData = $("form").serializeArray();
        AdminAction("ButtonMenuClick", "reloadFltNo", formData, "VARS.BookingLibrary.Controls.Pages.SchedulePage");
    });
    $("#_S_flightdate").unbind("change").change(function () {
        var formData = $("form").serializeArray();
        AdminAction("ButtonMenuClick", "reloadFltNo", formData, "VARS.BookingLibrary.Controls.Pages.SchedulePage");
    });

    var ctxMenu = null;
    var extenders = ["themeroller"];
    if (WantTreeMenu == true) {
        extenders = ["contextMenu", "themeroller"],
            ctxMenu = {
                menu: function (node) {
                    // this callback is executed every time the menu is to be shown
                    // its results are destroyed every time the menu is hidden
                    // e is the original contextmenu event, containing e.pageX and e.pageY (amongst other data)
                    if ($(node).prop("extraClasses").indexOf('root') > -1) {
                        return rootMenu;
                    } else if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
                        $(node).selected = true;
                        return leafMenu($(node));

                    } else {
                        return parentMenu;
                    }
                }
            };
    }
    var lazyLoad;
    if (typeof (msg) != 'undefined') {
        lazyLoad = msg.LazyLoadCallBack;
    }

    try {
        if (!$("#AdminTree").hasClass("treeLoaded")) {

            $(".AdminTreeCheckbox").fancytree({
                checkbox: true,
                extensions: extenders,
                selectMode: 3,
                imagePath: '',
                beforeSelect: function (e, data) {
                    if (data.node.folder) {
                        return false;
                    }
                },
                lazyLoad: lazyLoad,
                select: function (e, data) {
                    // Display list of selected nodes
                    var s = data.tree.getSelectedNodes().join(", ");
                    var t = s;
                },
                dblclick: function (e, data) {
                    if ($(data.node).prop("extraClasses").indexOf('leaf') > -1) {
                        var id = $(data.node).prop("key");
                        var page = $("#AdminClass").val();
                        //ButtonAction
                        if (page.indexOf("Fare") > 0) {
                            var formData = $("form").serializeArray();
                            var idVal = new Object;
                            idVal.name = "selectedRowID";
                            idVal.value = id;
                            formData.push(idVal);
                            AdminAction("ButtonMenuClick", "EDITFARE", formData, page);
                        } else {
                            AdminAction("ItemEdit", id, null, page);
                        }
                    }
                    return false;
                },
                contextMenu: ctxMenu
            });

            $(".AdminTree").fancytree({
                checkbox: false,
                extensions: extenders,
                selectMode: 3,
                imagePath: '',
                beforeSelect: function (e, data) {
                    if (data.node.folder) {
                        return false;
                    }
                },
                lazyLoad: lazyLoad,
                select: function (e, data) {
                    // Display list of selected nodes
                    var s = data.tree.getSelectedNodes().join(", ");
                    var t = s;
                },
                dblclick: function (e, data) {
                    if ($(data.node).prop("extraClasses").indexOf('leaf') > -1) {
                        var id = $(data.node).prop("key");
                        var page = $("#AdminClass").val();
                        //ButtonAction
                        if (page.indexOf("Fare") > 0) {
                            var formData = $("form").serializeArray();
                            var idVal = new Object;
                            idVal.name = "selectedRowID";
                            idVal.value = id;
                            formData.push(idVal);
                            AdminAction("ButtonMenuClick", "EDITFARE", formData, page);
                        } else {
                            AdminAction("ItemEdit", id, null, page);
                        }
                    }
                    return false;
                },
                contextMenu: ctxMenu
            });
            $("#ExpandTree").unbind("click").click(function () {
                $(".AdminTree").fancytree("getRootNode").visit(function (node) {
                    node.setExpanded(true);
                });
            });
            $("#CollapseTree").unbind("click").click(function () {
                $(".AdminTree").fancytree("getRootNode").visit(function (node) {
                    node.setExpanded(false);
                });
                return false;
            });

            $("#AdminTree").addClass("treeLoaded");
        }
    } catch (e) { }


    $('.GenericAdminTable tr').unbind("click").click(function () {
        var sID = $(this).attr("class");
        if (typeof (sID) != "undefined") {
            sID = sID.replace('RowID_', '');
            sID = sID.replace('ui-state-hover', '');
            sID = sID.replace('even ', '');
            sID = sID.replace('odd ', '');

            //$('.GenericAdminTable tr').removeClass("ui-state-hover");
            $(this).closest('table').find('tr').removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");

        }
        var action = $(this).parent().parent().attr("data_rowsel");
        if (typeof (action) != "undefined") {
            if (action != "") {
                var formData = $("form").serializeArray();
                var idVal = new Object;
                idVal.name = "selectedRow";
                idVal.value = sID;
                formData.push(idVal);
                //AdminAction(rowSelData, sID, null, $("#AdminClass").val());
                AdminAction("ButtonMenuClick", action, formData, $("#AdminClass").val());
                return false;
            }
        }
        AdminAction("SelectRow", sID, null, $("#AdminClass").val());
        return false;
    });

    $('.boxGridReQueryButton').unbind("click").click(function () {
        var sID = $(this).parent().parent().attr("class");
        if (typeof (sID) != "undefined") {
            sID = sID.replace('RowID_', '');
            sID = sID.replace('ui-state-hover', '');
            sID = sID.replace('even ', '');
            sID = sID.replace('odd ', '');

            $('.GenericAdminTable tr').removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");

        }
        AdminAction("ButtonMenuClick", sID, null, $("#AdminClass").val());
        return false;
    });

    $(".ButtonClickConfirm").unbind("click").click(function (e) {
        bootbox.confirm({
            message: hiddenMsg.ConfirmMsg,
            title: hiddenMsg.ConfirmTitle,
            buttons: {
                confirm: {
                    label: '<i class="fa fa-check"></i> Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: '<i class="fa fa-times"></i> No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result == true) {
                    var formData = $("form").serializeArray();
                    AdminAction("ButtonMenuClick", hiddenMsg.ConfirmID, formData, $("#AdminClass").val(), false);  // ,cbData
                }
            }
        });
        return false;
    });


    $(".ActionButton,.ButtonClick,.MenuClick").unbind("click").click(function (e) {
        var table = $(this).closest("table");
        var tableID = $(table).attr("id");
        var row = $(this).closest("tr");

        // set hidden values for sort
        if ($(this).hasClass("ClickGridSort")) {
            $("#" + tableID + "_SortCol").val($(this).closest('th').data('field'));
            if ($(this).hasClass('fa-sort-asc')) {
                $("#" + tableID + "_SortAsc").val('False');
            } else {
                $("#" + tableID + "_SortAsc").val('true');
            }
        }


        $(".summernote").each(function () {
            var id = $(this).prop("id");
            var val = $(this).summernote('code');

            // copy edit div data to hidden field
            var hidId = id.replace('editor', '');
            $('#' + hidId).val(val);

        });


        var formData = $("form").serializeArray();

        //// check resultsl
        //var searchFor = "fl_CityCode";
        //formData.forEach(function (i) {
        //    if ($(this).name == searchFor) {
        //        var x = 1;
        //    }
        //});

        var msg = hiddenMsg;

        if ((msg != null) && (typeof (msg) != "undefined") && ($(this).hasClass("btn_validate"))) {
            if (msg.WantValidation || $(this).hasClass("btn_validate")) {
                $('.validatedForm').formValidation("validate");
                try {
                    if ($('.validatedForm').data('formValidation').isValid()) {
                        // continue                    
                    } else {
                        bootstrap_alert("Please complete marked fields", 0);
                        return false;
                    }
                } catch (e) { }
            }
        }

        var cbData = GetCbData();

        if ($(this).hasClass("btn-confirm")) {
            if (confirm($(this).data("confirm")) == false) {
                return false;
            }
        }

        if ($(this).hasClass("wantTableRowData")) {
            var row = $(this).closest('tr');
            var headrow = $(this).closest('table').find('th');
            formData = GetRowData(row, headrow);
        }

        formData.push(GetKeyPair("href", $(this).attr("href")));
        formData.push(GetKeyPair("rowno", $(this).data("rowno")));
        formData.push(GetKeyPair("line", $(this).data("line")));
        formData.push(GetKeyPair("view", $(this).data("view")));
        formData.push(GetKeyPair("dlgview", $(this).data("dlgview")));
        formData.push(GetKeyPair("HiddenControllerClass", $("#HiddenControllerClass").val()));
        formData.push(GetKeyPair("HiddenEditViewClass", $("#HiddenEditViewClass").val()));
        formData.push(GetKeyPair("HiddenID_DLG", $("#HiddenID_DLG").val()));
        formData.push(GetKeyPair("TableID", $(this).data("tableid")));


        // add selected node!
        try {

            var node = $(".AdminTree").fancytree("getActiveNode");
            if (node) {
                //if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
                if ((typeof $(node).prop("extraClasses") != "undefined") && ($(node).prop("extraClasses").indexOf('leaf') > -1)) {
                    var id = $(node).prop("key");
                    var idVal = new Object;
                    idVal.name = "selectedNodeID";
                    idVal.value = id;
                    formData.push(idVal);

                }
            }
        } catch (e) { }

        // get row
        if (row && (typeof (row) != "undefined")) {
            var id = row.prop("id");
            var idVal = new Object;
            idVal.name = "selectedRowID";
            idVal.value = id;
            formData.push(idVal);

        }
        var selRow = $("#_selRow").val();
        if (selRow && (typeof (selRow) != "undefined")) {
            var idVal = new Object;
            idVal.name = "selRowID";
            idVal.value = selRow.replace('RowID_', '');
            idVal.value = selRow.replace('even ', '');
            idVal.value = selRow.replace('odd ', '');
            formData.push(idVal);
        }
        var pageClass = $("#AdminClass").val();
        if (typeof ($(this).data("viewname")) != "undefined") {
            pageClass = $(this).data("viewname");
        }
        if (typeof (pageClass) == "undefined") {
            pageClass = $("#HiddenEditViewClass").val();
        }

        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, pageClass, false, cbData, useBsWait);  // ,cbData
        // don't return if menu!
        if (e.target.className != 'MenuClick') {
            return false;
        }
    });





    $(".tabCheck").find("input[type=checkbox]").unbind("click").click(function () {
        // get row
        var row = $(this).closest("tr");

        var id = row.prop("id");
        // hide
        // $(row).addClass("hidden");
        $(row).hide();

        // get matching filter row
        if ($(row).hasClass("filter")) {
            var searchRow = $("#AdvFareSearch").find("#" + id);
            $(searchRow).removeClass("hidden");
            $(searchRow).show();
            $(searchRow).find("input[type=checkbox]").first().prop("checked", false);
            $(row).find("input[type=checkbox]").first().prop("checked", false);
            $(row).find("input[type=text]").first().val("");    // reset value
            // $(row).find("select").first().removeAttr('selected').find('option:first').attr('selected', 'selected');    // reset value
            $(row).find("select").first().prop("selectedIndex", 0);
        } else {
            var filterRow = $("#AdvFareSearchFilter").find("#" + id);
            $(filterRow).removeClass("hidden");
            $(filterRow).show();
            $(filterRow).find("input[type=checkbox]").first().prop("checked", true);
        }
        return false;
    });


    // buttons
    $(".updateButton").unbind("click").click(function () {
        var sID = $(this).children().find('.hiddenId').val();  // $(this)[0].id.replace('schedulerow_', '');

        AdminAction("SaveMember", sID, $("form").serializeArray());
        return false;
    });
    $("#AddFieldButton").unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("GetSearchFields", $("#CurEditId").val(), formData, $("#AdminClass").val());
        return false;
    });
    // click advanced
    $("#WantAdvanced").unbind("click").click(function () {
        var $this = $(this);
        // $this will contain a reference to the checkbox   
        if ($this.is(':checked')) {
            // the checkbox was checked 
            $("#tabs2").find('li:eq(' + 4 + ')').show();  // endorsements
            $("#tabs2").find('li:eq(' + 5 + ')').show();   // advanced
        } else {
            // the checkbox was unchecked
            $("#tabs2").find('li:eq(' + 4 + ')').hide();    // endorsements
            $("#tabs2").find('li:eq(' + 5 + ')').hide();    // advanced
        }

    });

    $(".passwordButton").unbind("click").click(function () {
        var sID = $("#FQTVMemberID").val();
        if (confirm("Reset Password?") == true) {
            AdminAction("ChangePassword", sID);
        }
        return false;
    });
    $(".transactionButton").unbind("click").click(function () {
        var sID = $("#FQTVMemberID").val();
        AdminAction("ViewTransactions", sID);
        return false;
    });
    $('#searchButton').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("Search", null, formData, $("#AdminClass").val());
        return false;
    });

    $('.addButton').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        if (ValidateForm() == true) {
            AdminAction("AddRow", null, formData, $("#AdminClass").val());
        }
        return false;
    });

    $('.ReQueryButton').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("ReQuery", null, formData, $("#AdminClass").val());
        return false;
    });

    $('#ItemAdd').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("ItemAdd", -1, formData, $("#AdminClass").val());
        return false;
    });
    $('#ItemEdit').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        var node = $(".AdminTree").fancytree("getActiveNode");
        if (node) {
            if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
                var id = $(node).prop("key");
                AdminAction("ItemEdit", id, formData, $("#AdminClass").val());
            } else {
                InfoMessageDialog("Select flight to EDIT");
            }
        } else {
            InfoMessageDialog("Select flight to EDIT");
        }
        return false;
    });
    $('#ItemCopyAdd').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        var node = $(".AdminTree").fancytree("getActiveNode");
        if (node) {
            if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
                var id = $(node).prop("key");
                AdminAction("ItemCopyAdd", id, formData, $("#AdminClass").val());
            } else {
                InfoMessageDialog("Select flight to COPY");
            }
        } else {
            InfoMessageDialog("Select flight to COPY");
        }
        return false;
    });

    $('#FareCopy').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("FareCopy", -1, formData, $("#AdminClass").val());
        return false;
    });


    $('.cancelButton').unbind("click").click(function () {
        $('.GenericAdminTable tr').removeClass("ui-state-hover");
        AdminAction("CancelRow", null, null, $("#AdminClass").val());
        return false;
    });
    $('.deleteButton').unbind("click").click(function () {
        if (confirm("Delete this row?") == true) {
            AdminAction("DeleteRow", $("#CurEditId").val(), null, $("#AdminClass").val());
        }
        return false;
    });
    $('.saveButton').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("SaveRow", $("#CurEditId").val(), formData, $("#AdminClass").val());
        return false;
    });

    $('.ResetPassword').unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("SaveRow", $("#CurEditId").val(), formData, $("#AdminClass").val());
        return false;
    });

    //$('#EditModeRadios1').unbind("change").change(function () {
    //    CreateMode();
    //    return false;
    //});

    //$('#EditModeRadios0').unbind("change").change(function () {
    //    EditMode();
    //    return false;
    //});
    $(".ScheduleUpdateButton").unbind("click").click(function () {
        //SendVrsCommand("schedule", "update");
        var form = $("form").serializeArray();
        var wsRq = new Object;
        wsRq.webServiceRequest = new Object;

        var nestVal = new Object;
        nestVal.name = "nestingVal";
        nestVal.value = $("#nesting :radio:checked").attr('id').replace("nesting", "");
        form.push(nestVal);
        AdminAction("SaveForm", $("#CurEditId").val(), form, $("#AdminClass").val(), "0");
        return false;
    });

    $(".AvCapUpdateButton").unbind("click").click(function () {
        //SendVrsCommand("schedule", "update");
        var form = $("form").serializeArray();
        var wsRq = new Object;
        wsRq.webServiceRequest = new Object;

        AdminAction("SaveForm", $("#CurEditId").val(), form, $("#AdminClass").val(), "0");
        return false;
    });



    $(".ScheduleCreateButton").unbind("click").click(function () {
        //SendVrsCommand("schedule", "create");
        var form = $("form").serializeArray();
        var wsRq = new Object;
        wsRq.webServiceRequest = new Object;

        var nestVal = new Object;
        nestVal.name = "nestingVal";
        nestVal.value = $("#nesting :radio:checked").attr('id').replace("nesting", "");
        form.push(nestVal);
        AdminAction("AddForm", $("#CurEditId").val(), form, $("#AdminClass").val());
        return false;
    });
    $(".ScheduleNextButton").unbind("click").click(function () {
        var curTab = $('#tabs2').tabs("option", "selected");
        $('#tabs2').tabs("select", curTab + 1);
        return false;
    });

    $(".SchedulePrevButton").unbind("click").click(function () {
        var curTab = $('#tabs2').tabs("option", "selected");
        if (curTab > 0) {
            $('#tabs2').tabs("select", curTab - 1);
        }
        return false;
    });

    //START ACCOUNTS PAGE
    $('#ActCharges').change(function () {
        var Charges = isNaN(parseFloat($("#ActCharges").val())) ? 0.0 : parseFloat($("#ActCharges").val());
        var Tax = isNaN(parseFloat($("#ActTax").val())) ? 0.0 : parseFloat($("#ActTax").val());
        $('#ActTotal').val(Charges + Tax);
        return false;
    });

    $('#ActTax').change(function () {
        var Charges = isNaN(parseFloat($("#ActCharges").val())) ? 0.0 : parseFloat($("#ActCharges").val());
        var Tax = isNaN(parseFloat($("#ActTax").val())) ? 0.0 : parseFloat($("#ActTax").val());
        $('#ActTotal').val(Charges + Tax);
        return false;
    });

    $('#AmountToAllocate, #FullPayment').change(function () {
        $("label.errorLabel").remove();
        var invVal = parseFloat($("select[id$=InvoiceNumber] option:selected").val().split("|")[1]);
        var remitVal = parseFloat($("select[id$=Remittance] option:selected").val().split("|")[1]);
        var amt = parseFloat($('#AmountToAllocate').val());
        var blnFullPayment = $('#FullPayment').is(":checked");
        $('#ProfitLossEx').val(blnFullPayment);
        if (blnFullPayment) { $('#AmountToAllocate').val(invVal); amt = invVal; }
        if (invVal < amt) { ShowError($('#AmountToAllocate'), "Allocation amount can't be more than the invoice value of " + invVal); return false; }

        if (remitVal < amt && !blnFullPayment && invVal != amt) { ShowError($('#AmountToAllocate'), "Allocation amount can't be more than the unallocated remittance value of " + remitVal); return false; }
        if (remitVal < amt && !blnFullPayment && invVal == amt) { ShowError($('#FullPayment'), "Allocation amount is more than remittance, select 'Automatically adjust for profit/loss' to proceed"); return false; }
        return false;
    });
    //END ACCOUNTS PAGE
}

function ProcessActionButton(node, action) {
    var formData = $("form").serializeArray();

    // add selected node!
    // var node = $(".AdminTree").fancytree("getActiveNode");
    if (node) {
        //if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
        if ((typeof $(node).prop("extraClasses") != "undefined") && ($(node).prop("extraClasses").indexOf('leaf') > -1)) {
            var id = $(node).prop("key");
            var idVal = new Object;
            idVal.name = "selectedNodeID";
            idVal.value = id;
            formData.push(idVal);
        }
    }
    AdminAction("ButtonMenuClick", action, formData, $("#AdminClass").val());
    //return false;
}
//function ProcessBSActionButton(node, action) {
//    var formData = $("form").serializeArray();

//    if (node) {
//        //if ($(node).prop("extraClasses").indexOf('leaf') > -1) {
//        if ((typeof $(node).prop("extraClasses") != "undefined") && ($(node).prop("extraClasses").indexOf('leaf') > -1)) {
//            var id = $(node).prop("key");
//            var idVal = new Object;
//            idVal.name = "selectedNodeID";
//            idVal.value = id;
//            formData.push(idVal);
//        }
//    }
////    AdminAction("ButtonMenuClick", action, formData, $("#AdminClass").val());
//    formData.push(GetKeyPair('id', id));
//    AdminAction("ButtonMenuClick", id, formData, $('#AdminClass').val());
//}

function TreeMenuClick(action) {
    var node = $('.AdminTree').fancytree('getActiveNode');
    var id = $(node).prop('key');
    var formData = $("form").serializeArray();
    var idVal = new Object;
    idVal.name = "selectedRowID";
    idVal.value = id;
    formData.push(idVal);
    AdminAction("ButtonMenuClick", action, formData, $('#AdminClass').val());
}

function AdminAction(action, sID, formData, data, confirm, data2, bsWait) {
    var wsRq = new Object;
    wsRq.webServiceRequest = new Object;

    wsRq.webServiceRequest.ID = sID;
    wsRq.webServiceRequest.Action = action;
    wsRq.webServiceRequest.formData = formData;
    wsRq.webServiceRequest.Data = data;
    wsRq.webServiceRequest.Data2 = data2;
    wsRq.webServiceRequest.Confirm = confirm;

    var rq = $.toJSON(wsRq);

    SendAjaxRequest(GetAjaxUrl(), rq, "html", AdminDoSubmit_onSuccess, AdminDoSubmit_onError, "", true, "", "", bsWait);
}
function GetAjaxUrl() {
    var url = "WebServices/AdminWS.asmx/AdminCommand";
    // ShowLoadingProgressDialog("Please Wait...");
    if ((new RegExp("/Agent/", "i")).test(window.location.href) ||
        (new RegExp("/mmb/", "i")).test(window.location.href) ||
        (new RegExp("/b/", "i")).test(window.location.href) ||
        (new RegExp("/res/", "i")).test(window.location.href) ||
        (new RegExp("/backoffice/", "i")).test(window.location.href) ||
        (new RegExp("/fares/", "i")).test(window.location.href) ||
        (new RegExp("/admin/", "i")).test(window.location.href) ||
        (new RegExp("/customerpanels/", "i")).test(window.location.href) ||
        (new RegExp("/fqtv/", "i")).test(window.location.href) ||
        (new RegExp("/cargo/", "i")).test(window.location.href) ||
        (new RegExp("/account/", "i")).test(window.location.href) ||
        (new RegExp("/adminpages/", "i")).test(window.location.href)) {
        // agent page
        url = "../" + url;
    } else if ((new RegExp("/BackOffice/", "i")).test(window.location.href)) {
        sRequestPrefix = "../../";
    }
    url = url + "?VarsSessionID=" + $("#VarsSessionID").val();
    return url;
}

function InsertRows(msg) {
    // insert before msg.rs.DisplayLoation row

    var str = msg.Data;
    $(msg.RemoveLoation).contents().remove();
    $(msg.RemoveLoation).remove();
    $(str).insertBefore(msg.DisplayLoation);
    ScheduleEdit();
}

function AdminDoSubmit_onSuccess(msg) {

    var bMsgShown = false;

    try {
        if (msg.Result == "CONFIRM") {
            //var oButtons = {
            //    "Ok": function () {
            //        // send confirm message
            //        //SendVrsCommand(msg.Command, msg.Action, "", "1");
            //        var form = $(msg.form).serializeArray();
            //        AdminAction(msg.Action, $("#CurEditId").val(), form, $("#AdminClass").val(), "1");
            //        jQuery(this).dialog("destroy");
            //    },
            //    Cancel: function () {
            //        jQuery(this).dialog("destroy");
            //    }
            //}

            //MessageDialog(msg.Data, "Confirm Action", "ui-icon-alert", "", oButtons);
            if (confirm(msg.Data) == true) {
                var form = $(msg.form).serializeArray();
                AdminAction(msg.Action, msg.ID, form, $("#AdminClass").val(), "1");
            }

        } else if (msg.Result == 'OK') {
            var WantHookUp = true;

            switch (msg.Action) {
                case "restrictions":
                    // new restrictions tab
                    $("#tabs-21").html(msg.Data);
                    break;
                case "SaveForm":
                    InfoMessageDialog("Updated OK");
                    HideAgentModalDialog();
                    WantHookUp = false;
                    // $("#divEditor").html("");
                    break;
                case "AddForm":
                    InfoMessageDialog(msg.Data);
                    msg.ErrorMsg = "";
                    $("#divEditor").html("");
                    WantHookUp = false;
                    break;
                case "ChangePassword": case "SaveMember": case "SavePublicWebsite": case "SaveExpertWebsite": case "DbTest":
                    if ((msg.Data != '') && (msg.Data != null)) {
                        InfoMessageDialog(msg.Data);
                    }
                    break;
                case "GetSearchFields":
                    var oButtons = {
                        "Ok": function () {
                            var form = $("#GetFieldsForm").serializeArray();
                            AdminAction("SetFields", $("#CurEditId").val(), form, $("#AdminClass").val());
                            jQuery(this).dialog("destroy");
                        },
                        Cancel: function () {
                            jQuery(this).dialog("destroy");
                        }
                    };
                    ShowAgentModalDialog(msg.Data, 400, 700, oButtons, { "title": "Add Search Fields" });
                    break;
                case "search": case "Search":
                    if ((msg.ErrorMsg != '') && (msg.ErrorMsg != null)) {
                        InfoMessageDialog(msg.ErrorMsg);
                    }
                    $(".dynaHost").html(msg.Data);
                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    hookupDbGrid();
                    $(".Col2MenuDiv .navbar-nav").smartmenus({
                        subMenusSubOffsetX: 2,
                        subMenusSubOffsetY: -6,
                        subIndicatorsPos: 'append',
                        subIndicatorsText: '',
                        collapsibleShowFunction: null,
                        collapsibleHideFunction: null,
                        rightToLeftSubMenus: false,
                        bottomToTopSubMenus: false
                    });
                    $(".Col2MenuDiv .navbar-nav").addClass("sm");
                    //rightToLeftSubMenus: $this.hasClass('navbar-right'),
                    //bottomToTopSubMenus: $this.closest('.navbar').hasClass('navbar-fixed-bottom')
                    break;
                case "SaveRow": case "AddRow": case "DeleteRow":
                    if ((msg.ErrorMsg != '') && (msg.ErrorMsg != null)) {
                        InfoMessageDialog(msg.ErrorMsg);
                        msg.ErrorMsg = "";
                    }
                    $(".dynaHost").html(msg.Data);
                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    break;
                case "ButtonMenuClick": case "MenuAction":
                    if ($(".RefreshPill").length) {
                        $(".RefreshPill").removeClass("warning");
                    }
                    if ($(".vars-ajax.fa-refresh").length) {
                        $(".vars-ajax.fa-refresh").each(function () {
                            $(this).addClass("fa-square-o").removeClass("fa-spin").removeClass("fa-refresh");
                        });
                    }
                    if ((msg.ErrorMsg != '') && (msg.ErrorMsg != null)) {
                        InfoMessageDialog(msg.ErrorMsg);
                        bMsgShown = true;
                    }
                    if (msg.RemoveDialog == true) {
                        try {
                            jQuery("#ErrorDialog").dialog("destroy");
                            DeleteMesssageDialog();
                            $('body').removeClass('modal-open');
                        } catch (e) { }
                        try {
                            // delete old modal 
                            if (($("#" + msg.ModalID).length > 0) && (msg.RemoveDialog == true)) {
                                $("#" + msg.ModalID).modal("hide");
                                $("#" + msg.ModalID).remove();
                                $('.modal-backdrop').remove();
                                if ($('.modal').length == 0) {
                                    $('body').removeClass('modal-open');
                                }
                            }
                            if (($("#StackedModal").length > 0) && (msg.RemoveDialog == true)) {
                                $("#StackedModal").remove();
                            }


                        } catch (e) { }
                    }
                    if (msg.RemoveStackedDialog == true) {
                        try {
                            if ($("#StackedModal").length > 0) {
                                $("#StackedModal").remove();
                            }
                        } catch (e) { }
                    }
                    if (msg.RemoveMessage == true) {
                        jQuery("#GMDialog").dialog("destroy");
                        if ($("#GMDialog").length > 0) {
                            $("#GMDialog").remove();
                        }
                    }

                    if (msg.ResponseAction2 == "DisplayInPage") {
                        try {
                            $(msg.DisplayLoation2).html(msg.Data2);
                        } catch (e) { }
                        WantHookUp = msg.WantHookUp;
                    }

                    if (msg.ResponseAction == "DisplayInPage") {
                        try {
                            $(msg.DisplayLoation).html(msg.Data);
                        } catch (e) { }
                        WantHookUp = msg.WantHookUp;
                    } else if (msg.ResponseAction == "None") {
                    } else if (msg.ResponseAction == "Redirect") {
                        if ((msg.Data != null) && (msg.Data != '')) {
                            window.open(msg.Data, "_top");
                            return;
                        } else {
                            // refresh the page
                            GoToPage(location.href, true);
                        }
                    } else if (msg.ResponseAction == "DisplayInNewTab") {
                        if ((msg.NextURL != null) && (msg.NextURL != '')) {
                            window.open(msg.NextURL, "_blank");
                            return;
                        }
                    } else if (msg.ResponseAction == "DisplayInViewWindow") {
                        if ((msg.NextURL != null) && (msg.NextURL != '')) {
                            //loadMasterPagePopUpWindow(msg.NextURL, null, null, rs.DialogCaption, 1, 0, 0, 0, 0, 1, 1, 0);
                            loadMasterPagePopUpWindow(msg.NextURL, null, null, msg.DialogCaption, 1, 0, 0, 0, 0, 1, 1, 0);
                            return;
                        }
                    } else if (msg.ResponseAction == "DisplayArrayInPage") {
                        var arr = msg.Data.split(",");
                        $.map(arr, function (item) {
                            // your operation on data
                            var loc = item.split('=')[0];
                            var val = item.split('=')[1];
                            $(loc).val(val).change();
                        });
                        WantHookUp = msg.WantHookUp;
                    } else if ((msg.ResponseAction == "DisplayInModal") || (msg.ResponseAction == "DisplayInModalIframe") || (msg.ResponseAction == "DisplayInModalIframePage")) {
                        // delete old modal
                        if (($("#" + msg.ModalID).length > 0) && (msg.RemoveDialog == true)) {
                            $("#" + msg.ModalID).modal("hide");
                            $("#" + msg.ModalID).remove();
                            $(".modal-backdrop").remove();
                        }

                        var dlg = '<div id="' + msg.ModalID + '" class="modal  fade " data-backdrop="static">'; //
                        dlg += '<div class="modal-dialog "><div class="modal-content">';
                        dlg += '<div class="modal-header back-primary">';
                        if (msg.ModalTitleIcon != "") {
                            dlg += '<i class="fa fa-2x ' + msg.ModalTitleIcon + ' pull-left " >&nbsp;</i>';
                        }
                        if (msg.WantButtonsInTile == true) {
                            dlg += '<div class="pull-right"><button id="bntClose" class="btn" data-dismiss="modal">Close</button>&nbsp;&nbsp;';
                            dlg += '<button id="ModalSubmit" class="btn btn-success pull-right" data-dismiss="modal" type="submit" >Save changes</button></div>';
                        } else {
                            dlg += '<button type="button" class="close" data-dismiss="modal" >×</button>';
                        }
                        dlg += '<h3 class="modalLabel"></h3></div>';
                        dlg += '<div class="modal-body ' + msg.DialogContentClass + '"></div>';
                        dlg += '<div class="modal-footer"><button id="bntClose" class="btn" data-dismiss="modal">Close</button>';
                        dlg += '<button id="ModalSubmit" class="btn btn-success" data-dismiss="modal" type="submit" >Save changes</button></div>';
                        dlg += '</div></div>';
                        dlg += '</div>';
                        $(dlg).hide().appendTo("body");
                        hiddenMsg = msg;
                        // reset button id
                        $("#" + msg.ModalID + " .modal-footer :first-child").attr("id", "bntClose");
                        $("#" + msg.ModalID + " .modal-footer :nth-child(2)").attr("id", "ModalSubmit");

                        $("#" + msg.ModalID + " .modalLabel").html(msg.DialogCaption);
                        $("#" + msg.ModalID + " .modal-dialog").addClass(msg.DialogWidth);
                        ///colTest("#" + msg.ModalID);
                        $(".modal_sub_table_div").addClass(msg.DialogWidth);
                        if ((msg.DialogButton1 != null) && (msg.DialogButton1 != "")) {
                            $("#" + msg.ModalID + " #bntClose").show();
                            $("#" + msg.ModalID + " #bntClose").html(msg.DialogButton1);
                            if (msg.DialogButton1Class != "") {
                                $("#" + msg.ModalID + " #bntClose").addClass(msg.DialogButton1Class);
                            }
                            $("#" + msg.ModalID + " #bntClose").attr("id", msg.DialogButton1Action);
                        } else {
                            $("#" + msg.ModalID + " #bntClose").hide();
                        }

                        try {
                            if ((msg.DialogButton1Data != null) && (msg.DialogButton1Data != "")) {
                                var obj = JSON.parse(msg.DialogButton1Data);
                                obj.forEach(function (item) {
                                    $("#" + msg.ModalID + " #" + msg.DialogButton1Action).attr('data-' + item.name, item.value);
                                });
                            }
                        }
                        catch (e) {
                            Console.write(e);
                        }



                        var submitID = "#ModalSubmit";
                        if ((msg.DialogButton2 != null) && (msg.DialogButton2 != "")) {
                            $("#" + msg.ModalID + " #ModalSubmit").show();
                            $("#" + msg.ModalID + " #ModalSubmit").html(msg.DialogButton2);
                            if (msg.DialogButton2Class != "") {
                                $("#" + msg.ModalID + " #ModalSubmit").attr('class', 'btn ' + msg.DialogButton2Class);
                            }
                            if (msg.DialogButton2Action != "") {
                                $("#" + msg.ModalID + " #ModalSubmit").attr("id", msg.DialogButton2Action);
                                submitID = "#" & msg.DialogButton2Action;
                            }
                        } else {
                            $("#" + msg.ModalID + " #ModalSubmit").hide();
                        }

                        try {
                            if ((msg.DialogButton2Data != null) && (msg.DialogButton2Data != "")) {
                                var obj = JSON.parse(msg.DialogButton2Data);
                                obj.forEach(function (item) {
                                    $("#" + msg.ModalID + " #" + msg.DialogButton2Action).attr('data-' + item.name, item.value);
                                });
                            }
                        }
                        catch (e) {
                            Console.write(e);
                        }

                        if (msg.ResponseAction == "DisplayInModalIframe") {
                            // build an iframe in the dialog
                            var mData = msg.Data;
                            var ifram = document.createElement("iframe");
                            ifram.id = "IdIframe";
                            ifram.width = "100%";
                            ifram.height = "100%";
                            ifram.onload = function () {
                                // for FireFox
                                $(this).contents().find("body").html(mData);
                            };
                            $("#" + msg.ModalID + " .modal-body").html(ifram);
                            //$("#Modal").html('<iframe id="IdIframe" width="100%" height="100%" />');
                            // for non fire fox browsers
                            setTimeout(function () {
                                $("#IdIframe").contents().find("body").html(mData);
                            }, 100);
                        } else if (msg.ResponseAction == "DisplayInModalIframePage") {
                            // build an iframe in the dialog
                            var mData = msg.Data;
                            var ifram = document.createElement("iframe");
                            ifram.id = "IdIframe";
                            ifram.width = "100%";
                            ifram.height = "100%";
                            ifram.src = msg.Data;
                            $("#" + msg.ModalID + " .modal-body").html(ifram);
                            $("#" + msg.ModalID).modal('show').unbind('shown.bs.modal').on('shown.bs.modal', function () {

                                $(this).find('.modal-body, .modal-content').css({
                                    width: 'auto', //probably not needed
                                    height: '100%', //probably not needed 
                                    'max-height': '100%'
                                });

                                var zIndex = 1040 + (10 * $('.modal:visible').length);
                                $(this).css('z-index', zIndex);
                                $(this).find(".modal-dialog").css('z-index', zIndex + 10);
                                setTimeout(function () {
                                    $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                                }, 0);

                            }).on('hidden.bs.modal', function () {
                                if ($('.modal.in').css('display') == 'block') {
                                    $('body').addClass('modal-open');
                                }
                                $(this).remove(); // '.modal'

                            });
                        } else {
                            $("#" + msg.ModalID + " .modal-body").html(msg.Data);
                            $("#" + msg.ModalID).modal('show').unbind('shown.bs.modal').on('shown.bs.modal', function () {
                                if (msg.WantZIndex) {
                                    var zIndex = 1040 + (10 * $('.modal:visible').length);
                                    $(this).css('z-index', zIndex);
                                    $(this).find(".modal-dialog").css('z-index', zIndex + 10);
                                    setTimeout(function () {
                                        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex + 1).addClass('modal-stack');
                                    }, 0);
                                }
                                if (msg.WantValidation) {
                                    $('.validatedForm').formValidation({
                                        submitButtons: submitID
                                    }).formValidation("validate");
                                }
                                $('.faredatetimepicker').datepicker({
                                    dateFormat: "dd-M-yy",
                                    minDate: "-1y", maxDate: "+2y",
                                    changeMonth: true, changeYear: true,
                                    closeText: "Close"
                                });
                                if ((typeof (msg.ModalHookupFunction) != 'undefined') && (msg.ModalHookupFunction != "")) {

                                    // call function name provided by VB
                                    eval(msg.ModalHookupFunction + "(msg)");
                                }
                            }).on('hidden.bs.modal', function () {
                                if ($('.modal.in').css('display') == 'block') {
                                    $('body').addClass('modal-open');
                                }
                                $(this).remove(); // '.modal'

                            });
                        }


                        WantHookUp = msg.WantHookUp;
                    } else if (msg.ResponseAction == "DisplayBootstrapAlert") {
                        bootbox.alert(msg.Data);
                    } else if (msg.ResponseAction == "ReloadPage") {
                        bootboxlocation.reload();

                    } else if (msg.ResponseAction == "DisplayGrowl") {
                        // little alert
                        setTimeout(function () {
                            Lobibox.notify(msg.GrowlType, {
                                msg: msg.GrowlMsg,
                                sound: false,
                                position: msg.GrowlAlign,
                                delay: msg.GrowlDelay,
                                iconClass: msg.GrowlIcon
                            });
                            //$.bootstrapGrowl(msg.GrowlMsg, { type: msg.GrowlType, delay: msg.GrowlDelay, align: msg.GrowlAlign, icon: "fa fa-error fa-2" });
                        }, 100);
                        msg.ErrorMsg = "";

                    } else if (msg.ResponseAction == "DisplayMessage") {
                        WantHookUp = msg.WantHookUp;
                        var params = { modal: true, buttons: { "OK": { text: "OK", click: function () { jQuery(this).dialog("destroy"); } } } };

                        if ((msg.DialogWidth != "0") || (msg.DialogHeight != "0") ||
                            (msg.DialogButton1 != "") || (msg.DialogCaption != "")) {
                            params = { modal: true, buttons: { "Cancel": { text: msg.DialogButton2, click: function () { jQuery(this).dialog("destroy"); } } } };

                            try { if (msg.DialogHeight != "0") params.height = msg.DialogHeight; } catch (e) { }
                            try { if (msg.DialogWidth != "0") params.width = msg.DialogWidth; } catch (e) { }
                            try { if (msg.DialogCaption != "") params.title = msg.DialogCaption; } catch (e) { }

                            try {
                                if (msg.DialogButton1 != "") {
                                    var buttonLabel = msg.DialogButton1;
                                    var newAction = msg.DialogButton1Action;
                                    var form = msg.form;
                                    params.buttons.SAVE = new Object();
                                    params.buttons.SAVE.text = msg.DialogButton1;
                                    params.buttons.SAVE.click = function () {
                                        var formData = $(form).serializeArray();
                                        var adClass = $("#AdminClass").val();
                                        if ($("#AdminClass").length == 0) {
                                            adClass = msg.PageClassName;
                                        }
                                        AdminAction("ButtonMenuClick", newAction, formData, adClass);
                                        jQuery(this).dialog("destroy");
                                        DeleteMesssageDialog();
                                    };
                                }
                            } catch (e) { }
                        }
                        //InfoMessageDialog(msg.Data, null, params);
                        MessageDialog(msg.Data, "Information", null, "", null, params);

                        //$(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: msg.DatePickerMinDate, maxDate: msg.DatePickerMaxDate, closeText: "Close", showButtonPanel: true });
                        //$(".datepicker2year").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+2y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true });
                        InitDatePickers();
                        //$(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });

                    } else if (msg.ResponseAction == "DisplayInDialog") {
                        var cx = $(window).width() * 0.6;
                        var cy = $(window).height() * 0.6;
                        var pageClass = msg.PageClassName;

                        if (msg.DialogWidth != "0") {
                            cx = msg.DialogWidth;
                        }
                        if (msg.DialogHeight != "0") {
                            cy = msg.DialogHeight;
                        }
                        var buttonLabel = msg.DialogButton1;
                        var newAction = msg.DialogButton1Action;
                        var ValidationFunction = msg.ValidationFunction;
                        //WantHookUp = false;
                        WantHookUp = msg.WantHookUp;
                        var ResponseFunction = msg.ResponseFunction;

                        var oButtons = [
                            {
                                text: "Cancel",
                                click: function () {
                                    jQuery(this).dialog("destroy");
                                }
                            },
                            {
                                text: buttonLabel,
                                click: function () {
                                    if (ValidationFunction != "") {
                                        var ok = eval(ValidationFunction + "(msg)");
                                        if (ok == false) {
                                            return false;
                                        }
                                    }
                                    if (ValidateForm() == true) {

                                        // AdminAction("FltUpdate", msg.ID, form, $("#AdminClass").val(), "0");
                                        if (newAction != "") {
                                            var formData = $("#EditorForm").serializeArray();
                                            var adClass = $("#AdminClass").val();
                                            if ($("#AdminClass").length == 0) {
                                                adClass = pageClass;
                                            }
                                            AdminAction("ButtonMenuClick", newAction, formData, adClass);
                                        } else {
                                            InfoMessageDialog("ACTION not implemented yet");
                                        }
                                    }
                                }
                            }
                        ];
                        if (msg.WantDialogPrintButton == true) {
                            oButtons.push({
                                "click": function () {
                                    var obj = this;
                                    DialogPrint(obj, msg.HookupFunction);
                                    // jQuery(this).dialog("destroy");
                                },
                                "text": "Print"
                            });
                            msg.Data = '<div class="PrintableContent" >' + msg.Data + '</div>';
                        }
                        ShowAgentModalDialog(msg.Data, cy, cx, oButtons, { "title": msg.DialogCaption });
                        if (newAction == "") {
                            $(".ui-dialog-buttonpane button:contains('" + buttonLabel + "')").hide();
                        }
                        //$(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
                        //$(".datepicker2year").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+2y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true });
                        InitDatePickers();
                        hookupAutoComplete();
                        if ((typeof (ResponseFunction) != 'undefined') && (ResponseFunction != "")) {
                            // call function name provided by VB
                            eval(msg.ResponseFunction + "(msg)");
                            WantHookUp = msg.WantHookUp;
                        }
                    } else {

                        var cx = $(window).width() * 0.6;
                        var cy = $(window).height() * 0.6;
                        var oButtons = {
                            "Cancel": function () {
                                jQuery(this).dialog("destroy");
                            },
                            "Update": function () {
                                if (ValidateForm() == true) {
                                    var form;

                                    form = $("#FareEditorForm").serializeArray();
                                    AdminAction("FltUpdate", msg.ID, form, $("#AdminClass").val(), "0");
                                }
                            }
                        };
                        ShowAgentModalDialog(msg.Data, cy, cx, oButtons, { "title": msg.DialogCaption });
                        //$(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
                        //$(".datepicker2year").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+2y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true });
                        InitDatePickers();
                        switch (msg.ID) {

                            case "AdvSearchNow":
                                $(".Col2").html(msg.Data);
                                break;
                            default:
                                $(".dynaHost").html(msg.Data);
                                break;

                        }
                    }
                    if ((typeof (ResponseFunction) != 'undefined') && (ResponseFunction != "")) {
                        // call function name provided by VB
                        eval(msg.ResponseFunction + "(msg)");
                        WantHookUp = msg.WantHookUp;

                    }
                    if ((typeof (msg.HookupFunction) != 'undefined') && (msg.HookupFunction != "")) {
                        // call function name provided by VB
                        eval(msg.HookupFunction + "(msg)");
                    }
                    if (msg.WantGrowlMsg && (msg.ResponseAction != "DisplayGrowl")) {
                        // little alert
                        setTimeout(function () {
                            //$.bootstrapGrowl(msg.GrowlMsg, { type: msg.GrowlType, delay: msg.GrowlDelay, align: msg.GrowlAlign });
                            Lobibox.notify(msg.GrowlType, {
                                msg: msg.GrowlMsg,
                                sound: false,
                                position: msg.GrowlAlign,
                                delay: msg.GrowlDelay,
                                iconClass: msg.GrowlIcon
                            });
                        }, 100);
                        msg.ErrorMsg = "";
                    }

                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    break;
                case "SelectRow": case "CancelRow":
                    $("#divEditor").html(msg.Data);
                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    AdminPageSizeToFit();
                    //EditMode();
                    $(".datepicker").datepicker({ dateFormat: "dd/mm/yy", minDate: "-1y", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
                    WantHookUp = true;
                    break;
                case "ViewTransactions":
                    ShowAgentModalDialog(msg.Data, 400, 700, null, { "title": "Transactions" });
                    break;
                case "ItemEdit": case "ItemAdd": case "ItemCopyAdd":
                    // get browser size
                    var cx = $(window).width() * 0.9;
                    var cy = $(window).height() * 0.9;
                    var valFunction = msg.ValidationFunction;
                    var oButtons = {
                        "Cancel": function () {
                            if ($("#ScheduleEditorForm").length > 0) {
                                var formData = $("form").serializeArray();
                                AdminAction("ButtonMenuClick", "reloadFltNo", formData, "VARS.BookingLibrary.Controls.Pages.SchedulePage");
                            }
                            jQuery(this).dialog("destroy");
                        },
                        "Save": function () {
                            var form;
                            if (ValidateForm() == true) {
                                if (valFunction != "") {
                                    if (eval(valFunction + "(msg)") == false) {
                                        return;
                                    }
                                }

                                if ($("#ScheduleEditorForm").length > 0) {
                                    form = $("#ScheduleEditorForm").serializeArray();
                                    var nestVal = new Object;
                                    nestVal.name = "nestingVal";
                                    nestVal.value = $("#nesting :radio:checked").attr('id').replace("nesting", "");
                                    form.push(nestVal);
                                } else {
                                    form = $("#FareEditorForm").serializeArray();
                                }

                                if (msg.Action == "ItemEdit") {
                                    AdminAction("SaveForm", $("#CurEditId").val(), form, $("#AdminClass").val(), "0");
                                } else {
                                    AdminAction("AddForm", $("#CurEditId").val(), form, $("#AdminClass").val(), "0");
                                }
                            }
                        }
                    };
                    ShowAgentModalDialog(msg.Data, cy, cx, oButtons, { "title": msg.DialogCaption });
                    //$(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
                    //$(".datepicker2year").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+2y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true });
                    InitDatePickers();
                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    WantHookUp = false;
                    if ($("#ScheduleEditorForm").length > 0) {
                        ScheduleEdit();
                    } else {
                        FareEdit();
                    }
                    break;

                case "FarePaste": case "FareCopy":
                    var cx = $(window).width() * 0.9;
                    var cy = $(window).height() * 0.9;
                    var oButtons = {
                        "Cancel": function () {
                            jQuery(this).dialog("destroy");
                        },
                        "Ok": function () {
                            InfoMessageDialog("COPY / PASTE not implemented yet");
                            //jQuery(this).dialog("destroy");
                        }
                    };
                    ShowAgentModalDialog(msg.Data, cy, cx, oButtons, { "title": msg.DialogCaption });
                    $(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });

                    $("#admin_tabs").tabs();
                    $("#tabs2").tabs();
                    WantHookUp = false;
                    ScheduleEdit();
                    break;
                case "SelectProductCat": case "SelectProduct":
                    var selectedTab = $(".rightCol").data('tabs').options.selected;
                    $(".rightCol").tabs('destroy');
                    $(".rightCol").html(msg.Data);
                    $(".rightCol").tabs();
                    $(".rightCol").tabs('option', 'selected', selectedTab);
                    //$(".rightCol").show();
                    // hookupDbGrid();
                    break;
                default:
                    $("#dldDiv").html(msg.Data);
                    break;
            }
            if (msg.ErrorMsg != null && msg.ErrorMsg != '' && bMsgShown == false) {
                ErrorMessageDialog(msg.ErrorMsg);
            }
            if (WantHookUp) hookupAdminGrid(msg);
            try {
                $("#EditModeRadios").buttonset();
            } catch (e) { }

        } else {
            if (msg.RemoveDialog == true) {
                try {
                    jQuery("#ErrorDialog").dialog("destroy");
                    DeleteMesssageDialog();
                    $('body').removeClass('modal-open');
                } catch (e) { }
            }
            if (msg.RemoveMessage == true) {
                try {
                    jQuery("#GMDialog").dialog("destroy");
                    if ($("#GMDialog").length > 0) {
                        $("#GMDialog").remove();
                    }
                } catch (e) { }
            }

            if ((msg.ErrorMsg != null) && (msg.ErrorMsg != '')) {
                if (msg.bsWait == true) {
                    if (msg.Result.toLowerCase() != 'error') {
                        bootbox.alert({
                            message: msg.ErrorMsg,
                            title: msg.Result
                        });
                    }
                    else {
                        bootbox.alert({
                            message: msg.ErrorMsg,
                            title: "Error"
                        });
                    }
                    
                } else {
                    ErrorMessageDialog(msg.ErrorMsg, msg.NextURL);
                }
            } else if ((msg.Data != null) && (msg.Data != '')) {
                if (msg.bsWait == true) {
                    bootbox.alert({
                        message: msg.Data,
                        title: "Error"
                    });
                } else {
                    ErrorMessageDialog(msg.Data, msg.NextURL);
                }
            } else {
                ErrorMessageDialog("Unknown Error", msg.NextURL);
            }
            if ((msg.NextPage != null) && (msg.NextPage != '') && (msg.NextPage.toUpperCase() != curPage.toUpperCase())) {
                GoToPage(msg.NextPage);
                return;
            }

        }
    } catch (e) { }


    if (msg.DialogWidth != '0' && msg.DialogWidth != '') {
        var sel = $('.modalSubTableDiv');
        sel.addClass(msg.DialogWidth);

        var sWd = (sel.width() - 40) + 'px';
        sel.css("max-width", sWd);
    }

    $(".modal-content").draggable({
        "handle": ".modal-header"
    });
}

function AdminDoSubmit_onError(msg) {
    ErrorMessageDialog(msg);
    if ((msg.NextPage != null) && (msg.NextPage != '') && (msg.NextPage.toUpperCase() != curPage.toUpperCase())) {
        GoToPage(msg.NextPage);
        return;
    }

}

function getColorFromCss(srcClass, element) {
    var $p = $('<a class="' + srcClass + '"></a>').hide().appendTo("body");
    var val = $p.css(element);
    $p.remove();
    return val;
}

function setColorToCss(targetSelector, color) {
    $(targetSelector).css("color", color);
}
function setupJquery() {
    var color = getColorFromCss("ui-state-active", "background-color");

    setColorToCss(".widget-stats .txt", color);
    setColorToCss(".widget-stats .txt strong", color);
}
function GrandParentShowField(selector, bShow) {
    if (bShow) {
        $(selector).parent().parent().show();
    } else {
        $(selector).parent().parent().hide();
    }
}
function showField(selector, bShow) {
    if (bShow) {
        $(selector).show();
    } else {
        $(selector).hide();
    }
}
function ShowHideFields(bEditMode) {
    GrandParentShowField("#flightdate", bEditMode);
    GrandParentShowField("#fltid", bEditMode);
    GrandParentShowField("#flight", bEditMode);
    GrandParentShowField("#ScheduleGeneralDetails #fltgroup", bEditMode);

    showField(".ScheduleUpdateButton", bEditMode);
    showField(".ScheduleCreateButton", !bEditMode);

    InitDatePickers();

}
function InitDatePickers() {
    try {
        if ((UserCurrentLanguage != null) && (UserCurrentLanguage != '')) {
            if ($.datepicker.regional[UserCurrentLanguage] != null) {
                $.datepicker.setDefaults($.datepicker.regional[UserCurrentLanguage]);
            }
        }
    } catch (e) { }

    if (typeof defMaxDate !== 'undefined') {
        $(".avdatepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: defMaxDate, closeText: "Close", showButtonPanel: true });
    }
    else {
        $(".avdatepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+357d", closeText: "Close", showButtonPanel: true });
    }

    //$(".avdatepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+357d", closeText: "Close", showButtonPanel: true });
    $(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
    $(".datepicker2year").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+2y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true });
    $(".datepickerlong").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+10y", closeText: "Close", showButtonPanel: true, changeYear: true });

    $(".datepickerdob").datepicker(
        {
            dateFormat: "dd-M-yy", minDate: "-120y", yearRange: "-120:+nn", maxDate: "+0y", closeText: "Close",
            showButtonPanel: true, changeYear: true, showAnim: "",
            onSelect: function (dateText, inst) {
                this.fixFocusIE = true;
                $(this).blur().change().focus();
            },
            onClose: function (dateText, inst) {
                $('.validatedForm').formValidation('revalidateField', $(this).prop("name"));

            }
        });

    $(".datepickerinfant").datepicker({
        dateFormat: "dd-M-yy", minDate: "-24m", maxDate: "+0y", closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true, onSelect: function () {
            /* fix for datepicker in modal */
            $('.validatedForm').formValidation('revalidateField', $(this).prop("id"));
        },
    });
    $(".datepickerback6m").datepicker({ dateFormat: "dd-M-yy", minDate: "-6m", maxDate: "+1y", closeText: "Close", showButtonPanel: true, changeYear: true });
    $(".datepickerbacklong").datepicker({ dateFormat: "dd-M-yy", minDate: "-10y", maxDate: "+0d", closeText: "Close", showButtonPanel: true, changeYear: true });
    $(".datepickerwithyear").datepicker({
        dateFormat: "dd-M-yy", yearRange: "-10:+50", closeText: "Close", showButtonPanel: true, changeYear: true, onSelect: function () {
            /* fix for datepicker in modal */
            $('.validatedForm').formValidation('revalidateField', $(this).prop("id"));
        }
    });

    InitCustomDatePickers();

    //jQuery(".datepicker,.avdatepicker,.datepicker2year,.datepickerlong,.datepickerdob,.datepickerinfant,.datepickerback6m,.datepickerbacklong").datepicker("option", "numberOfMonths", 2);


    //Fix issue in Firefox where monthyear dropdowns don't work
    if (navigator.userAgent.indexOf("Firefox") > 0) {
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
    }
}

function InitCustomDatePickers() {

    var elements = $(".datepickercustomdaterange")
    for (i = 0; i < elements.length; i++) {
        var $el = $(elements[i]);
        var date1 = $el.attr('date-min') + "d";
        var date2 = $el.attr('date-max') + "d"
        $el.datepicker({
            dateFormat: "dd-M-yy", minDate: date1, maxDate: date2, closeText: "Close", showButtonPanel: true, changeMonth: true, changeYear: true, onSelect: function () {
                $('.validatedForm').formValidation('revalidateField', $(this).prop("id"));
            }
        });
    }
}

function AdminPageSizeToFit() {
    if (WantSizeToFit == false) {
        return;
    }
    try {
        $(".L3Menu").hide();
        $(".L4Menu").hide();
    } catch (e) { }

    try {
        // take off top for expert and public
        var poweredHeight = $(".IBMMastPowered").height();
        if (poweredHeight > 32) { poweredHeight = 32; }

        var workingHeight = $(window).height() - $("#divGridTop").height()
            - $(".IBEMasterPageHeaderPanel").height() - $(".IBEMasterPageFooterPanel").height()
            - poweredHeight - 20;

        $("#divGridBody").height(workingHeight);
        $("table.IBEMasterPageContentPanel").height(workingHeight);
        $("table.IBEMasterPageContent").height(workingHeight);

        workingHeight = workingHeight - $("#divAgentMenus").height();
        $(".dynaHost").height(workingHeight);
        $(".AdminTable").height(workingHeight - $(".AdminBreadcrumbs").height());
        // put buttons at bottom
        $("#tabs2").height(workingHeight - $("#AdminEditButtons").height() - $(".AdminBreadcrumbs").height() - 20);
        $("#AdvFareSearch").height(workingHeight - $("#AdminEditButtons").height() - $(".ui-widget-header .ui-widget-header").height() - $(".AdminBreadcrumbs").height() - $(".Col1SearchDiv").height() - 20);

        if ($("#tabs2").height() > 0) {
            $("#divEditor .ui-tabs-panel .dialogTableOuterDiv").height($("#tabs2").height() - $(".tabs2 .ui-tabs-nav").height());
        }
        $(".boxGridDiv").height(workingHeight - $(".SearchResults .ui-widget-header").height() - $(".SearchBody").height() - $(".AdminBreadcrumbs").height() - 35);

        // col2
        $(".Col2Div").height(workingHeight - $(".AdminBreadcrumbs").height());
        $(".Col2ResultsDiv").height($(".Col2Div").height() - $(".Col2TitleDiv").height());

        //  $(".AdminTreeOuter .ui-widget-content").height(workingHeight - $(".SearchResults .ui-widget-header").height() - $(".SearchBody").height() - $(".AdminBreadcrumbs").height() - 35);
    } catch (e) { }

    try {
        // set up flight schedule view
        var cx = $(window).width();
        // add margins and botch factor
        $('.outer').width(cx - $('#sidebar-wrapper').outerWidth() - (15 + 15 + 100));
    } catch (e) { }
}
function isInteger(val) {
    return val === val + 0;
}
// form validation
function ValidateForm() {
    // clear old error messages
    $(".inputError").next().remove(".ui-state-error");

    var retVal = true;
    $(".required").each(function () {
        // step through each required field checking its complete
        if ($(this).val().length < 1) {
            retVal = false;
            ShowFieldError(this, "required field");
        }
    });

    $(".minlength").each(function () {
        // step through each required field checking its complete
        if ($(this).val().length < $(this).attr("minlength")) {
            retVal = false;
            ShowFieldError(this, "Min length " + $(this).attr("minlength"));
        }
    });
    return retVal;
}
function ShowFieldError(obj, errorMsg) {
    $(obj).addClass("inputError");
    var label = $('<label class="ui-state-error ui-corner-all" style="margin-left: 0.5em; padding-top: 0px; padding-right: 0.7em; padding-bottom: 0px; padding-left: 0.7em;"><span class="ui-icon ui-icon-alert" style="margin-right: 0.3em; float: left;"/>' + errorMsg + "</label>");

    label.insertAfter(obj);
}

function HookUpMenu() {
    $(".MenuAction").unbind("click").click(function () {
        var formData = $("form").serializeArray();
        AdminAction("MenuAction", $(this).prop("id"), formData);
        return false;
    });
}

function ImnEdit(msg) {
    $(".classCap").unbind("change").change(function () {
        // copy to Agent cap
        var val = $(this).val();
        var id = $(this).prop('id');
        $("#" + id.replace('r_1_cap', 'r_1_agcap')).val(val);
    });
}
function ValidateEditSchedule(msg) {
    var classes = $("#classids").val();
    var arrClass = classes.split(",");
    for (i = 0; i < 26; i++) {
        if (i < arrClass.length) {
            var totalInClass = parseInt($("#r" + (i) + "_cap").val(), 10);
            var allocInClass = 0;

            $('[id ^=raa_][id $=_' + (i + 1) + ']').each(function () {
                if ($(this).val() != "") {
                    allocInClass += parseInt($(this).val(), 10);
                }
            });
            if (allocInClass > totalInClass) {
                MessageDialog("Class " + arrClass[i] + " overallocated. " + allocInClass + " allocated, only " + totalInClass + " available.", "Agent Pre Allocation error", "ui-icon-alert", "", null);
                return false;
            }
        }
    }
    return true;
}

function bootstrap_alert(message, timeout) {
    bootbox.alert({ message: message, title: "Alert" });
    //alert(message);
}
function GetKeyPair(key, val) {
    var kp = new Object;
    kp.name = key;
    kp.value = val;
    return kp;
}
function GetInt(val) {
    var i = 0;
    if ((typeof (val) == 'undefined') || (val == null) || isNaN(val) || (val == '')) {
        return i;
    }
    i = parseInt(val, 10);
    return i;
}

function GetFloat(val) {
    var i = 0;
    if ((typeof (val) == 'undefined') || (val == null) || isNaN(val) || (val == '')) {
        return i;
    }
    i = parseFloat(val, 10);
    return i;
}
function parseBoolean(str) {
    if (str == "true") {
        return true;
    }
    if (!str) {
        return false;
    }
    switch (str.length) {
        case 1: {
            var ch0 = str.charAt(0);
            if (ch0 == 'y' || ch0 == 'Y' ||
                ch0 == 't' || ch0 == 'T' ||
                ch0 == '1') {
                return true;
            }
            if (ch0 == 'n' || ch0 == 'N' ||
                ch0 == 'f' || ch0 == 'F' ||
                ch0 == '0') {
                return false;
            }
            break;
        }
        case 2: {
            var ch0 = str.charAt(0);
            var ch1 = str.charAt(1);
            if ((ch0 == 'o' || ch0 == 'O') &&
                (ch1 == 'n' || ch1 == 'N')) {
                return true;
            }
            if ((ch0 == 'n' || ch0 == 'N') &&
                (ch1 == 'o' || ch1 == 'O')) {
                return false;
            }
            break;
        }
        case 3: {
            var ch0 = str.charAt(0);
            var ch1 = str.charAt(1);
            var ch2 = str.charAt(2);
            if ((ch0 == 'y' || ch0 == 'Y') &&
                (ch1 == 'e' || ch1 == 'E') &&
                (ch2 == 's' || ch2 == 'S')) {
                return true;
            }
            if ((ch0 == 'o' || ch0 == 'O') &&
                (ch1 == 'f' || ch1 == 'F') &&
                (ch2 == 'f' || ch2 == 'F')) {
                return false;
            }
            break;
        }
        case 4: {
            var ch0 = str.charAt(0);
            var ch1 = str.charAt(1);
            var ch2 = str.charAt(2);
            var ch3 = str.charAt(3);
            if ((ch0 == 't' || ch0 == 'T') &&
                (ch1 == 'r' || ch1 == 'R') &&
                (ch2 == 'u' || ch2 == 'U') &&
                (ch3 == 'e' || ch3 == 'E')) {
                return true;
            }
            break;
        }
        case 5: {
            var ch0 = str.charAt(0);
            var ch1 = str.charAt(1);
            var ch2 = str.charAt(2);
            var ch3 = str.charAt(3);
            var ch4 = str.charAt(4);
            if ((ch0 == 'f' || ch0 == 'F') &&
                (ch1 == 'a' || ch1 == 'A') &&
                (ch2 == 'l' || ch2 == 'L') &&
                (ch3 == 's' || ch3 == 'S') &&
                (ch4 == 'e' || ch4 == 'E')) {
                return false;
            }
            break;
        }
        default:
            break;
    }

    return false;
}
function GetRowData(row, headrow) {

    var formData = [];
    var index = 1;
    row.find("td").each(function () {
        var tdVal = new Object;
        if (headrow[index - 1]) {
            // use database column name
            tdVal.name = $(headrow[index - 1]).data('field');
        } else {
            tdVal.name = "col" + index;
        }
        if ($(this).find("input:checkbox").length) {
            tdVal.value = $(this).find("input:checkbox")[0].checked;
        } else {
            tdVal.value = $(this).text();
        }
        formData.push(tdVal);
        index++;
    });
    return formData;
}

function GetSearchData(searchFields) {

    var searchData = [];
    searchFields.each(function () {
        var objVal = new Object;
        objVal.name = $(this)[0].name;
        objVal.value = $(this)[0].value.trim();
        searchData.push(objVal);
    });
    return searchData;
}

function GetRowColData(row) {

    var formData = [];
    var index = 1;
    row.find("td").each(function () {
        var tdVal = new Object;
        if ($(this).find("input:checkbox").length) {
            tdVal.name = "id";
            tdVal.value = $(this).find("input:checkbox").val();
        } else if ($(this).find("input:radio").length) {
            tdVal.name = "id";
            tdVal.value = $(this).find("input:radio").val();
        } else {
            tdVal.name = "col" + index;
            tdVal.value = $(this).text();
        }
        formData.push(tdVal);
        index++;
    });
    return formData;
}
function DialogPrint(obj, fn) {
    var headstr = "<html><head><title></title></head><body>";
    var footstr = "</body>";
    var newstr = $(".PrintableContent").html();
    //jQuery(obj).dialog("destroy");

    //var oldstr = document.body.innerHTML;
    //document.body.innerHTML = headstr + newstr + footstr;
    //window.print();
    //document.body.innerHTML = oldstr;
    //if (fn != "") {
    //    // call function name provided by VB
    //    window.onafterprint = function () {
    //        setTimeout(function () {
    //            eval(fn + "()");
    //        }, 100);
    //    }

    //}

    var printWindow = window.open('');
    var divContents = headstr + newstr + footstr +
        "<script>" +
        "window.onload = function() {" +
        "     window.print();" +
        "};" +
        "setTimeout(function() {   {   window.close(); }  }, 300);" +
        "<" + "/script>";
    printWindow.document.write(divContents);
    printWindow.document.close();

}

function LoadedSalesAgentOffice() {
    loadPNRNavBarItem(CurrentPNRPage, true);
    HookupPnrButtons();
}
function HookupPnrButtons() {
    $(".PnrActionButton,.ButtonClick").unbind("click").click(function () {
        // set hidden values for sort
        if ($(this).hasClass("ClickGridSort")) {
            $("#TrackingGrid_SortCol").val($(this).closest('th').data('field'));
            if ($(this).hasClass('fa-sort-asc')) {
                $("#TrackingGrid_SortAsc").val('False');
            } else {
                $("#TrackingGrid_SortAsc").val('true');
            }
        }
        var formData = $("form").serializeArray();
        // add selected node!
        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.Controls.Pages.Pnr2");
        return false;
    });
    try { NewInitPnrBuilder(); } catch (e) { }

}
﻿/* AgentSineCodes */
function InitAgentSineCodePage() {
    try {
        jQuery("#btnFindAgent").click(function () {
            FilterAgentSineCodes();
        });
        $("#txtFilterAgentSineCode").bind('keypress', function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                //Enter keycode   
                e.preventDefault();
                $("input[id$=btnFindAgent]").click();
            }
        });

        $("#SineCode").bind('keypress', function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                //Enter keycode   
                e.preventDefault();
                $("#SineCodeSearch").click();
            }
        });

        InitFilteredAgentSineCodes();
    } catch (e) { }

}
﻿
function SendIBEMasterAjaxRequest(ajaxUrl, ajaxData, returnDataType, fnSuccess, fnError, defaultErrorMessage, showLoadingProgress, loadingProgressText, timeOut, queueName, bsWait) {
    returnDataType = (typeof (returnDataType) == "undefined") ? "json" : ((returnDataType == null) ? "json" : returnDataType);
    returnDataType = (returnDataType == "") ? null : returnDataType;
    fnSuccess = (typeof (fnSuccess) == "undefined") ? null : ((fnSuccess == "") ? null : fnSuccess);
    fnError = (typeof (fnError) == "undefined") ? null : ((fnError == "") ? null : fnError);
    defaultErrorMessage = (typeof (defaultErrorMessage) == "undefined") ? "" : ((defaultErrorMessage == null) ? "" : defaultErrorMessage);
    showLoadingProgress = (typeof (showLoadingProgress) == "undefined") ? false : ((showLoadingProgress == null) ? false : showLoadingProgress);
    timeOut = (typeof (timeOut) == "undefined") ? 90000 : ((timeOut == null) || (timeOut == "")) ? 90000 : timeOut;
    queueName = (typeof (queueName) == "undefined") ? "" : ((queueName == null) || (queueName == "")) ? "" : queueName;

    if (defaultErrorMessage.length == 0) { defaultErrorMessage = ""; }
    ajaxUrl = ajaxUrl + "?VarsSessionID=" + $("#VarsSessionID").val();
    VarsSessionResetCookie();

    var ajaxSetup = {
        type: "POST",
        url: ajaxUrl,
        data: ajaxData,
        contentType: "application/json; charset=utf-8",
        dataType: returnDataType,
        timeout: timeOut,
        beforeSend: function (xmlHttpRequest) {
            if (showLoadingProgress && !bsWait) {
                ShowLoadingProgressDialog(loadingProgressText);
            }
            if (bsWait == true) {
                try {
                    if ($('#spinnerModal').length > 0 ) {
                        $('#spinnerModal').modal('show');
                    } else {
                        ShowLoadingProgressDialog(loadingProgressText);
                    }
                } catch (e) { }
            }
            //if (showLoadingProgress) {
            //    ShowLoadingProgressDialog(loadingProgressText);
            //}
        },
        error: function (request, error) {
            if (showLoadingProgress && !bsWait) {
                HideLoadingProgressDialog();
            }
            if (bsWait == true) {
                try {
                    $('#spinnerModal').modal('hide');
                } catch (e) { }
            }
            enableButtons();
            if (error == "timeout") {
                ShowModalDialog(TimeoutErrorMessage);
            } else if ((fnError != null) && (defaultErrorMessage != null)) {
                if ((request != null) && (request.statusText != null)) {
                    var err = request.statusText;
                    if (request.responseText != null) {
                        var inMsg = jQuery.parseJSON(request.responseText);
                        if (inMsg != null) {
                            err += "<br/>" + inMsg.Message;
                        }
                    }
                    ShowModalDialog(err);
                } else {
                    fnError(defaultErrorMessage);
                }
            } else if (defaultErrorMessage != null) {
                if (defaultErrorMessage != "") { ShowModalDialog(defaultErrorMessage); }
            } else {
            }
        },
        success: function (msg) {
            try {
                enableButtons();
                if (msg.d.Result == null) {
                    msg.d.Result = "ERROR";
                }
                if (msg.d.Result.toUpperCase() != "WAIT") {
                    if (showLoadingProgress && !bsWait) {
                        HideLoadingProgressDialog();
                    }
                    if (bsWait == true) {
                        try {
                            $('#spinnerModal').modal('hide');
                        } catch (e) { }
                    }
                }

                if (returnDataType.toLowerCase() == "html") {
                    if (fnSuccess != null) {
                        fnSuccess(jQuery.parseJSON(msg).d);
                    }
                } else {
                    try { if (msg.d.NextURL.length == 0) { msg.d.NextURL = null; } } catch (e) { }
                  

                    if (msg.d.Result.toUpperCase() == "OK" || msg.d.Result.toUpperCase() == "WAIT") {
                        if (fnSuccess != null) {
                            fnSuccess(msg.d);
                        } else {
                            if ((msg.d.NextURL != null) && (msg.d.NextURL != "")) {
                                window.top.location = msg.d.NextURL;
                            } else if (msg.d.Data != null) {
                                if (msg.d.Data.length > 0) { ShowModalDialog(msg.d.Data); }
                            }
                        }
                    } else if (msg.d.Result.toUpperCase() == "SESSION_ERROR") {
                        ShowModalDialog(msg.d.ErrorMsg);
                        if ((msg.d.NextURL != null) && (msg.d.NextURL != "")) {
                            window.top.location = msg.d.NextURL;
                        }
                    } else {
                        if (fnError != null) {
                            fnError(msg.d.ErrorMsg, msg.d); // for the sake of backwards compatibility - was originally only fnError(msg.d.ErrorMsg) but then realised may need other parameters
                        } else {
                            if (msg.d.ErrorMsg != "") { ShowModalDialog(msg.d.ErrorMsg); }
                        }
                    }
                }
            } catch (e) { }
        },
        complete: function (xmlHttpRequest) {
        }
    };

    jQuery.ajax(ajaxSetup);

}
﻿/*
    Basket.js
*/
function InitBasketBS() {
    try {
    $("#divBasket2 .EmptyBasketButton").unbind("click").click(function () {
        disableButton("#divBasket2 .EmptyBasketButton");
        RefreshControl("EmptyBasket", "#divBasket2", null,null,null,true );
        return false;
    });
    InitShoppingBasketParams();
    InitPanels();

    if (typeof (ShoppingBasket2.FlightsChanged) != "undefined") {
        if (ShoppingBasket2.FlightsChanged == true) {
            $("#PageNavButtonBottomChangeBookingNext").show();
        } else {
            $("#PageNavButtonBottomChangeBookingNext").hide();
        }
    }

        // blue screen
    InitPublicBlueScreen();

        // show init complete
    $("#BasketCheck").remove();
} catch (e) {
    $("#BasketCheck span").html(e.message);
}

}


function ResetBasketBS() {
    try {
        disableButton("#divBasket2 .EmptyBasketButton");
        RefreshControl("EmptyBasket", "#divBasket2", null, null, null, true);
        InitShoppingBasketParams();
        InitPanels();

        if (typeof (ShoppingBasket2.FlightsChanged) != "undefined") {
            if (ShoppingBasket2.FlightsChanged == true) {
                $("#PageNavButtonBottomChangeBookingNext").show();
            } else {
                $("#PageNavButtonBottomChangeBookingNext").hide();
            }
        }

        // blue screen
        InitPublicBlueScreen();

        // show init complete
        $("#BasketCheck").remove();
    } catch (e) {
        $("#BasketCheck span").html(e.message);
    }

}

function InitBasket(bClearRadioButtons) {
    try {
        $("#divBasket2 .RefreshButton").unbind("click").click(function () {
            RefreshControl("Basket", "#divBasket2");
            return false;
        });
        $("#divBasket2 .CartButton").unbind("click").click(function () {
            RefreshControl("PNR", "#divBasket2");
            return false;
        });
        $("#divBasket2 .HistoryButton").unbind("click").click(function () {
            RefreshControl("History", "#divBasket2");
            return false;
        });
        $("#divBasket2 .EmptyBasketButton").unbind("click").click(function () {
            disableButton("#divBasket2 .EmptyBasketButton");
            RefreshControl("EmptyBasket", "#divBasket2");
            return false;
        });


        // shrink long lines
        $('li.expander').expander({ slicePoint: 25, expandText: 'more' });

        // check javascript vars set by VB
        if ((ShoppingBasket2.IsBasketEmpty == true) && (bClearRadioButtons == true)) {
            // clear any fare radio buttons
            jQuery("input[id^=optCalendarAvailabilityFare][type=radio]").attr("checked", false);
            jQuery("input[id^=optCalendarAvailabilityFare][type=radio]").show();
        }

        InitjQueryBox();

        try {
            if (WantFloatingBasket) {
                var s = $("#divBasket2");
                var pos = s.position();
                $(window).scroll(function () {
                    var windowpos = $(window).scrollTop();
                    // s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
                    if (windowpos >= pos.top) {
                        s.addClass("stick");
                    } else {
                        s.removeClass("stick");
                    }
                });
            }
        } catch (e) { }

        InitShoppingBasketParams();

        // show init complete
        $("#BasketCheck").remove();
    } catch (e) {
        $("#BasketCheck span").html(e.message);
    }

}
var ShoppingBasketTemp = { "IsBasketEmpty": true, "UseBasket2": false };
function InitShoppingBasketParams() {
    try {
        var encoded = $("#BasketJSON").val();
        var decoded = encoded ; // .replace('/@/g', '"');
        ShoppingBasketTemp = JSON.parse(decoded); //$.parseJSON(decoded);

    /* copy shopping basket values defined in View */
        if ((ShoppingBasketTemp != null) && (typeof (ShoppingBasketTemp) != "undefined")) {
            ShoppingBasket2.IsBasketEmpty = ShoppingBasketTemp.IsBasketEmpty;
            ShoppingBasket2.IsBasketFull = ShoppingBasketTemp.IsBasketFull;
            ShoppingBasket2.FirstClassBand = ShoppingBasketTemp.FirstClassBand;
            ShoppingBasket2.FlightsChanged = ShoppingBasketTemp.FlightsChanged;

        }
    } catch (e) { }
}
﻿
/* bootstrap generic */

function InitGeneric() {
    InitBeautifulCheckbox();
    hookupAdminGrid();
    InitDatePickers();

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="tooltipClick"]').tooltip({ trigger: "click hover" });

    $(".click-pw-login").unbind("click").click(function (evt) {
        // special
        if (evt.ctrlKey && evt.altKey) {
            RefreshControl("LOGIN", "");
            return false;
        }
        // pass on to other event handlers

    });

    $(".modal-content").draggable({
        "handle": ".modal-header"
    });

    try { InitCounter(); } catch (e) { }
}﻿/*
    Boxes.js
*/
function RefreshControl(cName, location, params, id, action, bsWait) {
    var msg = new Object;
    msg.controlMessage = new Object;
    msg.controlMessage.Name = cName;
    msg.controlMessage.Location = location;
    msg.controlMessage.Params = params;
    msg.controlMessage.ID = id;
    if (typeof (action) !== "undefined") {
        msg.controlMessage.Action = action;
    }

    if (location.length > 0) {
        var asLoc = location.split("_");
        if (asLoc.length > 1) {
            msg.controlMessage.ID = asLoc[1];
        }

    }
    RefreshControlMsg(msg, true, bsWait);
}

function RefreshControlMsg(msg, bShowProgress, bsWait) {
    if (typeof (bShowProgress) == "undefined") bShowProgress = false;

    var url = "WebServices/Vars2Generic.asmx/ReloadControl";
    msg.controlMessage.fromPage = window.location.href;
    // ShowLoadingProgressDialog("Please Wait...");
    if ((new RegExp("/Agent/", "i")).test(window.location.href) || (new RegExp("/mmb/", "i")).test(window.location.href)
        || (new RegExp("/b/", "i")).test(window.location.href) || (new RegExp("/fqtv/", "i")).test(window.location.href)) {
        // agent page
        url = "../" + url;
    }

    SendAjaxRequest(url, $.toJSON(msg), null, Reload_onSuccess, Reload_onError, "", bShowProgress, "Please Wait...", false, bsWait);
}

function Reload_onError(errorMsg, msg) {
    switch (msg.Name) {
        case "AddProduct": case "RemoveProduct":
            //enableButtons()
            enableButton(".AddProductButton2");
            enableButton(".RemoveProductButton2");
            break;

    }
    ShowModalDialog(msg.ErrorMsg);
}

function Reload_onSuccess(msg) {
    // check for page change
    try {
        if ((msg.Name.toUpperCase() != "HELPEXTPAGEDLG") && (msg.Name.toUpperCase() != "HELP")) {
            var url = new String(window.location);
            var index = url.lastIndexOf("/");
            var curPage = url.substr(index + 1);
            if ((msg.NextPage != null) && (msg.NextPage != '') && (msg.NextPage.toUpperCase() != curPage.toUpperCase())) {
                GoToPage(msg.NextPage, msg.bsWait);
                return;
            }
        }
    } catch (e) { }

    switch (msg.Name) {
        case "Basket": case "EmptyBasket":
            $(msg.Location).html(msg.Data);
            if (msg.Action == "BS") {
                InitBasketBS();
                try {
                    eval(msg.HookUpFunction + "(msg)");
                } catch (e) { }
            } else {
                InitBasket(true);
            }
            try { InitFareRules(); } catch (e) { }
            break;
        case "AddProduct": case "RemoveProduct":
            if (msg.Result == "OK") {
                $(msg.Location).html(msg.Data);
                InitProducts(msg.bsWait);
                InitSelectSeat();
                // reload basket
                $("#divBasket2").html(msg.Data2);
                try { InitBasket(); } catch (e) { }
                $("#divBookingFareSummary").html(msg.Data3);
                //RefreshControl("Basket", "#divBasket2", null, "NORELOAD");
                //RefreshControl("FARESUMMARY", "#divBookingFareSummary");
                try { InitFareRules(); } catch (e) { }
            } else {
                ShowModalDialog(msg.ErrorMsg);
            }
            enableButton(".AddProductButton2");
            enableButton(".RemoveProductButton2");
            break;
        case "ApplyVoucher":
        case "RemoveVoucher":
            if (msg.Result == "OK") {
                $(msg.Location).html(msg.Data);

                // reload basket
                $("#divBasket2").html(msg.Data2);
                //try { InitBasket(); } catch (e) { }
                $("#divPaymentDetails").html(msg.Data3);
                //try { InitFareRules(); } catch (e) { }
                //try { InitialisePaymentDetails(); } catch (e) { }

                if (msg.LineNo <= 0) {
                    $("div[id$='divMessage']").show();
                    $("#divPaymentDetails").hide();
                }
                else {
                    $("div[id$='divMessage']").hide();
                   // $("divMessage").hide();
                    $("#divPaymentDetails").show();
                }

                OnPageLoad();

            } else {
                ShowModalDialog(msg.ErrorMsg);
            }
            break;
        case "ApplyDiscount":
            if (msg.Result == "OK") {
               
                // reload basket
                $("#divBasket2").html(msg.Data2);
                //try { InitBasket(); } catch (e) { }
                $("#divPaymentDetails").html(msg.Data3);
                //try { InitFareRules(); } catch (e) { }
                //try { InitialisePaymentDetails(); } catch (e) { }

                if (msg.LineNo <= 0) {
                    $("div[id$='divMessage']").show();
                    $("#divPaymentDetails").hide();
                }
                else {
                    $("div[id$='divMessage']").hide();
                    // $("divMessage").hide();
                    $("#divPaymentDetails").show();
                }

                OnPageLoad();

            } else {
                ShowModalDialog(msg.ErrorMsg);
            }
            break;
        case "PNR":
            ShowModalDialog(msg.Data, "PNR", 300, 700);
            break;
        case "SEATLAYOUT":
            if (msg.Result == "OK") {
                $(msg.Location).html(msg.Data);
                $(msg.Location2).html(msg.Data2);
                //InitSelectSeat();
                try {
                    eval(msg.HookUpFunction + "(msg)");
                } catch (e) { }
            } else {
                SeatStatus(msg.ErrorMsg);
            }
            break;
        case "SEATCANCEL":
            if (msg.Result == "OK") {
                $(msg.Location).html(msg.Data);

                InitSelectSeat();
                // reload basket
                RefreshControl("Basket", "#divBasket2", null, "NORELOAD", "", msg.bsWait);
            }
            break;
        case "RESERVESEAT": case "RELEASESEAT":
            if (msg.Result == "OK") {
                $(msg.Location).html(msg.Data);
                // InitSelectSeat();
                ShowCancelButton();

                // reload basket
                if (msg.Action == "BS") {
                    if ($("#myModal").length > 0) {
                        if (!$("body").hasClass("modal-open")) {
                            $("body").addClass("modal-open");
                        }
                    }
                    $("#divBasket2").html(msg.Data2);
                } else {
                    RefreshControl("Basket", "#divBasket2", null, "NORELOAD", "", msg.bsWait);
                }
                try {
                    eval(msg.HookUpFunction + "(msg)");
                } catch (e) { }
            } else {
                SeatStatus(msg.ErrorMsg);
            }
            break;
        case "SEATPLAN":
            var oButtons = {
                "Ok": {
                    text: GeneralStrings.OK,
                    click: function () {
                        // reload content
                        jQuery(this).dialog("destroy");
                        RefreshPage();
                    }
                }
            };
            ShowModalDialog(msg.Data, "SeatPlan", 700, 700, oButtons);
            InitSelectSeat();
            break;
        case "History":
            ShowModalDialog(msg.Data, "History", 600, 700);
            break;
        case "LANGEDIT":
            ShowModalDialog(msg.Data, "Language Edit", 600, 700);
            break;
        case "DELETEREMARK": case "ADDREMARK": case "SAVEREMARK":
            $(".PnrRmks").html(msg.Data);
            InitButtons();
            if ((msg.ErrorMsg != null) && (msg.ErrorMsg != "")) {
                InfoMessageDialog(msg.ErrorMsg);
            }
            break;

        case "DELETEPAXDETAILS": case "ADDPAXDETAILS": case "SAVEPAXDETAILS":
            SetModalDialogBody(msg.Data);
            InitButtons();
            if ((msg.ErrorMsg != null) && (msg.ErrorMsg != "")) {
                InfoMessageDialog(msg.ErrorMsg);
            }
            break;
        case "EDITPAXDETAILS":
            var oButtons = {
                "Close": {
                    text: GeneralStrings.Close,
                    click: function () {
                        // reload content
                        jQuery(this).dialog("destroy");
                        RefreshPage();
                    }
                }
            };

            ShowModalDialog(msg.Data, msg.Caption, "auto", 600, oButtons);
            InitButtons();
            break;

        case "SESSIONINFO":
            ShowModalDialog(msg.Data, "SessionInfo", 800, 600, null, null, "modal-w800");
            break;
        case "DbInfo":
            ShowModalDialog(msg.Data, "Info", 800, 1030, null, null, "modal-w1050");
            $("#InfoTabs").tabs();
            InitBlueScreen();
            break;
        case "FARESUMMARY":
            $(msg.Location).html(msg.Data);
            InitjQueryBox();
            break;
        case "CCBINBASE":
            if ($(msg.Location).length == 0) {
                $(".col2 h2").append("<h3></h3>");
            }
            $(msg.Location).html(msg.Data);
            break;
        case "OpenHelpItem":
            $(msg.Location).html(msg.Data);
            InitjQueryBox();
            break;
        case "HelpExtPageDlg", "Help":
            if ((msg.NextPage != null) && (msg.NextPage != '')) {
                ShowModalDialog(msg.NextPage, msg.Data, 700, 700);
            } else {
                ShowModalDialog(msg.Data, "VARS Help", 700, 700);
            }
            InitjQueryBox();
            break;
        case "HelpPage":
            ShowModalDialog(msg.Data, "VARS Online Help Centre", 700, 700);
            InitjQueryBox();
            break;
        case "HelpIndex":
            ShowModalDialog(msg.Data, "VARS Help", 700, 700);
            InitjQueryBox();
            break;
        case "Edit":
            ShowModalDialog(msg.Data, "VARS Editor", 500, 500);
            InitjQueryBox();
            break;
        default:
            break;
    }
}

function InitEditPax() {

    jQuery("select[id=ddlChangeDetailsAddNewContactContact]").change(function () {
        var sSelectedValue = jQuery(this).val();
        switch (sSelectedValue.toUpperCase()) {
            case "A":
                $("input[id^=txtChangeDetailsAddNewContact_]").show();
                $("select[id=ddlCountry]").show();
                break;
            case "CONTACT TYPE":
                $("input[id^=txtChangeDetailsAddNewContact_]").hide();
                $("select[id=ddlCountry]").hide();
                $("select[id=ddlPhoneCountryCode]").hide();
                break;
            case "E":
                $("input[id^=txtChangeDetailsAddNewContact_]").hide();
                $("select[id=ddlCountry]").hide();
                $("#txtChangeDetailsAddNewContact_1").show();
                $("select[id=ddlPhoneCountryCode]").hide();
                break;
            default:
                $("input[id^=txtChangeDetailsAddNewContact_]").hide();
                $("select[id=ddlCountry]").hide();
                $("#txtChangeDetailsAddNewContact_1").show();
                $("select[id=ddlPhoneCountryCode]").show();
                break;
        }
    });

    jQuery("select[id=ddlChangeDetailsAddNewContactContact]").change();
    
    $(".BSAddPaxDetails").unbind("click").click(function (evt) {
        var formData = $("form").serializeArray();

        formData.push(GetKeyPair("paxno", $(this).attr("id")));

        var sContactTypeCode = jQuery("select[id=ddlChangeDetailsAddNewContactContact]").val();
        var sData1 = $("#txtChangeDetailsAddNewContact_1").val();
        var sData2 = jQuery("select[id=ddlPhoneCountryCode]").val();
        if (typeof (sData1) == "undefined" || sData1 == "" || sContactTypeCode == "Contact Type" || sContactTypeCode == null ) {
            WantBootstrapModal = true;
            var dlgMsg = new Object;
            dlgMsg.title = "Error";
            dlgMsg.html = sNoDataMessage;
            modalDialog(dlgMsg);
            return false;
        }
        var existingContacts = $("input.CTCID")
        if (existingContacts.length > 0) {
            for (var i = 0; i < existingContacts.length; i++) {
                if (existingContacts[i].value == sContactTypeCode) {
                    WantBootstrapModal = true;
                    var dlgMsg = new Object;
                    dlgMsg.title = "Error";
                    dlgMsg.html = "The type of contact exist already.";
                    modalDialog(dlgMsg);
                    return false;
                }
            }
        }

        switch (sContactTypeCode) {
            case "A":
                sData1 = "";
                $("input[id^=txtChangeDetailsAddNewContact_]").each(function (index) {
                    if (index > 0) {
                        sData1 += "/";
                    }
                    sData1 += $(this).val();
                });
                sData1 += "/" + $("#ddlCountry").val();
                break;
            case "E":
                break;
            default:
                sData1 = sData2 + sData1;
                if (typeof (sData2) == "undefined" || sData2 == "") {
                    WantBootstrapModal = true;
                    var dlgMsg = new Object;
                    dlgMsg.title = "Error";
                    dlgMsg.html = sNoDataMessage;
                    modalDialog(dlgMsg);
                    return false;
                }
                break;

        }
        formData.push(GetKeyPair("address", sData1));
        formData.push(GetKeyPair("contact", sContactTypeCode));

        AdminAction("ButtonMenuClick", "AddPaxDetails", formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;
    });

    $(".BSSavePaxDetails").unbind("click").click(function (evt) {
        var formData = $("form").serializeArray();

        var asParams = $(this).attr("id").split("_");
        var sContactTypeCode = $(this).parent().parent().find(".CTCID").val();
        formData.push(GetKeyPair("contact", sContactTypeCode));
        formData.push(GetKeyPair("paxno", asParams[0]));
        formData.push(GetKeyPair("lineno", asParams[1]));
        var sAddress = "";
        if ((sContactTypeCode == "A") || (sContactTypeCode == "C")) {
            $(this).parent().parent().find("input[class=fieldVal]").each(function (index) {
                if (index > 0) {
                    sAddress += "/";
                }
                sAddress += $(this).val();
            });
            sAddress += "/" + $("#ddlCountryEdit").val();
        } else {
            sAddress = $(this).parent().parent().find(".fieldVal").val();
        }
        formData.push(GetKeyPair("address", sAddress));
        AdminAction("ButtonMenuClick", "SavePaxDetails", formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;
    });
    $(".BSDeletePaxDetails").unbind("click").click(function (evt) {
        var formData = $("form").serializeArray();
        var asParams = $(this).attr("id").split("_");

        formData.push(GetKeyPair("paxno", asParams[0]));
        formData.push(GetKeyPair("lineno", asParams[1]));

        AdminAction("ButtonMenuClick", "DeletePaxDetails", formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;
    });

    InitjQueryBox();

}

function InitjQueryBox() {
    $(".ExpandingTitle").unbind("click").click(function () {
        $(this).find(".ExpandButton").trigger("click");
        return false;
    });
    $(".CollapsingTitle").unbind("click").click(function () {
        $(this).find(".CollapseButton").trigger("click");
        return false;
    });

    $(".langEdit").unbind("click").click(function (evt) {
        RefreshControl("LANGEDIT", $(this).attr("id"));
        return false;
    });

    $(".EditPaxDetails").unbind("click").click(function (evt) {
        RefreshControl("EDITPAXDETAILS", $(this).attr("id"));
        return false;
    });

    $(".BSEditPaxDetails").unbind("click").click(function (evt) {
        var formData = $("form").serializeArray();

        formData.push(GetKeyPair("paxno", $(this).attr("id")));

        AdminAction("ButtonMenuClick", "EditPaxDetails", formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;
    });



    $(".progressBarItem").unbind("click").click(function (evt) {
        // special
        if (evt.ctrlKey && evt.altKey) {
            RefreshControl("SESSIONINFO", "");
            return false;
        }
        // pass on to other event handlers

    });
   
    $(".ExpandButton").unbind("click").click(function (evt) {
        // special
        if (evt.ctrlKey && evt.altKey) {
            RefreshControl("DbInfo", "");
            return false;
        }
        // set to collapsed
        $(this).addClass("CollapseButton");
        $(this).addClass(" ui-icon-circle-minus");
        $(this).removeClass("ExpandButton");
        $(this).removeClass(" ui-icon-circle-plus");
        if ($(this).parent().hasClass("ExpandingTitle")) {
            $(this).parent().removeClass("ExpandingTitle").addClass("CollapsingTitle");
        }

        // show content
        if ($(this).hasClass("tableMode")) {
            // table mode 
            // get id used to identify rows
            var id = $(this).attr("id");
            $("tr." + id).show();
            $(this).parent().parent().removeClass("ui-state-default").addClass("ui-state-active");
        } else {
            // div mode
            $(this).parent().parent().next().slideDown('slow');
        }
        // remove title rounded bottom

        InitjQueryBox();
        return false;
    });


    $(".CollapseButton").unbind("click").click(function (evt) {
        // special
        if (evt.ctrlKey && evt.altKey) {
            RefreshControl("DbInfo", "");
            return false;
        }

        $(this).removeClass("CollapseButton");
        $(this).removeClass(" ui-icon-circle-minus");
        $(this).addClass(" ui-icon-circle-plus");
        $(this).addClass("ExpandButton");
        if ($(this).parent().hasClass("CollapsingTitle")) {
            $(this).parent().removeClass("CollapsingTitle").addClass("ExpandingTitle");
        }

        // hide content
        if ($(this).hasClass("tableMode")) {
            // table mode 
            // get id used to identify rows
            var id = $(this).attr("id");
            $("tr." + id).hide();
            $(this).parent().parent().removeClass("ui-state-active").addClass("ui-state-default");
        } else {
            // div mode
            $(this).parent().parent().next().slideUp('slow');
        }

        // add title rounded bottom

        InitjQueryBox();
        return false;
    });

    // help
    $(".HelpButton").unbind("click").click(function () {
        RefreshControl("Help", $(this).attr("id"));
        return false;
    });

    // help
    $(".PageNavButtonTopHelp").unbind("click").click(function () {
        RefreshControl("HelpPage", $(this).attr("id"));
        return false;
    });

    // help index 
    $(".HelpItem").unbind("click").click(function () {
        RefreshControl("OpenHelpItem", "#HelpDialog", null, $(this).parent().attr("class"));
        return false;
    });

    $(".EditButton").unbind("click").click(function () {
        RefreshControl("Edit", $(this).attr("id"));
        return false;
    });

    $(".AdminAddButton").unbind("click").click(function () {
        RefreshControl("Edit", $(this).attr("id"), null, "", "AdminAdd");
        return false;
    });

    $(".AdminEditButton").unbind("click").click(function () {
        RefreshControl("Edit", $(this).attr("id"), null, "", "AdminEdit");
        return false;
    });

    $(".AdminDeleteButton").unbind("click").click(function () {
        if (confirm("Delete this row?") == true) {
            RefreshControl("Edit", $(this).attr("id"), null, "", "EditCategory");
        }
        return false;
    });

}

function GetExpandedBoxes(tableClass, buttonClass) {
    var boxArray = [];
    $(tableClass + " .CollapseButton").each(function () {
        if (typeof ($(this).attr("id")) != "undefined") {
            var boxItem = new Object;
            boxItem.CatID = $(this).attr("id").replace(buttonClass, "");
            boxItem.Expanded = true;
            boxArray.push(boxItem);
        }
    });

    return boxArray;
}

function InitBlueScreen() {
    $("#txtEntry").focus();

    $("#txtEntry").unbind("keypress").bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#btnEnter").click();
            return false;
        }
    });

    $("#btnEnter").unbind("click").click(function () {
        var url = "WebServices/AdminWS.asmx/BlueScreenCommand?VarsSessionID=" + $("#VarsSessionID").val();
        VarsSessionResetCookie();
        // ShowLoadingProgressDialog("Please Wait...");
        if ((new RegExp("/Agent/", "i")).test(window.location.href) ||
            (new RegExp("/mmb/", "i")).test(window.location.href) ||
             (new RegExp("/b/", "i")).test(window.location.href) ||
            (new RegExp("/fqtv/", "i")).test(window.location.href)) {
            // agent page
            url = "../" + url;
        }


        $.ajax({
            type: "POST",
            url: url,
            data: "{  command:'" + $(".txtEntry").val() + "' }",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (request, error) {
                var x = 1;
                $(".BlueScreen").html(request.responseText);
                // HideLoadingProgressDialog();
            },
            success: function (msg) {
                if (msg.d.Result == 'OK') {
                    $(".BlueScreen").html(msg.d.Data);
                    $("#txtEntry").val("");
                } else {
                    $(".BlueScreen").html(msg.d.ErrorMsg);
                }
            }
        });
        return false;
    });

}

﻿
function InitPublicBlueScreen() {
    $(".click-blue-screen").unbind("click").click(function (evt) {
        if (evt.ctrlKey && evt.altKey) {
            RefreshControl("DbInfo", "");
            return false;
        }
        return false;
    });
}
﻿var UseCalendarReturnFares = true;

function InitFareRules() {
    try {
    // shrink long lines
        $('li.expander').expander({ slicePoint: 25, expandText: 'more' });
        $("#FareRulesCheck").remove();
    } catch (e) {
        $("#FareRulesCheck span").html(e.message);
    }
}
var activeClass = "panel-active";

function InitCalendarGeneric(wantCompact) {
    if (wantCompact) {
        InitCompactCalendar();
    } else {
        InitCalendar();
    }

}


function InitCalendar() {
    try {
        // if only 1 flight, expand it
        if ($("#calView_0 .flt-panel-heading").length == 1) {
            $("#collapse-0-0").collapse('show');
            // if only 1 class, select it 
        }
        if ($("#calView_1 .flt-panel-heading").length == 1) {
            $("#collapse-1-0").collapse('show');
        }

 
        $("[id^=collapse-], [id^=cal-accordion-]").on('shown.bs.collapse', function () {
          //  alert("Click show coll");
            var panel = $(this).data("panel-index");
            var panelId = "#calView_" + panel;

            // clear old selected
            $(panelId + " .flt-panel").removeClass(activeClass);
            $(panelId + " .flt-panel .idiot-btn").removeClass("hidden");
            $(panelId + " .flt-panel .idiot-btn-sel").addClass("hidden");

            // reset selected
            $(this).closest(".flt-panel").addClass(activeClass);
            $(this).find(".idiot-btn").addClass("hidden");
            $(this).find(".idiot-btn-sel").removeClass("hidden");

            if ($(this).find('.flt-class .panel-body').length == 1) {
                // fake a click on classband
                $(this).find('.flt-class .panel').trigger("click");
                return false;
            } else {
                setEqualHeight($(this).find('.flt-class .panel-body'));
                setEqualHeight($(this).find('.flt-class .panel-heading'));
                setEqualHeight($(this).find('.flt-class .panel-footer'));
            }
        });

       // alert("init cal");
        $(".flt-class .panel:not(disabled)").unbind("click").click(function () {
            if ($(this).hasClass(activeClass)) {
                return false;
            }
            //alert("Click Class");
            var panel = $(this).closest(".panel-collapse").data("panel-index");
            var panelId = "#calView_" + panel;

            $(panelId + " .flt-class div.panel").removeClass(activeClass);

            $(panelId + " .flt-class .class-idiot-text").removeClass("hidden");
            $(panelId + " .flt-class .class-idiot-text-sel").addClass("hidden");

            $(this).find(".class-idiot-text").addClass("hidden");
            $(this).find(".class-idiot-text-sel").removeClass("hidden");

            if ($("#Mode").val() == 'multicity') {
                // multi city - not returns, select fares one at a time

                // check that flights are selected in order
                if (panel > 0) {
                    for (i = 0; i < panel; i++) {
                        if ($("#calView_" + i + " .flt-cls-row div.panel-active").length <= 0) {
                            bootstrap_alert("Please select flights in order");
                            return false;
                        }
                    }
                }

                var fareid = $(this).data("fareid");
                if (fareid != '') {
                    $(this).addClass(activeClass);
                    selectClass(fareid);
                }
                return false;
            }

            var otherFareId = [];

            jQuery(".flt-class ." + activeClass).each(function() {
                if ($(this).data("fareid")) {
                    otherFareId.push($(this).data("fareid"));
                }
            });

            //var otherFareId = jQuery(".flt-class ." + activeClass).data("fareid");


        if ((typeof (otherFareId) == "undefined") || (otherFareId == null) || (otherFareId.length==0) ) {
            if (typeof ($("#id_0")) != "undefined" && $("#id_0").val() != "undefined") {
                    //otherFareId = $("#id_0").val();
                    otherFareId.push($("#id_0").val());
                }
            }

            if (panel > 0) {
                // if (ShoppingBasket2.IsBasketEmpty == true) {
                if ((typeof (otherFareId) == "undefined") || (otherFareId == null) || (otherFareId.length == 0)) {
                    modalDialog(flightCalPageTranslationsMsgs.OutFirstMessage);
                    return false;
                }

                var cb = ShoppingBasket2.FirstClassBand;
                var notVal = $(this).data('not-valid-with');
                var thisband = $(this).data('classband');

                if (( notVal != '' ) && (notVal == cb)) {
                    var msg = flightCalPageTranslationsMsgs.ClassBandNotMix;

                    msg.html = msg.html.replace("[[1]]", cb);
                    msg.html = msg.html.replace("[[2]]", thisband);
                    modalDialog(msg);
                    return false;
                }
            }
            //$(panelId + " .flt-class div.panel").removeClass(activeClass);

            // select
            var fareid = $(this).data("fareid");
            if (fareid != '') {
                // show as selected
                $(this).addClass(activeClass);

                // is it return ? 
                if (UseCalendarReturnFares) {

                    var iAvailabilityCount = jQuery("div[id^=CalDaysBar_]").length;     // 1 = one-way, 2=return
                    var iSelectedAvailability = jQuery(".flt-class ." + activeClass).length;
                    //var bValidCombinableFaresSelected = false;
                    var bContinue = true ;

                    if (iAvailabilityCount == 2) {
                        // bContinue = CheckValidReturnCombinableFares(selectedFareOption);
                    }
                    if ((!bContinue) || (iAvailabilityCount != iSelectedAvailability)) {
                        //try { ShowCannedFaxInfo(); } catch (e) { }
                        //try { highlightSelected(); } catch (e) { }
                        return false;
                    }
                }
                //alert("Click Class 2");
                if ((typeof (otherFareId) != "undefined") && (otherFareId != null) && ((otherFareId.length > 0) && typeof(otherFareId[0]) != "undefined")) {
                    selectClass(otherFareId, fareid);
                } else {
                    selectClass(fareid);
                }
            }
            return false;
        });

        $(".flt-class .panel:not(disabled) a").unbind("click").click(function () {
            // exception to above for anchor tags, always force new window/tab
            window.open(this.href, '_new');
            return false;
        });
   
   
        InitCalendarTabs();


        $("button[id^=btnShowLegs_]").unbind("click").click(function () {
            // close other classes
            $("div.flt-legs").hide();

            // show this one
            var id = $(this).attr('id');
            var index = id.replace("btnShowLegs_", "");
            $("#leg_row_" + index).fadeIn();
            // $("#leg_row_" + index).removeClass("hide");
            return false;
        });
        InitCalendarHelp();


        try {
            setEqualHeight($(".panel-collapse.in").find('.flt-class .panel-heading'));
            setEqualHeight($(".panel-collapse.in").find('.flt-class .panel-body'));
            setEqualHeight($(".panel-collapse.in").find('.flt-class .panel-footer'));
        } catch (e) {
        }

        // show init complete
        $("#CalendarCheck_0").remove();
        $("#CalendarCheck_1").remove();
        $("#CalendarCheck_2").remove();
        $("#CalendarCheck_3").remove();
    } catch (e) {
        $("#CalendarCheck_0 span").html(e.message);
    }
}

function InitCalendarTabs() {
    try {
        $(".dayForward, .dayBack").unbind("click").click(function () {
            if ($(this).hasClass('disabled')) {
                return false;
            } else {
                $(".dayForward, .dayBack").addClass('disabled');
            }

            ChangeDayUpdate($(this).data("newday"), $(this).data("index"), true);
            return false;
        });

        $(".dayTab").unbind("click").click(function () {
            if ($(this).hasClass('disabled')) {
                return false;
            } else {
                $(this).addClass('disabled');
            }

            ChangeDayUpdate($(this).data("newday"), $(this).data("index"), false);
            return false;
        });


        $(".dayTabNoClick").unbind("click").click(function () {
            return false;
        });

    } catch (e) {
        $("#CalendarCheck_0 span").html(e.message);
    }
}

function InitCalendarHelp() {
    try {
        $("[data-toggle='popover']").popover({ trigger: 'hover' });
    } catch (e) {
    }

    $(".help-tip").unbind("click").click(function () {
        // catch popover click, preventing flight select
        $(this).popover('show');
        return false;
    });
}

function InitCompactCalendar() {
    try {
        // compact model

        
//        $(".cbPanDiv").unbind("click").click(function () {
////            $(this).find("input:radio").click();
//            //    //return false;
//            $(this).find("input:radio").prop('checked', !$input.is(':checked'));
//            $(this).find("input:radio").trigger("change");
//        });

        $("input[id^=cbPan_]").unbind("click").click(function () {

            var panel = $(this).closest(".panel-heading").data("panel-index");
            var panelId = "#calView_" + panel;

            $(panelId + " .flt-panel").removeClass(activeClass);
            $(this).closest(".flt-panel").addClass(activeClass);
            //cflt-row
            // un highlight
            //   $(".flt-class div.panel").removeClass(activeClass);
            var otherFareId

            if (panel == 0) {
                otherFareId = $("#calView_1 input[id^=cbPan_]:checked").val()
            } else {
                otherFareId = $("#calView_0 input[id^=cbPan_]:checked").val()

            }

            // is it return ? 
            if (UseCalendarReturnFares) {
                var iAvailabilityCount = jQuery("div[id^=CalDaysBar_]").length;     // 1 = one-way, 2=return
                var iSelectedAvailability = $("input[id^=cbPan_]:checked").length;
                if (iAvailabilityCount != iSelectedAvailability) {
                    return;
                }
            }
            // x,x, journey ,  fare, class
            var id = $(this).attr('value');
            var fareid = id.replace("cbPan_", "");

            if ((typeof (otherFareId) != "undefined") && (otherFareId != null)) {
                selectClass(otherFareId, fareid);
            } else {
                selectClass(fareid);
            }
            //return false;
        });
        InitCalendarTabs();
        InitCalendarHelp();
        // show init complete
        $("#CalendarCheck_0").remove();
        $("#CalendarCheck_1").remove();
        $("#CalendarCheck_2").remove();
        $("#CalendarCheck_3").remove();
    } catch (e) {
        $("#CalendarCheck_0 span").html(e.message);
    }
}

function selectClass(fareid, retFareId) {
    var fareData = null;
    var sFormData = "";
    var sPleaseWaitMessage = "";
    var arfareData = [];

    if (Array.isArray(fareid)) {
        var arrayLength = fareid.length;
        for (var i = 0; i < arrayLength; i++) {
            arfareData.push("'" + fareid[i] + "'");
        }
    }
    else {
        fareData = "'" + fareid + "'";
        arfareData.push(fareData);
    }

    if ((typeof (retFareId) != "undefined") && (retFareId != null)) {
        var retfareData = "'" + retFareId + "'";
        arfareData.push(retfareData);
    }


    var rq = new Object;
    rq.addFlightRequest = new Object;
    rq.addFlightRequest.VarsSessionID = $('#VarsSessionID').val();

    rq.addFlightRequest.fareData = arfareData;
    rq.addFlightRequest.Zone = "PUBLIC";

    try { sPleaseWaitMessage = CheckFlightsTranslations.AddingFlightToBasketMessage; } catch (e) { }
    var url = addFltUrl;
    if ((new RegExp("/Agent/", "i")).test(window.location.href)) {
        // agent page
        url = "../" + url;
        rq.addFlightRequest.Zone = "AGENT";
    }
    if ((new RegExp("/mmb/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
        rq.addFlightRequest.Zone = "MMB";
    }
    if ((new RegExp("/changebooking", "i")).test(window.location.href)) {
        // mmb page
        // url = "../" + url;
        rq.addFlightRequest.Zone = "MMB";
    }
    if ((new RegExp("/b/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
    }
    if ((new RegExp("/fqtv/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
        rq.addFlightRequest.Zone = "FQTV";
    }

    SendAjaxRequest(url, $.toJSON(rq), null, AddFlightToBasket_onSuccess, AddFlightToBasket_onError, "", false, sPleaseWaitMessage,false, true );
    return false;
}
function setEqualHeight(columns) {
    var tallestColumn = 0;

    columns.each(function () {
        var currentHeight = $(this).height();

        if (currentHeight > tallestColumn) {
            tallestColumn = currentHeight;
        }
    });

    columns.height(tallestColumn);
}

function isWeekend(date1, date2) {
    var d1 = new Date(date1),
    d2 = new Date(date2),
        isWeekend = false;

    if (Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)) > 5) {
        return true;
    }

    while (d1 < d2) {
        var day = d1.getDay();
        isWeekend = (day === 6) || (day === 0);
        if (isWeekend) { return true; } // return immediately if weekend found
        d1.setDate(d1.getDate() + 1);
    }
    return false;
}

function ChangeDayUpdate(newDay, panelIndex, JustDayBar) {
   
    var selDateTabs = $('.tab-active a');
    var dtDept;
    var dtArr;

    if (selDateTabs.length == 2) {

        if (panelIndex == 0) {
            dtDept = newDay;
            dtArr = $(selDateTabs[1]).data("newday");
        }
        else {
            dtDept = $(selDateTabs[0]).data("newday");
            dtArr = newDay;
        }

        if (isWeekend(dtDept, dtArr)) {

            if ($('#refineSearchButton').length > 0) {

                if (typeof refineSearchButton_Click === "function") {
                    return refineSearchButton_Click(null, dtDept, dtArr);
                }
            }

            if ($('#refineSearchMMB').length > 0) {

                if (typeof refineSearchMMB_Click === "function") {
                    return refineSearchMMB_Click('refineSearchMMB',dtDept, dtArr);
                }
            }

            if ($('#refineSearchFQTVMMB').length > 0) {
                if (typeof refineSearchMMB_Click === "function") {
                    return refineSearchMMB_Click('refineSearchFQTVMMB',dtDept, dtArr);
                }
            }

        }
    }

    // go to another day
    var rq = new Object;
    rq.ChangeDayRequest = new Object;
    rq.ChangeDayRequest.VarsSessionID = $('#VarsSessionID').val();

    //rq.addFlightRequest.fareData = arfareData;
    rq.ChangeDayRequest.Zone = "PUBLIC";
    rq.ChangeDayRequest.NewDay = newDay;
    rq.ChangeDayRequest.PanelIndex = panelIndex;
    rq.ChangeDayRequest.JustDayBar = JustDayBar;

    var sPleaseWaitMessage;
    try { sPleaseWaitMessage = CalTranslationsflightCalPageTranslationsMsgs.ChangeDayMessage; } catch (e) { }
    var url = changeDayUrl;
    if ((new RegExp("/Agent/", "i")).test(window.location.href)) {
        // agent page
        url = "../" + url;
        rq.ChangeDayRequest.Zone = "AGENT";
    }
    if ((new RegExp("/mmb/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
        rq.ChangeDayRequest.Zone = "MMB";
    }
    if ((new RegExp("/b/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
    }
    if ((new RegExp("/fqtv/", "i")).test(window.location.href)) {
        // mmb page
        url = "../" + url;
        rq.ChangeDayRequest.Zone = "FQTV";
    }

    SendAjaxRequest(url, $.toJSON(rq), null, ChangeDay_onSuccess, ChangeDay_onError, "", false, sPleaseWaitMessage, false, !JustDayBar);
    return false;
}

function ChangeDay_onSuccess(msg) {
    if (msg != null && msg.Data != "") {
        $(msg.DisplayLoation).html(msg.Data);
        try {
            OnPageLoad();
        } catch (e) { }
        $(".dayForward, .dayBack").removeClass('disabled');
    }
}

function ChangeDay_onError(ErrorMsg) {

    var dlgMsg = new Object;
    dlgMsg.OkAction = "RefreshPage()";
    dlgMsg.html = ErrorMsg;

    modalDialog(dlgMsg);
}
﻿
/* Charts.js */

function InitCharts() {

    jQuery(".ChartCanvas").each(function () {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("chartid", $(this).attr("id")));
        AdminAction("ButtonMenuClick", "PopulateChart", formData, "VARS.BookingLibrary.EF.Views.DashboardView", false, null, true);
    });

}

function ChartCallBack(msg) {
    var ctx = document.getElementById("pnrChart").getContext('2d');
    var labels = eval(msg.DialogCaption);
    var oData = jQuery.parseJSON(msg.Data);
    //$(this).get(0);
    var myChart = new Chart(ctx, {
        type: msg.Command,
        data: {
            labels:  labels ,
            datasets: oData

                /*[{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]  /* end datasets */
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            layout: {
                padding: {
                    left: 10
                }
            }


        } /* End Data */

    }); /* end chart */
}﻿function InitBeautifulCheckbox() {
    $('.input-group-addon.cb-beautiful').each(function () {

        var $widget = $(this),
            $input = $widget.find('input'),
            type = $input.attr('type');
        settings = {
            checkbox: {
                on: { icon: 'fa fa-1-5x fa-check-square-o' },
                off: { icon: 'fa fa-1-5x fa-square-o' }
            },
            radio: {
                on: { icon: 'fa fa-dot-circle-o' },
                off: { icon: 'fa fa-circle-o' }
            }
        };
        if ($widget.find('span').length == 0) {
            $widget.prepend('<span class="' + settings[type].off.icon + '"></span>');
        }
        $widget.unbind("click").click(function () {
            $input.prop('checked', !$input.is(':checked'));
            $input.trigger("change");
            updateDisplay();
        });

        function updateDisplay() {
            var isChecked = $input.is(':checked') ? 'on' : 'off';

            $widget.find('.fa').attr('class', settings[type][isChecked].icon);

            //Just for desplay
            //isChecked = $input.is(':checked') ? 'checked' : 'not Checked';
            //$widget.closest('.input-group').find('input[type="text"]').val('Input is currently ' + isChecked)
        }

        updateDisplay();
    });
}

jQuery(document).ready(function () {
    InitBeautifulCheckbox();
});
﻿/* checkin.js */
function InitCheckinPage() {

    $('#divAdvertToggle,#divAdvertFrameContainer').hide();
    $('#divPanelBody').collapse('show');

    $(".MmbSelectSeat").unbind('click').bind('click', function (e) {
        var leg = $(this).data("segno");
        GoToPage('ChangeSeats.aspx?from=confirm&SelectedLegNo=' + leg , true);
        return false;
    });

    $("#btnAddEmail").unbind('click').bind('click', function (e) {
        GoToPage('PassengerDetails.aspx?action=addemail', true);
        return false;
    });

    $(".btnChangeBooking").unbind('click').bind('click', function (e) {

        var wsRq = new Object;
        wsRq.webServiceRequest = new Object;
        wsRq.webServiceRequest.ID = 'loadDatePicker';
        wsRq.webServiceRequest.Action = "ButtonMenuClick";
        wsRq.webServiceRequest.Data = "VARS.BookingLibrary.EF.Views.DisruptionReplacementFlightView";

        var data = [];
        var keyPairs = [];
        var keyPair = new Object();
        keyPair.name = "fltno";
        keyPair.value = $(this).attr('fltno');
        keyPairs.push(keyPair);
        keyPair = new Object();
        keyPair.name = "fltdate";
        keyPair.value = $(this).attr('fltdate');
        keyPairs.push(keyPair)
        keyPair = new Object();;
        keyPair.name = "start";
        keyPair.value = $(this).attr('start');
        keyPairs.push(keyPair);
        keyPair = new Object();
        keyPair.name = "end";
        keyPair.value = $(this).attr('end');
        keyPairs.push(keyPair);
        keyPair = new Object();
        keyPair.name = "cnx";
        keyPair.value = $('#cnx').val()
        keyPairs.push(keyPair);
        data.push(keyPairs);
        
        wsRq.webServiceRequest.Data2 = data;

        var rq = $.toJSON(wsRq);
   
        SendAjaxRequest(GetAjaxUrl(), rq, "html", AdminDoSubmit_onSuccess, AdminDoSubmit_onError, null, true, null, false, true);

        ////show dialog with calender
        //var flt = "?start=" + $(this).attr("start") + "&end=" + $(this).attr("end") + "&fltdate=" + $(this).attr("fltdate") + "&fltno=" + $(this).attr("fltno");
        //var oButtons = {
        //    "Ok": {
        //        text: GeneralStrings.OK,
        //        click: function () {
        //            GoToPage('DisruptedFlight.aspx' + flt + "&date=" + $(datepicker).val(), true);
        //            return false;
        //        }
        //    }
        //};

        //var data = "<p>Date: <input type='text' id='datepicker'></p>";
        //ShowModalDialog(data, "Search for alternative flight", 0, 0, oButtons);
        //$(function () {
        //    $(datepicker).datepicker();
        //});
    });

    $(".btnChangeDisruptedFlight").click(function () {
            btnChangeFlight_onClick(jQuery(this));
    });

    
    $("#btnDismiss").unbind('click').bind('click', function (e) {
        GoToPage('Confirm.aspx?IgnoreDisruption=1', true);
        return false;
    });

    $(".CheckIn, .GetPass, .GetApis, .EmailPass, .PrintPass, .MmbAddFQTV, .AutoSeatOption, .Declare, .MmbAddWeight, #UpdatePAXWeight").unbind('click').bind('click', function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("paxno", $(this).data("paxno")));
        formData.push(GetKeyPair("depart", $(this).data("depart")));
        formData.push(GetKeyPair("arrive", $(this).data("arrive")));
        formData.push(GetKeyPair("segno", $(this).data("segno")));
        formData.push(GetKeyPair("fltno", $(this).data("fltno")));
        formData.push(GetKeyPair("data-val", $(this).data("val")));
        formData.push(GetKeyPair("fltdate", $(this).data("fltdate")));
        formData.push(GetKeyPair("email", $(this).parent().parent().find("#EmailAddress").val()));
        formData.push(GetKeyPair("weight", $(this).parent().parent().find("#weight").val()));
        formData.push(GetKeyPair("weightunit", $(this).parent().parent().find("#weightunit").val()));
        formData.push(GetKeyPair("url", window.location.href));

        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.CheckInView", false, null,  true );
        return false;
    });

    $("#printButton").click(function () {
        var headstr = "<html><head><title></title></head><body>";
        var footstr = "</body>";
        var newstr = $(".MMBMasterPageTableContent").html();
        var oldstr = document.body.innerHTML;
        document.body.innerHTML = headstr + newstr + footstr;
        window.print();
        document.body.innerHTML = oldstr;
    });
    InitSelectSeat();
    DisplayPaymentMessage();
    HookUpAds();
}

function GotoDisruptedFlight() {
        var vSessionID = $("#VarsSessionID").val();
        var formTarget = "_top";
        var sForm = "";
        var PageUrl = "DisruptedFlight.aspx";

        sForm += "<form id='frmChangePage' name='frmChangePage' action='" + PageUrl + "' target='" + formTarget + "' method='post'>";
    sForm += "<input type='hidden' name='VarsSessionID' id='VarsSessionID' value='" + vSessionID + "' />";
    sForm += "<input type='hidden' name='start' id='start' value='" + vSessionID + "' />";
    sForm += "<input type='hidden' name='end' id='end' value='" + vSessionID + "' />";
    sForm += "<input type='hidden' name='fltdate' id='fltdate' value='" + vSessionID + "' />";
    sForm += "<input type='hidden' name='fltno' id='fltno' value='" + vSessionID + "' />";
    sForm += "<input type='hidden' name='startDate' id='startDate' value='" + vSessionID + "' />";
        sForm += "</form>";
    ShowLoadingProgressDialog(DefaultPleaseWaitMessage);
        jQuery("form").after(sForm);
        jQuery("#frmChangePage").submit();
}

function HookUpAds() {
    $(".adImage").unbind("click").click(function () {
        var id = $(this).prop("id");
        SendAjaxRequest("../WebServices/mmbWS.asmx/AdvertClick", "{'id':'" + id + "'}", "html", null, null, "", true);
    });
}

function InitAddPaxFQTVMember() {

    $("#UpdatePAXFQTVNumber").unbind("click").click(function (e) {

        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("paxno", $(this).data("paxno")));
        formData.push(GetKeyPair("depart", $(this).data("depart")));
        formData.push(GetKeyPair("arrive", $(this).data("arrive")));
        formData.push(GetKeyPair("segno", $(this).data("segno")));
        formData.push(GetKeyPair("fltno", $(this).data("fltno")));
        formData.push(GetKeyPair("data-val", $(this).data("val")));
        formData.push(GetKeyPair("fltdate", $(this).data("fltdate")));
        formData.push(GetKeyPair("email", $(this).parent().parent().find("#EmailAddress").val()));
        formData.push(GetKeyPair("url", window.location.href));


        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.CheckInView", false, null, true);
        return false;
    });

}

function InitCheckInDeclaration() {

    $(".CheckInDeclaration").unbind("click").click(function (e) {

        //need some check before continute   .get(0).checked
        if (!($("#CheckInSecurityDeclaration").get(0).checked && $("#CheckInSicknessDeclaration").get(0).checked)) {
            ShowModalDialog("You must accept security assessment and health declaration before check in");
            return false;
        }


        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("paxno", $(this).data("paxno")));
        formData.push(GetKeyPair("depart", $(this).data("depart")));
        formData.push(GetKeyPair("arrive", $(this).data("arrive")));
        formData.push(GetKeyPair("segno", $(this).data("segno")));
        formData.push(GetKeyPair("fltno", $(this).data("fltno")));
        formData.push(GetKeyPair("data-val", $(this).data("val")));
        formData.push(GetKeyPair("fltdate", $(this).data("fltdate")));
        formData.push(GetKeyPair("email", $(this).parent().parent().find("#EmailAddress").val()));
        formData.push(GetKeyPair("url", window.location.href));


        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.CheckInView", false, null, true);
        return false;
    });

}

function InitAutoSeatAllocation() {

    $("#MmbPreferSelectSeat").unbind('click').bind('click', function (e) {
        var leg = $(this).data("segno");
        GoToPage('ChangeSeats.aspx?from=confirm&SelectedLegNo=' + leg, true);
        return false;
    });

    $("#AUTOSEATANDCHECKIN").unbind("click").click(function (e) {

        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("paxno", $(this).data("paxno")));
        formData.push(GetKeyPair("depart", $(this).data("depart")));
        formData.push(GetKeyPair("arrive", $(this).data("arrive")));
        formData.push(GetKeyPair("segno", $(this).data("segno")));
        formData.push(GetKeyPair("fltno", $(this).data("fltno")));
        formData.push(GetKeyPair("data-val", $(this).data("val")));
        formData.push(GetKeyPair("fltdate", $(this).data("fltdate")));
        formData.push(GetKeyPair("email", $(this).parent().parent().find("#EmailAddress").val()));
        formData.push(GetKeyPair("url", window.location.href));


        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.CheckInView", false, null, true);
        return false;
    });

}

function InitApis() {
    $("#APISPROCESS2").unbind("click").click(function () {
        try {
            $('#EditorForm').data('formValidation').validate();

            if ($('#EditorForm').data('formValidation').isValid()) {
                var formData = $("form").serializeArray();
                formData.push(GetKeyPair("paxno", $(this).data("paxno")));
                formData.push(GetKeyPair("depart", $(this).data("depart")));
                formData.push(GetKeyPair("arrive", $(this).data("arrive")));
                formData.push(GetKeyPair("segno", $(this).data("segno")));
                formData.push(GetKeyPair("fltno", $(this).data("fltno")));
                formData.push(GetKeyPair("data-val", $(this).data("val")));
                formData.push(GetKeyPair("fltdate", $(this).data("fltdate")));
                formData.push(GetKeyPair("email", $(this).parent().parent().find("#EmailAddress").val()));
                formData.push(GetKeyPair("url", window.location.href));

                AdminAction("ButtonMenuClick", "APISPROCESS2", formData, "VARS.BookingLibrary.EF.Views.CheckInView", false, null, true);
                event.preventDefault();
                return false;
            } else {
                return false;
            }
        } catch (e) { }
    });

    $("select[name*='DocumentType']").bind('change', function () {
        var countryOfIssue = $('#EditorForm').find("select[name*='DocIssuingCountry']")[0]
        var expiryDate = $('#EditorForm').find("input[name*='PassportExpiry']")[0]


        $(expiryDate).attr('data-fv-notempty-message', 'Expiry Date is Required')
        $(expiryDate).attr('data-fv-field', 'PassportExpiry')
        $(countryOfIssue).attr('data-fv-notempty-message', 'Country of issue is Required')
        $(countryOfIssue).attr('data-fv-field', 'DocIssuingCountry')

        if ($(this).find('option:selected').data('docissuingcountry') == 'True') {            
            $(countryOfIssue).attr('data-fv-notempty', 'true')            
            $('.validatedForm').formValidation('removeField', 'DocIssuingCountry').formValidation('addField', 'DocIssuingCountry').formValidation('revalidateField', 'DocIssuingCountry');            
        }
        else {        
            $(countryOfIssue).attr('data-fv-notempty', 'false')
            $('.validatedForm').formValidation('resetField', 'DocIssuingCountry');            
        }

        if ($(this).find('option:selected').data('passportexpiry') == 'True') {
            $(expiryDate).attr('data-fv-notempty', 'true')            
            $('.validatedForm').formValidation('removeField', 'PassportExpiry').formValidation('addField', 'PassportExpiry').formValidation('revalidateField', 'PassportExpiry');
        }
        else {
            $(expiryDate).attr('data-fv-notempty', 'false')            
            $('.validatedForm').formValidation('resetField', 'PassportExpiry');
        }      

    });

    $("input[name*='VisaNumber']").bind('keyup', function () {
        var VisaDateOfIssue = $('#EditorForm').find("input[name*='VisaDateOfIssue']")[0]
        var VisaExpiryDate = $('#EditorForm').find("input[name*='VisaExpiryDate']")[0]


        $(VisaExpiryDate).attr('data-fv-notempty-message', 'Vissa Expiry Date is Required')
        $(VisaExpiryDate).attr('data-fv-field', 'VisaExpiryDate')
        $(VisaDateOfIssue).attr('data-fv-notempty-message', 'Visa Issue Date is Required')
        $(VisaDateOfIssue).attr('data-fv-field', 'VisaDateOfIssue')

        if ($(this).val() != "") {
            $(VisaExpiryDate).attr('data-fv-notempty', 'true')
            $('.validatedForm').formValidation('removeField', 'VisaExpiryDate').formValidation('addField', 'VisaExpiryDate').formValidation('revalidateField', 'VisaExpiryDate');
            $(VisaDateOfIssue).attr('data-fv-notempty', 'true')
            $('.validatedForm').formValidation('removeField', 'VisaDateOfIssue').formValidation('addField', 'VisaDateOfIssue').formValidation('revalidateField', 'VisaDateOfIssue');
        }
        else {
            $(VisaExpiryDate).attr('data-fv-notempty', 'false')
            $('.validatedForm').formValidation('resetField', 'VisaExpiryDate');
            $(VisaDateOfIssue).attr('data-fv-notempty', 'false')
            $('.validatedForm').formValidation('resetField', 'VisaDateOfIssue');
        }

    });

    $('.datetimePicker').datepicker({
        dateFormat: "dd-M-yy",
        autoclose: true,
        minDate: "-99y",
        maxDate: 0,
        yearRange: "-99:+0",
        changeMonth: true,
        changeYear: true,
        todayHighlight: true
    });
    $('.datetimePickerFuture').datepicker({
        dateFormat: "dd-M-yy",
        autoclose: true,
        minDate: 0,
        maxDate: "+20y",
        yearRange: "0:+20",
        changeMonth: true,
        changeYear: true,
        todayHighlight: true
    });

    $('.datetimePickerCustom').each(
        function()
        {
            _MinDateString = $(this).attr('data-bv-mindate').split('|');
            _MaxDateString = $(this).attr('data-bv-maxdate').split('|');

            dMinDate = new Date(_MinDateString[0], _MinDateString[1], _MinDateString[2], 0, 0, 0);
            dMaxDate = new Date(_MaxDateString[0], _MaxDateString[1], _MaxDateString[2], 0, 0, 0);
            dMinYear = _MinDateString[0];
            dMaxYear = _MaxDateString[0];
         
            $(this).datepicker({
                dateFormat: "dd-M-yy",
                autoclose: true,
                minDate: dMinDate,
                maxDate: dMaxDate,
                yearRange: dMinYear + ":" + dMaxYear,
                changeMonth: true,
                changeYear: true,
                todayHighlight: true
            });
        }
    );

    try {
        $('#EditorForm').formValidation().formValidation("validate");
    } catch (e) { }

}

function ValidateApis() {
    try {
        $('#EditorForm').data('formValidation').validate();

        if ($('#EditorForm').data('formValidation').isValid()) {
            return true;
        } else {
            return false;
        }
    } catch (e) { }
}﻿function InitCounter() {
    // textarea counter

    $(".count_message").each(function () {
        var maxl = $(this).attr("maxlength");
        var curlen = $(this).val().length;
        /*        $(this).append('<span class="pull-right label label-default count_message_pill" id="' + $(this).attr("id") + '_counter" >' + curlen + "/" + maxl + '</span>');*/

    });

    $('.count_message').keyup(function () {
        var text_length = $(this).val().length;
        var maxl = $(this).attr("maxlength");
        var text_remaining = maxl - text_length;

        $('#' + $(this).attr("id") + '_counter').html(text_length + ' / ' + maxl);
    });
}﻿/*
    Flights.js
*/
var fareClassMatch = '';
var ClassBandMustMatch = false;
var UseTraditionalReturnFares = false;

var FlightSelectTranslations = null;
var RequirementsPageTranslations = null;
var divNextPreviousDayAvailability = null;
var mmbChangeFlightMode = '';
var oFirstJourneySelected = null;
var oPreviousFirstJourneyFareSelected = null;
var RequirementsProperties = { "MaxPassengers": null, "MaxChildren": 6, "MaxInfants": 6, "AutoUpdateReturnDate": false };
var FlightSelectNextPage = "BookingOptions.aspx";
var FlightSelectAirMilesValidated = false;
var sEVoucher = "";
var RequirementsEarliestBookingDate = null;
var sOriginCityCode = "";
var sDestinationCityCode = "";
var sHomeCityCode = "";
var sDepartureDate = "";
var sReturnDate = "";
var dDefaultDepartureDate = null;
var dDefaultReturnDate = null;
var RequirementsDefaultDepartureDate = null;
var RequirementsDefaultReturnDate = null;
var RequirementsDoOneShot = null;
var AvUrl = "../WebServices/AvailabilityWS.asmx/GetFlightAvailability";
var DestCityUrl = "../WebServices/Airports.asmx/DestinationCityList";
var addFltUrl = "WebServices/AvailabilityWS.asmx/AddFlightToBasket";
var changeDayUrl = "WebServices/AvailabilityWS.asmx/ChangeDay";

function InitAvailabilityDisplay() {
    try {
        jQuery("input[id^=optCalendarAvailabilityFare][type=radio]").parent().unbind("click").click(function () {
            //SelectAvailabilityFare(jQuery(this));
            var rb = $(this).find("input[id^=optCalendarAvailabilityFare][type=radio]");
            $(rb).prop('checked', true);
            SelectAvailabilityFare(jQuery(rb));
            //return false;
        });

        $("#radio-jquery-ui").buttonset();

        jQuery("input[id^=optCalendarAvailabilityFare][type=radio]").unbind("click").click(function () {
            //    SelectAvailabilityFare(jQuery(this));
            //  return false;
        });

        /*
        $(".refineSearchType").unbind("click").click(function () {
            var rb = $(this).find("input[id=ReturnTrip][type=radio]");
            $(rb).prop('checked', true);
           // return false;
        });
        */

        jQuery("div[id^=divFlightAvailabilityPreviousDay], div[id^=divFlightAvailabilityNextDay]").unbind("click").click(function () {
            NextDayPreviousDay_onClick(jQuery(this));
        });


        if (ClassBandMustMatch) {
            if (fareClassMatch !== '') {
                HideOrDisableUnwantedFares('');
            } else {
                if (jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length > 0) {
                    var tempFareData = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").first().val();
                    HideOrDisableUnwantedFares(tempFareData);
                }
            }
        }

        InitialiseRefineSearch(null);
        InitialiseGenericRefineSearch();
    } catch (e) { var xa = 1;}

}
function InitialiseGenericRefineSearch() {
    try {
        $('.dropdown-menu input, .dropdown-menu label, .dropdown-menu select').click(function (e) {
            e.stopPropagation();
        });
    } catch (e) { var xb = 1;}


    try {
        //if (jQuery("div[id$=RefineSearchWhoIsTravelling]").length == 1) {
        jQuery("#NumberOfAdults").change(function () {
            var noAdultsSelected = parseInt(jQuery(this).val());

            if (noAdultsSelected < 0) { noAdultsSelected = 0; }
            if (jQuery("#NumberOfInfants").length > 0) {
                var fldInfants = jQuery("#NumberOfInfants");
                var noOptions = fldInfants.children().length;

                noAdultsSelected += 1;
                if (noOptions > (noAdultsSelected)) {
                    fldInfants.find("option:gt(" + (noAdultsSelected - 1).toString() + ")").remove();
                } else {
                    for (var i = noOptions; ((i < noAdultsSelected) && (i <= RequirementsProperties.MaxInfants)) ; i++) {
                        fldInfants.append("<option value\"" + i.toString() + "\">" + i.toString() + "</option>");
                    }
                }
            }
        });
        //}
    } catch (e) { var xc = 1; }
}
function AddFlightToBasket_onSuccess(msg) {
    if ( msg !== null &&  msg.Data !== "" ) {
        $("#divBasket2").html(msg.Data);
        try { $("#divMiniBasket").html(msg.Data2); } catch (e) { var x4 = 1;}
        try { $("#BandText").html(msg.DialogCaption); } catch (e) { var x3 = 1; }
        try { InitBasket(); } catch (e) { var x = 1;}
        try { OnPageLoad(); } catch (e) { var x1 = 1; }
    }
   // RefreshControl("Basket", "#divBasket2", null, "NORELOAD");
}

function AddFlightToBasket_onError(ErrorMsg) {

    var dlgMsg = new Object;
    dlgMsg.OkAction = "RefreshPage()";
    dlgMsg.html = ErrorMsg;

    modalDialog(dlgMsg);

        //var oButtons = { "Ok": function() {           
        //    // refresh page
        //    //window.location.reload(true);
        //    RefreshPage();
        //    jQuery(this).dialog("destroy");
        //    }
        //};
        //if (RequirementsPageTranslations != null) {
        //    ShowModalDialog(ErrorMsg, RequirementsPageTranslations.ErrorSelectingFlights, 0, 0, oButtons);
        //} else {
        //    ShowModalDialog(ErrorMsg, "Warning", 0, 0, oButtons);
        //}

}

function HideOrDisableUnwantedFares(tempFareData) {
    // disable radio buttons
    var thisClass;
    
    //jQuery("input[type=radio][id^=optCalendarAvailabilityFare]").hide();
    jQuery("input[type=radio][id^=optCalendarAvailabilityFare]").parent().children().hide();
    jQuery("input[type=radio][id^=optCalendarAvailabilityFare]").parent().append('<span class="na">NA</span>');

    if (fareClassMatch !== '') {
        thisClass = fareClassMatch;
    } else {
        var vals = tempFareData.split("_");


        if (mmbChangeFlightMode === true) {
            if (jQuery(".FlightAvailabilityTable").length > 1) {
                // enable this direction
                var thisDirection = vals[0] + "_" + vals[1] + "_";
                jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + thisDirection + "]").parent().children().remove(".na");
                jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + thisDirection + "]").parent().children().show();
            }
        } else {
            // enable this direction
            thisDirection = vals[0] + "_" + vals[1] + "_";
            //jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + thisDirection + "]").show();
            jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + thisDirection + "]").parent().children().remove(".na");
            jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + thisDirection + "]").parent().children().show();
        }

        // enable this class
        thisClass = "_" + vals[4];
    }
    //jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value$=" + thisClass + "]").show();
    jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value$=" + thisClass + "]").parent().children().remove(".na");
    jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value$=" + thisClass + "]").parent().children().show();

}


function SelectAvailabilityFare(selectedFareOption) {
    var fareData = null;
    var sFormData = "";
    var sPleaseWaitMessage = "";
    var InvalidSelectedFares = "";
    var oRegExp = new RegExp("'", "g");
    var bContinue = true;

    try {
        if (ClassBandMustMatch) {
            if (jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length === 1) {
                // get code
                var tempFareData = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").val();
                HideOrDisableUnwantedFares(tempFareData);
            } else if (jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length > 1) {
                // any radio buttons in jouneys > first, not in first's class, to be de-selected
                tempFareData = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").first().val();
                var vals = tempFareData.split("_");
                var thisClass = vals[4];
                var changes = 0;

                jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").each(function () {
                    var tFareData = jQuery(this).val();
                    vals = tFareData.split("_");
                    if (vals[4] !== thisClass) {
                        $(this).attr("checked", false);
                        changes++;
                    }
                });

                if (changes > 0) {
                    HideOrDisableUnwantedFares(tempFareData);
                }

            }
        }

        if ((jQuery("input:checked[id=RedeemAirMiles]").length === 1) || (jQuery("#chkAvailabilityFFRedeemAirMiles").length === 1)) {
            HideOrDisableExpensiveAirmiles();
        }


       
        var arfareData = [];
        if (UseTraditionalReturnFares) {
            var iAvailabilityCount = jQuery("div[id^=divAvailabilityPanel]").length;
            var iSelectedAvailability = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length;
            var bValidCombinableFaresSelected = false;

            if (iAvailabilityCount === 2) {
                bContinue = CheckValidReturnCombinableFares(selectedFareOption);
            }
            if ((!bContinue) || (iAvailabilityCount !== iSelectedAvailability)) {
                try { ShowCannedFaxInfo(); } catch (e) { var x = 1;}
                try { highlightSelected(); } catch (e) { var y = 1;}
                return false;
            }

            jQuery("input:checked[id^=optCalendarAvailabilityFare][type=radio]").each(function () {
                var tempFareData = jQuery(this).val();
                tempFareData = tempFareData.toString().replace(oRegExp, "\"");
                InvalidSelectedFares = CheckValidFareDates(selectedFareOption);
                if (InvalidSelectedFares.length > 0) { tempFareData = tempFareData.replace("}", ", \"InvalidSelectedFares\" : " + InvalidSelectedFares + "}"); }
                if (fareData !== null) {
                    fareData += ", ";
                } else {
                    fareData = "";
                }
                fareData += "'" + tempFareData + "'";
                arfareData.push(tempFareData);
            });
        } else {
            fareData = selectedFareOption.val();
            fareData = fareData.toString().replace(oRegExp, "\"");
            InvalidSelectedFares = CheckValidFareDates(selectedFareOption);
            if (InvalidSelectedFares.length > 0) { fareData = fareData.replace("}", ", \"InvalidSelectedFares\" : " + InvalidSelectedFares + "}"); }
            fareData = "'" + fareData + "'";
            arfareData.push(fareData);
        }

        try { ShowCannedFaxInfo(); } catch (e) { var x1 = 1;}
        try { highlightSelected(); } catch (e) { var x2 = 1;}

        //sFormData = "{ 'FormData': [" + fareData + "] }";
        var rq = new Object;
        rq.addFlightRequest = new Object;
        rq.addFlightRequest.VarsSessionID = $('#VarsSessionID').val();

        rq.addFlightRequest.fareData = arfareData;
        rq.addFlightRequest.Zone = "PUBLIC";

        try { sPleaseWaitMessage = CheckFlightsTranslations.AddingFlightToBasketMessage; } catch (e) { var x3 = 1; }
        var url = addFltUrl;
        if ( (new RegExp("/Agent/", "i")).test(window.location.href) ) {
            // agent page
            url = "../" + url;
            rq.addFlightRequest.Zone = "AGENT";
        }
        if ((new RegExp("/mmb/", "i")).test(window.location.href)  ){
            // mmb page
            url = "../" + url;
            rq.addFlightRequest.Zone = "MMB";
        }
        if ((new RegExp("/fqtv/", "i")).test(window.location.href)) {
            // mmb page
            url = "../" +url;
            rq.addFlightRequest.Zone = "FQTV";
        }

        SendAjaxRequest(url, $.toJSON(rq), null, AddFlightToBasket_onSuccess, AddFlightToBasket_onError, "", true, sPleaseWaitMessage);
    } catch (e) {
        var msg = e.message;
    }
}

function HideOrDisableExpensiveAirmiles() {
    // un-hide any hidden previously
    jQuery("input[type=radio][id^=optCalendarAvailabilityFare]").parent().children().show();

    // do hiding
    jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").each(function () {
        try {
            // get outstanding miles
            var selFare = jQuery(this).val();
            var selFareVals = selFare.split("_");
            var milesSpent = $.trim(jQuery(this).parent().text());
            var totalMilesAvailable = $.trim($(".milesTotal span").html()).replace(",", "");
            if (totalMilesAvailable !== "") {
                // logged in with miles to spend
                var milesLeft = parseInt(totalMilesAvailable, 10) - parseInt(milesSpent, 10)
                var otherDirection;
                if (selFareVals[1] === '0') {
                    otherDirection = selFareVals[0] + "_1_";
                } else {
                    otherDirection = selFareVals[0] + "_0_";
                }
                if (jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare][value^=" + otherDirection + "]").length > 0) {
                    // remove value of existing fare this journey
                    milesLeft += parseInt(jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare][value^=" + otherDirection + "]").val());
                }
                // hide if too expensive
                jQuery("input[type=radio][id^=optCalendarAvailabilityFare][value^=" + otherDirection + "]").each(function () {
                    var miles = parseInt($.trim($(this).parent().text()), 10);
                    if (miles > milesLeft) {
                        $(this).parent().children().hide();
                    }
                });
            }
        } catch (e) { var x = 1;}
    });
}


function ShowCannedFaxInfo() {
    if (onlyShowCannedFaxForSelectedFlight) {
        // hide all canned fax
        $(".InfoColumn").children().hide();
        // get parent TR, then check if next is InfoColumn
        var par = $("input:checked[id^=optCalendarAvailabilityFare][type=radio]").parent().parent();
        $(par).each(function () {
            $(this).next().children('.InfoColumn').children().show().removeClass("hidden");
        });
    }
}

function highlightSelected() {
    if (highlightSelectedFlight) {
        // hide all highlighting
        $(".AvailabilityRow, .AvailabilityTableFlightDivider, .AvailabilityTableConnectingFlightDivider, .AvailabilityTableCannedFactsDivider").removeClass('ui-state-highlight');
        $(".AvailabilityRow td, .AvailabilityTableFlightDivider td, .AvailabilityTableConnectingFlightDivider td, .AvailabilityTableCannedFactsDivider td").removeClass('ui-state-highlight');
        // get parent TR, then check if next is InfoColumn
        var par = $("input:checked[id^=optCalendarAvailabilityFare][type=radio]").parent().parent();
        $(par).addClass('ui-state-highlight');
        $(par).children("td").addClass('ui-state-highlight');
        $(par).each(function () {
            CheckHighlightNext(this);
            //if ($(this).hasClass("AvailabilityTableConnectingFlightDivider")) {
            //    $(this).next().addClass('ui-state-highlight');
            //}
        });
    }
}
function CheckHighlightNext(obj) {
    if ($(obj).hasClass("AvailabilityTableConnectingFlightDivider")) {
        $(obj).next().addClass('ui-state-highlight');
        // carry on loop! - careful
        CheckHighlightNext($(obj).next());
    }
}

function CheckValidReturnCombinableFares(selectedFareOption) {
    var fareData = null;
    var selectedFareTable = null;
    var bFareSelected = false;
    var bValidFare = false;
    var bInvalidFareSelected = false;
    var SelectedJourneyFareData = null;

    try {
        oPreviousFirstJourneyFareSelected = null;
        SelectedJourneyFareData = GetFareObjectData(selectedFareOption.get(0));
        var bIsCombinableFare = SelectedJourneyFareData.IsCombinableFareClass;
        var bHasReturnFare = SelectedJourneyFareData.FareClassHasReturnFare;
        if (oFirstJourneySelected === null) {
            oFirstJourneySelected = SelectedJourneyFareData.FlightAvailabilityTableClientID;
        } else {
            if (SelectedJourneyFareData.FlightAvailabilityTableClientID !== oFirstJourneySelected) return true;
        }

        jQuery("table[id^=tblFlightAvailability]").each(function () {
            var oTable = jQuery(this);
            if (oTable.attr("id") !== SelectedJourneyFareData.FlightAvailabilityTableClientID) { //selectedFareTable.attr("id")
                oTable.find("input[type=radio][id^=optCalendarAvailabilityFare]").each(function () {
                    var fareObject = jQuery(this).get(0);
                    var fareObjectData = GetFareObjectData(fareObject);

                    bFareSelected = fareObject.checked;
                    bValidFare = false;
                    if ((bIsCombinableFare) && (fareObjectData.IsCombinableFareClass)) {
                        bValidFare = true;
                    } else {
                        if ((bHasReturnFare) && ((new RegExp(SelectedJourneyFareData.SelectedFareClass, "i")).test(fareObjectData.SelectedFareClass))) {
                            var sReturnFareRoute = "";
                            if (SelectedJourneyFareData.FlightAvailabilityTableClientID === "tblFlightAvailability0_0_0") {
                                sReturnFareRoute = SelectedJourneyFareData.FareRoute + fareObjectData.FareRoute.substr(3);
                            } else {
                                sReturnFareRoute = fareObjectData.FareRoute + SelectedJourneyFareData.FareRoute.substr(3);
                            }

                            if ((new RegExp(sReturnFareRoute, "i")).test(SelectedJourneyFareData.ReturnFareRoutes)) {
                                bValidFare = true;
                            }
                        }
                    }

                    if (!bValidFare) {
                        if (!bInvalidFareSelected && bFareSelected) { bInvalidFareSelected = true; }
                        fareObject.checked = false;
                    }
                    fareObject.disabled = !bValidFare;
                });
            }
        });

        //return false;
        if (bInvalidFareSelected) {
            oPreviousFirstJourneyFareSelected = selectedFareOption;
            jQuery("#divEmptyShoppingBasket").unbind("click").click();
            return true;
        } else {
            return true;
        }
    } catch (e) { var x = 1;}
}

function GetFareObjectData(fareObject) {
    var fareObjectData = null;
    var oRegExp = new RegExp("'", "g");

    try {
        fareObjectData = jQuery.parseJSON(fareObject.value.toString().replace(oRegExp, "\""));
        var sID_Indices = fareObject.id.replace("optCalendarAvailabilityFare", "") + "_" + fareObjectData.JourneyIndex + "_" + fareObjectData.FlightLegIndex;
        var fareObjectDateField = jQuery("#hfldCalendarAvailabilityDepDateTime" + sID_Indices);
        fareObjectData.SelectedFareDate = Date.parse(fareObjectDateField.val());
        fareObjectData.FlightDuration = jQuery("#hfldCalendarAvailabilityDuration" + sID_Indices).val();
        fareObjectData.MinConnectionTime = jQuery("#hfldCalendarAvailabilityMinConnectionTime" + sID_Indices).val();
    } catch (e) {
        fareObjectData = new Object;

    }

    return fareObjectData;
}

function ValidateSelectedFlights() {
    try {
        var iAvailabilityCount = jQuery("div[id^=divAvailabilityPanel]").length;
        var iSelectedAvailability = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length;

        //        if (ShoppingBasket2.UseBasket2 == true) {
        if ((!ShoppingBasket2.IsBasketEmpty) && iSelectedAvailability > 0 && iSelectedAvailability === iAvailabilityCount) {
            return true;
        }
        if (iSelectedAvailability === 0) {
            try { modalDialog(flightSelectPageTranslationsMsgs.FlightSelectionErrorMessage); } catch (e) {var x = 1;}
            return false;
        }
        if ((iAvailabilityCount > 1) && (iSelectedAvailability > 0) && (iSelectedAvailability !== iAvailabilityCount)) {
            try { modalDialog(flightSelectPageTranslationsMsgs.ReturnFlightSelectionErrorMessage); } catch (e) {                var x5 = 1;}
            return false;

        }

            return (!ShoppingBasket2.IsBasketEmpty && iSelectedAvailability > 0 && iSelectedAvailability === iAvailabilityCount);
        //} else {
        //    return ((!oCurrentShoppingBasket.IsBasketEmpty) && (iSelectedAvailability > 0) && (iSelectedAvailability == iAvailabilityCount));
        //}
    } catch (e) {
        return false;
    }
}

function ToggleFlightAvailabilityAirMilesMode_onSuccess(msg) {
    try {
        if (msg.Data !== null && msg.Data.length > 0) {
            jQuery("div[id$=divFlightAvailabilityFound]").html(msg.Data);
            // InitialiseCheckFlightsObjects(null);
            RefreshControl("Basket", "#divBasket2", null, "NORELOAD");
            InitAvailabilityDisplay();
        }
    } catch (e) {        var x = 1; }
}

function GetDestinations_onSuccess(msg) {

    try {
        $("#Destination").html(msg);
        $("#Destination").val(sDestinationCityCode);
    } catch (e) {        var x = 1; }

}

function InitRequirements() {

    $('.requirementsInnerContent').show();
    //KeepAlive();

    if (RequirementsDoOneShot === true) {
        SendAjaxRequest("../WebServices/Airports.asmx/OneShotLoad", "", "html", RequirementsOneShotLoad_onSuccess, null, "");
    }


    $(".requirementsLabel").unbind("click").click(function () {
    });

    $("#radio-jquery-ui").buttonset();

    try { InitialiseDatePicker(); } catch (e) {        var x = 1;}

    if (RequirementsEarliestBookingDate !== null) {
        jQuery("#departuredate, #returndate").datepicker("option", "minDate", RequirementsEarliestBookingDate);
    }

    if (RequirementsDefaultDepartureDate !== null && jQuery("#departuredate").datepicker("getDate") !== RequirementsDefaultDepartureDate) {
        jQuery("#departuredate").datepicker("setDate", RequirementsDefaultDepartureDate);
    }

    if (RequirementsDefaultReturnDate !== null && jQuery("input[name=ReturnTrip]:radio:checked").length === 1) {
        jQuery("#returndate").datepicker("setDate", RequirementsDefaultReturnDate);
    }

    jQuery("#departuredate").change(function () {
        var dSelectedDepartureDate = jQuery(this).datepicker("getDate");
        jQuery("#returndate").datepicker("option", "minDate", dSelectedDepartureDate);
        if (jQuery('input[name=ReturnTrip]:radio:checked').val() === 'chkJourneyTypeReturn' && jQuery("#returndate").val().length === 0) {
            jQuery("#returndate").datepicker("setDate", dSelectedDepartureDate);
        }
        try { if (RequirementsProperties.AutoUpdateReturnDate !== null) { jQuery("#returndate").datepicker("setDate", dSelectedDepartureDate.addDays(RequirementsProperties.AutoUpdateReturnDate)); } }
        catch (e) {
            var x = 1;
    }
    });

    jQuery("#NumberOfAdults").change(function () {
        var noAdultsSelected = parseInt(jQuery(this).val());

        if (noAdultsSelected < 0) { noAdultsSelected = 0; }
        if (jQuery("#NumberOfInfants").length > 0) {
            var fldInfants = jQuery("#NumberOfInfants");
            var noOptions = fldInfants.children().length;

            noAdultsSelected += 1;
            if (noOptions > noAdultsSelected) {
                fldInfants.find("option:gt(" + (noAdultsSelected - 1).toString() + ")").remove();
            } else {
                for (var i = noOptions; (i < noAdultsSelected && i <= RequirementsProperties.MaxInfants) ; i++) {
                    fldInfants.append("<option value\"" + i.toString() + "\">" + i.toString() + "</option>");
                }
            }
        }
    });

    $('#Origin').change(function () {
        SendAjaxRequest(DestCityUrl, "{'origin':'" + $('#Origin').val() + "'}", "html", RequirementsGetDestinations_onSuccess, null, "");
    });

    $('input[name=ReturnTrip]:radio').change(function () {
        if ($('input[name=ReturnTrip]:radio:checked').val() !== 'chkJourneyTypeReturn')
            $('.requirementsReturning').hide();
        else
            $('.requirementsReturning').show();
    });

    $('#submitButton').click(function (e) {

        var wsRq = BuildAvSearch(e);
        wsRq.SearchUser = "PUBLIC";
        if (wsRq !== false) {
            var sFormData = '{"FormData":' + $.toJSON(wsRq) + ',"IsMMBChangeFlightMode":false, "IsRefineSerach": false}';

            SendAjaxRequest(AvUrl, sFormData, null, RequirementsDoSubmit_onSuccess, RequirementsDoSubmit_onError, null, true, null);
        }
        return false;
    });
    // hover effects
    jQuery(".ui-button.ui-state-active").hover(
        function () { jQuery(this).removeClass("ui-state-active").addClass("ui-state-hover"); },
        function () { jQuery(this).removeClass("ui-state-hover").addClass("ui-state-active"); }
    ); //end hover
    InitChildCheck();
}

function InitChildCheck() {
    try {
        if (ChildNeedsAdult == true ) {
            // check on change no children
            $("#NumberOfChildren").unbind("change").change(function (e) {
                var noSelected = parseInt(jQuery(this).val());
                if (noSelected > 0) {
                    $("#Adults_0").wrap('<span/>');
                } else {
                    $("#Adults_0").unwrap();
                }
            });

            // check current settings
            DoChildCheck($("#NumberOfChildren"));
        }
    }
    catch (e) {
        
    }    
}
function DoChildCheck(obj) {
    var noSelected = parseInt(jQuery(obj).val());
    if (noSelected > 0) {
        $("#Adults_0").wrap('<span/>');
    
    }
}



//function GetHomeCity_onSuccess(msg) {

//    try {
//        sHomeCityCode = msg;
//    } catch (e) { }

//}

function GetOrigins_onSuccess(msg) {

    try {
        $("#Origin").html(msg);
        $("#Origin").val(sHomeCityCode);
        $("#Origin").change();
    } catch (e) {
        var x = 1;
    }

}

function RequirementsOneShotLoad_onSuccess(msg) {

    try {
        var o = jQuery.parseJSON(msg);

        sHomeCityCode = o.HomeCity;
        $("#Origin").html(o.OriginList);
        if (o.SelectedOriginCity.length > 0) {
            $("#Origin").val(o.SelectedOriginCity);
        } else {
            $("#Origin").val(sHomeCityCode);
        }
        $("#Destination").html(o.DestinationList);
        if (o.SelectedDestinationCity.length > 0) { $("#Destination").val(o.SelectedDestinationCity); }
    } catch (e) {
        var x = 1;
    }

}

function RequirementsGetDestinations_onSuccess(msg) {

    try {
        $("#Destination").html(msg);
    } catch (e) {
        var x = 1;
    }

}

function RequirementsDoSubmit_onSuccess(msg) {

    try {
        if (msg.Result === 'OK') {
            if (msg.NextURL !== '') {
                switch ($('#formRequirements').attr('target')) {
                    case '_blank':
                        window.open(msg.NextURL);
                        break;
                    case '_top':
                    default:
                        // window.top.location = msg.NextURL; // +"?VarsSessionID=" + $("#VarsSessionID").val(); 
                        PostToPage(msg.NextURL);
                }
                try { ShowLoadingProgressDialog(RequirementsPageTranslations.LoadingFlightsMessage); } catch (e) { var xv = 1;}
            }
        } else {
            // ShowRequirementsModalDialog(msg.ErrorMsg);
            WsServerErrorDialog(msg);
        }
    } catch (e) {
        var x = 1;
    }

}

function RequirementsDoSubmit_onError(errorText, msg) {

    try {
        var $p = $('<p class="RequirementsDialog"></p>').hide().appendTo("body");
        var dlgH = parseInt($p.css("height").replace("px", ""), 10);
        var dlgW = parseInt($p.css("width").replace("px", ""), 10);
        $p.remove();

        ShowModalDialog(errorText, "Search Error", dlgH, dlgW);

    } catch (e) {
        var x = 1;

    }

}

﻿﻿
function InitFqtvHome() {
    $(".ShowPnr").unbind('click').bind('click', function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("pnr", $(this).data("pnr")));

        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.FQTVHomeView", false, null, true);
        return false;
    });

    $('input[data-onchange]').unbind("change").change(function (e) {
        var fn = $(this).data('onchange');
        eval(fn + '(this);');

    });
}

function InitFqtv() {
    $("#marketingemailsdiv .input-group-addon").bind('click', function (e) {
        if ($("#marketingemails").prop("checked") == false) {
            if ($("#MarketingFields").length > 0) {
                $("#MarketingFields").addClass('hidden');
            }                
        }
        else {            
            if ($("#MarketingFields").length > 0) {
                $("#MarketingFields").removeClass('hidden');
                $('.validatedForm').formValidation("validate");
            }            
        }
    });

    $("#FQTVSaveBtn").unbind("click").click(function (evt) {
        var formData = $("form").serializeArray();

        if ($("#acceptterms").length) {
            if ($("#acceptterms").is(":not(:checked)")) {
                bootstrap_alert("Please accept terms and conditions", 0);
                return false;
            }
        }
        if ($("#marketingemails").length) {
            if ($("#marketingemails").hasClass("required")) {
                if ($("#marketingemails").is(":not(:checked)")) {
                    bootstrap_alert($("#marketingemails").data("msg"), 0);
                    return false;
                }

            }

        }
  
        if ($('.validatedForm').data('formValidation').isValid()) {
            AdminAction("ButtonMenuClick", "FQTVSave", formData, $("#HiddenEditViewClass").val(), false, null, true);
            event.preventDefault();
            return true;
        } else {
            bootstrap_alert("Please complete marked fields", 0);
            return false;
        }        
    });

    $("#EditorForm").unbind("keydown").keydown(function (e) {
        if (event.keyCode == 13) {
            var btn = $('#FQTVSaveBtn');
            if (btn.length > 0) {
                btn.click();
                e.preventDefault();
            }
        }
    });

    try {
        $('#EditorForm').formValidation({submitButtons: "FQTVSaveBtn"}).formValidation("validate");
    } catch (e) { }

            $(".showpassword").click(function () {
                var $input = $(this).parent().parent().find("input");
                if ($(this).html() === "Show") {
                    $(this).html("Hide");
                    $input.attr("type", "text");
                } else {
                    $(this).html("Show");
                    $input.attr("type", "password");
                }
                //var rep = $("<input type='" + change + "' />")
                //  .attr("id", $input.attr("id"))
                //  .attr("name", $input.attr("name"))
                //  .attr('class', $input.attr('class'))
                //  .val($input.val())
                //  .insertBefore($input);
                //$input.remove();
                //$input = rep;
                return false;
            });
}

function getMPID(id, wantHash) {

    var bHash = true;
    var sHash = '';

    if (wantHash != null) {
        bHash = wantHash;
    }

    if (bHash == true) {
        sHash = '#';
    }
    return sHash + $("[id$='" + id + "']").attr('id');
}

function InitFQTVButtons() {
    jQuery("#passengerdob").datepicker("option", { "minDate": "-120y", "maxDate": "-1d", "changeMonth": true, "changeYear": true, "yearRange": "c-100:c+100" });

    $("#FqtvSaveButton").unbind("click").click(function () {
        FqtvSaveProfile(true);
        return false;
    });

    window.setUpClick = function(Action,AjaxCall,fnSuccess) {

        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("pnr", $(this).data("pnr")));
        formData.push(GetKeyPair("username", $("#btnFQTVPurchaseMiles").attr("data-username")));
        
        var wsRq = new Object;
        wsRq.webServiceRequest = new Object;

        wsRq.webServiceRequest.ID = 'ButtonMenuClick';
        wsRq.webServiceRequest.Action = Action;
        wsRq.webServiceRequest.formData = formData;
        wsRq.webServiceRequest.Data = null;
        wsRq.webServiceRequest.Data2 = null;
        wsRq.webServiceRequest.Confirm = true;

        var rq = $.toJSON(wsRq);

        try {
            fqtvAjaxCall(AjaxCall, rq, fnSuccess);
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    };
    
    $("#btnFQTVPurchaseMiles").unbind("click").click(function () {

        try {
            var param = "{'UserName' : '" + $(this).attr("data-username") + "'}";

            $("#btnBuyNow").unbind("click").click(function () {
                setUpClick('PURCHASEAIRMILES', 'PurchaseAirMiles', btnBuyNow_Success);
            });

            fqtvAjaxCall('GetPurchaseAirMilesDialog', param, GetPurchaseAirMilesDialog_Success);
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });

    $("#btnFQTVTransferAirMiles").unbind("click").click(function () {

        try {
            var param = "{'UserName' : '" + $(this).attr("data-username") + "'}";

            $("#btnBuyNow").unbind("click").click(function () {
                setUpClick('TRANSFERAIRMILESPROCESS', 'TransferAirMiles', btnTransferAirmiles_Success);
            });

            fqtvAjaxCall('GetTransferAirMilesDialog', param, GetTransferAirMilesDialog_Success);
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });

    $("#btnFQTVEnterTransferCode").unbind("click").click(function () {

        try {
            //var param = "{'UserName' : '" + $(this).attr("data-username") + "'}";

            $("#btnBuyNow").unbind("click").click(function () {
                setUpClick('TRANSFERAIRMILESCODE', 'TransferAirMilesCode', btnTransferAirMilesCode_Success);
            });

            fqtvAjaxCall('GetConfirmTransferCodeDialog', null, GetConfirmTransferCodeDialog_Success);
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });

    /* init validation */
    $('.validatedForm').formValidation({
        submitButtons: "btnBuyNow"
    }).formValidation("validate");
}

function UpdateAirMilesPrice(elm) {
    var iMiles = 0;
    var sMiles = $('#AD_TotalAirmiles').val();

    if (sMiles !== '') {
        iMiles = Number(sMiles);
    }

    var sCurr = $('.ddlAirMCurr').val();
    arrCurr = sCurr.split('~');

    var iRate = Number(arrCurr[arrCurr.length - 1]);

    var nPrice = Number(iMiles * iRate).toFixed(2);

    $('#AD_TotalPrice').val(nPrice);

}

function GetPurchaseAirMilesDialog_Success(data) {
    showDialogResults(data.d, 'hidPurchaseAirmilesTitle', 'hidPurchaseAirmilesButton');
}

function GetTransferAirMilesDialog_Success(data) {
    showDialogResults(data.d, 'hidTransferAirmilesTitle', 'hidTransferAirmilesButton');
}

function GetConfirmTransferCodeDialog_Success(data) {
    showDialogResults(data.d, 'hidTransferCodeTitle', 'hidTransferCodeButton');
}

function showDialogResults(sHTML,titleID,btnTextID) {
    HideLoadingProgressDialog();
    $('#lblModalTitleLabel').html($(getMPID(titleID)).val());
    $('#lblModalTitleLabel').html($(getMPID(titleID)).val());
    $('#btnBuyNow').html($(getMPID(btnTextID)).val());
   
    $(getMPID("divPurchaseAirMilesContent")).html(sHTML);
    $(getMPID("divPurchaseAirmiles")).modal('show').draggable();

    InitFqtvHome();
}

function btnBuyNow_Success(data) {
    try {
        $('#spinnerModal').modal('hide');
    } catch (e) { }

    if ((!data.d.ErrorMsg == null && data.d.ErrorMsg != '') || data.d.Result=='ERROR') {
        ShowModalDialog(data.d.ErrorMsg);
    }
    else {
        //showAlert(data.GrowlSuccess, 'success');
        $("#divPurchaseAirmiles").modal('hide');
        SuccessMessageDialog(data.d.Result);

        //Update Account Panel
        $("#trTotalMiles td:nth-child(2)").text(data.d.Data2);
        $(".dname td:nth-child(2)").text();

        //Update TopUp Grid
        $('#divFQTVTopUp').replaceWith(data.d.Data);
    }
}

function btnTransferAirmiles_Success(data) {

    try {
        $('#spinnerModal').modal('hide');
    } catch (e) { }

    if ((!data.d.ErrorMsg == null && data.d.ErrorMsg != '') || data.d.Result == 'ERROR') {
        ShowModalDialog(data.d.ErrorMsg);
    }
    else {

        showDialogResults(data.d.Data, 'hidTransferCodeTitle', 'hidTransferCodeButton');

        $("#btnBuyNow").unbind("click").click(function () {
            setUpClick('TRANSFERAIRMILESCODE', 'TransferAirMilesCode', btnTransferAirMilesCode_Success);
        });
    }
}

function btnTransferAirMilesCode_Success(data) {
    try {
        $('#spinnerModal').modal('hide');
    } catch (e) { }

    if ((!data.d.ErrorMsg == null && data.d.ErrorMsg != '') || data.d.Result == 'ERROR') {
        ShowModalDialog(data.d.ErrorMsg);
    }
    else {
        $("#divPurchaseAirmiles").modal('hide');
        SuccessMessageDialog(data.d.Result);

        //Update Account Panel
        $("#trTotalMiles td:nth-child(2)").text(data.d.Data2);
       
        //Update TopUp Trans Grid
        $('#divFQTVAwarded').replaceWith(data.d.Data);
    }
}

function fqtvAjaxCall(func, param, fnSuccess) {

    fnSuccess = typeof (fnSuccess) == "undefined" ? null : (fnSuccess == "" ? null : fnSuccess);
    param = (param == null) ? "{}" : param; 

    $.ajax({
        url: '../WebServices/FqtvWS.asmx/' + func,
        data: param,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
            try {
                $('#spinnerModal').modal('show');
            } catch (e) { }
        },
        success: function (data) {
            if (fnSuccess != null) {
                fnSuccess(data);            }
        },
        failure: function (data) {
            if (showLoadingProgress && !bsWait) {
                HideLoadingProgressDialog();
            }
            if (bsWait == true) {
                HideLoading();
            }
            ShowModalDialog(data.d.ErrorMsg);
        }
    });
}﻿/* mmb.js */

function InitMmb() {

    jQuery("#btnMenuLogOut, #btnMenuLogOut A").unbind('click').click(function () {
        SendAjaxRequest("../WebServices/LoginWS.asmx/DoMMBLogout", "", null, MMB_onLogOut, null, "Log out failed!");
        return false;
    });
    jQuery("#btnMenuGetTicketDisplay").unbind('click').click(function (event) {
        var formData = $("form").serializeArray();
        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;

    });
    jQuery(".btnMenuGetTicketEmail").unbind('click').click(function (event) {
        var formData = $("form").serializeArray();
        var em = $("EmailAddress").val();
        formData.push(GetKeyPair("email", em));

        AdminAction("ButtonMenuClick","btnMenuGetTicketEmail", formData, "VARS.BookingLibrary.EF.Views.MmbView", false, null, true);
        event.preventDefault();
        return true;

    });

}

function MMB_onLogOut(msg) {
    try {
        // window.top.location = msg.NextURL;
        GoToPage(msg.NextURL);
    } catch (e) { }
}
﻿var WantBootstrapModal = false;

//var customModal = $('<div class="custom-modal modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></div><div class="modal-body"></div><div class="modal-footer"><button class="btn" data-dismiss="modal">Close</button></div></div>');

var customModal = $('<div id="custom-modal" class="modal fade" tabindex="-1" role="dialog">  <div class="modal-dialog">    <div class="modal-content">      <div class="modal-header">        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>        <h4 class="modal-title">Modal title</h4>      </div>      <div class="modal-body">        <p>One fine body&hellip;</p>      </div>      <div class="modal-footer">        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>        <button type="button" class="btn btn-primary">Save changes</button>      </div>    </div><!-- /.modal-content -->  </div><!-- /.modal-dialog --></div><!-- /.modal -->');

function modalDialog(dlgMsg) {
    var title = "Warning";
    var cssClass = 'modalDialogMsg';
    var oButtons = new Object();

    if (dlgMsg.title != null) {
        title = dlgMsg.title;
    }
    if (dlgMsg.cssClass != null) {
        cssClass = dlgMsg.cssClass;
    }

    if (WantBootstrapModal) {
        var ModalID = "ModalDialog";
        var dlg = '<div id="' + ModalID + '" class="modal  fade ">'; //
        dlg += '<div class="modal-dialog ' + cssClass + '" ';
        if (dlgMsg.width != null) {
            dlg += ' style="width: ' + dlgMsg.width + 'px" ';
        }

        dlg += '><div class="modal-content">';
        dlg += '<div class="modal-header modal-title ' + dlgMsg.titleCss + '" >';
        // dlg += '<button type="button" class="close" data-dismiss="modal" >×</button>';
        dlg += '<h3 class="modalLabel ">' + title + '</h3></div>';
        dlg += '<div class="modal-body ' + cssClass + '"></div>';
        dlg += '<div class="modal-footer">';
        if (dlgMsg.CancelButtonText != null) {
            dlg += '<button id="bntClose" class="btn" data-dismiss="modal">' + dlgMsg.CancelButtonText + '</button>'
        }
        if (dlgMsg.OkButtonText != null) {
            dlg += '<button id="ModalSubmit" class="btn btn-primary" data-dismiss="modal" type="submit" >' + dlgMsg.OkButtonText + '</button></div>';
        } else {
            dlg += '<button id="ModalSubmit" class="btn btn-primary" data-dismiss="modal" ';
            if (dlgMsg.OkAction != null) {
                dlg += ' type="submit" ';
            }
            dlg += ' >OK</button>';
        }
        dlg += '</div></div></div>';
        dlg += '</div>';
        $(dlg).hide().appendTo("body");
        $("#" + ModalID + " .modal-body").html(dlgMsg.html);

        try {
            $("#" + ModalID).modal('show').on('shown.bs.modal', function () {
                if (dlgMsg.OkAction != null) {
                    $('#ModalSubmit').on('click', function (e) {
                        eval(dlgMsg.OkAction);
                    });
                }
                if (dlgMsg.CancelAction != null) {
                    $('#bntClose').on('click', function (e) {
                        eval(dlgMsg.CancelAction);
                    });
                }

            }).on('hidden.bs.modal', function () {
                $("#" + ModalID).remove(); // '.modal'
            });
        } catch (e) {
            alert(e.message);
        }

    } else {

        oButtons.Ok = new Object();
        oButtons.Ok.text = "OK";
        oButtons.Ok.click = function () {
            if (dlgMsg.OkAction != null) {
                eval(dlgMsg.OkAction);
            }
            jQuery(this).dialog("destroy");
        }

        if (dlgMsg.OkButtonText != null) {
            oButtons.Ok.text = dlgMsg.OkButtonText;
        }
        if (dlgMsg.CancelButtonText != null) {
            oButtons.Cancel = new Object();
            oButtons.Cancel.text = dlgMsg.CancelButtonText;
            oButtons.Cancel.click = function () {
                if (dlgMsg.CancelAction != null) {
                    eval(dlgMsg.CancelAction);
                }
                jQuery(this).dialog("destroy");
            }

        }
        if (dlgMsg.width == 0) {
            dlgMsg.width = 'auto';
        }
        if (dlgMsg.height == 0) {
            dlgMsg.height = 'auto';
        }
        $('<div></div>').dialog({
            modal: true,
            dialogClass: cssClass,
            title: title,
            width: dlgMsg.width,
            height: dlgMsg.height,
            open: function () {
                var markup = dlgMsg.html;

                $(this).html(markup);
            },
            buttons: oButtons
        });  //end confirm dialog
    }
}
﻿
/* multiCity.js */

function InitMultiSearch() {

    $('select[name^="Destination_"]').unbind("change").change(function () {
        // select next origin
        var row = parseInt($(this).attr("id").replace("Destination_", ""), 10);
        if (row < 4) {
            var nextOrigin = $(this).val();
            $("#Origin_" + (row + 1)).val(nextOrigin);
            //$("#Destination_" + (row + 1)).val($("#Origin_1").val());
            // get valid destinations
            $(routes).each(function () {
                if (this.org === nextOrigin) {
                    $("#Destination_" + (row + 1)).empty();
                    $(this.dest).each(function () {
                        var arr = this.split("|");
                        $("#Destination_" + (row + 1)).append('<option value="' + arr[0] + '">' + arr[1] + '</option>');
                    });
                }
            });
        }
    });


    $('select[name^="Origin_"]').unbind("change").change(function () {
        var row = parseInt($(this).attr("id").replace("Origin_", ""), 10);
        var Origin = $(this).val();
        $(routes).each(function () {
            if (this.org === Origin) {
                $("#Destination_" + row ).empty();
                $(this.dest).each(function () {
                    var arr = this.split("|");
                    $("#Destination_" + row ).append('<option value="' + arr[0] + '">' + arr[1] + '</option>');
                });
            }
        });
    });

    $('input[name^="Departs_"]').unbind("change").change(function () {
        var row = parseInt($(this).attr("id").replace("Departs_", ""), 10);
        // set next date picker to start this date
        if (row < 4) {
            var dSelectedDepartureDate = jQuery(this).datepicker("getDate");
            jQuery("#Departs_" + (row+1)).datepicker("option", "minDate", dSelectedDepartureDate);
        }
    });
}

﻿var oProductsAvailable = null;
var sBookingCurrency = null;
var oBookingOptionsTranslations = null;
var oBookingOptionsProperties = { "HasBlankOptionInProductQuantityOptions": false };


function ConfirmBagsBeforeNextPage(CancelAction) {
    if (UseVerboseBagSelectMessages == true) {
        var NoBags = $("#NoBags").val();
        var NoBagsSelected = $("#NoBagsSelected").val();

        if (NoBags == 0) {
            return true;
        } else {
            if (NoBagsSelected == 0) {
                var dlgMsg = SeatTranslationsMsgs.NoBaggageSelected;
                dlgMsg.CancelAction = CancelAction;
                dlgMsg.CancelButtonText = 'Continue';
                dlgMsg.OkButtonText = 'Book my baggage now';

                modalDialog(dlgMsg);
                return false;
            }
        }
    }
    return true;
}

function ConfirmSeatsBeforeNextPage(CancelAction) {
    // SeatNo
    if (UseVerboseSeatSelectMessages == true) {
        var noSeatsReq = $(".SeatNo").length;
        var noSeatsEmpty = $(".SeatNo:empty").length;

        if (noSeatsReq == 0) {
            // no seats to allocate
            return true;
        }

        if (noSeatsEmpty == noSeatsReq) {
            var dlgMsg = SeatTranslationsMsgs.NoSeatSelectedError;
            dlgMsg.CancelAction = CancelAction;
            dlgMsg.CancelButtonText = 'Continue';
            dlgMsg.OkButtonText = 'Book my seat now';

            modalDialog(dlgMsg);
            return false;
        }
        if (noSeatsEmpty > 0) {
            var dlgMsg = SeatTranslationsMsgs.NotAllSeatsSelectedError;
            dlgMsg.CancelAction = CancelAction;
            dlgMsg.CancelButtonText = 'Continue';
            dlgMsg.OkButtonText = 'Book my seat now';

            modalDialog(dlgMsg);

            return false;
        }
        return true;
    }
    return true;
}
﻿function PageExitScript() {
    $(window).on('beforeunload', function (e) {
        console.log("beforeUnload event!");
        bootbox.alert({ message: "beforeUnload event!", title: "Alert" });
        e.stopPropagation();
        e.preventDefault();

        return "beforeUnload event!";
    });
}﻿

function InitPanels() {
    $('.panel-heading span.clickable, .panel-heading div.clickable').unbind('click').click(function (e) {
        var $this = $(this);
        if (!$this.hasClass('panel-collapsed')) {
            panelCollapse($this);
        } else {
            panelExpand($this);
        }
    });

}

function panelCollapse(obj) {
    $(obj).parents('.panel').find('.panel-body').slideUp();
    $(obj).parents('.panel').find('.panel-footer').slideUp();
    $(obj).addClass('panel-collapsed');
    $(obj).find('span').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
}
function panelExpand(obj) {
    $(obj).parents('.panel').find('.panel-body').slideDown();
    $(obj).parents('.panel').find('.panel-footer').slideDown();
    $(obj).removeClass('panel-collapsed');
    $(obj).find('span').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');

}

﻿function InitPaxDetails() {
    //jQuery("input[type=hidden][id$=passengertype]").each(function () {
    //    try {
    //        var sPaxType = jQuery(this).val();
    //        var sPaxIndex = jQuery(this).attr("id").replace("passenger", "").replace("passengertype", "");
    //        try { InitialiseDatePicker("-100y", "-0d"); } catch (e) { }
    //        InitialisePaxDOBObject(sPaxIndex, sPaxType);
    //    } catch (e) { }
    //});

    $('#mydropdownmenu > li').click(function (e) {
        e.preventDefault();
        var selected = $(this).find("a").data('value');

        var linkedInput = $(this).find("a").data('input');

        $('#' + linkedInput).val(selected);
        $('#' + linkedInput + 'display').text($(this).text());
    });

    $("#FqtvLoginBtn").unbind("click").click(function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("fqtvno", $("#passenger1fqtvno").val()));
        formData.push(GetKeyPair("fqtvpw", $("#passenger1FQTVpassword").val()));

        AdminAction("ButtonMenuClick", "btnFqtvLogin", formData, "VARS.BookingLibrary.EF.Views.PaxDetailView", false, null, true);
        return false;
    });

    $("#btnGiftVoucherApply").unbind("click").click(function (e) {
        //var formData = $("form").serializeArray();

        if ($("#txtVoucherNumber").val() == '' || $("#txtSecurityCode").val() == '') {
            var dlgMsg = new Object;
            dlgMsg.title = "Error";
            dlgMsg.html = "Please enter a valid Voucher Number and Code to continue.";
            modalDialog(dlgMsg);
            return false;
        }

        //formData.push(GetKeyPair("gvno", $("#txtVoucherNumber").val()));
        //formData.push(GetKeyPair("gvseccd", $("#txtSecurityCode").val()));

        //AdminAction("ButtonMenuClick", "btnGiftVoucherApply", formData, "VARS.BookingLibrary.EF.Views.PaxDetailView", false, null, true);
        var msg = new Object;
        msg.controlMessage = new Object;
        msg.controlMessage.Name = "ApplyVoucher";
        msg.controlMessage.Location = "#divGiftVoucherDetails";
        msg.controlMessage.ID = "VOUCHER";
        msg.controlMessage.Data = $("#txtVoucherNumber").val();
        msg.controlMessage.Data2 = $("#txtSecurityCode").val();
        RefreshControlMsg(msg, true, bsWait);

        return false;
    });

    $("#btnGiftVoucherRemove").unbind("click").click(function (e) {
        //var formData = $("form").serializeArray();

        //formData.push(GetKeyPair("gvno", $("#txtVoucherNumber").val()));

        //AdminAction("ButtonMenuClick", "btnGiftVoucherRemove", formData, "VARS.BookingLibrary.EF.Views.PaxDetailView", false, null, true);

        var msg = new Object;
        msg.controlMessage = new Object;
        msg.controlMessage.Name = "RemoveVoucher";
        msg.controlMessage.Location = "#divGiftVoucherDetails";
        msg.controlMessage.ID = "VOUCHER";
        msg.controlMessage.Data = $("#txtVoucherNumber").val();
        RefreshControlMsg(msg, true, bsWait);
        return false;
    });

    //SET UP Country Dropdown Change Event
    $(".PassengerDetailsInput_countryofresidence").unbind("change").change(function (e) {

        if ($('.PassengerDetailsInput_SeniorDisabilityResidentDiscount').length > 0) {
            ValidateDisabilityDisplay(this);
        }
        return false;

    });

    //Set up Apply Discount Buttons
    $(".btnSeniorDisabilityResidentDiscount").unbind("click").click(function (e) {
        var elID = $(this).attr('id').replace('btn', '');

        var sCID = $(this).attr('id').replace('btn', '').replace('SeniorDisabilityResidentDiscount','countryofresidence');
        var cboCountry = $('#'+sCID).find('option:selected').text();

        var msg = new Object;
        msg.controlMessage = new Object;
        msg.controlMessage.Name = "ApplyDiscount";
        msg.controlMessage.Location = "";
        msg.controlMessage.ID = "DISCOUNT";
        msg.controlMessage.Data = $("#" + elID).val();
        msg.controlMessage.Data2 = $(this).attr("data-paxno");
        msg.controlMessage.Data3 = cboCountry + '|' + $(this).attr("data-type");
        RefreshControlMsg(msg, true, bsWait);

        return false;
    });

    //Initialise Disability Controls
    $(".PassengerDetailsInput_countryofresidence").each(function (e) {

        if ($('.PassengerDetailsInput_SeniorDisabilityResidentDiscount').length > 0)
        {
            ValidateDisabilityDisplay(this);
        }
    });
    
    $("#FqtvRegisterBtn").unbind("click").click(function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("txtUser", $("#passenger1fqtvno").val()));
        if ($("#acceptterms").is(":not(:checked)")) {
            var dlgMsg = new Object;
            dlgMsg.title = "Error";
            dlgMsg.html = "You must accept the terms and conditions to continue";
            modalDialog(dlgMsg);
            return false;
        }
        AdminAction("ButtonMenuClick", "FqtvRegisterBtn", formData, "VARS.BookingLibrary.EF.Views.PaxDetailView", false, null, true);
        return false;
    });
    $("#FqtvForgotBtn").unbind("click").click(function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("txtUser", $("#passenger1fqtvno").val()));

        AdminAction("ButtonMenuClick", "FqtvForgotBtn", formData, "VARS.BookingLibrary.EF.Views.PaxDetailView", false, null, true);
        return false;
    });
    $(".FQTVno").bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            if ($(this).val().length > 0) {
                //Enter keycode   
                e.preventDefault();
                $(".FQTVpassword").get(0).focus();
            }
        }
    });

    if ($("#PassengerDetailsFQTVRegisterDiv").length > 0) {
        $("#PassengerDetailsFQTVRegisterDiv").hide();
    }

    $(".fqtvquickregistration").change(function (e) {
        if ($(this).is(":checked")) {
            $(".FqtvQuickField").removeClass("hidden");
            $(".FqtvQuickField").show();
            $("#PassengerDetailsFQTVLoginDiv").hide();
        } else {
            $(".FqtvQuickField").hide();
            $("#PassengerDetailsFQTVLoginDiv").show();
            $("#PassengerDetailsFQTVRegisterDiv").hide();
        }
    });

    $("#fqtvquickjoinlink").unbind("click").click(function (e) {        
        $("#PassengerDetailsFQTVLoginDiv").hide();
        $("#PassengerDetailsFQTVRegisterDiv").show();
        $(".fqtvquickregistration").prop('checked', true);
        InitBeautifulCheckbox();
        $(".FqtvQuickField").removeClass("hidden");
        $(".FqtvQuickField").show();

        return false;
    });

    $(".FQTVpassword").bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#FqtvLoginBtn").click();
        }
    });
    $('.vars-drop-down > li').click(function (e) {
        e.preventDefault();
        var selected = $(this).text();
        var linkedInput = $(this).find("a").data('input');

        $('#' + linkedInput).val(selected);
        $('#' + linkedInput + 'display').text(selected);
    });
    $('.vars-drop-down-phone > li').click(function (e) {
        e.preventDefault();
        var selected = $(this).find("a").data('value');
        var linkedInput = $(this).find("a").data('input');

        console.log("v-dd-p =" + selected);

        $('#' + linkedInput).val(selected);

        if (selected.toString().substring(0, 1)!='+'){
            selected = '+' + selected;
        }

        $('#' + linkedInput + 'display').text(selected);
    });

    $('.vars-drop-down-input-group > li').click(function (e) {
        e.preventDefault();
        var selected = $(this).find("a").data('value');
        var linkedInput = $(this).find("a").data('input');
        var ID = $(this).find("a").data('id');

        console.log("v-dd-p =" + selected);

        $('#' + linkedInput).val(selected);
        //$('#' + linkedInput + '_display').text(selected);

        var fullDate = $('#' + ID + "_day_value").val() + "-" + $('#' + ID + "_month_value").val() + "-" + $('#' + ID + "_year_value").val();
        $('#' + ID).val(fullDate);
        $('#' + ID).text(fullDate);

    });

    //Set up Discount div collapse event
    $('.divResidentDiscount').on('hidden.bs.collapse', function () {

        var bNeedClear = false;

        if ($(this).find('.PassengerDetailsInput_SeniorDisabilityResidentDiscount').val() != '') {
            bNeedClear = true;
        }

        $(this).find('.PassengerDetailsInput_SeniorDisabilityResidentDiscount').val('');

        if (bNeedClear == true) {
            $(this).find('.btnSeniorDisabilityResidentDiscount').click();
        }
    });

    $("[data-id='DOB']").click(function () {
        $('.validatedForm').formValidation('revalidateField', 'DOB');
    });
}


function ValidateDisabilityDisplay(cbo) {

    //Determine ID
    var elID = $(cbo).attr('id').replace('countryofresidence', 'SeniorDisabilityResidentDiscount');
    var chkID = $(cbo).attr('id').replace('countryofresidence', 'SeniorDisabilityResidentDiscountchkResidentDiscount');
    var btnID = 'btn' + elID;
    var dType = $('#' + elID).attr('data-type');
    var paxNo = $('#' + elID).attr('data-paxno');

    //Get Country values
    var cboCountry = $(cbo).find('option:selected').text().toUpperCase();
    var reqCountry = $('#' + elID).attr('data-Country').toUpperCase();

    var bNeedClear = false;

    if (cboCountry == reqCountry) {
        //show fields
        $('#' + elID).closest('.seniordisabilityresidentdiscount-start').show();
    }
    else
    {
        if ($('#' + elID).val() != '') {
            bNeedClear = true;
        }

        //blank input box and hide fields
        $('#' + elID).val('');

        if (dType == 'D') {
            if ($('#' + chkID).prop('checked') == true) {

                var div = $('#' + chkID).closest('.checkbox').attr('data-target');

                $(div).collapse('toggle');
                $('#' + chkID).prop('checked', false);
                //$('#'+chkID).click();
            }
        }

        $('#' + elID).closest('.seniordisabilityresidentdiscount-start').hide();

        if (bNeedClear == true) {
            //Click Button - to remove discount
            $('#' + btnID).click();
        }
    }
}

﻿/*
    Payment.js
*/
var WantPaymentAccordionMessages = false;
var bsWait = false;
var displayedPaymentMessage = false;

function ShowExternalPaymentIFrame(PageURL) {
    try {
        var $p = $('<p class="CCPaymentDialog"></p>').hide().appendTo("body");
        var dlgH = $p.css("height").replace("px", "");
        var dlgW = $p.css("width").replace("px", "");
        $p.remove();
        dialogTimeout = 17; // 20 min timeout

        var oDialogProperties = {
            height: dlgH, width: dlgW,
            modal: true,
            closeText: '',
            open: function (event, ui) {
                setExternPaymentDialogTitle("Please complete payment details, " + dialogTimeout + " minutes remaining");
                // start timeout
                setTimeout("PaymentDialogTimeout()", 60 * 1000); // check time every minute
                $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            },
            title: "Enter CC details"
        };
        jQuery("div[id$=divExternalPaymentPanel]").dialog(oDialogProperties);

    } catch (e) { var err; err = e; }
}

function PostExternalPaymentFormData(PageURL, formData, formTarget) {
    var sForm = "";
    var rePaymentPageTarget = new RegExp("(_top|_blank)", "i");

    try {
        //alert(PageURL);
        formTarget = (typeof (formTarget) == "undefined") ? "_top" : formTarget;
        formData = (typeof (formData) == "undefined") ? "" : formData;

        //  if ((formTarget == null) || (formTarget.length == 0)) { formTarget = "_top"; }
        if ((formTarget == null) || (formTarget.length == 0)) { formTarget = ""; }

        if (formData == null) { formData = ""; }

        if (!rePaymentPageTarget.test(formTarget)) {
            formTarget = "iframeExternalPaymentPage";
            ShowExternalPaymentIFrame(PageURL);
        }

        sForm += "<form id='frmExternalPayment' name='ExternalPaymentFrame' action='" + PageURL + "' target='" + formTarget + "' method='post'>";
        if (formData.length > 0) {
            sForm += formData;
        }
        sForm += "</form>";

        jQuery("form").after(sForm);
        jQuery("#frmExternalPayment").submit();
    } catch (e) { }
}

function ExternalPaymentDialog(formData) {
    try {
        formData = (typeof (formData) == "undefined") ? "" : formData;
        ShowExternalPaymentIFrame("");
        jQuery("form").eq(0).after(formData);
    } catch (e) { }
}

function DisplayPaymentMessage() {
    if (displayedPaymentMessage == true)
    {
        return;
    }    
    try {
        displayedPaymentMessage = true;
        var q;
        if (document.URL.split('?').length >= 3) {
            q = document.URL.split('?')[2];
        } else {
            q = document.URL.split('?')[1];
        }
        //var q = document.URL.split('?')[1];
        if (q != undefined) {
            //var params = $.base64.decode(q).split('&');
            var decoded = atob(q);
            var params = decoded.split('&');
            for (var i = 0; i < params.length; i++) {
                var pair = params[i].split('=');
                if (pair[0] == "paymentmsg") {
                    var dlgMsg = new Object;
                    dlgMsg.html = pair[1].replace("%EQ;", "=");
                    dlgMsg.title = 'Payment message';
                    modalDialog(dlgMsg);
                    break;
                }
            }
        }
    } catch (e) { }
}
function InitPaymentAccordion() {
    $(".PayAccordion").accordion({ heightStyle: "content" });
    $(".PaySubAccordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });

    $(".PaySubAccordion").on('accordionactivate', function (event, ui) {
        //$(this).find(".PayOptTable").click();
        ui.newPanel.find(".PayOptTable").click();
    });

    // display message on click - if enabled
    if (WantPaymentAccordionMessages == true) {
        $('.PaySubAccordion > h3').click(function (e) {
            var id = $(this).data("id");
            //then show msg
            //var msgObj = PaymentTranslationsMsgs.id ;
            var msgObj = eval("PaymentTranslationsMsgs." + id)
            if (msgObj != null) {
                modalDialog(msgObj);
            }
        });
    }
}

function doNextButtonAction(bsWait) {
    disableButton("#PageNavButtonTopBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPageNext");
    // console.log("Click NEXT");

    if (PaymentChargesApplicable) {
        PaymentChargesConfirmed = false;
    } else {
        PaymentChargesConfirmed = true;
    }
    AirMilesPaymentValidated = false;
    if (Validate()) {
        CompleteBooking(bsWait);
    } else {
        enableButtons();
    }
}

function RetryCompleteBooking(bsWait) {
    var CompleteBookingRequest = { "CompleteBookingRequest": { "Passengers": [], "Payments": null } };   //, "PaymentsPaymentScheme": []
    var paxField = null;
    var sDefaultErrorMessage = "";
    var sPleaseWaitMessage = "";
    try {
        if (!IsTermsAndCondictionsAccepted()) {
            enableButtons();
            return false;
        }
        CompleteBookingRequest.CompleteBookingRequest.formData = $("form").serializeArray()
        CompleteBookingRequest.CompleteBookingRequest.paymentFormData = $("input:checked[type=radio][id^=optpaymentformofpayment]").parent().parent().find('input, select').serializeArray();
        /*      CompleteBookingRequest.CompleteBookingRequest.paymentFormData = $('.PayOptTable.Selected').find('input').serializeArray(); */
        var oFormData = getJSONStringFromObject(CompleteBookingRequest);

        oPaxDetailsError = null;
        oPaymentDetailsError = null;
        try { sDefaultErrorMessage = oPaxPaymentDetailsTranslations.DefaultSaveErrorMessage; } catch (e) { }
        try { sPleaseWaitMessage = oPaxPaymentDetailsTranslations.DefaultSavingMessage; } catch (e) { }

        if (jQuery("#txtAgentPassword").length == 1) {
            CompleteBookingRequest.CompleteBookingRequest.AgentPassword = jQuery("#txtAgentPassword").val();
            jQuery("#txtAgentPassword").removeClass("PassengerDetailsErrorField");
        }

        var ErrorMsg = "";


        ErrorMsg = ValidatePaymentFields()
        if (ErrorMsg.length > 0) {
            ShowModalDialog(ErrorMsg);
            enableButtons();
            return false;
        }


        jQuery("input[type=checkbox][id*=paxrelateproduct]").removeClass("PassengerDetailsErrorField");
        SendIBEMasterAjaxRequest(sPaxPaymentDetailsPageRequestPrefix + "WebServices/PaymentWS.asmx/RetryCompleteBooking", oFormData, null, ReComplete_onSuccess, ReComplete_onError, sDefaultErrorMessage, true, sPleaseWaitMessage, null, null, bsWait); //, 130000

    } catch (e) { }
    return false;
}

function ReComplete_onSuccess(msg) {
    CompleteBooking_onSuccess(msg);
}
function ReComplete_onError(msg) {
    ShowIBEMasterModalDialog(errormsg);
}
var activeClass = "panel-active";

function InitPaxPaymentButtons(PrevPage) {
    try {
        jQuery("#PageNavButtonTopBookingPaymentDetailsNext, #PageNavButtonBottomBookingPaymentDetailsNext").unbind("click").click(function () {
            disableButton("#PageNavButtonTopBookingPaymentDetailsNext, #PageNavButtonBottomBookingPaymentDetailsNext");
            // after CC declined, retry
            RetryCompleteBooking();
            return false;
        });

        jQuery("#PageNavButtonTopBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPageNext").unbind("click").click(function () {

            if (oPaxPaymentDetailsTranslations.ConfirmPopupTitle != "") {
                var oButtons = {
                    'OK': function () {
                        jQuery(this).dialog('destroy');
                        doNextButtonAction(true);
                        return false;
                    },
                    'Cancel': function () {
                        jQuery(this).dialog('destroy');
                        return false;
                    }
                };
                ShowModalDialog(oPaxPaymentDetailsTranslations.ConfirmPopupBody, oPaxPaymentDetailsTranslations.ConfirmPopupTitle, 'auto', '600px', oButtons);
                return false;
            } else {
                doNextButtonAction(true);
            }

            return false;
        });
        // PageNavButtonTopBookingPassengerPaymentDetailsBack PageNavButtonBottomBookingPassengerPaymentDetailsBack
        jQuery("#PageNavButtonTopBookingPassengerPaymentDetailsBack, #PageNavButtonBottomBookingPassengerPaymentDetailsBack").unbind("click").click(function () {
            //console.log("Click back");
            GoToPage(PrevPage);
            return false;
        });
        //jQuery("#PageNavButtonBottomBookingPassengerPage").unbind("click").click(function () {
        //    GoToPage("CheckFlights.aspx?direction=back");
        //    return false;
        //});

        $(".PaySubAccordion input[type=radio][id^=optpaymentformofpayment]").hide();
        $(".PayOptTable input[type=radio][id^=optpaymentformofpayment]").hide();

        $(".pay-head").unbind("click").click(function () {
            $(this).find(".PayOptTable").click();
        });

        // bootstrap accordion
        $("[id=pay-accordion]").on('shown.bs.collapse', function (e) {
            // $(this).find("#optpaymentformofpayment").prop('checked', true);
            $(e.target).find("#optpaymentformofpayment").prop('checked', true);

            $("[id=pay-accordion] .panel").removeClass(activeClass);
            $(e.target).closest(".panel").addClass(activeClass);
            var fop = $(e.target).find("#optpaymentformofpayment").val();
            doValidateForm("#" + fop + "_form");
        });


        $(".PayOptTable").unbind("click").click(function () {
            //$(this).find(':radio').attr('checked', true);
            $("H3.PaySelected .ui-accordion-check").remove();
            $("H3.PaySelected").removeClass("PaySelected");
            $("TABLE.PaySelected").removeClass("PaySelected");
            $(this).parent().prev().addClass("PaySelected");
            $(this).addClass("PaySelected");

            // only tick if more than one!
            if ($("#optpaymentformofpayment").length > 1) {
                $(this).parent().prev().append('<span class="ui-accordion-check ui-icon ui-icon-check"/>');
            }
            $(this).find("#optpaymentformofpayment").prop('checked', true);

            // show / hide caption
            $(".payCaption span").hide();
            $(this).find(".payCaption span").show();

            return false;
        });

        // if only 1 option select it
        if ($(".PayOptTable").length == 1) {
            $(".PayOptTable").click();
        }

        // bin base
        $(".CardNumberBinBase").unbind("click").bind('keyup', function (e) {
            if ($(this).val().length == 11) {
                RefreshControl("CCBINBASE", ".col2 h3", null, $(this).val());
            }
        });

        /* dialog for Terms and Conditions */
        $(".TandCpopup").unbind("click").click(function () {
            var popupUrl = $(this).prop("href");
            $('<iframe width="100%" src="' + popupUrl + '" style="min-width: 95%" />').dialog({
                open: function () {
                    $(this).closest(".ui-dialog")
                        .find(".ui-dialog-titlebar-close")
                        .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick' style='margin-top: -1px; margin-left: -1px;'></span>")
                },
                bgiframe: true,
                title: 'Terms and Conditions',
                height: 800,
                width: 900,
                modal: true

            });

            //$('.ui-dialog-titlebar').height(20);
            //$('.ui-dialog-titlebar-close').removeClass('ui-dialog-titlebar-close').addClass('close');

            return false;
        });

        //$(".TandCpopup").unbind("click").click(function () {
        //    var popupUrl = $(this).prop("href");
        //    BootstrapModalDialogIFrameDisplay(popupUrl, 'Terms and Conditions')
        //    return false;
        //});

        // prevent double click
        $(document).ready(function () {
            $("*").dblclick(function (e) {
                e.preventDefault();
            });
        });
        $('body').on('click', 'a.ui-state-disabled', function (event) {
            event.preventDefault();
        });

    } catch (e) { }
}

function InitPaymentButtons(NextPage) {
    // next page buttons
    try {
        jQuery("#PageNavButtonTopBookingPaymentDetailsNext, #PageNavButtonBottomBookingPaymentDetailsNext").unbind("click").click(function () {
            disableButton("#PageNavButtonTopBookingPaymentDetailsNext, #PageNavButtonBottomBookingPaymentDetailsNext");
            // after CC declined, retry
            RetryCompleteBooking();
            return false;
        });





        jQuery("#PageNavButtonTopBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPaymentDetailsNext, #PageNavButtonBottomBookingPassengerPageNext").unbind("click").click(function () {

            if (oPaxPaymentDetailsTranslations.ConfirmPopupTitle != "") {
                var oButtons = {
                    'OK': function () {
                        jQuery(this).dialog('destroy');
                        doNextButtonAction(false);
                        return false;
                    },
                    'Cancel': function () {
                        jQuery(this).dialog('destroy');
                        return false;
                    }
                };
                ShowModalDialog(oPaxPaymentDetailsTranslations.ConfirmPopupBody, oPaxPaymentDetailsTranslations.ConfirmPopupTitle, 'auto', '600px', oButtons);
                return false;
            } else {
                doNextButtonAction(false);
            }

            return false;
        });
        // PageNavButtonTopBookingPassengerPaymentDetailsBack PageNavButtonBottomBookingPassengerPaymentDetailsBack
        jQuery("#PageNavButtonTopBookingPassengerPaymentDetailsBack, #PageNavButtonBottomBookingPassengerPaymentDetailsBack").unbind("click").click(function () {
            //console.log("Click back");
            GoToPage(NextPage);
            return false;
        });
        //jQuery("#PageNavButtonBottomBookingPassengerPage").unbind("click").click(function () {
        //    GoToPage("CheckFlights.aspx?direction=back");
        //    return false;
        //});

        $(".PaySubAccordion input[type=radio][id^=optpaymentformofpayment]").hide();
        $(".PayOptTable input[type=radio][id^=optpaymentformofpayment]").hide();

        $(".pay-head").unbind("click").click(function () {
            $(this).find(".PayOptTable").click();
        });

        // bootstrap accordion
        $("[id=pay-accordion]").on('shown.bs.collapse', function (e) {
            // $(this).find("#optpaymentformofpayment").prop('checked', true);
            $(e.target).find("#optpaymentformofpayment").prop('checked', true);

            $("[id=pay-accordion] .panel").removeClass(activeClass);
            $(e.target).closest(".panel").addClass(activeClass);

            var fop = $(e.target).find("#optpaymentformofpayment").val();
            doValidateForm("#" + fop + "_form");

        });


        $(".PayOptTable").unbind("click").click(function () {
            //$(this).find(':radio').attr('checked', true);
            $("H3.PaySelected .ui-accordion-check").remove();
            $("H3.PaySelected").removeClass("PaySelected");
            $("TABLE.PaySelected").removeClass("PaySelected");
            $(this).parent().prev().addClass("PaySelected");
            $(this).addClass("PaySelected");

            // only tick if more than one!
            if ($("#optpaymentformofpayment").length > 1) {
                $(this).parent().prev().append('<span class="ui-accordion-check ui-icon ui-icon-check"/>');
            }
            $(this).find("#optpaymentformofpayment").prop('checked', true);

            // show / hide caption
            $(".payCaption span").hide();
            $(this).find(".payCaption span").show();

            return false;
        });

        // if only 1 option select it
        if ($(".PayOptTable").length == 1) {
            $(".PayOptTable").click();
        }

        // bin base
        $(".CardNumberBinBase").unbind("click").bind('keyup', function (e) {
            if ($(this).val().length == 11) {
                RefreshControl("CCBINBASE", ".col2 h3", null, $(this).val());
            }
        });

        /* dialog for Terms and Conditions */
        $(".TandCpopup").unbind("click").click(function () {
            var popupUrl = $(this).prop("href");
            $('<iframe width="100%" src="' + popupUrl + '" style="min-width: 95%" />').dialog({
                bgiframe: true,
                title: 'Terms and Conditions',
                height: 800,
                width: 900,
                modal: true
            });

            return false;
        });

        //$(".TandCpopup").unbind("click").click(function () {
        //    var popupUrl = $(this).prop("href");
        //    BootstrapModalDialogIFrameDisplay(popupUrl, 'Terms and Conditions')

        //    return false;
        //});

        // prevent double click
        $(document).ready(function () {
            $("*").dblclick(function (e) {
                e.preventDefault();
            });
        });
        $('body').on('click', 'a.ui-state-disabled', function (event) {
            event.preventDefault();
        });

    } catch (e) { }
}

function CalculateChecksum(Luhn) {
    var sum = 0;
    for (i = 0; i < Luhn.length; i++) {
        sum += parseInt(Luhn.substring(i, i + 1));
    }
    var delta = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (i = Luhn.length - 1; i >= 0; i -= 2) {
        var deltaIndex = parseInt(Luhn.substring(i, i + 1));
        var deltaValue = delta[deltaIndex];
        sum += deltaValue;
    }
    var mod10 = sum % 10;
    mod10 = 10 - mod10;
    if (mod10 == 10) {
        mod10 = 0;
    }
    return mod10;
}

function doValidateForm(selector) {

    $(selector)
        .on('init.field.fv', function (e, data) {
            // data.fv      --> The FormValidation instance
            // data.field   --> The field name
            // data.element --> The field element

            var $icon = data.element.data('fv.icon'),
                options = data.fv.getOptions(),                      // Entire options
                validators = data.fv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.icon && options.icon.required) {
                // The field uses notEmpty validator
                // Add required icon
                $icon.addClass(options.icon.required).show();
            }
        })
        .formValidation({
            row: {
                valid: 'has-success',
                invalid: 'has-error'
            },
            icon: {
                required: 'fa fa-asterisk ico-red',
                valid: 'fa fa-check ico-green',
                invalid: 'fa fa-times ico-red',
                validating: 'fa fa-refresh'
            }
        })
        .on('status.field.fv', function (e, data) {
            // Remove the required icon when the field updates its status
            var $icon = data.element.data('fv.icon'),
                options = data.fv.getOptions(),                      // Entire options
                validators = data.fv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.icon && options.icon.required) {
                $icon.removeClass(options.icon.required).addClass('fa');
            }
        })
        .formValidation("validate");

}

function ValidatePaymentFields(ErrorMsg, isMmb) {
    try {
        var failed = false;
        var ErrorMsg = "";


        if ($("input:checked[type=radio][id^=optpaymentformofpayment]").length == 0) {
            if ($("#optpaymentformofpayment").length == 0) {
                //payment control not loaded as payment amount is 0
                failed = false;
            }
            else {
                failed = true;
                if (($("div.panel-active").length > 0) && $("#TTLCUTOFF").val() == "PASSED") {
                    ErrorMsg += oPaxPaymentDetailsTranslations.SelectOtherFormOfPayment + '<br />';
                } else {
                    ErrorMsg += oPaxPaymentDetailsTranslations.SelectFormOfPayment + '<br />';
                }
            }
        } else {

            var obj = $("input:checked[type=radio][id^=optpaymentformofpayment]").parent().parent()

            if (isMmb == true) {
                var opt = $("input:checked[type=radio][id^=optpaymentformofpayment]").val();

                // if ((opt.toUpperCase() != 'CASH') && (opt.toUpperCase() != 'BUYNOWPAYLATER') && (opt.toUpperCase() != 'INVOICE')) {
                // check that there is something to validate
                if (($('#' + opt + '_form').length > 0) && ($('#' + opt + '_form input').length > 0)) {
                    var frm = opt + "_form"
                    doValidateForm("#" + frm);

                    if (!$("#" + frm).data('formValidation').isValid()) {
                        //showPayMessage("Please complete marked fields", 0);
                        ErrorMsg = "Please complete marked fields";
                        return ErrorMsg;
                    }
                }
            }
            if ($(obj).find('#CARDEXPIRYDATEMonth').length) {
                var Mon = $(obj).find('#CARDEXPIRYDATEMonth').val();
                var Yr = $(obj).find('#CARDEXPIRYDATEYear').val();
                if (($.trim(Mon) == "0") || ($.trim(Yr) == "0")) {
                    failed = true;
                    if ($.trim(Mon) == "0") {
                        $(obj).find('#CARDEXPIRYDATEMonth').addClass('PassengerDetailsErrorField');
                    }
                    if ($.trim(Yr) == "0") {
                        $(obj).find('#CARDEXPIRYDATEYear').addClass('PassengerDetailsErrorField');
                    }
                    ErrorMsg += oPaxPaymentDetailsTranslations.SelectMonthYear + '<br />';
                } else {
                    var d = new Date();
                    var y = d.getFullYear();
                    var m = d.getMonth();
                    var _currentdate = new Date(y + '-' + (Number(m) + 1) + '-1');
                    var _expirydate = new Date(Number((20 + Yr)), Number(Mon), 1, 0, 0, 0, 0);
                    if (_currentdate > _expirydate) {
                        $(obj).find('#CARDEXPIRYDATEMonth').addClass('PassengerDetailsErrorField');
                        $(obj).find('#CARDEXPIRYDATEYear').addClass('PassengerDetailsErrorField');
                    }
                    else {
                        try {
                            $(obj).find('#CARDEXPIRYDATE').val($(obj).find('#CARDEXPIRYDATEMonth').val() + '/' + $(obj).find('#CARDEXPIRYDATEYear').val())
                        } catch (e) { }
                    }
                }
            }
            if ($(obj).find('#CARDNUMBER').length) {
                if ($(obj).find('#CARDNUMBER')[0].required) {
                    var CardNo = $(obj).find('#CARDNUMBER').val();
                    // card no exists so validate it
                    // PassengerDetailsErrorField
                    if (CardNo.length < 8) {
                        failed = true;
                        $(obj).find('#CARDNUMBER').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardTooShort + '<br />';
                    } else {
                        //var Luhn = CardNo;
                        var LuhnDigit = parseInt(CardNo.substring(CardNo.length - 1, CardNo.length));
                        var LuhnLess = CardNo.substring(0, CardNo.length - 1);
                        if (CalculateChecksum(LuhnLess) != parseInt(LuhnDigit)) {
                            failed = true;
                            $(obj).find('#CARDNUMBER').addClass('PassengerDetailsErrorField');
                            ErrorMsg += oPaxPaymentDetailsTranslations.CardNumberInvalid + '<br />';
                        }
                    }
                }

            }
            if ($(obj).find('#CARDNUMBERBINBASE').length) {
                if ($(obj).find('#CARDNUMBERBINBASE')[0].required) {
                var CardNo = $(obj).find('#CARDNUMBERBINBASE').val();
                // card no exists so validate it
                // PassengerDetailsErrorField
                if (CardNo.length < 8) {
                    failed = true;
                    $(obj).find('#CARDNUMBERBINBASE').addClass('PassengerDetailsErrorField');
                    ErrorMsg += oPaxPaymentDetailsTranslations.CardTooShort + '<br />';
                } else {
                    //var Luhn = CardNo;
                    var LuhnDigit = parseInt(CardNo.substring(CardNo.length - 1, CardNo.length));
                    var LuhnLess = CardNo.substring(0, CardNo.length - 1);
                    if (CalculateChecksum(LuhnLess) != parseInt(LuhnDigit)) {
                        failed = true;
                        $(obj).find('#CARDNUMBERBINBASE').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardNumberInvalid + '<br />';
                    }
                }
                }
            }
            if ($(obj).find('#CARDSECURITYCODE').length) {
                if ($(obj).find('#CARDSECURITYCODE')[0].required) {
                    var CardCode = $(obj).find('#CARDSECURITYCODE').val();
                    if (CardCode.length < 3) {
                        failed = true;
                        $(obj).find('#CARDSECURITYCODE').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardCodeTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#CARDHOLDER').length) {
                if ($(obj).find('#CARDHOLDER')[0].required) {
                    var val = $(obj).find('#CARDHOLDER').val();
                    if (val.length < 3) {
                        failed = true;
                        $(obj).find('#CARDHOLDER').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardHolderTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#CARDHOLDERFIRSTNAME').length) {
                if ($(obj).find('#CARDHOLDERFIRSTNAME')[0].required) {
                    var val = $(obj).find('#CARDHOLDERFIRSTNAME').val();
                    if (val.length < 2) {
                        failed = true;
                        $(obj).find('#CARDHOLDERFIRSTNAME').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardHolderTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#CARDHOLDERSURNAME').length) {
                if ($(obj).find('#CARDHOLDERSURNAME')[0].required) {
                    var val = $(obj).find('#CARDHOLDERSURNAME').val();
                    if (val.length < 2) {
                        failed = true;
                        $(obj).find('#CARDHOLDERSURNAME').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CardHolderTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#BILLINGADDRESSLINE1').length) {
                if ($(obj).find('#BILLINGADDRESSLINE1')[0].required) {
                    var val = $(obj).find('#BILLINGADDRESSLINE1').val();
                    if (val.length < 3) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSLINE1').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.AddressTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#BILLINGADDRESSLINE3').length) {
                if ($(obj).find('#BILLINGADDRESSLINE3')[0].required) {
                    var val = $(obj).find('#BILLINGADDRESSLINE3').val();
                    if (val.length < 3) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSLINE3').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.TownTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#BILLINGADDRESSLINE4').length) {
                if ($(obj).find('#BILLINGADDRESSLINE4')[0].required) {
                    var val = $(obj).find('#BILLINGADDRESSLINE4').val();
                    //2 charactors to allow state codes
                    if (val.length < 2) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSLINE4').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CountyTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#BILLINGADDRESSCOUNTRYCODES').length) {
                    var val = $(obj).find('#BILLINGADDRESSCOUNTRYCODES').val();
                    if (val.length < 2) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSCOUNTRYCODES').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CountryTooShort + '<br />';
                    }
            }
            if ($(obj).find('#BILLINGADDRESSPOSTZIPCODE').length) {
                if ($(obj).find('#BILLINGADDRESSPOSTZIPCODE')[0].required) {
                    var val = $(obj).find('#BILLINGADDRESSPOSTZIPCODE').val();
                    if (val.length < 3) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSPOSTZIPCODE').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.PostcodeTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#BILLINGADDRESSCOUNTRY').length) {
                if ($(obj).find('#BILLINGADDRESSCOUNTRY')[0].required) {
                    var val = $(obj).find('#BILLINGADDRESSCOUNTRY').val();
                    if (val.length < 2) {
                        failed = true;
                        $(obj).find('#BILLINGADDRESSCOUNTRY').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.CountryTooShort + '<br />';
                    }
                }
            }
            if ($(obj).find('#MOBILENUMBER').length) {
                if ($(obj).find('#MOBILENUMBER')[0].required) {
                    var val = $(obj).find('#MOBILENUMBER').val();
                    //2 charactors to allow state codes
                    if (val.length < 0) {
                        failed = true;
                        $(obj).find('#MOBILENUMBER').addClass('PassengerDetailsErrorField');
                        ErrorMsg += oPaxPaymentDetailsTranslations.MobileNumberInvalid + '<br />';
                    }
                }
            }
        }
        return ErrorMsg
    } catch (e) {
        ErrorMsg = e.message;
        return e.message;
    }
}

var SubmitCount = 0;
var PaymentChargesConfirmed = true;

function InitMmbPayment() {

    var mmbPaymentChargesApplicable = false;
    jQuery("input:checked[type=radio][id^=optpaymentformofpayment]").each(function () {
        var re = new RegExp("'", "g");
        var reCCPayment = new RegExp("^(CreditCard|ManualCreditCard)$", "i");
        var oFOPRequest = null;

        try {
            oFOPRequest = jQuery.parseJSON(jQuery(this).val().replace(re, "\""));
            if (oFOPRequest.PaymentChargesEnabled) {
                mmbPaymentChargesApplicable = true;
                if (reCCPayment.test(oFOPRequest.PaymentType)) {
                    jQuery("#paymentcardnumber").blur(function () {
                        ConfirmingPaymentCharges = false;
                        CardNumber_onChange(jQuery(this));
                    });
                }
            }
        } catch (e) { }
    });

    jQuery("#PageNavButtonBottomMmbPayNext, #PageNavButtonTopMmbPayNext").unbind("click").click(function () {
        SubmitCount++;

        //$('.validatedForm').formValidation({
        //    submitButtons: submitID
        //}).formValidation("validate");

        if (SubmitCount <= 1) {
            if (mmbPaymentChargesApplicable) {
                PaymentChargesConfirmed = false;
            } else {
                PaymentChargesConfirmed = true;
            }
            CompleteBooking(true);
            return false;
        } else { return false; }
    });

}

function showPayMessage(msg) {
    setTimeout(function () {

        Lobibox.notify('error', {
            msg: msg,
            sound: false
        });
    }, 10);
}
﻿/* PNR Builder */

function InitPnrBuilder() {
    try { InitBlueScreen(); } catch (e) { }
    try { InitCheckinPage(); } catch (e) { }


    $(".RefundFlightCC, .RefundFlightAllCC").unbind('click').click(function (e) {

        var dlg = "<form id='infos' action=''><div class='row'><div class='col-sm-4'>\
    Credit Card No:</div><div class='col-sm-8'><input type='text' class='form-control' name='ccno' id='ccno' /></div></div>\
    <div class='row'><div class='col-sm-4'>Expires (YYMM):</div><div class='col-sm-8'><input type='text' class='form-control' name='expires' id='expires' /></div></div>\
    </form>";

        var line = $(this).data("line");
        var refundAll = false;
        if ($(this).hasClass("RefundFlightAllCC")) {
            refundAll = true;
        }

        bootbox.confirm({
            title: 'Refund Credit Card', message: dlg, callback: function (result) {
                if (result) {
                    var formData = $("form").serializeArray();
                    var ccno = $("#ccno").val();
                    var exp = $("#expires").val();
                    formData.push(GetKeyPair("ccno", ccno));
                    formData.push(GetKeyPair("expires", exp));
                    formData.push(GetKeyPair("line", line));
                    if (refundAll == true ) {
                        AdminAction("ButtonMenuClick", "RefundFlightAll", formData, $("#AdminClass").val(), false, null, true);  // ,cbData
                    } else {
                        AdminAction("ButtonMenuClick", "RefundFlight", formData, $("#AdminClass").val(), false, null, true);  // ,cbData
                    }
                    return true;
                } else {
                    return false;
                }
            }
        });
    });


    $("#ADD_RMK").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#AddRemark").click();
            return false;
        }
    });

    $("#ADD_CONTACT_ADDRESS").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#AddContact").click();
            return false;
        }
    });

    $("input[name^='EDIT_CONTACT_A_']").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            var id = $(this).prop("id").replace("EDIT_CONTACT_A_", "");
            //Enter keycode   
            e.preventDefault();
            $(".SaveContact_" + id).click();
            return false;
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

}﻿/*  
Used in VARS Expert and VARS Public projects 
*/

﻿function InitPulicFlightButtons(NextPage,PrevPage) {
    // detech close
    $('a').on('click', function () { MovingWithinWebsite = true; });
    $(window).unload(function () {
        if (!MovingWithinWebsite && (event.clientY < 0)) {
            var url = "WebServices";

            if (new RegExp("/m/", "i").test(window.location.href)) {
                // agent page
                url = "../" + url;
            }
        }
    });

        // next page buttons
        try {
            jQuery("#PageNavButtonTopBookingChangeConfirmationNext, #PageNavButtonBottomBookingChangeConfirmationNext").unbind("click").click(function () {
                //ProceedToBookingChangeConfirmationPage();
                ProceedToBookingOptionsPage();
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#PageNavButtonTopFlightSelectNext, #PageNavButtonTopMultiFlightSelectNext,#PageNavButtonBottomFlightSelectNext,  #PageNavButtonBottomMultiFlightSelectNext").unbind("click").click(function () {
                //console.log("f Click NEXT");

                FlightSelectAirMilesValidated = false;
                if (ValidateSelectedFlights()) {
                    if (ValidateRedeemAirMiles()) {
                        GoToPage(NextPage);
                        FlightSelectAirMilesValidated = false;
                    }
                } else {
                    //try { ShowIBEModalDialog(flightSelectPageTranslations.FlightSelectionErrorMessage); } catch (e) { } 
                    //  try { modalDialog(flightSelectPageTranslationsMsgs.FlightSelectionErrorMessage); } catch (e) { }
                }
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#PageNavButtonTopFlightCalNext, #PageNavButtonBottomFlightCalNext").unbind("click").click(function () {
                //console.log("f Click NEXT");
                if (ShoppingBasket2.IsBasketEmpty == true || ShoppingBasket2.IsBasketFull == false) {
                    modalDialog(flightCalPageTranslationsMsgs.SelectJourneysMessage);
                    return false;
                }

                FlightSelectAirMilesValidated = false;
                if (ValidateCalFlights()) {
                  //  if (ValidateRedeemAirMiles()) {
                        GoToPage(NextPage,true );
                        FlightSelectAirMilesValidated = false;
                    //}
                } else {
                    //try { ShowIBEModalDialog(flightSelectPageTranslations.FlightSelectionErrorMessage); } catch (e) { } 
                    //  try { modalDialog(flightSelectPageTranslationsMsgs.FlightSelectionErrorMessage); } catch (e) { }
                }
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#PageNavButtonTopMultiFlightSelectBack, #PageNavButtonBottomMultiFlightSelectBack").unbind("click").click(function () {
                // only visible after multi - city 
                GoToPage("RequirementsMultiCity.aspx");
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#PageNavButtonTopFlightSelectBack, #PageNavButtonBottomFlightSelectBack").unbind("click").click(function () {
                //console.log("Click back");
                // only visible after requirements
                GoToPage(RequirementsProperties.RequirementsPage);
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#PageNavButtonTopFlightCalBack, #PageNavButtonBottomFlightCalBack").unbind("click").click(function () {
                //console.log("Click back");
                // only visible after requirements
                GoToPage(PrevPage, true); // RequirementsProperties.RequirementsPage
                MovingWithinWebsite = true;
                return false;
            });

            $('#submitButton').unbind("click").click(function (e) {
                var wsRq = BuildAvSearch(e);
                wsRq.SearchUser = "PUBLIC";
                wsRq.SearchSource = "refine";
                if (wsRq != false) {
                    var url = "WebServices";
                    if (new RegExp("/m/", "i").test(window.location.href)) {
                        // agent page
                        url = "../" + url;
                    }
                    var sFormData = "{'FormData':" + $.toJSON(wsRq) + ",'IsMMBChangeFlightMode':false, 'IsRefineSerach': false}";
                    SendAjaxRequest(url + "/AvailabilityWS.asmx/GetFlightAvailability", sFormData, null, DoSubmit_onSuccess, null, null, true, null);
                }
                MovingWithinWebsite = true;
                return false;
            });

            jQuery("#RedeemAirMiles").unbind("click").click(function () {
                RedeemAirMiles_onClick(jQuery(this));
            });
        } catch (e) { }
}
function ValidateCalFlights() {
    try {
        if (!ShoppingBasket2.IsBasketEmpty) {
            return true;
        }



        var iAvailabilityCount = jQuery("div[id^=divAvailabilityPanel]").length;
        var iSelectedAvailability = jQuery("input:checked[type=radio][id^=optCalendarAvailabilityFare]").length;

        //        if (ShoppingBasket2.UseBasket2 == true) {
        if ((!ShoppingBasket2.IsBasketEmpty) && (iSelectedAvailability > 0) && (iSelectedAvailability == iAvailabilityCount)) {
            return true;
        }
        if (iSelectedAvailability == 0) {
            try { modalDialog(flightSelectPageTranslationsMsgs.FlightSelectionErrorMessage); } catch (e) { }
            return false;
        }
        if ((iAvailabilityCount > 1) && (iSelectedAvailability > 0) && (iSelectedAvailability != iAvailabilityCount)) {
            try { modalDialog(flightSelectPageTranslationsMsgs.ReturnFlightSelectionErrorMessage); } catch (e) { }
            return false;

        }

        return ((!ShoppingBasket2.IsBasketEmpty) && (iSelectedAvailability > 0) && (iSelectedAvailability == iAvailabilityCount));
        //} else {
        //    return ((!oCurrentShoppingBasket.IsBasketEmpty) && (iSelectedAvailability > 0) && (iSelectedAvailability == iAvailabilityCount));
        //}
    } catch (e) {
        return false;
    }
}


function InitPublicBSSeatspage(NextPage, PrevPage) {
    // next page buttons
    try {

        jQuery("#PageNavButtonTopSeatsNext, #PageNavButtonBottomSeatsNext").unbind("click").click(function () {
            if (typeof ($('#ConfirmDangerous_top')) != 'undefined') {
                if ($("#ConfirmDangerous_top").is(":not(:checked)") && $("#ConfirmDangerous_bottom").is(":not(:checked)")) {
                    var dlgMsg = new Object;
                    dlgMsg.html = "You must accept the Regulations on Dangerous Goods";
                    dlgMsg.title = "Warning";
                    modalDialog(dlgMsg);
                    return false;
                }
            }

            // ProceedToNextPage();
            if (ConfirmSeatsBeforeNextPage("GoToPage('" + NextPage + "',true)")) {
                GoToPage(NextPage, true);
            }
            return false;
        });


        jQuery("#PageNavButtonTopSeatsBack, #PageNavButtonBottomSeatsBack").unbind("click").click(function () {
            // ReturnToPreviousPage();
            GoToPage(PrevPage, true );
            return false;
        });


    } catch (e) { }
}

function InitPublicBSProductsButtons(NextPage, PrevPage) {
    // next page buttons
    try {

        jQuery("#PageNavButtonTopBookingBookingOptionsNext, #PageNavButtonBottomBookingBookingOptionsNext").unbind("click").click(function () {
            if (!oCurrentShoppingBasket.IsBasketEmpty) {
                // ProceedToNextPage();
                if (ConfirmProductQuantitiesBeforeNextPage()) {

                    if (ConfirmBagsBeforeNextPage("GoToPage('" + NextPage + "', true )")) {
                        GoToPage(NextPage,true);
                    }
                }
            }
            return false;
        });

        jQuery("#PageNavButtonBottomBookingChangeProductsNext").unbind("click").click(function () {
            GoToPage(NextPage, true);
            return false;
        });

        jQuery("#PageNavButtonBottomBookingChangeProducts, #PageNavButtonBottomBookingChangeProductsBack").unbind("click").click(function () {
            GoToPage(PrevPage, true);
            return false;
        });

        jQuery("#PageNavButtonTopBookingBookingOptionsBack, #PageNavButtonBottomBookingBookingOptionsBack").unbind("click").click(function () {
            // ReturnToPreviousPage();
            GoToPage(PrevPage);
            //GoToPage("FlightSelect.aspx");
            return false;
        });

        /* dialog for Tax and Fees */
        $(".TandFpopup").unbind("click").click(function () {
            var popupUrl = $(this).prop("href");
            $('<iframe width="100%" src="' + popupUrl + '" style="min-width: 95%" />').dialog({
                open: function () {
                    $(this).closest(".ui-dialog")
                        .find(".ui-dialog-titlebar-close")
                        .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick' style='margin-top: -1px; margin-left: -1px;'></span>");
                    $(this).closest(".ui-dialog")
                        .find(".ui-dialog-title").css('color', '#000000');
                },
                bgiframe: true,
                title: 'Taxes and Fees',
                height: 800,
                width: 900,
                modal: true

            });

            //$('.ui-dialog-titlebar').height(20);
            //$('.ui-dialog-titlebar-close').removeClass('ui-dialog-titlebar-close').addClass('close');

            return false;
        });

    } catch (e) { }

}

function InitPublicChangeBookingButtons(NextPage) {
    jQuery("#PageNavButtonBottomChangeBooking, #PageNavButtonTopChangeBooking").unbind("click").click(function () {
        GoToPage(NextPage, true );
        return false;
    });
}

function InitPublicChangeSeatsButtons(NextPage, PrevPage) {
    jQuery("#PageNavButtonBottomChangeSeats, #PageNavButtonTopChangeSeats").unbind("click").click(function () {
        if (typeof ($('#ConfirmDangerous_top')) != 'undefined') {
            if ($("#ConfirmDangerous_top").is(":not(:checked)") && $("#ConfirmDangerous_bottom").is(":not(:checked)")) {
                var dlgMsg = new Object;
                dlgMsg.html = "You must accept the Regulations on Dangerous Goods";
                dlgMsg.title = "Warning";
                modalDialog(dlgMsg);
                return false;
            }
        }

        GoToPage(NextPage, true );
        return false;
    });
    jQuery("#PageNavButtonBottomChangeSeatsBack, #PageNavButtonTopChangeSeatsBack").unbind("click").click(function () {
        GoToPage(PrevPage, true );
        return false;
    });
}
function InitPublicOptionsButtons(NextPage, PrevPage) {
    // next page buttons
    try {

        jQuery("#PageNavButtonTopBookingBookingOptionsNext, #PageNavButtonBottomBookingBookingOptionsNext").unbind("click").click(function () {
            if (!oCurrentShoppingBasket.IsBasketEmpty) {
                // ProceedToNextPage();
                if (ConfirmProductQuantitiesBeforeNextPage()) {

                    if (ConfirmBagsBeforeNextPage("GoToPage('" + NextPage + "')")) {
                        GoToPage(NextPage); 
                    }
                }
            }
            return false;
        });


        jQuery("#PageNavButtonTopBookingBookingOptionsBack, #PageNavButtonBottomBookingBookingOptionsBack").unbind("click").click(function () {
            // ReturnToPreviousPage();
            GoToPage(PrevPage); 
            //GoToPage("FlightSelect.aspx");
            return false;
        });

    } catch (e) { }
}

function InitPublicSeatsButtons(NextPage, PrevPage) {
    // next page buttons
    try {

        jQuery("#PageNavButtonTopBookingBookingSeatsNext, #PageNavButtonBottomBookingBookingSeatsNext").unbind("click").click(function () {
            if (!oCurrentShoppingBasket.IsBasketEmpty) {
                // ProceedToNextPage();
                if (ConfirmProductQuantitiesBeforeNextPage()) {

                    if (ConfirmSeatsBeforeNextPage("GoToPage('" + NextPage+ "')")) {
                        GoToPage(NextPage );
                    }
                }
            }
            return false;
        });


        jQuery("#PageNavButtonTopBookingBookingSeatsBack, #PageNavButtonBottomBookingBookingSeatsBack").unbind("click").click(function () {
            // ReturnToPreviousPage();
            GoToPage(PrevPage); 
            return false;
        });

    } catch (e) { }
}
﻿/*
    Products.js
*/



function InitProducts(bsWait) {

    $(".ProductQuanintyDropdown").unbind("change").change(function () {
        // 		"BW09_val_1_1"	
        var idStr = $(this).attr("id");
        if (idStr.length > 0) {
            var asLoc = idStr.split("_");

            if (asLoc.length > 3) {
                var id = asLoc[0];
                var seg = asLoc[2];
                var pax = asLoc[3];
                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "AddProduct";
                msg.controlMessage.Location = "#divProducts2";
                msg.controlMessage.ID = id;

                var quantity = $(this).val();

                 msg.controlMessage.Params = GetCheckedProductsArray(id, quantity, seg, pax);

                // get list of expanded boxes
                msg.controlMessage.BoxParams = GetExpandedBoxes(".prodTable", "prodCat");

                // need pax and seg relate
                RefreshControlMsg(msg, true, bsWait);

            }
            return false;
        }
    });

    $(".AddProductButton2").unbind("click").click(function () {
        disableButton(".AddProductButton2");
        var id = GetProductId($(this).attr("id"));
        var seg = GetSegNo($(this).attr("id"));
        var pax = GetPaxNo($(this).attr("id"));
        var msg = new Object;
        msg.controlMessage = new Object;
        msg.controlMessage.Name = "AddProduct";
        msg.controlMessage.Location = "#divProducts2";
        msg.controlMessage.ID = id;


        msg.controlMessage.Params = GetCheckedProductsArray(id, 1, seg, pax);

        // get products 
        //var prodArray = [];

        //if ((seg > 0) || (pax > 0)) {
        //    //var prodItem = new Object;

        //    //prodItem.Quantity = 1;
        //    //prodItem.ProductCode = id;
        //    //prodItem.SegNo = seg;
        //    //prodItem.PaxNo = pax;

        //    //prodArray.push(prodItem);
        //    msg.controlMessage.Params = GetCheckedProductsArray(id, 1, seg, pax);
        //} else {

        //    if ($('[name^="' + id + '_val"]').length > 0) {
        //        $('[name^="' + id + '_val"]').each(function () {
        //            var asProd = $(this).attr("id").split("_");

        //            var prodItem = new Object;
        //            prodItem.ProductCode = id;
        //            if ($(this).is('input[type=checkbox]')) {
        //                if ($(this).prop('checked') == true) {
        //                    prodItem.Quantity = 1;
        //                } else {
        //                    prodItem.Quantity = 0;
        //                }

        //            } else {
        //                prodItem.Quantity = $(this).val();
        //            }
        //            if (asProd.length > 2) {
        //                prodItem.SegNo = asProd[2];
        //            } else {
        //                prodItem.SegNo = 0;
        //            }
        //            if (asProd.length > 3) {
        //                prodItem.PaxNo = asProd[3];
        //            } else {
        //                prodItem.PaxNo = 0;
        //            }
        //            if (prodItem.Quantity > 0) {
        //                prodArray.push(prodItem);
        //            }
        //        });
        //    }
        //    msg.controlMessage.Params = prodArray;
        //}

        // get list of expanded boxes
        msg.controlMessage.BoxParams = GetExpandedBoxes(".prodTable", "prodCat");

        // need pax and seg relate
        RefreshControlMsg(msg, true, bsWait );
        return false;
    });

    $(".RemoveProductButton2").unbind("click").click(function () {
        disableButton(".RemoveProductButton2");

        var msg = new Object;
        var seg = GetSegNo($(this).attr("id"));
        var pax = GetPaxNo($(this).attr("id"));
        var id = GetProductId($(this).attr("id"))

        msg.controlMessage = new Object;
        msg.controlMessage.Name = "RemoveProduct";
        msg.controlMessage.Location = "#divProducts2";
        msg.controlMessage.ID = id;
        //msg.controlMessage.SegNo = seg;
        //msg.controlMessage.PaxNo = pax;
        // get products 

        //var prodArray = [];
        //var prodItem = new Object;
        //prodItem.ProductCode = GetProductId($(this).attr("id"));
        //prodItem.Quantity = $(this).val();
        //prodItem.ProductCode = id;
        //prodItem.SegNo = seg;
        //prodItem.PaxNo = pax;
        //prodArray.push(prodItem);

                
        msg.controlMessage.Params = GetCheckedProductsArray(id, 1, seg, pax);

        // get list of expanded boxes
        msg.controlMessage.BoxParams = GetExpandedBoxes(".prodTable", "prodCat");

        RefreshControlMsg(msg, true, bsWait);
        return false;
    });
    

    InitjQueryBox();
}

function GetCheckedProductsArray(id, quantity, seg, pax) {

    var prodArray = [];
    // check for check boxes (related products)
    if ($("input[type=checkbox][id^=cbLine_" + id + "]").length > 0) {
        if ($("input[type=checkbox][id^=cbLine_" + id + "]:checked").length == 0) {
            // nothing checked
            return false;
        }
        $("input[type=checkbox][id^=cbLine_" + id + "]:checked").each(function () {
            var cbidStr = $(this).attr("id");
            var cbasLoc = cbidStr.split("_");
            var prodItem = new Object;

            prodItem.Quantity = quantity;
            prodItem.ProductCode = $(this).val();;
            prodItem.SegNo = cbasLoc[2];
            prodItem.PaxNo = pax;
            prodArray.push(prodItem);
        });

    } else {
        var prodItem = new Object;
        prodItem.Quantity = quantity;
        prodItem.ProductCode = id;
        prodItem.SegNo = seg;
        prodItem.PaxNo = pax;
        prodArray.push(prodItem);
    }
    return prodArray;
}

function GetProductId(id) {
    if (id.length > 0) {
        var asLoc = id.split("_");
        if (asLoc.length > 1) {
            id = asLoc[1];
        }
    }
    return id;
}
function GetPaxNo(id) {
    if (id.length > 0) {
        var asLoc = id.split("_");
        if (asLoc.length > 3) {
            return asLoc[3].replace("Pax", ""); ;
        }
    }
    return 0;
}
function GetSegNo(id) {
    if (id.length > 0) {
        var asLoc = id.split("_");
        if (asLoc.length > 2) {
            return asLoc[2].replace("Seg", ""); ;
        }
    }
    return 0;
}

function GetProductQuantity(id) {
    return $('[name^="' + id + '_val"]').val();
}﻿
/* publicAgent.js */

function InitPublicAgent() {
    try { InitDatePickers(); } catch (e) { }
    hookupAdminGrid();
    try { InitCounter(); } catch (e) { }

    $(".ShowPnr, .OpenPNR").unbind('click').bind('click', function (e) {
        var formData = $("form").serializeArray();
        formData.push(GetKeyPair("pnr", $(this).data("pnr")));

        AdminAction("ButtonMenuClick", $(this).prop("id"), formData, "VARS.BookingLibrary.EF.Views.DashboardView", false, null, true);
        return false;
    });

    /* claim booking */
    $("#Name").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#CLAIMBOOKINGACTION").click();
            return false;
        }
    });
    $("#RLOC").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#BASICFINDACTION").click();
            return false;
        }
    });
    $('.btn').tooltip();

    $(".textEnterKeySubmit").unbind('keypress').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            //Enter keycode   
            e.preventDefault();
            $("#ADVANCEDFINDACTION").click();
            return false;
        }
    });
}
﻿var website = 'PUBLIC';
var ShowingResults = false;
function InitRefineSearch() {

    try {
        setTimeout(function () {
            // check screen size
            if ((getBreakpoint() === 'xs') && (ShowingResults === true)) {
                // collaspe search and basket panels
                panelCollapse($('.refine-search-panel .panel-heading'));
                panelCollapse($('.basket-panel .panel-heading'));
            }
        }, 1000);
    } catch (e) { }

    try {
        $("#Origin").change(function () {
            $(routes).each(function () {
                if (this.org === $("#Origin").val()) {
                    $("#Destination").empty();
                    $(this.dest).each(function () {
                        var arr = this.split("|");
                        if (arr[1] !== '') {
                            $("#Destination").append('<option value="' + arr[0] + '">' + arr[1] + '</option>');
                        }
                    });
                }
            });
        });


        //$('.trip-buttons label').unbind("click").click(function () {
        //    var x = 1;
        //    // change stopped working for toggle buttons, so improvise!
        //    setTimeout( function(){
        //        if ($('input[name=ReturnTrip]:radio:checked').val() != 'chkJourneyTypeReturn') {
        //            $('.RSReturning').hide()
        //        } else {
        //            $('.RSReturning').show();
        //        }
        //    }, 500);
        //});


        $('input[name=ReturnTrip]:radio').unbind("change").change(function () {
            if ($('input[name=ReturnTrip]:radio:checked').val() !== 'chkJourneyTypeReturn') {
                $('.RSReturning').hide()
            } else {
                $('.RSReturning').show();
            }
        });

        // init dates
        if (jQuery('input[name=ReturnTrip]:radio:checked').val() !== 'chkJourneyTypeReturn') {
            jQuery('.RSReturning').hide()
        } else {
            jQuery('.RSReturning').show();
        }

        jQuery("#departuredate").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+357d", autoclose: true });

        if (jQuery("#returndate").length > 0) {
            jQuery("#returndate").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+357d", autoclose: true });
        }

        jQuery("#departuredate").unbind("change").change(function () {
            var dSelectedDepartureDate = jQuery(this).datepicker("getDate");

            if (jQuery("#returndate").length > 0) {
                jQuery("#returndate").datepicker("option", "minDate", dSelectedDepartureDate);
                if ((jQuery('input[name=ReturnTrip]:radio:checked').val() === 'chkJourneyTypeReturn') && (jQuery("#returndate").val().length === 0)) {
                    jQuery("#returndate").datepicker("setDate", dSelectedDepartureDate);
                }
            }
        });
        /* prime date pickers */
        for (i = 0; i < 4; i++) {
            try {
                if (jQuery("#departuredate_" + i).hasClass('datepicker')) {
                    var dSelectedDepartureDate = jQuery("#departuredate_" + i).datepicker("getDate");
                    jQuery("#departuredate_" + (i + 1)).datepicker("option", "minDate", dSelectedDepartureDate);
                }
            } catch (e) {
                var x = 1;
            }
        }

        /* Date picker click */
        jQuery('input[name^="departuredate_"]').unbind("change").change(function () {
            var dSelectedDepartureDate;// = jQuery(this).datepicker("getDate");
            var row = parseInt($(this).attr("id").replace("departuredate_", ""), 10);
            if (row < 4) {
                dSelectedDepartureDate = jQuery(this).datepicker("getDate");
                jQuery("#departuredate_" + (row + 1)).datepicker("option", "minDate", dSelectedDepartureDate);
            }
        });

        jQuery("#NumberOfAdults").change(function () {
            var noAdultsSelected = parseInt(jQuery(this).val());

            if (noAdultsSelected < 0) { noAdultsSelected = 0; }
            if (jQuery("#NumberOfInfants").length > 0) {
                var fldInfants = jQuery("#NumberOfInfants");
                var noOptions = fldInfants.children().length;

                noAdultsSelected += 1;
                if (noOptions > (noAdultsSelected)) {
                    fldInfants.find("option:gt(" + (noAdultsSelected - 1).toString() + ")").remove();
                } else {
                    for (var i = noOptions; ((i < noAdultsSelected) && (i <= RequirementsProperties.MaxInfants)); i++) {
                        fldInfants.append("<option value\"" + i.toString() + "\">" + i.toString() + "</option>");
                    }
                }
            }
        });



        /* new style - send to view */

        $('#refineSearchFQTV').unbind("click").click(function (e) {
            if (CheckPaxCount() == false) {
                return false;
            }


            wsRq = new Object;
            //var wsRq = BuildAvSearch();
            wsRq.webServiceRequest = BuildAvSearch(e);

            wsRq.VarsSessionID = $('#VarsSessionID').val();
            wsRq.RedeemAirMiles = $('#RedeemAirMiles').is(":checked")

            wsRq.SearchUser = website;
            wsRq.SearchSource = "refine";
            wsRq.webServiceRequest.ID = $(this).prop("id");
            wsRq.webServiceRequest.Action = "ButtonMenuClick";
            wsRq.webServiceRequest.Data = "VARS.BookingLibrary.EF.Views.RefineSearchView";

            var rq = $.toJSON(wsRq);

            SendAjaxRequest(GetAjaxUrl(), rq, "html", AdminDoSubmit_onSuccess, AdminDoSubmit_onError, null, true, null, false, true);
            return false;
        });

        $('#refineSearchMMB,#refineSearchFQTVMMB').unbind("click").click(function () {
            //if (CheckPaxCount() == false) {
            //    return false;
            //}

            return refineSearchMMB_Click($(this).prop("id"),null, null);

            //var wsRq = new Object;
            //wsRq.webServiceRequest = new Object;

            //var arDeptDate = [], arRetDate = [];
            //arDeptDate.push(GetEnglishDate($('#departuredate_0')));

            //if (typeof ($('#departuredate_1')) != 'undefined') {
            //    arRetDate.push(GetEnglishDate($('#departuredate_1')));
            //    arDeptDate.push(GetEnglishDate($('#departuredate_1')));
            //}
            //// multi city
            //if (typeof ($('#departuredate_2')) != 'undefined') {
            //    arRetDate.push(GetEnglishDate($('#departuredate_2')));
            //    arDeptDate.push(GetEnglishDate($('#departuredate_2')));
            //}
            //if (typeof ($('#departuredate_3')) != 'undefined') {
            //    arRetDate.push(GetEnglishDate($('#departuredate_3')));
            //    arDeptDate.push(GetEnglishDate($('#departuredate_3')));
            //}
            //wsRq.webServiceRequest.DepartureDate = arDeptDate;
            //wsRq.webServiceRequest.ReturnDate = arRetDate;

            //if ($('#csReqCurrency').length) {
            //    wsRq.webServiceRequest.Currency = $('#csReqCurrency').val();
            //} else {
            //    wsRq.webServiceRequest.Currency = '';
            //}

            //// agent mode ?
            //var arOrigin = [], arDest = [];
            //if (typeof ($('#Origin')) != 'undefined') {
            //    arOrigin.push($('#Origin').val());
            //    wsRq.webServiceRequest.Origin = arOrigin;

            //    arDest.push($('#Destination').val());
            //    wsRq.webServiceRequest.Destination = arDest;

            //}


            //wsRq.webServiceRequest.ID = $(this).prop("id");
            //wsRq.webServiceRequest.Action = "ButtonMenuClick";
            //wsRq.webServiceRequest.Data = "VARS.BookingLibrary.EF.Views.RefineSearchView";

            //var rq = $.toJSON(wsRq);

            //SendAjaxRequest(GetAjaxUrl(), rq, "html", AdminDoSubmit_onSuccess, AdminDoSubmit_onError, null, true, null, false, true);
            //return false;
        });

        $('#refineSearchButton').unbind("click").click(function (e) {

            return refineSearchButton_Click(e, null, null);

            //if (CheckPaxCount() == false) {
            //    return false;
            //}

            //var wsRq = BuildAvSearch(e);
            //wsRq.SearchUser = website ;
            //wsRq.SearchSource = "refine";
            //wsRq.recaptcha = 'SHOW';


            //if (wsRq != false) {
            //    var url = "WebServices";
            //    if ((new RegExp("/m/", "i").test(window.location.href)) || (new RegExp("/b/", "i").test(window.location.href)) || (new RegExp("/Agent/", "i").test(window.location.href))) {
            //        // agent page
            //        url = "../" + url;
            //    }
            //    var sFormData = "{'FormData':" + $.toJSON(wsRq) + ",'IsMMBChangeFlightMode':false, 'IsRefineSerach': true}";
            //    SendAjaxRequest(url + "/AvailabilityWS.asmx/GetFlightAvailability", sFormData, null, refineSearchButton_onSuccess, null, null, true, null, false, true);
            //}
            //MovingWithinWebsite = true;
            //return false;
        });

        InitPanels();

        jQuery(document).ready(function () {
            setTimeout(function () {
                InitChildCheck();
            }, 1000);
        });

        // show init complete
        $("#RefineSearchCheck").remove();
    } catch (e) {
        $("#RefineSearchCheck span").html(e.message);
    }
}

function refineSearchMMB_Click(id,dtDeptDate, dtRetDate) {

    var wsRq = new Object;
    wsRq.webServiceRequest = new Object;

    var arDeptDate = [], arRetDate = [];
    arDeptDate.push(GetEnglishDate($('#departuredate_0')));

    if (typeof ($('#departuredate_1')) != 'undefined') {
        arRetDate.push(GetEnglishDate($('#departuredate_1')));
        arDeptDate.push(GetEnglishDate($('#departuredate_1')));
    }
    // multi city
    if (typeof ($('#departuredate_2')) != 'undefined') {
        arRetDate.push(GetEnglishDate($('#departuredate_2')));
        arDeptDate.push(GetEnglishDate($('#departuredate_2')));
    }
    if (typeof ($('#departuredate_3')) != 'undefined') {
        arRetDate.push(GetEnglishDate($('#departuredate_3')));
        arDeptDate.push(GetEnglishDate($('#departuredate_3')));
    }
    wsRq.webServiceRequest.DepartureDate = arDeptDate;
    wsRq.webServiceRequest.ReturnDate = arRetDate;

    if ($('#csReqCurrency').length) {
        wsRq.webServiceRequest.Currency = $('#csReqCurrency').val();
    } else {
        wsRq.webServiceRequest.Currency = '';
    }

    // agent mode ?
    var arOrigin = [], arDest = [];
    if (typeof ($('#Origin')) != 'undefined') {
        arOrigin.push($('#Origin').val());
        wsRq.webServiceRequest.Origin = arOrigin;

        arDest.push($('#Destination').val());
        wsRq.webServiceRequest.Destination = arDest;

    }

    if (dtDeptDate) {
        wsRq.webServiceRequest.DepartureDate[0] = dtDeptDate;
        wsRq.webServiceRequest.ReturnDate[0] = dtDeptDate;
    }

    if (dtRetDate) {
        wsRq.webServiceRequest.DepartureDate[1] = dtRetDate;
        wsRq.webServiceRequest.ReturnDate[1] = dtRetDate;
    }


    wsRq.webServiceRequest.ID = id; // $(this).prop("id");
    wsRq.webServiceRequest.Action = "ButtonMenuClick";
    wsRq.webServiceRequest.Data = "VARS.BookingLibrary.EF.Views.RefineSearchView";

    var rq = $.toJSON(wsRq);

    SendAjaxRequest(GetAjaxUrl(), rq, "html", AdminDoSubmit_onSuccess, AdminDoSubmit_onError, null, true, null, false, true);
    return false;
}

function refineSearchButton_Click(e,dtDeptDate, dtRetDate) {

    if ($(".paxSelectControl").length > 0) {

        if (CheckPaxCount() == false) {
            return false;
        }
    }

    var wsRq = BuildAvSearch(e);
    wsRq.SearchUser = website;
    wsRq.SearchSource = "refine";
    wsRq.recaptcha = 'SHOW';

    if (dtDeptDate) {
        wsRq.DepartureDate[0] = dtDeptDate;
    }

    if (dtRetDate) {
        wsRq.ReturnDate[0] = dtRetDate;
    }

    if (wsRq != false) {
        var url = "WebServices";
        if ((new RegExp("/m/", "i").test(window.location.href)) || (new RegExp("/b/", "i").test(window.location.href)) || (new RegExp("/Agent/", "i").test(window.location.href))) {
            // agent page
            url = "../" + url;
        }

        var sFormData = "{'FormData':" + $.toJSON(wsRq) + ",'IsMMBChangeFlightMode':false, 'IsRefineSerach': true}";
        SendAjaxRequest(url + "/AvailabilityWS.asmx/GetFlightAvailability", sFormData, null, refineSearchButton_onSuccess, null, null, true, null, false, true);
    }
    MovingWithinWebsite = true;
    return false;
}

function CheckPaxCount() {
    var noPax = 0;
    $(".paxSelectControl").each(function () {
        var val = $(this).val();
        noPax += parseInt(val);
    });
    if (noPax == 0) {
        bootbox.alert({ message: ChangeBookingOptionsTranslations.SelectPaxMessage, title: "Alert" });
        //showMessageBS(SelectPaxMessage);
        return false;
    }
    return true;
}


function refineSearchButton_onSuccess(msg) {

    try {
        if (msg.Result == 'OK') {
            if (msg.NextURL != '') {
                if ((window.location.pathname.toUpperCase().indexOf("FLIGHTCAL") >= 0) && (msg.NextURL.toUpperCase().indexOf("FLIGHTCAL") >= 0)) {
                    ResetBasketBS();
                    // no change page needed
                    $(msg.DisplayLoation).html(msg.Data2);
                    OnPageLoad();
                } else {
                    PostToPage(msg.NextURL);
                    try { ShowLoadingProgressDialog(flightSelectPageTranslationsMsgs.LoadingFlightsMessage.html); } catch (e) { }
                }
            } else {
                OnPageLoad();
            }
        } else {
            ShowIBEModalDialog(msg.ErrorMsg);
        }
    } catch (e) { }

}
function  getBreakpoint() {
    var w = $(document).innerWidth();
    if (w < 768) {
        return 'xs';
    } else if (w < 992) {
        return 'sm';
    } else if (w < 1200) {
        return 'md';
    } else {
        return 'lg';
    }
}
﻿
function InitRefundBooking() {
    jQuery("input:not(:disabled)[id=chkChangeFlightSelector], input:not(:disabled)[id^=chkRefundProduct][type=checkbox]").click(function () {
        var oCheckBox = jQuery(this).get(0);
        var oParentRow = jQuery(this).parent().parent();

        if (oCheckBox.checked) {
            oParentRow.addClass("selected");
        } else {
            oParentRow.removeClass("selected");
        }
    });

    jQuery("#btnChangeFlightSelection").click(function () {
        RefundItem("Flight");
    });
    jQuery("input[type=button][id=btnRefundSelectedProducts]").click(function () {
        RefundItem("Product");
    });
}

function RefundItem(itemType) {
    var sFormData = "";
    var sPleaseWaitMessage = "";
    var sRefundItemIndices = "";
    var jQueryItemSelector = "";
    var oRegExp = new RegExp("Flight", "i");
    var oRegExp2 = new RegExp("'", "g");

    try {
        if (oRegExp.test(itemType)) {
            jQueryItemSelector = "input:not(:disabled)[id=chkChangeFlightSelector]:checked";
        } else {
            //jQueryItemSelector = ":not(input[id^=chkRefundProduct][type=checkbox]:disabled):checked";
            jQueryItemSelector = "input:not(:disabled)[id^=chkRefundProduct][type=checkbox]:checked";
        }

        jQuery(jQueryItemSelector).each(function () {
            if (sRefundItemIndices.length > 0) {
                sRefundItemIndices += ",";
            }

            if (oRegExp.test(itemType)) {
                var flightData = jQuery.parseJSON(jQuery(this).val().toString().replace(oRegExp2, "\""));
                sRefundItemIndices += flightData.FlightSegmentIndex;
            } else {
                sRefundItemIndices += jQuery(this).val();
            }
        });

        sFormData += "\"Refund" + itemType + "Indices\" : [" + sRefundItemIndices + "]";
        sFormData = "{ 'FormData': '{" + sFormData + "}' }";
        var wsRq = new Object;
        wsRq.refundRequest = new Object;
        if (itemType == "Flight") {
            wsRq.refundRequest.RefundFlightIndicies = sRefundItemIndices;
        } else {
            wsRq.refundRequest.RefundProductIndicies = sRefundItemIndices;
        }
        sFormData = $.toJSON(wsRq);

        try { sPleaseWaitMessage = RefundBookingPageTranslations.DefaultRefundItemMessage; } catch (e) { }

        // if (oRegExp.test(itemType)) {
        SendAjaxRequest("../WebServices/AvailabilityWS.asmx/RefundFlight", sFormData, null, Refund_onSuccess, null, "", true, sPleaseWaitMessage);
        //} else {
        //SendAjaxRequest("../WebServices/BookingProductsWS.asmx/RefundProduct", sFormData, null, RefundItem_onSuccess, null, "", true, sPleaseWaitMessage);
        //}
    } catch (e) { }
}

function Refund_onSuccess(msg) {
    GoToPage(msg.NextURL);
    //    RefundItem("Product");
}

﻿/*
    SeatPlan.js
*/
var SelectEmergencyExitMsg = "";
var UseVerboseFlightSelectMessages = false;

function HelpSeatMsg(txt) {
    if ((txt !== '') && (txt !== 'undefined') && (txt !== null)) {
        setTimeout(function () {

            Lobibox.notify('info', {
                msg: txt,
                sound: false
            });
        }, 10);
    }
}

/* Bootstrap version */
function InitSeats() {

    try {

        
        $(".paxRow").unbind("click").click(function () {
            $(".SeatPaxWebPart").removeClass("ui-state-active");
            $(".paxRow").removeClass("ui-state-highlight");

            $(".list-group-item").removeClass("active");
            if ($(this).hasClass('list-group-item')) {
                $(this).addClass("active");
            } else {
                $(this).closest(".ui-widget-content").prev().addClass("ui-state-active");
                $(this).addClass("ui-state-highlight");
            }

            PaxStatus($(this).children().find(".paxNo").val());
            var planSegNo = $(".planSegNo").val();
            if (planSegNo !== $(this).children().find(".segNo").val()) {
                // load correct plan for this seg
                // RefreshControl("SEATLAYOUT", ".spDivRight", null, $(this).children().find(".segNo").val());

                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "SEATLAYOUT";
                msg.controlMessage.Location = ".seatDiv";
                msg.controlMessage.SegNo = $(this).children().find(".segNo").val();
                msg.controlMessage.PaxNo = $(this).children().find(".paxNo").val();

                RefreshControlMsg(msg,false, true)
            }
            displaySpHelp();
        });

        $(".DeleteSeat").unbind("click").click(function () {
            var planSegNo = parseInt($(".spSegment").val());
            if (planSegNo !== parseInt($(this).data("segno"))) {
                // load correct plan for this seg
                // RefreshControl("SEATLAYOUT", ".spDivRight", null, $(this).children().find(".segNo").val());
            } else {
                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "RELEASESEAT";
                msg.controlMessage.Location = ".seatDiv";
                msg.controlMessage.ID = $(this).data("seatlineno");
                msg.controlMessage.SegNo = $(this).data("segno");
                msg.controlMessage.PaxNo = $(this).data("paxno");
                //msg.controlMessage.PaxNo = $(this).children().find(".paxNo").val();

                RefreshControlMsg(msg, false, true)
            }
            return false;
        });

        $(".divSeatPlan .freeSeat, .divSeatPlan .freeEmergencySeat, .btn-seat").not("[data-seatkey]").hover(
            function () {
                // over
                var newSeat = $(this).html();
                $(this).addClass("vars-hover");
                SeatNo(newSeat);
            },
            function () {
                // out
                $(this).removeClass("vars-hover");
                SeatStatus("");
            }
        );

        $(".btn-seat.disabled").unbind("click").click(function () {
            // stop submitting the page
            return false;
        });
        
        //Ensure That Seat Key Button mouse events are disabled
        $(".btn-seat[data-seatkey]").css('pointer-events', 'none');
        
        $(".divSeatPlan .freeSeat, .divSeatPlan .freeEmergencySeat, .divSeatPlan .seat-free button, .divSeatPlan .seat-emergency button, .btn-seat:not(.disabled)").not("[data-seatkey]").unbind("click").click(function () {
            if (($(this).hasClass("freeEmergencySeat") || $(this).parent().hasClass("seat-emergency")) && ($(this).hasClass("Confirm") || $(this).parent().hasClass("Confirm"))) {
                var newSeat = $.trim($(this).html());
                var pax = $(".spPax").val();

                //var oButtons = {
                //    "OK": function () {
                //        jQuery(this).dialog("destroy");

                //        SeatStatus("Selected " + newSeat);

                //        var msg = new Object;
                //        msg.controlMessage = new Object;
                //        msg.controlMessage.Name = "RESERVESEAT";
                //            msg.controlMessage.Location = ".seatDiv";
                //        msg.controlMessage.SegNo = $(".spSegment").val();
                //        msg.controlMessage.PaxNo = $(".spPax").val();
                //        msg.controlMessage.Data = newSeat;

                //        RefreshControlMsg(msg,false,  true)
                //        return false;
                //    },
                //    "Cancel": function () {
                //        jQuery(this).dialog("destroy");
                //    }
                //};
                //ShowModalDialog(SelectEmergencyExitMsg, "", "auto", "auto", oButtons);

                SeatTranslationsMsgs.SelectEmergencyExitMsg.OkAction = "EmergencyOkButtonClick('" + newSeat + "')";
                SeatTranslationsMsgs.SelectEmergencyExitMsg.CancelButtonText = "Cancel";
                modalDialog(SeatTranslationsMsgs.SelectEmergencyExitMsg);
            }
            else if ($(this).hasClass("prm-seat") || $(this).parent().hasClass("prm-seat")) {

                var newSeat = $.trim($(this).html());
                var pax = $(".spPax").val();

                SeatTranslationsMsgs.SelectPRMSeatMsg.OkAction = "EmergencyOkButtonClick('" + newSeat + "')";
                SeatTranslationsMsgs.SelectPRMSeatMsg.CancelButtonText = "Cancel";
                modalDialog(SeatTranslationsMsgs.SelectPRMSeatMsg);

            } else {
                newSeat = $(this).html();
                SeatStatus("Selected " + newSeat);

                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "RESERVESEAT";
                    msg.controlMessage.Location = ".seatDiv";
                msg.controlMessage.SegNo = $(".spSegment").val();
                msg.controlMessage.PaxNo = $(".spPax").val();
                msg.controlMessage.Data = newSeat;

                RefreshControlMsg(msg,false, true)
                return false;
            }
        });

        $('.scroll-div').css('width', $('#tblSeatPlan').outerWidth());

        $(function () {
            $(".tablecontainer-topscroll").scroll(function () {
                $(".tablecontainer")
                    .scrollLeft($(".tablecontainer-topscroll").scrollLeft());
            });

            $(".tablecontainer").scroll(function () {
                $(".tablecontainer-topscroll")
                    .scrollLeft($(".tablecontainer").scrollLeft());
            });

        });

        //$(window).load(function () {
            $('.scroll-div').css('width', $('.dynamic-div').outerWidth());
        //});

        InitPanels();
       
       
    } catch (e) { var x = 1; }
}

function ReloadSeats() {
    InitSelectSeat();
    try { InitFareRules(); } catch (e) { var x = 1;}

}

/* jQuery UI Version */
function InitSelectSeat() {
    try {
        setThemeColours();


        // size cols
        var Parentw = $(".sptdCell").innerWidth();
        if ((Parentw === null) || (Parentw === 0)) {
            Parentw = $("#GMDialog").innerWidth() - 40;
        }
        var col2w = $(".spDivRight").outerWidth();
        $(".spDivLeft").width(Parentw - col2w - 10);

        $(".SelectSeat").unbind("click").click(function () {
            // RefreshControl("SEATPLAN", "#divBookingFareSummary");
            GoToPage("ChangeBookingSeats.aspx");
            return false;
        });
        $(".SelectSeatAsOption").unbind("click").click(function () {
            // RefreshControl("SEATPLAN", "#divBookingFareSummary");
            GoToPage("changebookingoptions.aspx");
            return false;
        });

        


        $(".btnCancelSeatChange").unbind("click").click(function () {
            RefreshControl("SEATCANCEL", ".spDivRight")
            return false;
        });

        

        $(".paxRow").unbind("click").click(function () {
            $(".SeatPaxWebPart").removeClass("ui-state-active");
            $(".paxRow").removeClass("ui-state-highlight");

            $(".list-group-item").removeClass("active");
            if ($(this).hasClass('list-group-item')) {
                $(this).addClass("active");
            } else {
                $(this).closest(".ui-widget-content").prev().addClass("ui-state-active");
                $(this).addClass("ui-state-highlight");
            }

            PaxStatus($(this).children().find(".paxNo").val());
            var planSegNo = $(".planSegNo").val();
            if (planSegNo !== $(this).children().find(".segNo").val()) {
                // load correct plan for this seg
                // RefreshControl("SEATLAYOUT", ".spDivRight", null, $(this).children().find(".segNo").val());

                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "SEATLAYOUT";
                msg.controlMessage.Location = ".spDivRight";
                msg.controlMessage.SegNo = $(this).children().find(".segNo").val();
                msg.controlMessage.PaxNo = $(this).children().find(".paxNo").val();

                RefreshControlMsg(msg,true)
            }
            displaySpHelp();
        });

        $(".paxRow .DeleteSeat").unbind("click").click(function () {
            var planSegNo = $(".planSegNo").val();
            if (planSegNo !== $(this).children().find(".segNo").val()) {
                // load correct plan for this seg
                // RefreshControl("SEATLAYOUT", ".spDivRight", null, $(this).children().find(".segNo").val());
                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "RELEASESEAT";
                msg.controlMessage.Location = ".sptdCell";
                msg.controlMessage.ID = $(this).attr("id");
                msg.controlMessage.SegNo = $(this).data("val");
                //msg.controlMessage.PaxNo = $(this).children().find(".paxNo").val();

                RefreshControlMsg(msg, true)
            }
            return false;
        });



        $(".divSeatPlan .freeSeat, .divSeatPlan .freeEmergencySeat, .btn-seat").not("[data-seatkey]").hover(
            function () {
                // over
                var newSeat = $(this).html();
                $(this).addClass("vars-hover");
                SeatNo(newSeat);
            },
            function () {
                // out
                $(this).removeClass("vars-hover");
                SeatStatus("");
                
            }
        );

        $(".divSeatPlan .freeSeat, .divSeatPlan .freeEmergencySeat, .divSeatPlan .seat-free button, .divSeatPlan .seat-emergency button, .btn-seat").not("[data-seatkey]").unbind("click").click(function () {
            if (($(this).hasClass("freeEmergencySeat") || $(this).parent().hasClass("seat-emergency")) && ($(this).hasClass("Confirm") || $(this).parent().hasClass("Confirm"))) {
                var newSeat = $.trim($(this).html());
                var oButtons = {
                    "OK": function () {
                        jQuery(this).dialog("destroy");
                      
                        SeatStatus("Selected " + newSeat);

                        var msg = new Object;
                        msg.controlMessage = new Object;
                        msg.controlMessage.Name = "RESERVESEAT";
                        if ($(".sptdCell").length > 0) {
                            msg.controlMessage.Location = ".sptdCell";
                        } else {
                            msg.controlMessage.Location = "#GMDialog";
                        }
                        msg.controlMessage.SegNo = $(".spSegment").html();
                        msg.controlMessage.PaxNo = $(".spPax").html();
                        msg.controlMessage.Data = newSeat;

                        RefreshControlMsg(msg, true)
                        return false;
                    },
                    "Cancel": function () {
                        jQuery(this).dialog("destroy");
                    }
                };
                //ShowModalDialog(SelectEmergencyExitMsg, "", "auto", "auto", oButtons);
                SeatTranslationsMsgs.SelectEmergencyExitMsg.OkAction = "EmergencyOkButtonClick('" + newSeat + "')";
                SeatTranslationsMsgs.SelectEmergencyExitMsg.CancelButtonText = "Cancel";
                modalDialog(SeatTranslationsMsgs.SelectEmergencyExitMsg);

            } else {
                newSeat = $(this).html();
                SeatStatus("Selected " + newSeat);

                var msg = new Object;
                msg.controlMessage = new Object;
                msg.controlMessage.Name = "RESERVESEAT";
                if ($(".sptdCell").length > 0) {
                    msg.controlMessage.Location = ".sptdCell";
                } else {
                    msg.controlMessage.Location = "#GMDialog";
                }
                msg.controlMessage.SegNo = $(".spSegment").html();
                msg.controlMessage.PaxNo = $(".spPax").html();
                msg.controlMessage.Data = newSeat;

                RefreshControlMsg(msg, true)
                return false;
            }
        });

        displaySpHelp();

    } catch (e) { var x = 1;}
}
function EmergencyOkButtonClick(newSeat) {
    var msg = new Object;
    msg.controlMessage = new Object;
    msg.controlMessage.Name = "RESERVESEAT";
    if ($(".sptdCell").length > 0) {
        msg.controlMessage.Location = ".sptdCell";
    } else {
        msg.controlMessage.Location = "#GMDialog";
    }
    // msg.controlMessage.SegNo = $(".spSegment").html();
    //msg.controlMessage.PaxNo = $(".spPax").html();
    msg.controlMessage.SegNo = $(".spSegment").val();
    msg.controlMessage.PaxNo = $(".spPax").val();
    msg.controlMessage.Data = newSeat;

    //hide modal first, then call to change seat......
    $("#ModalDialog").modal('hide')    
    sleepFor(500)
    RefreshControlMsg(msg, false, true)
    //RefreshControlMsg(msg, false, true)
}

function displaySpHelp() {
    try {
        $(".spHelp span").hide();
        // display help
        var NoToSeat = $("td .SeatNo").length;
        var NoNotSeated = $('td .SeatNo').filter(function (idx) { return $(this).text().trim() === "" }).length;
        var NoSeated = NoToSeat - NoNotSeated;

        if (NoNotSeated === 0) {
            // none unselected
            $(".spComplete").show();
            $(".spHelp span.thumbs_up").show();
        } else {
            if (($(".paxRow.unseated.ui-state-highlight").length === 0) && ($(".paxRow.unseated").length > 0)) {
                if ((NoToSeat > 1) && (NoSeated > 0)) {
                    $(".spSelNextPax").show();
                } else {
                    $(".spSelPax").show();
                }
                $(".spHelp span.hand_down").show();
            } else if ($(".paxRow.ui-state-highlight").length > 0) {
                $(".spSelSeat").show();
                $(".spHelp span.hand_right").show();
            }
        }
    } catch (e) { var x = 1;}


}

function SeatStatus(text) {
    $(".spStatus").html(text);
}
function SeatNo(text) {
    $(".spSeat").html(text);

}
function PaxStatus(text) {
    $(".spPax").html(text);
}
function ShowCancelButton() {
    $(".spHelpButtons").show();
    $(".spHelpButtons").find("span").show();
}

﻿var UserCurrentLanguage = null;
var iAdults = 0;
var iChildren = 0;
var iSmallChildren = 0;
var iInfants = 0;
var iSeniors = 0;
var iTeachers = 0;
var iYouths = 0;
var iStudents = 0;
var iSeatedInfants = 0;

/*  these vaes are changed by VB code! */
var IBEDefaultErrorMessage = "An error has occurred, please contact customer services.";
var defaultTimeoutMessage = "Request timed out - please try again";
var DefaultPleaseWaitMessage = "Please wait...";
var AgentDialogDefaultTitle = null;
var oCurrentShoppingBasket = { "IsBasketEmpty": true, "ItineraryChanges": false, "AdditionalItems": false, "HasOutstandingAmount": false };
var ShoppingBasket2 = { "IsBasketEmpty": true, "UseBasket2": false };
var oCurrentTheme = { "SpinnerIcon": 8 };
var useNewBasket = false;
var bKeepAliveOn = true;
var GeneralStrings = { "OK": "OK", "YES" :"Yes","CANCEL":"Cancel","NO":"No","SAVE": "Save","CONFIRM":"Confirm", "DELETE":"Delete" };

var RequirementsReferralCode = "";

var DatePickerOptions = { "ShowCalendarIcon": false, "CalendarIconURL": "../themes/cal.bmp" };
var DialogDefaultTitle = "Error";

var DialogSize = { height: 150, width: 350 };
var UseBootstrap = false;




// stop disabled anchor click
//jQuery('body').on('click', 'a.ui-state-disabled', function (event) {
//    event.preventDefault();
//});

function disableButton(selector) {
    $(selector).removeClass("ui-state-active").addClass("ui-state-disabled");
    $(selector).prop('disabled', true);
}

function enableButton(selector) {
    $(selector).removeClass("ui-state-disabled").addClass("ui-state-active");
    $(selector).prop('disabled', false);
}
function enableButtons() {
    $('button.ui-state-disabled, a.ui-state-disabled').prop('disabled', false);
    $('a.ui-state-disabled').removeClass("ui-state-disabled").addClass("ui-state-active");
    $('button.ui-state-disabled').removeClass("ui-state-disabled").addClass("ui-state-active");

}
/*
    fix layout so right side fills space for all widths
*/
function InitialiseIBE() {

    // using IBM.master
    if ($(".IBEMasterPageContent").length > 0) {
        var contentWidth = $(".IBEMasterPageContent").width();
        var col1Width = $(".IBEMasterBodyContentLeft").outerWidth();
        var col2Width = $(".IBEMasterBodyContentCentre").outerWidth();
        var col3Padding = parseInt($(".IBEMasterBodyContentRight").css('padding-left'), 10) + parseInt($(".IBEMasterBodyContentRight").css('padding-right'), 10);

        // set col3 to use all remaining
        // $(".IBEMasterBodyContentRight").width(contentWidth - col1Width - col2Width - col3Padding);

    }
    // using Agent.master
    if ( ($(".AgentMasterPageContent").length > 0)  ||  ($(".MMBMasterPageContent").length > 0) ){

        var masterWidth;
        var selector;
        if ( $(".AgentMasterPageContent").length > 0) {
            selector = ".Agent";
        } else {
            selector = ".MMB";
        }
         
         masterWidth= $(selector + "MasterPageContent").width();
        // set up main 
        var tabPadding = parseInt($( selector + "MasterPageTableContent").css('padding-left'), 10) + parseInt($(selector + "MasterPageTableContent").css('padding-right'), 10);
        $(selector + "MasterPageTableContent").width(masterWidth - tabPadding);
        var tabWidth = $(selector + "MasterPageTableContent").width();
        var col1Width = $(".MMBMasterPageContentColumn1").outerWidth();
        var col2Width = $(".MMBMasterPageContentColumn2").outerWidth();
        var col3Padding = parseInt($(".MMBMasterPageContentColumn3").css('padding-left'), 10) + parseInt($(".MMBMasterPageContentColumn3").css('padding-right'), 10);
        $(".MMBMasterPageContentColumn3").width(tabWidth - col1Width - col2Width - col3Padding -2); // 2 for rounding!
    }

    // hover effects
    //jQuery(".ui-button.ui-state-active").hover(
	//		    function () { jQuery(this).removeClass("ui-state-active").addClass("ui-state-hover"); },
    //            function () { jQuery(this).removeClass("ui-state-hover").addClass("ui-state-active"); }

	//    ); //end hover
    jQuery(".ui-button.ui-state-default").hover(
			    function () { jQuery(this).addClass("ui-state-hover"); },
                function () { jQuery(this).removeClass("ui-state-hover"); }

	    ); //end hover

    jQuery(".HelpExtPageDlg").unbind("click").click(function () {
        // show dialog
        RefreshControl("HelpExtPageDlg", $(this).attr("id"));
    });
    jQuery(".HelpPageDlg").unbind("click").click(function () {
        // show dialog
        RefreshControl("Help", $(this).attr("id"));
    });
    VarsSession();
}



function InitialiseDatePicker(minDateVal, maxDateVal) {
    if (window.console) console.log('InitialiseDatePicker');
    minDateVal = (typeof (minDateVal) == "undefined") ? "-0d" : minDateVal;
    maxDateVal = (typeof (maxDateVal) == "undefined") ? "+1y" : maxDateVal;

    var datePickerCloseText = "Close";
    jQuery.datepicker.setDefaults(jQuery.datepicker.regional['']);
    try {
        if ((UserCurrentLanguage != null) && (UserCurrentLanguage != '')) {
            try {
                if ($.datepicker.regional[UserCurrentLanguage] != null )
                {
                $.datepicker.setDefaults($.datepicker.regional[UserCurrentLanguage]);
                }
                
            } catch (e) { }
        }
        
    } catch (e) {
    }
    
    // Set the text for the Close Button
    try { datePickerCloseText = jQuery.datepicker.regional[UserCurrentLanguage].closeText; } catch (e) { }
    if ((typeof (datePickerCloseText) == "undefined") || (datePickerCloseText == null) || (datePickerCloseText == "") || ((new RegExp("(Done)", "i")).test(datePickerCloseText))) { datePickerCloseText = "Close"; }

    // Initialise the datepicker object
    if (DatePickerOptions.ShowCalendarIcon) {
        jQuery(".datepicker").datepicker({dateFormat: "dd-M-yy", minDate: minDateVal, maxDate: maxDateVal, closeText: datePickerCloseText, showButtonPanel: true, showOn: "both", buttonImage: DatePickerOptions.CalendarIconURL, buttonImageOnly: true });
    } else {
        jQuery(".datepicker").datepicker({dateFormat: "dd-M-yy", minDate: minDateVal, maxDate: maxDateVal, closeText: datePickerCloseText, showButtonPanel: true});
    }
    $(".datepickerlong").datepicker({dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+10y", closeText: "Close", showButtonPanel: true, changeYear: true });

    jQuery(".datepicker").attr("readonly", "readonly");

    // commented as does not seem to do any more than break dates far in the past -- CJ
    //jQuery(".datepicker").each(function() {
    //    var datePickerSelectedDate = ConvertDatePickerTextToDate(jQuery(this)); //.datepicker("getDate");
    //    if (UserCurrentLanguage != null) { jQuery(this).datepicker(jQuery.datepicker.regional[UserCurrentLanguage]); }
    //    jQuery(this).datepicker("setDate", datePickerSelectedDate); // so datepicker will translate initially set date
    //});

    // fix for IE transparency bug.
    jQuery(".datepicker").unbind("click").click(function () {
        try {
            if (jQuery(".datepicker").datepicker("widget").css("background-color").toLowerCase() == "transparent") {
                jQuery(".datepicker").datepicker("widget").css("background-color", "").addClass("vars-ui-datepicker");
            }
        } catch (e) { }
    });

    //jQuery(".datepicker").datepicker("option", "numberOfMonths", 2);

}

function ConvertDatePickerTextToDate(datePickerObject) {
    var dateValue = null;
    try {
        // assumes value is in format dd-MMM-yyyy
        if (datePickerObject != null) {
            var dateFieldValue = datePickerObject.val();
            var asDateValueElements;
            var listMonthNames = "";
            var sMonthName = "";
            var iMonthNameIndex;

            if ((/(\d{1,2})(-)(\w+)(-)(\d{2}|\d{4})/i).test(dateFieldValue)) { // {3}
                // dd-MMM-yyyy format (the MMM bit may be longer/shorter if this is a translated date).
                listMonthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
                asDateValueElements = dateFieldValue.split("-");
                iMonthNameIndex = jQuery.inArray(asDateValueElements[1].toLowerCase(), listMonthNames);

                if ((iMonthNameIndex == -1) && (UserCurrentLanguage != null)) {
                    // probably a translated date.
                    dateFieldValue = GetEnglishDate(datePickerObject);
                    if (dateFieldValue.length >= 0) {
                        asDateValueElements = dateFieldValue.split("-");
                        iMonthNameIndex = jQuery.inArray(asDateValueElements[1].toLowerCase(), listMonthNames);
                    }
                }

                if (iMonthNameIndex >= 0) {
                    dateValue = new Date(parseInt(asDateValueElements[2], 10), iMonthNameIndex, parseInt(asDateValueElements[0], 10), 0, 0, 0);
                }
            }
        }
    } catch (e) { }
    return dateValue;
}

function GetEnglishDate(dateField) {
    var dateValue;
    var monthNamesArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    try {
        dateValue = dateField.datepicker("getDate");
        if (dateValue != null) {
            dateValue = dateValue.getDate() + "-" + monthNamesArray[dateValue.getMonth()] + "-" + dateValue.getFullYear();
        }
    } catch (e) {
        dateValue = '';
    }

    return dateValue;
}

Date.prototype.addDays = function addDays(days) {
    var d = this;
    try {
        if (!isNaN(days)) {
            var iSecs = Date.parse(this);
            iSecs += (parseInt(days, 10) * 24 * 60 * 60 * 1000);
            d = new Date(iSecs);
        }
    } catch (e) { }
    return d;
};

// Custom Events
function CustomEvent() {
    this.eventHandlers = new Array();
}

CustomEvent.prototype.addHandler = function (eventHandler) {
    var eventHandlerFound = false;

    try {
        for (var i = 0; i < this.eventHandlers.length; i++) {
            if (this.eventHandlers[i] == eventHandler) {
                this.eventHandlers.splice(i, 1, eventHandler);
                eventHandlerFound = true;
                break;
            }
        }
    } catch (e) { }
    if (!eventHandlerFound) { this.eventHandlers.push(eventHandler); }
};

CustomEvent.prototype.removeHandler = function (eventHandler) {
    try {
        for (var i = 0; i < this.eventHandlers.length; i++) {
            if (this.eventHandlers[i] == eventHandler) {
                this.eventHandlers.splice(i, 1);
            }
        }
    } catch (e) { }
};

CustomEvent.prototype.raiseEvent = function (args) {
    for (var i = 0; i < this.eventHandlers.length; i++) {
        try {
            if (typeof (this.eventHandlers[i]) != "undefined") {
                if (typeof (arguments) != "undefined") {
                    switch (arguments.length) {
                        case 1: this.eventHandlers[i](args); break;
                        case 2: this.eventHandlers[i](arguments[0], arguments[1]); break;
                        case 3: this.eventHandlers[i](arguments[0], arguments[1], arguments[2]); break;
                        case 4: this.eventHandlers[i](arguments[0], arguments[1], arguments[2], arguments[3]); break;
                        default: this.eventHandlers[i](args); break;
                    }

                } else {
                    this.eventHandlers[i]();
                }
            }
        } catch (e) { }
    }
};

function InitialiseGridViewPager(oGridTable) {
    try {
        var oSliderContainer = jQuery("#divSearchResultsPager");
        var oSlider = jQuery("#PagerSlider");

        jQuery("div.GridSearchResultsPanel").css({ "overflow-Y": "hidden", "overflow-X": "auto" });
       
        if (oSliderContainer.length > 0) {
            // .removeClass("ui-corner-all") is necessary because otherwise causes it to fail.

            jQuery("#PagerSlider").slider(oGridTable.data("Properties").PagerSlider).removeClass("ui-corner-all");

            jQuery("#PagerSlider").bind("slide", function(event, ui) {
                GridViewPager_onPageChange(ui.value);
            });
            
            jQuery("button[id=PagerFirst]").button({ text: false, label: 'first', icons: { primary: "ui-icon-seek-first"} }).removeClass("ui-corner-all").click(function() {
                GridViewPager_onPageChange(0);
                return false;
            });
            
            jQuery("button[id=PagerPrevious]").button({ text: false, label: 'previous', icons: { primary: "ui-icon-triangle-1-w"} }).removeClass("ui-corner-all").click(function() {
                var iPageIndex = parseInt(oSlider.slider("option", "value"), 10);
                var iMin = parseInt(oSlider.slider("option", "min"), 10);
                iPageIndex = (iPageIndex > iMin) ? iPageIndex - 1 : iMin;  // parseInt(oSlider.slider("option", "step"))
                GridViewPager_onPageChange(iPageIndex);
                return false;
            });
            
            jQuery("button[id=PagerNext]").button({ text: false, icons: { primary: "ui-icon-triangle-1-e"} }).removeClass("ui-corner-all").click(function() {
                var iPageIndex = parseInt(oSlider.slider("option", "value"), 10);
                var iMax = parseInt(oSlider.slider("option", "max"), 10);
                iPageIndex = (iPageIndex < iMax) ? iPageIndex + 1 : iMax; // parseInt(oSlider.slider("option", "step"))
                GridViewPager_onPageChange(iPageIndex);
                return false;
            });
            
            jQuery("button[id=PagerLast]").button({ text: false, label: 'first', icons: { primary: "ui-icon-seek-end"} }).removeClass("ui-corner-all").click(function() {
                GridViewPager_onPageChange(parseInt(oSlider.slider("option", "max"), 10));
                return false;
            });

        }
    } catch (e) { }
}

function InitialiseGridTableSearchResults(oTable) {
    try {
        var oTableProperties = oTable.data("Properties");
        if (oTableProperties.AllowSorting) {
            MakeTableColumnsSortable(oTable);
        }
        
        MakeTableColumnsResizable(oTable);
        
    } catch (e) { }
}

function GetTableHeaderRow(oTable) {
    try {
        var oTableHeader = oTable.find("tHead");
        var oTableHeaderRow = null;

        if (oTableHeader.length > 0) {
            oTableHeaderRow = oTableHeader.find("tr:eq(0)");
            if (oTableHeaderRow.length > 0) {
                oTableHeaderRow = oTable.find("tr:eq(0)");
            }
        } else {
            oTableHeaderRow = oTable.find("tr:eq(0)");
        }

    } catch (e) { }
    
    return oTableHeaderRow;
}

function MakeTableColumnsSortable(oTable) {
    try {
        var oTableHeaderRow = GetTableHeaderRow(oTable);

        if (oTableHeaderRow != null) {
            oTableHeaderRow.find("th,td").click(function() {
                var re = /(.*<\/span>)((\w|\W)+)(<span.*)/i;
                var sortField = jQuery(this).html().replace(re, "$2");
                var oSearchProperties = oTable.data("Properties");
                var sortDirection = null;

                if ((oSearchProperties.SortField == null) || (sortField != oSearchProperties.SortField)) {
                    sortDirection = "Ascending";
                    oSearchProperties.PageIndex = 0;
                } else {
                    switch (oSearchProperties.SortDirection.toLowerCase()) {
                        case "descending":
                            sortDirection = "Ascending";
                            break;
                        case "ascending":
                            sortDirection = "Descending";
                            break;
                        default:
                            sortDirection = "Ascending";
                            break;
                    }
                }

                if (oSearchProperties.PagerChangeFunction != null) {
                    oSearchProperties.PagerChangeFunction(oSearchProperties.PageIndex, oSearchProperties.DataPageSize, oSearchProperties.PagerReloadFunction, sortField, sortDirection);
                }
            });
        }
    } catch (e) { }
}

function MakeTableColumnsResizable(oTable) {
    try {
        var oTableHeaderRow = GetTableHeaderRow(oTable);

        if (oTableHeaderRow != null) {
            installTableColumnResizeHandlers2(oTable.attr("id"), oTable.get(0), oTableHeaderRow.get(0));
        }
    } catch (e) { }
}

function GridViewPager_onPageChange(iPageIndex) {
    try {
        var oGridTable = jQuery("div[id$=divSearchResults]").find("table[id$=GridSearchResults]"); //jQuery("#divSearchResultsPager");
        var fnPageChange = null;
        var fnPageReload = null;
        var iPageSize = 1;
        var sSortField = null;
        var sSortDirection = null;

        if (oGridTable.length > 0) {
            try {
                fnPageChange = oGridTable.data("Properties").PagerChangeFunction;
                fnPageReload = oGridTable.data("Properties").PagerReloadFunction;
                iPageSize = oGridTable.data("Properties").DataPageSize;
                sSortField = oGridTable.data("Properties").SortField;
                sSortDirection = oGridTable.data("Properties").SortDirection; 
            } catch (e) { }
            
            if (typeof(fnPageChange) != "undefined") {
                fnPageChange(iPageIndex, iPageSize, fnPageReload, sSortField, sSortDirection);
            }
        }
    } catch (e) { }
    return false;
}

function encode(value) {
    if (value != null)
        value = $.base64.encode(value);
    return value;
}

function getJSONStringFromObject(o) {
    var s = "";

    try {
        o = (typeof (o) == "undefined") ? null : o;
        if (typeof (o) != "object") return s;

        if (o != null) {
            for (var key in o) {
                try {
                    if (o[key] != null) {
                        switch (typeof (o[key])) {
                            case "string":
                                if (s.length > 0) s += ",";
                                s += "\"" + key + "\":\"" + o[key] + "\"";
                                break;
                            case "number":
                            case "boolean":
                                if (s.length > 0) s += ",";
                                s += "\"" + key + "\":" + o[key].toString();
                                break;
                            case "object":
                                var IsKeyArrayIndex = false;
                                try { IsKeyArrayIndex = (!isNaN(parseInt(key))); } catch (e) { }
                                if (s.length > 0) s += ",";
                                if (!IsKeyArrayIndex) {
                                    s += "\"" + key + "\":";
                                }
                                if (o[key] instanceof Array) {
                                    var sArray = "";
                                    s += getJSONStringFromArrayObject(o[key]);
                                } else if (o[key] instanceof Date) {
                                    s += getJSONStringFromDateObject(o[key]);
                                } else if (o[key] instanceof Boolean) {
                                    s += "\"" + key + "\":" + o[key].toString();
                                } else {
                                    s += getJSONStringFromObject(o[key]);
                                }

                                break;
                            default:
                                break;
                        }
                    } else {
                        if (s.length > 0) s += ",";
                        s += "\"" + key + "\":null";
                    }
                } catch (e) {
                    if (s.length > 0) s += ",";
                    s += "\"" + key + "\":null";
                }
            }
        }

        s = "{" + s + "}";

        return s;
    } catch (e) { return "{}"; }
}

function getJSONStringFromDateObject(d) {
    var s = null;
    try {
        //see: http://encosia.com/how-i-handle-json-dates-returned-by-aspnet-ajax/
        s = "\"\\/Date(" + Date.parse(d) + ")\\/\"";
    } catch (e) { }
    return s;
}

function getJSONStringFromArrayObject(a) {
    var s = "";
    try {
        var iArrayUBound = a.length;
        for (var i = 0; i < iArrayUBound; i++) {
            try {
                if (a[i] != null) {
                    switch (typeof (a[i])) {
                        case "string":
                            if (s.length > 0) s += ",";
                            s += "\"" + a[i] + "\"";
                            break;
                        case "number":
                        case "boolean":
                            if (s.length > 0) s += ",";
                            s += a[i];
                            break;
                        case "object":
                            if (s.length > 0) s += ",";

                            if (a[i] instanceof Array) {
                                s += getJSONStringFromArrayObject(a[i]);
                            } else if (a[i] instanceof Date) {
                                s += getJSONStringFromDateObject(a[i]);
                            } else if (a[i] instanceof Boolean) {
                                s += a[i].toString();
                            } else {
                                s += getJSONStringFromObject(a[i]);
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    if (s.length > 0) s += ",";
                    s += "null";
                }
            } catch (e) {
                if (s.length > 0) s += ",";
                s += "null";
            }
        }

        s = "[" + s + "]";

        return s;
    } catch (e) { return "[]"; }
}

function ShowCustomerModalDialog(src, sTitle, bHideTitle, iHeight, iWidth) {
    var oCustomerDialog = jQuery("#divCustomerModalDialog");
    var oDialogProperties = { height: 500, width: 700, modal: true, title: "" };
    var srcOriginal = null;

    try {
        src = (typeof (src) == "undefined") ? null : src;

        if (src != null) {
            srcOriginal = src;
            if (UserCurrentLanguage != null) {
                // if translations in use, check if you need to load translated file
                var reTranslatedFileName = new RegExp("_" + UserCurrentLanguage + "\\.\.*", "i");
                var reFileName = new RegExp("^(\.*)(\\.)(\.*)$", "i");
                if (!reTranslatedFileName.test(src)) {
                    srcOriginal = src;
                    src = src.replace(reFileName, "$1_" + UserCurrentLanguage + "$2$3");
                }
            }

            // insert new dialog control
            if (oCustomerDialog.length == 0) {
                jQuery("form").after("<div id='divCustomerModalDialog'></div>");
                oCustomerDialog = jQuery("#divCustomerModalDialog");
                oCustomerDialog.dialog("destroy");
            } else {
                oCustomerDialog.html("").dialog("destroy");
            }

            try { if (iHeight) oDialogProperties.height = iHeight; } catch (e) { }
            try { if (iWidth) oDialogProperties.width = iWidth; } catch (e) { }
            sTitle = (typeof (sTitle) == "undefined") ? null : sTitle;
            if (sTitle != null) {
                if (sTitle.length > 0) {
                    oDialogProperties.title = sTitle;
                }
            }

            if (bHideTitle) {
                oDialogProperties.open = function (event, ui) { jQuery(".ui-dialog-titlebar").hide(); };
            }

            //Show dialog
            oCustomerDialog.load(src, function (response, status, xhr) {
                if (status == "error") {
                    if ((srcOriginal != src)) {
                        oCustomerDialog.load(srcOriginal, function (response2, status2, xhr2) {
                            if (status2 == "success") {
                                jQuery("#divCustomerModalDialog").dialog(oDialogProperties); //if (jQuery("#divCustomerModalDialog").html.length > 0) { }
                            }
                        });
                    }
                } else {
                    jQuery("#divCustomerModalDialog").dialog(oDialogProperties); //if (jQuery("#divCustomerModalDialog").html.length > 0) { }
                }
            });
        }
    } catch (e) { }
}


function CloseCustomerModalDialog() {
    if (jQuery("#divCustomerModalDialog").dialog("isOpen")) {
        jQuery("#divCustomerModalDialog").html("");
        jQuery("div.ui-dialog-titlebar[id$=divCustomerModalDialog]").show();
        jQuery("#divCustomerModalDialog").dialog("destroy");
    }
}

// form validation
function Validate() {
    var retVal = true;
    $("label.errorLabel").remove();

    $(".required").each(function () {
        // step through each required field checking its complete
        if ( ($(this).val() == null) ||  ( $(this).val().length < 1) ){
            retVal = false;
            ShowError(this, "required field");
        }
    });

    $(".minlength").each(function () {
        // step through each required field checking its complete
        if ($(this).val().length < $(this).attr("minlength") ) {
            retVal = false;
            ShowError(this, "Min length " + $(this).attr("minlength"));
        }
    });

    return retVal;

}

function ShowError(obj, errorMsg) {
    $(obj).addClass("inputError");
    var label = $("<label />")
        .attr({ "for": $(obj).name, generated: true })
        .addClass("errorLabel")
        .html(errorMsg || "");

    if (typeof $(obj).data('required-parent') !== 'undefined') {
        label.insertAfter($(obj).parent($(obj).data("required-parent")));
    }
    else {
        label.insertAfter(obj);
    }

    //label.insertAfter(obj);
    var foo = $("div").data("randomdata");
    
}


function HookUpMultiLeg() {
    // multi flight expand
    jQuery(".mjourneyContent").hide();


    //toggle all following TR's with class mjourneyContent
    jQuery(".AvailabilityMultiLegHeader").unbind("click").click(function () {
        // toggle button
        if ($(this).find("span").hasClass('ui-icon ui-icon-minusthick')) {
            $(this).find("span").removeClass('ui-icon-minusthick');
            $(this).find("span").addClass('ui-icon-plusthick');
        } else {
            $(this).find("span").removeClass('ui-icon-plusthick');
            $(this).find("span").addClass('ui-icon-minusthick');
        }

        // show / hide flights
        $(this).nextAll().each(function () {
            if ($(this).hasClass("mjourneyContent")) {
                $(this).slideToggle('slow');
            } else {
                return false;
            }
        });
    });
}



function BuildAvSearch(e) {
    var wsRq = new Object;

    try {
        if (e != null) {
            wsRq.x = parseInt(e.pageX, 10);
            wsRq.y = parseInt(e.pageY, 10);
            wsRq.rqtm = $('#rqtm').val();
            wsRq.magic = $('#magic').val();
        }
    } catch (e) { }

    // org, dest, dep and ret dates are arrays, here only need 1 value
    var arOrigin = [], arDest = [], arDeptDate = [], arRetDate = [];
    arOrigin.push($('#Origin').val());
    wsRq.Origin = arOrigin;

    wsRq.VarsSessionID = $('#VarsSessionID').val();

    arDest.push($('#Destination').val());
    wsRq.Destination = arDest;

    arDeptDate.push(GetEnglishDate($('#departuredate')));
    wsRq.DepartureDate = arDeptDate;

    arRetDate.push(GetEnglishDate($('#returndate')));
    wsRq.ReturnDate = arDeptDate;

    if ($('#csReqCurrency').length) {
        wsRq.Currency = $('#csReqCurrency').val();
    } else {
        wsRq.Currency = '';
    }

    if ($('#NumberOfAdults').length) {
        wsRq.Adults = $('#NumberOfAdults').val();
    } else {
        wsRq.Adults = iAdults;
    }
    if ($('#NumberOfChildren').length) {
        wsRq.Children = $('#NumberOfChildren').val();
    } else {
        wsRq.Children = iChildren;
    }
    if ($('#NumberOfSmallChildren').length) {
        wsRq.SmallChildren = $('#NumberOfSmallChildren').val();
    } else {
        wsRq.SmallChildren = iSmallChildren;
    }
    if ($('#NumberOfSeniors').length) {
        wsRq.Seniors = $('#NumberOfSeniors').val();
    } else {
        wsRq.Seniors = iSeniors;
    }
    if ($('#NumberOfStudents').length) {
        wsRq.Students = $('#NumberOfStudents').val();
    } else {
        wsRq.Students = iStudents;
    }
    if ($('#NumberOfInfants').length) {
        wsRq.Infants = $('#NumberOfInfants').val();
    } else {
        wsRq.Infants = iInfants;
    }
    if ($('#NumberOfYouths').length) {
        wsRq.Youths = $('#NumberOfYouths').val();
    } else {
        wsRq.Youths = iYouths;
    }
    if ($('#NumberOfTeachers').length) {
        wsRq.Teachers = $('#NumberOfTeachers').val();
    } else {
        wsRq.Teachers = iTeachers;
    }
    if ($('#NumberOfSeatedInfants').length) {
        wsRq.SeatedInfants = $('#NumberOfSeatedInfants').val();
    } else {
        wsRq.SeatedInfants = iSeatedInfants;
    }
    if ($('#AdsNo').length)
        wsRq.ADSNo = $('#AdsNo').val();
    if ($('#AdsPin').length) {
        wsRq.ADSPin = $('#AdsPin').val();
        wsRq.ADSChecked = $('#adschecked').is(':checked') ? 'true' : 'false';
    }

    if ($('#EVoucher').length)
        wsRq.EVoucher = $('#EVoucher').val();

    if (wsRq.DepartureDate.length == 0) {
        // ShowRequirementsModalDialog(RequirementsPageTranslations.NoDepartureDateError);
        WsGenericErrorDialog(RequirementsPageTranslations.NoDepartureDateError);
        return false;
    }

    try {
        if (RequirementsProperties.MaxPassengers != null) {
            // validate number of passengers if required
            bIsValid = ValidNumberPassengers();
            if (!bIsValid) {
                //try { ShowRequirementsModalDialog(RequirementsPageTranslations.MaxPassengersErrorMessage + RequirementsProperties.MaxPassengers.toString() + ". " + RequirementsPageTranslations.LargerGroupsErrorMessage, 120, 350); } catch (e) { }
                try { WsGenericErrorDialog(RequirementsPageTranslations.MaxPassengersErrorMessage + RequirementsProperties.MaxPassengers.toString() + ". " + RequirementsPageTranslations.LargerGroupsErrorMessage); } catch (e) { }
                return false;
            }
        }
    } catch (e) { }

    if (($('input[name=ReturnTrip]:radio:checked').val() == 'chkJourneyTypeReturn') && (wsRq.ReturnDate.length == 0)) {
        //ShowRequirementsModalDialog(RequirementsPageTranslations.NoReturnDateError);
        WsGenericErrorDialog(RequirementsPageTranslations.NoReturnDateError);
        return false;
    }
    
    if (($('input[name=ReturnTrip]:radio:checked').val() == 'chkJourneyTypeReturn') && (wsRq.ReturnDate.length > 0)) {
        var dDepartureDate = $('#departuredate').datepicker("getDate");  //$.datepicker.parseDate('dd-M-yy', sDepartureDate);
        var dReturnDate = (wsRq.ReturnDate.length > 0) ? $('#returndate').datepicker("getDate") : dDepartureDate;  //$.datepicker.parseDate('dd-M-yy', sReturnDate);

        //if (dDepartureDate > dReturnDate) {
        if( (new Date(dDepartureDate).getTime() > new Date(dReturnDate).getTime())) {

            // ShowRequirementsModalDialog(RequirementsPageTranslations.DateOrderError);
            WsGenericErrorDialog(RequirementsPageTranslations.DateOrderError);
            return false;
        }

        arRetDate.length = 0;
        arRetDate.push(GetEnglishDate($('#returndate')));
        wsRq.ReturnDate = arRetDate;
        
    } else {
        wsRq.ReturnDate = null;
    }
    if (RequirementsReferralCode.length > 0)
        wsRq.ReferralCode = RequirementsReferralCode;

    if ($("#RedeemAirMiles").length == 1) {
        wsRq.RedeemAirMiles = $("#RedeemAirMiles").get(0).checked;
    }
    return wsRq;
}


function BuildNextPrevMsg(btnClicked, isMMB) {
    try {
        var msg = new Object;
        var oRegExp = new RegExp("Previous");
        var NextDaysField = null;
        var PrevDaysField = null;
        var NumNextDays = "1";
        var NumPrevDays = "-1";

        msg.nextPrevRq = new Object;

        var btnID = btnClicked.get(0).id;
        if (btnID.search(oRegExp) > 0) {
            PrevDaysField = jQuery("#" + btnID.replace("divFlightAvailabilityPreviousDay", "hfldFlightAvailabilityNumberPreviousDays"));
            if (PrevDaysField.length == 1) { NumPrevDays = PrevDaysField.val(); }
            if (NumPrevDays.length == 0) { NumPrevDays = "-1"; }
        } else {
            NextDaysField = jQuery("#" + btnID.replace("divFlightAvailabilityNextDay", "hfldFlightAvailabilityNumberNextDays"));
            if (NextDaysField.length == 1) { NumNextDays = NextDaysField.val(); }
            if (NumNextDays.length == 0) { NumNextDays = "1"; }
        }

        divNextPreviousDayAvailability = "divAvailabilityPanel" + btnID.substr(btnID.search(/\d/));
        var availabilityIndices = btnID.substr(btnID.search(/\d/)).split("_");


        msg.nextPrevRq.AvailabilityRequestIndex = availabilityIndices[0];
        msg.nextPrevRq.InboundOutboundJourneyIndex = availabilityIndices[1];

        if (btnID.search(oRegExp) > 0) {
            msg.nextPrevRq.NextPrevNumberOfDays = NumPrevDays;
        } else {
            msg.nextPrevRq.NextPrevNumberOfDays = NumNextDays;
        }
        msg.IsMMB = isMMB;

        return msg;
    } catch (e) { alert(e.message); }
}


function WsErrorDialog(request, msg) {
    if (request != null && request.responseText != null) {
        WsGenericErrorDialog(msg, request.responseText, "Error Message");
    } else {
        WsGenericErrorDialog(msg, null, "Error Message");
    }

}

function WsServerErrorDialog(msg) {
    if (msg.ErrorMsg != null) {
        WsGenericErrorDialog(msg.ErrorMsg, null, "Error Message");
    } else {
        WsGenericErrorDialog("Error processing request", null, "Error Message");
    }
}


function WsGenericErrorDialog(mainErrorText, extraErrorText, sTitle, iHeight, iWidth) {
    ShowModalDialog(mainErrorText, sTitle, iHeight, iWidth);
    return;
}

function ShowLoadingProgressDialog(sText, width, height, x, y) {

    if (!(typeof $.dialog === "function") && $('#spinnerModal').length > 0 ) {
        try {
            $('#spinnerModal').modal('show');
        } catch (e) { }
        return;
    }
    var oDialogProperties;
    var sDialogHTML = "";

    // kill old dialogs
    // try { jQuery("div[id$=GMDialog]").dialog("destroy"); } catch (e) { }
    try {
            if ($("div[id$=GMWaitDialog]").dialog().length > 0) {
                jQuery("div[id$=GMWaitDialog]").dialog("close");
            }
            jQuery("div[id$=GMWaitDialog]").dialog("destroy");
    } catch (e) { }

    try { 
    sText = (typeof (sText) == "undefined") ? "" : ((sText == null) ? "" : sText);
    if (sText == "") { sText = DefaultPleaseWaitMessage; }

    sDialogHTML = "<div class=\"LoadingProgress\">";
    if (isCanvasSupported() && (oCurrentTheme.SpinnerIcon >= 0) && (oCurrentTheme.SpinnerIcon <= 9)) {
        // sDialogHTML += "Canvas OK";
        sDialogHTML += "<div class=\"SpinnerDiv\"></div>";
        oDialogProperties = { height: 170, width: 250,
            modal: true,
            closeOnEscape: false,
            resizable: false,
            open: function (event, ui) {
           //     jQuery(".ui-dialog-titlebar").hide();
           //     jQuery(".ui-dialog-titlebar").children().hide();
                LoadSpinner(".SpinnerDiv", oCurrentTheme);
                
            }
        };
    } else {
        sDialogHTML += "<div class=\"LoadingProgressImage\"></div>";
        oDialogProperties = { height: 100, width: 250,
            modal: true,
            closeOnEscape: false,
            resizable: false, 
            open: function (event, ui) {
          //      jQuery(".ui-dialog-titlebar").hide();
            }
        };
    }
    if (width != undefined) {
        oDialogProperties.width = width;
    }

    if (height != undefined) {
        oDialogProperties.height = height;
    }

    if (x != undefined && y != undefined) {
        var arPos = [];
        arPos.push(x);
        arPos.push(y);
        oDialogProperties.position = arPos;

    }

    sDialogHTML += "<div class=\"LoadingProgressText\">" + sText + "</div></div>";

// create temp tag for dialog
    if ($("#GMWaitDialog").length == 0) {
        $('<div id="GMWaitDialog"></div>').hide().appendTo("body");
    }
        try {
        $("div[id$=GMWaitDialog]").html(sDialogHTML);
        $("div[id$=GMWaitDialog]").dialog(oDialogProperties);
        $("div[id$=GMWaitDialog]").siblings('div.ui-dialog-titlebar').remove();
        $("div[id$=GMWaitDialog]").siblings("div .ui-dialog-buttonpane").hide();
        } catch (e) { }
        //$("div .ui-dialog-buttonpane").hide();
    } catch (e) { }
}

function HideLoadingProgressDialog() {

    if (!(typeof $.dialog === "function") && $('#spinnerModal').length > 0) {
        try {
            $('#spinnerModal').modal('hide');
        } catch (e) { }
        return;
    }

    try {
        if ($("#GMWaitDialog").length > 0) {
            if (jQuery("div[id$=GMWaitDialog]").dialog("isOpen")) {
                //            jQuery("div[id$=GMWaitDialog]").html("");
                //            jQuery(".ui-dialog-titlebar").show();
                //            jQuery("div[id$=GMWaitDialog]").dialog("destroy");
                jQuery("div[id$=GMWaitDialog]").dialog("close");
            }
        }
        $("div .ui-dialog-buttonpane").show();

    } catch (e) { }
}

function UpdateLoadingProgressDialog( newText ) {
    if (jQuery("div[id$=GMWaitDialog]").dialog("isOpen")) {
        jQuery(".LoadingProgressText").html(newText);
    }
}

function ErrorMessageDialog(sDialogHTML, nextPage) {
    var buttons = {
        "Ok": {
            text: GeneralStrings.OK,
            click: function () {
                //jQuery(this).dialog("close");
                jQuery(this).dialog("destroy");
                DeleteMesssageDialog();
            }
        }
    };

    if ((typeof (nextPage) != "undefined") && (nextPage != null) && (nextPage != "")) {
        buttons = {
            "Ok": {
                text: GeneralStrings.OK,
                click: function () {
                    //jQuery(this).dialog("close");
                    jQuery(this).dialog("destroy");
                    DeleteMesssageDialog();
                    GoToPage(nextPage);
                }
            }
        };
    }
    MessageDialog(sDialogHTML, "Message", "ui-icon-close", "", buttons);
}
function InfoMessageDialog(sDialogHTML) {
    if (UseBootstrap == true) {
        setTimeout(function () {
            Lobibox.notify('info', {
                msg: sDialogHTML
            });
        }, 100);
    } else {
        MessageDialog(sDialogHTML, "Information", "ui-icon-info", "", buttons, params);
    }
}
function WarningMessageDialog(sDialogHTML) {
    if (UseBootstrap == true) {
        setTimeout(function () {
            Lobibox.notify('warning', {
                msg: sDialogHTML
            });
        }, 100);
    } else {
        MessageDialog(sDialogHTML, "Warning", "ui-icon-alert", "");
    }
}

function SuccessMessageDialog(sDialogHTML) {
    if (UseBootstrap == true) {
        setTimeout(function () {
            Lobibox.notify('success', {
                msg: sDialogHTML
            });
        }, 100);
    } else {
        MessageDialog(sDialogHTML, "Success", "ui-icon-success", "");
    }
}

function DeleteMesssageDialog() {
    if ($("#ErrorDialog").length > 0) {
        $("#ErrorDialog").remove();
    }
}


function MessageDialog(sDialogHTML, title, icon, cls, oButtons, params) {
    if (typeof(oButtons) == "undefined" || oButtons == null) {
        oButtons = {
            "Ok": {
                text: GeneralStrings.OK,
                click: function () {
                    //jQuery(this).dialog("close");
                    jQuery(this).dialog("destroy");
                    DeleteMesssageDialog();
                }
            }
        };
    }
    if (typeof (params) == "undefined" || params == null) {
        params = { modal: true, buttons: oButtons };
    }
    if (params.title != null && params.title != "") {
        title = params.title;
    }
    params.title = title;

    if ($("#ErrorDialog").length > 0) {
        $("#ErrorDialog").remove();
    }
    var dlg = '<div id="ErrorDialog"  title="' + title + '">';
    if (icon != null) {
        dlg = dlg + '<span class="ui-icon ' + icon + '" style="float: left; margin-right: .3em;"></span>';
    }
    //dlg = dlg + '<span id="ErrorMsg"></span></p></div>'
    dlg = dlg + '</div>';
    $(dlg).hide().appendTo("body");

    // $('<div id="ErrorDialog"  title="' + title + '"><p><span class="ui-icon ' + icon + '" style="float: left; margin-right: .3em;"></span><span id="ErrorMsg"></span></p></div>').hide().appendTo("body");
    $("#ErrorDialog").html(sDialogHTML);

    // check that dialog class available
    if (typeof ($("div[id$=ErrorDialog]").dialog) == 'undefined') {
        // bootstrap, no jquery-ui
        bootbox.alert({
            message: sDialogHTML,
            title: title
        });
    } else {
      //   jquery-ui
       $("div[id$=ErrorDialog]").dialog(params).parent().addClass(cls);
    }
 
}

function ShowAgentModalDialog(sDialogHTML, iHeight, iWidth, oButtons, oDialogAdditionalOptions) {
    ShowModalDialog(sDialogHTML, AgentDialogDefaultTitle, iHeight, iWidth, oButtons, oDialogAdditionalOptions);
}
function ShowModalDialog(sDialogHTML, sTitle, iHeight, iWidth, oButtons, oDialogAdditionalOptions,cssClass) {
    // use central version
    if (((oDialogAdditionalOptions == null) || (typeof (oDialogAdditionalOptions) == "undefined")) && ((oButtons == null) || (typeof (oButtons) == "undefined")) && (sDialogHTML.indexOf('http:') != 0) && (sDialogHTML.indexOf('https:') != 0)) {
        var dlgMsg = new Object;
        dlgMsg.html = sDialogHTML;
        dlgMsg.title = sTitle;
        dlgMsg.height = iHeight;
        dlgMsg.width = iWidth;
        dlgMsg.cssClass = cssClass;
        modalDialog(dlgMsg);
        return;
    }

    var oDialogProperties;
    var bButtons = false;

    try { sDialogHTML = (typeof (sDialogHTML) == "undefined") ? null : ((sDialogHTML == "") ? null : sDialogHTML); } catch (e) { }

    if (sDialogHTML != null) {
        if (typeof (oButtons) == "undefined") {
            oButtons = {
                "Ok": {
                    text: GeneralStrings.OK,
                      click: function () {
                        jQuery(this).dialog("destroy");
                    }
                }
            };
            oDialogProperties = { height: DialogSize.height, width: DialogSize.width, modal: true, buttons: oButtons };
        } else {
            switch (oButtons) {
                case null:
                case "":
                    oDialogProperties = { height: DialogSize.height, width: DialogSize.width, modal: true };
                    break;
                default:
                    // standard translations
                    if (typeof GeneralStrings != "undefined") {
                        if (typeof oButtons.Cancel != "undefined") {
                            if (GeneralStrings.CANCEL.toLowerCase() != "cancel") {
                                var fn = oButtons.Cancel;
                                oButtons.Cancel = new Object();
                                oButtons.Cancel.click = fn;
                                oButtons.Cancel.text = GeneralStrings.CANCEL;
                            }
                        }
                        if (typeof oButtons.OK != "undefined") {
                            if (GeneralStrings.OK.toLowerCase() != "ok") {
                                var fn = oButtons.OK;
                                oButtons.OK = new Object();
                                oButtons.OK.click = fn;
                                oButtons.OK.cssclass = 'ui-state-active';
                                oButtons.OK.text = GeneralStrings.OK;
                            }
                        }
                        if (typeof oButtons.Save != "undefined") {
                            if (GeneralStrings.SAVE.toLowerCase() != "save") {
                                var fn = oButtons.Save;
                                oButtons.Save = new Object();
                                oButtons.Save.click = fn;
                                oButtons.Save.text = GeneralStrings.SAVE;
                            }
                        }
                        if (typeof oButtons.Confirm != "undefined") {
                            if (GeneralStrings.CONFIRM.toLowerCase() != "confirm") {
                                var fn = oButtons.Confirm;
                                oButtons.Confirm = new Object();
                                oButtons.Confirm.click = fn;
                                oButtons.Confirm.text = GeneralStrings.CONFIRM;
                            }
                        }
                        if (typeof oButtons.Yes != "undefined") {
                            if (GeneralStrings.YES.toLowerCase() != "yes") {
                                var fn = oButtons.Yes;
                                oButtons.Yes = new Object();
                                oButtons.Yes.click = fn;
                                oButtons.Yes.text = GeneralStrings.YES;
                            }
                        }
                        if (typeof oButtons.Delete != "undefined") {
                            if (GeneralStrings.DELETE.toLowerCase() != "delete") {
                                var fn = oButtons.Delete;
                                oButtons.Delete = new Object();
                                oButtons.Delete.click = fn;
                                oButtons.Delete.text = GeneralStrings.DELETE;
                            }
                        }
                        if (typeof oButtons.No != "undefined") {
                            if (GeneralStrings.NO.toLowerCase() != "no") {
                                var fn = oButtons.No;
                                oButtons.No = new Object();
                                oButtons.No.click = fn;
                                oButtons.No.text = GeneralStrings.NO;
                            }
                        }


                    }
                    oDialogProperties = { height: DialogSize.height, width: DialogSize.width, modal: true, buttons: oButtons };
                    bButtons = true;
                    break;
            }
        }

        //DialogSize = { height: 150, width: 350 };
        if ((sTitle != null) && (sTitle != "")) {
            oDialogProperties.title = sTitle;
        } else {
            if ((typeof (DialogDefaultTitle) != "undefined")) oDialogProperties.title = DialogDefaultTitle;
            //if (DialogDefaultTitle != null) oDialogProperties.title = DialogDefaultTitle;
        }
        oDialogProperties.closeText = '';

        try { if (iHeight) oDialogProperties.height = iHeight; } catch (e) { }
        try { if (iWidth) oDialogProperties.width = iWidth; } catch (e) { }

        if ((typeof (oDialogAdditionalOptions) != "undefined") && (oDialogAdditionalOptions != null)) {
            for (var oProperty in oDialogAdditionalOptions) {
                oDialogProperties[oProperty] = oDialogAdditionalOptions[oProperty];
            }
        }

//        oDialogProperties.minWidth = 250; 

        // create temp tag for dialog
        if ($("#GMDialog").length > 0) {
            $("#GMDialog").remove();
        }
        $('<div id="GMDialog"  title="Dialog Title" ></div>').hide().appendTo("body");
        if( (sDialogHTML.indexOf('http:') == 0)  || (sDialogHTML.indexOf('https:') == 0)) {


            //var d = $('div[id$=GMDialog]').html('<iframe id="ifrm"></iframe>');
            $('div[id$=GMDialog]').html('<iframe id="ifrm" width="' + (iWidth -15) + '" height="' + (iHeight - 100) + '" ></iframe>');
            $('div[id$=GMDialog]').dialog(oDialogProperties);
            $('div[id$=GMDialog].ui-dialog-content').css('overflow', 'visible');
            $("div[id$=GMDialog]>#ifrm").attr("src", sDialogHTML);

        } else {
            $("div[id$=GMDialog]").html(sDialogHTML);
            $("div[id$=GMDialog]").dialog(oDialogProperties);
            $(".ui-dialog-titlebar-close").hide();
        }


        if (bButtons) {
            var fnCloseEvent = null;
            try { fnCloseEvent = jQuery("div[id$=GMDialog]").dialog("option", "buttons").Cancel; } catch (e) { }
            if (fnCloseEvent !== null) {
                try { jQuery("div[id$=GMDialog]").dialog({ close: fnCloseEvent }); } catch (e) { }
            }
        }
    }
}

function BootstrapModalDialogMessageDisplay(sDialogHTML,sTitle,cssClass,oButtons) {
    //sDialogHTML, title, icon, cls, oButtons, params
    if (typeof (oButtons) == "undefined") {
        oButtons = {
            OK: {
                label: GeneralStrings.OK,
                callback: function () { }
            }
        };
    }
    
    try { cssClass = (typeof (cssClass) == "undefined") ? null : ((cssClass == "") ? null : cssClass); } catch (e) { }

    var box = bootbox.dialog({ closeButton: false, title: sTitle, message: sDialogHTML, buttons: oButtons });

    if (cssClass != null) {
        box.find(".modal-header").removeClass("modal-header-primary").addClass(cssClass);
    }

    //$('#modal').on('show', function () {
        
    //});
}

function BootstrapModalDialogIFrameDisplay(sURL, sTitle, cssClass, oButtons,size) {
    var msg = '<iframe src="' + sURL + '" width="900px" height="800px" frameborder="0"></iframe>';

    BootstrapModalDialogMessageDisplay(msg, sTitle,cssClass, oButtons,true);
}

//function resizeIframe(iframe) {
//    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
//    //iframe.width = iframe.contentWindow.document.body.scrollWidth + "px";
//}

function SetModalDialogBody(sDialogHTML) {
    $("#GMDialog").html(sDialogHTML);
}

function HideModalDialog() {
    if (jQuery("div[id$=GMDialog]").dialog("isOpen")) {
        jQuery("div[id$=GMDialog]").html("");
        jQuery("div[id$=GMDialog]").dialog("destroy");
    }
}

function GetRequestParam(param) {
    var res = null;
    try {
        var qs = decodeURIComponent(window.location.search.substring(1));//get everything after then '?' in URI
        var ar = qs.split('&');
        $.each(ar, function (a, b) {
            var kv = b.split('=');
            if (param.toLowerCase() == kv[0].toLowerCase()) {
                res = kv[1];
                return res;//break loop
            }
        });
    } catch (e) { }
    return res;
}

function SendAjaxRequest(ajaxUrl, ajaxData, returnDataType, fnSuccess, fnError, defaultErrorMessage, showLoadingProgress, loadingProgressText, timeOut, bsWait) {
    returnDataType = (typeof (returnDataType) == "undefined") ? "json" : ((returnDataType == null) ? "json" : returnDataType);
    returnDataType = (returnDataType == "") ? null : returnDataType;
    fnSuccess = (typeof (fnSuccess) == "undefined") ? null : ((fnSuccess == "") ? null : fnSuccess);
    fnError = (typeof (fnError) == "undefined") ? null : ((fnError == "") ? null : fnError);
    defaultErrorMessage = (typeof (defaultErrorMessage) == "undefined") ? "" : ((defaultErrorMessage == null) ? "" : defaultErrorMessage);
    showLoadingProgress = (typeof (showLoadingProgress) == "undefined") ? false : ((showLoadingProgress == null) ? false : showLoadingProgress);
    timeOut = (typeof (timeOut) == "undefined") ? 90000 : ((timeOut == null) || (timeOut == "")) ? 90000 : timeOut;
    ajaxData = (ajaxData == null) ? "{}" : ajaxData; // for backward compatibility with older versions of Firefox

    if (defaultErrorMessage.length == 0) { defaultErrorMessage = IBEDefaultErrorMessage; }

    if (ajaxUrl.indexOf("?") > 0) {
        if (typeof ($("#VarsSessionID").val()) != "undefined") {
            ajaxUrl = ajaxUrl + "&VarsSessionID=" + $("#VarsSessionID").val();
        } else {
            ajaxUrl = ajaxUrl + "&VarsSessionID=" + GetRequestParam("VARSSessionID");
        }

    } else {
        if (typeof ($("#VarsSessionID").val()) != "undefined") {
            ajaxUrl = ajaxUrl + "?VarsSessionID=" + $("#VarsSessionID").val();
        } else {
            ajaxUrl = ajaxUrl + "?VarsSessionID=" + GetRequestParam("VARSSessionID");
        }
    }
    VarsSessionResetCookie();


    jQuery.ajax({
        type: "POST",
        url: ajaxUrl,
        data: ajaxData,
        contentType: "application/json; charset=utf-8",
        dataType: returnDataType,
        timeout: timeOut,
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xmlHttpRequest) {
            if (showLoadingProgress && !bsWait) {
                ShowLoadingProgressDialog(loadingProgressText);
            }
            if (bsWait == true) {
                try {
                    $('#spinnerModal').modal('show');
                } catch (e) { }
            }
        },
        error: function (request, error) {
            if (showLoadingProgress && !bsWait) {
                HideLoadingProgressDialog();
            }
            if (bsWait == true) {
                HideLoading();
            }


            if ((fnError != null) && (defaultErrorMessage != null)) {
                if (request != null && request.responseText != null) {
                    fnError(request.responseText);
                } else {
                    fnError(defaultErrorMessage);
                }
            } else if (error == "timeout") {
                WsErrorDialog(request, defaultTimeoutMessage);
            } else if (defaultErrorMessage != null) {
                // if (defaultErrorMessage != "") { ShowIBEModalDialog(defaultErrorMessage); }
                WsErrorDialog(request, defaultErrorMessage);
                //WsErrorDialog(request, error + "URL=" + ajaxUrl)
            } else {
            }
        },
        success: function (msg) {
            try
            {
                var Redirect = false;                

                if (returnDataType.toLowerCase() == "html") {
                    var dmsg = jQuery.parseJSON(msg).d;
                    if (dmsg.ResponseAction == "Redirect") {
                        Redirect = true;
                    }
                }
                else {
                    if (msg.d.ResponseAction == "Redirect") {
                        Redirect = true;
                    }
                }

                if (!Redirect ) {
                    if (showLoadingProgress && !bsWait) {
                        HideLoadingProgressDialog();
                    }
                    if (bsWait == true) {
                        HideLoading();
                    } else {
                        try {

                            if (msg.d.bsWait == true)
                                HideLoading();
                        } catch (e) { }
                    }
                }
                
                if (returnDataType.toLowerCase() == "html") {
                    if (fnSuccess != null) {
                        var dmsg = jQuery.parseJSON(msg).d;
                        var result = "OK";

                         try {
                             if (dmsg.bsWait == true && dmsg.ResponseAction != "Redirect") {
                                 HideLoading();
                            }
                         } catch (e) { }
                       try { result = dmsg.Result.toUpperCase(); } catch (e) { }

                        if (result == "SESSION_ERROR") {
                            ShowModalDialog(dmsg.ErrorMsg);
                            if (dmsg.NextURL != null) {
                                window.top.location = dmsg.NextURL;
                            }
                            if (dmsg.NextPage != null) {
                                window.top.location = dmsg.NextPage;
                            }
                        } else {
                            fnSuccess(dmsg);
                        }
                    }
                } else {
                    if (typeof (msg.d.Result.Result) != "undefined") {
                        // reply from Async Web Service
                        msg.d = msg.d.Result;
                    }
                    if (msg.d.Result.toUpperCase() == "OK") {
                        if (fnSuccess != null) {
                            fnSuccess(msg.d);
                        }
                    } else if (msg.d.Result.toUpperCase() == "SESSION_ERROR") {
                        ShowModalDialog(msg.d.ErrorMsg);
                        if ((msg.d.NextURL != null) && (msg.d.NextURL != "")) {
                            if (window.top.location != msg.d.NextURL) {
                                window.top.location = msg.d.NextURL;
                            }
                        }
                        if (msg.d.NextPage != null) {
                            if (window.top.location != msg.d.NextPage) {
                                window.top.location = msg.d.NextPage;
                            }
                        }
                    } else {
                        if (fnError != null) {
                            fnError(msg.d.ErrorMsg, msg.d);
                        } else {
                            if (msg.d.ErrorMsg != "") { ShowModalDialog(msg.d.ErrorMsg); }
                        }
                    }
                }
            } catch (e) { }
        },
        complete: function (xmlHttpRequest) {
            //HideLoadingProgressDialog();
        }
    });
}



function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

/*      Products    */
function ShowProduuctAddButton(ProductCategoryDisplayIndex, ProductItemDisplayIndex) {
    var fldSuffix = ProductCategoryDisplayIndex + "_" + ProductItemDisplayIndex;
    $("#hfldAddProductItemIndex" + fldSuffix).show();
}
function HideProduuctAddButton(ProductCategoryDisplayIndex, ProductItemDisplayIndex) {
    var fldSuffix = ProductCategoryDisplayIndex + "_" + ProductItemDisplayIndex;
    $("#hfldAddProductItemIndex" + fldSuffix).hide();
}
function ShowProduuctRemoveButton(ProductCategoryDisplayIndex, ProductItemDisplayIndex) {
    var fldSuffix = ProductCategoryDisplayIndex + "_" + ProductItemDisplayIndex;
    $("#hfldRemoveProductItemIndex" + fldSuffix).show();
}
function HideProduuctRemoveButton(ProductCategoryDisplayIndex, ProductItemDisplayIndex) {
    var fldSuffix = ProductCategoryDisplayIndex + "_" + ProductItemDisplayIndex;
    $("#hfldRemoveProductItemIndex" + fldSuffix).hide();
}

function GoToPage(url, bsWait) {
    try {
        if (url == null) return;
        if (url == '') return;
        if (bsWait == true) {
            try {
                $('#spinnerModal').modal('show');
                // hide modal after 3 s, ==> not shown after back on phone
                setTimeout(function () {
                    HideLoading();
                }, 5000);

            } catch (e) { }
        } else {
            ShowLoadingProgressDialog(DefaultPleaseWaitMessage);
        }
        PostToPage(url);
        // if post OK will not get here, if no post will return
        //HideLoadingProgressDialog();
    } catch (e) { }
}

function HideLoading() {
    try {
        $('#spinnerModal').modal('hide');
    } catch (e) { }
}
function SaveConfig_onSuccess(msg) {

    try {
        // refresh page
        //window.location.reload();
        RefreshPage();

    } catch (e) { }

}

function GetCreditCardData(sFOPIndex, oCreditCardData) {
    var oValue = null;

    try {

        oValue = GetPaymentFieldValue(sFOPIndex, "cardnumber", null);
        if (oValue != null) {
            oCreditCardData.CardNumber = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardtype", null);
        if (oValue != null) {
            oCreditCardData.CardType = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardissuenumber", null);
        if (oValue != null) {
            oCreditCardData.IssueNumber = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardsecuritycode", null);
        if (oValue != null) {
            oCreditCardData.SecurityCode = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardholder", null);
        if (oValue != null) {
            oCreditCardData.CardHolder = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardholderfirstname", null);
        if (oValue != null) {
            oCreditCardData.CardHolderFirstname = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardholdersurname", null);
        if (oValue != null) {
            oCreditCardData.CardHolderSurname = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "cardauthorisationcode", null);
        if (oValue != null) {
            oCreditCardData.AuthorisationCode = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline1", null);
        if (oValue != null) {
            oCreditCardData.BillingAddressLine1 = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline2", null);
        if (oValue != null) {
            oCreditCardData.BillingAddressLine2 = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline3", null);
        if (oValue != null) {
            oCreditCardData.BillingAddressLine3 = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddressline4", null);
        if (oValue != null) {
            oCreditCardData.BillingAddressLine4 = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddresspostzipcode", null);
        if (oValue != null) {
            oCreditCardData.BillingPostalCode = oValue;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "billingaddresscountry", null);
        if (oValue != null) {
            oCreditCardData.BillingAddressCountryCode = oValue;
        }

        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardexpirydatemonth", null);
        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardexpirydateyear", null);
        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
            oCreditCardData.ExpiryDate = paymentDateFieldMonth + paymentDateFieldYear;
            oCreditCardData.ExpiryMonth = paymentDateFieldMonth;
            oCreditCardData.ExpiryYear = paymentDateFieldYear;
        }

        paymentDateFieldMonth = GetPaymentFieldValue(sFOPIndex, "cardstartdatemonth", null);
        paymentDateFieldYear = GetPaymentFieldValue(sFOPIndex, "cardstartdateyear", null);
        if ((paymentDateFieldMonth != null) && (paymentDateFieldYear != null)) {
            oCreditCardData.StartDate = paymentDateFieldMonth + paymentDateFieldYear;
        }

        oValue = GetPaymentFieldValue(sFOPIndex, "mobilenumber", null);
        if (oValue != null) {
            oCreditCardData.MobileNumber = oValue;
        }


        return oCreditCardData;
    } catch (e) {
        oPaymentData = null;
    }
}

function GetPaymentFieldValue(sFOPIndex, fldName, fldDefaultValue) {
    var fldVal = null;
    var oField = null;

    try {
        if (typeof (FOPIndex) == "undefined") {
            sFOPIndex = "";
        } else if (FOPIndex == null) {
            sFOPIndex = "";
        }

        switch (fldName) {
            case "":
                break;
            default:
                oField = jQuery("#payment" + sFOPIndex + fldName);
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

                break;
        }
    } catch (e) {
        fldVal = GetDefaultFieldValue(fldDefaultValue);
    }

    return fldVal;
}

function GetPaymentData() {
    var oPayments = null;
    var re = new RegExp("'", "g");
    var sFOPIndex = "";
    var MultipleFormsOfPayment = false;


    try {
        try { MultipleFormsOfPayment = (jQuery("#paymentfopformindex").length == 0); } catch (e) { }

        jQuery("input:checked[type=radio][id^=optpaymentformofpayment]").each(function () {
            try {
                var SelectedPayment = jQuery(this);
                var oPaymentData = { "Amount": 0, "Currency": null, "PaymentReference": null, "PaymentSchemeID": 0 };
                var oFOP = null;
                var sPaymentType = "";
                var paymentDateFieldMonth = null;
                var paymentDateFieldYear = null;
                var sPaymentCharge = null;

                oFOP = jQuery.parseJSON(SelectedPayment.val().replace(re, "\""));

                if ((new RegExp("BuyNowPayLater", "i")).test(oFOP.PaymentType)) {
                    IsTicketTimeLimitPaymentRequest = true;
                    return null;
                }

                try {
                    if (MultipleFormsOfPayment) { sFOPIndex = oFOP.FormOfPaymentIndex.toString(); }
                } catch (e) { }

                oPaymentData.Amount = oFOP.PaymentAmount;
                oPaymentData.Currency = oFOP.PaymentCurrency;
                oPaymentData.PaymentSchemeID = oFOP.PaymentSchemeID;
                oPaymentData.DisplayName = oFOP.DisplayName;
                oPaymentData.PaymentReference = GetPaymentFieldValue(sFOPIndex, "paymentreference", null);

                if (jQuery("#paymentfopformindex").length == 1) {
                    sPaymentCharge = GetPaymentFieldValue(sFOPIndex, "_paymentcharge", null);
                } else {
                    sPaymentCharge = GetPaymentFieldValue(sFOPIndex, jQuery("#payment" + oFOP.FormOfPaymentIndex + "fopformindex") + "_paymentcharge", null);
                }
                if (sPaymentCharge != null) {
                    if (sPaymentCharge.length > 0) {
                        try { oPaymentData.PaymentCharge = jQuery.parseJSON(sPaymentCharge.replace(re, "\"")); } catch (e) { oPaymentData.PaymentCharge = null; }
                    }
                }

                sPaymentType = oFOP.PaymentType.toLowerCase();
                switch (sPaymentType) {
                    case "creditcard":
                    case "manualcreditcard":
                        GetCreditCardData(sFOPIndex, oPaymentData);
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.CardPayment = oPaymentData;
                        break;
                    case "invoice":
                    case "invoicevoucher":
                        oPaymentData.AccountReference = GetPaymentFieldValue(sFOPIndex, "accountreference", null);
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.InvoicePayment = oPaymentData;
                        break;
                    case "externalpayment":
                        var temp = {};
                        oPaymentData.PaymentCardDetails = GetCreditCardData(sFOPIndex, temp);
                        oPaymentData.PaymentSchemeName = GetPaymentFieldValue(sFOPIndex, "externalpaymentschemename", null);
                        if (oPaymentData.PaymentSchemeName == null) {
                            oPaymentData.PaymentSchemeName = oFOP.PaymentSchemeName;
                        }
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.ExternalPayment = oPaymentData;
                        break;
                    case "cash":
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.CashPayment = oPaymentData;
                        break;
                    case "cheque":
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.ChequePayment = oPaymentData;
                        break;
                    case "fundtransferpayment":
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.FundTransferPayment = oPaymentData;
                        break;
                    case "airmiles":
                        if (oPayments == null) { oPayments = {}; }
                        oPayments.AirMilesPayment = oPaymentData;
                        break;
                    default:
                        break;
                }

            } catch (e) { }
        });

    } catch (e) { oPayments = null; }

    return oPayments;
}


function hookupDbGrid() {
    $('.GenericAdminTable tr').unbind("click").click(function () {
        var sFormData = '';

        var sID = $(this).attr("class");  // $(this)[0].id.replace('schedulerow_', '');
        sID = sID.replace('RowID_', '');
        sID = sID.replace('GridRowHighlight', '');

        DoDisplayItem(sID);

        $('.GridRowHighlight').removeClass("ui-state-hover");
        $(this).addClass("ui-state-hover");
        return false;
    });
    $(".datepicker").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+1y", closeText: "Close", showButtonPanel: true });
    $(".datepickerlong").datepicker({ dateFormat: "dd-M-yy", minDate: "-0d", maxDate: "+10y", closeText: "Close", showButtonPanel: true, changeYear: true });

}

function KeepAlive() {
    if (bKeepAliveOn) {
        if ($("#GMWaitDialog").length == 0) {            
            window.setTimeout("SendKeepAlive()", 120000);
        } else {
            window.setTimeout("KeepAlive()", 30000);  //if there is a "waiting or progressing" Dialog, then no need to send keeplive request
        }
    }
}

function SendKeepAlive() {
    var curPage = window.location.pathname;
    curPage = curPage.replace("&", "[amp]");
    curPage = curPage.replace("?", "[q]");
    var url = "WebServices/IbeWS.asmx/KeepAlive?page=" + curPage;
    if ((new RegExp("/Agent/", "i")).test(window.location.href) ||
            (new RegExp("/mmb/", "i")).test(window.location.href) ||
            (new RegExp("/m/", "i")).test(window.location.href) ||
            (new RegExp("/b/", "i")).test(window.location.href) ||
            (new RegExp("/fqtv/", "i")).test(window.location.href) ||
            (new RegExp("/Vouchers/", "i")).test(window.location.href) ||
            (new RegExp("/customerpanels/", "i")).test(window.location.href)) {
        // agent page
        url = "../" + url;
    }
    SendAjaxRequest(url, "", null, KeepAlive_onSuccess, KeepAlive_onError, "", false, "");
}

function KeepAlive_onSuccess(msg) {
    if (msg.Data != 'OK') {
        try {
            // refresh page
            window.location = msg.NextURL;
        } catch (e) { }

    } else {
        KeepAlive();  //below ErrorMsg is an alert (Timeout in 5 minutes....), so continue keepAlive
        if (msg.ErrorMsg != null) {
            if (msg.ErrorMsg.length > 0) {
                $("#vars2Header").show();
                $(".page-header-content H2").html(msg.ErrorMsg);
                $(".page-header-content .centreTitle").html(msg.ErrorField);
            }
        }
    }
}

function KeepAlive_onError(msg) {
// ??
}

function VarsSession() {
// set cookie for refresh
    window.onbeforeunload = function (e) {
        document.cookie = "VarsSessionID=" + $("#VarsSessionID").val();
    };

}
function VarsSessionResetCookie() {
    document.cookie = "VarsSessionID=''";
}

function PostToPage(PageUrl) {
    var vSessionID = $("#VarsSessionID").val();
    var formTarget = "_top";
    var sForm = "";

    sForm += "<form id='frmChangePage' name='frmChangePage' action='" + PageUrl + "' target='" + formTarget + "' method='post'>";
    sForm += "<input type='hidden' name='VarsSessionID' id='VarsSessionID' value='" + vSessionID + "' />";
    sForm += "</form>";

    jQuery("form").after(sForm);
    jQuery("#frmChangePage").submit();
}

function RefreshPage() {
    try {
        // refresh page!
        PostToPage(window.location);

    } catch (e) { }
}
//function getColorFromCss(srcClass, element) {
//    var $p = $('<a class="' + srcClass + '"></a>').hide().appendTo("body");
//    var val = $p.css(element);
//    $p.remove();
//    return val;
//}
function setThemeColours() {
    // get temp element
    var $a = $('<a class="ui-state-active"></a>').hide().appendTo("body");
    var $h = $('<a class="ui-state-hover"></a>').hide().appendTo("body");
   // $("#tempCss").remove();

    // get values
    var bkActive = getColorFromCss("ui-state-hover", "background-color"); // $a.css("background-color");
    var bkText = $a.css("color");

    // set values
   // $(".vars_active").css("background-color", bkActive);
//    $(".vars_active").css("color", bkText);

    var newCss = '<style id="tempCss" type="text/css">';

    newCss += '.vars_active {\n';
    newCss += ' background-color: ' + $a.css("background-color") + ';\n';
    newCss += ' color: ' + $a.css("color") + '; } \n';

    newCss += ' .vars-hover { \n';
    newCss += ' background-color: ' + $h.css("background-color") + '; \n';
    newCss += ' border-top-color: ' + $h.css("border-top-color") + '; \n ';
    newCss += ' border-right-color: ' + $h.css("border-right-color") + '; \n ';
    newCss += ' border-left-color: ' + $h.css("border-left-color") + '; \n ';
    newCss += ' border-bottom-color: ' + $h.css("border-bottom-color") + '; \n ';
    newCss += ' border-style: ' + $h.css("border-top-style") + '; \n ';
    newCss += ' border-bottom-style: ' + $h.css("border-bottom-style") + '; \n ';
    newCss += ' border-width: ' + $h.css("border-top-width") + '; \n ';
    newCss += ' border-bottom-width: ' + $h.css("border-bottom-width") + '; \n ';
    newCss += ' color: ' + $h.css("color") + ';}';

    newCss += '</style>';
    $('head').append(newCss);
    // tidy up
    $a.remove();
    $h.remove();

}

function setBootstrapThemeColours() {
    UseBootstrap = true;
    // get temp element
    var $a = $('<a class="ui-state-active"></a>').hide().appendTo("body");
    var $h = $('<a class="ui-state-hover"></a>').hide().appendTo("body");
    // $("#tempCss").remove();

    // get values
    var bkActive = getColorFromCss("ui-state-hover", "background-color"); // $a.css("background-color");
    var bkText = $a.css("color");

    // set values
    // $(".vars_active").css("background-color", bkActive);
    //    $(".vars_active").css("color", bkText);

    var newCss = '<style id="tempCss" type="text/css">';

/*    newCss += '.btn-next, .btn-next:focus, .panel-default > .panel-heading {\n';*/
    newCss += '.btn-next, .btn-next:focus {\n';
    newCss += ' background-color: ' + $a.css("background-color") + ';\n';
    newCss += ' border-color: ' + $a.css("border-top-color") + ';\n';
    newCss += ' color: ' + $a.css("color") + '; } \n';

    /* , .panel-footer */
    newCss += ' .btn-next:hover { \n';
    newCss += ' background-color: ' + $h.css("background-color") + '; \n';
    newCss += ' border-color: ' + $h.css("border-top-color") + '; \n ';
    newCss += ' border-width: ' + $h.css("border-top-width") + '; \n ';
    newCss += ' color: ' + $h.css("color") + ';}';

    newCss += '</style>';
    $('head').append(newCss);
    // tidy up
    $a.remove();
    $h.remove();

}




var oMasterPagePopUpWindow;

function loadMasterPagePopUpWindow(sURL, lHeight, lWidth, sName, sTitlebar, sToolbar, sMenubar, sLocation, sStatusbar, sResizable, sScrollbars, sDirectories) {
    if (oMasterPagePopUpWindow != null)
        if (oMasterPagePopUpWindow.closed != true) oMasterPagePopUpWindow.close();
    if (sScrollbars == null) { sScrollbars = "yes"; }
    VarsSessionResetCookie();
    sURL = sURL + "&VarsSessionID=" + $('#VarsSessionID').val();
    //IE7 does not like a named window
    oMasterPagePopUpWindow = window.open(sURL, "_blank", "location=" + sLocation + ",titlebar=" + sTitlebar + ",toolbar=" + sToolbar + ",directories=" + sDirectories + ",status=" + sStatusbar + ",scrollbars=" + sScrollbars + ",resizable=" + sResizable + ",menubar=" + sMenubar + ",left=" + ((screen.width / 2) - (lWidth / 2)) + ",top=" + ((screen.Height / 2) - (lHeight / 2)) + ",height=" + lHeight + ",width=" + lWidth);
    if (oMasterPagePopUpWindow == null || typeof (oMasterPagePopUpWindow) == 'undefined') {
        alert("Turn off your pop-up blocker!\n\nWe are trying to open the following url:\n" + sUrl);
    }
        
}

//function delay(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}

function delay(ms) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () { resolve("done"); }, ms);
    });

    return promise
}

//delay(1000).then()

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}﻿
function InitVoucherPurchase() {

    InitValidators();

    $('.selectpicker').selectpicker();

    try {
        $("[id$='divApplicationContainer']").formValidation();//("validate");
    } catch (e) { }

    $("#divCarousel").carousel();
    $('.carousel').carousel('pause');

    $('#divCarousel').bind('slide.bs.carousel', function (e) {

        //alert($(e.relatedTarget).children('img').attr('alt'));
        updateVoucherOccasion($(e.relatedTarget).children('img').attr('alt'));

    });

    updateVoucherOccasion($("#divCarousel").find("li.active").attr('data-value'));

    try {
        $("[id$='divApplicationContainer']").formValidation();//("validate");
    } catch (e) { }

    $("#btnPurchaseVoucher").unbind("click").click(function () {
        try {
            
            if (validateFields() == true) {
                
                setUpClick('PURCHASEVOUCHER', 'PurchaseVoucher', PurchaseVoucher_Success,'GV');
            }
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });

}

function updateVoucherOccasion(alt) {


    $('#txtOccasion').val(alt);


}

function InitVoucherSummary() {

    var options = {
        'backdrop': 'static',
        'show': true
    };

    $('#divVoucherLogin').modal(options);

    $("#btnVoucherLogin").click(function () {
        $(getMPID('hidRetryLogin')).val('1');
        $(getMPID('hidVoucherNumber')).val($(getMPID('txtVoucherNumber')).val());
        $(getMPID('hidSecurityCode')).val($(getMPID('txtSecurityCode')).val());

        frm = $(getMPID("aspnetForm"));

        if (frm.length == 0) {
            frm = $(getMPID("form1"));
        }
        
        frm.submit(); // Submit the form
    });

    $("#btnMakeBooking").unbind("click").click(function () {
        try
        {
            setUpClick('MAKEBOOKING', 'MakeBooking', MakeBooking_Success, 'RP');
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });
}

function InitRoutePassPurchase() {

    InitValidators();

    try {
        $("[id$='divApplicationContainer']").formValidation();//("validate");
    } catch (e) { }

    $("#divCarousel").carousel();
    $('.carousel').carousel('pause');

    $('#divCarousel').bind('slide.bs.carousel', function (e) {
       
        //alert($(e.relatedTarget).children('img').attr('alt'));
        updateRoutePassAmount($(e.relatedTarget).children('img').attr('alt'));
       
    });

    updateRoutePassAmount($("#divCarousel").find("li.active").attr('data-value'));

    $("#btnPurchaseVoucher").unbind("click").click(function () {
        try {

            if (validateFields() == true) {
                setUpClick('PURCHASEVOUCHER', 'PurchaseVoucher', PurchaseVoucher_Success,'RP');
            }
        }
        catch (err) {
            ShowModalDialog(err.message);
        }
    });
}

function updateRoutePassAmount(alt) {

    var arrVals = alt.split('|');

    //Update Amount
    $('#txtPaymentAmount').val(arrVals[1]);
    $('#ddlVoucherType').val(arrVals[0]);

    //Now populate routes
    var routeID = '#' + arrVals[2] + '_Routes';

    //Load JSON Object
    var objRoutes;
    var strJSON = '{ "validRoutes" : ' + $(routeID).val() + '}';
    objRoutes = JSON.parse(strJSON);

    $('.divValidRoutes').empty();

    var sHTML = '';

    if (objRoutes.validRoutes.length != 0) {

        for (var i = 0; i < objRoutes.validRoutes.length; i++) {

            var itm = objRoutes.validRoutes[i];

            sHTML += '<p>' + itm.CityDepart + ' (' + itm.Depart + ') - ' + itm.CityArrive + ' (' + itm.Arrive + ')' + '</p>';
        }
    }

    $('.divValidRoutes').html(sHTML);
}

function PurchaseVoucher_Success(data) {

    try
    {
        $('#spinnerModal').modal('hide');
    } catch (e) { }

    if ((!data.d.ErrorMsg == null && data.d.ErrorMsg != '') || data.d.Result == 'ERROR') {
        ShowModalDialog(data.d.ErrorMsg);
    }
    else {
        $("#divPurchaseAirmiles").modal('hide');

        var vals = data.d.Result.split("|");

        //window.location.href ='VoucherSummary.aspx?VoucherNumber='+ vals[1] + '&SecurityCode=' + vals[2];
        window.location.href = 'VoucherSummary.aspx?param=' + vals[1];
    }
}

function MakeBooking_Success(data) {

    try {
        $('#spinnerModal').modal('hide');
    } catch (e) { }

    if ((!data.d.ErrorMsg == null && data.d.ErrorMsg != '') || data.d.Result == 'ERROR') {
        ShowModalDialog(data.d.ErrorMsg);
    }
    else {
       
        var vals = data.d.Result.split("|");

        //alert('Off We Go!');

        window.location.href ='../b/FlightCal.aspx?VARSSessionID=' + vals[1];
    }
}

function validateFields() {

    var frm = $("[id$='divApplicationContainer']");

    frm.formValidation("validate");

    if ($("[id$='divApplicationContainer']").data('formValidation').isValid()) {
        return true;
    } else {
        bootstrap_alert("Please complete marked fields", 0);
        return false;
    }
}

function InitValidators() {
    $(".numeric").keydown(function (event) {
        // Prevent shift key since its not needed
        if (event.shiftKey == true) {
            event.preventDefault();
        }
        // Allow Only: keyboard 0-9, numpad 0-9, backspace, tab, left arrow, right arrow, delete
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
            // Allow normal operation
        }
        //Allow Decimals?
        else if ((event.keyCode == 190 || event.keyCode == 110) && $(this).hasClass('decimal') == true) {
            //Allow normal operation
        }
        //If '-' sign - make sure we're at the start of the string
        else if (event.keyCode == 189) {
            if ($(this).val() != '') { event.preventDefault(); }
        }
        else {
            // Prevent the rest
            event.preventDefault();
        }
    });
}

window.setUpClick = function (Action, AjaxCall, fnSuccess,voucherType) {

    var formData = $("form").serializeArray();
    formData.push(GetKeyPair("voucherType", voucherType));

    var wsRq = new Object;
    wsRq.webServiceRequest = new Object;

    wsRq.webServiceRequest.ID = 'ButtonMenuClick';
    wsRq.webServiceRequest.Action = Action;
    wsRq.webServiceRequest.formData = formData;
    wsRq.webServiceRequest.Data = null;
    wsRq.webServiceRequest.Data2 = null;
    wsRq.webServiceRequest.Confirm = true;

    var rq = $.toJSON(wsRq);

    try {
        voucherAjaxCall(AjaxCall, rq, fnSuccess);
    }
    catch (err) {
        ShowModalDialog(err.message);
    }
};

function voucherAjaxCall(func, param, fnSuccess) {

    fnSuccess = typeof (fnSuccess) == "undefined" ? null : (fnSuccess == "" ? null : fnSuccess);
    param = (param == null) ? "{}" : param;

    $.ajax({
        url: '../WebServices/VoucherWS.asmx/' + func,
        data: param,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
            try {
                $('#spinnerModal').modal('show');
            } catch (e) { }
        },
        success: function (data) {
            if (fnSuccess != null) {
                fnSuccess(data);
            }
        },
        failure: function (data) {
            if (showLoadingProgress && !bsWait) {
                HideLoadingProgressDialog();
            }
            if (bsWait == true) {
                HideLoading();
            }
            ShowModalDialog(data.d.ErrorMsg);
        }
    });
}

function getMPID(id, wantHash) {

    var bHash = true;
    var sHash = '';

    if (wantHash != null) {
        bHash = wantHash;
    }

    if (bHash == true) {
        sHash = '#';
    }
    return sHash + $("[id$='" + id + "']").attr('id');
}
﻿/* Website Config.js */

function InitWebsiteConfig() {

    try {
        $(".colourpicker").spectrum({
            preferredFormat: "hex", showInput: true,
            chooseText: "Ok",
            cancelText: "Cancel",
            showButtons: true
        });
        /* init colour */
        initPreview();

        $(".colourpicker").on('change.spectrum', function (e, colour) {
            if (typeof ($(this).data("preview")) !== 'undefined') {
                $($(this).data("preview")).css($(this).data("preview-css"), $(this).val());
            }
            if (typeof ($(this).data("preview2")) !== 'undefined') {
                $($(this).data("preview2")).css($(this).data("preview-css2"), $(this).val());
            }
            if (typeof ($(this).data("linked")) !== 'undefined') {
                $("linked").spectrum("set", $(this).val());
            }
        });

        $(".on-off-btn").on('change', function (e, colour) {
            if (typeof ($(this).data("selector")) !== 'undefined') {

                if ($(this).data("action") === '[toggle]') {
                    $($(this).data("selector")).each(function () {
                        if ($(this).hasClass("hidden")) {
                            $(this).removeClass("hidden");
                        } else {
                            $(this).addClass("hidden");
                        }                    
                    });
                }
            }
               
        });


    } catch (e) {
        var x = 1; /* stop lint errors */
    }


}
function initPreview() {
    $(".colourpicker").each(function () {
        if (typeof ($(this).data("preview")) !== 'undefined') {
            $($(this).data("preview")).css($(this).data("preview-css"), $(this).val());
        }
        if (typeof ($(this).data("preview2")) !== 'undefined') {
            $($(this).data("preview2")).css($(this).data("preview-css2"), $(this).val());
        }
    });
}