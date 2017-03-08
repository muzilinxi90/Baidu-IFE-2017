var myChart = echarts.init(document.getElementById('main'));
	
myChart.setOption({
	title: {
		text: '北京房价',
		subtext: '各区县均价与近些年走势'
	},

	legend: {
		data: ['2016年北京各区县房价', '近些年北京房价走势']
	},

	xAxis: [
		{
			name: '地区',
			nameLocation: 'end',
			offset: 15,
			axisTick: {
				show: false
			},
			data: ["东西城", "海淀", "朝阳", "石景山", "丰台", "昌平", "通州"]
		},

		{
			name: '年份',
			nameLocation: 'start',
			position: 'bottom',
			axisTick: {
				show: false
			},
			data: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]
		}
	],
		
	yAxis: {
		name: '人民币',
		position: 'right'
	},

	series: [
		{
			name: '2016年北京各区县房价',
			type: 'bar',
			xAxisIndex: 0,
			data: [76000, 63100, 52700, 38600, 42000, 28000, 32200]			
		},

		{
			name: '近些年北京房价走势',
			type: 'line',
			xAxisIndex: 1,
			data: [7877, 10964, 12303, 13901, 19717, 20983, 20525, 23169, 26679, 29550, 35218]
		}
	],

	tooltip: {

	},

	toolbox: {
		feature: {
			saveAsImage: {},
			restore: {},
			dataView: {}
		}
	}
});
