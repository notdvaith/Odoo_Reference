/** @odoo-module **/
"use strict";

var { Orderline } = require('point_of_sale.models');
const Registries = require('point_of_sale.Registries');

const ReceiptOrder = (Orderline) => class ReceiptOrder extends Orderline {
    /**
    * Extends the Order line class to customize receipt behavior.
    */
     export_for_printing() {
        /**
        * To send data to receipt page.
        */
        var line = super.export_for_printing(...arguments);
        line.product_owner_id = this.get_product().product_owner_id
        return line
    }
}

Registries.Model.extend(Orderline, ReceiptOrder)
