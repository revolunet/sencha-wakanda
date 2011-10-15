Ext.regModel('Book', {
    fields: [
        {name: 'isbn', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'editionDate', type: 'date'},
        {name: 'description', type: 'string'},
        {name: 'author', type: 'string', mapping: 'author.__deferred.__KEY'}
    ],
    proxy: {type: 'wakanda'}
});

Ext.regModel('Author', {
    idProperty: '__KEY',
    // extend: 'wakanda',
    // fields: []
    fields: [
        {name: '__KEY', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'booksCount', type: 'number'}
    ],
    proxy: {type: 'wakanda'},
    hasMany: {model: 'Book', name: 'books', expand: true, foreignKey: 'author'}
});
