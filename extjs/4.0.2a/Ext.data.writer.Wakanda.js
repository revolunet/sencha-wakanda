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

});
