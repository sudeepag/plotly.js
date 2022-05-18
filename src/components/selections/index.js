'use strict';

var select = require('./select');

module.exports = {
    moduleType: 'component',
    name: 'selections',

    // layoutAttributes: require('./attributes'),
    // supplyLayoutDefaults: require('./defaults'),
    // includeBasePlot: require('../../plots/cartesian/include_components')('selections'),

    prepSelect: select.prepSelect,
    clearSelect: select.clearSelect,
    clearSelectionsCache: select.clearSelectionsCache,
    selectOnClick: select.selectOnClick
};
