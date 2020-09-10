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

    //
    tableIns = table.render({
        elem: '#pvpowerTable'
        , url: ctx + '/supply/solarMaxInput/page'
        , method: 'POST'
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
            , {field: 'maxtemp', title: '最大电力'}
            , {field: 'doy', title: '年中位置'}
            , {fixed: 'right', title: '操作', toolbar: '#userTableBarDemo'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });
    //预测结果
    forcastResult = table.render({
        elem: '#forcastResult'
        , toolbar: '#toolbarforcast'
    });
    //头工具栏事件
    table.on('toolbar(forcastResult)', function (obj) {
        switch (obj.event) {
            case 'forcast': layer.msg("23");
        }
    })




})