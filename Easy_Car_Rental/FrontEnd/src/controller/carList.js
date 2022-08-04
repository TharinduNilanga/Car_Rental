var btnCar=$('#btnCustomerCars');
var btnCarDetails=$('#btnCustomerCarDetails');

var tblCars=document.getElementById("carListImagesDiv");
var tblCarDetails=document.getElementById("carListDetailsImagesDiv");


btnCar.click(function () {
        tblCarDetails.style.display="none";
        tblCars.style.display="block";
  loadData();
})

btnCarDetails.click(function () {
    tblCarDetails.style.display="block";
    tblCars.style.display="none";
    loadData();
});
loadData();
function loadData() {
    $('#tblGeneralCarsBody').empty();
    $("#tblCarDetailBody").empty();
    $.ajax({
        url:baseUrl+"rental/car/getAll",
        method: "GET",
        dataType:'json',
        success:function (resp) {
            for (const c of resp.data){
                console.log(baseUrl+c.carDetails[0].firstImg)
                let row='<tr><td>'+c.regNo+'</td><td>'+c.brand+'</td><td>'+c.type+'</td><td>'+c.driveKm+'</td><td>'+c.noOfPassengers+'</td><td>'+c.transmission+'</td><td>'+c.fuelType+'</td><td>'+c.dailyRate+'</td><td>'+c.monthlyRate+'</td><td>'+c.freeMileagePrice+'</td><td>'+c.extraKmPrice+'</td><td>'+c.color+'</td></tr>'
                $('#tblGeneralCarsBody').append(row)

                let row1 = `<tr><td>`+c.carDetails[0].regNo+`</td><td><img src="${baseUrl + c.carDetails[0].firstImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].secondImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].thirdImg}" width="150px"></td><td><img src="${baseUrl + c.carDetails[0].fourthImg}" width="150px"></td></tr>`;
                $("#tblCarDetailBody").append(row1);
            }


        }
    })

}

