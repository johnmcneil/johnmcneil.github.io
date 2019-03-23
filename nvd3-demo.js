data = [
    {
        "label": "Russia",
        "value" : 77119
    }, {
    	"label": "India",
        "value": 42356
    }, {
        "label": "Spain",
       	"value": 36498
    }, {
    	"label": "Germany",
    	"value": 30813
    }, {
    	"label": "France",
    	"value": 30219
    }, {
    	"label": "Poland",
    	"value": 24107
    }, {
	"label": "Iran",	
        "value": 22984
    }, {
	"label": 'Italy',
	"value": 18001
	}, {
		"label": 'Ukraine',
		"value": 13843
	}, {
		"label": 'Czech Republic',
		"value": 13177
	}, {
		"label": 'Turkey',
		"value": 11623
	}, {
		"label": 'Greece',
		"value": 11482
	}, {
		"label": 'Brazil',
		"value": 10902
	}, {
		"label": 'Serbia',
		"value": 9744
	}, {
		"label": 'Romania',
		"value": 9464
	}, {
		"label": 'Hungary',
		"value": 8929
	}, {
		"label": 'USA',
		"value": 7731
	}, {
		"label": 'Norway',
		"value": 7457
	}, {
		"label": 'Argentina',
		"value": 7160
	}, {
		"label": 'England',
		"value": 6975
	}, {
		"label": 'Sweden',
		"value": 6887
	}, {
		"label": 'Croatia',
		"value": 6648
	}, {
		"label": 'Columbia',
		"value": 6592
	}, {
		"label": 'Austria',
		"value": 6548
	}, {
		"label": 'Slovakia',
		"value": 6369
	}, {
		"label": 'Venezuela',
		"value": 5723
	}, {
		"label": 'Sri Lanka',
		"value": 5425
	}, {
		"label": 'Kazakhstan',
		"value": 5413
	}, {
		"label": 'Israel',
		"value": 4895
	}, {
		"label": 'Netherlands',
		"value": 4887
	}, {
		"label": 'Portugal',
		"value": 4722
	}, {
		"label": 'Denmark',
		"value": 4606
	}, {
		"label": 'Belgium',
		"value": 4352
	}, {
		"label": 'Other',
		"value": 116612 
}];


nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)
      .labelThreshold(.05)
      .donut(true)
      .donutRatio(0.4);

    d3.select("#chart svg")
        .datum(data)
      .transition().duration(350)
        .call(chart);

  return chart;
});
