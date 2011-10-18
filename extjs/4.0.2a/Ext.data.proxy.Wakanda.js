Ext.define('Ext.data.proxy.Wakanda', {

    extend: 'Ext.data.proxy.Rest',

    alternateClassName: 'Ext.data.WakandaProxy',

    alias : 'proxy.wakanda',

    sortParam: '$orderby',

    filterParam: '$filter',

    startParam: '$skip',

    limitParam: '$top',

    reader: 'wakanda',

    writer: 'wakanda',

    actionMethods: {
        create : 'POST',
        read   : 'GET',
        update : 'POST',
        destroy: 'POST'
    },

    buildUrl: function(request) {
        var modelName = this.model.modelName,
            operation = request.operation,
            records = operation.records || [],
            record = records[0],
            id = record ? record.getId() : operation.id,
            url = '/rest/' + modelName;

        if (this.appendId && id) {
            url += '(' + id + ')';
        }

        request.url = url;

        // console.log("buildUrl", this, arguments, request.url);

        var action  = request.action;
        if (action !== 'read') {
            url = Ext.urlAppend(url, '&$method=' + action);   
        }

        if (this.noCache) {
            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", this.cacheString, Ext.Date.now()));
        }

        return url;
    },

    encodeSorters: function(sorters) {
        var min = [],
            length = sorters.length,
            i = 0, sort = '';

        for (; i < length; i++) {
            sort += sorters[i].property + ' ' + sorters[i].direction + ' ';
        }

        return sort;
    },

    encodeFilters: function(filters) {
        var min = [],
            length = filters.length,
            i = 0, filter = '';
        
        for (; i < length; i++) {
            filter += filters[i].property + ' eq @' + filters[i].value + '@ ';
        }
        return filter;
    }

});
