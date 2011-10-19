Ext.define('Ext.data.WakandaModel', {

    extend: 'Ext.data.Model',

    idProperty: '__KEY',

    stampProperty: '__STAMP',

    defaultProxyType: 'wakanda',

    onClassExtended: function(cls, data) {
        var catalog = this.prototype.getCatalog(data.$className),
            attributes = catalog.attributes;
        for (var i = 0, l = attributes.length; i < l; i++) {
            if (attributes[i].name === 'ID') {
                attributes[i].persist = false;
            }
        }
        attributes.push({name: this.prototype.idProperty});
        attributes.push({name: this.prototype.stampProperty});
        data.fields = attributes;
        this.superclass.superclass.$onExtended.apply(this, arguments);
    },

    getCatalog: function(className) {
        var catalog;
        Ext.Ajax.request({
            async: false,
            url: 'http://' + window.location.host + '/rest/$catalog/' + className,
            success: function(response) {
                catalog = Ext.decode(response.responseText);
            }
        });
        return catalog;
    }

});
