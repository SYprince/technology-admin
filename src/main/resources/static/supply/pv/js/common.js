export  default function supplyDemandCommon(echartUrl,forcastDate,echartId){
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