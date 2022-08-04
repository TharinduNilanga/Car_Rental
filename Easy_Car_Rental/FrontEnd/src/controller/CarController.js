var  RegNo=$('#txtCarRegisterNo');
var  Brand=$('#txtCarBrand');
var  carType=$('#cmbCarType');
var  DriveKm=$('#txtCarDrivedKm');
var  passenger=$('#cmbCarPassenger');
var  transmission=$('#cmbTransmission');
var  fuelType=$("#cmbFuelType");
var  DailyRate=$('#txtDailyRate');
var  MonthlyRate=$('#txtMonthlyRate');
var  mileagePrice=$('#txtMileagePrice');
var  extraKm=$('#txtExtraKm');
var  carColor=$('#txtcarColor');


var btnSave=$('#btnAddCar');
var btnCarUpdate=$('#btnAddCar');
var btnDelete=$('#btnAddCar');

var baseUrl="http://localhost:8080/BackEnd_war_exploded/";
var url="file:///C:/Program%20Files/ApacheTomcat/webapps/BackEnd_war/uploads/"

btnSave.click(function () {
    alert("ok")
        let dto={
            regNo:RegNo.val(),
            brand:Brand.val(),
            type:carType.val(),
            driveKm:DriveKm.val(),
            noOfPassengers:passenger.val(),
            transmission:transmission.val(),
            fuelType:fuelType.val(),
            dailyRate:DailyRate.val(),
            monthlyRate:MonthlyRate.val(),
            freeMileagePrice:mileagePrice.val(),
            extraKmPrice:extraKm.val(),
            color:carColor.val()
        }

        let firstImg=$('#img1')[0].files[0];
        let firstImgName=$('#img1')[0].files[0].name;

        let secondImg=$('#img2')[0].files[0];
        let secondImgName=$('#img2')[0].files[0].name;

        let thirdImg=$('#img3')[0].files[0];
        let thirdImgName=$('#img3')[0].files[0].name;

        let fourthImg=$('#img4')[0].files[0];
        let fourthImgName=$('#img4')[0].files[0].name;

        let form=new FormData();
        form.append("dto", new Blob([JSON.stringify(dto)], {
                        type: "application/json"
            }));

        form.append("firstImg",firstImg,firstImgName);
        form.append("secondImg",secondImg,secondImgName);
        form.append("thirdImg",thirdImg,thirdImgName);
        form.append("fourthImg",fourthImg,fourthImgName);

        $.ajax({
           url: baseUrl+"rental/car",
            method: "POST",
            async: true,
            contentType:false,
            processData: false,

            data: form,// if we send data with the request
            success: function (res) {
                alert("ok")
                loadData();
                clearCar();
            }
        });

    console.log(JSON.stringify(dto))
});
btnCarUpdate.click(function () {
    alert("ok")
    let dto={
        regNo:RegNo.val(),
        brand:Brand.val(),
        type:carType.val(),
        driveKm:DriveKm.val(),
        noOfPassengers:passenger.val(),
        transmission:transmission.val(),
        fuelType:fuelType.val(),
        dailyRate:DailyRate.val(),
        monthlyRate:MonthlyRate.val(),
        freeMileagePrice:mileagePrice.val(),
        extraKmPrice:extraKm.val(),
        color:carColor.val()
    }

    let firstImg=$('#img1')[0].files[0];
    let firstImgName=$('#img1')[0].files[0].name;

    let secondImg=$('#img2')[0].files[0];
    let secondImgName=$('#img2')[0].files[0].name;

    let thirdImg=$('#img3')[0].files[0];
    let thirdImgName=$('#img3')[0].files[0].name;

    let fourthImg=$('#img4')[0].files[0];
    let fourthImgName=$('#img4')[0].files[0].name;

    let form=new FormData();
    form.append("dto", new Blob([JSON.stringify(dto)], {
        type: "application/json"
    }));

    form.append("firstImg",firstImg,firstImgName);
    form.append("secondImg",secondImg,secondImgName);
    form.append("thirdImg",thirdImg,thirdImgName);
    form.append("fourthImg",fourthImg,fourthImgName);

    $.ajax({
        url: baseUrl+"rental/car",
        method: "PUT",
        async: true,
        contentType:false,
        processData: false,

        data: form,// if we send data with the request
        success: function (res) {
            alert("ok")
            loadData();
            clearCar();
        }
    });

    console.log(JSON.stringify(dto))
});
btnDelete.click(function () {
    let id=RegNo.val();
    $.ajax({
        url:baseUrl+"rental/car?regNo="+id,
        method:"DELETE",
        dataType: 'json',
        success:function (res) {
            if (res.code==200){
                alert(res.message)
                loadData();
                clearCar();
            }

        }
    })

})
function clearCar() {
    RegNo.val("")
    Brand.val("")
    DriveKm.val("")
    transmission.val("")
    DailyRate.val("")
    MonthlyRate.val("")
    mileagePrice.val("")
    extraKm.val("")
    carColor.val("")


}
loadData();
function loadData() {
    $('#tblCarsBody').empty();
    $.ajax({
        url:baseUrl+"rental/car/getAll",
        method: "GET",
        dataType:'json',
        success:function (resp) {
            for (const c of resp.data){
                console.log(baseUrl+c.carDetails[0].firstImg)
                let row='<tr><td>'+c.regNo+'</td><td>'+c.brand+'</td>' +
                    '<td>'+c.type+'</td><td>'+c.driveKm+'</td>' +
                    '<td>'+c.noOfPassengers+'</td>' +
                    '<td>'+c.transmission+'</td>' +
                    '<td>'+c.fuelType+'</td>' +
                    '<td>'+c.dailyRate+'</td>' +
                    '<td>'+c.monthlyRate+'</td><td>'+c.freeMileagePrice+'</td><td>'+c.extraKmPrice+'</td><td>'+c.color+'</td></tr>'
                $('#tblCarsBody').append(row)
                let select='<option>'+c.regNo+'</option>';
                $('#cars').append(select);

                let row1 = `<tr><td>`+c.carDetails[0].regNo+`</td><td><img src="${baseUrl + c.carDetails[0].firstImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].secondImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].thirdImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].fourthImg}" width="150px"></td></tr>`;
                $("#tblCarDetailsBody").append(row1);
            }


        }
    })

}

var regExRegNo = /^([A-Z]{3}-[0-9]{4})$/;
RegNo.keyup(function () {
    let input = RegNo.val();

    if (regExRegNo.test(input)) {
        RegNo.css('border', '4px solid green')
    } else {
        RegNo.css('border', '4px solid red')
    }
})

var regExBrand = /^([A-z]*)$/;
Brand.keyup(function () {
    let input = Brand.val();

    if (regExBrand.test(input)) {
        Brand.css('border', '4px solid green')
    } else {
        Brand.css('border', '4px solid red')
    }
})

var regExKm = /^([0-9]{1,9}km|[0-9]{1,9}Km)$/;
DriveKm.keyup(function () {
    let input = DriveKm.val();

    if (regExKm.test(input)) {
        DriveKm.css('border', '4px solid green')
    } else {
        DriveKm.css('border', '4px solid red')
    }
})

var regExPrice = /^([0-9]{1,9}.[0]{1,2})$/;
DailyRate.keyup(function () {
    let input = DailyRate.val();

    if (regExPrice.test(input)) {
        DailyRate.css('border', '4px solid green')
    } else {
        DailyRate.css('border', '4px solid red')
    }
})

MonthlyRate.keyup(function () {
    let input = MonthlyRate.val();

    if (regExPrice.test(input)) {
        MonthlyRate.css('border', '4px solid green')
    } else {
        MonthlyRate.css('border', '4px solid red')
    }
})

mileagePrice.keyup(function () {
    let input = mileagePrice.val();

    if (regExPrice.test(input)) {
        mileagePrice.css('border', '4px solid green')
    } else {
        mileagePrice.css('border', '4px solid red')
    }
})

extraKm.keyup(function () {
    let input = extraKm.val();

    if (regExPrice.test(input)) {
        extraKm.css('border', '4px solid green')
    } else {
        extraKm.css('border', '4px solid red')
    }
})

carColor.keyup(function () {
    let input = carColor.val();

    if (regExBrand.test(input)) {
        carColor.css('border', '4px solid green')
    } else {
        carColor.css('border', '4px solid red')
    }
})

var regSearch=/^([A-z]{3}-[0-9]{3})$/;
$('#txtSearchAdminCar').keyup(function () {
    let input = $('#txtSearchAdminCar').val();

    if (regSearch.test(input)) {
        $('#txtSearchAdminCar').css('border', '4px solid green')
    } else {
        $('#txtSearchAdminCar').css('border', '4px solid red')
    }
})


