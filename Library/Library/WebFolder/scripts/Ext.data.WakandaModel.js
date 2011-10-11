Ext.ns('Ext.data');

Ext.data.WakandaModel = Ext.extend(Ext.data.Model, {

    idProperty: '__KEY',

    fields: [
        {name: '__KEY', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'booksCount', type: 'number'}
    ],

    proxy: {type: 'wakanda'},

    hasMany: {model: 'Book', name: 'books', expand: true, foreignKey: 'author'}

    // constructor: function() {
    //     
    //     Ext.data.WakandaModel.superclass.constructor.apply(this, arguments);
    // 
    // }

});

// Ext.regModel('wakanda', Ext.data.WakandaModel);

Ext.ModelMgr.types['wakanda']  = Ext.data.WakandaModel;

// Ext.ModelMgr.registerType('wakanda', {
//     fields: [
//         {name: '__KEY', type: 'string'},
//         {name: 'name', type: 'string'},
//         {name: 'booksCount', type: 'number'}
//     ],
//     idProperty: '__KEY',
//     proxy: {type: 'wakanda'},
//     hasMany: {model: 'Book', name: 'books', expand: true, foreignKey: 'author'},
//     constructor: function(data, id) {
//         return Ext.data.Model.superclass.constructor.apply(this, arguments);
//         // data = data || {};
//         // 
//         // 
//         // this.internalId = (id || id === 0) ? id : Ext.data.Model.id(this);
//         // 
//         // Ext.data.Model.superclass.constructor.apply(this);
//         // 
//         // 
//         // var fields = this.fields.items,
//         //     length = fields.length,
//         //     field, name, i;
//         // 
//         // for (i = 0; i < length; i++) {
//         //     field = fields[i];
//         //     name  = field.name;
//         //     
//         //     if (data[name] == undefined) {
//         //         data[name] = field.defaultValue;
//         //     }
//         // }
//         // 
//         // this.set(data);
//         // this.dirty = false;
//         // 
//         // if (this.getId()) {
//         //     this.phantom = false;
//         // }
//         // 
//         // if (typeof this.init == 'function') {
//         //     this.init();
//         // }
//     }
// });