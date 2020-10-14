// import '/static/echart/echarts.simple';
// import * as echarts from "/static/echart/src/echarts";

//let myChart = echarts.init(document.getElementById('main'));
let forcastInput;
let forcastResult;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    let forcastDate = '2013-12';
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 160;

    //
    forcastInput = table.render({
        elem: '#windelecTable'
        , url: ctx + '/supply/windInput/page'
        , method: 'POST'
        , where: {
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
        //, toolbar: '#userTableToolbarDemo'
        , title: '用户列表'
        , cols: [[
            {field: 'id', title: 'ID', hide: true}
            , {field: 'timestamp', title: '日期'}
            , {field: 'targetvar', title: '发电量'}
            //, {field: 'targetvarMax', title: '最大电力'}
            , {field: 'ws', title: '风速'}
            //, {field: 'wsMax', title: '最大风速'}
            , {field: 'doy', title: '年中位置'}
            , {field: 'v', title: 'v'}
            //, {fixed: 'right', title: '操作', toolbar: '#userTableBarDemo'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });
    //预测结果表格
    forcastResult = table.render({
        elem: '#forcastResult'
        , url: ctx + '/supply/windResult/page'
        , method: 'POST'
        , where: {
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
            let data = res.data;
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
            , {field: 'timestamp', title: '日期'}
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
        , format: 'yyyy-MM'
        , value: forcastDate
        , isInitValue: true
        , min: '2013-10-1'
        , max: '2013-12-1'
        , theme: 'molv'  //（墨绿背景）
        , btns: ['confirm']
        , calendar: true  //公历节日
        , done: function (value, date, endDate) {
        }
    })
    let myChart = echarts.init(document.getElementById('main'));
//风电电量分位数预测echart表
    function pvEchart(seriesData) {
        let pvForcastTitle = ['预测结果1', '预测结果2', '预测结果3', '预测结果4', '预测结果5', '预测结果6', '预测结果7', '预测结果8', '预测结果9', '实际结果'];
        let xAxisData=[];
        for (let i=1;i<31;i++){
            xAxisData.push(i)
        }
        let option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: pvForcastTitle
            },
            grid: {
                top: '50px',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                name: '时段(天)',
                boundaryGap: false,
                data: xAxisData
            },
            yAxis: {
                type: 'value',
                name: '发电量(MW)',
                left: '10px'
            },
            series: []
        };
        option.series = [];
        for (let i = 1; i < 10; i++) {
            option.series.push({
                name: pvForcastTitle[i-1],
                type: 'line',
                stack: '总量',
                data: seriesData['v'+i],
                lineStyle: {color: 'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                }
            });
        }
        option.series.push({
            name: pvForcastTitle[pvForcastTitle.length-1],
            type: 'line',
            stack: '总量',
            data: seriesData['power'],
            lineStyle: {color: 'black'},
            itemStyle: {
                normal: {
                    color: "#000000",//折线点的颜色
                    lineStyle: {
                        color: "#000000"//折线的颜色
                    }
                }
            }
        })
        myChart.setOption(option);
    }
//光伏电量查询事件
    $("#windQuery").click(function () {
        let forcastDate = $("#forcastDate").val();
        let pvQuery = {
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
            pvQuery.where = {timestamp: forcastDate};
        }
        forcastInput.reload(pvQuery);
        forcastResult.reload(pvQuery);
        reloadEchart(forcastDate);
    });
    //光伏电量数据表展示图数据加载
    function reloadEchart(forcastDate) {
        $.post("/supply/windInput/echartdata",{forcastDate : forcastDate},function(data,status){
            let eachatData = data.data;
            pvEchart(eachatData);
        });
    }
    //初始化
    reloadEchart(forcastDate);
})