const { injectBabelPlugin } = require('react-app-rewired');
const rewireUglifyjs = require('react-app-rewire-uglifyjs');
const rewireLess = require('react-app-rewire-less');
const rewireVendorSplitting = require('react-app-rewire-vendor-splitting');

module.exports = function override(config, env) {
    config = rewireUglifyjs(config);
    // change importing css to less
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);

    // split vendors to a separate chunk
    config = rewireVendorSplitting(config, env);

    config = rewireLess.withLoaderOptions({
        modifyVars: {
            '@primary-color': '#1890ff',                         // primary color for all components
            '@link-color': '#039be9',                               // link color
            '@success-color': '#52c41a',                         // success state color
            '@warning-color': '#faad14',                         // warning state color
            '@error-color': '#f5222d',                           // error state color
        }
    })(config, env);
    return config;
}