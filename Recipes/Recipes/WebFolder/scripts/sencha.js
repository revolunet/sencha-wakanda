var filterStore = function(field, value) {
    console.log("filterStore", this, arguments);
    if (value.length) {
        store.filters.clear();
        store.filter({property: 'lastName', value: value});
    } else {
        store.clearFilter(true);
    }
};

var handleGridSelectionChange = function(selectionModel, records) {
    console.log("handleGridSelectionChange", this, arguments);
    if (records.length) {
        dataView.select(records);
    }
};

Ext.onReady(function() {

    var modelList = createWakandaModels();


    /**** GROUPING GRID *****************************************************/

    window.store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Employee',
        groupField: 'companyName',
        remoteSort: true,
        remoteFilter: true
        // listeners: {
        //     datachanged: function() {
        //         console.log("datachanged", this, arguments);
        //     },
        //     write: function() {
        //         console.log("write", this, arguments);
        //     }
        // }
    });

    // window.combobox = Ext.create('Ext.form.ComboBox', {
    //     store: modelList,
    //     value: 'Employee',
    //     queryMode: 'local',
    //     listeners: {
    //         select: function(combo) {
    //             console.log("select", this, arguments);
    //             grid.reconfigure({
    //                 xtype: 'store',
    //                 autoLoad: true,
    //                 remoteSort: true,
    //                 remoteFilter: true,
    //                 model: combo.getValue()
    //             });
    //             pagingToolbar.bindStore(grid.getStore());
    //         }
    //     }
    // });

    window.filterToolbar = Ext.create('Ext.Toolbar', {
        items: ['Search:', {
            xtype: 'textfield',
            listeners: {
                change: {buffer: 500, fn: filterStore}
            }}
            // '->', 'Model', combobox
        ]
    });

    window.pagingToolbar = Ext.create('Ext.PagingToolbar', {
        pageSize: 10,
        store: store,
        displayInfo: true
    });

    var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
        hideGroupedHeader: true,
        groupHeaderTpl: 'Company: {name} ({rows.length} Employee{[values.rows.length > 1 ? "s" : ""]})'
    });

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');

    var wakandaColumns = Ext.create('Ext.grid.WakandaColumns');

    window.grid = Ext.create('Ext.grid.Panel', {
        columns: [],
        store: store,
        forceFit: true,
        features: [groupingFeature],
        plugins: [wakandaColumns, rowEditing],
        listeners: {
            selectionchange: handleGridSelectionChange
        }
    });

    Ext.create('Ext.Panel', {
        x: 20,
        y: 20,
        width: 500,
        height: 500,
        frame: true,
        items: grid,
        layout: 'fit',
        floating: true,
        title: 'Wakanda Grouping Grid',
        renderTo: document.body,
        tbar: filterToolbar,
        bbar: pagingToolbar
    });


    /**** DATA VIEW *****************************************************/

    window.dataView = Ext.create('Ext.view.View', {
        store: store,
        itemSelector: 'div.thumb-wrap',
        tpl: '<tpl for=".">'
            + '<div class="thumb-wrap">'
            + '<div style="width:100px;height:100px;background:url({picture}) no-repeat scroll center transparent;"></div>'
            + '<div style="font-size:0.8em;text-align:center">{firstName} {lastName}</div>'
            + '</div>'
            + '</tpl>'
            + '<div style="clear:both"></div>'
    });

    Ext.create('Ext.Panel', {
        x: 540,
        y: 20,
        width: 500,
        height: 500,
        frame: true,
        items: dataView,
        autoScroll: true,
        floating: true,
        title: 'Wakanda DataView',
        renderTo: document.body
    });


    /**** LIVE GRID *****************************************************/

    window.liveStore = Ext.create('Ext.data.Store', {
        pageSize: 200,
        model: 'Employee',
        remoteSort: true,
        buffered: true
    });

    var liveWakandaColumns = Ext.create('Ext.grid.WakandaColumns');

    Ext.create('Ext.grid.Panel', {
        x: 20,
        y: 540,
        width: 500,
        height: 500,
        frame: true,
        columns: [],
        store: liveStore,
        forceFit: true,
        title: 'Wakanda Live Grid',
        plugins: [liveWakandaColumns],
        verticalScrollerType: 'paginggridscroller',
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
        viewConfig: {trackOver: false},
        renderTo: document.body
    });

    liveStore.guaranteeRange(0, 199);

    Ext.create('Ext.Panel', {
        x: 540,
        y: 540,
        width: 500,
        height: 500,
        frame: true,
        autoScroll: true,
        floating: true,
        title: 'Wakanda Charts',
        renderTo: document.body
    });

});
