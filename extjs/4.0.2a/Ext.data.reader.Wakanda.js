Ext.define('Ext.data.reader.Wakanda', {

    extend: 'Ext.data.reader.Json',

    alternateClassName: 'Ext.data.WakandaReader',

    alias : 'reader.wakanda',

    root: '__ENTITIES',

    totalProperty: '__COUNT',

    getData: function(data) {
        if (Ext.isObject(data) && !data[this.root]) {
            data = [data];
        }
        return data;
    }

});
