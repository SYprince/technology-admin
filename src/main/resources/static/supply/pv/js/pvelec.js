// import '/static/echart/echarts.simple';
// import * as echarts from "/static/echart/src/echarts";

//let myChart = echarts.init(document.getElementById('main'));
let forcastInput;
let forcastResult;
let tree;
layui.use(['element', 'form', 'table', 'layer', 'laydate', 'tree', 'util'], function () {
    let table = layui.table;
    console.log('test', table);
    let form = layui.form;//select、单选、复选等依赖form
    let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    let laydate = layui.laydate;
    tree = layui.tree;
    let height = document.documentElement.clientHeight - 60;
let forcastDate = '2014/6';
let chartData;
    //
    forcastInput = table.render({
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
        , url: ctx + '/supply/solarResult/page'
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
        , toolbar: '#toolbarforcast'
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
    let option = {
        title: {
            text: '光伏电量分位数预测结果图',
            top:'15px'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预测结果1', '预测结果2', '预测结果3', '预测结果4', '预测结果5','预测结果6','预测结果7','预测结果8','预测结果9','实际结果']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            name:'时段 （天）',
            top: '50px',
            right: '20px',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
            type: 'value',
            name:'发电量 （MW）',
            left:'10px'
        },
        series: [
            {
                name: '预测结果1',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210],
                lineStyle: {color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果2',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310],
                lineStyle: {color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果3',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410],
                lineStyle: {color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果4',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320],
                lineStyle: {color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果5',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                lineStyle:{color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果6',
                type: 'line',
                stack: '总量',
                data: [822, 938, 909, 938, 1299, 1337, 1326],
                lineStyle:{color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果7',
                type: 'line',
                stack: '总量',
                data: [810, 922, 941, 914, 1260, 1300, 1300],
                lineStyle:{color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果8',
                type: 'line',
                stack: '总量',
                data: [800, 972, 981, 914, 1270, 1320, 1300],
                lineStyle:{color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '预测结果9',
                type: 'line',
                stack: '总量',
                data: [860, 992, 901, 913, 1266, 1310, 1360],
                lineStyle:{color:'blue'},
                itemStyle: {
                    normal: {
                        color: "#386db3",//折线点的颜色
                        lineStyle: {
                            color: "#386db3"//折线的颜色
                        }
                    }
                },
            },
            {
                name: '实际结果',
                type: 'line',
                stack: '总量',
                data: [850, 955, 933, 922, 1288, 1300, 1340],
                lineStyle:{color:'black'},
                itemStyle: {
                    normal: {
                        color: "#000",//折线点的颜色
                        lineStyle: {
                            color: "#000"//折线的颜色
                        }
                    }
                },
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);



})
//查询按钮
function query(forcastDate) {
    forcastInput.reload({
        where:{timestamp : forcastDate}
        ,page: {
            curr: 1 //重新从第 1 页开始
        }
    })
    forcastResult.reload({
        where:{timestamp : forcastDate}
        ,page: {
            curr: 1 //重新从第 1 页开始
        }
    })
    //刷新 图表
}
function a() {

        $.ajax({
            url: "/supply/solarInput/forcast",
            type: "POST",
            data: "",//$("#degreeForm").serialize(),
            success: function (data) {
                if (data) {
                    console.log('llllll', data);
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