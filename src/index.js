import { SVG } from '@svgdotjs/svg.js'

const mainSVG = SVG('#layer1')

mainSVG.each(function (i, children) {
  const color = this.css('fill')
  this.mouseover(() => {
    this.css({ fill: '#f06', stroke: '#000', 'stroke-width': 1, 'stroke-opacity': 1 })
  })
  this.mouseout(() => {
    this.css({ fill: color, 'stroke-opacity': 0 })
  })
})
