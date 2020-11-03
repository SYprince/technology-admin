//let myChart = echarts.init(document.getElementById('calculateMain'));
let forcastInput;
let forcastResult;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    let forcastDate = '2014/12';
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 160;

    //
    forcastInput = table.render({
        elem: '#calculateMainTable'
        , url: ctx + '/demand/calculate/page'
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
            , {field: 'elec', title: '历史负荷'}
            , {field: 'price', title: '电价'}
            , {field: 'springRate', title: '计算结果:弹性系数'}
        ]]
        , defaultToolbar: ['', '', '']
        , page: true
        , height: height
        , cellMinWidth: 80
    });

    laydate.render({
        elem: '#forcastDate'
        , type: 'month'
        , format: 'yyyy/M'
        , value: forcastDate
        , isInitValue: true
        , min: '2013-1-1'
        , max: '2014-12-21'
        , theme: 'molv'  //（墨绿背景）
        , btns: ['confirm']
        , calendar: true  //公历节日
        , done: function (value, date, endDate) {
            console.log(value); //得到日期生成的值，如：2017-08-18
            console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
        }
    })
    //查询事件/?预测事件
    $("#calculateQuery").click(function () {
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
            queryCondition.where = { timestamp : forcastDate};
        }
        forcastInput.reload(queryCondition);
        //forcastResult.reload(queryCondition);
        // reloadThisEchart(forcastDate);
    });

    $("#calculate").click(function () {
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
            queryCondition.where = { timestamp : forcastDate};
        }
        $.post("/demand/calculate/calculate" ,{forcastDate : forcastDate},function(data,status){

            if(data.flag){
                forcastInput.reload(queryCondition);
            }
        });

    });

})
function reloadThisEchart(forcastDate){
    $.post("/demand/calculate/echartdata" ,{forcastDate : forcastDate},function(data,status){
        let echatData = data.data;
        pvEchart(echatData);
    });
    function pvEchart(echartData) {
        let pvForcastTitle = ['预测结果','实际结果'];
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
                name: '负荷',
                left: '10px',
            },
            series: []
        };
        option.series = [];
        option.series.push({
            name: pvForcastTitle[1],
            type: 'line',
            data: echartData['practicallist'],
            lineStyle: {color: 'black'},
            itemStyle: {
                normal: {
                    color: "#5ba4ff",//折线点的颜色
                    lineStyle: {
                        color: "#5ba4ff"//折线的颜色
                    }
                }
            }
        })
        option.series.push({
            name: pvForcastTitle[0],
            type: 'line',
            data: echartData['forcastlist'],
            lineStyle: {color: 'blue'},
            itemStyle: {
                normal: {
                    color: "#b31b68",//折线点的颜色
                    lineStyle: {
                        color: "#b31b68"//折线的颜色
                    }
                }
            }
        })

        myChart.setOption(option);
    }
}