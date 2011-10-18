Ext.apply(Ext.data.Types, {
    LONG: Ext.apply(Ext.apply({}, Ext.data.Types.INT), {type: 'long'})
});

var getWakandaClassCatalog = function(url) {
    var catalog;
    Ext.Ajax.request({
        async: false,
        url: url,
        success: function(response) {
            catalog = Ext.decode(response.responseText);
        }
    });
    return catalog;
};

var getWakandaModelsCatalog = function() {
    var catalog;
    Ext.Ajax.request({
        async: false,
        url: 'http://' + window.location.host + '/rest/$catalog',
        success: function(response) {
            catalog = Ext.decode(response.responseText);
        }
    });
    console.log("getWakandaModelsCatalog", catalog);
    return catalog;
};

var createWakandaModel = function(model) {

    var attributes = model.attributes;
    attributes.push({name: '__KEY'});
    attributes.push({name: '__STAMP'});
    
    Ext.define(model.name, {
        extend: 'Ext.data.Model',
        idProperty: '__KEY',
        proxy: {
            type: 'wakanda',
            reader: {
                type: 'json',
                idProperty: '__KEY',
                root: '__ENTITIES',
                totalProperty: '__COUNT'
            },
            writer: {
                type: 'json',
                writeAllFields: false,
                getRecordData: function(record) {
                    console.log("getRecordData", this, arguments);
                    var isPhantom = record.phantom === true,
                        writeAll = this.writeAllFields || isPhantom,
                        nameProperty = this.nameProperty,
                        fields = record.fields,
                        data = {},
                        changes,
                        name,
                        field,
                        key;

                    if (writeAll) {
                        fields.each(function(field){
                            if (field.persist) {
                                name = field[nameProperty] || field.name;
                                data[name] = record.get(field.name);
                            }
                        });
                    } else {

                        changes = record.getChanges();
                        for (key in changes) {
                            if (changes.hasOwnProperty(key)) {
                                field = fields.get(key);
                                name = field[nameProperty] || field.name;
                                data[name] = changes[key];
                            }
                        }
                        if (!isPhantom) {
                            data[record.idProperty] = record.getId();
                        }
                        data['__STAMP'] = record.get('__STAMP');
                    }
                    return {'__ENTITIES': [data]};
                }
            }
        },
        fields: model.attributes
    });
};

var createWakandaModels = function() {
    var catalog = getWakandaModelsCatalog(),
        classes = catalog.dataClasses,
        modelList = [];

    console.log("createWakandaModels", Ext.apply({}, catalog));
    for (index in classes) {
        catalog = getWakandaClassCatalog(classes[index].uri);
        createWakandaModel(catalog);
        modelList.push(catalog.name);
    }

    return modelList;
};
