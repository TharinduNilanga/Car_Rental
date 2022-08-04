function AddToCart(regNo,pickUpDate,pickUpTime,returnDate,returnTime,lossDamageWaiver,driver) {
    var __regNo = regNo;
    var __pickUpDate = pickUpDate;
    var __pickUpTime = pickUpTime;
    var __returnDate = returnDate;
    var __returnTime = returnTime;
    var __lossDamageWaiver = lossDamageWaiver;
    var __driver = driver;


    this.getRegNo = function () {
        return __regNo;
    }
    this.getPickUpDate= function () {
        return __pickUpDate;
    }
    this.getPickUpTime = function () {
        return __pickUpTime;
    }
    this.getReturnDate = function () {
        return __returnDate;
    }
    this.getReturnTime = function () {
        return __returnTime;
    }
    this.getLossDamageWaiver = function () {
        return __lossDamageWaiver;
    }

    this.getDriver = function () {
        return __driver;
    }

    this.setRegNo = function (v) {
        __regNo = v;
    }
    this.setPickUpDate = function (v) {
        __pickUpDate = v;
    }
    this.setPickUpTime = function (v) {
        __pickUpTime = v;
    }
    this.setReturnDate = function (v) {
        __returnDate = v;
    }
    this.setReturnTime = function (v) {
        __returnTime = v;
    }
    this.setLossDamageWavier = function (v) {
        __lossDamageWaiver = v;
    }
    this.setDriver = function (v) {
        __driver = v;
    }
}