
//学位统计

function echarts_pie1(){

	// 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('echarts-pie-chart1'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '学位统计',
	        subtext: '',
	        x:'center'
	    },
	    color: ['#2d7ce5','#f3b43f','#de5f11','#af2524'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['学士','硕士研究生','博士研究生','博士研究生以上']
	    },
	    series : [
	        {
	            name: '学位统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'学士'},
	                {value:310, name:'硕士研究生'},
	                {value:234, name:'博士研究生'},
	                {value:135, name:'博士研究生以上'}
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);

}

echarts_pie1();


//学历统计

function echarts_pie2(){

	// 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('echarts-pie-chart2'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '学历统计',
	        subtext: '',
	        x:'center'
	    },
	    color: ['#af2524','#de5f11','#f3b43f','#2d7ce5','#43b78d','#acb536','#57aebd'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['研究生','本科','大专','中技','中专','高中','初中及以下']
	    },
	    series : [
	        {
	            name: '学历统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:220, name:'研究生'},
	                {value:310, name:'本科'},
	                {value:200, name:'大专'},
	                {value:135, name:'中技'},
	                {value:100, name:'中专'},
	                {value:80, name:'高中'},
	                {value:50, name:'初中及以下'}
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option);

}

echarts_pie2();


//政治面貌统计

function echarts_pie3(){

	// 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('echarts-pie-chart3'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '政治面貌统计',
	        subtext: '',
	        x:'center'
	    },
	    color:['#af2524','#de5f11','#69bd96','#ef9a81','#58afda','#8ea760','#e8a66b','#dc9f94','#7f5ba5','#64718e','#5e7775','#79afd6','#1b86bb'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['中共党员','中共预备党员','共青团员','民革党员','民盟盟员','民建会员','民进会员','农工党党员','致公党党员','九三学社社员','台盟盟员','无党派民主人士','群众']
	    },
	    series : [
	        {
	            name: '政治面貌统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:120, name:'中共党员'},
	                {value:230, name:'中共预备党员'},
	                {value:100, name:'共青团员'},
	                {value:135, name:'民革党员'},
	                {value:150, name:'民盟盟员'},
	                {value:180, name:'民建会员'},
	                {value:150, name:'民进会员'},
	                {value:350, name:'农工党党员'},
	                {value:320, name:'致公党党员'},
	                {value:150, name:'九三学社社员'},
	                {value:80, name:'台盟盟员'},
	                {value:220, name:'无党派民主人士'},
	                {value:400, name:'群众'}
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option);

}

echarts_pie3();


//婚姻状况统计

function echarts_pie4(){

	// 基于准备好的dom，初始化echarts实例
    var myChart4 = echarts.init(document.getElementById('echarts-pie-chart4'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '婚姻状况统计',
	        subtext: '',
	        x:'center'
	    },
	    color: ['#cc433f','#2c8cce','#3aa27d','#5683a2'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['已婚','未婚','离异','丧偶']
	    },
	    series : [
	        {
	            name: '婚姻状况统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'已婚'},
	                {value:310, name:'未婚'},
	                {value:234, name:'离异'},
	                {value:135, name:'丧偶'}
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option);

}

echarts_pie4();


//985/211院校统计

function echarts_pie5(){

	// 基于准备好的dom，初始化echarts实例
    var myChart5 = echarts.init(document.getElementById('echarts-pie-chart5'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '985/211院校统计',
	        subtext: '',
	        x:'center'
	    },
	    color: ['#af2524','#de5f11','#69bd96'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['985院校','211院校','其他']
	    },
	    series : [
	        {
	            name: '985/211院校统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'985院校'},
	                {value:310, name:'211院校'},
	                {value:234, name:'其他'}
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart5.setOption(option);

}

echarts_pie5();


//简历入库量

function echarts_pie6(){

	// 基于准备好的dom，初始化echarts实例
    var myChart6 = echarts.init(document.getElementById('echarts-pie-chart6'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '简历入库量',
            subtext: ''
        },
        color: ['#2d7ce5'],
        tooltip: {},
        legend: {
            data:['简历入库量']
        },
        xAxis: {
        	type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {},
        series: [{
            name: '简历入库量',
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
    myChart6.setOption(option);

}

echarts_pie6();


//户口统计

function echarts_pie7(){

	// 基于准备好的dom，初始化echarts实例
    var myChart7 = echarts.init(document.getElementById('echarts-pie-chart7'));

    // 指定图表的配置项和数据
    option = {
	    title : {
	        text: '户口统计',
	        subtext: '',
	        x:'center'
	    },
	    color:['#af2524','#de5f11','#69bd96','#ef9a81','#58afda','#8ea760','#e8a66b','#dc9f94','#7f5ba5','#64718e','#5e7775','#79afd6','#1b86bb','#d26754','#706494','#3b729a','#a76f3d','#53711c','#c77777','#3d9c95','#46793d','#a95a81','#77962e','#44948e','#ce793c','#908278','#9c5f54','#597d16','#37718e','#b36161','#24714d','#c17c7b','#7a6792','#a59629','#5b91c1'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'right',
	        top: 'middle',
	        align: 'left',
	        itemWidth: 14,
	        data: ['北京','天津','上海','重庆','辽宁','黑龙江','吉林','河北','山西','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','广西壮族自治区','内蒙古自治区','西藏自治区','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区','其他']
	    },
	    series : [
	        {
	            name: '户口统计',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:500, name:'北京'},
	                {value:450, name:'天津'},
	                {value:500, name:'上海'},
	                {value:400, name:'重庆'},
	                {value:280, name:'辽宁'},
	                {value:320, name:'黑龙江'},
	                {value:260, name:'吉林'},
	                {value:280, name:'河北'},
	                {value:230, name:'山西'},
	                {value:390, name:'江苏'},
	                {value:400, name:'浙江'},
	                {value:320, name:'安徽'},
	                {value:260, name:'福建'},
	                {value:220, name:'江西'},
	                {value:380, name:'山东'},
	                {value:300, name:'河南'},
	                {value:260, name:'湖北'},
	                {value:200, name:'湖南'},
	                {value:350, name:'广东'},
	                {value:200, name:'海南'},
	                {value:300, name:'四川'},
	                {value:260, name:'贵州'},
	                {value:220, name:'云南'},
	                {value:240, name:'陕西'},
	                {value:200, name:'甘肃'},
	                {value:280, name:'青海'},
	                {value:350, name:'台湾'},
	                {value:210, name:'广西壮族自治区'},
	                {value:260, name:'内蒙古自治区'},
	                {value:160, name:'西藏自治区'},
	                {value:200, name:'宁夏回族自治区'},
	                {value:260, name:'新疆维吾尔自治区'},
	                {value:335, name:'香港特别行政区'},
	                {value:360, name:'澳门特别行政区'},
	                {value:100, name:'其他'}    
	                
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.2)'
	                }
	            }
	        }
	    ]

    
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option);

}

echarts_pie7();

















