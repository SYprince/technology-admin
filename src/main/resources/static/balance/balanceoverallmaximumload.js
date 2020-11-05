// import '/static/echart/echarts.simple';
// import * as echarts from "/static/echart/src/echarts";

//let myChart = echarts.init(document.getElementById('main'));
let tableIns;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 60;
    //let forcastDate = '2014/6';
    tableIns = table.render({
        elem: '#overllMaximumloadTable'
        , url: ctx + '/balance/overallMaximumLoad/noPageData'
        , method: 'POST'
        // , where : {
        //     timestamp: forcastDate
        // }
        //请求前参数处理
        // , request: {
        //     pageName: 'page' //页码的参数名称，默认：page
        //     , limitName: 'rows' //每页数据量的参数名，默认：limit
        // }
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
                "rows": data //data.rows //解析数据列表
            };
        }
        , toolbar: '#'
        , title: '用户列表'
        , cols: [[
            {field: 'id', title: 'ID', hide: true}
            , {field: 'area', title: '地区'}
            , {field: 'thisyear', title: '本年当月最高负荷(万千瓦)'}
            , {field: 'lastyear', title: '去年当月最高负荷(万千瓦)'}
            , {field: 'increaseRate', title: '增长率'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });

    // laydate.render({
    //     elem: '#forcastDate'
    //     ,trigger: 'click' //采用click弹出
    //     ,type: 'month'
    //     ,format: 'yyyy/M'
    //     ,value: forcastDate
    //     ,isInitValue: true
    //     ,min: '2012-4-1'
    //     ,max: '2014-7-1'
    //     ,theme: 'molv'  //（墨绿背景）
    //     ,btns: [ 'confirm']
    //     ,calendar: true  //公历节日
    //     ,done: function(value, date, endDate){
    //         console.log(value); //得到日期生成的值，如：2017-08-18
    //         console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    //         console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    //     }
    // })

})
