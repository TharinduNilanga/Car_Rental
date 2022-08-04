var btnUpdate=document.getElementById("btnCustomerUpdate")
var btnEdit=$('#btnEditCustomer');
var btnUPDATE=$('#btnCustomerUpdate');

var editEmail=$('#txtEditEmail');
var editUserName=$('#txtEditUserName');
var editPassword=$('#txtEditPassword');
var editNicNo=$('#txtEditNicNo');
var editLicenseNo=$('#txtEditLicenseNo');
var editAddress=$('#txtEditAddress');
var editContact=$('#txtEditContact');

btnEdit.click(function () {
        //btnUpdate.disabled=false;
        loadCustomers();
});

btnUPDATE.click(function () {

        let dto={
                email:editEmail.val(),
                userName:editUserName.val(),
                password:editPassword.val(),
                nic:editNicNo.val(),
                licenseNo:editLicenseNo.val(),
                address:editAddress.val(),
                contact:editContact.val()
        }
        let form=new FormData();
        form.append("dto", new Blob([JSON.stringify(dto)], {
                type: "application/json"
        }));
        //  console.log(JSON.stringify(data))

        let nicImg= $('#txtEditNicImage')[0].files[0];
        let nicImgName= $('#txtEditNicImage')[0].files[0].name;
        form.append("nicImg",nicImg,nicImgName);

        let licImg= $('#txtEditLicenseImage')[0].files[0];
        let licImgName= $('#txtEditLicenseImage')[0].files[0].name;
        form.append("licImg",licImg,licImgName)


        $.ajax({
                url: baseUrl+"rental/customer",
                method: "PUT",
                async: true,
                contentType:false,
                processData: false,

                data: form,// if we send data with the request
                success: function (res) {
                        alert(res.message)
                        loadCustomers();
                        btnUpdate.disabled=true;
                        clearCustomerEdit();
                }
        });
});


function loadCustomers() {
        $('#tblCustomerRentBody').empty();
        let s = document.getElementById("CusLabel").innerHTML;
        $.ajax({
                url: baseUrl+"rental/customer/getAll",
                method: "GET",
                dataType:"json",
                success:function (resp) {
                      //  alert("Ok")
                        for(const c of resp.data){
                                if (s==c.email) {
                                        let row1 = `<tr><td>` + c.email + `</td><td>` + c.userName + `</td><td>` + c.password + `</td><td>` + c.nic + `</td><td><img src="${baseUrl + c.nicImg}" width="150px"></td><td>` + c.licenseNo + `</td><td><img src="${baseUrl + c.licenseImg}" width="150px"></td><td>` + c.address + `</td><td>` + c.contact + `</td></tr>`;
                                        $('#tblCustomerRentBody').append(row1)
                                }
                        }
                        customerClickEvent();
                }
        })

};
function clearCustomerEdit() {
        editEmail.val("");
        editUserName.val("");
        editPassword.val("");
        editNicNo.val("");
        editLicenseNo.val("");
        editAddress.val("");
        editContact.val("");

}


