var common = require('../common/common');
var subModule = require('../general/hello-module');
var pageTpl = require('../tpl/page');

common();
subModule.init({data : 1, page : 'hello page.'});
console.log(pageTpl.render({name : 'hello'}));