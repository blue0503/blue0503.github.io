//<polygon points="325,25 400,90 250,90" style="fill:pink;stroke:pink;stroke-width:5" />
//<rect x="250" y="90" width="150" height="100" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
//<rect x="300" y="140" width="50" height="50" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(32,32,244)" />
//<circle cx="280" cy="115" r="10" stroke="purple" stroke-width="3" fill="purple" />
//<circle cx="370" cy="115" r="10" stroke="purple" stroke-width="3" fill="purple" />

var svgctrl = d3.select('svg');
var cx = 325;

var c1 = svgctrl.append('polygon');
c1.attr('points', '400,90 325,25 250,90').attr('fill', 'pink').attr('stroke', 'pink').attr('stroke-width', 5);
var c2 = svgctrl.append('rect');
c2.attr('x', cx - 75).attr('y', 90).attr('width', 150).attr('height', 100).attr('fill', 'blue').attr('stroke', 'pink').attr('stroke-width', 5).attr('fill-opacity', 0.1).attr('stroke-opacity', 0.9);
var c3 = svgctrl.append('rect');
c3.attr('x', cx - 25).attr('y', 140).attr('width', 50).attr('height', 50).attr('fill', 'rgb(0,0,255)').attr('stroke-width', 3).attr('stroke', 'gb(32, 32, 244)');
var c4 = svgctrl.append('circle');
c4.attr('cx', cx - 45).attr('cy', 115).attr('r', 10).attr('stroke', 'purple').attr('stroke-width', 3).attr('fill', 'purple');
var c5 = svgctrl.append('circle');
c5.attr('cx', cx + 45).attr('cy', 115).attr('r', 10).attr('stroke', 'purple').attr('stroke-width', 3).attr('fill', 'purple');


var btn_click = document.getElementById("move");
var box = document.querySelector(".col-xl-12");
var a = 0;
btn_click.onclick = function() {
    a = a + 50;
    box.style.left = a + 'px';
}