# -*- coding: utf-8 -*-
{
    "name": "Product Owner POS",
    "version": "16.0.1.0",
    "author": "Demo",
    "category": "Website",
    "summary": "Add another field product owner in product page.",
    "description": """
    This module will add a field and product owner in product page and show 
    details of it in POS.
    """,
    "depends": ["base", "point_of_sale"],
    "data": [
        "views/product_product_views.xml",
    ],
    "assets": {
        'point_of_sale.assets': [
            'product_owner_pos/static/src/js/**/*',
            'product_owner_pos/static/src/xml/pos_screen.xml',
       ],
    },
    "installable": True,
    "application": True,
    "auto_install": False,
    "license": "LGPL-3",
}
