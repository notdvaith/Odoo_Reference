/* @odoo-module */

import { registry } from "@web/core/registry"
import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart")
        onWillStart(() => loadJS("/web/static/lib/Chart/Chart.js"))
        onMounted(() => this.renderChart())
    }

    renderChart() {
        var colors = []
        var xValues = ["Italy", "France", "Spain", "USA", "Argentina"]
        var yValues = [55, 49, 44, 24, 15]
        for(let i=0; i < xValues.length; i++) {
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }
        new Chart(this.chartRef.el , {
            type: this.props.type,
            data: this.props.config.data,
            options: {
                title: {
                    display: true,
                    text: this.props.title,
                    position: "bottom",
                },
            },
        })
    }
}

ChartRenderer.template = "sales_dashboard.ChartRenderer"