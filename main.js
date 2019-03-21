;(function() {

    var map;
  
    function Map(topology) {
  
      // Convert the topojson to geojson
      var geojson = topojson.feature(topology, topology.objects.towns),
  
      // Since we're using projected TopoJSON, we use a null projection here.
          path = d3.geoPath().projection(null),
  
          svg = d3.select("#map")
              .append("svg")
              .attr('width', 615)
              .attr('height', 375),
  
          g = svg.append("g").attr("class", "g-town"),
  
          // Add town paths
          town = g.selectAll("path.town").data(geojson.features)
                    .enter().append("path")
                      .attr("class", "town")
                      .attr('d', path)
                      .style('stroke', "white");
   
   
                    }
  
  
    d3.json("ma-towns.topojson", function(err, topology) {
      map = new Map(topology);
    });
  
  }());
  
 