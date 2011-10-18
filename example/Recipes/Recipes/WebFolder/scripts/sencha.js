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


    /**** ANIMATED CHARTS *****************************************************/

    Ext.regModel('cpuStats', {
        fields: [
            {name: 'pFree', mapping: 'vm_stat.pages_free'},
            {name: 'pActive', mapping: 'vm_stat.pages_active'},
            {name: 'pInactive', mapping: 'vm_stat.pages_inactive'},
            {name: 'pSpeculative', mapping: 'vm_stat.pages_speculative'},
            {name: 'pWiredDown', mapping: 'vm_stat.pages_wired_down'},
            {name: 'translationFaults', mapping: 'vm_stat.translation_faults'},
            {name: 'pCopyOnWrite', mapping: 'vm_stat.pages_copy_on_write'},
            {name: 'pZeroFilled', mapping: 'vm_stat.pages_zero_filled'},
            {name: 'pReactivated', mapping: 'vm_stat.pages_reactivated'},
            {name: 'pIns', mapping: 'vm_stat.pageins'},
            {name: 'pOuts', mapping: 'vm_stat.pageouts'},
            {name: 'ioCache', mapping: 'vm_stat.object_cache'},
            {name: 'ioUser', mapping: 'iostat.user'},
            {name: 'ioSystem', mapping: 'iostat.system'},
            {name: 'ioIdle', mapping: 'iostat.idle'},
            {name: 'ioOne', mapping: 'iostat.onem'},
            {name: 'ioFive', mapping: 'iostat.fivem'},
            {name: 'ioFifteen', mapping: 'iostat.fifteenm'}
        ],
        proxy: {
            type: 'rest',
            url: '/rest/Computer/cpuStats',
            reader: {
                type: 'json',
                root: 'result'
            }
        }
    });

    // window.chartStore = Ext.create('Ext.data.Store', {
    //     model: 'cpuStats',
    //     listeners: {
    //         load: function(store, records) {
    //             var data = [], r;
    //             for (var i = 0, l = records.length; i < l; i++) {
    //                 r = records[i];
    //                 // data.push({load: r.get('ioCache'), label: 'cache'});
    //                 data.push({load: r.get('ioIdle'), label: 'idle'});
    //                 data.push({load: r.get('ioUser'), label: 'user'});
    //                 data.push({load: r.get('ioSystem'), label: 'system'});
    //             }
    //             pieStore.loadData(data);
    //             // pieChart.redraw();
    //         }
    //     }
    // });

    window.pieStore = Ext.create('Ext.data.Store', {
        fields: [
            {name: 'load', type: 'number'},
            {name: 'label', type: 'string'}
        ],
        data: [
            {load: 40, label: 'Idle'},
            {load: 30, label: 'User'},
            {load: 10, label: 'System'}
        ]
    });

    window.pieChart = Ext.create('Ext.chart.Chart', {
        animate: true,
        store: pieStore,
        shadow: true,
        legend: {
            position: 'right'
        },
        insetPadding: 60,
        series: [{
            type: 'pie',
            field: 'load',
            showInLegend: true,
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'label',
                display: 'rotate',
                contrast: true,
                font: '18px Arial'
            }
        }]
    });

    Ext.create('Ext.Panel', {
        x: 540,
        y: 540,
        width: 500,
        height: 500,
        frame: true,
        layout: 'fit',
        floating: true,
        items: pieChart,
        title: 'Wakanda Charts',
        renderTo: document.body
    });

    // Ext.TaskManager.start({
    //     interval: 1000,
    //     run: function() {
    //         chartStore.load();
    //     }
    // });

});
