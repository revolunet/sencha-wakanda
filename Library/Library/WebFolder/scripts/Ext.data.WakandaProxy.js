Ext.data.WakandaProxy = Ext.extend(Ext.data.AjaxProxy, {

    appendId: true,

    actionMethods: {
        create : 'POST',
        read   : 'GET',
        update : 'PUT',
        destroy: 'DELETE'
    },
    
    api: {
        create : 'create',
        read   : 'read',
        update : 'update',
        destroy: 'destroy'
    },

    setReader: function(reader) {
        reader = {
            type: 'tree',
            root: '__ENTITIES',
            idProperty: '__KEY',
            totalProperty: '__COUNT'
        };
        return Ext.data.WakandaProxy.superclass.setReader.call(this, reader);
    },

    buildUrl: function(request) {
        var associations = this.model.prototype.associations,
            records = request.operation.records || [],
            modelName = this.model.modelName.toLowerCase(),
            url = '/rest/' + modelName + '?',
            record = records[0];

        if (this.appendId && record) {
            console.warn("RECORD", record);
            // request.url = url + '(' +request.operation.params.id+ ')/allEmployees?$expand=allEmployees';
        }

        associations.each(function(item, index) {
            if (item.expand) {
                url += '$expand=' + item.name;
            }
        });

        request.url = url;

        return Ext.data.WakandaProxy.superclass.buildUrl.apply(this, arguments);
    }
});

Ext.data.ProxyMgr.registerType('wakanda', Ext.data.WakandaProxy);