odoo.oepvhdashboard = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        template: "HomePage",
        start: function () {
            return $.when(
                new local.PetToysList(this).appendTo(this.$('.oe_petstore_homepage_left')),
                new local.MessageOfTheDay(this).appendTo(this.$('.oe_petstore_homepage_right'))
            );
        }
    });
    instance.web.client_actions.add('petstore.homepage', 'instance.oepvhdashboard.HomePage');

    local.MessageOfTheDay = instance.Widget.extend({
        template: 'MessageOfTheDay',
        start: function () {
            var self = this;
            return new instance.web.Model('oepvhdashboard.message_of_the_day')
                .query(["message"])
                .order_by('-create_date', '-id')
                .first()
                .then(function (result) {
                    self.$(".oe_mywidget_message_of_the_day").text(result.message);
                });
        }
    });

    local.PetToysList = instance.Widget.extend({
        template: 'PetToysList',
        start: function () {
            var self = this;
            return new instance.web.Model('product.product')
                .query(['name', 'image'])
                .filter([['categ_id.name', '=', "Pet Toys"]])
                .limit(5)
                .all()
                .then(function (results) {
                    _(results).each(function (item) {
                        self.$el.append(QWeb.render('PetToy', {item: item}));
                    });
                });
        }
    });
}