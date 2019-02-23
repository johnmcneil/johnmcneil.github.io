Highcharts.chart('container', {
	chart: {
		type: 'tilemap',
		height:'100%'
	},

	title: {
		text: 'hexagons!'
	},

	subtitle: {
		text: 'the shapes that brought you honey, food of the gods'
	},

	xAxis: {
		visible: false
	}, 

	yAxis: {
		visible: false
	},

	colorAxis: {
		dataClasses: [{
			from: 0,
			to: 10,
			color: "lightyellow"
		}, {
			from: 11,
			to: 20,
			color: 'yellow'
		}, {
			from: 21,
			to: 30,
			color: 'goldenrod'
		}, {
			from: 31,
			to: 40,
			color: 'orange'
		}, {
			from: 41,
			to: 50,
			color: 'red'
		}]
	},

	legend: {
		enabled: false
	},

	tooltip: {
		pointFormat: 'x: {point.x}<br />y: {point.y}'
	},

	plotOptions: {
		series: {
			dataLabels: {
				enabled: true,
				color: '#000000',
				format: '{point.x},{point.y}'
			},
			borderWidth: 1,
			borderColor: '#777'
		}
	},

	series: [{
		name: '',
		tileShape: 'hexagon',
		keys: ['x', 'y'],
		pointPadding: 2,
		data: [{
			x: 0,
			y: 0,
			value: 2
		}, {
			x: 0,
			y: 1,
			value: 4
		}, {
			x: 0,
			y: 2,
			value: 6
		}, {
			x: 0,
			y: 3,
			value: 8
		}, {
			x: 0,
			y: 4,
			value: 10
		}, {
			x: 1,
			y: 0,
			value: 12
		}, {
			x: 1,
			y: 1,
			value: 14
		}, {
			x: 1,
			y: 2,
			value: 16
		}, {
			x: 1,
			y: 3,
			value: 18
		}, {
			x: 1,
			y: 4,
			value: 20
		}, {
			x: 2,
			y: 0,
			value: 22
		}, {
			x: 2,
			y: 1,
			value: 24
		}, {
			x: 2,
			y: 2,
			value: 26
		}, {
			x: 2,
			y: 3,
			value: 28
		}, {
			x: 2,
			y: 4,
			value: 30
		}, {
			x: 3,
			y: 0,
			value: 32
		}, {
			x: 3,
			y: 1,
			value: 34
		}, {
			x: 3,
			y: 2,
			value: 36
		}, {
			x: 3,
			y: 3,
			value: 38
		}, {
			x: 3,
			y: 4,
			value: 40
		}, {
			x: 4,
			y: 0,
			value: 42
		}, {
			x: 4,
			y: 1,
			value: 44
		}, {
			x: 4,
			y: 2,
			value: 46
		}, {
			x: 4,
			y: 3,
			value: 48
		}, {
			x: 4,
			y: 4,
			value: 50
		}, 
	]}]
});