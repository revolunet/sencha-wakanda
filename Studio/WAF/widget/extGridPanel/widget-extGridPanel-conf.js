/*
Wakanda Software (the "Software") and the corresponding source code remain
the exclusive property of 4D and/or its licensors and are protected by national
and/or international legislations.
This file is part of the source code of the Software provided under the relevant
Wakanda License Agreement available on http://www.wakanda.org/license whose compliance
constitutes a prerequisite to any use of this file and more generally of the
Software and the corresponding source code.
*/

WAF.addWidget({
    type        : 'extGridPanel',
    lib         : 'WAF',
    description : 'Ext.grid.Panel',
    category    : 'ExtJs',
    tag         : 'div',
    attributes  : [
        {
            name : 'data-title',
            description: 'Grid title'
        },
        // {
        //     name : 'data-width',
        //     defaultValue: 600,
        //     description: 'width'
        // },
        // {
        //     name : 'data-height',
        //     defaultValue: 400,
        //     description: 'height'
        // },
        {
            name : 'data-binding',
            description: 'Source'
        },
        {
            name : 'data-groupField',
            description: 'Group rows by'
        },
        {
            name : 'data-paging',
            description: 'Show pager',
            type        : 'checkbox'
        },
        {
            name : 'data-pagesize',
            description: 'Rows per page (0=buffered)',
            defaultValue: 100,
            hidden: true

        },
        {
            name       : 'data-columns',
            description: 'Columns',
            type       : 'textarea'
        },
        {
            name        : 'data-column-attribute',
            description : 'Column index'
        },
        {
            name        : 'data-column-name',
            description : 'Column name'
        },
        {
            name        : 'data-column-width',
            description : 'Column width'
        },
        {
            name        : 'data-column',
            visibility  : 'hidden',
            defaultValue: '[]'
        },
        {
            name        : 'data-column-sortable',
            defaultValue: true,
            type: 'checkbox'
        },
        {
            name        : 'data-column-groupable',
            defaultValue: true,
            type: 'checkbox'
        }
    ],
    style: [
    {
        name        : 'width',
        defaultValue: '400px'
    },
    {
        name        : 'height',
        defaultValue: '200px'
    }],
    properties: {
        style: {
            theme       :  false,
            fClass      : false,
            text        : false,
            background  : false,
            border      : false,
            sizePosition: true,
            label       : false,
            shadow      : false,
            textShadow  : false,
            innerShadow : false,
            disabled    : ['z-index']
        }
    },
     events: [
    {
        name       : 'selectionchange',
        description: 'OnSelectionChange',
        category   : 'Grid Events'
    }
    ],
    columns: {
        attributes : [    
        {
            name       : 'sourceAttID'        
        },
        {
            name       : 'colID'        
        },
        {
            name       : 'format'        
        },
        {
            name       : 'width'        
        },
        {
            name       : 'title'
        }
        ],
        events: []
    },
    onInit: function (config) {
        


        // init wakanda models for ExtJs
        var modelList = createWakandaModels();
        var wakandaColumns = Ext.create('Ext.grid.WakandaColumns');

        var model = (config['data-binding'].charAt(0).toUpperCase() + config['data-binding'].slice(1));

        console.log(model);

        var storeConfig = {
            autoLoad: true,
            autoSync: true,
            model: model,
            remoteSort: true,
            remoteFilter: true,
            pageSize : (parseInt(config['data-pagesize']) || 100),
            buffered: (config['data-paging']=='false' )
            
        };
    
        if (config['data-groupField'] && config['data-groupField']!='') {
            storeConfig['groupField'] = config['data-groupField'];
        }

        var store = Ext.create('Ext.data.Store', storeConfig);

        var extConfig = {
            renderTo: config['id'],
            width: (config['data-width'] ? parseInt(config['data-width']) : 800),
            height: (config['data-height'] ? parseInt(config['data-height']) : 600),
            columns: [],
            store: store,
            features: [],
            forceFit: true,
            plugins: [wakandaColumns]
        };

 
        if (config['data-title'] && config['data-title']!='') {
            extConfig['title'] = config['data-title'];
        }

        if (config['data-groupField'] && config['data-groupField']!='') {
            var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
                hideGroupedHeader: true,
                groupHeaderTpl: 'Company: {name} ({rows.length} Employee{[values.rows.length > 1 ? "s" : ""]})'
            });
            extConfig['features'].push(groupingFeature);
        } 


        if (config['data-paging']=='true') {
            extConfig['bbar'] = Ext.create('Ext.PagingToolbar', {
                pageSize: parseInt(config['data-pagesize']) || 100,
                store: store,
                displayInfo: true
            });
        }
        else {
            extConfig.verticalScrollerType = 'paginggridscroller';
            store.guaranteeRange(0, 199);
        }
        
        var grid = new Ext.grid.Panel(extConfig);

        console.log("WAK CONFIG", config);
        console.log("EXT CONFIG", extConfig);
 
        config.renderId  = grid.getId();
        config.ext = grid;
        return new WAF.widget.extGridPanel(config);
    },

    onDesign: function (config, designer, tag, catalog, isResize) {

        // this is purely fake :) 
        // for demo purpose only :)

        var tgt = $('#' + tag.getAttribute('id').getValue());

        // build markep
        var html = '';
        if (config['data-title'] && config['data-title']!='') html += '<div>'+config['data-title']+'</div>';
        html += '<div></div>';
        html += '<div></div>';
        if (config['data-paging'] && config['data-paging']=='true') html += '<div></div>';

        tgt.html( html );
        
        // container style
        tgt.css('height', '100%').css('display', '-webkit-box').css('-webkit-box-orient', 'vertical');

        var rowIndex = 0;
        if (config['data-title'] && config['data-title']!='') {
            // header style
            tgt.children('div:eq(' + rowIndex + ')')
                .css('height', '27px')
                .css('background-image', '-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #dae7f6), color-stop(45%, #cddef3), color-stop(46%, #abc7ec), color-stop(50%, #abc7ec), color-stop(51%, #b8cfee), color-stop(100%, #cbddf3))')
                .css('color', '#04408C')
                .css('font-weight', 'bold')
                .css('padding', '7px');
            rowIndex += 1;
        }

        // columns
        tgt.children('div:eq(' + rowIndex + ')')
            .css('height', '24px')
            .css('background-image', 'url(../walib/WAF/widget/extGridPanel/images/columns.png)' );
        rowIndex += 1;

        // contents
        tgt.children('div:eq(' + rowIndex + ')')
            .css('-webkit-box-flex', '2')
            .css('background-image', 'url(../walib/WAF/widget/extGridPanel/images/extGridPanel.png)' );
        rowIndex += 1;

        if (config['data-paging'] && config['data-paging']=='true') {
            // pager
            tgt.children('div:eq(' + rowIndex + ')')
                .css('height', '28px')
                .css('background-image', 'url(../walib/WAF/widget/extGridPanel/images/paging.png)' );
            rowIndex += 1;
        }
    }
});
