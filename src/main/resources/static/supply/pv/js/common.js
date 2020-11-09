function supplyDemandCommon(echartUrl,forcastDate,echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    function pvEchart(echartData) {
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
                left: '10px',
            },
            series: []
        };
        option.series = [];
        option.series.push({
            name: pvForcastTitle[pvForcastTitle.length-1],
            type: 'line',
            data: echartData['power'],
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
        for (let i = 1; i < 10; i++) {
            option.series.push({
                name: pvForcastTitle[i-1],
                type: 'line',
                data: echartData['v'+i],
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

        myChart.setOption(option);
    }
    $.post(echartUrl ,{forcastDate : forcastDate},function(data,status){
        let echatData = data.data;
        pvEchart(echatData);
    });
}
function balanceEchart(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(12, 40, 67,1)',
            formatter: '{b}'
        },
        dataRange: {
            x: '100px',
            y: '50%',
            seriesIndex: [1],
            splitList: [
                {start: 310, end: 1000,label: '富裕' ,color:'rgba(164, 209, 241,1)'},
                {start: 200, end: 300, label: '基本平衡' ,color:'rgba(30, 95, 159,1)'},
                {start: 10, end: 200, label: '偏紧' ,color:'rgba(23, 73, 150,1)'},
                {end:10, label: '紧张', color: 'rgba(12, 40, 67,1)'},
            ],
        },
        geo: {
            map: 'china',
            roam: true,
            label: {
                show: true,
                color: 'rgba(0,0,0,0.4)'
            },
            itemStyle: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                itemStyle: {
                    areaColor: 'rgba(23, 73, 150,0.7)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 10,
                    borderWidth: 0,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series : [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                encode: {
                    value: 2
                },
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
            {
                name: 'categoryA',
                type: 'map',
                geoIndex: 0,
                data:[
                    {name: '北京', value: '201'},
                    {name: '天津', value: '201'},
                    {name: '上海', value: '201'},
                    {name: '重庆', value: '201'},
                    {name: '河北', value: '201'},
                    {name: '河南', value: '11'},
                    // {name: '云南', value: '1110'},
                    {name: '辽宁', value: '311'},
                    {name: '黑龙江', value: '311'},
                    {name: '湖南', value: '11'},
                    {name: '安徽', value: '201'},
                    {name: '山东', value: '201'},
                    {name: '新疆', value: '311'},
                    {name: '江苏', value: '201'},
                    {name: '浙江', value: '201'},
                    {name: '江西', value: '201'},
                    {name: '湖北', value: '11'},
                    // {name: '广西', value: '1111'},
                    {name: '甘肃', value: '311'},
                    {name: '山西', value: '201'},
                    {name: '内蒙古', value: '201'},
                    {name: '陕西', value: '311'},
                    {name: '吉林', value: '311'},
                    {name: '福建', value: '201'},
                    // {name: '贵州', value: '1111'},
                    // {name: '广东', value: '1111'},
                    {name: '青海', value: '311'},
                    {name: '西藏', value: '201'},
                    {name: '四川', value: '201'},
                    {name: '宁夏', value: '311'},
                    // {name: '海南', value: '1111'},
                    // {name: '台湾', value: '1111'},
                    // {name: '香港', value: '1111'},
                    // {name: '澳门', value: '1111'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}
function supplyTotalOne(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let data = [0.940378006872852,0.949828178694158,0.915979381443299,0.912542955326461,0.890206185567010,0.843986254295533,0.839347079037801,0.834192439862543,0.818556701030928];
    let yMax = 1.5;
    let dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    let option = {
        title: {
            text: '全时段火电机组开机率'
        },
        xAxis: {
            data: dataAxis,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                barWidth: 18,
                itemStyle: {
                    normal: {
                        barBorderRadius: 4,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#4A7FE9'},
                                {offset: 1, color: '#121D55'}
                            ]
                        )
                    }
                },
                // emphasis: {
                //     itemStyle: {
                //         color: new echarts.graphic.LinearGradient(
                //             0, 0, 0, 1,
                //             [
                //                 {offset: 0, color: '#2378f7'},
                //                 {offset: 0.7, color: '#2378f7'},
                //                 {offset: 1, color: '#83bff6'}
                //             ]
                //         )
                //     }
                // },
                data: data
            }
        ]
    };
    myChart.setOption(option)
}
function supplyTotalTwo(echartId,barData,lineData,minBar,minLine,barName,lineName){
   let myChart = echarts.init(document.getElementById(echartId));
   let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#000'
                }
            },
        },
        toolbox: {
            feature: {
                // dataView: {show: true, readOnly: false},
                // magicType: {show: true, type: ['line', 'bar']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: [ barName, lineName]
        },
        xAxis: [
            {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)'
                    }
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                name: barName,
                min: minBar,
                max: 30000,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)'
                    }
                }
                // interval: 800,
                // axisLabel: {
                //     formatter: '{value} ml'
                // }
            },
            {
                type: 'value',
                name: lineName,
                min: minLine,
                max: 1,
                interval: 5,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)'
                    }
                }
                // axisLabel: {
                //     formatter: '{value} °C'
                // }
            }
        ],
        series: [

            {
                name: barName,
                type: 'bar',
                data: barData,
                barWidth: 18,
                itemStyle: {
                    normal: {
                        barBorderRadius: 4,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#4A7FE9'},
                                {offset: 1, color: '#121D55'}
                            ]
                        )
                    }
                },
            },
            {
                name: lineName,
                type: 'line',
                yAxisIndex: 1,
                data: lineData
            }
        ]
    };
    myChart.setOption(option)

}
export   {supplyDemandCommon,balanceEchart,supplyTotalOne,supplyTotalTwo}