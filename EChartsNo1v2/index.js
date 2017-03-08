var myChart = echarts.init($('#main')[0]);
// 显示加载动画
myChart.showLoading();
$.get('data.json').done(function(data) {
	// 隐藏加载动画
	myChart.hideLoading();
	
	myChart.setOption({
		title: {
			text: '北京房价',
			subtext: '各区县均价与近些年走势'
		},

		legend: {
			data: [data.areaData.year + '年北京各区县房价', '近些年北京房价走势']
		},

		xAxis: [
			{
				name: '地区',
				nameLocation: 'end',
				offset: 15,
				axisTick: {
					show: false
				},
				data: data.areaData.area
			},

			{
				name: '年份',
				nameLocation: 'start',
				position: 'bottom',
				axisTick: {
					show: false
				},
				data: data.timeData.yearList
			}
		],
			
		yAxis: {
			name: '人民币',
			position: 'right'
		},

		series: [
			{
				name: data.areaData.year + '年北京各区县房价',
				type: 'bar',
				xAxisIndex: 0,
				data: data.areaData.price			
			},

			{
				name: '近些年北京房价走势',
				type: 'line',
				xAxisIndex: 1,
				data: data.timeData.price
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
});