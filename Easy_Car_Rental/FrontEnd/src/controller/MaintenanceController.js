var maintenanceId=$('#txtMaintenanceId');
var maintenanceCar=$('#cmbCar');
var repairType=$('#cmbRepairType');
var searchMaintenance=$('#txtSearchmainId');
var searchMainCar=$('#txtSearchCarDetail')

var btnSaveMaintenance=$('#btnSaveMaintenance');
var btnUpdateMaintenance=$('#btnUpdateMaintenance');
var btnDeleteMaintenance=$('#btnDeleteMaintenance');
var btnSearchMaintenance=$('#btnSearchMaintenance');
var btnMaintenanceCar=$('#btnmainCarRegNo');



var baseUrl="http://localhost:8080/BackEnd_war_exploded/";
loadAllCars();
function loadAllCars() {
    $.ajax({
        url: baseUrl + "rental/car/getAll",
        method: "GET",
        dataType: 'json',
        success: function (resp) {
            for (const c of resp.data) {
                let select = '<option>' + c.regNo + '</option>';
                $('#cmbCar').append(select);

            }


        }
    })
}
generateMaintenanceId();
function generateMaintenanceId() {
    $.ajax({
        url: baseUrl+"rental/maintenance/generateId",
        method: "GET",
        dataType: 'json',
        success:function (res) {
         maintenanceId.val(res.data)

        }
    })

}
btnSaveMaintenance.click(function () {
    let dto={
        maiId:maintenanceId.val(),
        regNo:maintenanceCar.val(),
        serviceType:repairType.val()
    }
    $.ajax({
        url:baseUrl+"rental/maintenance",
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify(dto),
        success:function (res) {
            if (res.code==200){
                alert(res.message);
                getAllMaintenance();
                generateMaintenanceId();
            }else {
                alert(res.message+" "+res.data)

            }

        }
    })

})
btnUpdateMaintenance.click(function () {
    let dto={
        maiId:maintenanceId.val(),
        regNo:maintenanceCar.val(),
        serviceType:repairType.val()
    }
    $.ajax({
        url:baseUrl+"rental/maintenance",
        method:"PUT",
        contentType:'application/json',
        data:JSON.stringify(dto),
        success:function (res) {
            if (res.code==200){
                alert(res.message);
                getAllMaintenance();
                generateMaintenanceId();
            }else {
                alert(res.message+" "+res.data)

            }

        }
    })

})
btnDeleteMaintenance.click(function () {
    let id=maintenanceId.val();
    $.ajax({
        url:baseUrl+"rental/maintenance?maiId="+id,
        method:"DELETE",
        dataType:'json',
        success:function (res) {
            if (res.code==200){
                alert(res.message)
                getAllMaintenance();
                generateMaintenanceId();
            }else {
                alert(res.message+" "+res.data)
            }

        }
    })

})
btnSearchMaintenance.click(function () {
   searchMaintenanceById();

})
btnMaintenanceCar.click(function () {
        loadCars();
   // alert("ok")
})
getAllMaintenance();
function getAllMaintenance() {
    $('#tblMaintenanceBody').empty();
    $.ajax({
        url:baseUrl+"rental/maintenance/getAll",
        method:"GET",
        dataType:'json',
        success:function (res) {
            for (const m of res.data){
                let row='<tr><td>'+m.maiId+'</td><td>'+m.regNo+'</td><td>'+m.serviceType+'</td></tr>'
                $('#tblMaintenanceBody').append(row)
                if (searchMaintenance.val()==m.maiId){
                    $('#tblMaintenanceBody').empty();
                    let row='<tr><td>'+m.maiId+'</td><td>'+m.regNo+'</td><td>'+m.serviceType+'</td></tr>'
                    $('#tblMaintenanceBody').append(row)
                }
            }
            maintenanceClickEvent();

        }
    })

}
function searchMaintenanceById() {
    $('#tblMaintenanceBody').empty();
    $.ajax({
        url:baseUrl+"rental/maintenance/getAll",
        method:"GET",
        dataType:'json',
        success:function (res) {
            for (const m of res.data){
                if (searchMaintenance.val()==m.maiId){

                    let row='<tr><td>'+m.maiId+'</td><td>'+m.regNo+'</td><td>'+m.serviceType+'</td></tr>'
                    $('#tblMaintenanceBody').append(row)
                }
            }
            maintenanceClickEvent();

        }
    })

}
function maintenanceClickEvent() {
    $('#tblMaintenanceBody>tr').click(function () {
        let mainId=$(this).children().eq(0).text();
        let carNo=$(this).children().eq(1).text();
        let type=$(this).children().eq(2).text();

        maintenanceId.val(mainId);
        maintenanceCar.val(carNo);
        repairType.val(type);
    })
}
function loadCars() {
    $("#tblCarDetailsBody").empty();
    $.ajax({
        url:baseUrl+"rental/car/getAll",
        method: "GET",
        dataType:'json',
        success:function (resp) {
            for (const c of resp.data){
               // console.log(baseUrl+c.carDetails[0].firstImg)
                    if (searchMainCar.val()==c.regNo) {
                        let row1 = `<tr><td>` + c.carDetails[0].regNo + `</td><td><img src="${baseUrl + c.carDetails[0].firstImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].secondImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].thirdImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].fourthImg}" width="150px"></td></tr>`;
                        $("#tblCarDetailsBody").append(row1);
                    }
            }


        }
    })

}
var regSearch=/^([A-z]{3}-[0-9]{3})$/;
$('#txtSearchmainId').keyup(function () {
    let input = $('#txtSearchmainId').val();

    if (regSearch.test(input)) {
        $('#txtSearchmainId').css('border', '4px solid green')
    } else {
        $('#txtSearchmainId').css('border', '4px solid red')
    }
})
$('#txtSearchCarDetail').keyup(function () {
    let input = $('#txtSearchCarDetail').val();

    if (regSearch.test(input)) {
        $('#txtSearchCarDetail').css('border', '4px solid green')
    } else {
        $('#txtSearchCarDetail').css('border', '4px solid red')
    }
})