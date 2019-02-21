console.log("Welcome to Data Land!");



d3.csv("code/stationsbyyear.csv", function(error, data) {
    data.forEach(function(d) {
        d.export = parseFloat(d.export);
    });
    console.log("csv:", data);
});



console.log("END OF LINE");