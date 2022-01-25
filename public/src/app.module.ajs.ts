import { downgradeComponent } from '@angular/upgrade/static';

import * as angular from 'angular';
import 'angular-route';

import 'jquery';
import 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/app.scss";

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import homeComponent from './home/home';
import navigationComponent from './navigation/navigation';
import customersComponent from './customers/customers';
import customersTableComponent from './customers/customers-table';
import customerDetailComponent from './customerDetail/customerDetail';
import discountComponent from './customerDetail/discount';
import validateDateDirective from './directives/validateDate';
import ordersComponent from './orders/orders';
import orderDetailComponent from './orderDetail/orderDetail';
import productsComponent from './products/products';
import productDetailComponent from './productDetail/productDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';
import OrderService from './orders/orderService';
import ProductService from './products/productService';
import { MikeTestComponent } from './miketest/miketest.component';
import { MikeTest2Component } from './miketest2/miketest2.component';
import { MikeTest3Component } from './miketest3/miketest3.component';
import { MikeTesterComponent } from './miketester/miketester.component';
import { MikeTest4Component } from './miketest4/miketest4.component';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('home', homeComponent)
  .component('navigation', navigationComponent)
  .component('customers', customersComponent)
  .component('customersTable', customersTableComponent)
  .component('customerDetail', customerDetailComponent)
  .component('discount', discountComponent)
  .component('orders', ordersComponent)
  .component('orderDetail', orderDetailComponent)
  .component('products', productsComponent)
  .component('productDetail', productDetailComponent)
  //.component('miketest', MikeTestComponent)
  .directive('validateDate', validateDateDirective)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .service('orderService', OrderService)
  .service('productService', ProductService)
  .directive('miketest', downgradeComponent({component: MikeTestComponent}) as angular.IDirectiveFactory)
  .directive('miketest2', downgradeComponent({component: MikeTest2Component}) as angular.IDirectiveFactory)
  .directive('miketest3', downgradeComponent({component: MikeTest3Component}) as angular.IDirectiveFactory)
  .directive('miketester', downgradeComponent({component: MikeTesterComponent}) as angular.IDirectiveFactory)
  .directive('miketest4', downgradeComponent({component: MikeTest4Component}) as angular.IDirectiveFactory)

export default MODULE_NAME;
