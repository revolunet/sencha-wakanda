Ext.define('Ext.grid.WakandaColumns', {
    mixins: {
        observable: 'Ext.util.Observable'
    },

    init: function(grid) {
        console.log("init", this, arguments, grid.columns);
        this.grid = grid;
        this.setGridColumns();
        // this.grid.on('reconfigure', this.onGridReconfigure, this);
    },

    setGridColumns: function() {
        console.log('setGridColumns', this, arguments);
        var columns = this.getColumns();
        this.grid.un('reconfigure', this.onGridReconfigure, this);
        this.grid.reconfigure(false, columns);
        this.grid.on('reconfigure', this.onGridReconfigure, this);
    },

    getColumns: function() {
        var store = this.grid.getStore(),
            proxy = store.getProxy(),
            reader = proxy.getReader(),
            fields = reader.getFields(),
            l = fields.length,
            columns = [],
            field;

        for (var i = 0; i < l; i++) {
            field = fields[i];
            if (field.type.type !== 'auto') {
                columns.push({
                    header:  field.name,
                    dataIndex: field.name,
                    // hidden: !!field.identifying,
                    field: !field.identifying ? {xtype: 'textfield'} : undefined
                });
            }
        }

        console.log("getColumns", fields, columns);

        return columns;
    },

    onGridReconfigure: function() {
        console.log("onGridReconfigure", this, arguments);
        this.setGridColumns();
    }

});
