Ext.define('Ext.data.reader.Wakanda', {

    extend: 'Ext.data.reader.Json',

    alternateClassName: 'Ext.data.WakandaReader',

    alias : 'reader.wakanda',

    idProperty: '__KEY',

    stampProperty: '__STAMP',

    root: '__ENTITIES',

    totalProperty: '__COUNT',

    getData: function(data) {
        if (Ext.isObject(data) && !data[this.root]) {
            data = [data];
        }
        return data;
    }

});
