console.log("Welcome to Data Land!");



d3.csv("201812-bluebikes-tripdata.csv", function(error, data) {
    console.log("csv:", data);
});
console.log("END OF LINE");