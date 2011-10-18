Ext.define('Ext.data.WakandaModel', {

    extend: 'Ext.data.Model',

    idProperty: '__KEY',

    defaultProxyType: 'wakanda',

    onClassExtended: function(cls, data) {
        var catalog = this.prototype.getCatalog(data.$className),
            attributes = catalog.attributes;
        attributes.push({name: this.superclass.proxy.reader.idProperty});
        attributes.push({name: this.superclass.proxy.reader.stampProperty});
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
