/** @odoo-module **/

const PosComponent = require('point_of_sale.PosComponent')
const ProductScreen = require('point_of_sale.ProductScreen')
const Registries = require('point_of_sale.Registries')
const { useListener } = require('@web/core/utils/hooks')

class SampleButton extends PosComponent {
    setup () {
        super.setup()
        useListener('click', this.sample_button_function)
    }
    sample_button_function () {
        console.log(this)
    }
}

SampleButton.template = "SampleButton"
ProductScreen.addControlButton({
    component: SampleButton,
    position: ['before', 'OrderlineCustomerNoteButton']
})

Registries.Component.add(SampleButton)
return SampleButton
