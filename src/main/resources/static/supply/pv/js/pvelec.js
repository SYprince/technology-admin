// import '/static/echart/echarts.simple';
// import * as echarts from "/static/echart/src/echarts";

//let myChart = echarts.init(document.getElementById('main'));
let tableIns;
let forcastResult;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 160;
let forcastDate = '2014/6';
    //
    tableIns = table.render({
        elem: '#pvelecTable'
        , url: ctx + '/supply/solarInput/page'
        , method: 'POST'
        , where : {
            timestamp: forcastDate
        }
        //请求前参数处理
        , request: {
            pageName: 'page' //页码的参数名称，默认：page
            , limitName: 'rows' //每页数据量的参数名，默认：limit
        }
        , response: {
            statusName: 'flag' //规定数据状态的字段名称，默认：code
            , statusCode: true //规定成功的状态码，默认：0
            , msgName: 'msg' //规定状态信息的字段名称，默认：msg
            , countName: 'records' //规定数据总数的字段名称，默认：count
            , dataName: 'rows' //规定数据列表的字段名称，默认：data
        }
        //响应后数据处理
        , parseData: function (res) { //res 即为原始返回的数据
            var data = res.data;
            return {
                "flag": res.flag, //解析接口状态
                "msg": res.msg, //解析提示文本
                "records": data.records, //解析数据长度
                "rows": data.rows //解析数据列表
            };
        }
        , toolbar: '#userTableToolbarDemo'
        , title: '用户列表'
        , cols: [[
            {field: 'id', title: 'ID', hide: true}
            , {field: 'timestamp', title: '日期'}
            , {field: 'radiation', title: '辐照度'}
            , {field: 'power', title: '发电量'}
            , {field: 'doy', title: '年中位置'}
            , {fixed: 'right', title: '操作', toolbar: '#userTableBarDemo'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });
    //预测结果
    // forcastResult = table.render({
    //     elem: '#forcastResult'
    //     , toolbar: '#toolbarforcast'
    // });
    // //头工具栏事件
    // table.on('toolbar(forcastResult)', function (obj) {
    //     switch (obj.event) {
    //         case 'forcast': layer.msg("23");
    //     }
    // })
    laydate.render({
        elem: '#forcastDate'
        ,type: 'month'
        ,format: 'yyyy/M'
        ,value: forcastDate
        ,isInitValue: true
        ,min: '2012-4-1'
        ,max: '2014-7-1'
        ,theme: 'molv'  //（墨绿背景）
        ,btns: [ 'confirm']
        ,calendar: true  //公历节日
        ,done: function(value, date, endDate){
            console.log(value); //得到日期生成的值，如：2017-08-18
            console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
        }
    })
    a();
    //$("#forcast").click(function () {

    let myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['得分']
        },
        xAxis: {
            data: ["哈登","杜兰特","戴维斯","詹姆斯","阿德托昆博","恩比德","利拉德","沃克","伦纳德","拉文"]
        },
        yAxis: {},
        series: [{
            name: '得分',
            type: 'bar',
            data: [30.6, 30.0, 28.2, 27.8, 27.6, 27.0,27.0,26.5,25.5,25.0]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);



})
function a() {

        $.ajax({
            url: "/supply/solarInput/forcast",
            type: "POST",
            data: "",//$("#degreeForm").serialize(),
            success: function (data) {
                if (data) {
                    console.log(data);
                    layer.msg("操作成功")
                    layer.confirm('操作成功!', {
                        icon: 1,
                        btn: ['确认']
                        , btn1: function (index, layero) {
                            parent.location.reload();
                            parent.layer.closeAll();
                        }
                    });
                }
            }
        });
}