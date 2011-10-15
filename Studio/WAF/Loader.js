/*
Wakanda Software (the "Software") and the corresponding source code remain
the exclusive property of 4D and/or its licensors and are protected by national
and/or international legislations.
This file is part of the source code of the Software provided under the relevant
Wakanda License Agreement available on http://www.wakanda.org/license whose compliance
constitutes a prerequisite to any use of this file and more generally of the
Software and the corresponding source code.
*/

/**
 * 
 * @module WAF
 */

/**
 * WAF
 *
 * @class WAF
 */
if (typeof(WAF) === 'undefined') {
    WAF = {

        /**
         * The version of the framework
         *
         * @static
         * @property VERSION
         * @type String
         **/
        'VERSION': 'Developer Preview',

        /**
         * The build number of the framework
         *
         * @static
         * @property BUILD
         * @type String
         **/
        'BUILD'  : '94737',

        /**
         * The configuration of the framework
         *
         * @static
         * @property config
         * @type Object
         **/
        config: {
            openAjax   : null,
            debugMode  : false,
            uniTest    : false,
            load       : '',
            rpc: {
                namespace: '',
                module   : '',
                methods  : ''
            },
            baseURL    : '',
            tld        : null,
            taglib     : [],
            widget     : {}
        },

        /**
         * modulesInfo
         *
         * @static
         * @property modulesInfo
         * @type Object
         **/
        modulesInfo  : {
            'allmodules' : {
                css : [
                /* WAF */
                '+/lib/jquery-ui/themes/base/jquery.ui.core.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.resizable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.selectable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.accordion.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.autocomplete.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.button.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.dialog.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.slider.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.tabs.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.datepicker.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.progressbar.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.theme.css',				   
                '+/lib/selectbox/jquery-selectbox.css',
                /* WAF WIDGET */
                '+/widget/css/widget.css',
                '+/widget/skin/default/css/widget-skin-default.css',
                '+/widget/skin/metal/css/widget-skin-metal.css',
                '+/widget/skin/light/css/widget-skin-light.css',
                '+/widget/skin/orange/css/widget-skin-orange.css',
                '+/widget/skin/blue/css/widget-skin-blue.css',
                /* WAF GRID */
                '+/widget/dataGrid/css/widget-dataGrid.css',
                '+/widget/dataGrid/skin/default/css/widget-dataGrid-skin-default.css',
                '+/widget/dataGrid/skin/metal/css/widget-dataGrid-skin-metal.css',
                '+/widget/dataGrid/skin/light/css/widget-dataGrid-skin-light.css',
                '+/widget/dataGrid/skin/orange/css/widget-dataGrid-skin-orange.css',
                '+/widget/dataGrid/skin/blue/css/widget-dataGrid-skin-blue.css',
                /* WAF AUTOFORM */
                '+/widget/autoForm/css/widget-autoForm.css',
                '+/widget/autoForm/skin/metal/css/widget-autoForm-skin-metal.css',
                '+/widget/autoForm/skin/roundy/css/widget-autoForm-skin-roundy.css',
                '+/widget/autoForm/skin/orange/css/widget-autoForm-skin-orange.css',
                '+/widget/autoForm/skin/blue/css/widget-autoForm-skin-blue.css',
                /* WAF QUERYFORM */
                '+/widget/queryForm/css/widget-queryForm.css',
                '+/widget/queryForm/skin/metal/css/widget-queryForm-skin-metal.css',
                '+/widget/queryForm/skin/roundy/css/widget-queryForm-skin-roundy.css',
                '+/widget/queryForm/skin/orange/css/widget-queryForm-skin-orange.css',
                '+/widget/queryForm/skin/blue/css/widget-queryForm-skin-blue.css',
                /* WAF CONTAINER */
                '+/widget/container/css/widget-container.css',
                '+/widget/container/skin/default/css/widget-container-skin-default.css',
                '+/widget/container/skin/metal/css/widget-container-skin-metal.css',
                '+/widget/container/skin/light/css/widget-container-skin-light.css',
                '+/widget/container/skin/orange/css/widget-container-skin-orange.css',
                '+/widget/container/skin/blue/css/widget-container-skin-blue.css',
                /* WAF MATRIX */
                '+/widget/matrix/css/widget-matrix.css',
                '+/widget/matrix/skin/metal/css/widget-matrix-skin-metal.css',
                '+/widget/matrix/skin/orange/css/widget-matrix-skin-orange.css',
                '+/widget/matrix/skin/blue/css/widget-matrix-skin-blue.css',
                /* WAF IMAGE */
                '+/widget/image/css/widget-image.css',
                /* WAF TEXTFIELD */
                '+/widget/textField/css/widget-textField.css',
                '+/widget/textField/skin/default/css/widget-textField-skin-default.css',
                '+/widget/textField/skin/metal/css/widget-textField-skin-metal.css',
                '+/widget/textField/skin/light/css/widget-textField-skin-light.css',
                '+/widget/textField/skin/orange/css/widget-textField-skin-orange.css',
                '+/widget/textField/skin/blue/css/widget-textField-skin-blue.css',
                /* WAF BUTTON */
                '+/widget/button/css/widget-button.css',
                '+/widget/button/skin/default/css/widget-button-skin-default.css',
                '+/widget/button/skin/metal/css/widget-button-skin-metal.css',
                '+/widget/button/skin/light/css/widget-button-skin-light.css',
                '+/widget/button/skin/orange/css/widget-button-skin-orange.css',
                '+/widget/button/skin/blue/css/widget-button-skin-blue.css',
                '+/widget/button/skin/image/css/widget-button-skin-image.css',
                /* WAF RICHTEXT */
                '+/widget/richText/css/widget-richText.css',
                /* WAF SLIDER */
                '+/widget/slider/css/widget-slider.css',
                '+/widget/slider/skin/default/css/widget-slider-skin-default.css',
                '+/widget/slider/skin/metal/css/widget-slider-skin-metal.css',
                '+/widget/slider/skin/orange/css/widget-slider-skin-orange.css',
                '+/widget/slider/skin/blue/css/widget-slider-skin-blue.css',
                /* WAF PROGRESS BAR */
                '+/widget/progressBar/css/widget-progressBar.css',
                '+/widget/progressBar/skin/default/css/widget-progressBar-skin-default.css',
                '+/widget/progressBar/skin/metal/css/widget-progressBar-skin-metal.css',
                '+/widget/progressBar/skin/roundy/css/widget-progressBar-skin-roundy.css',
                '+/widget/progressBar/skin/orange/css/widget-progressBar-skin-orange.css',
                '+/widget/progressBar/skin/blue/css/widget-progressBar-skin-blue.css',
                /* WAF YAHOO WEATHER */
                '+/widget/yahooWeather/css/widget-yahooWeather.css',
                /* WAF Dropdown */
                '+/widget/dropdown/css/widget-dropdown.css',
                '+/widget/dropdown/skin/metal/css/widget-dropdown-skin-metal.css',
                '+/widget/dropdown/skin/roundy/css/widget-dropdown-skin-roundy.css',
                '+/widget/dropdown/skin/orange/css/widget-dropdown-skin-orange.css',
                '+/widget/dropdown/skin/blue/css/widget-dropdown-skin-blue.css',
                /* WAF Combobox */
                '+/widget/combobox/css/widget-combobox.css',
                '+/widget/combobox/skin/default/css/widget-combobox-skin-default.css',
                '+/widget/combobox/skin/metal/css/widget-combobox-skin-metal.css',
                '+/widget/combobox/skin/orange/css/widget-combobox-skin-orange.css',
                '+/widget/combobox/skin/blue/css/widget-combobox-skin-blue.css',
                /* WAF Radio */
                '+/widget/radio/css/widget-radio.css',
                /* WAF Radio Group */
                '+/widget/radiogroup/css/widget-radiogroup.css',
                '+/widget/radiogroup/skin/default/css/widget-radiogroup-skin-default.css',
                /* WAF Label */
                '+/widget/label/css/widget-label.css',             
                /* WAF checkbox */
                '+/widget/checkbox/css/widget-checkbox.css',
                '+/widget/checkbox/skin/default/css/widget-checkbox-skin-default.css',
                '+/widget/checkbox/skin/metal/css/widget-checkbox-skin-metal.css',
                /* WAF menubar */
                '+/widget/menubar/css/widget-menubar.css',
                '+/widget/menubar/skin/default/css/widget-menubar-skin-default.css',
                '+/widget/menubar/skin/metal/css/widget-menubar-skin-metal.css',
                '+/widget/menubar/skin/light/css/widget-menubar-skin-light.css',
                /* WAF menuitem */
                '+/widget/menuitem/css/widget-menuitem.css',
                '+/widget/menuitem/skin/default/css/widget-menuitem-skin-default.css',
                '+/widget/menuitem/skin/metal/css/widget-menuitem-skin-metal.css',
                '+/widget/menuitem/skin/light/css/widget-menuitem-skin-light.css',    
                /* WAF Component */
                '+/widget/component/css/widget-component.css',
                '+/widget/component/skin/default/css/widget-component-skin-default.css',
                '+/widget/component/skin/metal/css/widget-component-skin-metal.css',
                '+/widget/component/skin/light/css/widget-component-skin-light.css',
                '+/widget/component/skin/orange/css/widget-component-skin-orange.css',
                '+/widget/component/skin/blue/css/widget-component-skin-blue.css',         
                /* WAF Chart */
                '+/widget/chart/css/widget-chart.css',

                 '+/lib/ext-4.0.2a/resources/css/ext-all.css',
                
                /* PUT LINKS TO CSS FOR YOUR CUSTOM WIDGETS HERE */
                
                ],
                require: [
                /* WAF */
                '+/Core/Native/Events.js',
                '+/Core/Native/Stacks.js',
                '+/Core/Native/Rest.js',
                '+/Core/Utils/Timers.js',
                '+/Core/Utils/DebugTools.js',
                '+/Core/Utils/Environment.js',
                '+/Core/Utils/Strings.js',
                '+/Core/Utils/Dates.js',
                '+/DataProvider/Data-Provider.js',
                '+/DataSource/Data-Source.js',
                '+/Dom/Dom.js',
                '+/rpc/Rpc.js',
                '+/Tags/taglib.js',
                '+/Tags/tags.js',

                /* jQuery */
                '+/lib/jquery/jquery.min.js',
                '+/lib/jquery-ui/jquery-ui.min.js',
                '+/lib/jquery-ui/jquery-ui-i18n.js',
                
                /* jQuery svg*/
                '+/lib/jquery.svg/jquery.svg.min.js',
                
                /* External Librairy */
                '+/lib/raphael/raphael-min.js',
                '+/lib/selectbox/jquery-selectbox.js',
                '+/lib/combobox/jquery-combobox.js',
                
                '+/lib/ext-4.0.2a/ext-all-debug.js',

                '+/revolunet/Ext.data.proxy.Wakanda.js',
                '+/revolunet/Ext.grid.WakandaColumns.js',
                '+/revolunet/wakanda.js',
                

                /* Tag Library Descritors */
                '+/Tags/list/tags-list.js',
                '+/Tags/list/descriptor/tags-list-descriptor.js',
                '+/Tags/list/propertydescriptor/tags-list-propertydescriptor.js',
                '+/Tags/list/column/tags-list-column.js',
                '+/Tags/descriptor/tags-descriptor.js',
                '+/Tags/descriptor/attribute/tags-descriptor-attribute.js',
                '+/Tags/descriptor/event/tags-descriptor-event.js',
                '+/Tags/descriptor/structure/tags-descriptor-structure.js',
                '+/Tags/descriptor/style/tags-descriptor-style.js',
                '+/Tags/descriptor/property/tags-descriptor-property-style.js',
                '+/Tags/descriptor/column/tags-descriptor-column.js',
                '+/Tags/descriptor/column/attribute/tags-descriptor-attributecolumn.js',
                
                /* widgets */
                '+/widget/widget.js',                
                '+/Component/Component.js',                
                '+/widget/icon/widget-icon.js',
                '+/widget/icon/widget-icon-conf.js',
                '+/widget/button/widget-button.js',
                '+/widget/button/widget-button-conf.js',
                '+/widget/checkbox/widget-checkbox.js',
                '+/widget/checkbox/widget-checkbox-conf.js',
                '+/widget/container/widget-container.js',
                '+/widget/container/widget-container-conf.js',
                '+/widget/richText/widget-richText.js',
                '+/widget/richText/widget-richText-conf.js',
                '+/widget/errorDiv/widget-errorDiv.js',
                '+/widget/errorDiv/widget-errorDiv-conf.js',
                '+/widget/dataGrid/widget-dataGrid.js',
                '+/widget/dataGrid/widget-dataGrid-conf.js',
                '+/widget/autoForm/widget-autoForm.js',
                '+/widget/autoForm/widget-autoForm-conf.js',
                '+/widget/queryForm/widget-queryForm.js',
                '+/widget/queryForm/widget-queryForm-conf.js',
                '+/widget/image/widget-image.js',
                '+/widget/image/widget-image-conf.js',
                '+/widget/label/widget-label.js',
                '+/widget/label/widget-label-conf.js',
                '+/widget/list/widget-list.js',
                '+/widget/list/widget-list-conf.js',
                '+/widget/slider/widget-slider.js',
                '+/widget/slider/widget-slider-conf.js',
                '+/widget/textField/widget-textField.js',
                '+/widget/textField/widget-textField-conf.js',				
                '+/widget/googleMap/widget-googleMap.js',
                '+/widget/googleMap/widget-googleMap-conf.js',                
                '+/widget/googleChart/widget-googleChart.js',
                '+/widget/googleChart/widget-googleChart-conf.js',								
                '+/widget/yahooWeather/widget-yahooWeather.js',
                '+/widget/yahooWeather/widget-yahooWeather-conf.js',				
                '+/widget/progressBar/widget-progressBar.js',
                '+/widget/progressBar/widget-progressBar-conf.js',                
                '+/widget/matrix/widget-matrix.js',
                '+/widget/matrix/widget-matrix-conf.js',
                '+/widget/toolbar/widget-toolbar.js',
                '+/widget/dropdown/widget-dropdown.js',
                '+/widget/dropdown/widget-dropdown-conf.js',
                '+/widget/combobox/widget-combobox.js',
                '+/widget/combobox/widget-combobox-conf.js',
                '+/widget/radio/widget-radio.js',
                '+/widget/radio/widget-radio-conf.js',
                '+/widget/radiogroup/widget-radiogroup.js',
                '+/widget/radiogroup/widget-radiogroup-conf.js',
                '+/widget/menubar/widget-menubar.js',
                '+/widget/menubar/widget-menubar-conf.js',
                '+/widget/menuitem/widget-menuitem.js',
                '+/widget/menuitem/widget-menuitem-conf.js',
                '+/widget/component/widget-component-conf.js',
                '+/widget/chart/scripts/chart-core.js',
                '+/widget/chart/scripts/pie-chart.js',
                '+/widget/chart/widget-chart-conf.js',
                '+/widget/chart/widget-chart.js',
                

        
                /* PUT LINKS TO JS FOR YOUR CUSTOM WIDGETS HERE */
                
                '+/revolunet/extGridPanel/widget-extGridPanel.js',
                '+/revolunet/extGridPanel/widget-extGridPanel-conf.js'
                

                ]
            },
            
            'mobile' : {
                css : [
                /* WAF */
                '+/lib/jquery-ui/themes/base/jquery.ui.core.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.resizable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.selectable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.accordion.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.autocomplete.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.button.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.dialog.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.slider.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.tabs.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.datepicker.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.progressbar.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.theme.css',				   
                '+/lib/selectbox/jquery-selectbox.css',
                /* WAF WIDGET */
                '+/widget/css/widget-mobile.css',
                '+/widget/skin/default/css/widget-skin-default.css',
                '+/widget/skin/metal/css/widget-skin-metal.css',
                '+/widget/skin/light/css/widget-skin-light.css',
                '+/widget/skin/orange/css/widget-skin-orange.css',
                '+/widget/skin/blue/css/widget-skin-blue.css',
                /* WAF GRID */
                '+/widget/dataGrid/css/widget-dataGrid-mobile.css',
                '+/widget/dataGrid/skin/default/css/widget-dataGrid-skin-default.css',
                '+/widget/dataGrid/skin/metal/css/widget-dataGrid-skin-metal.css',
                '+/widget/dataGrid/skin/light/css/widget-dataGrid-skin-light.css',
                '+/widget/dataGrid/skin/orange/css/widget-dataGrid-skin-orange.css',
                '+/widget/dataGrid/skin/blue/css/widget-dataGrid-skin-blue.css',
                /* WAF AUTOFORM */
                '+/widget/autoForm/css/widget-autoForm.css',
                '+/widget/autoForm/skin/metal/css/widget-autoForm-skin-metal.css',
                '+/widget/autoForm/skin/light/css/widget-autoForm-skin-light.css',
                '+/widget/autoForm/skin/roundy/css/widget-autoForm-skin-roundy.css',
                '+/widget/autoForm/skin/orange/css/widget-autoForm-skin-orange.css',
                '+/widget/autoForm/skin/blue/css/widget-autoForm-skin-blue.css',
                /* WAF QUERYFORM */
                '+/widget/queryForm/css/widget-queryForm.css',
                '+/widget/queryForm/skin/metal/css/widget-queryForm-skin-metal.css',
                '+/widget/queryForm/skin/light/css/widget-queryForm-skin-light.css',
                '+/widget/queryForm/skin/roundy/css/widget-queryForm-skin-roundy.css',
                '+/widget/queryForm/skin/orange/css/widget-queryForm-skin-orange.css',
                '+/widget/queryForm/skin/blue/css/widget-queryForm-skin-blue.css',
                /* WAF CONTAINER */
                '+/widget/container/css/widget-container.css',
                '+/widget/container/skin/default/css/widget-container-skin-default.css',
                '+/widget/container/skin/metal/css/widget-container-skin-metal.css',
                '+/widget/container/skin/light/css/widget-container-skin-light.css',
                '+/widget/container/skin/orange/css/widget-container-skin-orange.css',
                '+/widget/container/skin/blue/css/widget-container-skin-blue.css',
                /* WAF MATRIX */
                '+/widget/matrix/css/widget-matrix.css',
                '+/widget/matrix/skin/orange/css/widget-matrix-skin-orange.css',
                '+/widget/matrix/skin/blue/css/widget-matrix-skin-blue.css',
                '+/widget/matrix/skin/metal/css/widget-matrix-skin-metal-mobile.css',
                /* WAF IMAGE */
                '+/widget/image/css/widget-image.css',
                /* WAF TEXTFIELD */
                '+/widget/textField/css/widget-textField.css',
                '+/widget/textField/skin/default/css/widget-textField-skin-default.css',
                '+/widget/textField/skin/metal/css/widget-textField-skin-metal.css',
                '+/widget/textField/skin/orange/css/widget-textField-skin-orange.css',
                '+/widget/textField/skin/blue/css/widget-textField-skin-blue.css',
                /* WAF BUTTON */
                '+/widget/button/css/widget-button.css',
                '+/widget/button/skin/default/css/widget-button-skin-default.css',
                '+/widget/button/skin/metal/css/widget-button-skin-metal.css',
                '+/widget/button/skin/light/css/widget-button-skin-light.css',
                '+/widget/button/skin/orange/css/widget-button-skin-orange.css',
                '+/widget/button/skin/blue/css/widget-button-skin-blue.css',
                '+/widget/button/skin/image/css/widget-button-skin-image.css',
                /* WAF RICHTEXT */
                '+/widget/richText/css/widget-richText.css',
                /* WAF SLIDER */
                '+/widget/slider/css/widget-slider-mobile.css',
                '+/widget/slider/skin/default/css/widget-slider-skin-default.css',
                '+/widget/slider/skin/metal/css/widget-slider-skin-metal.css',
                '+/widget/slider/skin/light/css/widget-slider-skin-light.css',
                '+/widget/slider/skin/orange/css/widget-slider-skin-orange.css',
                '+/widget/slider/skin/blue/css/widget-slider-skin-blue.css',
                /* WAF PROGRESS BAR */
                '+/widget/progressBar/css/widget-progressBar.css',
                '+/widget/progressBar/skin/default/css/widget-progressBar-skin-default.css',
                '+/widget/progressBar/skin/metal/css/widget-progressBar-skin-metal.css',
                '+/widget/progressBar/skin/light/css/widget-progressBar-skin-light.css',
                '+/widget/progressBar/skin/roundy/css/widget-progressBar-skin-roundy.css',
                '+/widget/progressBar/skin/orange/css/widget-progressBar-skin-orange.css',
                '+/widget/progressBar/skin/blue/css/widget-progressBar-skin-blue.css',
                /* WAF YAHOO WEATHER */
                '+/widget/yahooWeather/css/widget-yahooWeather.css',
                /* WAF Dropdown */
                '+/widget/dropdown/css/widget-dropdown.css',
                '+/widget/dropdown/skin/metal/css/widget-dropdown-skin-metal.css',
                '+/widget/dropdown/skin/roundy/css/widget-dropdown-skin-roundy.css',
                '+/widget/dropdown/skin/orange/css/widget-dropdown-skin-orange.css',
                '+/widget/dropdown/skin/blue/css/widget-dropdown-skin-blue.css',
                /* WAF Combobox */
                '+/widget/combobox/css/widget-combobox.css',
                '+/widget/combobox/skin/default/css/widget-combobox-skin-default.css',
                '+/widget/combobox/skin/metal/css/widget-combobox-skin-metal.css',
                '+/widget/combobox/skin/orange/css/widget-combobox-skin-orange.css',
                '+/widget/combobox/skin/blue/css/widget-combobox-skin-blue.css',
                /* WAF Radio */
                '+/widget/radio/css/widget-radio.css',
                /* WAF Radio Group */
                '+/widget/radiogroup/css/widget-radiogroup.css',
                '+/widget/radiogroup/skin/default/css/widget-radiogroup-skin-default.css',
                /* WAF Label */
                '+/widget/label/css/widget-label.css',
                /* WAF checkbox */
                '+/widget/checkbox/css/widget-checkbox.css',
                '+/widget/checkbox/skin/default/css/widget-checkbox-skin-default.css',
                '+/widget/checkbox/skin/metal/css/widget-checkbox-skin-metal.css',
                /* WAF menubar */
                '+/widget/menubar/css/widget-menubar.css',
                '+/widget/menubar/skin/default/css/widget-menubar-skin-default.css',
                '+/widget/menubar/skin/metal/css/widget-menubar-skin-metal.css',
                '+/widget/menubar/skin/light/css/widget-menubar-skin-light.css',
                /* WAF menuitem */
                '+/widget/menuitem/css/widget-menuitem.css',
                '+/widget/menuitem/skin/default/css/widget-menuitem-skin-default.css',
                '+/widget/menuitem/skin/metal/css/widget-menuitem-skin-metal.css',
                '+/widget/menuitem/skin/light/css/widget-menuitem-skin-light.css',
                /* WAF Component */
                '+/widget/component/css/widget-component.css',
                '+/widget/component/skin/default/css/widget-component-skin-default.css',
                '+/widget/component/skin/metal/css/widget-component-skin-metal.css',
                '+/widget/component/skin/light/css/widget-component-skin-light.css',
                '+/widget/component/skin/orange/css/widget-component-skin-orange.css',
                '+/widget/component/skin/blue/css/widget-component-skin-blue.css',         
                /* WAF Chart */
                '+/widget/chart/css/widget-chart.css',
                ],
                require: [
                /* WAF */
                '+/Core/Native/Events.js',
                '+/Core/Native/Stacks.js',
                '+/Core/Native/Rest.js',
                '+/Core/Utils/Timers.js',
                '+/Core/Utils/DebugTools.js',
                '+/Core/Utils/Environment.js',
                '+/Core/Utils/Strings.js',
                '+/Core/Utils/Dates.js',
                '+/DataProvider/Data-Provider.js',
                '+/DataSource/Data-Source.js',
                '+/Dom/Dom.js',
                '+/rpc/Rpc.js',
                '+/Tags/taglib.js',
                '+/Tags/tags.js',

                /* jQuery */
                '+/lib/jquery/jquery.min.js',
                '+/lib/jquery-ui/jquery-ui.min.js',
                '+/lib/jquery-ui/jquery-ui-i18n.js',
                
                /* External Librairy */
                '+/lib/raphael/raphael-min.js',
                '+/lib/selectbox/jquery-selectbox.js',
                '+/lib/combobox/jquery-combobox.js',
                
                /* Tag Library Descritors */
                '+/Tags/list/tags-list.js',
                '+/Tags/list/descriptor/tags-list-descriptor.js',
                '+/Tags/list/propertydescriptor/tags-list-propertydescriptor.js',
                '+/Tags/list/column/tags-list-column.js',
                '+/Tags/descriptor/tags-descriptor.js',
                '+/Tags/descriptor/attribute/tags-descriptor-attribute.js',
                '+/Tags/descriptor/event/tags-descriptor-event.js',
                '+/Tags/descriptor/structure/tags-descriptor-structure.js',
                '+/Tags/descriptor/style/tags-descriptor-style.js',
                '+/Tags/descriptor/property/tags-descriptor-property-style.js',
                '+/Tags/descriptor/column/tags-descriptor-column.js',
                '+/Tags/descriptor/column/attribute/tags-descriptor-attributecolumn.js',
                
                /* widgets */
                '+/widget/widget.js',
                
                '+/widget/icon/widget-icon.js',
                '+/widget/icon/widget-icon-conf.js',
                '+/widget/button/widget-button.js',
                '+/widget/button/widget-button-conf.js',
                '+/widget/checkbox/widget-checkbox.js',
                '+/widget/checkbox/widget-checkbox-conf.js',
                '+/widget/container/widget-container.js',
                '+/widget/container/widget-container-conf.js',
                '+/widget/richText/widget-richText.js',
                '+/widget/richText/widget-richText-conf.js',
                '+/widget/errorDiv/widget-errorDiv.js',
                '+/widget/errorDiv/widget-errorDiv-conf.js',
                '+/widget/dataGrid/widget-dataGrid-mobile.js',
                '+/widget/dataGrid/widget-dataGrid-conf.js',
                '+/widget/autoForm/widget-autoForm.js',
                '+/widget/autoForm/widget-autoForm-conf.js',
                '+/widget/queryForm/widget-queryForm.js',
                '+/widget/queryForm/widget-queryForm-conf.js',
                '+/widget/image/widget-image.js',
                '+/widget/image/widget-image-conf.js',
                '+/widget/label/widget-label.js',
                '+/widget/label/widget-label-conf.js',
                '+/widget/list/widget-list.js',
                '+/widget/list/widget-list-conf.js',
                '+/widget/slider/widget-slider-mobile.js',
                '+/widget/slider/widget-slider-conf.js',
                '+/widget/textField/widget-textField.js',
                '+/widget/textField/widget-textField-conf.js',				
                '+/widget/googleMap/widget-googleMap.js',
                '+/widget/googleMap/widget-googleMap-conf.js',                
                '+/widget/googleChart/widget-googleChart.js',
                '+/widget/googleChart/widget-googleChart-conf.js',								
                '+/widget/yahooWeather/widget-yahooWeather.js',
                '+/widget/yahooWeather/widget-yahooWeather-conf.js',				
                '+/widget/progressBar/widget-progressBar.js',
                '+/widget/progressBar/widget-progressBar-conf.js',                
                '+/widget/matrix/widget-matrix-mobile.js',
                '+/widget/matrix/widget-matrix-conf.js',
                '+/widget/toolbar/widget-toolbar.js',
                '+/widget/dropdown/widget-dropdown.js',
                '+/widget/dropdown/widget-dropdown-conf.js',
                '+/widget/combobox/widget-combobox.js',
                '+/widget/combobox/widget-combobox-conf.js',
                '+/widget/radio/widget-radio.js',
                '+/widget/radio/widget-radio-conf.js',
                '+/widget/radiogroup/widget-radiogroup.js',
                '+/widget/radiogroup/widget-radiogroup-conf.js',
                '+/widget/menubar/widget-menubar.js',
                '+/widget/menubar/widget-menubar-conf.js',
                '+/widget/menuitem/widget-menuitem.js',
                '+/widget/menuitem/widget-menuitem-conf.js',
                '+/widget/chart/scripts/chart-core.js',
                '+/widget/chart/scripts/pie-chart.js',
                '+/widget/chart/widget-chart-conf.js',
                '+/widget/chart/widget-chart.js',
                
                /* mobile */ 
                '+/lib/mobile/iscroll/iscroll-lite.js',
                '+/lib/mobile/jquery.ui.ipad.altfix.js'
                
                ]
            }
        },

        /**
         * The constants of the framework
         *
         * @static
         * @property constants
         * @type Object
         **/
        constants: {},

        /**
         * The classes of the framework
         *
         * @static
         * @property classes
         * @type Object
         **/
        classes  : {},

        /**
         * utils
         *
         * @static
         * @property utils
         * @type Object
         **/
        utils: {
            debug: {
                console: {
                    log: function (string) { }
                }
            }
        },

        /**
         * core
         *
         * @static
         * @property core
         * @type Object
         **/
        core: {},

        /**
         * dataStore
         *
         * @static
         * @property core
         * @type WAF.dataProviderFactory|Null
         **/
        ds: null,

        /**
         * _private
         *
         * @static
         * @private
         * @property _private
         * @type Object
         **/
        _private: {
            globals: {
                modulesToLoad: {}
            },
            functions: {},
            handlers: {}
        },

        /**
         * grids
         *
         * @static
         * @property grids
         * @type Object
         **/
        grids: {},

        /**
         * widgets
         *
         * @static
         * @property widgets
         * @type Object
         **/
        widgets: {},
        
        /**
         * component namespace
         *
         * @static
         * @property components
         * @type Object
         **/
        component : {
        },
        
        /**
         * components definition
         *
         * @static
         * @property components
         * @type Object
         **/
        components : {
        },

        /**
         * widget
         *
         * @static
         * @property widget
         * @type Object
         **/
        widget: {
            themes      : {
                inherited   : {
                    key     : 'inherited',
                    value   : 'Inherited'
                },
                'default'   : {
                    key     : 'default',
                    value   : 'Default'
                },
                orange      : {
                    key     : 'orange',
                    value   : 'Light - orange'
                },
                blue        : {
                    key     : 'blue',
                    value   : 'Light - blue'
                },
                metal       : {
                    key     : 'metal',
                    value   : 'Metal'
                },
                light       : {
                    key     : 'light',
                    value   : 'Light'
                },
                roundy      : {
                    key     : 'roundy',
                    value   : 'Roundy'
                }
            }
        },

        /**
         * forms
         *
         * @static
         * @property forms
         * @type Object
         **/
        forms: {},

        /**
         * source
         *
         * @static
         * @property source
         * @type Object
         **/
        source: {},

        /**
         * event
         *
         * @static
         * @property events
         * @type Object
         **/
        events: {}
    };
	
    // aliases
    WAF.sources = WAF.source;
    source = WAF.source;
    sources = WAF.source;
    waf = WAF;
    
    /**
     * get the value of the parameter
     * 
     * @static
     * @method getUrlValue
     * @param {String} name parameter name
     * @return {String} value of the param
     */
    WAF.getUrlValue = function (name) {
        var regexS = '',
        regex = '',
        results = '';
    
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        regexS = "[\\?&]"+name+"=([^&#]*)";
        regex = new RegExp( regexS );
        results = regex.exec(window.location.href);
        if (results == null) {
            return '';
        } else {
            return results[1];
        }
    };
	
    /**
     * on after init
     * 
     * @static
     * @event onAfterInit
     */
    WAF.onAfterInit = function () {};

    /**
     * <p>Create a namespace</p>
     *
     * @static
     * @method namespace
     * @param {String} namespace namespace to create
     * @return {Object}
     */
    WAF.namespace = function (namespace) {
        var tabNameSpace = [],
        i = 0,
        container = window;

        tabNameSpace = namespace.split('.');

        for (i = 0; i < tabNameSpace.length; i++) {
            container[tabNameSpace[i]] = container[tabNameSpace[i]] || {};
            container = container[tabNameSpace[i]];
        }

        return container;
    };

    /**
     * Create a listener
     *
     * @static
     * @method addListener
     * @param {String} obj object wher to apply the event
     * @param {String} event event to create
     * @param {Function} callback callback
     * @param {String} lib namespace to create
     * @param {String} option option to pass
     */
    WAF.addListener = function (obj, event, callback, lib, option) {
        var ref = {},
        objtemp = null,
        params = {},
        eventName = '';

        lib = lib || 'waf';
        lib = lib.toLowerCase();

        if (typeof(obj) == 'string') {
            objtemp = WAF.widgets[obj];
            if (typeof(objtemp) == 'undefined') {
            } else {
                obj = objtemp;
            }
        }

        switch (lib.toLowerCase()) {
            case 'yui':
                obj.subscribe(event, callback);
                break;
            case 'extjs':
                obj.on(event, callback);
                break;
            case 'jquery':
                $.listen(event, obj, callback);
                break;
            case 'waf':
                // keep events into WAF.events
                eventName = event.replace('on','');
                
                if (obj.id) {
                    if (!WAF.events[obj.id]) {
                        WAF.events[obj.id] = [];
                    }
                    WAF.events[obj.id].push({
                        name    : eventName,
                        fn      : callback
                    });
                }
                
                if (obj.kind) { // check for dataSource
                    switch(obj.kind) {                            
                        case 'extGridPanel':
                            console.log('addListener selectionchange', obj, this, event, callback, arguments)
                            obj.config.ext.on(event, callback, this);
                            break;
                        case 'slider':
                            $("#" + obj.renderId).bind(event, callback);
                            break;
                        case 'chart':
                            
                            $$(obj.id)["_callback_" + event ] = function(){
                                if(typeof $$(obj.id).pieSet !== 'undefined'){
                                    $$(obj.id).pieSet[event](callback);
                                    delete $$(obj.id)["_callback_" + event ];
                                } else {
                                    setTimeout($$(obj.id)["_callback_" + event ], 10);
                                }
                            }
                            setTimeout($$(obj.id)["_callback_" + event ], 10);
                            break;  
                        case 'datagrid':
                            ref = obj.gridController;
                            ref[event] = callback;
                            break;                                                        
                        case 'menuItem' :
                            try {
                                $('#' + obj.renderId).children('p').bind(event.replace('on',''), function(e) {
                                    callback(e);
                                    e.stopPropagation()
                                })
                            } catch (e) {
                            }
                            break;    
                            
                        case 'combobox':
                            var
                            htmlInput,
                            htmlButton;
                            
                            htmlInput   = $("#" + obj.renderId).children('input');
                            htmlButton  = $("#" + obj.renderId).children('button');
                            
                            switch(event) {
                                case 'change':
                                    htmlInput.bind( "autocompleteselect", callback);
                                    break;
                                    
                                case 'focus':
                                case 'blur':
                                    htmlInput.bind( event, callback);
                                    break;
                                    
                                default:
                                    if (document.getElementById(obj.renderId).addEventListener) {
                                        document.getElementById(obj.renderId).addEventListener(event.replace('on',''), callback, false);
                                    } else if (document.getElementById(obj.renderId).attachEvent) {
                                        document.getElementById(obj.renderId).attachEvent('on' + event.replace('on',''), callback);
                                    }
                                    
                                    break;
                            }
                            break;       
                            
                        case 'button':
                        case 'container':
                        case 'checkbox':
                        case 'displayText':
                        case 'errorDiv':
                        case 'image':
                        case 'list':
                        default :
                            try {
                                if (obj.kind === 'matrix' && event === 'onChildrenDraw') {
                                // Exception on children draw events
                                } else {
                                    if (document.getElementById(obj.renderId).addEventListener) {
                                        document.getElementById(obj.renderId).addEventListener(event.replace('on',''), callback, false);
                                    } else if (document.getElementById(obj.renderId).attachEvent) {
                                        document.getElementById(obj.renderId).attachEvent('on' + event.replace('on',''), callback);
                                    }
                                }
                            } catch (e) {
                            }
                            break;
                    }
                } else {
                    // dataSource
                    if (WAF.source[obj]) {
                        params = {};
                        if (option) {
                            params.attributeName = option;
                            event = 'attributeChange';
                        }
                        WAF.source[obj].addListener(event, callback, params);  						
                    } else {
                        // Onload for body
                        if (event == 'onLoad') {
                            $(document).ready(callback)
                        } else if (document.getElementById(obj)) {
                            if (document.getElementById(obj).addEventListener){
                                document.getElementById(obj).addEventListener(event.replace('on',''), callback, false);
                            } else if (document.getElementById(obj).attachEvent) {
                                document.getElementById(obj).attachEvent('on' + event.replace('on',''), callback);
                            }
                        }
                    }
                }
                break;
            default:
                try {
                    if (document.getElementById(obj).addEventListener) {
                        document.getElementById(obj).addEventListener(event.replace('on',''), callback, false);
                    } else if (document.getElementById(obj).attachEvent) {
                        document.getElementById(obj).attachEvent('on' + event.replace('on',''), callback);
                    }
                } catch (e) {

                }
        }
    };
    
    /**
     * Search the widget or the element by the id
     * 
     * @static
     * @method get
     * @param {String} id id of the widget / element
     * @return {WAF.Widget|Object�}
     */
    WAF.get = function (id) {
        var object = null;
        object = WAF.widgets[id] || document.getElementById(id);
        return object;
    };
    
    /**
     * Get the description of the library
     * (TLD for Tag Library Descriptors)
     * @method getTld
     * @return {WAF.tags.list.Descriptor}
     */  
    WAF.getTld = function () {
        return WAF.config.tld;
    };    
    
    /**
     * Add a new widget into WAF    
     * @method addWidget
     * @param {JSON} config configuration of a widget
     */  
    WAF.addWidget = function (config) {
        config = config || {};       
        
        if (config.lib) {
            if (typeof WAF.config.widget[config.lib] === 'undefined') {
                WAF.config.widget[config.lib] = {};
            }
            WAF.config.widget[config.lib][config.type] = config;
        } else {
            WAF.config.widget['WAF'][config.type] = config;
        }
        
        WAF.config.taglib.push(config);        
    };   
    
    /**
     * Loader
     * 
     * @class WAF.loader
     */
    WAF.loader = {

        simplePath: {},
		
        /**
         * scripts to load
         *
         * @static
         * @property scriptToLoad
         * @type Array
         */
        scriptToLoad : [],

        /**
         * css to load
         *
         * @static
         * @property styleToLoad
         * @type Array
         */
        styleToLoad : [],

        /**
         * init the loading of required files
         *
         * @static
         * @method loadModules
         * @param {String} moduleName name of the module to load
         */
        loadModules : function (moduleName) {
            var i = 0,
            supCSS = [],
            allAtOnce = false,
            style = '',
            styles = [],
            nbstyles = 0,
            fullCSSList = [],
            pattern = WAF.config.pattern,
            xhref = '',
            path = '',
            fullJSList = '',
            supJS = [];
            
            if (WAF.modulesInfo[moduleName]) {

                // init
                WAF.loader.scriptToLoad = WAF.modulesInfo[moduleName].require;
                WAF.loader.styleToLoad = WAF.modulesInfo[moduleName].css;

                supCSS = WAF.config.loadCSS;
                for (i = 0; i < supCSS.length; i++) {
                    WAF.loader.styleToLoad.push(supCSS[i]);
                }

                supJS = WAF.config.loadJS;
                for (i = 0; i < supJS.length; i++) {
                    WAF.loader.scriptToLoad.push(supJS[i]);
                }

                // load
                if (WAF.config.load) {
                    WAF.loader.scriptToLoad.push(WAF.config.load);
                }
				
                if (WAF.getUrlValue('debug') !== '1') {                    
                    allAtOnce = true;
                    WAF.loader.simplePath = {};
					
                    styles = WAF.loader.styleToLoad;
                    WAF.loader.styleToLoad = [];
                    nbstyles = styles.length;
                    for (i = 0; i < nbstyles; i++) {
                        style = styles[i];
                        fullCSSList.push(style);
                    }                    
                    fullCSSList = fullCSSList.join(',');
                    xhref = window.location.href.split('/').join('\\');
                    path = "/waf-optimize?referer='" + encodeURIComponent(xhref) + "'&files='" + fullCSSList + "'";
                    if (pattern != null) {
                        path = '/' + pattern + path;
                    }
                    WAF.loader.styleToLoad.push(path);
                    WAF.loader.simplePath[path] = true;
					
                    fullJSList = WAF.loader.scriptToLoad.join(',');
                    path = "/waf-optimize?referer='" + encodeURIComponent(xhref) + "'&files='" + fullJSList + "'";
                    if (pattern != null) {
                        path = '/' + pattern + path;
                    }
                    WAF.loader.scriptToLoad = [path];
                    WAF.loader.simplePath[path] = true;					
                }

                if (WAF.loader.styleToLoad.length > 0) {
                    WAF.loader.loadStyles(allAtOnce);
                }
                if (WAF.loader.scriptToLoad.length > 0) {
                    WAF.loader.loadScripts(allAtOnce);
                }
            } else {
                // if module unknow, we load only user script
                if (WAF.config.load) {
                    WAF.loader.scriptToLoad.push(WAF.config.load);
                    WAF.loader.loadScripts();
                }
            }
        },

        /**
         * Load script
         *
         * @static
         * @method loadScripts
         */
        loadScripts : function (allAtOnce) {
            var path = WAF.loader.scriptToLoad[0],
            head = null,
            script = null,
            loadHandler = null;
            
            // case of jQuery is already defined
            if (typeof jQuery != 'undefined' && path.indexOf('jquery.js') != -1) {
                WAF.loader.scriptToLoad = WAF.loader.scriptToLoad.slice(1);
                if (WAF.loader.scriptToLoad.length > 0) {
                    WAF.loader.loadScripts();
                } 
            } else {                        
                head = document.getElementsByTagName('head')[0];
                script = document.createElement('script');
                script.type = 'text/javascript';
                // WAF modules
                if (path[0] == '+' && !allAtOnce) {
                    script.src = WAF.config.baseURL + path.slice(1);
                } else {
                    script.src = path;
                }
  
                loadHandler = function (event) {
                    WAF.loader.scriptToLoad = WAF.loader.scriptToLoad.slice(1);
                    if (WAF.loader.scriptToLoad.length > 0) {
                        WAF.loader.loadScripts();
                    } else {    		
                        var onCatalogLoad = function (event) {
                            var length = 0, i = 0, desc = {};
                                                        
                            if (event.error != null) {
                                WAF.ds = null;
                            }
							
                            ds = WAF.ds; // ds is a global variable and an alias to the dataStore                            
						
                            // get the description of tags
                            if (WAF.config.widget) {
                                WAF.config.tld = new WAF.tags.list.Descriptor();
                                length = WAF.config.taglib.length;
                                for (i = 0; i < length; i++) {
                                    desc = WAF.config.taglib[i];
                                    WAF.config.tld.add(new WAF.tags.Descriptor(desc));
                                }
                            }
						
                            if (!(typeof(WAF.tags) === "undefined")) {
                                WAF.tags.createView();
                            }
						
                            // show a message when an error happens in WAF.afterInit
                            try {
                                console.log('afterInit');
                                WAF.onAfterInit();
                            } catch (e) {
                                if (typeof console !== 'undefined' && 'log' in console) {
                                    console.log('There is an error in WAF.afterInit method', e);
                                } else {
                                    alert('There is an error in WAF.afterInit method' + e.message);
                                }
                            }						
                        }
					
                        if (WAF.DataStore != null) {
                            WAF.ds = new WAF.DataStore({
                                onSuccess: onCatalogLoad,
                                onError: onCatalogLoad
                            })
                        }															
                    }
                };

                if (script.addEventListener) {
                    script.addEventListener('load', loadHandler, false);
                } else {
                    script.onreadystatechange = function() {
                        if (this.readyState === 'complete' || this.readyState === 'loaded') {
                            loadHandler();
                        }
                    }
                }

                head.appendChild(script);
            }
        },

        /**
         * Load style
         *
         * @static
         * @method loadStyles
         */
        loadStyles : function (allAtOnce) {
            var path = '',
            head = null,
            link = null,
            wafCss = null,
            req = null;
                        
            if (WAF.loader.styleToLoad.length > 0) {
                path = WAF.loader.styleToLoad[0];                
                WAF.loader.styleToLoad = WAF.loader.styleToLoad.slice(1);

                head = document.getElementsByTagName('head')[0];
                link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                if (path[0] == '+' && !allAtOnce) {
                    link.href = WAF.config.baseURL + path.slice(1);
                } else {
                    link.href = path;
                }

                wafCss = document.getElementById('waf-interface-css');
                
                if (wafCss) {                    
                    // check for url limitation on IE9
                    if (link.href.length > 4000) {                    
                        req = new XMLHttpRequest();
                        req.open('POST', link.href, true);
                        req.onreadystatechange = function (evt) {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    var style = document.createElement('style');
                                    style.setAttribute('id', 'waf-page');
                                    style.innerHTML = req.responseText;
                                    wafCss.parentNode.insertBefore(style, wafCss);
                                }
                            }
                        };
                        
                        req.send(null);                    
                    } else {
                        wafCss.parentNode.insertBefore(link, wafCss);
                    }
                                        
                } else {
                    // check for url limitation on IE9
                    if (link.href.length > 4000) {                    
                        req = new XMLHttpRequest();
                        req.open('POST', link.href, true);
                        req.onreadystatechange = function (evt) {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    var style = document.createElement('style');
                                    style.setAttribute('id', 'waf-page');
                                    style.innerHTML = req.responseText;
                                    head.appendChild(style);
                                }
                            }
                        };
                        
                        req.send(null);                    
                    } else {
                        head.appendChild(style);
                    }                                                          
                }

                WAF.loader.loadStyles();
            }
        },

        /**
         * init the loading of required files
         *
         * @static
         * @method init
         */ 
        init : function () {
            var i = 0,
            j = 0,
            scriptsList = '',
            script = 0,
            modulesString = 'allmodules',
            metaTags = '',
            modules = '', 
            content = '',
            req = null;
            
            WAF.config.loadCSS = [],
            WAF.config.loadJS = [],
            			
            // get the pattern			
            req = new XMLHttpRequest();
            req.open('GET', document.location, false);
            req.send(null);
            var pattern = req.getResponseHeader('X-WA-Pattern');
            if (pattern == null || pattern == "") {
                pattern = null;
            }
            WAF.config.pattern = pattern;

            // Get the base URL
            scriptsList = document.getElementsByTagName('script');
            for (script = 0; script < scriptsList.length; script++) {
                if (scriptsList[script].src.search(/loader.js/i) !== -1) {
                    WAF.config.baseURL = scriptsList[script].src.substring(0, scriptsList[script].src.search(/loader.js/i) - 1);
                }
            }

            // look for the meta tags WAF.config.x
            metaTags = document.getElementsByTagName('meta');

            for (i= 0; i < metaTags.length; i++) {                                
                switch (metaTags[i].name) {
                    case 'WAF.config':
                        break;
                    case 'WAF.config.modules':
                        modulesString = (metaTags[i].content === '') ? 'allmodules' : metaTags[i].content;                        
                        if ( modulesString === 'tablet' || modulesString === 'smartphone' ) {
                            modulesString = "mobile";
                        }
                        modulesString = modulesString.toLowerCase();
                        break;
                    case 'WAF.config.openAjax':
                        WAF.config.openAjax = (metaTags[i].content === '') ? 'null' : metaTags[i].content;
                        break;
                    case 'WAF.config.debug':
                        WAF.config.debugMode = (metaTags[i].content === 'true') ? true : false;
                        break;
                    case 'WAF.config.uniTest':
                        WAF.config.uniTest = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.load':
                        WAF.config.load = (metaTags[i].content === '') ? '' : metaTags[i].content;
                        break;
                    case 'WAF.config.loadJS':
                        content = metaTags[i].content;
                        if (content != null) {
                            WAF.config.loadJS.push(content);
                            WAF.loader.simplePath[content] = true;
                        }
                        break;
                    case 'WAF.config.loadCSS':
                        content = metaTags[i].content;
                        if (content != null) {
                            WAF.config.loadCSS.push(content);
                            WAF.loader.simplePath[content] = true;
                        }
                        break;						
                    case 'WAF.config.rpc':
                        WAF.config.rpc = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.namespace':
                        WAF.config.rpc.namespace = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.module':
                        WAF.config.rpc.module = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.methods':
                        WAF.config.rpc.methods = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.validation':
                        WAF.config.rpc.validation = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    default:
                        break;
                }
            }

            // Load the modules
            modules = modulesString.split(',');

            for (j = 0; j < modules.length; j++) {
                console.log('loadModules', modules[j]);
                WAF.loader.loadModules(modules[j]);
            }            
        }
    };

    WAF.loader.init();
}

/**
 * Get a reference to a WAF widget
 *
 * @param {String} id id of the widget
 * @return {WAF.Widget} a widget
 */
function $$(id) {
    return WAF.widgets[id];
}
