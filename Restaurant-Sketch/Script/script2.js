//Making the graph for page 2, i took some inspiration from https://observablehq.com/@d3/gallery/ 

// adding the data that will be shown in the graph
const data = [

    { name: 'Ribs on Barbecue', score: 680 },
    { name: 'French Fries', score: 312 },
    { name: 'Garlic Bread', score: 350 },
    { name: 'Spaghetti Carbonara', score: 307 },
    { name: 'Classic Lasagna', score: 135 },
    { name: 'Fettucine Alfredo', score: 415 }
]
//measures of the graph
const width = 1200;
const height = 500;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

//creating the svg block in the html doc
const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0, 0, width, height]);
// making the dinamic scale on x and y
const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([height - margin.bottom, margin.top]);
    
//making the bars and adding all the attributes i needed
svg
    .append('g')
    .attr('fill', 'darkgreen')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.score))
    .attr('height', d => y(0) - y(d.score))
    .attr('width', x.bandwidth())
    .attr('class','rectangle');

//this will show the x Axis, and print its names as well, also modified the font size to make it more visible
function xAxis(g) {
    g.attr('transform', `translate(0, ${height - margin.bottom})`)
     .call(d3.axisBottom(x).tickFormat(i => data[i].name))
     .attr('font-size','20px')

}

//same thing but for the Y axis now
function yAxis(g) {
    g.attr('transform', `translate(0, ${margin.left, 0})`)
    .call(d3.axisLeft(y).ticks(null,data.format))
    .attr('font-size','20px')

}
svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();


