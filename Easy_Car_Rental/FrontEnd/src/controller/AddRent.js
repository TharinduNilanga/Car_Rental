var searchReqId=$('#txtSearchRequest');
var btnSave=$('#btnsaveRent');
var btnDelete=document.getElementById('btnDeleteRent');
var txtRentId=$('#txtRentId');
var customerEmail=$('#cmbCustomer');
var carRegNo=$('#txtCarRegNo');
var pDate=$('#txtPDate');
var pTime=$('#txtPTime');
var rDate=$('#txtRentReturnDate');
var rTime=$('#txtRentReturnTime');
var LDW=$('#txtRentLDW');
var driver=$('#driverEmail');
var btnDeleteRent=$('#btnDeleteRent');
var updateRent=$('#btnUpdateRent');
var searchRent=$('#txtSearchRent');
var btnSearchRent=$('#btnSearchRent');

function clearAddRent() {
    carRegNo.val("");
    pDate.val("");
    pTime.val("");
    rDate.val("");
    rTime.val("");
    LDW.val("");


}

var baseUrl="http://localhost:8080/BackEnd_war_exploded/";


btnSave.click(function () {
    btnDelete.disabled=false;
    alert("ok")

    var dto={
        renId:txtRentId.val(),
        cusEmail:customerEmail.val(),
        regNo:carRegNo.val(),
        pickUpDate:pDate.val(),
        pickUpTime:pTime.val(),
        returnDate:rDate.val(),
        returnTime:rTime.val(),
        lossDamageWaiver:LDW.val(),
        driverEmail:driver.val()
    }
    $.ajax({
        url:baseUrl+"rental/rental",
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify(dto),
        dataType:'json',
        success:function (resp) {
            if(resp.code==200){
                alert(resp.message)
                clearAddRent();
                loadRentals();
            }else{
                alert(resp.data)
            }

        }
    })


})
$("#txtSearchRequest").keydown(function (event) {
    if (event.key=="Enter"){
        loadRents();
    }
});
btnDeleteRent.click(function () {
    let id=searchReqId.val();
    $.ajax({
        url:baseUrl+"rental/request?reqId="+id,
        method:"DELETE",
        success:function (res) {
            if (res.code==200){
                alert(res.message)
                clearAddRent();
                loadRentals();
            }else{
                alert(res.message)
            }

        }
    })

})
updateRent.click(function () {

    let upDto={
        renId:txtRentId.val(),
        cusEmail:customerEmail.val(),
        regNo:carRegNo.val(),
        pickUpDate:pDate.val(),
        pickUpTime:pTime.val(),
        returnDate:rDate.val(),
        returnTime:rTime.val(),
        lossDamageWaiver:LDW.val(),
        driverEmail:driver.val()
    }
    $.ajax({
        url:baseUrl+"rental/rental",
        method:"PUT",
        contentType:'application/json',
        data:JSON.stringify(upDto),
        dataType:'json',
        success:function (resp) {
            if(resp.code==200){
                alert(resp.message)
                clearAddRent();
                loadRentals();

            }else{
                alert(resp.data)
            }

        }
    })

})
btnSearchRent.click(function () {
    searchRentals();

})
document.getElementById('txtRentId').disabled=true;
loadRents();
function loadRents() {
    $("#tblRequestRentDetailsBody").empty();
    $('#tblRequestRentBody').empty()
    $("#tblRentRequestBody").empty();
    $.ajax({
        url:baseUrl+"rental/request/getAll",
        method:"GET",
        dataType:"json",
        success:function (res) {
            for (const r of res.data){
               // let cusId=r.cusEmail;
              //  console.log(id)
                let row=`<tr><td>`+r.reqId+`</td><td>`+r.cusEmail+`</td><td><img src="${baseUrl+r.lossDamageWaiverSlip}"width="150px"></td></tr>`
                $('#tblRequestRentBody').append(row)

                if (searchReqId.val()==r.reqId){
                /* let d=   Date(r.rentalRequestDetails[0].pickUpDate)
                    alert(d)*/
                       alert((r.rentalRequestDetails[0].pickUpDate))
                    console.log(res.data)
                    let rowNew = `<tr><td>`+r.rentalRequestDetails[0].reqId+`</td><td>`+r.rentalRequestDetails[0].regNo+`</td><td>`+r.rentalRequestDetails[0].pickUpDate+`</td><td>`+r.rentalRequestDetails[0].pickUpTime+`</td><td>`+r.rentalRequestDetails[0].returnDate+`</td><td>`+r.rentalRequestDetails[0].returnTime+`</td><td>`+r.rentalRequestDetails[0].lossDamageWaiver+`</td><td>`+r.rentalRequestDetails[0].driver+`</td></tr>`;
                    $("#tblRequestRentDetailsBody").append(rowNew);
                    settingRentalDetailsClickEvent();

                }


            }


        }
    })

}
function settingRentalDetailsClickEvent() {
   // alert("ok")
    $('#tblRequestRentDetailsBody>tr').click(function () {
        let regNo=$(this).children().eq(1).text();
        let pickUpDate=$(this).children().eq(2).text();
        let pickUpTime=$(this).children().eq(3).text();
        let returnDate=$(this).children().eq(4).text();
        let returnTime=$(this).children().eq(5).text();
        let lDW=$(this).children().eq(6).text();
        alert(regNo+""+pickUpDate+" "+pickUpTime)
        carRegNo.val(regNo);
        $('#txtPDate').val(pickUpDate);
        $('#txtPTime').val(pickUpTime);
        $('#txtRentReturnDate').val(returnDate);
        $('#txtRentReturnTime').val(returnTime);
        $('#txtRentLDW').val(lDW);
        //alert("ok")

    })

}
customerLoad();
function customerLoad() {
    $.ajax({
        url: baseUrl+"rental/customer/getAll",
        method: "GET",
        dataType:"json",
        success:function (resp) {
            for(const c of resp.data){
                let option='<option>'+c.email+'</option>'
                $('#cmbCustomer').append(option)
            }

        }
    })

};
driverLoad();
function driverLoad() {
    $.ajax({
        url: baseUrl+"rental/driver/getAll",
        method: "GET",
        dataType:"json",
        success:function (resp) {
            for(const c of resp.data){
                let option='<option>'+c.driverEmail+'</option>'
                $('#driverEmail').append(option)
            }

        }
    })

};
generateRentId();
///
loadRentals();
function loadRentals() {
    $('#tblRentsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){
                for (const c of resp.data){
                    let row='<tr><td>'+c.renId+'</td><td>'+c.cusEmail+'</td><td>'+c.regNo+'</td><td>'+c.pickUpDate+'</td><td>'+c.pickUpTime+'</td><td>'+c.returnDate+'</td><td>'+c.returnTime+'</td><td>'+c.lossDamageWaiver+'</td><td>'+c.driverEmail+'</td></tr>';
                    $('#tblRentsBody').append(row)
                    
                }

            }
            updateNtClickEvent();
        }
    })

}
function searchRentals() {
    $('#tblRentsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){
                for (const c of resp.data){
                    if (searchRent.val()==c.renId) {
                        let row = '<tr><td>' + c.renId + '</td><td>' + c.cusEmail + '</td><td>' + c.regNo + '</td><td>' + c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate + '</td><td>' + c.returnTime + '</td><td>' + c.lossDamageWaiver + '</td><td>' + c.driverEmail + '</td></tr>';
                        $('#tblRentsBody').append(row)
                    }

                }
                updateNtClickEvent();
            }

        }
    })

}
function updateNtClickEvent() {
    $('#tblRentsBody>tr').click(function () {
        alert("get")
        let renId=$(this).children().eq(0).text();
        let cusEmail=$(this).children().eq(1).text();
        let regNo=$(this).children().eq(2).text();
        let pickUpDate=$(this).children().eq(3).text();
        let pickUpTime=$(this).children().eq(4).text();
        let returnDate=$(this).children().eq(5).text();
        let returnTime=$(this).children().eq(6).text();
        let lossDamageWaiver=$(this).children().eq(7).text();
        let driverEmail=$(this).children().eq(8).text();
        alert(pickUpDate)

            txtRentId.val(renId);
            customerEmail.val(cusEmail);
            carRegNo.val(regNo);
            $('#txtPDate').val(pickUpDate);
            $('#txtPTime').val(pickUpTime);
            $('#txtRentReturnDate').val(returnDate);
            $('#txtRentReturnTime').val(returnTime);
            $('#txtRentLDW').val(lossDamageWaiver);
            $('#driverEmail').val(driverEmail);

    })

}
function generateRentId() {
    $.ajax({
        url: baseUrl+"rental/rental/generateId",
        method: "GET",
        dataType:"json",
        success:function (resp) {
           if(resp.code==200){
               txtRentId.val(resp.data)
           }else {
               alert(resp.data)
           }

        }
    })

};

var regSearch=/^([A-z]{3}-[0-9]{3})$/;
$('#txtSearchRent').keyup(function () {
    let input = $('#txtSearchRent').val();

    if (regSearch.test(input)) {
        $('#txtSearchRent').css('border', '4px solid green')
    } else {
        $('#txtSearchRent').css('border', '4px solid red')
    }
})
