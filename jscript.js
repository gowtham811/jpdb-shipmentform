function resetData() {
    $('#ship-no').val('');
    $('#description').val('');
    $('#source').val('');
    $('#destination').val('');
    $('#shipping-date').val('');
    $('#expected-date').val('');
    $('#ship-no').prop('disabled', false);
    $('#save').prop('disabled', true);
    $('#change').prop('disabled', true);
    $('#reset').prop('disabled', true);
    $('#ship-no').focus();
}


function validateData() {
    var ship_no, description, source, destination, shipping_date, expected_date;
    ship_no = $('#ship-no').val();
    description = $('#description').val();
    source = $('#source').val();
    destination = $('#destination').val();
    shipping_date = $('#shipping-date').val();
    expected_date = $('#expected-date').val();
    if (ship_no === '') {
        $('#ship-no').focus();
        return "";
    }
    if (description === '') {
        $('#description').focus();
        return "";
    }
    if (source === '') {
        $('#source').focus();
        return "";
    }
    if (destination === '') {
        $('#destination').focus();
        return "";
    }
    if (shipping_date === '') {
        $('#shipping-date').focus();
        return "";
    }
    if (expected_date === '') {
        $('#expected-date').focus();
        return "";
    }

    var jsonStrObj = {
        ship_id: ship_no,
        description: description,
        source: source,
        destination: destination,
        shipping_date: shipping_date,
        expected_date: expected_date
    }
    return JSON.stringify(jsonStrObj);
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") return "";
    var PUTrequest = createPUTRequest(token, jsonStrObj, dbName, relName);
    jQuery.ajaxSetup({
        async: false
    });
    var resJsonObj = executeCommandAtGivenBaseUrl(PUTrequest, baseURL, jpdbIML);
    jQuery.ajaxSetup({
        async: true
    });
    console.log(resJsonObj);
    resetData();
    $('#ship-no').focus();
    alert("Shipment Details Saved!");
}


function changeData() {
    $('#change').prop('disabled', true);
    jsonChange = validateData();
    var updateRequest = createUPDATERecordRequest(token, jsonChange, dbName, relName, localStorage.getItem('shiprecno'));
    jQuery.ajaxSetup({
        async: false
    });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, baseURL, jpdbIML);
    jQuery.ajaxSetup({
        async: true
    });
    console.log(resJsonObj);
    resetData();
    $('#ship-no').focus();
}

function getShipNo() {
    var shipNoJsonObj = getShipNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(token, dbName, relName, shipNoJsonObj);
    jQuery.ajaxSetup({
        async: false
    });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, baseURL, jpdbIRL);
    jQuery.ajaxSetup({
        async: true
    });
    if (resJsonObj.status === 400) {
        $('#save').prop('disabled', false);
        $('#reset').prop('disabled', false);
        $('#description').focus();
    } else if (resJsonObj.status === 200) {
        $('#ship-no').prop('disabled', true);
        fillData(resJsonObj);
        $('#change').prop('disabled', false);
        $('#reset').prop('disabled', false);
        $('#description').focus();
    }
}



function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $('#description').val(record.description);
    $('#source').val(record.source);
    $('#destination').val(record.destination);
    $('#shipping-date').val(record.shipping_date);
    $('#expected-date').val(record.expected_date);
}



var token = "90932083|-31949218636130999|90961982";
var dbName = "DELIVERY-DB";
var relName = "SHIPMENT-TABLE";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var baseURL = "http://api.login2explore.com:5577";

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('shiprecno', lvData.rec_no);
}

function getShipNoAsJsonObj() {
    var shipno = $('#ship-no').val();
    var jsonId = {
        ship_id: shipno
    }
    return JSON.stringify(jsonId);
}