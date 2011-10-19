Ext.define('Ext.data.writer.Wakanda', {

    extend: 'Ext.data.writer.Json',

    alternateClassName: 'Ext.data.WakandaWriter',

    alias: 'writer.wakanda',

    writeAllFields: false,

    getRecordData: function(record) {
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
            // console.log("getRecordData1", this, arguments);
            fields.each(function(field){
                if (field.persist) {
                    name = field[nameProperty] || field.name;
                    data[name] = record.get(field.name);
                } else {
                    
                }
            });
        } else {
            changes = record.getChanges();
            // console.log("getRecordData2", this, arguments, changes);
            for (key in changes) {
                if (changes.hasOwnProperty(key)) {
                    field = fields.get(key);
                    name = field[nameProperty] || field.name;
                    data[name] = changes[key];
                }
            }
            if (!isPhantom) {
                data[record.idProperty] = record.getId();
                data[record.stampProperty] = record.get(record.stampProperty);
            }
        }
        return {'__ENTITIES': [data]};
    }

});