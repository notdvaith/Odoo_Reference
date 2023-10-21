# -*- coding: utf-8 -*-
{
    "name": "Website 07/10/23",
    "depends": ["website"],
    "version": "16.0.1.0.0",
    "author": "Demo",
    "data": [
        "data/website_menu_data.xml",
        "views/website_partner_template.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "website_session/static/src/js/**/*",
        ],
    },
    "installable": True,
    "application": True,
    "license": "LGPL-3",
}
