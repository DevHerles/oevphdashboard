# -*- coding: utf-8 -*-

from openerp import api, fields, models

class MessageOfTheDay(models.Model):
    _name = "oevphdashboard.message_of_the_day"

    @api.model
    def my_method(self):
        return {"hello": "world"}

    message = fields.Text()
    color = fields.Char(size=20)
