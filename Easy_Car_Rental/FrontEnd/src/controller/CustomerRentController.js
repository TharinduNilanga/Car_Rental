
var regNo=$('#cars');
var pickUpDate=$('#txtPickUpDate');
var pickUpTime=$('#txtPickUpTime');
var returnDate=$('#txtReturnDate');
var returnTime=$('#txtReturnTime');
var driver=$('#cmbRequestDriver');
var LossDamageWavier=$('#cmbLossDamage');


var btnClear=$('#btnClear');
var btnAddToCart=$('#btnAddToCart');
var btnSave=$('#btnRequestRent');
var myfile=document.getElementById('LDWImg');
var ttl=$('#totalLWD');


var cartArray=new Array();
/*var image=new Array();*/

var baseUrl="http://localhost:8080/BackEnd_war_exploded/";
let id="";
let total="";

generateId()
function generateId() {
    $.ajax({
        url:baseUrl+"rental/request/generateId",
        method:"GET",

        success:function (resp) {
            if (resp.code===200){
                id=resp.data;
                console.log(id)
            }else {
                alert("error")
            }

        }
    })

}
 btnAddToCart.click(function () {
   //alert(pickUpTime.val())
     //alert($('#cmbRequestDriver').val())

        if (isExists(regNo.val())==false){
            cartArray.push(new AddToCart(
                regNo.val(),
                pickUpDate.val(),
                pickUpTime.val(),
                returnDate.val(),
                returnTime.val(),
                LossDamageWavier.val(),
                $('#cmbRequestDriver').val()
            ));

            setDataToTable()
            calculateLossDamage();
            clearRequest();
            ttl.val(total)
        }else {
            alert("Select Another Vehicle")
        }
})
function isExists(regNo){
    for (let i=0;i<cartArray.length;i++){
        if (cartArray[i].getRegNo()==regNo){
            return true;
        }
    }
    return false;
}
function calculateLossDamage(){
    total=0;
        let LDW=0;
        for (let i=0;i<cartArray.length;i++){
            LDW+=parseInt(cartArray[i].getLossDamageWaiver());
        }
   total=LDW;

}
var detailsArray=new Array();
btnSave.click(function () {
    alert("ok")
    let s = document.getElementById("CusLabel").innerHTML;
    let formData = new FormData();
    var dto={
        reqId:id,
        cusEmail:s,
        rentalRequestDetails: detailsArray
    }
   for (let i=0;i<cartArray.length;i++){

       let arr = {
           reqId: id,
           regNo: cartArray[i].getRegNo(),
           pickUpDate: cartArray[i].getPickUpDate(),
           pickUpTime: cartArray[i].getPickUpTime(),
           returnDate: cartArray[i].getReturnDate(),
           returnTime: cartArray[i].getReturnTime(),
           lossDamageWaiver: cartArray[i].getLossDamageWaiver(),
           driver: cartArray[i].getDriver()
       }
       detailsArray.push(arr);

    }

    let img=$('#LDWImg')[0].files[0];
    let imageName=$('#LDWImg')[0].files[0].name;
    formData.append("dto", new Blob([JSON.stringify(dto)], {
        type: "application/json"
    }));

   formData.append("img",img,imageName)


    $.ajax({
        url: baseUrl+"rental/request",
        method: "POST",
        async: true,
        contentType:false,
        processData: false,

        data: formData,// if we send data with the request
        success: function (res) {
            alert(res.message);
            generateId();



        },
        error:function () {
            alert("error")
        }
    })


})

myfile.addEventListener("change",function () {
    let file =document.getElementById('LDWImg');
   file.src=URL.createObjectURL(event.target.files[0])
    $("#display").css({
        "background":'url('+file.src+')' ,
        "background-size": "cover",
        "height": "200px",
    });

})

function setDataToTable(){
    $('#tblRentRequestBody').empty();
    for (let i=0;i<cartArray.length;i++){
        let row='<tr><td>'+cartArray[i].getRegNo()+'</td>' +
            '<td>'+cartArray[i].getPickUpDate()+'</td>' +
            '<td>'+cartArray[i].getPickUpTime()+'</td>' +
            '<td>'+cartArray[i].getReturnDate()+'</td>' +
            '<td>'+cartArray[i].getReturnTime()+'</td>' +
            '<td>'+cartArray[i].getDriver()+'</td>' +
            '<td>'+cartArray[i].getLossDamageWaiver()+'</td></tr>';
        $('#tblRentRequestBody').append(row)
    }
   //Event();


}
btnClear.click(function () {
Event();
alert("select the row from table then it deleted....")
})
function Event() {
    $('#tblRentRequestBody>tr').click(function () {
       let regNo=$(this).children().eq(0).text();
            for (let i=0;i<cartArray.length;i++){
                if (cartArray[i].getRegNo()==regNo){
                   cartArray.splice(i,1);
                   $(this).remove();
                }
            }

    })

};
function clearRequest() {
    regNo.val("");
    pickUpDate.val("");
    pickUpTime.val("")
    returnDate.val("");
    returnTime.val("");
    driver.val("");
    LossDamageWavier.val("");


}

/*var searchReqId=$('#txtSearchRequest');
$("#txtSearchRequest").keydown(function (event) {
    if (event.key=="Enter"){
        loadData();
    }
});

loadData();*/
/*
function loadData() {
    $("#tblRequestRentDetailsBody").empty();
    $('#tblRequestRentBody').empty()
    $("#tblRentRequestBody").empty();
    $.ajax({
        url:baseUrl+"rental/request/getAll",
        method:"GET",
        dataType:"json",
        success:function (res) {
            for (const r of res.data){
                let cusId=r.cusEmail;
                console.log(id)

                    let row1 = `<tr><td>`+r.rentalRequestDetails[0].regNo+`</td><td>`+r.rentalRequestDetails[0].pickUpDate+`</td><td>`+r.rentalRequestDetails[0].pickUpTime+`</td><td>`+r.rentalRequestDetails[0].returnDate+`</td><td>`+r.rentalRequestDetails[0].returnTime+`</td><td>`+r.rentalRequestDetails[0].driver+`</td><td>`+r.rentalRequestDetails[0].lossDamageWaiver+`</td><td><img src="${baseUrl + r.rentalRequestDetails[0].lossDamageWaiverSlip}" width="150px"></td></tr>`;
                    $("#tblRentRequestBody").append(row1);


              let row='<tr><td>'+r.reqId+'</td><td>'+r.cusEmail+'</td></tr>'
              $('#tblRequestRentBody').append(row)

                if (searchReqId.val()==r.reqId){
                    let rowNew = `<tr><td>`+r.rentalRequestDetails[0].reqId+`</td><td>`+r.rentalRequestDetails[0].regNo+`</td><td>`+r.rentalRequestDetails[0].pickUpDate+`</td><td>`+r.rentalRequestDetails[0].pickUpTime+`</td><td>`+r.rentalRequestDetails[0].returnDate+`</td><td>`+r.rentalRequestDetails[0].returnTime+`</td><td>`+r.rentalRequestDetails[0].lossDamageWaiver+`</td><td>`+r.rentalRequestDetails[0].driver+`</td></tr>`;
                    $("#tblRequestRentDetailsBody").append(rowNew);
                }

            }

        }
    })

}*/
