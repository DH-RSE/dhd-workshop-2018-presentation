// HELPER FUNCTIONS

var sum = function(a, b) { return a + b };

function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

// CHARTS

// dev in worktime

var worktime_dev_data = {
	series: [28, 17]
};

new Chartist.Pie('.worktime_dev', worktime_dev_data,
{
	labelInterpolationFnc: function(value) {
		var labels = {28: 'Ja', 17: 'Nein'};
		return round((value / worktime_dev_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
	}
});

// dev in sparetime

var sparetime_dev_data = {
	series: [21, 23]
};

new Chartist.Pie('.sparetime_dev', sparetime_dev_data,
{
	labelInterpolationFnc: function(value) {
		var labels = {21: 'Ja', 23: 'Nein'};
		return round((value / sparetime_dev_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
	}
});

// programming languages

new Chartist.Bar('.programming_languages', {
	labels: ['Bash', 'C#', 'C++', 'Go', 'Groovy', 'Java', 'JavaScript', 'Lua', 'Perl', 'PHP', 'Python', 'R', 'Ruby', 'Rust', 'Scala', 'SQL', 'TypeScript', 'VB.NET', 'VBA', 'Visual Basic', 'XProc', 'XQuery', 'XSLT'],
	series: [
		[1, 1, 3, 1, 1, 9, 22, 1, 3, 13, 16, 3, 2, 1, 1, 10, 2, 1, 1, 1, 2, 12, 18]
	]
},
{
	seriesBarDistance: 10,
	horizontalBars: true,
	axisX: {
		onlyInteger: true
	},
	axisY: {
		offset: 100,
	}
});

// programming languages and age

new Chartist.Bar('.programming_languages_age', {
	labels: ['Bash', 'C#', 'C++', 'Go', 'Groovy', 'Java', 'JavaScript', 'Lua', 'Perl', 'PHP', 'Python', 'R', 'Ruby', 'Rust', 'Scala', 'SQL', 'TypeScript', 'VB.NET', 'VBA', 'Visual Basic', 'XProc', 'XQuery', 'XSLT'],
	series: [
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1], // 18-24
		[0, 0, 1, 3, 0, 3, 8, 1, 0, 5, 5, 1, 0, 1, 0, 2, 1, 0, 0, 0, 0, 4, 7], // 25-34
		[1, 1, 2, 1, 1, 5, 12, 0, 1, 7, 9, 2, 2, 0, 1, 6, 0, 0, 0, 0, 1, 6, 9], // 35-44
		[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], // 45-54
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0], // 55-64
	]
},
{
	seriesBarDistance: 10,
	horizontalBars: true,
	stackBars: true,
	axisX: {
		onlyInteger: true
	},
	axisY: {
		offset: 100,
	}
});
