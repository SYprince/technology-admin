import * as commonFun from '/supply/pv/js/common.js';
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    commonFun.indexEchartMain('mainChart');
    let barDataThree=[1994.52155387634,9589.55473908533,13671.8173301793,27091.9309437677,24239.1403860901,27890.8834221160,29757.6044536988,23567.2706829014,21607.7377854437]
    let lineDataThree=[0.0373754227677783,0.115211221699277,0.126390995904631,0.204716259611311,0.157516543562047,0.147574806878884,0.135414115012087,0.101313068030790,0.0875527690492762]
    // commonFun.supplyTotalTwo('homeOne',barDataThree,lineDataThree,0,0,'舍弃电量','弃电率');
    commonFun.indexEchartMainBottom('mainChartBottom')
    commonFun.indexEchartMainBottomRight('mainChartBottomRight')
    commonFun.indexEchartFive('homeSix')
    // commonFun.balanceEchart('mainChart');
    function showTime() {
        var show_day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth();
        var date = time.getDate();
        var day = time.getDay();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var second = time.getSeconds();

        month = month + 1;
        month < 10 ? month = "0" + month : month;
        date < 10 ? date = "0" + date : date;
        hour < 10 ? hour = "0" + hour : hour;
        minutes < 10 ? minutes = "0" + minutes : minutes;
        second < 10 ? second = "0" + second : second;
        document.getElementsByTagName("time")[0].innerHTML = year + "-" + month + "-" + date+ " " + show_day[day];
        document.getElementsByTagName("time")[1].innerHTML = hour + ":" + minutes + ":" + second;
        // console.log( document.getElementsByTagName("time"));

        // setInterval(showTime(), 1000);

    }
    showTime();
    // setInterval(showTime(), 1000);
})