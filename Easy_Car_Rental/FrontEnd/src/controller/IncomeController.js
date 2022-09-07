


var  baseUrl="http://localhost:8080/BackEnd_war_exploded/";
getDailyIncome();
function getDailyIncome() {
    $('#tblDailyIncomeBody').empty();
    $.ajax({
        url:baseUrl+"rental/Return/getDailyIncome",
        method:'GET',
        dataType:'json',
        success:function (res) {
            for (const d of res.data){
                let row='<tr><td>'+d[1]+'</td></tr>'
                $('#tblDailyIncomeBody').append(row)
            }

        }
    })

}
getMonthlyIncome();
function getMonthlyIncome() {
    $('#tblDMonthlyIncomeBody').empty();
    $.ajax({
        url:baseUrl+"rental/Return/getMonthlyIncome",
        method:'GET',
        dataType:'json',
        success:function (res) {
            for (const d of res.data){
                let row='<tr><td>'+d[0]+'</td><td>'+d[1]+'</td></tr>'
                $('#tblDMonthlyIncomeBody').append(row)
            }

        }
    })

}
getAnnualIncome();
function getAnnualIncome() {
    $('#tblAnnualIncomeBody').empty();
    $.ajax({
        url:baseUrl+"rental/Return/getAnnualIncome",
        method:'GET',
        dataType:'json',
        success:function (res) {
            for (const d of res.data){
                let row='<tr><td>'+d[0]+'</td><td>'+d[1]+'</td></tr>'
                $('#tblAnnualIncomeBody').append(row)
            }

        }
    })

}