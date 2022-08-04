
var customerNavBar=document.getElementById("navbarheader");
var customerAddRentRequestNav=document.getElementById("rentNav");
var customerCarNav=document.getElementById("customercarNav");
var customerDetailsNav=document.getElementById("detailsNav");
var customerLogOut=document.getElementById("CustomerloginNav");



var adminNavBar=document.getElementById("navbarheader1");
var adminAddRentNav=document.getElementById("addRentNav");
var adminAddReturnNav=document.getElementById("addRetutnNav");
var adminAddDetailsNav=document.getElementById("detailNav");
var adminAddCarNav=document.getElementById("carNav");
var adminAddMaintenanceNav=document.getElementById("maintenanceNav");
var adminIncomeNav = document.getElementById("incomeNav");
var adminLogOut=document.getElementById("loginNav");


    var driverNavBar = document.getElementById("navbarheader2");
var driverLogOut = document.getElementById("DriverlogOut");


    var dashBoardSection = document.getElementById("DashBoard");
    var btnMoreGeneralCars = $('#btnDashBoardCarGeneral');
    var btnMorePremiumCars = $('#btnDashBoardCarPremium');
    var btnMoreLuxuryCars = $('#btnDashBoardCarLuxury');
    var btnLogin = $("#btnLogIn")
    var btnCustomerSignUp = $("#btnSignUp");

    var loginSection = document.getElementById("login");
    var signUpContainer = document.getElementById("SignUp");
    var btnCustomerLogin = $('#btnSignUpLogin');

    var customerAddRentRequestSection = document.getElementById("CustomerRent");
    var customerCarListSection = document.getElementById("CarList");
    var customerDetailsSection = document.getElementById("CustomerDetails");

    var adminAddRentSection = document.getElementById("adminAddRent");
    var adminAddReturnSection = document.getElementById("adminAddReturn");
    var adminAddDetailsSection = document.getElementById("adminDetails");
    var adminAddCarSection = document.getElementById("adminCar");
    var adminAddMaintenanceSection = document.getElementById("adminMaintenance");
    var adminCustomerDetailsSection = document.getElementById("adminCustomerDetails");
    var adminIncomeSection = document.getElementById("adminIncome");



    var driverSection = document.getElementById("Driver")

customerAddRentRequestNav.addEventListener("click",function () {
    customerAddRentRequestNav.style.backgroundColor="black";
    customerCarNav.style.backgroundColor="";
    customerDetailsNav.style.backgroundColor="";
    dashBoardSection.style.display="none";
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

})
customerCarNav.addEventListener("click",function () {
    customerAddRentRequestNav.style.backgroundColor="";
    customerCarNav.style.backgroundColor="black";
    customerDetailsNav.style.backgroundColor="";
    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="block";
    customerDetailsSection.style.display="none";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="none";
    adminAddDetailsSection.style.display="none";
    adminAddCarSection.style.display="none";
    adminAddMaintenanceSection.style.display="none";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})
customerDetailsNav.addEventListener("click",function () {
    customerAddRentRequestNav.style.backgroundColor="";
    customerCarNav.style.backgroundColor="";
    customerDetailsNav.style.backgroundColor="black";
    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="none";
    customerDetailsSection.style.display="block";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="none";
    adminAddDetailsSection.style.display="none";
    adminAddCarSection.style.display="none";
    adminAddMaintenanceSection.style.display="none";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})


adminAddRentNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="underline";
    adminAddReturnNav.style.textDecoration="";
    adminAddDetailsNav.style.textDecoration="";
    adminAddCarNav.style.textDecoration="";
    adminAddMaintenanceNav.style.textDecoration="";
    adminIncomeNav.style.textDecoration="";

    dashBoardSection.style.display="none";
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

})
adminAddReturnNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="";
    adminAddReturnNav.style.textDecoration="underline";
    adminAddDetailsNav.style.textDecoration="";
    adminAddCarNav.style.textDecoration="";
    adminAddMaintenanceNav.style.textDecoration="";
    adminIncomeNav.style.textDecoration="";

    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="none";
    customerDetailsSection.style.display="none";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="block";
    adminAddDetailsSection.style.display="none";
    adminAddCarSection.style.display="none";
    adminAddMaintenanceSection.style.display="none";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})
adminAddCarNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="";
    adminAddReturnNav.style.textDecoration="";
    adminAddDetailsNav.style.textDecoration="";
    adminAddCarNav.style.textDecoration="underline";
    adminAddMaintenanceNav.style.textDecoration="";
    adminIncomeNav.style.textDecoration="";

    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="none";
    customerDetailsSection.style.display="none";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="none";
    adminAddDetailsSection.style.display="none";
    adminAddCarSection.style.display="block";
    adminAddMaintenanceSection.style.display="none";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})
adminAddDetailsNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="";
    adminAddReturnNav.style.textDecoration="";
    adminAddDetailsNav.style.textDecoration="underline";
    adminAddCarNav.style.textDecoration="";
    adminAddMaintenanceNav.style.textDecoration="";
    adminIncomeNav.style.textDecoration="";

    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="none";
    customerDetailsSection.style.display="none";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="none";
    adminAddDetailsSection.style.display="block";
    adminAddCarSection.style.display="none";
    adminAddMaintenanceSection.style.display="none";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})
adminAddMaintenanceNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="";
    adminAddReturnNav.style.textDecoration="";
    adminAddDetailsNav.style.textDecoration="";
    adminAddCarNav.style.textDecoration="";
    adminAddMaintenanceNav.style.textDecoration="underline";
    adminIncomeNav.style.textDecoration="";

    dashBoardSection.style.display="none";
    loginSection.style.display="none";
    signUpContainer.style.display="none";
    customerAddRentRequestSection.style.display="none";
    customerCarListSection.style.display="none";
    customerDetailsSection.style.display="none";
    adminAddRentSection.style.display="none";
    adminAddReturnSection.style.display="none";
    adminAddDetailsSection.style.display="none";
    adminAddCarSection.style.display="none";
    adminAddMaintenanceSection.style.display="block";
    adminCustomerDetailsSection.style.display="none";
    adminIncomeSection.style.display="none";
    driverSection.style.display="none";

})
adminIncomeNav.addEventListener("click",function () {
    adminAddRentNav.style.textDecoration="";
    adminAddReturnNav.style.textDecoration="";
    adminAddDetailsNav.style.textDecoration="";
    adminAddCarNav.style.textDecoration="";
    adminAddMaintenanceNav.style.textDecoration="";
    adminIncomeNav.style.textDecoration="underline";

    dashBoardSection.style.display="none";
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
    adminIncomeSection.style.display="block";
    driverSection.style.display="none";

})

adminLogOut.addEventListener("click",function () {
  //  alert("ok")
    dashBoardSection.style.opacity='100%'
    dashBoardSection.style.display="block"
    customerNavBar.style.display="none";
    adminNavBar.style.display="none";
    driverNavBar.style.display="none";
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
    driverSection.style.display="none";
})
customerLogOut.addEventListener("click",function () {
    dashBoardSection.style.opacity='100%'
    dashBoardSection.style.display="block"
    customerNavBar.style.display="none";
    adminNavBar.style.display="none";
    driverNavBar.style.display="none";
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
    driverSection.style.display="none";
})
driverLogOut.addEventListener("click",function () {
    dashBoardSection.style.opacity='100%'
    dashBoardSection.style.display="block"
    customerNavBar.style.display="none";
    adminNavBar.style.display="none";
    driverNavBar.style.display="none";
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
    driverSection.style.display="none";
})



