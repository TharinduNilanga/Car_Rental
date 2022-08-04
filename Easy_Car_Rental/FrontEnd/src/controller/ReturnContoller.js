var txtSearchRentByCustomer=$('#txtSearchRentByCustomer');
var txtSearchRentById=$('#txtSearchRequestById');

var returnId=$('#txtRetId');
var rentId=$('#txtReturnRentalId');
var customerEmail=$('#txtReturnCusId');
var carRegisterNO=$('#txtReturnRegNo');
var lossDamageCost=$('#txtReturnLossDamageWavier');
var drivedKm=$('#txtKm');
var damages=$('#txtDamages');
var totalPayament=$('#txtTotalPayment');
var txtSearchReturn=$('#txtSearchReturn')

var lblLossDamage=$('#lblLossDamage');
var lblDamages=$('#lblDamage');
var lblTotal=$('#lblTotal');

var btnSearchRentByCustomer=$('#btnSearchRentByCustomer');
var btnSearchRentById=$('#btnSearchRequestById');
var btnSReturnById=$('#btnSearchReturn');
    /*document.getElementById('btnSearchReturn')*/


function clearReturn(){
    rentId.val("");
    customerEmail.val("");
    carRegisterNO.val("");
    lossDamageCost.val("");
    drivedKm.val("");
    damages.val("");
    totalPayament.val("");
}
btnSearchRentByCustomer.click(function () {
    searchRentByCustomer();
});
btnSearchRentById.click(function () {
            searchRentById();
})
btnSave=$('#btnSaveReturn');
btnUpdate=$('#btnUpdateReturn');
btnDelete=$('#btnDeleteReturn');
btnCalc=$('#btnCalculate');



var pDate="";
var rDate="";

var baseUrl="http://localhost:8080/BackEnd_war_exploded/";
getRentals();
function getRentals() {
    $('#tblRentDetailsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){
                for (const c of resp.data){
                    let row='<tr><td>'+c.renId+'</td><td>'+c.cusEmail+'</td><td>'+c.regNo+'</td><td>'+c.pickUpDate+'</td><td>'+c.pickUpTime+'</td><td>'+c.returnDate+'</td><td>'+c.returnTime+'</td><td>'+c.lossDamageWaiver+'</td><td>'+c.driverEmail+'</td></tr>';
                    $('#tblRentDetailsBody').append(row)

                }
                rentClickEvent();

            }

        }
    })

}
generateReturnId()
function generateReturnId() {
    $.ajax({
        url:baseUrl+"rental/Return/generateId",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){
                returnId.val(resp.data)
            }

        }
    })

}

function searchRentByCustomer() {
    $('#tblRentDetailsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){

                for (const c of resp.data){
                    if (txtSearchRentByCustomer.val()==c.cusEmail) {
                        let row = '<tr><td>' + c.renId + '</td><td>' + c.cusEmail + '</td><td>' + c.regNo + '</td><td>' + c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate + '</td><td>' + c.returnTime + '</td><td>' + c.lossDamageWaiver + '</td><td>' + c.driverEmail + '</td></tr>';
                        $('#tblRentDetailsBody').append(row)
                    }

                }
               rentClickEvent();
            }

        }
    })

}

function searchRentById() {
    $('#tblRentDetailsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){

                for (const c of resp.data){
                    if (txtSearchRentById.val()==c.renId) {
                        let row = '<tr><td>' + c.renId + '</td><td>' + c.cusEmail + '</td><td>' + c.regNo + '</td><td>' + c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate + '</td><td>' + c.returnTime + '</td><td>' + c.lossDamageWaiver + '</td><td>' + c.driverEmail + '</td></tr>';
                        $('#tblRentDetailsBody').append(row)
                    }

                }
               rentClickEvent();
            }

        }
    })

}

setCustomer();
function setCustomer() {
    $.ajax({
        url: baseUrl+"rental/customer/getAll",
        method: "GET",
        dataType:"json",
        success:function (resp) {
            for(const c of resp.data){
                let option='<option>'+c.email+'</option>'
                $('#txtSearchRentByCustomer').append(option)
            }
            rentClickEvent();

        }
    })

};
function rentClickEvent() {
    $('#tblRentDetailsBody>tr').click(function () {
        let renId=$(this).children().eq(0).text();
        let cusEmail=$(this).children().eq(1).text();
        let regNo=$(this).children().eq(2).text();
        let pickUpDate=$(this).children().eq(3).text();
        let pickUpTime=$(this).children().eq(4).text();
        let returnDate=$(this).children().eq(5).text();
        let returnTime=$(this).children().eq(6).text();
        let lossDamageWaiver=$(this).children().eq(7).text();
        let driverEmail=$(this).children().eq(8).text();


        rentId.val(renId);
        customerEmail.val(cusEmail);
        carRegisterNO.val(regNo);
        lossDamageCost.val(lossDamageWaiver);

        pDate=pickUpDate;
        rDate=returnDate;

        // var diffDays = (rDate - pDate)/1000/60/60/24;
        // alert(diffDays)

    })

}


btnCalc.click(function () {

    prices()


})
btnSave.click(function () {
    let dto={
        retId:returnId.val(),
        renId:rentId.val(),
        cusEmail:customerEmail.val(),
        regNo:carRegisterNO.val(),
        lossDamageWaiver:lossDamageCost.val(),
        driveKm:drivedKm.val(),
        damages:damages.val(),
        totalPayment:totalPayament.val()
    }
   $.ajax({
       url:baseUrl+"rental/Return",
       method:"POST",
       contentType:"application/json",
       data:JSON.stringify(dto),
       success:function (res) {
           if (res.code==200){
               alert(res.message)
               getAllReturn();
               generateReturnId();
               clearReturn();
           }else {
               alert(res.data)
           }

       }

   })

})
btnDelete.click(function () {
    let rId=returnId.val();
    $.ajax({
        url:baseUrl+"rental/Return?retId="+rId,
        method:"DELETE",
        success:function (res) {
                if(res.code==200){
                    alert(res.message);
                    getAllReturn();
                    generateReturnId();
                    clearReturn();
                }else {
                    alert(res.message)
                }
        }
    })

})
btnSReturnById.click(function () {
    //alert("ok")
   SearchReturn();

})
function prices() {
    let freeKmPrice=0;
    let extraKmPrice=0;
    let monthlyRate=0;

    $.ajax({
        url:baseUrl+"rental/car/getAll",
        method:"GET",
        dataType:'json',
        success:function (res) {
               for (const c of res.data){
                   var dat1=new Date(pDate);
                   var dat2=new Date(rDate)
                 //  alert(dat1+"?............?"+dat2)

                   var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                   var diffDays = Math.abs((dat1.getTime() - dat2.getTime()) / (oneDay));
                   alert(diffDays);

                   if (c.regNo==carRegisterNO.val()) {
                       freeKmPrice = c.freeMileagePrice;
                       extraKmPrice = c.extraKmPrice;
                       monthlyRate = c.monthlyRate;
                       let no = drivedKm.val().length;
                       let km = drivedKm.val().substring(0, no - 2);
                       let LDW = lossDamageCost.val();
                       let personDamage = damages.val();
                       document.getElementById('lblDamage').innerHTML = personDamage + ".00/="
                       if (diffDays < 30) {
                           let price = freeKmPrice * diffDays;
                           let dayKM = diffDays * 100;
                           //200<100
                           if (km < dayKM) {
                               //3000>1000
                               if (LDW > personDamage) {
                                   let ldw = LDW - personDamage;
                                   totalPayament.val(price);
                                   document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                   document.getElementById("lblTotal").innerHTML = price + ".00/="
                                   //3000>4000
                               } else {
                                   let addedLdw = personDamage - LDW;
                                   totalPayament(price + addedLdw);
                                   document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                   document.getElementById("lblTotal").innerHTML = (price + addedLdw) + ".00/="

                               }
                           } else {
                               let calKm=km-dayKM;
                               let addedPrice=calKm*extraKmPrice;
                               let newPrice=addedPrice+price;
                               //2000>1000
                               if (LDW > personDamage) {
                                   let ldw = LDW - personDamage;
                                   totalPayament.val(newPrice);
                                   document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                   document.getElementById("lblTotal").innerHTML = newPrice + ".00/="
                                   //3000>4000
                               } else {
                                   let addedLdw = personDamage - LDW;
                                   totalPayament(newPrice + addedLdw);
                                   document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                   document.getElementById("lblTotal").innerHTML = (newPrice + addedLdw) + ".00/="

                               }
                           }
                           // alert(price)
                       } else {
                           let dayKM = diffDays * 100;
                           if (diffDays>30){
                               let day=diffDays-30;
                               let price=day*freeKmPrice;
                               let calcPrice=price+monthlyRate;
                               /*if (LDW > personDamage) {
                                   let ldw = LDW - personDamage;
                                   totalPayament.val(calcPrice);
                                   document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                   document.getElementById("lblTotal").innerHTML = calcPrice + ".00/="
                                   //3000>4000
                               } else {
                                   let addedLdw = personDamage - LDW;
                                   totalPayament(calcPrice + addedLdw);
                                   document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                   document.getElementById("lblTotal").innerHTML = (calcPrice + addedLdw) + ".00/="

                               }*/
                               if (km < dayKM) {
                                   //3000>1000
                                   if (LDW > personDamage) {
                                       let ldw = LDW - personDamage;
                                       totalPayament.val(calcPrice);
                                       document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                       document.getElementById("lblTotal").innerHTML = calcPrice + ".00/="
                                       //3000>4000
                                   } else {
                                       let addedLdw = personDamage - LDW;
                                       totalPayament(calcPrice + addedLdw);
                                       document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                       document.getElementById("lblTotal").innerHTML = (calcPrice + addedLdw) + ".00/="

                                   }
                               } else {
                                   let calKm=km-dayKM;
                                   let addedPrice=calKm*extraKmPrice;
                                   let newPrice=addedPrice+calcPrice;
                                   //2000>1000
                                   if (LDW > personDamage) {
                                       let ldw = LDW - personDamage;
                                       totalPayament.val(newPrice);
                                       document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                       document.getElementById("lblTotal").innerHTML = newPrice + ".00/="
                                       //3000>4000
                                   } else {
                                       let addedLdw = personDamage - LDW;
                                       totalPayament(newPrice + addedLdw);
                                       document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                       document.getElementById("lblTotal").innerHTML = (newPrice + addedLdw) + ".00/="

                                   }
                               }

                           }else {
                               let price=monthlyRate;
                               if (km < dayKM) {
                                   //3000>1000
                                   if (LDW > personDamage) {
                                       let ldw = LDW - personDamage;
                                       totalPayament.val(price);
                                       document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                       document.getElementById("lblTotal").innerHTML = price + ".00/="
                                       //3000>4000
                                   } else {
                                       let addedLdw = personDamage - LDW;
                                       totalPayament(price + addedLdw);
                                       document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                       document.getElementById("lblTotal").innerHTML = (price + addedLdw) + ".00/="

                                   }
                               } else {
                                   let calKm=km-dayKM;
                                   let addedPrice=calKm*extraKmPrice;
                                   let newPrice=addedPrice+price;
                                   //2000>1000
                                   if (LDW > personDamage) {
                                       let ldw = LDW - personDamage;
                                       totalPayament.val(newPrice);
                                       document.getElementById("lblLossDamage").innerHTML = ldw + ".00/="
                                       document.getElementById("lblTotal").innerHTML = newPrice + ".00/="
                                       //3000>4000
                                   } else {
                                       let addedLdw = personDamage - LDW;
                                       totalPayament(newPrice + addedLdw);
                                       document.getElementById("lblLossDamage").innerHTML = "0.00/="
                                       document.getElementById("lblTotal").innerHTML = (newPrice + addedLdw) + ".00/="

                                   }
                               }
                           }

                       }
                   }

                   }

            freeKmPrice="";
            extraKmPrice="";
            monthlyRate="";


        }
    })


}
getAllReturn();
function getAllReturn() {
    $('#tblReturnBody').empty();
    $.ajax({
        url:baseUrl+"rental/Return/getAll",
        method:"GET",
        dataType:'json',
        success:function (res) {

            for (const r of  res.data){
                let row='<tr><td>'+r.retId+'</td><td>'+r.renId+'</td><td>'+r.cusEmail+'</td><td>'+r.regNo+'</td><td>'+r.lossDamageWaiver+'</td><td>'+r.driveKm+'</td><td>'+r.damages+'</td><td>'+r.totalPayment+'</td></tr>'
                $('#tblReturnBody').append(row)

            }
            clickEvent();
        }
    })

}
function SearchReturn() {
    $('#tblReturnBody').empty();
    $.ajax({
        url:baseUrl+"rental/Return/getAll",
        method:"GET",
        dataType:'json',
        success:function (res) {

            for (const r of  res.data){
                if (txtSearchReturn.val()==r.retId) {
                    let row = '<tr><td>' + r.retId + '</td><td>' + r.renId + '</td><td>' + r.cusEmail + '</td><td>' + r.regNo + '</td><td>' + r.lossDamageWaiver + '</td><td>' + r.driveKm + '</td><td>' + r.damages + '</td><td>' + r.totalPayment + '</td></tr>'
                    $('#tblReturnBody').append(row);
                }

            }
            clickEvent();
        }
    })

}
function clickEvent() {
    $('#tblReturnBody>tr').click(function () {

        let retId=$(this).children().eq(0).text();
        let renId=$(this).children().eq(1).text();
        let cusEmail=$(this).children().eq(2).text();
        let regNo=$(this).children().eq(3).text();
        let lossDamageWaiver=$(this).children().eq(4).text();
        let driveKm=$(this).children().eq(5).text();
        let damage=$(this).children().eq(6).text();
        let totalPayment=$(this).children().eq(7).text();



         returnId.val(retId)
         rentId.val(renId)
         customerEmail.val(cusEmail)
         carRegisterNO.val(regNo)
         lossDamageCost.val(lossDamageWaiver)
         drivedKm.val(driveKm)
         damages.val(damage)
         totalPayament.val(totalPayment)
    })

}
var regSearch=/^([A-z]{3}-[0-9]{3})$/;
$('#txtSearchRequestById').keyup(function () {
    let input = $('#txtSearchRequestById').val();

    if (regSearch.test(input)) {
        $('#txtSearchRequestById').css('border', '4px solid green')
    } else {
        $('#txtSearchRequestById').css('border', '4px solid red')
    }
})

$('#txtSearchReturn').keyup(function () {
    let input = $('#txtSearchReturn').val();

    if (regSearch.test(input)) {
        $('#txtSearchReturn').css('border', '4px solid green')
    } else {
        $('#txtSearchReturn').css('border', '4px solid red')
    }
})