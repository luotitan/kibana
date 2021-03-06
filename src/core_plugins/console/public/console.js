import uiRoutes from 'ui/routes';
import template from './index.html';

require('ace');
require('ui-bootstrap-custom');

require('ui/modules').get('kibana', ['sense.ui.bootstrap']);
require('ui/tooltip');
require('ui/autoload/styles');

require('./css/sense.less');
require('./src/controllers/sense_controller');
require('./src/directives/sense_history');
require('./src/directives/sense_settings');
require('./src/directives/sense_help');
require('./src/directives/sense_welcome');


uiRoutes.when('/dev_tools/console', {
  controller: 'SenseController',
  template
});
