# -*- coding: utf-8 -*-
from odoo import fields, models


class ProductProduct(models.Model):
    """
    To add fields to product template model.
    """
    _inherit = "product.product"

    product_owner_id = fields.Many2one(
        "res.partner", help="Product Owner id", string="Owner")
