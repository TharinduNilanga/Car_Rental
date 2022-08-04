





var searchdriverEmail=$('#txtdriverRent');
var btnsearchDriverRent=$('#btndriverRent');



btnsearchDriverRent.click(function () {
    loadDriverRentals();

})

function loadDriverRentals() {
    $('#tblRentsBody').empty();
    $.ajax({
        url:baseUrl+"rental/rental/getAll",
        method:"GET",
        dataType:'json',
        success:function (resp) {
            if (resp.code==200){
                for (const c of resp.data){
                    if (searchdriverEmail.val()==c.driverEmail) {
                        let row = '<tr><td>' + c.renId + '</td><td>' + c.cusEmail + '</td><td>' + c.regNo + '</td><td>' + c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate + '</td><td>' + c.returnTime + '</td><td>' + c.lossDamageWaiver + '</td><td>' + c.driverEmail + '</td></tr>';
                        $('#tblDriverRentsBody').append(row)
                    }

                }

            }
            updateNtClickEvent();
        }
    })

}