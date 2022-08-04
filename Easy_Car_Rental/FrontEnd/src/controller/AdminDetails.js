var adminEmail=$('#txtAdminEmail');
var adminUserName=$('#txtAdminUserName');
var adminPassword=$('#txtAdminPassword');

var btnSaveAdmin=$('#btnSaveAdmin');
var btnUpdateAdmin=$('#btnUpdateAdmin');
var btnDeleteAdmin=$('#btnDeleteAdmin');

var driverEmail=$('#txtDriverEmail');
var driverName=$('#txtDriverName');
var driverAddress=$('#txtDriverAddress');
var driverContact=$('#txtDriverContact');
var driverPassword=$('#txtDriverPassword')

var btnSaveDriver=$('#btnSaveDriver');
var btnUpdateDriver=$('#btnUpdateDriver');
var btnDeleteDriver=$('#btnDeleteDriver');

var  baseUrl="http://localhost:8080/BackEnd_war_exploded/";

btnSaveAdmin.click(function () {
    let dto={
        adminEmail:adminEmail.val(),
        userName:adminUserName.val(),
        password:adminPassword.val()
    }
    $.ajax({
        url:baseUrl+"rental/admin",
        method:"POST",
        contentType:"application/json",
        data:JSON.stringify(dto),
        success:function (res){
            if (res.code===200){
                alert("OK")
               alert( res.message);
                loadAdminDetails();
                clearAdmin();
            }else {
                alert( res.message);
            }
        }
    })


});
loadAdminDetails();
function loadAdminDetails() {
    $('#tblAdminBody').empty();
    $.ajax({
        url: baseUrl+"rental/admin/getAll",
        method: "GET",
        dataType:'json',
        success:function (resp) {
            for (const admin of resp.data){
                let row='<tr><td>'+admin.adminEmail+'</td><td>'+admin.userName+'</td><td>'+admin.password+'</td></tr>';
                $('#tblAdminBody').append(row)
            }
            adminTableClickEvent();
        }
    })
}
function adminTableClickEvent() {
    $('#tblAdminBody>tr').click(function () {
        let email=$(this).children().eq(0).text();
        let userName=$(this).children().eq(1).text();
        let password=$(this).children().eq(2).text();

        adminEmail.val(email);
        adminUserName.val(userName);
        adminPassword.val(password);

    });

}
btnUpdateAdmin.click(function () {
    let dto = {
        adminEmail: adminEmail.val(),
        userName: adminUserName.val(),
        password: adminPassword.val()
    }
    $.ajax({
        url: baseUrl + "rental/admin",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(dto),
        success: function (res) {
          //  loadAdminDetails();
            if (res.code === 200) {
               // alert("OK")
                alert(res.message);
                loadAdminDetails();
                clearAdmin();
            } else {
                alert(res.data);
            }
        }
    })
});
btnDeleteAdmin.click(function () {
    let email=adminEmail.val();
    $.ajax({
        url:baseUrl+"rental/admin?adminEmail="+email,
        method:"DELETE",
        success:function (resp) {
            if (resp.code==200){
                alert( resp.message)
                loadAdminDetails();
                clearAdmin();
            }else {
                resp.data;
            }

        }
    })

})

loadDriverDetails();
btnSaveDriver.click(function () {
        let dto={
            driverEmail:driverEmail.val(),
            name:driverName.val(),
            address:driverAddress.val(),
            contact:driverContact.val(),
            password:driverPassword.val()
        }
        $.ajax({
            url:baseUrl+"rental/driver",
            method:"POST",
            contentType:"application/json",
            data:JSON.stringify(dto),
            success:function (resp) {
                if (resp.code==200){
                    alert(resp.message);
                    loadDriverDetails();
                    clearDriver();
                }else{
                    alert(resp.data);
                }

            }
        })
})
function loadDriverDetails() {
    $('#tblDriverBody').empty();
    $.ajax({
        url:baseUrl+"rental/driver/getAll",
        method:"GET",
        success:function (resp) {
            for (const d of resp.data){
                let row='<tr><td>'+d.driverEmail+'</td><td>'+d.name+'</td><td>'+d.address+'</td><td>'+d.contact+'</td><td>'+d.password+'</td></tr>';
                $('#tblDriverBody').append(row);
            }
            driverTableClickEvent();
        }
    })

}
function driverTableClickEvent () {
    $('#tblDriverBody>tr').click(function () {
        let email=$(this).children().eq(0).text();
        let userName=$(this).children().eq(1).text();
        let address=$(this).children().eq(3).text();
        let contact=$(this).children().eq(4).text();
        let password=$(this).children().eq(5).text();

        driverEmail.val(email);
        driverName.val(userName);
        driverAddress.val(address);
        driverContact.val(contact);
        driverPassword.val(password);
    })



}
btnUpdateDriver.click(function () {
    let dto={
        driverEmail:driverEmail.val(),
        name:driverName.val(),
        address:driverAddress.val(),
        contact:driverContact.val(),
        password:driverPassword.val()
    }
    $.ajax({
        url:baseUrl+"rental/driver",
        method:"PUT",
        contentType:"application/json",
        data:JSON.stringify(dto),
        success:function (resp) {
            if (resp.code==200){
                alert(resp.message);
                loadDriverDetails();
                clearDriver();
            }else{
                alert(resp.data);
            }

        }
    })
})
btnDeleteDriver.click(function () {
        let email=driverEmail.val();
        $.ajax({
            url:baseUrl+"rental/driver?driverEmail="+email,
            method:"DELETE",
            success:function (resp) {
                if (resp.code===200){
                    alert(resp.message);
                    loadDriverDetails();
                    clearDriver();
                }else {
                    alert(resp.data);
                }

            }
        })
})


var regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var regExUserName = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
var regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var regExAddress = /^[#.0-9a-zA-Z\s,-]+$/;
var regExContact = /^([0-9]{10})$/;

adminEmail.keyup(function () {
        let input=adminEmail.val();
        if (regExEmail.test(input)){
            adminEmail.css('border','4px solid green')
        }else{
            adminEmail.css('border','4px solid red')
        }
})
adminUserName.keyup(function () {
    let input=adminUserName.val();
    if (regExUserName.test(input)){
        adminUserName.css('border','4px solid green')
    }else{
        adminUserName.css('border','4px solid red')
    }
})
adminPassword.keyup(function () {
    let input=adminPassword.val();
    if (regExPassword.test(input)){
        adminPassword.css('border','4px solid green')
    }else{
        adminPassword.css('border','4px solid red')
    }
})

driverEmail.keyup(function () {
    let input=driverEmail.val();
    if (regExEmail.test(input)){
        driverEmail.css('border','4px solid green')
    }else{
        driverEmail.css('border','4px solid red')
    }
})
driverName.keyup(function () {
    let input=driverName.val();
    if (regExUserName.test(input)){
        driverName.css('border','4px solid green')
    }else{
        driverName.css('border','4px solid red')
    }
})
driverAddress.keyup(function () {
    let input=driverAddress.val();
    if (regExAddress.test(input)){
        driverAddress.css('border','4px solid green')
    }else{
        driverAddress.css('border','4px solid red')
    }
})
driverContact.keyup(function () {
    let input=driverContact.val();
    if (regExContact.test(input)){
        driverContact.css('border','4px solid green')
    }else{
        driverContact.css('border','4px solid red')
    }
})
driverPassword.keyup(function () {
    let input=driverPassword.val();
    if (regExPassword.test(input)){
        driverPassword.css('border','4px solid green')
    }else{
        driverPassword.css('border','4px solid red')
    }
})
function clearAdmin() {
    adminEmail.val("");
    adminUserName.val("");
    adminPassword.val("");

}
function clearDriver() {
    driverEmail.val("");
    driverName.val("");
    driverAddress.val("");
    driverContact.val("");
    driverPassword.val("");
}







