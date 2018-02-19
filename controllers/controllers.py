# -*- coding: utf-8 -*-
from odoo import http

# class Oevphdashboard(http.Controller):
#     @http.route('/oevphdashboard/oevphdashboard/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/oevphdashboard/oevphdashboard/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('oevphdashboard.listing', {
#             'root': '/oevphdashboard/oevphdashboard',
#             'objects': http.request.env['oevphdashboard.oevphdashboard'].search([]),
#         })

#     @http.route('/oevphdashboard/oevphdashboard/objects/<model("oevphdashboard.oevphdashboard"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('oevphdashboard.object', {
#             'object': obj
#         })