/************************************************************/
/************************************************************/
/************************************************************/


Ext.onReady(function() {

    Ext.define('Employee', {
        extend: 'Ext.data.WakandaModel'
    });

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model: 'Employee'
    });
    
    store.on('load', function() {
        console.log("range", store.getRange(), store.getRange()[0].get('lastName'), store.getRange()[0].getId());
    });

});