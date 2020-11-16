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
// function indexEchartMain(){
//
//    // function getEcharts(){
//        console.log('ceshishi')
//         // Step:3 conifg ECharts's path, link to echarts.js from current page.
//         // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
//         require.config({
//             paths: {
//                 echarts: '../echarts'
//             }
//         });
//
//         // Step:4 require echarts and use it in the callback.
//         // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
//        require(
//            [
//                 'echarts',
//                 'common/echarts/map'
//             ],
//             function (ec) {
//                 // --- 地图 ---
//                 var myChart2 = ec.init(document.getElementById('mainChart'));
//                 myChart2.setOption({
//                     dataRange: {
//                         min : 0,
//                         max : 100,
//                         width:5,
//                         calculable : true,
//                         color: ['#7FF4ED', '#0777CF', '#72E3F6','#264973','#001946'],
//                         textStyle:{
//                             color:'#fff'
//                         }
//                     },
//                     series : [
//                         {
//                             name: '全国',
//                             type: 'map',
//                             roam: true,
//                             hoverable: false,
//                             mapType: 'china',
//                             itemStyle:{
//                                 normal:{
//                                     borderColor:'rgba(100,149,237,1)',
//                                     borderWidth:0.5,
//                                     areaStyle:{
//                                         color: 'rgba(100,149,237,0)'
//                                     }
//                                 }
//                             },
//                             data:[],
//                             markLine : {
//                                 smooth:true,
//                                 symbol: ['none', 'circle'],
//                                 symbolSize : 1,
//                                 itemStyle : {
//                                     normal: {
//                                         color:'#fff',
//                                         borderWidth:1,
//                                         borderColor:'rgba(30,144,255,0.5)'
//                                     }
//                                 },
//                                 data : [
//                                 ],
//                             },
//                             geoCoord: {
//                                 '上海': [121.4648,31.2891],
//                                 '东莞': [113.8953,22.901],
//                                 '东营': [118.7073,37.5513],
//                                 '中山': [113.4229,22.478],
//                                 '临汾': [111.4783,36.1615],
//                                 '临沂': [118.3118,35.2936],
//                                 '丹东': [124.541,40.4242],
//                                 '丽水': [119.5642,28.1854],
//                                 '乌鲁木齐': [87.9236,43.5883],
//                                 '佛山': [112.8955,23.1097],
//                                 '保定': [115.0488,39.0948],
//                                 '兰州': [103.5901,36.3043],
//                                 '包头': [110.3467,41.4899],
//                                 '北京': [116.4551,40.2539],
//                                 '北海': [109.314,21.6211],
//                                 '南京': [118.8062,31.9208],
//                                 '南宁': [108.479,23.1152],
//                                 '南昌': [116.0046,28.6633],
//                                 '南通': [121.1023,32.1625],
//                                 '厦门': [118.1689,24.6478],
//                                 '台州': [121.1353,28.6688],
//                                 '合肥': [117.29,32.0581],
//                                 '呼和浩特': [111.4124,40.4901],
//                                 '咸阳': [108.4131,34.8706],
//                                 '哈尔滨': [127.9688,45.368],
//                                 '唐山': [118.4766,39.6826],
//                                 '嘉兴': [120.9155,30.6354],
//                                 '大同': [113.7854,39.8035],
//                                 '大连': [122.2229,39.4409],
//                                 '天津': [117.4219,39.4189],
//                                 '太原': [112.3352,37.9413],
//                                 '威海': [121.9482,37.1393],
//                                 '宁波': [121.5967,29.6466],
//                                 '宝鸡': [107.1826,34.3433],
//                                 '宿迁': [118.5535,33.7775],
//                                 '常州': [119.4543,31.5582],
//                                 '广州': [113.5107,23.2196],
//                                 '廊坊': [116.521,39.0509],
//                                 '延安': [109.1052,36.4252],
//                                 '张家口': [115.1477,40.8527],
//                                 '徐州': [117.5208,34.3268],
//                                 '德州': [116.6858,37.2107],
//                                 '惠州': [114.6204,23.1647],
//                                 '成都': [103.9526,30.7617],
//                                 '扬州': [119.4653,32.8162],
//                                 '承德': [117.5757,41.4075],
//                                 '拉萨': [91.1865,30.1465],
//                                 '无锡': [120.3442,31.5527],
//                                 '日照': [119.2786,35.5023],
//                                 '昆明': [102.9199,25.4663],
//                                 '杭州': [119.5313,29.8773],
//                                 '枣庄': [117.323,34.8926],
//                                 '柳州': [109.3799,24.9774],
//                                 '株洲': [113.5327,27.0319],
//                                 '武汉': [114.3896,30.6628],
//                                 '汕头': [117.1692,23.3405],
//                                 '江门': [112.6318,22.1484],
//                                 '沈阳': [123.1238,42.1216],
//                                 '沧州': [116.8286,38.2104],
//                                 '河源': [114.917,23.9722],
//                                 '泉州': [118.3228,25.1147],
//                                 '泰安': [117.0264,36.0516],
//                                 '泰州': [120.0586,32.5525],
//                                 '济南': [117.1582,36.8701],
//                                 '济宁': [116.8286,35.3375],
//                                 '海口': [110.3893,19.8516],
//                                 '淄博': [118.0371,36.6064],
//                                 '淮安': [118.927,33.4039],
//                                 '深圳': [114.5435,22.5439],
//                                 '清远': [112.9175,24.3292],
//                                 '温州': [120.498,27.8119],
//                                 '渭南': [109.7864,35.0299],
//                                 '湖州': [119.8608,30.7782],
//                                 '湘潭': [112.5439,27.7075],
//                                 '滨州': [117.8174,37.4963],
//                                 '潍坊': [119.0918,36.524],
//                                 '烟台': [120.7397,37.5128],
//                                 '玉溪': [101.9312,23.8898],
//                                 '珠海': [113.7305,22.1155],
//                                 '盐城': [120.2234,33.5577],
//                                 '盘锦': [121.9482,41.0449],
//                                 '石家庄': [114.4995,38.1006],
//                                 '福州': [119.4543,25.9222],
//                                 '秦皇岛': [119.2126,40.0232],
//                                 '绍兴': [120.564,29.7565],
//                                 '聊城': [115.9167,36.4032],
//                                 '肇庆': [112.1265,23.5822],
//                                 '舟山': [122.2559,30.2234],
//                                 '苏州': [120.6519,31.3989],
//                                 '莱芜': [117.6526,36.2714],
//                                 '菏泽': [115.6201,35.2057],
//                                 '营口': [122.4316,40.4297],
//                                 '葫芦岛': [120.1575,40.578],
//                                 '衡水': [115.8838,37.7161],
//                                 '衢州': [118.6853,28.8666],
//                                 '西宁': [101.4038,36.8207],
//                                 '西安': [109.1162,34.2004],
//                                 '贵阳': [106.6992,26.7682],
//                                 '连云港': [119.1248,34.552],
//                                 '邢台': [114.8071,37.2821],
//                                 '邯郸': [114.4775,36.535],
//                                 '郑州': [113.4668,34.6234],
//                                 '鄂尔多斯': [108.9734,39.2487],
//                                 '重庆': [107.7539,30.1904],
//                                 '金华': [120.0037,29.1028],
//                                 '铜川': [109.0393,35.1947],
//                                 '银川': [106.3586,38.1775],
//                                 '镇江': [119.4763,31.9702],
//                                 '长春': [125.8154,44.2584],
//                                 '长沙': [113.0823,28.2568],
//                                 '长治': [112.8625,36.4746],
//                                 '阳泉': [113.4778,38.0951],
//                                 '青岛': [120.4651,36.3373],
//                                 '韶关': [113.7964,24.7028]
//                             },
//                             markPoint : {
//                                 symbol:'emptyCircle',
//                                 symbolSize : function (v){
//                                     return 10 + v/10
//                                 },
//                                 effect : {
//                                     show: true,
//                                     shadowBlur : 0
//                                 },
//                                 itemStyle:{
//                                     normal:{
//                                         label:{show:false}
//                                     },
//                                     emphasis: {
//                                         label:{position:'top'}
//                                     }
//                                 },
//                                 data : [
//                                     {name:'上海',value:95},
//                                     {name:'广州',value:90},
//                                     {name:'大连',value:80},
//                                     {name:'南宁',value:70},
//                                     {name:'南昌',value:60},
//                                     {name:'拉萨',value:50},
//                                     {name:'长春',value:40},
//                                     {name:'包头',value:30},
//                                     {name:'重庆',value:20},
//                                     {name:'常州',value:10}
//                                 ]
//                             }
//                         },
//                         {
//                             name: '北京 Top10',
//                             type: 'map',
//                             mapType: 'china',
//                             data:[],
//                             markLine : {
//                                 smooth:true,
//                                 effect : {
//                                     show: true,
//                                     scaleSize: 1,
//                                     period: 30,
//                                     color: '#fff',
//                                     shadowBlur: 10
//                                 },
//                                 itemStyle : {
//                                     normal: {
//                                         label:{show:false},
//                                         borderWidth:1,
//                                         lineStyle: {
//                                             type: 'solid',
//                                             shadowBlur: 5
//                                         }
//                                     }
//                                 },
//                                 data : [
//                                     [{name:'上海'}, {name:'北京',value:95}],
//                                     [{name:'广州'}, {name:'北京',value:90}],
//                                     [{name:'大连'}, {name:'北京',value:80}],
//                                     [{name:'南宁'}, {name:'北京',value:70}],
//                                     [{name:'南昌'}, {name:'北京',value:60}],
//                                     [{name:'拉萨'}, {name:'北京',value:50}],
//                                     [{name:'长春'}, {name:'北京',value:40}],
//                                     [{name:'包头'}, {name:'北京',value:30}],
//                                     [{name:'重庆'}, {name:'北京',value:20}],
//                                     [{name:'常州'}, {name:'北京',value:10}]
//                                 ]
//                             },
//                             markPoint : {
//                                 symbol:'emptyCircle',
//                                 symbolSize : function (v){
//                                     return 0.1
//                                 },
//                                 effect : {
//                                     show: false,
//                                     shadowBlur : 0
//                                 },
//                                 itemStyle:{
//                                     normal:{
//                                         label:{show:true,
//                                             position:'top',
//                                             textStyle: {
//                                                 fontSize: 10
//                                             }
//                                         }
//                                     },
//                                     emphasis: {
//                                         label:{show:false}
//                                     }
//                                 },
//                                 data : [
//                                     {name:'上海',value:95},
//                                     {name:'广州',value:90},
//                                     {name:'大连',value:80},
//                                     {name:'南宁',value:70},
//                                     {name:'南昌',value:60},
//                                     {name:'拉萨',value:50},
//                                     {name:'长春',value:40},
//                                     {name:'包头',value:30},
//                                     {name:'重庆',value:20},
//                                     {name:'常州',value:10}
//                                 ]
//                             }
//                         }
//                     ]
//                 });
//                 console.log('cehsihsihishi11',myChart2)
//             });
//    // }
//     // getEcharts();
// }
//首页
function indexEchartMainBottom(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let xAxisData = [];
    let data3 = [18993.2315000000,18993.2315000000,19225.1700000000,13136.7250000000,19827.1575000000,13709.4800000000,19886.1575000000,13584.4800000000,19986.1575000000];
    let data4 = [13730.1900000000,19956.1575000000,13528.1900000000,19790.1575000000,13696.4800000000,20005.8352500000,13925.0625000000,19921.8352500000,14171.0625000000];

    for (var i = 0; i < 10; i++) {
        xAxisData.push(i);
    }

    let  option = {
        title:{
            text:'各场景电量柱状图',
            left:'center',
            textStyle:{
                color:'#ffffff',
                fontSize: 12
            }
        },
        backgroundColor: '#0F1C48',
        legend: {
            data: ['基础负荷电量', '额外供应能力'],
            textStyle:{
                color:'#ffffff',
                fontSize: 12
            },
            left: 10,
            top:15
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            name: 'X Axis',
            // axisLine: {onZero: false},
            splitLine: {show: false},
            splitArea: {show: false},
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
        },
        yAxis: {
            // inverse: true,
            splitArea: {show: false},
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
        },
        grid: {
            left: 50,
            top:40,
            right:5,
            // bottom:180,
            width:'90%',
            height:'68%'
        },
        series: [
            {
                name: '基础负荷电量',
                type: 'bar',
                stack: 'one',
                // emphasis: emphasisStyle,
                barWidth: 18,
                itemStyle: {
                    normal: {
                        color: '#537A95'
                    }
                },
                data: data3
            },
            {
                name: '额外供应能力',
                type: 'bar',
                stack: 'one',
                barWidth: 18,
                // emphasis: emphasisStyle,
                itemStyle: {
                    normal: {
                        color: '#CD3E3A'
                    }
                },
                data: data4
            }
        ]
    };
    myChart.setOption(option)

}
function indexEchartMainBottomRight(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let data = [];
    let seriesData = [];
    let cate = [5742.9327500000,13612.9520000000,24941.9327500000,13549.5367500000,19095.2275000000,16938.6525000000,18580.0580000000,28765.4775000000];
    seriesData.push(cate);
    data.push(echarts.dataTool.prepareBoxplotData(seriesData));
    let option = {
        title: {
            text: '最大供应电量的概率结果盒图',
            left: 'center',
            textStyle:{
                color:'#ffffff',
                fontSize: 12
            }
        },
        backgroundColor: '#0F1C48',
        legend: {
            top: '10%',
            data: ['电量(MWh)']
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '20%',
            top: '25%',
            right: '10%',
            // bottom: '15%'
            width:'80%',
            height:'60%'
        },
        xAxis: {
            type: 'category',
            data: data[0].axisData,
            // boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: '最大供应电量'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '电量(MWh)',
            min: 0,
            max: 30000,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }

        },
        series: [
            {
                name: '最大供应电量',
                type: 'boxplot',
                data: data[0].boxData,
            },

        ]
    };
    myChart.setOption(option)

}
function indexEchartFive(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let upColor = '#0F1C48';
    let upBorderColor = '#F96056';
    let downColor = '#0F1C48';
    let downBorderColor = '#F96056';

    let data0 = splitData([
        ['1', 2320.26,2320.26,2287.3,2362.94],
        ['2', 2300,2291.3,2288.26,2308.38],
        ['3', 2295.35,2346.5,2295.35,2346.92],
        ['4', 2347.22,2358.98,2337.35,2363.8],
        ['5', 2360.75,2382.48,2347.89,2383.76],
        ['6', 2383.43,2385.42,2371.23,2391.82],
        ['7', 2377.41,2419.02,2369.57,2421.15],
        ['8', 2425.92,2428.15,2417.58,2440.38],
        ['9', 2411,2433.13,2403.3,2437.42],
        ['10', 2432.68,2434.48,2427.7,2441.73],
        ['11', 2430.69,2418.53,2394.22,2433.89],
        ['12', 2416.62,2432.4,2414.4,2443.03],
        ['13', 2441.91,2421.56,2415.43,2444.8],
        ['14', 2420.26,2382.91,2373.53,2427.07],
        ['15', 2383.49,2397.18,2370.61,2397.94],
        ['16', 2378.82,2325.95,2309.17,2378.82],
        ['17', 2322.94,2314.16,2308.76,2330.88],
        ['18', 2320.62,2325.82,2315.01,2338.78],
        ['19', 2313.74,2293.34,2289.89,2340.71],
        ['20', 2297.77,2313.22,2292.03,2324.63],
        ['21', 2322.32,2365.59,2308.92,2366.16],
        ['22', 2364.54,2359.51,2330.86,2369.65],
        ['23', 2332.08,2273.4,2259.25,2333.54],
        ['24', 2274.81,2326.31,2270.1,2328.14],
        ['25', 2333.61,2347.18,2321.6,2351.44],
        ['26', 2340.44,2324.29,2304.27,2352.02],
        ['27', 2326.42,2318.61,2314.59,2333.67],
        ['28', 2314.68,2310.59,2296.58,2320.96],
        ['29', 2309.16,2286.6,2264.83,2333.29],
        ['30', 2282.17,2263.97,2253.25,2286.33],
        ['31', 2255.77,2270.28,2253.31,2276.22],
        ['32', 2269.31,2278.4,2250,2312.08],
        ['33', 2267.29,2240.02,2239.21,2276.05],
        ['34', 2244.26,2257.43,2232.02,2261.31],
        ['35', 2257.74,2317.37,2257.42,2317.86],
        ['36', 2318.21,2324.24,2311.6,2330.81],
        ['37', 2321.4,2328.28,2314.97,2332],
        ['38', 2334.74,2326.72,2319.91,2344.89],
        ['39', 2318.58,2297.67,2281.12,2319.99],
        ['40', 2299.38,2301.26,2289,2323.48],
        ['41', 2273.55,2236.3,2232.91,2273.55],
        ['42', 2238.49,2236.62,2228.81,2246.87],
        ['43', 2229.46,2234.4,2227.31,2243.95],
        ['44',  2234.9,2227.74,2220.44,2253.42],
        ['45', 2232.69,2225.29,2217.25,2241.34],
        ['46', 2196.24,2211.59,2180.67,2212.59],
        ['47', 2215.47,2225.77,2215.47,2234.73],
        ['48', 2224.93,2226.13,2212.56,2233.04],
        ['49', 2236.98,2219.55,2217.26,2242.48],
        ['50', 2218.09,2206.78,2204.44,2226.26],
        ['51', 2199.91,2181.94,2177.39,2204.99],
        ['52', 2169.63,2194.85,2165.78,2196.43],
        ['53', 2195.03,2193.8,2178.47,2197.51],
        ['54', 2181.82,2197.6,2175.44,2206.03],
        ['55', 2201.12,2244.64,2200.58,2250.11],
        ['56', 2236.4,2242.17,2232.26,2245.12],
        ['57', 2242.62,2184.54,2182.81,2242.62],
        ['58', 2187.35,2218.32,2184.11,2226.12],
        ['59', 2213.19,2199.31,2191.85,2224.63],
        ['60', 2203.89,2177.91,2173.86,2210.58],
    ]);
    function splitData(rawData) {
        let categoryData = [];
        let values = []
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i])
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }

    let option = {
        title: {
            text: '最大供应电力的概率结果盒图',
            left: 0,
            top:0,
            textStyle:{
                color:'#ffffff',
                fontSize: 12
            }
        },
        legend: {
            data: ['额外供应能力','基础负荷电力'],
            textStyle:{
                color:'#ffffff',
                fontSize: 12
            },
            left:'50%'
        },
        grid: {
            left: '20%',
            right: '10%',
            top:'20%',
            // bottom: '15%',
            width:'85%',
            height:'66%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap: false,
            // axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
        },
        yAxis: {
            scale: true,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
            // splitArea: {
            //     show: true
            // }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 80,
                end: 100
            },
            {
                show: false,
                type: 'slider',
                top: '90%',
                start: 80,
                end: 100
            }
        ],
        series: [
            {
                name: '额外供应能力',
                type: 'candlestick',
                data: data0.values,
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: '#F96056',
                    borderColor0: '#F96056'
                },
            },
            {
                name: '基础负荷电力',
                type: 'line',
                data: [2320.26,2320.26,2287.3,2362.94,
                       2300,2291.3,2288.26,2308.38,
                       2295.35,2346.5,2295.35,2346.92,
                       2347.22,2358.98,2337.35,2363.8,
                       2360.75,2382.48,2347.89,2383.76,
                       2383.43,2385.42,2371.23,2391.82,
                       2377.41,2419.02,2369.57,2421.15,
                       2425.92,2428.15,2417.58,2440.38,
                       2411,2433.13,2403.3,2437.42,
                       2432.68,2434.48,2427.7,2441.73,
                       2430.69,2418.53,2394.22,2433.89,
                       2416.62,2432.4,2414.4,2443.03,
                       2441.91,2421.56,2415.43,2444.8,
                       2420.26,2382.91,2373.53,2427.07,
                       2383.49,2397.18,2370.61,2397.94,
                       2378.82,2325.95,2309.17,2378.82,
                       2322.94,2314.16,2308.76,2330.88,
                       2320.62,2325.82,2315.01,2338.78,
                       2313.74,2293.34,2289.89,2340.71,
                       2297.77,2313.22,2292.03,2324.63,
                       2322.32,2365.59,2308.92,2366.16,
                       2364.54,2359.51,2330.86,2369.65,
                       2332.08,2273.4,2259.25,2333.54,
                       2274.81,2326.31,2270.1,2328.14,
                       2333.61,2347.18,2321.6,2351.44,
                       2340.44,2324.29,2304.27,2352.02,
                       2326.42,2318.61,2314.59,2333.67,
                       2314.68,2310.59,2296.58,2320.96,
                       2309.16,2286.6,2264.83,2333.29,
                       2282.17,2263.97,2253.25,2286.33,
                       2255.77,2270.28,2253.31,2276.22,
                       2269.31,2278.4,2250,2312.08,
                       2267.29,2240.02,2239.21,2276.05,
                       2244.26,2257.43,2232.02,2261.31,
                       2257.74,2317.37,2257.42,2317.86,
                       2318.21,2324.24,2311.6,2330.81,
                       2321.4,2328.28,2314.97,2332,
                       2334.74,2326.72,2319.91,2344.89,

                       1918.58,1897.67,1881.12,1919.99,
                       1899.38,1901.26,1889,1923.48,
                       1873.55,1836.3,1832.91,1873.55,
                       1838.49,1836.62,1828.81,1846.87,
                       1829.46,1834.4,1827.31,1843.95,
                       1834.9,1827.74,1820.44,1853.42,
                       1832.69,1825.29,1817.25,1841.34,
                       1796.24,1811.59,1780.67,1812.59,
                       1815.47,1825.77,1815.47,1834.73,

                       1824.93,1826.13,1812.56,1833.04,
                       1836.98,1819.55,1817.26,1842.48,
                       1818.09,1806.78,1804.44,1826.26,
                       1899.91,1881.94,1877.39,1804.99,
                       1969.63,1794.85,1765.78,1796.43,
                       1795.03,1793.8,1778.47,1797.51,
                       1781.82,1797.6,1775.44,1806.03,
                       1801.12,1844.64,1800.58,1850.11,
                       1836.4,1842.17,1832.26,1845.12,
                       1842.62,1784.54,1782.81,1842.62,
                       1787.35,1818.32,1784.11,1826.12,
                       1813.19,1799.31,1791.85,1824.63,
                ],
            }

        ]
    };
    myChart.setOption(option)
}
function indexEchartMain(echartId){
    let myChart = echarts.init(document.getElementById(echartId));
    let mapColor='#0F1C48';
    var data = [
        // {name: '海门', value: 12},
        // {name: '鄂尔多斯', value: 12},
        // {name: '招远', value: 12},
        // {name: '舟山', value: 12},
        // {name: '齐齐哈尔', value: mapColor},
        // {name: '盐城', value: 15},
        // {name: '赤峰', value: 16},
        {name: '青岛', value: 118},
        // {name: '乳山', value: 18},
        // {name: '金昌', value: 19},
        // {name: '泉州', value: 21},
        // {name: '莱西', value: 21},
        // {name: '日照', value: 21},
        // {name: '胶南', value: 22},
        // {name: '南通', value: 23},
        {name: '拉萨', value: 24},
        // {name: '云浮', value: 24},
        // {name: '梅州', value: 25},
        // {name: '文登', value: 25},
        {name: '上海', value: 105},
        // {name: '攀枝花', value: 25},
        // {name: '威海', value: 25},
        // {name: '承德', value: 25},
        // {name: '厦门', value: 26},
        // {name: '汕尾', value: 26},
        // {name: '潮州', value: 26},
        // {name: '丹东', value: 27},
        // {name: '太仓', value: 27},
        // {name: '曲靖', value: 27},
        {name: '烟台', value: 128},
        // {name: '福州', value: 29},
        // {name: '瓦房店', value: 30},
        // {name: '即墨', value: 30},
        // {name: '抚顺', value: 31},
        // {name: '玉溪', value: 31},
        // {name: '张家口', value: 31},
        // {name: '阳泉', value: 31},
        // {name: '莱州', value: 32},
        // {name: '湖州', value: 32},
        // {name: '汕头', value: 32},
        // {name: '昆山', value: 33},
        // {name: '宁波', value: 33},
        // {name: '湛江', value: 33},
        // {name: '揭阳', value: 34},
        // {name: '荣成', value: 34},
        // {name: '连云港', value: 35},
        // {name: '葫芦岛', value: 35},
        // {name: '常熟', value: 36},
        // {name: '东莞', value: 36},
        // {name: '河源', value: 36},
        // {name: '淮安', value: 36},
        // {name: '泰州', value: 36},
        // {name: '南宁', value: 37},
        // {name: '营口', value: 37},
        // {name: '惠州', value: 37},
        // {name: '江阴', value: 37},
        // {name: '蓬莱', value: 37},
        // {name: '韶关', value: 38},
        // {name: '嘉峪关', value: 38},
        {name: '广州', value: 38},
        // {name: '延安', value: 38},
        // {name: '太原', value: 39},
        // {name: '清远', value: 39},
        // {name: '中山', value: 39},
        // {name: '昆明', value: 39},
        // {name: '寿光', value: 40},
        // {name: '盘锦', value: 40},
        // {name: '长治', value: 41},
        // {name: '深圳', value: 41},
        // {name: '珠海', value: 42},
        // {name: '宿迁', value: 43},
        // {name: '咸阳', value: 43},
        // {name: '铜川', value: 44},
        // {name: '平度', value: 44},
        // {name: '佛山', value: 44},
        // {name: '海口', value: 44},
        // {name: '江门', value: 45},
        // {name: '章丘', value: 45},
        // {name: '肇庆', value: 46},
        {name: '大连', value: 47},
        // {name: '临汾', value: 47},
        // {name: '吴江', value: 47},
        // {name: '石嘴山', value: 49},
        // {name: '沈阳', value: 50},
        // {name: '苏州', value: 50},
        // {name: '茂名', value: 50},
        // {name: '嘉兴', value: 51},
        // {name: '长春', value: 51},
        // {name: '胶州', value: 52},
        // {name: '银川', value: 52},
        // {name: '张家港', value: 52},
        // {name: '三门峡', value: 53},
        // {name: '锦州', value: 54},
        // {name: '南昌', value: 54},
        // {name: '柳州', value: 54},
        // {name: '三亚', value: 54},
        // {name: '自贡', value: 56},
        // {name: '吉林', value: 56},
        // {name: '阳江', value: 57},
        // {name: '泸州', value: 57},
        // {name: '西宁', value: 57},
        // {name: '宜宾', value: 58},
        {name: '呼和浩特', value: 158},
        {name: '成都', value: 158},
        // {name: '大同', value: 58},
        // {name: '镇江', value: 59},
        // {name: '桂林', value: 59},
        // {name: '张家界', value: 59},
        // {name: '宜兴', value: 59},
        // {name: '北海', value: 60},
        // {name: '西安', value: 61},
        // {name: '金坛', value: 62},
        // {name: '东营', value: 62},
        // {name: '牡丹江', value: 63},
        // {name: '遵义', value: 63},
        // {name: '绍兴', value: 63},
        // {name: '扬州', value: 64},
        // {name: '常州', value: 64},
        // {name: '潍坊', value: 65},
        // {name: '重庆', value: 66},
        // {name: '台州', value: 67},
        // {name: '南京', value: 67},
        // {name: '滨州', value: 70},
        {name: '贵阳', value: 71},
        // {name: '无锡', value: 71},
        // {name: '本溪', value: 71},
        // {name: '克拉玛依', value: 72},
        // {name: '渭南', value: 72},
        // {name: '马鞍山', value: 72},
        // {name: '宝鸡', value: 72},
        // {name: '焦作', value: 75},
        // {name: '句容', value: 75},
        {name: '北京', value: 79},
        // {name: '徐州', value: 79},
        // {name: '衡水', value: 80},
        // {name: '包头', value: 80},
        // {name: '绵阳', value: 80},
        // {name: '乌鲁木齐', value: 84},
        // {name: '枣庄', value: 84},
        // {name: '杭州', value: 84},
        // {name: '淄博', value: 85},
        // {name: '鞍山', value: 86},
        // {name: '溧阳', value: 86},
        // {name: '库尔勒', value: 86},
        // {name: '安阳', value: 90},
        // {name: '开封', value: 90},
        // {name: '济南', value: 92},
        // {name: '德阳', value: 93},
        // {name: '温州', value: 95},
        // {name: '九江', value: 96},
        // {name: '邯郸', value: 98},
        // {name: '临安', value: 99},
        // {name: '兰州', value: 99},
        // {name: '沧州', value: 100},
        // {name: '临沂', value: 103},
        // {name: '南充', value: 104},
        {name: '天津', value: 105},
        // {name: '富阳', value: 106},
        // {name: '泰安', value: 112},
        // {name: '诸暨', value: 112},
        // {name: '郑州', value: 113},
        {name: '哈尔滨', value: 114},
        // {name: '聊城', value: 116},
        // {name: '芜湖', value: 117},
        // {name: '唐山', value: 119},
        // {name: '平顶山', value: 119},
        // {name: '邢台', value: 119},
        // {name: '德州', value: 120},
        // {name: '济宁', value: 120},
        // {name: '荆州', value: 127},
        {name: '宜昌', value: 130},
        // {name: '义乌', value: 132},
        // {name: '丽水', value: 133},
        // {name: '洛阳', value: 134},
        // {name: '秦皇岛', value: 136},
        // {name: '株洲', value: 143},
        // {name: '石家庄', value: 147},
        // {name: '莱芜', value: 148},
        // {name: '常德', value: 152},
        // {name: '保定', value: 153},
        // {name: '湘潭', value: 154},
        // {name: '金华', value: 157},
        // {name: '岳阳', value: 169},
        {name: '长沙', value: 175},
        // {name: '衢州', value: 177},
        // {name: '廊坊', value: 193},
        // {name: '菏泽', value: 194},
        // {name: '合肥', value: 229},
        // {name: '武汉', value: mapColor},
        // {name: '大庆', value: 279}
    ];
    var geoCoordMap = {
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33],
        '盐城':[120.13,33.38],
        '赤峰':[118.87,42.28],
        '青岛':[120.33,36.07],
        '乳山':[121.52,36.89],
        '金昌':[102.188043,38.520089],
        '泉州':[118.58,24.93],
        '莱西':[120.53,36.86],
        '日照':[119.46,35.42],
        '胶南':[119.97,35.88],
        '南通':[121.05,32.08],
        '拉萨':[91.11,29.97],
        '云浮':[112.02,22.93],
        '梅州':[116.1,24.55],
        '文登':[122.05,37.2],
        '上海':[121.48,31.22],
        '攀枝花':[101.718637,26.582347],
        '威海':[122.1,37.5],
        '承德':[117.93,40.97],
        '厦门':[118.1,24.46],
        '汕尾':[115.375279,22.786211],
        '潮州':[116.63,23.68],
        '丹东':[124.37,40.13],
        '太仓':[121.1,31.45],
        '曲靖':[103.79,25.51],
        '烟台':[121.39,37.52],
        '福州':[119.3,26.08],
        '瓦房店':[121.979603,39.627114],
        '即墨':[120.45,36.38],
        '抚顺':[123.97,41.97],
        '玉溪':[102.52,24.35],
        '张家口':[114.87,40.82],
        '阳泉':[113.57,37.85],
        '莱州':[119.942327,37.177017],
        '湖州':[120.1,30.86],
        '汕头':[116.69,23.39],
        '昆山':[120.95,31.39],
        '宁波':[121.56,29.86],
        '湛江':[110.359377,21.270708],
        '揭阳':[116.35,23.55],
        '荣成':[122.41,37.16],
        '连云港':[119.16,34.59],
        '葫芦岛':[120.836932,40.711052],
        '常熟':[120.74,31.64],
        '东莞':[113.75,23.04],
        '河源':[114.68,23.73],
        '淮安':[119.15,33.5],
        '泰州':[119.9,32.49],
        '南宁':[108.33,22.84],
        '营口':[122.18,40.65],
        '惠州':[114.4,23.09],
        '江阴':[120.26,31.91],
        '蓬莱':[120.75,37.8],
        '韶关':[113.62,24.84],
        '嘉峪关':[98.289152,39.77313],
        '广州':[113.23,23.16],
        '延安':[109.47,36.6],
        '太原':[112.53,37.87],
        '清远':[113.01,23.7],
        '中山':[113.38,22.52],
        '昆明':[102.73,25.04],
        '寿光':[118.73,36.86],
        '盘锦':[122.070714,41.119997],
        '长治':[113.08,36.18],
        '深圳':[114.07,22.62],
        '珠海':[113.52,22.3],
        '宿迁':[118.3,33.96],
        '咸阳':[108.72,34.36],
        '铜川':[109.11,35.09],
        '平度':[119.97,36.77],
        '佛山':[113.11,23.05],
        '海口':[110.35,20.02],
        '江门':[113.06,22.61],
        '章丘':[117.53,36.72],
        '肇庆':[112.44,23.05],
        '大连':[121.62,38.92],
        '临汾':[111.5,36.08],
        '吴江':[120.63,31.16],
        '石嘴山':[106.39,39.04],
        '沈阳':[123.38,41.8],
        '苏州':[120.62,31.32],
        '茂名':[110.88,21.68],
        '嘉兴':[120.76,30.77],
        '长春':[125.35,43.88],
        '胶州':[120.03336,36.264622],
        '银川':[106.27,38.47],
        '张家港':[120.555821,31.875428],
        '三门峡':[111.19,34.76],
        '锦州':[121.15,41.13],
        '南昌':[115.89,28.68],
        '柳州':[109.4,24.33],
        '三亚':[109.511909,18.252847],
        '自贡':[104.778442,29.33903],
        '吉林':[126.57,43.87],
        '阳江':[111.95,21.85],
        '泸州':[105.39,28.91],
        '西宁':[101.74,36.56],
        '宜宾':[104.56,29.77],
        '呼和浩特':[111.65,40.82],
        '成都':[104.06,30.67],
        '大同':[113.3,40.12],
        '镇江':[119.44,32.2],
        '桂林':[110.28,25.29],
        '张家界':[110.479191,29.117096],
        '宜兴':[119.82,31.36],
        '北海':[109.12,21.49],
        '西安':[108.95,34.27],
        '金坛':[119.56,31.74],
        '东营':[118.49,37.46],
        '牡丹江':[129.58,44.6],
        '遵义':[106.9,27.7],
        '绍兴':[120.58,30.01],
        '扬州':[119.42,32.39],
        '常州':[119.95,31.79],
        '潍坊':[119.1,36.62],
        '重庆':[106.54,29.59],
        '台州':[121.420757,28.656386],
        '南京':[118.78,32.04],
        '滨州':[118.03,37.36],
        '贵阳':[106.71,26.57],
        '无锡':[120.29,31.59],
        '本溪':[123.73,41.3],
        '克拉玛依':[84.77,45.59],
        '渭南':[109.5,34.52],
        '马鞍山':[118.48,31.56],
        '宝鸡':[107.15,34.38],
        '焦作':[113.21,35.24],
        '句容':[119.16,31.95],
        '北京':[116.46,39.92],
        '徐州':[117.2,34.26],
        '衡水':[115.72,37.72],
        '包头':[110,40.58],
        '绵阳':[104.73,31.48],
        '乌鲁木齐':[87.68,43.77],
        '枣庄':[117.57,34.86],
        '杭州':[120.19,30.26],
        '淄博':[118.05,36.78],
        '鞍山':[122.85,41.12],
        '溧阳':[119.48,31.43],
        '库尔勒':[86.06,41.68],
        '安阳':[114.35,36.1],
        '开封':[114.35,34.79],
        '济南':[117,36.65],
        '德阳':[104.37,31.13],
        '温州':[120.65,28.01],
        '九江':[115.97,29.71],
        '邯郸':[114.47,36.6],
        '临安':[119.72,30.23],
        '兰州':[103.73,36.03],
        '沧州':[116.83,38.33],
        '临沂':[118.35,35.05],
        '南充':[106.110698,30.837793],
        '天津':[117.2,39.13],
        '富阳':[119.95,30.07],
        '泰安':[117.13,36.18],
        '诸暨':[120.23,29.71],
        '郑州':[113.65,34.76],
        '哈尔滨':[126.63,45.75],
        '聊城':[115.97,36.45],
        '芜湖':[118.38,31.33],
        '唐山':[118.02,39.63],
        '平顶山':[113.29,33.75],
        '邢台':[114.48,37.05],
        '德州':[116.29,37.45],
        '济宁':[116.59,35.38],
        '荆州':[112.239741,30.335165],
        '宜昌':[111.3,30.7],
        '义乌':[120.06,29.32],
        '丽水':[119.92,28.45],
        '洛阳':[112.44,34.7],
        '秦皇岛':[119.57,39.95],
        '株洲':[113.16,27.83],
        '石家庄':[114.48,38.03],
        '莱芜':[117.67,36.19],
        '常德':[111.69,29.05],
        '保定':[115.48,38.85],
        '湘潭':[112.91,27.87],
        '金华':[119.64,29.12],
        '岳阳':[113.09,29.37],
        '长沙':[113,28.21],
        '衢州':[118.88,28.97],
        '廊坊':[116.7,39.53],
        '菏泽':[115.480656,35.23375],
        '合肥':[117.27,31.86],
        '武汉':[114.31,30.52],
        '大庆':[125.03,46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    let option = {
        title: {
            text: '电力市场总体分析',
            left: 'center',
            textStyle:{
                color:'#ffffff',
                fontSize: 16 ,
                textShadow:' #fff',
            }
        },
        tooltip : {
            trigger: 'item'
        },
        geo: {
            map:'china',
            center: [104.114129, 37.550339],
            // zoom: 5,
            width:'85%',
            height:'90%',
            bottom: 10,
            top:0,
            roam: true,
            itemStyle:{
                normal:{
                    areaColor: '#0F1C48',
                    borderColor:'#1A4495',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: '#1A4495'

                }
            },
            emphasis:{
                label:'',
                itemStyle: {

                    areaColor: 'rgba(23, 73, 150,0.7)',
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 0,
                    // shadowBlur: 10,
                    // borderWidth: 0,
                    // shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            }
            // mapStyle: {
            //     styleJson: [{
            //         'featureType': 'water',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#d1d1d1'
            //         }
            //     }, {
            //         'featureType': 'land',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#f3f3f3'
            //         }
            //     }, {
            //         'featureType': 'railway',
            //         'elementType': 'all',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'highway',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#fdfdfd'
            //         }
            //     }, {
            //         'featureType': 'highway',
            //         'elementType': 'labels',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'arterial',
            //         'elementType': 'geometry',
            //         'stylers': {
            //             'color': '#fefefe'
            //         }
            //     }, {
            //         'featureType': 'arterial',
            //         'elementType': 'geometry.fill',
            //         'stylers': {
            //             'color': '#fefefe'
            //         }
            //     }, {
            //         'featureType': 'poi',
            //         'elementType': 'all',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'green',
            //         'elementType': 'all',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'subway',
            //         'elementType': 'all',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'manmade',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#d1d1d1'
            //         }
            //     }, {
            //         'featureType': 'local',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#d1d1d1'
            //         }
            //     }, {
            //         'featureType': 'arterial',
            //         'elementType': 'labels',
            //         'stylers': {
            //             'visibility': 'off'
            //         }
            //     }, {
            //         'featureType': 'boundary',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#fefefe'
            //         }
            //     }, {
            //         'featureType': 'building',
            //         'elementType': 'all',
            //         'stylers': {
            //             'color': '#d1d1d1'
            //         }
            //     }, {
            //         'featureType': 'label',
            //         'elementType': 'labels.text.fill',
            //         'stylers': {
            //             'color': '#999999'
            //         }
            // }]
            // }
        },
        // visualMap: {
        //     inRange: {
        //         color: ['lightskyblue']
        //     }
        // },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                itemStyle: {
                    color: '#61C4E6'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                itemStyle: {
                    color: '#61C4E6',
                    shadowBlur: 10,

                    shadowColor: '#0F1C48'
                },
                zlevel: 2
            }
        ]
    };
    myChart.setOption(option)

}
export   {supplyDemandCommon,balanceEchart,supplyTotalOne,supplyTotalTwo,indexEchartMain,indexEchartMainBottom,indexEchartMainBottomRight,indexEchartFive}