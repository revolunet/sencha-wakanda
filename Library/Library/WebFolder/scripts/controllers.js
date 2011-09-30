Ext.regController('books', {

    list: function(interaction) {
        var panel = interaction.panel,
            record = interaction.record,
            store = record.books(),
            list = new Ext.List({
                flex: 1,
                store: store,
                itemTpl: '{title}',
                listeners: {
                    selectionchange: function(list, records) {
                        if (!records.length) return;
                        var record = records[0];
                        info.update(record.data);
                    }
                }
            }),
            info = new Ext.Panel({
                flex: 1,
                scroll: 'vertical',
                styleHtmlContent: true,
                tpl: '<div>{title}</div>'
                    + '<div>{isbn}</div>'
                    + '<div>{editionDate}</div>'
                    + '<div>{description}</div>'
            }),
            card = {
                items: [list, info],
                layout: {type: 'vbox', align: 'stretch'}
            };

        card = panel.add(card);
        panel.setActiveItem(card);
        panel.dockedItems.first().items.first().show();
        list.select(0);
    }

});

Ext.regController('authors', {

    list: function(interaction) {
        var panel = interaction.panel;
        panel.setActiveItem(panel.items.first());
        panel.dockedItems.first().items.first().hide();
    }

});