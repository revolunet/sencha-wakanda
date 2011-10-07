
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.grid.PagingScroller'
]);

Ext.onReady(function() {
    Ext.define('Employees', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'ID', type: 'int'},
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'salary', type: 'int'},
            {name: 'worksFor', type: 'string', mapping:'worksFor.name'},
        ]
      ,  idProperty: 'ID'
    });

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        pageSize: 200,
        model: 'Employees',
        remoteSort: true,
        // allow the grid to interact with the paging scroller by buffering
        buffered: true,
        proxy: {
            // load using script tags for cross domain, if the data in on the same domain as
            // this page, an HttpProxy would be better
            type: 'wakanda',
            expandFields: ['worksFor'],
           // url: 'data.json',
            //http://www.sencha.com/forum/remote_topics/index.php',
            //extraParams: {
               // total: 50000
            //},
            // reader: {
            //     type: 'json',
            //     root: 'topics',
            //     totalProperty: 'totalCount'
            // },
            // sends single sort as multi parameter
        },
        sorters: [{
            property: 'ID',
            direction: 'DESC'
        }]
    });

    // function renderTopic(value, p, record) {
    //     return Ext.String.format(
    //         '<a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a>',
    //         value,
    //         record.data.forumtitle,
    //         record.getId(),
    //         record.data.forumid
    //     );
    // }



    var grid = Ext.create('Ext.ux.LiveSearchGridPanel', {
        width: 'auto',
        height: 600,
        title: 'Wakanda proxy demo',
        store: store,
        verticalScrollerType: 'paginggridscroller',
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns:[{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },{
            text: 'ID',
            width: 50,
            dataIndex: 'ID',
            sortable: true
        },{
            text: "Company",
            dataIndex: 'worksFor',
            align: 'center',
            width: 200,
            sortable: true,
            renderer: function(val) {return val.toUpperCase();}
        },{
            // id assigned so we can apply custom css (e.g. .x-grid-cell-topic b { color:#333 })
            // TODO: This poses an issue in subclasses of Grid now because Headers are now Components
            // therefore the id will be registered in the ComponentManager and conflict. Need a way to
            // add additional CSS classes to the rendered cells.
            id: 'firstName',
            text: "firstName",
            dataIndex: 'firstName',
            flex: 1,
            //renderer: renderTopic,
            sortable: true
        },{
            text: "lastName",
            dataIndex: 'lastName',
            width: 100,
            hidden: false,
            sortable: true
        },{
            text: "Salary",
            dataIndex: 'salary',
            align: 'center',
            width: 70,
            sortable: true
        }
        // ,{
        //     id: 'last',
        //     text: "Last Post",
        //     dataIndex: 'lastpost',
        //     width: 130,
        //     renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
        //     sortable: true
        // }
        ],
        renderTo: Ext.getBody()
    });


    // trigger the data store load
    store.guaranteeRange(0, 49);
 //   store.load();

});
