import Vue from 'vue';
import NetUi from 'net-ui';
import ContentSlotsDistributor from './ContentSlotsDistributor.vue';
import OutboundLink from './OutboundLink.vue';
import DemoBox from '../components/demobox.vue';
import VueClipboard from '../directives/clipboard.js';

Vue.use(NetUi);
Vue.use(VueClipboard);
Vue.component('DemoBox', DemoBox);
Vue.component('OutboundLink', OutboundLink);
Vue.component('ContentSlotsDistributor', ContentSlotsDistributor);
