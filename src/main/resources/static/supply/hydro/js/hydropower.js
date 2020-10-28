// import '/static/echart/echarts.simple';
// import * as echarts from "/static/echart/src/echarts";
import supplyDemandCommon from '/supply/pv/js/common.js'
//let myChart = echarts.init(document.getElementById('main'));
let forcastInput;
let forcastResult;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    let forcastDate = '201802';
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 160;

    forcastInput = table.render({
        elem: '#hydropowerTable'
        , url: ctx + '/supply/smhpForR/page'
        , method: 'POST'
        , where: {
            date: forcastDate
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
        //, toolbar: '#userTableToolbarDemo'
        , title: '用户列表'
        , cols: [[
            {field: 'id', title: 'ID', hide: true}
            , {field: 'date', title: '日期'}
            , {field: 'rainfall', title: '降雨量'}
            , {field: 'smhpMax', title: '最大电力'}
            , {field: 'year', title: '年份'}
            , {field: 'toy', title: '年中位置'}
            //, {fixed: 'right', title: '操作', toolbar: '#userTableBarDemo'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });
    //预测结果
    forcastResult = table.render({
        elem: '#forcastResult'
        , url: ctx + '/supply/hpResultMax/page'
        , method: 'POST'
        , where: {
            date: forcastDate
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
        , toolbar: '#XX'
        , cols: [[
            {field: 'id', title: 'ID', hide: true}
            , {field: 'date', title: '日期'}
            , {field: 'v1', title: 'v1'}
            , {field: 'v2', title: 'v2'}
            , {field: 'v3', title: 'v3'}
            , {field: 'v4', title: 'v4'}
            , {field: 'v5', title: 'v5'}
            , {field: 'v6', title: 'v6'}
            , {field: 'v7', title: 'v7'}
            , {field: 'v8', title: 'v8'}
            , {field: 'v9', title: 'v9'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });
    laydate.render({
        elem: '#forcastDate'
        , type: 'month'
        , format: 'yyyyMM'
        , value: forcastDate
        , isInitValue: true
        , min: '2014-1-1'
        , max: '2018-3-1'
        , theme: 'molv'  //（墨绿背景）
        , btns: ['confirm']
        , calendar: true  //公历节日
        , done: function (value, date, endDate) {
            console.log(value); //得到日期生成的值，如：2017-08-18
            console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
        }
    })
    //水电电力查询事件
    $("#hydroQuery").click(function () {
        let forcastDate = $("#forcastDate").val();
        let queryCondition = {
            page: {
                curr: 1 //重新从第 1 页开始
            }
            , done: function (res, curr, count) {
                //完成后重置where，解决下一次请求携带旧数据
                this.where = {};
            }
        };
        if (forcastDate) {
            //设定异步数据接口的额外参数
            queryCondition.where = {date: forcastDate};
        }
        forcastInput.reload(queryCondition);
        forcastResult.reload(queryCondition);
        supplyDemandCommon("/supply/smhpForR/echartdataMax",forcastDate,'hydropowerMain');
    });
    //初始化
    supplyDemandCommon("/supply/smhpForR/echartdataMax",forcastDate,'hydropowerMain');
    //预测事件
    $("#forcast").click(function (){
            var index = layer.load(2);
            $.post("/supply/solarInput/forcast",{},function(data,status){
                console.log('yuece ',data)
                layer.close(index);
            });
        }
    )
})