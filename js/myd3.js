//<polygon points="325,25 400,90 250,90" style="fill:pink;stroke:pink;stroke-width:5" />
//<rect x="250" y="90" width="150" height="100" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
//<rect x="300" y="140" width="50" height="50" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(32,32,244)" />
//<circle cx="280" cy="115" r="10" stroke="purple" stroke-width="3" fill="purple" />
//<circle cx="370" cy="115" r="10" stroke="purple" stroke-width="3" fill="purple" />

var svgctrl = d3.select('svg');
var cx = 325;

var c1 = svgctrl.append('polygon');
c1.attr('x1', cx).attr('y1', 25).attr('x2', cx + 75).attr('y2', 90).attr('x3', cx - 75).attr('y3', 90).attr('fill', 'pink').attr('stroke', 'pink').attr('stroke-width', 5);

var c2 = svgctrl.append('rect');
c1.attr('x', 250).attr('cy1', 90).attr('cx3', cx - 75).attr('cy3', 90).attr('fill', 'pink').attr('stroke', 'pink').attr('stroke-width', 5);