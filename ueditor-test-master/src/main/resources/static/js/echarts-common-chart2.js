
//已使用简历统计

function echarts_pie8(){

	// 基于准备好的dom，初始化echarts实例
    var myChart8 = echarts.init(document.getElementById('echarts-pie-chart8'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '已使用简历量',
            subtext: ''
        },
        color: ['#2d7ce5'],
        tooltip: {},
        legend: {
            data:['已使用简历量']
        },
        xAxis: {
        	type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: [
        	{
        		type:'value'
        	}
    	],
        series: [{
            name: '已使用简历量',
            type: 'bar',
            barWidth: '60%',
            data: [850000, 1220000, 3600000, 2956000, 2388321, 1953586,2836567,2468932,1823088,1302562,953268,1165823],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart8.setOption(option);

}

echarts_pie8();


//申请导出次数统计

function echarts_pie9(){

	// 基于准备好的dom，初始化echarts实例
    var myChart9 = echarts.init(document.getElementById('echarts-pie-chart9'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '申请导出次数',
            subtext: ''
        },
        color: ['#2d7ce5'],
        tooltip: {},
        legend: {
            data:['申请导出次数']
        },
        xAxis: {
        	type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {},
        series: [{
            name: '申请导出次数',
            type: 'bar',
            barWidth: '60%',
            data: [856200, 1235600, 3629500, 2695000, 2326751, 1689286,2463067,1362832,1261088,1682062,932068,725823],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart9.setOption(option);

}

echarts_pie9();


//各业务员导出次数统计

function echarts_pie10(){

	// 基于准备好的dom，初始化echarts实例
    var myChart10 = echarts.init(document.getElementById('echarts-pie-chart10'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'A业务员导出次数',
            subtext: ''
        },
        color: ['#2d7ce5'],
        tooltip: {},
        legend: {
            data:['A业务员导出次数']
        },
        xAxis: {
        	type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {},
        series: [{
            name: 'A业务员导出次数',
            type: 'bar',
            barWidth: '60%',
            data: [856200, 1235600, 3629500, 2695000, 2326751, 1689286,2463067,1362832,1261088,1682062,932068,725823],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart10.setOption(option);

}

echarts_pie10();


//已导出和待导出总量统计

function echarts_pie11(){

	// 基于准备好的dom，初始化echarts实例
    var myChart11 = echarts.init(document.getElementById('echarts-pie-chart11'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '已导出和待导出总量',
            subtext: ''
        },
        color: ['#2d7ce5'],
        tooltip: {},
        legend: {
            data:['已导出和待导出总量']
        },
        xAxis: {
        	type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {},
        series: [{
            name: '已导出和待导出总量',
            type: 'bar',
            barWidth: '60%',
            data: [856200, 1235600, 3629500, 2695000, 2326751, 1689286,2463067,1362832,1261088,1682062,932068,725823],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart11.setOption(option);

}

echarts_pie11();













