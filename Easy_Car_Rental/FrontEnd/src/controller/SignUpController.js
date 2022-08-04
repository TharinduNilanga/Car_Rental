var txtEmail=$('#txtEmail');
var txtUserName=$('#txtUserName');
var txtPassword=$('#txtPassword');
var txtNic=$('#txtNicNo');
var txtLicense=$('#txtLicenseNo');
var txtAddress=$('#txtAddress');
var txtContact=$('#txtContact');

var nicImg=$('#nicImg');
var licImg=$('#licImg');

var btnSignUp=$('#btnSignUpMain');

var baseUrl="http://localhost:8080/BackEnd_war_exploded/";

btnSignUp.click(function () {
       // var data=$('#customerForm').serialize();
        let dto={
            email:txtEmail.val(),
            userName:txtUserName.val(),
            password:txtPassword.val(),
            nic:txtNic.val(),
            licenseNo:txtLicense.val(),
            address:txtAddress.val(),
            contact:txtContact.val()
        }
        let form=new FormData();
        form.append("dto", new Blob([JSON.stringify(dto)], {
            type: "application/json"
        }));
      //  console.log(JSON.stringify(data))

        let nicImg=$('#nicImg')[0].files[0];
        let nicImgName=$('#nicImg')[0].files[0].name;
        form.append("nicImg",nicImg,nicImgName);

        let licImg=$('#licImg')[0].files[0];
        let licImgName=$('#licImg')[0].files[0].name;
        form.append("licImg",licImg,licImgName)


        $.ajax({
            url: baseUrl+"rental/customer",
            method: "POST",
            async: true,
            contentType:false,
            processData: false,

            data: form,// if we send data with the request
            success: function (res) {
                alert(res.message);
                clearSignUp();
            }
        });





    });

function customerClickEvent() {
    $('#tblCustomerRentBody>tr').click(function () {
        let email=$(this).children().eq(0).text();
        let userName=$(this).children().eq(1).text();
        let password=$(this).children().eq(2).text();
        let nic=$(this).children().eq(3).text();
        let nicImg=$(this).children().eq(4).text();
        let licenseNo=$(this).children().eq(5).text();
        let licImg=$(this).children().eq(6).text();
        let address=$(this).children().eq(7).text();
        let contact=$(this).children().eq(8).text();

      editEmail.val(email);
      editUserName.val(userName);
      editPassword.val(password);
      editNicNo.val(nic);
      editLicenseNo.val(licenseNo);
      editAddress.val(address);
      editContact.val(contact);
      $('#txtEditNicImage').val(nicImg);
      $('#txtEditLicenseImage').val(licImg)

    })

};
function clearSignUp() {
    txtEmail.val("");
    txtUserName.val("");
    txtUserName.val("");
    txtPassword.val("");
    txtNic.val("");
    txtLicense.val("");
    txtAddress.val("");
    txtContact.val("");
    nicImg.val("");
    licImg.val("");

}

{
    var regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    txtEmail.keyup(function () {
        let input = txtEmail.val();

        if (regExEmail.test(input)) {
            txtEmail.css('border', '5px solid green')
        } else {
            txtEmail.css('border', '5px solid red')
        }
    })

    var regExUserName = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
    txtUserName.keyup(function () {
        let input = txtUserName.val();

        if (regExUserName.test(input)) {
            txtUserName.css('border', '5px solid green')
        } else {
            txtUserName.css('border', '5px solid red')
        }
    })

    var regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    txtPassword.keyup(function () {
        let input = txtPassword.val();

        if (regExPassword.test(input)) {
            txtPassword.css('border', '5px solid green')
        } else {
            txtPassword.css('border', '5px solid red')
        }
    })

    var regExNic = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
    txtNic.keyup(function () {
        let input = txtNic.val();

        if (regExNic.test(input)) {
            txtNic.css('border', '5px solid green')
        } else {
            txtNic.css('border', '5px solid red')
        }
    })

    var regExLicense = /^([x|X|B|B][0-9]{7})$/;
    txtLicense.keyup(function () {
        let input = txtLicense.val();

        if (regExLicense.test(input)) {
            txtLicense.css('border', '5px solid green')
        } else {
            txtLicense.css('border', '5px solid red')
        }
    })

    var regExAddress = /^[#.0-9a-zA-Z\s,-]+$/;
    txtAddress.keyup(function () {
        let input = txtAddress.val();

        if (regExAddress.test(input)) {
            txtAddress.css('border', '5px solid green')
        } else {
            txtAddress.css('border', '5px solid red')
        }
    })

    var regExContact = /^([0-9]{10})$/;
    txtContact.keyup(function () {
        let input = txtContact.val();

        if (regExContact.test(input)) {
            txtContact.css('border', '5px solid green')
        } else {
            txtContact.css('border', '5px solid red')
        }
    })
}