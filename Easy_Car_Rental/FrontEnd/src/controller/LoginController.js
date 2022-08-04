
var customerNavBar=document.getElementById("navbarheader");
var adminNavBar=document.getElementById("navbarheader1");
var driverNavBar=document.getElementById("navbarheader2");




var dashBoardSection=document.getElementById("DashBoard");


var loginSection=document.getElementById("login");
var signUpContainer=document.getElementById("SignUp");


var customerAddRentRequestSection=document.getElementById("CustomerRent");
var customerCarListSection=document.getElementById("CarList");
var customerDetailsSection=document.getElementById("CustomerDetails");

var adminAddRentSection=document.getElementById("adminAddRent");
var adminAddReturnSection=document.getElementById("adminAddReturn");
var adminAddDetailsSection=document.getElementById("adminDetails");
var adminAddCarSection=document.getElementById("adminCar");
var adminAddMaintenanceSection=document.getElementById("adminMaintenance");
var adminCustomerDetailsSection=document.getElementById("adminCustomerDetails");
var adminIncomeSection=document.getElementById("adminIncome");

var driverSection=document.getElementById("Driver")

/*var password=$('#txtLoginPassword').val();*/

var btnLogin=$('#btnCustomerLogin');
var customerDetail;

var  baseUrl="http://localhost:8080/BackEnd_war_exploded/";

btnLogin.click(async function () {

    var email=$('#txtLoginEmail').val();
   await searchCustomer(email);

})
function clearLogin() {
    $('#txtLoginEmail').val("");
    $('#txtLoginPassword').val("");

}
 function searchCustomer(email) {
    //console.log("ok")
    //customerDetail.clear();
     //let p=password;
    $.ajax({
        url:baseUrl+"rental/customer/search?eMail="+email,
        method:"GET",
        dataType:'json',
        success: function (resp) {
                let password=resp.data.password;
            let p=$('#txtLoginPassword').val();
           if (p==password){




                    dashBoardSection.style.display='none'
                    customerNavBar.style.display="block";
                    adminNavBar.style.display="none";
                    driverNavBar.style.display="none";
                    loginSection.style.display="none";
                    signUpContainer.style.display="none";
                    customerAddRentRequestSection.style.display="block";
                    customerCarListSection.style.display="none";
                    customerDetailsSection.style.display="none";
                    adminAddRentSection.style.display="none";
                    adminAddReturnSection.style.display="none";
                    adminAddDetailsSection.style.display="none";
                    adminAddCarSection.style.display="none";
                    adminAddMaintenanceSection.style.display="none";
                    adminCustomerDetailsSection.style.display="none";
                    adminIncomeSection.style.display="none";
                    driverSection.style.display="none";
                   document.getElementById("CusLabel").innerHTML=email;
                   clearLogin();

           }else {
               alert("check the password and try again")
           }




        },
        error: function (ob) {
           searchAdmin(email)
        }
    })


}
function searchAdmin(email) {
    //console.log("ok")
    //customerDetail.clear();
    //let p=password;
    $.ajax({
        url:baseUrl+"rental/admin/search?adminEmail="+email,
        method:"GET",
        dataType:'json',
        success: function (resp) {
            let password=resp.data.password;
            let p=$('#txtLoginPassword').val();
            if (p==password){
                alert("ok")



                dashBoardSection.style.display='none'
                customerNavBar.style.display="none";
                adminNavBar.style.display="block";
                driverNavBar.style.display="none";
                loginSection.style.display="none";
                signUpContainer.style.display="none";
                customerAddRentRequestSection.style.display="none";
                customerCarListSection.style.display="none";
                customerDetailsSection.style.display="none";
                adminAddRentSection.style.display="block";
                adminAddReturnSection.style.display="none";
                adminAddDetailsSection.style.display="none";
                adminAddCarSection.style.display="none";
                adminAddMaintenanceSection.style.display="none";
                adminCustomerDetailsSection.style.display="none";
                adminIncomeSection.style.display="none";
                driverSection.style.display="none";
                document.getElementById("AdminLabel").innerHTML=email;
                clearLogin();
            }else {
                alert("check the password and try again")
            }




        },
        error: function (ob) {
            searchDriver(email)
        }
    })


}
function searchDriver(email) {
    //console.log("ok")
    //customerDetail.clear();
    //let p=password;
    $.ajax({
        url:baseUrl+"rental/driver/search?driverEmail="+email,
        method:"GET",
        dataType:'json',
        success: function (resp) {
            let password=resp.data.password;
            let p=$('#txtLoginPassword').val();
            if (p==password){
                alert("ok")



                dashBoardSection.style.display='none'
                customerNavBar.style.display="none";
                adminNavBar.style.display="none";
                driverNavBar.style.display="block";
                loginSection.style.display="none";
                signUpContainer.style.display="none";
                customerAddRentRequestSection.style.display="none";
                customerCarListSection.style.display="none";
                customerDetailsSection.style.display="none";
                adminAddRentSection.style.display="none";
                adminAddReturnSection.style.display="none";
                adminAddDetailsSection.style.display="none";
                adminAddCarSection.style.display="none";
                adminAddMaintenanceSection.style.display="none";
                adminCustomerDetailsSection.style.display="none";
                adminIncomeSection.style.display="none";
                driverSection.style.display="block";
                document.getElementById("DriverLabel").innerHTML=email;
                clearLogin();

            }else {
                alert("check the password and try again")
            }




        },
        error: function (ob) {
            alert('Invalid Email... please signup and tryagain')
        }
    })


}


/*
function searchCustomer(email,password) {
        for (let i=0;i<adminArray.length;i++);{
            if ((adminArray[i].getCustomerEmail()==email)&&adminArray[i].getCustomerPassword()==password){
                    alert("ok")
            }
    }
}

*/
