/** @odoo-module **/
import { registry } from "@web/core/registry"
const { Component, useState } = owl

class Increment extends Component{
    //constructor first function
    setup(){
//        this.value = 0
        this.state = useState({
            value: 0
        })
    }
    onValueChange(val){
        this.state.value += val
    }
}
Increment.template = "Increment";
const Systray = {
    Component: Increment,
//    isDisplayed: (env) => true,
}
registry.category("systray").add("increment", Systray)