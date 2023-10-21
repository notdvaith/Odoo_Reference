# -*- coding: utf-8 -*-
from odoo.http import Controller, request, route


class Partner(Controller):
    """
    Class for our website session controller
    """
    @route("/partner", auth="public", website=True)
    def partner(self):
        """
        To render create partner page
        """
        country_ids = request.env['res.country'].search([])
        vals = {'country_ids': country_ids}
        return request.render('website_session.website_partner_template', vals)

    @route("/create/partner", auth="public", website=True)
    def create_partner(self, **kw):
        """
        To create partner
        """
        # partner_id = request.env['res.partner'].sudo().create({
        #     'name': kw['name'],
        #     'email': kw['email'],
        #     'phone': kw['phone'],
        #     'street': kw['street'],
        #     'country_id': kw['country_ids']
        # })
        partners = request.env['res.partner'].sudo().search(
            [],
            limit=4,
            order="create_date DESC")
        return request.render(
            'website_session.website_partner_success_template',
            {"partner_id": partners[0],
             "partners": partners})

    @route('''/view/partner/<model("res.partner"):partner>''',
           auth="public", website=True)
    def view_partner(self, partner):
        """
        To view single partner page
        """
        print(partner)
        return request.render('website_session.website_partner_one',
                              {partner: partner})
