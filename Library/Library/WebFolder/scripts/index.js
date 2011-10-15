﻿Ext.setup({    onReady: function() {        var chartStore = new Ext.data.Store({            fields: ['author', 'count']        });        var store = new Ext.data.Store({            model: 'Author',            autoLoad: true,            listeners: {                load: function(store) {                    var author, data = [];                    store.each(function(record) {                        author = record.get('name').split(' ');                        author = author.splice(1, author.length);                        data.push({                            author: author.join(' '),                            count: record.booksStore.getCount()                        });                    });                    chartStore.loadData(data);                }            }        });        var list = new Ext.List({            store: store,            itemTpl: '{name}',            listeners: {                itemtap: function(list, index) {                    var record = list.store.getAt(index);                    Ext.dispatch({                        action: 'list',                        record: record,                        controller: 'books',                        panel: list.ownerCt.ownerCt,                        historyUrl: 'author/' + record.getId()                    });                }            }        });        var chart = new Ext.chart.Panel({            title: 'Books count',            items: {                store: chartStore,                insetPadding: 20,                series: [{                    type: 'column',                    label: {field: 'count'},                    xField: 'author',                    yField: 'count'                }],                axes: [{                    type: 'Numeric',                    position: 'left',                    fields: ['count'],                    minimum: 0,                    maximum: 10                }, {                    type: 'Category',                    position: 'bottom',                    fields: ['author']                }]            }        });        var toolbar = new Ext.Toolbar({            dock: 'top',            title: 'Library',            items: [{                ui: 'back',                text: 'back',                hidden: true,                handler: function() {                    Ext.dispatch({                        action: 'list',                        controller: 'authors',                        historyUrl: 'authors',                        panel: this.ownerCt.ownerCt                    });                }            }]        });        var panel = new Ext.Panel({            layout: 'card',            fullscreen: Ext.is.Desktop ? undefined : true,            width: Ext.is.Desktop ? 320 : undefined,            height: Ext.is.Desktop ? 480 : undefined,            centered: Ext.is.Desktop ? true : undefined,            floating: Ext.is.Desktop ? true : undefined,            hideOnMaskTap: Ext.is.Desktop ? false : undefined,            dockedItems: toolbar,            items: {                layout: {                    type: 'vbox',                    align: 'stretch'                },                defaults: {flex: 1},                items: [list, chart]            }        });        panel.show();    }});