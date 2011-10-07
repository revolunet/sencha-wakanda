


Ext.define('Ext.data.proxy.Wakanda', {
    extend: 'Ext.data.proxy.Ajax',
    alternateClassName: 'Ext.data.WakandaProxy',
    alias : 'proxy.wakanda',
    
    /**
     * @cfg {Boolean} appendId
     * True to automatically append the ID of a Model instance when performing a request based on that single instance.
     * See Rest proxy intro docs for more details. Defaults to true.
     */
    appendId: true,

    limitParam: '$top',
    startParam: '$skip',
    pageParam: undefined,
    sortParam: '$orderby',
    simpleSortMode: false,
    remoteSort: true,
    //directionParam: undefined,
    /**
     * @cfg {String} format
     * Optional data format to send to the server when making any request (e.g. 'json'). See the Rest proxy intro docs
     * for full details. Defaults to undefined.
     */
    
    /**
     * @cfg {Boolean} batchActions
     * True to batch actions of a particular type when synchronizing the store. Defaults to false.
     */
    batchActions: false,

    setReader: function(reader) {
        // console.log("setReader", this, arguments);
        reader = {
            type: 'json',
            root: '__ENTITIES',
            idProperty: '__KEY',
            totalProperty: '__COUNT'
        };
        return Ext.data.WakandaProxy.superclass.setReader.call(this, reader);
    },

    /**
     * Specialized version of buildUrl that incorporates the {@link #appendId} and {@link #format} options into the
     * generated url. Override this to provide further customizations, but remember to call the superclass buildUrl so
     * that additional parameters like the cache buster string are appended.
     * @param {Object} request
     */

    /**
     * Encodes the array of {@link Ext.util.Sorter} objects into a string to be sent in the request url. By default,
     * this simply JSON-encodes the sorter data
     * @param {Ext.util.Sorter[]} sorters The array of {@link Ext.util.Sorter Sorter} objects
     * @return {String} The encoded sorters
     */
    encodeSorters: function(sorters) {
        return sorters[0].property + ' ' + sorters[0].direction

    },


    buildUrl: function(request) {
        console.log("build url", this, arguments);
        // console.log("ASSO", this.model.associations, this.model.prototype.associations, this.model.prototype.associations.getCount());

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
                console.log("item", item, item.foreignKey);
                url += '$expand=' + item.name;
            }
            // item.foreignKey = modelName;
        });

        if (this.expandFields) {
            url += '$expand=' + this.expandFields.join(',')
        }

        request.url = url;
        // request.url = url;

        url = Ext.data.WakandaProxy.superclass.buildUrl.apply(this, arguments);

        return url;
    }
}, function() {
    Ext.apply(this.prototype, {
        /**
         * @property {Object} actionMethods
         * Mapping of action name to HTTP request method. These default to RESTful conventions for the 'create', 'read',
         * 'update' and 'destroy' actions (which map to 'POST', 'GET', 'PUT' and 'DELETE' respectively). This object
         * should not be changed except globally via {@link Ext#override Ext.override} - the {@link #getMethod} function
         * can be overridden instead.
         */
        actionMethods: {
            create : 'POST',
            read   : 'GET',
            update : 'PUT',
            destroy: 'DELETE'
        }
    });
});

//Ext.data.ProxyMgr.registerType('wakanda', Ext.data.WakandaProxy);