Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{
        html:''
    },

    launch: function() {
        Rally.data.ModelFactory.getModel({
            type: 'Defect',
            success: function(model) {
                this.grid = this.add({
                    xtype: 'rallygrid',
                    model: model,
                    columnCfgs: [
                        'FormattedID',
                        'Name',
                        'Blocked',
                        'BlockedReason',
                        'Requirement'
                    ],
                    storeConfig: {
                        filters: [
                            {
                                property: 'Name',
                                operator: 'contains',
                                value: 'a'
                            },
                            {
                                property: 'Name',
                                operator: '!contains',
                                value: 'z'
                            }
                        ]
                    },
                    listeners: {
                        itemclick: function (grid, record, item, index) {
                            //process data
                            console.log(record.data);
                            console.log(item)
                            console.log(index)
                        }
                    }
                });
            },
            scope: this
        });
    }
});
