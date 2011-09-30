Ext.regController('books', {

    list: function(interaction) {
        var panel = interaction.panel,
            record = interaction.record,
            store = record.books(),
            list = new Ext.List({
                store: store,
                itemTpl: '{title}'
            });
        
        list = panel.add(list);
        panel.setActiveItem(list);
        panel.dockedItems.first().items.first().show();
    }

});

Ext.regController('authors', {

    list: function(interaction) {
        var panel = interaction.panel;
        panel.setActiveItem(panel.items.first());
        panel.dockedItems.first().items.first().hide();
    }

});