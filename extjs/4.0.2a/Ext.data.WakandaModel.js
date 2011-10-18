Ext.define('Ext.data.WakandaModel', {

    extend: 'Ext.data.Model',

    idProperty: '__KEY',

    proxy: {
        type: 'wakanda',
        reader: {
            type: 'json',
            idProperty: '__KEY',
            root: '__ENTITIES',
            totalProperty: '__COUNT'
        }
    },

    onClassExtended: function(cls, data) {
        console.log("onClassExtended", this, arguments);
        console.log("fields", this.prototype.fields, this.superclass.superclass.fields);
        var catalog = this.prototype.getCatalog(data.$className);
        console.log("catalog", catalog);
        data.fields = catalog.attributes;
        this.superclass.superclass.$onExtended.apply(this, arguments);
    },

    getCatalog: function(className) {
        console.log('getCatalog', this, arguments);
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
