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
        tooltip: {},
        dataRange: {
            x: '100px',
            y: '50%',
            seriesIndex: [1],
            splitList: [
                // {start: 1000, end: 1500,label:'',color:'lightGrey'},
                {start: 310, end: 1000,label: '富裕' ,color:'green'},
                {start: 200, end: 300, label: '基本平衡' ,color:'lightGreen'},
                {start: 10, end: 200, label: '偏紧' ,color:'yellow'},
                {end:10, label: '紧张', color: 'red'},
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
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
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
                itemStyle: {
                    color: '#F06C00'
                },
                emphasis: {
                    label: {
                        show: true
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
export   {supplyDemandCommon,balanceEchart}