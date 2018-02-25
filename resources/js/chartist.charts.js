// HELPER FUNCTIONS

var sum = function (a, b) {
    return a + b
};

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
        labelInterpolationFnc: function (value) {
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
        labelInterpolationFnc: function (value) {
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

// data formats

new Chartist.Bar('.data_formats', {
        labels: ['CSV', 'DOCX', 'HTML', 'JPG', 'JSON', 'PDF', 'PPT', 'RDF', 'RNG', 'RTF', 'SQL', 'TIFF', 'TXT', 'XLS', 'XML', 'YAML'],
        series: [
            [7, 4, 1, 3, 7, 7, 1, 2, 1, 1, 4, 5, 8, 4, 24, 1]
        ]
    },
    {
        seriesBarDistance: 10,
        axisX: {
            onlyInteger: true
        },
        axisY: {
            onlyInteger: true
        }
    });

// dev per project

new Chartist.Pie('.dev_project', {
    labels: ['1', '2', '3', '4', '5'],
    series: [18, 13, 4, 1, 1]
},{
    labelOffset: 35
});

// transfer plan

var transfer_plan_data = {
    series: [11, 26]
};

new Chartist.Pie('.transfer_plan', transfer_plan_data,
    {
        labelInterpolationFnc: function (value) {
            var labels = {11: 'Ja', 26: 'Nein'};
            return round((value / transfer_plan_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
        }
    });

// test workflows

new Chartist.Bar('.test_workflows', {
        labels: ['Keine formalen Tests', 'Entwickler', 'User', 'Test Engineers'],
        series: [
            [6, 30, 23, 4]
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

// software quality

new Chartist.Bar('.software_quality', {
        labels: ['Schlecht', 'Eher schlecht', 'Mittel', 'Gut', 'Sehr gut'],
        series: [
            [3, 16, 25, 1, 0]
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

// software status

new Chartist.Bar('.software_status', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [2, 19, 17, 5, 2]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
            onlyInteger: true
        }
    });

// software/dev prestige

new Chartist.Bar('.software_prestige', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [6, 9, 14, 13, 5]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
           onlyInteger: true
        }
    });

// contribution to research result

var contribution_research_result_data = {
    series: [21, 7]
};

new Chartist.Pie('.contribution_research_result', contribution_research_result_data,
    {
        labelInterpolationFnc: function (value) {
            var labels = {21: 'Ja', 7: 'Nein'};
            return round((value / contribution_research_result_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
        }
    });

// name in publication

var name_in_publication_data = {
    series: [20, 8]
};

new Chartist.Pie('.name_in_publication', name_in_publication_data,
    {
        labelInterpolationFnc: function (value) {
            var labels = {20: 'Ja', 8: 'Nein'};
            return round((value / name_in_publication_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
        }
    });

// conference presentation

var conference_presentation_data = {
    series: [26, 11]
};

new Chartist.Pie('.conference_presentation', conference_presentation_data,
    {
        labelInterpolationFnc: function (value) {
            var labels = {26: 'Ja', 11: 'Nein'};
            return round((value / conference_presentation_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
        }
    });

// doi for software

var doi_for_software_data = {
    series: [8, 29]
};

new Chartist.Pie('.doi_for_software', doi_for_software_data,
    {
        labelInterpolationFnc: function (value) {
            var labels = {8: 'Ja', 29: 'Nein'};
            return round((value / doi_for_software_data.series.reduce(sum) * 100), 1) + '% - ' + labels[value];
        }
    });

// job satisfaction

new Chartist.Bar('.job_satisfaction', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [0, 3, 12, 20, 10]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
           onlyInteger: true
        }
    });

// career satisfaction

new Chartist.Bar('.career_satisfaction', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [1, 6, 11, 21, 6]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
           onlyInteger: true
        }
    });

// probability of promotion

new Chartist.Bar('.probability_promotion', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [17, 7, 15, 6, 0]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
           onlyInteger: true
        }
    });

// competence to market value

new Chartist.Bar('.market_value', {
        labels: ['Gering', 'Eher gering', 'Mittel', 'Hoch', 'Sehr hoch'],
        series: [
            [2, 5, 11, 15, 12]
        ]
    },
    {
        seriesBarDistance: 10,
        axisY: {
           onlyInteger: true
        }
    });