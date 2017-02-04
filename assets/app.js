(function() {
	'use strict';

	var app = angular.module('app', [
		'ngRoute', 'ui.bootstrap', 'ImageCropper'
	]);
	var $ = jQuery;

	///
	// Routes
	///

	app.config(function($routeProvider) {

		///
		// Home
		///

		$routeProvider.when('/', {
			controller: 'HomeController',
			templateUrl: '/templates/home.html'
		});


		///
		// Applicants
		///

		$routeProvider.when('/applicants', {
			controller: 'ApplicantsListController',
			templateUrl: '/templates/applicantsList.html'
		});


		///
		// Customers
		///

		$routeProvider.when('/customers/add', {
			controller: 'CustomersAddController',
			templateUrl: '/templates/customersForm.html'
		});

		$routeProvider.when('/customers/edit/:id', {
			controller: 'CustomersEditController',
			templateUrl: '/templates/customersForm.html'
		});

		$routeProvider.when('/customers/orders/:id', {
			controller: 'CustomersOrdersController',
			templateUrl: '/templates/customersOrders.html'
		});

		$routeProvider.when('/customers/search', {
			controller: 'CustomersSearchController',
			templateUrl: '/templates/customersSearch.html'
		});


		///
		// Dispatch
		///

		$routeProvider.when('/dispatch', {
			controller: 'DispatchController',
			templateUrl: '/templates/dispatch.html'
		});

		$routeProvider.when('/dispatch/:id', {
			controller: 'DispatchOrderController',
			templateUrl: '/templates/dispatchOrder.html'
		});


		///
		// Drivers
		///

		$routeProvider.when('/driversReports', {
			controller: 'DriversReportsController',
			templateUrl: '/templates/driversReportsList.html'
		});


		///
		// Email List Mgmt
		///

		$routeProvider.when('/emailList/add', {
			controller: 'EmailListAddController',
			templateUrl: '/templates/emailListForm.html'
		});

		$routeProvider.when('/emailList/edit/:id', {
			controller: 'EmailListEditController',
			templateUrl: '/templates/emailListForm.html'
		});

		$routeProvider.when('/emailList/search', {
			controller: 'EmailListSearchController',
			templateUrl: '/templates/emailListSearch.html'
		});


		///
		// Messaging
		///

		$routeProvider.when('/messages', {
			controller: 'MessagesListController',
			templateUrl: '/templates/messagesList.html'
		});

		$routeProvider.when('/messages/:id', {
			controller: 'MessageDetailsController',
			templateUrl: '/templates/messageDetails.html'
		});


		///
		// Order
		///

		$routeProvider.when('/orderDetails/:id', {
			controller: 'OrderDetailsController',
			templateUrl: '/templates/orderDetails.html'
		});


		///
		// Promos
		///

		$routeProvider.when('/promos', {
			controller: 'PromosListController',
			templateUrl: '/templates/promosList.html'
		});

		$routeProvider.when('/promos/add/:id', {
			controller: 'PromosAddController',
			templateUrl: '/templates/promosForm.html'
		});

		$routeProvider.when('/promos/edit/:id', {
			controller: 'PromosEditController',
			templateUrl: '/templates/promosForm.html'
		});


		///
		// Shifts
		///

		$routeProvider.when('/shifts/:id', {
			controller: 'ShiftViewController',
			templateUrl: '/templates/shiftView.html'
		});

		$routeProvider.when('/shifts', {
			controller: 'ShiftsListController',
			templateUrl: '/templates/shiftsList.html'
		});

		$routeProvider.when('/driverShifts/:id', {
			controller: 'DriverShiftsListController',
			templateUrl: '/templates/driverShiftsList.html'
		});

		$routeProvider.when('/driverShifts/reconcile/:id', {
			controller: 'DriverShiftReconcileController',
			templateUrl: '/templates/driverShiftReconcile.html'
		});


		///
		// Stories
		///

		$routeProvider.when('/stories/add', {
			controller: 'StoriesAddController',
			templateUrl: '/templates/storyForm.html'
		});

		$routeProvider.when('/stories/view', {
			controller: 'StoriesListController',
			templateUrl: '/templates/storiesList.html'
		});


		///
		// Categories
		///

		$routeProvider.when('/categories/:id', {
			controller: 'CategoriesListController',
			templateUrl: '/templates/categoriesList.html'
		});

		$routeProvider.when('/categories/add/:id', {
			controller: 'CategoriesAddController',
			templateUrl: '/templates/categoriesForm.html'
		});

		$routeProvider.when('/categories/edit/:id', {
			controller: 'CategoriesEditController',
			templateUrl: '/templates/categoriesForm.html'
		});


		///
		// Popcorn
		///

		$routeProvider.when('/popcorn/:id', {
			controller: 'PopcornListController',
			templateUrl: '/templates/popcornList.html'
		});

		$routeProvider.when('/popcorn/add/:id', {
			controller: 'PopcornAddController',
			templateUrl: '/templates/popcornForm.html'
		});

		$routeProvider.when('/popcorn/edit/:id', {
			controller: 'PopcornEditController',
			templateUrl: '/templates/popcornForm.html'
		});


		///
		// Options
		///

		$routeProvider.when('/options/:id', {
			controller: 'OptionsListController',
			templateUrl: '/templates/optionsList.html'
		});

		$routeProvider.when('/options/add/:id', {
			controller: 'OptionsAddController',
			templateUrl: '/templates/optionsForm.html'
		});

		$routeProvider.when('/options/edit/:id', {
			controller: 'OptionsEditController',
			templateUrl: '/templates/optionsForm.html'
		});


		///
		// Bevs
		///

		$routeProvider.when('/bevs/:id', {
			controller: 'BevsListController',
			templateUrl: '/templates/bevsList.html'
		});

		$routeProvider.when('/bevs/add/:id', {
			controller: 'BevsAddController',
			templateUrl: '/templates/bevsForm.html'
		});

		$routeProvider.when('/bevs/edit/:id', {
			controller: 'BevsEditController',
			templateUrl: '/templates/bevsForm.html'
		});


		///
		// BevOptions
		///

		$routeProvider.when('/bevOptions/:id', {
			controller: 'BevOptionsListController',
			templateUrl: '/templates/bevOptionsList.html'
		});

		$routeProvider.when('/bevOptions/add/:id', {
			controller: 'BevOptionsAddController',
			templateUrl: '/templates/bevOptionsForm.html'
		});

		$routeProvider.when('/bevOptions/edit/:id', {
			controller: 'BevOptionsEditController',
			templateUrl: '/templates/bevOptionsForm.html'
		});


		///
		// Users
		///

		$routeProvider.when('/users/add', {
			controller: 'UsersAddController',
			templateUrl: '/templates/usersForm.html'
		});

		$routeProvider.when('/users/edit/:id', {
			controller: 'UsersEditController',
			templateUrl: '/templates/usersForm.html'
		});

		$routeProvider.when('/users/search', {
			controller: 'UsersSearchController',
			templateUrl: '/templates/usersSearch.html'
		});


		///
		// Other
		///

		$routeProvider.otherwise({
			redirectTo: '/'
		});
	});


	///
	// Navbar Management
	///

	app.factory('navMgr', function navMgrFactory(
		$rootScope, $location, $window, $modal
	) {
		var service = {
			///
			// Form navigation management
			///

			shouldProtect: function() { return false; },

			onNavStart: function(evt, newUrl) {
				if(! this.shouldProtect()) return this.protect(false);

				this.navAway(newUrl);

				evt.preventDefault();
			},

			protect: function(shouldProtect) {
				var value = shouldProtect;

				if(typeof shouldProtect !== 'function') {
					shouldProtect = function() { return value; }
				}
				this.shouldProtect = shouldProtect;
			},

			cancel: function(newUrl) {
				if(! this.shouldProtect()) {
					this.protect(false);
					$window.location.href = newUrl;
					return;
				}
				this.navAway(newUrl);
			},

			navAway: function(newUrl) {
				var self = this;

				var modal = $modal.open({
					templateUrl: '/templates/navAway.html',
					backdrop: 'static',
					resolve: {}
				});

				modal.result.then(function(selected) {
					if(selected == 'save') {
						// TODO
						alert('functionality not implemented: save as draft');
						return;
					}

					self.protect(false);
					$window.location.href = newUrl;
				});
			}
		};

		return service;
	});

	///
	// Querystring builder
	///
	
	app.factory('querystring', function querystringFactory() {
			var service = {
				stringify: function(query, noEncode) {
					var items = [];
					angular.forEach(query, function(value, key) {
						if(noEncode) {
							items.push(key + '=' + value);
						} else {
							items.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
						}
					});
					return items.join('&');
				}
			};

			return service;
	});


	///
	// Configuration managements
	///
	
	app.factory('configMgr', function configMgrFactory() {
			var service = {
				config: {
					vendors: {
						googleMaps: {
							key: 'AIzaSyCmRFaH2ROz5TueD8XapBCTAdBppUir_Bs'
						}
					}
				},
			};

			return service;
	});


	///
	// Error management
	///

	app.factory('errMgr', function errMgrFactory($modal, $rootScope) {
		var service = {
			show: function(message, title) {
				$modal.open({
					templateUrl: '/templates/error.html',
					backdrop: true,
					controller: 'ErrController',
					resolve: {
						options: function() {
							return {
								message: message || 'An unknown error occurred.',
								title: title || 'Whoops! Something went wrong...'
							};
						}
					}
				});
			}
		};

		$rootScope.$on('httpError', function(evt, args) {
			service.show(args.error);
		});

		return service;
	});

	app.controller('ErrController', function($scope, options) {
		$scope.options = options;
	});

	app.constant('bigScreenWidth', 1179);

	app.factory('deviceMgr', function($window, bigScreenWidth) {
		var service = {
			getWindowWidth: function() {
				return $($window).width();
			},
	
			isBigScreen: function(width) {
				width || (width = service.getWindowWidth());
				return width >= bigScreenWidth;
			}
		};
	
		return service;
	});

	app.factory('messageMgmt', function messageMgmtFactory(
		$modal, $rootScope, $http
	) {
		var service = {
			send: function() {
				$modal.open({
					templateUrl: '/templates/sendMassMessage.html',
					backdrop: true,
					controller: 'MessageSendController'
				});
			}
		};

		return service;
	});


	app.factory('customerMgmt', function customerMgmtFactory(
		$modal, $rootScope, $http
	) {
		var service = {
			specialCharge: function(customerId) {
				$modal.open({
					templateUrl: '/templates/specialCharge.html',
					backdrop: true,
					controller: 'ChargeController',
					resolve: {
						args: function() {
							return {
								customerId: customerId
							}
						}
					}
				});
			}
		};

		return service;
	});


	app.factory('dispatchOrderMgmt', function dispatchOrderFactory(
		$modal, $rootScope, $http
	) {
		var service = {
			dispatchOrder: function(orderId, driverId) {
				$modal.open({
					templateUrl: '/templates/dispatchOrderToDriver.html',
					backdrop: true,
					controller: 'DispatchOrderToDriverController',
					resolve: {
						args: function() {
							return {
								orderId: orderId,
								driverId: driverId
							}
						}
					}
				});
			}
		};

		return service;
	});


	app.factory('homeMgmt', function homeMgmtFactory(
		$modal, $rootScope, $http
	) {
		var service = {
			dailyOrders: function() {
				$modal.open({
					templateUrl: '/templates/dailyOrders.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			weeklyOrders: function() {
				$modal.open({
					templateUrl: '/templates/weeklyOrders.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			monthlyOrders: function() {
				$modal.open({
					templateUrl: '/templates/monthlyOrders.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			allTimeOrders: function() {
				$modal.open({
					templateUrl: '/templates/allTimeOrders.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			dailyPromos: function() {
				$modal.open({
					templateUrl: '/templates/dailyPromos.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			weeklyPromos: function() {
				$modal.open({
					templateUrl: '/templates/weeklyPromos.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			monthlyPromos: function() {
				$modal.open({
					templateUrl: '/templates/monthlyPromos.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			dailySignUps: function() {
				$modal.open({
					templateUrl: '/templates/dailySignUps.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			weeklySignUps: function() {
				$modal.open({
					templateUrl: '/templates/weeklySignUps.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
			monthlySignUps: function() {
				$modal.open({
					templateUrl: '/templates/monthlySignUps.html',
					backdrop: true,
					controller: 'HomeController'
				});
			},
		};
		return service;
	});


	///
	// Authentication / Login management
	///

	app.factory('loginModal', function loginModalFactory($modal, $rootScope) {
		var service = {
			show: function() {
				$modal.open({
					templateUrl: '/templates/login.html',
					backdrop: true,
					controller: 'LoginController'
				});
			}
		};

		$rootScope.$on('httpForbidden', function() {
			service.show();
		});

		return service;
	});

	app.controller('LoginController', function(
		$scope, $modalInstance, $http, $window
	) {

		$scope.credentials = {};

		$scope.submit = function(credentials) {
			$http.post(
				'/login', credentials
			).success(function(data, status, headers, config) {
				return $modalInstance.dismiss('done');
			}).error(function(err) {
				$scope.error = err.error;
			});
		};

		$scope.cancel = function() {
			$window.location.href = '/login';
		};
	});


	///
	// User Messaging
	///

	app.factory('messenger', function messengerFactory($rootScope) {
		var service = {
			show: function(msg, title) {
				$rootScope.$broadcast('userMessage', {
					message: msg,
					title: title
				});
			}
		};
		return service;
	});

	app.controller('MessageController', function($scope) {
		$scope.alertType = 'info';

		$scope.close = function() {
			$scope.title = '';
			$scope.userMessage = '';
		};

		$scope.$on('userMessage', function(evt, args) {
			$scope.title = args.title;
			$scope.userMessage = args.message;
		});
	});


	app.factory('orderMgmt', function($modal, $rootScope, $http) {
		var service = {
			assumeOrder: function(customerId) {
				$modal.open({
					templateUrl: '/templates/assumeOrder.html',
					backdrop: true,
					controller: 'OrderMgmtController',
					resolve: {
						args: function() {
							return {
								customerId: customerId
							}
						}
					}
				});
			},
			startOrder: function(customerId) {
				$modal.open({
					templateUrl: '/templates/startOrder.html',
					backdrop: true,
					controller: 'OrderMgmtController',
					resolve: {
						args: function() {
							return {
								customerId: customerId
							}
						}
					}
				});
			}
		};
		return service;
	});


	app.controller('OrderMgmtController', function(
		args, $scope, $modalInstance, $http, $rootScope
	) {
		$scope.secret = '8847fhhfw485fwkebfwerfv7w458gvwervbkwer8fw5fberubckfckcaer4cbwvb72arkbfrcb1n4hg7';
		$scope.customerId = args.customerId;
		$http.get('/customers/' +$scope.customerId).then(function(res) {
			$scope.fName = res.data.fName;
			$scope.lName = res.data.lName;
		});
	});


	///
	// HTTP interception
	///

	app.provider('httpInterceptor', function() {
		this.$get = function($q, $location, $rootScope) {
			var service = {
				responseError: function(response) {
					defaultLocation = new RegExp('^' + $location.host() + ':?[0-9]*$');

					// Only handle ajax calls to valid paths
					if(! (isAjax(response) && isRegistered(response))) {
						return $q.reject(response);
					}

					// Handle unauthorized by prompting for login
					if(response.status === 401) {
						console.log('unauthorized');
						$rootScope.$broadcast('httpForbidden');
						return response;
					}

					var errorMsg = generateErrorMsg(response);
					$rootScope.$broadcast('httpError', {error: errorMsg});

					return response;
				}
			};
			return service;
		};

		var registration = [];
		var defaultLocation;

		this.register = function(pathMatch, hostMatch) {
			registration.push({host: hostMatch, path: pathMatch});
		};

		function generateErrorMsg(response) {
			// Everything else, display error message
			var appError = "There's a problem with the application.";
			var networkError = (
				"There's a problem with the network or the server is down."
			);

			var errors = {
				0: networkError,
				400: appError,
				404: appError,
				500: appError
			};

			return (
				(errors[response.status] || appError) +
				' Please try again later.'
			);
		}

		function isAjax(response) {
			var accept = response.config.headers['Accept'] || '';
			return accept.match(/application\/json/);
		}

		function isRegistered(response) {
			var parsed = parseUrl(response.config.url);
			var host = parsed.host;
			var path = parsed.pathname;

			var result = false;
			registration.forEach(function(reg) {
				reg.host || (reg.host = defaultLocation);
				if(host.match(reg.host) && path.match(reg.path)) {
					result = true;
				}
			});

			return result;
		}

		function parseUrl(url) {
			var parser = document.createElement('a');
			parser.href = url;

			return {
				protocol: parser.protocol,
				host: parser.host,
				port: parser.port,
				pathname: parser.pathname,
				hash: parser.hash,
				search: parser.search
			};
		}
	});
	app.config(function($httpProvider) {
		$httpProvider.interceptors.push('httpInterceptor');
	});


	///
	// Event-Based Services Loader
	///

	app.controller('LoadServices', function(loginModal, errMgr, fakeAuth, authMgr) {});


	app.factory('authMgr', function($rootScope, $http, $q) {
		// Auth Level Map
		// Should Exist in a Config
		// 1 - basic auth level; access to minimal functionality
		// 2 - slightly expanded auth level; access to user-assigned orders (driver)
		// 3 - expanded auth level; access to all orders; access to all customer info; dispatch (operator)
		// 4 - enhanced auth level; access to all orders, scheduling/payroll verification, basic reports (manager)
		// 5 - unrestricted auth level
			
		var service = {
			getAuthLevel: function() {
				return $http.get('/users/authLevel').then(function(authRes) {
					if(! (authRes && authRes.data)) {
						return $q.reject(
							'Invalid authLevel response: ' + JSON.stringify(authRes)
						);
					}
					return authRes.data;
	
				}).catch(function(err) {
					console.error(err);
					$q.reject(err);
				});
			}
		};
	
		return service;
	});


	app.factory('fakeAuth', function($rootScope) {
		// TODO
		// get customerId
		$rootScope.customerId = '54c6644c0517463077a759aa';
		// TODO
		// get areaId
		$rootScope.areaId = '54b32e4c3756f5d15ad4ca49';
		// TODO
		// get authLevel
		$rootScope.authLevel = 5;
	
		return {};
	});


	///
	// Form Pods
	///

	app.factory('pod', function podFactory(errMgr, $modal) {
		///
		// Event handlers
		///

		function onRemove(list, idx, defaultItem) {
			if(! canRemove(list, idx)) return;

			var filteredItem = {};
			$.map(list[idx], function(value, key) {
				if(key.match(/^\$/)) return;
				filteredItem[key] = value;
			});

			if(JSON.stringify(filteredItem) == JSON.stringify(defaultItem)) {
				list.splice(idx, 1);
				return;
			}

			$modal.open({
				templateUrl: '/templates/podRemoveConfirm.html',
				backdrop: true,
				controller: 'PodController',
				resolve: {
					args: function() {
						return {
							list: list,
							idx: idx
						}
					}
				}
			});
		}

		function onCopy(list, idx) {
			// Index must be within list
			if(idx < 0 || list.length <= idx) {
				return;
			}

			var item = angular.copy(list[idx]);
			spliceItem(list, idx, item);
		}

		function onAdd(list, idx, defaultItem) {
			// Index must be within list
			if(idx < 0 || list.length <= idx) {
				return;
			}

			var item;

			if(defaultItem) {
				item = angular.copy(defaultItem);
			} else {
				item = angular.copy(list[idx]);

				$.map(item, function(value, key) {
					item[key] = '';
				});
			}

			spliceItem(list, idx, item);
		}


		///
		// Utility methods
		///

		function spliceItem(list, idx, item) {
			list.splice(idx + 1, 0, item);
		}

		function canRemove(list, idx) {
			// Cannot remove last pod
			if(list.length < 2) {
				errMgr.show(
					'This item cannot be removed.',
					"I'm sorry, but I can't let you do that..."
				);
				return false;
			}

			// Index must be within list
			if(idx < 0 || list.length <= idx) {
				return false;
			}

			return true;
		}


		///
		// Service definition
		///

		var service = {
			podize: function(scope) {
				scope.$pod = {
					remove: onRemove,
					copy: onCopy,
					add: onAdd
				};
			}
		};
		return service;
	});

	app.controller('PodController', function(args, $scope, $modalInstance) {
		$scope.list = args.list;
		$scope.idx = args.idx;

		$scope.confirmRemove = function(list, idx) {
			list.splice(idx, 1);
			$modalInstance.dismiss('done');
		};
	});



	///
	// Controllers: Home
	///

	app.controller('HomeController', function(
		$scope, $http, $routeParams, $rootScope,
		homeMgmt, messageMgmt, authMgr
	) {
		var authPromise = authMgr.getAuthLevel();
		var areaId = $rootScope.areaId;
		var ccPercent = .029;
		var extraCCCharge = .3;
		var bevCost = .32;
		$scope.areaId = $rootScope.areaId;

		authPromise.then(function(authData) {

			$scope.authLevel = authData.authLevel;
			$scope.authUserId = authData.userId;

			$scope.sendMessage = messageMgmt.send;
		
			$scope.dailyOrders = homeMgmt.dailyOrders;
			$scope.weeklyOrders = homeMgmt.weeklyOrders;
			$scope.monthlyOrders = homeMgmt.monthlyOrders;
			$scope.allTimeOrders = homeMgmt.allTimeOrders;
	
			$scope.dailyPromos = homeMgmt.dailyPromos;
			$scope.weeklyPromos = homeMgmt.weeklyPromos;
			$scope.monthlyPromos = homeMgmt.monthlyPromos;
	
			$scope.dailySignUps = homeMgmt.dailySignUps;
			$scope.weeklySignUps = homeMgmt.weeklySignUps;
			$scope.monthlySignUps = homeMgmt.monthlySignUps;

			var allOrders = $http.get('/orders/allTime/' +areaId).then(function(res) {
				var allTimeOrderData = res.data;

				var allTimeBevs = 0;
				var allTimeBevsNet = 0;
				var allTimeGrossRevenue = 0;
				var allTimeNetRevenue = 0;
				var allTimeOrders = 0;
				var allTimePromos = 0;
				var allTimePromosDisc = 0;

				allTimeOrderData.forEach(function(order) {
					var ccTotal = 0;
					var bevNet = 0;
					if(order.orderStatus > 4) {
						allTimeOrders ++;
						allTimeGrossRevenue += parseFloat(order.total);
						if(order.discount) {
							if(order.paymentMethods != 'cash') {
								var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
								var ccCharge = extraCCCharge;
								ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
							}
							if(order.bevThings && order.bevThings.length > 0) {
								order.bevThings.forEach(function(bevThing) {
									allTimeBevs += bevThing.quantity;
									var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
									allTimeBevsNet += parseFloat(thisBevThingEffect);
									bevNet += parseFloat(thisBevThingEffect);
								});
							}
							allTimeNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(order.discount) - parseFloat(ccTotal) + parseFloat(bevNet));
							allTimePromos ++;
							allTimePromosDisc += parseFloat(order.discount);
						} else {
							if(order.paymentMethods != 'cash') {
								var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
								var ccCharge = extraCCCharge;
								ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
							}
							if(order.bevThings && order.bevThings.length > 0) {
								order.bevThings.forEach(function(bevThing) {
									allTimeBevs += bevThing.quantity;
									var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
									allTimeBevsNet += parseFloat(thisBevThingEffect);
									bevNet += parseFloat(thisBevThingEffect);
								});
							}
							allTimeNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(ccTotal) + parseFloat(bevNet));
						}
					}
				});
				$scope.allTimeBevs = allTimeBevs;
				$scope.allTimeBevsNet = allTimeBevsNet.toFixed(2);
				$scope.allTimeGrossRevenue = allTimeGrossRevenue.toFixed(2);
				$scope.allTimeNetRevenue = allTimeNetRevenue.toFixed(2);
				$scope.allTimeOrders = allTimeOrders;
				$scope.allTimePromos = allTimePromos;
				$scope.allTimePromosDisc = allTimePromosDisc;
			}).catch(function(err) {
				console.log('orders-allTime err:');
				console.log(err);
			});

			$http.get('/orders/daily/' +areaId).then(function(res) {
				var dailyOrders = res.data;

				var dayBevs = 0;
				var dayBevsNet = 0;
				var dayGrossRevenue = 0;
				var dayNetRevenue = 0;
				var dayOrders = 0;
				var dayPromos = 0;
				var dayPromosArr = [];
				var dayPromosDisc = 0;

				if(dailyOrders && dailyOrders.length > 0) {
					dailyOrders.forEach(function(order) {
						var ccTotal = 0;
						var bevNet = 0;
						if(order.orderStatus > 4) {
							dayOrders ++;
							dayGrossRevenue += parseFloat(order.total);
							if(order.discount) {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										dayBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										dayBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								dayNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(order.discount) - parseFloat(ccTotal) + parseFloat(bevNet));
								dayPromos ++;
								dayPromosDisc = dayPromosDisc + parseFloat(order.discount);
								if(dayPromosArr.indexOf(order.promo.toLowerCase()) < 0) {
									dayPromosArr.push(order.promo.toLowerCase());
								}
							} else {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										dayBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										dayBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								dayNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(ccTotal) + parseFloat(bevNet));
							}
						}
					});
				}
				$scope.dayBevs = dayBevs;
				$scope.dayBevsNet = dayBevsNet.toFixed(2);
				$scope.dayGrossRevenue = dayGrossRevenue.toFixed(2);
				$scope.dayNetRevenue = dayNetRevenue.toFixed(2);
				$scope.dayOrders = dayOrders;
				$scope.dayPromos = dayPromos;
				$scope.dayPromosArr = dayPromosArr;
				$scope.dayPromosDisc = dayPromosDisc.toFixed(2);
			}).catch(function(err) {
				console.log('orders-daily err:');
				console.log(err);
			});
	
			$http.get('/orders/weekly/' +areaId).then(function(res) {
				var weekOrders = res.data;

				var weekGrossRevenue = 0;
				var weekNetRevenue = 0;
				var weeklyBevs = 0;
				var weeklyBevsNet = 0;
				var weeklyOrders = 0;
				var weeklyPromos = 0;
				var weeklyPromosArr = [];
				var weeklyPromosDisc = 0;

				if(weekOrders && weekOrders.length > 0) {
					weekOrders.forEach(function(order) {
						var ccTotal = 0;
						var bevNet = 0;
						if(order.orderStatus > 4) {
							weeklyOrders ++;
							weekGrossRevenue += parseFloat(order.total);
							if(order.discount) {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										weeklyBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										weeklyBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								weekNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(order.discount) - parseFloat(ccTotal) + parseFloat(bevNet));
								weeklyPromos ++;
								weeklyPromosDisc = weeklyPromosDisc + parseFloat(order.discount);
								if(weeklyPromosArr.indexOf(order.promo.toLowerCase()) < 0) {
									weeklyPromosArr.push(order.promo.toLowerCase());
								}
							} else {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										weeklyBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										weeklyBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								weekNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(ccTotal) + parseFloat(bevNet));
							}
						}
					});
				}
				$scope.weekBevs = weeklyBevs;
				$scope.weekBevsNet = weeklyBevsNet.toFixed(2);
				$scope.weekGrossRevenue = weekGrossRevenue.toFixed(2);
				$scope.weekNetRevenue = weekNetRevenue.toFixed(2);
				$scope.weekOrders = weeklyOrders;
				$scope.weekPromos = weeklyPromos;
				$scope.weekPromosArr = weeklyPromosArr;
				$scope.weekPromosDisc = weeklyPromosDisc.toFixed(2);
			}).catch(function(err) {
				console.log('orders-weekly err:');
				console.log(err);
			});
	
			$http.get('/orders/monthly/' +areaId).then(function(res) {
				var weeksOrders = res.data;

				var weeksBevs = 0;
				var weeksBevsNet = 0;
				var weeksGrossRevenue = 0;
				var weeksNetRevenue = 0;
				var monthlyOrders = 0;
				var monthlyPromos = 0;
				var monthlyPromosArr = [];
				var monthlyPromosDisc = 0;

				if(weeksOrders && weeksOrders.length > 0) {
					weeksOrders.forEach(function(order) {
						var ccTotal = 0;
						var bevNet = 0;
						if(order.orderStatus > 4) {
							monthlyOrders ++;
							weeksGrossRevenue += parseFloat(order.total);
							if(order.discount) {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										weeksBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										weeksBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								weeksNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(order.discount) - parseFloat(ccTotal) + parseFloat(bevNet));
								monthlyPromos ++;
								monthlyPromosDisc = monthlyPromosDisc + parseFloat(order.discount);
								if(monthlyPromosArr.indexOf(order.promo.toLowerCase()) < 0) {
									monthlyPromosArr.push(order.promo.toLowerCase());
								}
							} else {
								if(order.paymentMethods != 'cash') {
									var ccFee = (parseFloat(order.total) * ccPercent).toFixed(2);
									var ccCharge = extraCCCharge;
									ccTotal = parseFloat(ccFee) + parseFloat(ccCharge);
								}
								if(order.bevThings && order.bevThings.length > 0) {
									order.bevThings.forEach(function(bevThing) {
										weeksBevs += bevThing.quantity;
										var thisBevThingEffect = ((bevThing.price * bevThing.quantity) - (bevCost * bevThing.quantity)).toFixed(2);
										weeksBevsNet += parseFloat(thisBevThingEffect);
										bevNet += parseFloat(thisBevThingEffect);
									});
								}
								weeksNetRevenue += (parseFloat(order.deliveryFee) - parseFloat(ccTotal) + parseFloat(bevNet));
							}
						}
					});
				}
				$scope.weeksBevs = weeksBevs;
				$scope.weeksBevsNet = weeksBevsNet.toFixed(2);
				$scope.weeksGrossRevenue = weeksGrossRevenue.toFixed(2);
				$scope.weeksNetRevenue = weeksNetRevenue.toFixed(2);
				$scope.weeksOrders = monthlyOrders;
				$scope.weeksPromos = monthlyPromos;
				$scope.weeksPromosArr = monthlyPromosArr;
				$scope.weeksPromosDisc = monthlyPromosDisc.toFixed(2);
			}).catch(function(err) {
				console.log('orders-monthly err:');
				console.log(err);
			});
	
			$http.get('/customers/allTime/' +areaId).then(function(res) {
				$scope.allTimeSignUps = res.data.length;
			}).catch(function(err) {
				console.log('customers-allTime err:');
				console.log(err);
			});
	
			$http.get('/customers/daily/' +areaId).then(function(res) {
				$scope.daySignUps = res.data;
				$scope.daySignups = res.data.length;
			}).catch(function(err) {
				console.log('customers-daily err:');
				console.log(err);
			});
	
			$http.get('/customers/weekly/' +areaId).then(function(res) {
				$scope.weekSignUps = res.data;
				$scope.weekSignups = res.data.length;
			}).catch(function(err) {
				console.log('customers-weekly err:');
				console.log(err);
			});
	
			$http.get('/customers/monthly/' +areaId).then(function(res) {
				$scope.weeksSignUps = res.data;
				$scope.weeksSignups = res.data.length;
			}).catch(function(err) {
				console.log('customers-monthly err:');
				console.log(err);
			});
	
			$http.get('/applicants/allTime/' +areaId).then(function(res) {
				$scope.allTimeApplicants = res.data.length;
			}).catch(function(err) {
				console.log('applicants-allTime err:');
				console.log(err);
			});
	
			$http.get('/applicants/daily/' +areaId).then(function(res) {
				$scope.dayApplicants = res.data.length;
			}).catch(function(err) {
				console.log('applicants-daily err:');
				console.log(err);
			});
	
			$http.get('/applicants/weekly/' +areaId).then(function(res) {
				$scope.weekApplicants = res.data.length;
			}).catch(function(err) {
				console.log('applicants-weekly err:');
				console.log(err);
			});
	
			$http.get('/applicants/monthly/' +areaId).then(function(res) {
				$scope.weeksApplicants = res.data.length;
			}).catch(function(err) {
				console.log('applicants-monthly err:');
				console.log(err);
			});

		});

	});

	///
	// Controllers: Applicants
	///

	app.controller('ApplicantsListController', function($scope, $http, $routeParams, $rootScope) {
		$scope.areaName = $rootScope.areaName;

		var p = $http.get('/applicants');

		p.error(function(err) {
			console.log('ApplicantsListController: ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.applicants = res.data;
		});
	});


	///
	// Controllers: Customers
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/customers/);
	});

	app.factory('customerSchema', function() {
		function nameTransform(customer) {
			if(! customer || ! customer.fName || customer.fName.length < 1) {
				return 'customer-name';
			}
			return (customer.fName
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				customer: {
					fName: '',
					lName: '',
					addresses: {
						primary: {
							streetNumber: '',
							streetName: '',
							apt: '',
							city: '',
							state: '',
							zip: ''
						}
					},
					username: '',
					password: '',
					phone: '',
					email: ''
				}
			},
	
			populateDefaults: function(customer) {
				$.map(service.defaults.customer, function(value, key) {
					if(customer[key]) return;
					if(typeof value === 'object') {
						customer[key] = angular.copy(value);
						return;
					}
					customer[key] = value;
				});
				return customer;
			}
		};

		return service;
	});

	app.controller('CustomersAddController', function(
		navMgr, messenger, pod, customerSchema,
		$scope, $http, $window, $rootScope
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.customerSchema = customerSchema;
		$scope.customer = customerSchema.populateDefaults({});

		// TODO 
		// clean phone number; integers only

		$scope.save = function save(customer, options) {
			options || (options = {});

			$http.post(
				'/customers/create', customer
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Customer created', '');

				if(options.addMore) {
					$scope.customer = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/customers/' + data.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/customers');
		};
	});


	app.controller('CustomersEditController', function(
		navMgr, messenger, pod, customerSchema, 
		$scope, $http, $routeParams, customerMgmt,
		$window, orderMgmt
	) {

		$scope.customerId = $routeParams.id;

		$scope.completedCount = 0;
		$scope.orderToComplete = false;
		$scope.startOrder = true;

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		var p = $http.get('/orders/byCustomerId/' + $scope.customerId);
	
		p.error(function(err) {
			console.log('CustomersEditController: customers-orders ajax failed');
			console.log(err);
		});
	
		p.then(function(res) {
			var firstOrder = true;
			var today = new Date();
		
			var thisYear = today.getFullYear();
			var thisMonth = today.getMonth();
			var thisDate = today.getDate();
		
			var todayMSecs = new Date(thisYear, thisMonth, thisDate, 0, 0, 0, 0).getTime();

			res.data.forEach(function(order) {
				var thisOrderMSecs = new Date(order.updatedAt).getTime();
				if(firstOrder && order.orderStatus < 9 && thisOrderMSecs > todayMSecs) {
					$scope.assumeOrderId = order.id;
					$scope.orderToComplete = true;
					$scope.startOrder = false;
				}
				if(order.orderStatus > 8) {
					$scope.completedCount ++;
				}
				firstOrder = false;
			});
			$scope.orders = res.data;
			$scope.ordersCount = res.data.length;
		});

		$scope.customerSchema = customerSchema;
		$scope.editMode = true;

		$http.get(
			'/customers/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.customer = customerSchema.populateDefaults(data);
		});

		$scope.save = function save(customer, options) {
			options || (options = {});

			// TODO 
			// clean phone number; integers only

			$http.put(
				'/customers/' + customer.id, customer
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Customer updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.orderHistory = function orderHistory() {
			navMgr.cancel('#/customers/orders/' +$routeParams.id);
		};

		$scope.assumeOrder = orderMgmt.assumeOrder;

		$scope.startOrder = orderMgmt.startOrder;

		$scope.specialCharge = customerMgmt.specialCharge;

		$scope.cancel = function cancel() {
			navMgr.cancel('#/customers');
		};
	});

	app.controller('CustomersOrdersController', function(
		customerSchema,	$scope, $http, $window, $rootScope, $routeParams
	) {

		$http.get('/orders/byCustomerIdCompleted/' + $routeParams.id).then(function(res) {
			var allOrders = res.data;

			allOrders.map(function(order) {
				var d = new Date(order.paymentAcceptedAt);

				var orderYear = d.getFullYear();
				var orderMonth = d.getMonth() + 1;
				var orderDay = d.getDate();

				if(orderMonth < 10) {
					orderMonth = '0'+orderMonth;
				}

				if(orderDay < 10) {
					orderDay = '0'+orderDay;
				}

				order.orderDate = orderYear+'-'+orderMonth+'-'+orderDay;
			});

			$scope.orders = allOrders;
		}).catch(function(err) {
			console.log('CustomersOrdersController orders-byCustomerIdCompleted ajax fail');
			console.log(err);
		});

	});

	app.controller('CustomersSearchController', function(
		customerSchema,	$scope, $http, $window, $rootScope
	) {

		$scope.fNameSearch = function() {
			var p = $http.get('/customers/byFName/' + $scope.fName);
	
			p.error(function(err) {
				console.log('CustomersSearchController: customers-fName ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.customers = res.data;
			});
		};

		$scope.lNameSearch = function() {
			var p = $http.get('/customers/byLName/' + $scope.lName);
	
			p.error(function(err) {
				console.log('CustomersSearchController: customers-lName ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.customers = res.data;
			});
		}

		$scope.phoneSearch = function() {
			var p = $http.get('/customers/byPhone/' + $scope.phone);
	
			p.error(function(err) {
				console.log('CustomersSearchController: customers-phone ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.customers = res.data;
			});
		}

	});


	app.controller('ChargeController', function(
		messenger, $scope, $http, args, $modalInstance
	) {
		var p = $http.get('/customers/' + args.customerId).then(function(res) {
			$scope.customer = res.data;
		}).catch(function(err) {
			console.log('ChargeController: customers ajax failed');
			console.log(err);
		});

		$scope.makeCharge = function() {
			var r = $http.post('/checkout/processPayment', {customer: $scope.customer, paymentMethodId: $scope.selMethod, amount: $scope.amount}).then(function(res) {
				return $modalInstance.dismiss('done');
				messenger.show('Charge processed', '');
			}).catch(function(err) {
				// if orders ajax fails...
				console.log('ChargeController: makeCharge-processPayment ajax failed');
				// console.error(err);
				$scope.paymentFailed = true;
			});
		};
	});


	///
	// Controllers: Dispatch
	///

	app.controller('DispatchController', function(
		$scope, $http, $routeParams, $rootScope, 
		$window, deviceMgr, authMgr, $timeout
	) {

		if(deviceMgr.isBigScreen()) {
			$scope.showBig = true;
		} else {
			$scope.showBig = false;
		}

		function refreshData() {
			// assure that the page is still the same
			// using hash instead of pathname
			if(!location.hash.match('dispatch')) {
				return;
			}

			var currentHours = new Date().getHours();
			var currentMinutes = new Date().getMinutes();
			var ampm = 'am';
	
			if(currentHours > 11) {
				ampm = 'pm';
				if(currentHours > 12) {
					currentHours -= 12;;
				}
			}
	
			if(currentMinutes < 10) {
				currentMinutes = '0'+currentMinutes;
			}
	
			$scope.currentDisplayTime = currentHours+':'+currentMinutes+' '+ampm;

			var authPromise = authMgr.getAuthLevel();
	
			authPromise.then(function(authData) {
	
				$scope.authUserId = authData.userId;
				$scope.authLevel = authData.authLevel;

				var allOrdersTime = 0;
				var allOrdersCount = 0;
	
				var p = $http.get('/orders/daily/');
			
				p.error(function(err) {
					console.log('DispatchController: orders-daily ajax failed');
					console.log(err);
				});
			
				p.then(function(res) {
					res.data.forEach(function(order) {
						if(order.orderStatus > 8) {
							var thisOrderTime = (order.orderDeliveredAt - order.paymentAcceptedAt);
							allOrdersTime += thisOrderTime;
							allOrdersCount ++;
						}
					});

					if(allOrdersTime > 0 && allOrdersCount > 0) {
						var formattedAvg = ((allOrdersTime / 1000) / allOrdersCount).toString();
	
						$scope.avgColor = 'green';
						if(parseInt(formattedAvg) > 2700 && parseInt(formattedAvg) <= 3600) {
							$scope.avgColor = 'orange';
						} else if(parseInt(formattedAvg) > 3600) {
							$scope.avgColor = 'red';
						}
	
						var formattedAvgAgeHour = Math.floor(parseInt(formattedAvg) / 3600);
						var formattedAvgAgeSec = parseInt(formattedAvg) % 60;
				
						if(formattedAvgAgeSec < 10) {
							formattedAvgAgeSec = '0' + formattedAvgAgeSec;
						}
				
						if(formattedAvgAgeHour > 0) {
							var formattedAvgAgeMin = Math.floor(parseInt(formattedAvg - (formattedAvgAgeHour * 3600)) / 60);
							if(formattedAvgAgeMin < 10) {
								formattedAvgAgeMin = '0' + formattedAvgAgeMin;
							}
							$scope.averageOrderTime = formattedAvgAgeHour + ':' + formattedAvgAgeMin + ':' + formattedAvgAgeSec;
						} else {
							var formattedAvgAgeMin = Math.floor(parseInt(formattedAvg) / 60);
							$scope.averageOrderTime = formattedAvgAgeMin + ':' + formattedAvgAgeSec;
						}
					} else {
						$scope.avgColor = 'black';
						$scope.averageOrderTime = 'NA';
					}

					res.data.map(function(order) {
						var orderDate = new Date(order.updatedAt);
						var orderDateSecsPre = orderDate.getTime();
						var orderDateSecsPost = orderDateSecsPre - 21600;
						var ampm = 'am';
						order.updatedYear = new Date(orderDateSecsPost).getFullYear();
						order.updatedMonth = new Date(orderDateSecsPost).getMonth() + 1;
						order.updatedDate = new Date(orderDateSecsPost).getDate();
						if(order.updatedMonth.toString().length < 2) {
							order.updatedMonth = '0'+order.updatedMonth.toString();
						}
						if(order.updatedDate.toString().length < 2) {
							order.updatedDate = '0'+order.updatedDate.toString();
						}
						order.updatedAtDate = order.updatedYear+'-'+order.updatedMonth+'-'+order.updatedDate;
						order.updatedHours = new Date(orderDateSecsPost).getHours();
						order.updatedMinutes = new Date(orderDateSecsPost).getMinutes();
						if(order.updatedHours > 12) {
							ampm = 'pm';
							order.updatedHours = order.updatedHours - 12;
						}
						if(order.updatedHours.toString().length < 2) {
							order.updatedHours = '0'+order.updatedHours.toString();
						}
						if(order.updatedMinutes.toString().length < 2) {
							order.updatedMinutes = '0'+order.updatedMinutes.toString();
						}
						order.updatedAtTime = order.updatedHours+':'+order.updatedMinutes;
						order.updatedAt = order.updatedAtDate+' '+order.updatedAtTime+' '+ampm;
						order.total = parseFloat(order.total).toFixed(2);

						if(order.paymentMethods === 'cash') {
							order.payType = 'cash';
						} else {
							order.payType = 'cc';
						}
		
						var now = new Date().getTime();
		
						if(order.paymentAcceptedAt) {
							var old = (now - order.paymentAcceptedAt).toString();
			
							var formattedNow = old.substr(0, (old.length - 3)); 
			
							var formattedAgeHour = Math.floor(parseInt(formattedNow) / 3600);
							var formattedAgeSec = parseInt(formattedNow) % 60;
			
							if(formattedAgeSec < 10) {
								formattedAgeSec = '0' + formattedAgeSec;
							}
			
							if(formattedAgeHour > 0) {
								var formattedAgeMin = Math.floor(parseInt(formattedNow - (formattedAgeHour * 3600)) / 60);
								if(formattedAgeMin < 10) {
									formattedAgeMin = '0' + formattedAgeMin;
								}
								order.finalAge = formattedAgeHour + ':' + formattedAgeMin + ':' + formattedAgeSec;
							} else {
								var formattedAgeMin = Math.floor(parseInt(formattedNow) / 60);
								order.finalAge = formattedAgeMin + ':' + formattedAgeSec;
							}
		
							if(order.orderStatus > 8 && order.orderDeliveredAt && order.paymentAcceptedAt) {
								var timeToDelivery = parseInt(order.orderDeliveredAt) - parseInt(order.paymentAcceptedAt);
		
								var formattedNow = timeToDelivery.toString().substr(0, (timeToDelivery.toString().length - 3)); 
				
								var formattedAgeHour = Math.floor(parseInt(formattedNow) / 3600);
								var formattedAgeSec = parseInt(formattedNow) % 60;
				
								if(formattedAgeSec < 10) {
									formattedAgeSec = '0' + formattedAgeSec;
								}
				
								if(formattedAgeHour > 0) {
									var formattedAgeMin = Math.floor(parseInt(formattedNow - (formattedAgeHour * 3600)) / 60);
									if(formattedAgeMin < 10) {
										formattedAgeMin = '0' + formattedAgeMin;
									}
									order.timeToDelivery = formattedAgeHour + ':' + formattedAgeMin + ':' + formattedAgeSec;
								} else {
									var formattedAgeMin = Math.floor(parseInt(formattedNow) / 60);
									order.timeToDelivery = formattedAgeMin + ':' + formattedAgeSec;
								}
							}
		
						} else {
							order.finalAge = 'Pending';
						}
		
						// TODO
						// put this in a config? or what?
						// orderStatus map
						// < 1 = not started
						// 1   = started (ordering)
						// 2   = payment initiated
						// 3   = payment accepted
						// 4   = payment declined
						// 5   = order completed
						// 6   = order ordered (at restaurant)
						// 7   = order collected (from restaurant)
						// 8   = order en route
						// 9   = order delivered
						
						var orderStatusMap = [
							'No status',
							'Ordering',
							'Payment Initiated',
							'Payment Not Processed',
							'Payment Declined',
							'Payment Accepted',
							'Order Placed',
							'Order Picked up',
							'Order En Route',
							'Order Delivered'
						];
		
						order.currStatus = orderStatusMap[order.orderStatus];
			
						if(order.things.length > 0) {
							order.restaurants = '';
							var firstRest = true;
							order.things.forEach(function(thing) {
								if(!order.restaurants.match(thing.restaurantName)) {
									if(firstRest) {
										order.restaurants = thing.restaurantName;
										firstRest = false;
									} else {
										order.restaurants = order.restaurants + ', ' + thing.restaurantName;
									}
								}
							});
						}
		
						if(order.driverId) {
							var r = $http.get('/users/' + order.driverId);
						
							r.error(function(err) {
								console.log('DispatchController: users ajax failed');
								console.log(err);
							});
						
							r.then(function(res) {
								order.driver = res.data.fName;
							});
						}
		
						if(order.customerId) {
							var r = $http.get('/customers/' + order.customerId);
						
							r.error(function(err) {
								console.log('DispatchController: customers ajax failed');
								console.log(err);
							});
						
							r.then(function(res) {
								order.destination = res.data.addresses.primary.streetNumber+' '+res.data.addresses.primary.streetName;
							});
						} else {
							order.destination = 'not entered yet';
						}
					});
			
					$scope.orders = res.data;
				});
			});

			$timeout(function() {
				refreshData();
			}, 30000);
		}
		refreshData();
	});


	///
	// Controllers: Dispatch Order
	///

	app.controller('DispatchOrderController', function(
		$scope, $http, $routeParams, $rootScope,
		$window, messenger, dispatchOrderMgmt, authMgr
	) {
		var authPromise = authMgr.getAuthLevel();

		authPromise.then(function(authData) {

			$scope.authLevel = authData.authLevel;

			if(authData.authLevel < 3) {
				$window.location.href = '#/';
			}

			$http.get('/orders/' + $routeParams.id).then(function(res) {
				$scope.order = res.data;
	
				$http.get('/users/drivers/').then(function(res) {
					$scope.drivers = res.data;
				}).catch(function(err) {
					console.log('DispatchOrderController drivers ajax error:');
					console.log(err);
				});
			}).catch(function(err) {
				console.log('DispatchOrderController orders ajax error:');
				console.log(err);
			});
	
			$scope.dispatchOrderToDriver = dispatchOrderMgmt.dispatchOrder;
	
		});

	});


	///
	// Controllers: Dispatch Order to Driver
	///

	app.controller('DispatchOrderToDriverController', function(
		$scope, $http, $routeParams, $rootScope,
		$location, messenger, args, $modalInstance
	) {

		$http.get('/orders/' + args.orderId).then(function(res) {
			$scope.order = res.data;

			var rests = [];
			$scope.order.things.forEach(function(thing) {
				if(rests.indexOf(thing.restaurantName) < 0) {
					rests.push(thing.restaurantName);
				}
			});
		
			$scope.addRests = 0;
			if(rests.length > 1) {
				$scope.addRests = rests.length - 1;
			}
		
			$scope.restNames = '';
			var firstName = true;
			rests.forEach(function(rest) {
				if(firstName) {
					$scope.restNames = rest;
					firstName = false;
				} else {
					if(rests.indexOf(rest) < $scope.addRests) {
						$scope.restNames = $scope.restNames + ', ' + rest;
					} else {
						$scope.restNames = $scope.restNames + ' and ' + rest;
					}
				}
			})

			$http.get('/users/' + args.driverId).then(function(res) {
				$scope.driver = res.data;
			}).catch(function(err) {
				console.log('DispatchOrderToDriverController users ajax failed');
				console.log(err);
			});
		}).catch(function(err) {
			console.log('DispatchOrderToDriverController orders ajax failed');
			console.log(err);
		});

		$scope.dispatchOrder = function() {
			if(! args.orderId && args.driverId) {
				console.log('dispatchOrder args not present');
				$modalInstance.dismiss('cancel');
			}

			$scope.order.driverId = args.driverId;
			if($scope.readyMins && $scope.readyMins > 0) {
				$scope.order.readyMins = $scope.readyMins;
			} else {
				$scope.order.readyMins = '0';
			}

			$http.put(
				'/orders/' + $scope.order.id, $scope.order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				$http.get(
					'/mail/sendOrderToDriver/'+$scope.order.id
				).then(function(res) {
//					console.log('res:');
//					console.log(res);
//					if(res.statusText === 'OK') {
//					} 
				});
				messenger.show('Order dispatched', '');

				var redirectTo = '/dispatch';
				$location.path(redirectTo);

				return $modalInstance.dismiss('done');
			});
		};
	});


	///
	// Controllers: Drivers
	///

	app.controller('DriversReportsController', function(
		$scope, $http, $rootScope, authMgr
	) {
		var authPromise = authMgr.getAuthLevel();

		authPromise.then(function(authData) {

			$scope.authLevel = authData.authLevel;

			if(authData.authLevel < 3) {
				$window.location.href = '#/';
			}

			$http.get('/users/active/').then(function(res) {
				$scope.drivers = res.data;
			}).catch(function(err) {
				console.log('DriversReportsController users-activeByAreaId ajax failed');
				console.log(err);
			});
	
		});

	});



	app.factory('emailListSchema', function() {
		var service = {
			defaults: {
				email: {
					email: '',
					fName: '',
					active: '',
				}
			},

			populateDefaults: function(email) {
				$.map(service.defaults.email, function(value, key) {
					if(email[key]) return;
					if(typeof value === 'object') {
						email[key] = angular.copy(value);
						return;
					}
					email[key] = value;
				});
				return email;
			}
		};

		return service;
	});

	app.controller('EmailListAddController', function(
		navMgr, messenger, pod,
		$scope, $http, $window, $rootScope
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.save = function save(email, options) {
			email.active = true;

			options || (options = {});

			$http.post(
				'/emails/create', email
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Email added', '');

				navMgr.protect(false);
				$window.location.href = '#/emailList/search';
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/emailList/search');
		};
	});

	app.controller('EmailListEditController', function(
		navMgr, messenger, pod, emailListSchema, $scope, $http, $routeParams
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.emailListSchema = emailListSchema;
		$scope.editMode = true;

		$http.get(
			'/emails/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.email = emailListSchema.populateDefaults(data);
		});

		$scope.save = function save(email, options) {
			options || (options = {});

			$http.put(
				'/emails/' + email.id, email
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Email list updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/emailList/search');
		};
	});

	app.controller('EmailListSearchController', function(
		emailListSchema,	$scope, $http, $window, $rootScope
	) {
		
		var authLevelMap = [
			'None',
			'Basic',
			'Driver',
			'Operator',
			'Manager'
		];

		$scope.fNameSearch = function() {
			var p = $http.get('/emails/byFName/' + $scope.fName);
	
			p.error(function(err) {
				console.log('EmailListSearchController: emails-fName ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.emails = res.data;
			});
		};

		$scope.emailSearch = function() {
			var p = $http.get('/emails/byEmail/' + $scope.email);
	
			p.error(function(err) {
				console.log('EmailListSearchController: emails-phone ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.emails = res.data;
			});
		}

	});


	///
	// Messages
	///
	

	app.controller('MessagesListController', function($scope, $http, $routeParams, $rootScope) {

		$scope.path = 'messages';

		var r = $http.get('/messages/');

		r.error(function(err) {
			console.log('MessagesListController: messages ajax failed');
			console.log(err);
		});

		r.then(function(res) {
			$scope.messages = res.data;
		});

	});


	app.controller('MessageDetailsController', function($scope, $http, $routeParams, $rootScope) {
		var messageId = $routeParams.id;

		var p = $http.get('/messages/' + messageId);

		p.error(function(err) {
			console.log('MessageDetailsController: message ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.message = res.data;
		});
	});


	app.controller('MessageSendController', function(
		$scope, $http, $routeParams, $rootScope, 
		messageMgmt, $modalInstance, messenger,
		$window
	) {


		$scope.sendMassMessage = function() {
			var message = {};

			message.mType = $scope.mType;
			if($scope.rType) {
				message.rType = $scope.rType;
			}

			message.content = $scope.content;
			message.subject = $scope.subject;

			$http.post('/messages/create', message).success(
			function(data, status, headers, config) {
				messenger.show('Message queued', '');
				if(message.mType === 'email') {
					$http.post('/blaster/sendEmail/'+data.id);
					$window.location.href = '#/messages';
					return $modalInstance.dismiss('done');
				} else if(message.mType === 'text') {
					$http.post('/blaster/sendText/'+data.id);
					$window.location.href = '#/messages';
					return $modalInstance.dismiss('done');
				} else {
					console.log('BAD message:');
					console.log(message);
				}
			});
		}

	});


	///
	// Controllers: Order
	///

	app.controller('OrderDetailsController', function(
		$scope, $http, $routeParams, $rootScope, 
		$q, $sce, configMgr, querystring, messenger,
		$window, $timeout
	) {

		function refreshData() {
			// assure that the page is still the same
			// using hash instead of pathname
			if(!location.hash.match('orderDetails')) {
				return;
			}

			$scope.authLevel = $rootScope.authLevel;
	
			// $scope.orderRestaurants = [
			//   {
			//     name: ...
			//     items: [
			//       name: ...
			//       quantity: ...
			//       option: ...
			//     ]
			//   }
			// ];
			$scope.orderRestaurants = [];
	
			var p = $http.get('/orders/' + $routeParams.id);
		
			p.error(function(err) {
				console.log('OrderDetailsController: order ajax failed');
				console.log(err);
			});
		
			p.then(function(res) {
				$scope.order = res.data;
				$scope.orderStatus = $scope.order.orderStatus;
				$scope.dispatchReceived = parseInt('0');
				if($scope.order.dispatchReceived) {
					$scope.dispatchReceived = $scope.order.dispatchReceived;
				}
				$scope.paymentMethod = $scope.order.paymentMethods;
				$scope.deliveryFee = '$'+parseFloat($scope.order.deliveryFee).toFixed(2);
				$scope.discount = '$'+parseFloat($scope.order.discount).toFixed(2);
				if($scope.order.gratuity) {
					$scope.gratuity = '$'+parseFloat($scope.order.gratuity).toFixed(2);
				} else {
					$scope.gratuity = '$0.00';
				}
				$scope.total = '$'+parseFloat($scope.order.total).toFixed(2);
				var subplustax = parseFloat($scope.order.subtotal) + parseFloat($scope.order.tax);
				$scope.subplustax = '$'+parseFloat(subplustax).toFixed(2);
				$scope.discountPercent = 0;
				$scope.bevThings = $scope.order.bevThings;
				$scope.order.things.forEach(function(thing) {
					$scope.getRestaurantName(thing.optionId).then(function(restaurantData) {
						var restaurant = _.find($scope.orderRestaurants, {name: restaurantData.name});
						if(! restaurant) {
							restaurant = {name: restaurantData.name, phone: restaurantData.phone, items: []};
							$scope.orderRestaurants.push(restaurant);
						}
						// TODO: build an array (if more than one rest w/discount
						// and ng-repeat loop through on the template
						if(restaurantData.discountPercent) {
							$scope.discountPercent = restaurantData.discountPercent;
							$scope.discountPercentRestName = restaurantData.name;
						}
						restaurant.items.push(
							_.pick(thing, ['quantity', 'name', 'option', 'specInst', 'price'])
						);
					});
				});
	
				var r = $http.get('/customers/' + $scope.order.customerId);
				
				r.error(function(err) {
					console.log('OrderDetailsController: customer ajax failed');
					console.log(err);
				});
				
				r.then(function(res) {
					$scope.customer = res.data;
					if($scope.customer.addresses.primary.apt) {
						$scope.apt = $scope.customer.addresses.primary.apt;
					}
					$scope.fName = $scope.customer.fName;
					$scope.lName = $scope.customer.lName;
					$scope.phone = $scope.customer.phone;
					$scope.address = $scope.customer.addresses.primary.streetNumber+' '+$scope.customer.addresses.primary.streetName+' '+$scope.customer.addresses.primary.city;
	
					$scope.src = $sce.trustAsResourceUrl(
						'https://www.google.com/maps/embed/v1/place?' + querystring.stringify({
							key: configMgr.config.vendors.googleMaps.key,
							q: ([
								$scope.customer.addresses.primary.streetNumber,
								$scope.customer.addresses.primary.streetName,
								$scope.customer.addresses.primary.city,
								$scope.customer.addresses.primary.state,
								$scope.customer.addresses.primary.zip
							].join('+'))
						})
					);
				});
			});

			$timeout(function() {
				refreshData();
			}, 120000);
		}
		refreshData();

		$scope.setOrderPlaced = function(order) {
			order.orderStatus = parseInt(6);
			order.orderPlacedAt = new Date().getTime();
			$http.put(
				'/orders/' + order.id, order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Order placed', '');

				$window.location.href = '#/dispatch/';
			});
		}

		$scope.setDispatchReceived = function(order) {
			order.dispatchReceived = new Date().getTime();
			$http.put(
				'/orders/' + order.id, order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Dispatch confirmed', '');

				refreshData();
			});
		}

		$scope.setOrderCollected = function(order) {
			order.orderStatus = parseInt(7);
			order.orderCollectedAt = new Date().getTime();
			$http.put(
				'/orders/' + order.id, order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Order collected', '');

				refreshData();
			});
		}

		$scope.setOrderEnRoute = function(order) {
			order.orderStatus = parseInt(8);
			order.orderEnRouteAt = new Date().getTime();
			$http.put(
				'/orders/' + order.id, order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Order en route', '');

				refreshData();
			});
		}

		$scope.setOrderDelivered = function(order) {
			order.orderStatus = parseInt(9);
			order.orderDeliveredAt = new Date().getTime();
			$http.put(
				'/orders/' + order.id, order
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Order delivered', '');

				$window.location.href = '#/dispatch/';
			});
		}

	});


	///
	// Controllers: Promos
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/promos/);
	});

	app.factory('promoSchema', function() {
		function nameTransform(promo) {
			if(! promo || ! promo.name || promo.name.length < 1) {
				return 'promo-name';
			}
			return (promo.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				promo: {
					name: '',
					uses: '',
					expires: '',
					effect: '',
					amount: ''
				}
			},

			populateDefaults: function(promo) {
				$.map(service.defaults.promo, function(value, key) {
					if(promo[key]) return;
					if(typeof value === 'object') {
						promo[key] = angular.copy(value);
						return;
					}
					promo[key] = value;
				});

				return promo;
			}
		};

		return service;
	});

	app.controller('PromosListController', function($scope, $http, $routeParams, $rootScope) {

		$scope.path = 'promos';

		var r = $http.get('/promos/');

		r.error(function(err) {
			console.log('PromosListController: promos ajax failed');
			console.log(err);
		});

		r.then(function(res) {
			$scope.promos = res.data;
		});

	});

	app.controller('PromosAddController', function(
		navMgr, messenger, pod, promoSchema, $scope, $http, $routeParams, $window
	) {
		
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.promoSchema = promoSchema;
		$scope.promo = promoSchema.populateDefaults({});

		$scope.save = function save(promo, options) {

			options || (options = {});

			$http.post(
				'/promos/create', promo
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Promo created', '');

				if(options.addMore) {
					$scope.promo = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/promos/';
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/');
		};
	});

	app.controller('PromosEditController', function(
		navMgr, messenger, pod, promoSchema, $scope, $http, $routeParams
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.promoSchema = promoSchema;
		$scope.editMode = true;

		$http.get(
			'/promos/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.promo = promoSchema.populateDefaults(data);
		});

		$scope.save = function save(promo, options) {

			options || (options = {});

			$http.put(
				'/promos/' + promo.id, promo
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Promo updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/');
		};
	});


	///
	// Controllers: Shifts
	///

	app.controller('DriverShiftsListController', function(
		$scope, $http, $routeParams, $rootScope, authMgr
	) {
		$scope.areaName = $rootScope.areaName;

		var driverId = $routeParams.id;

		$scope.driverId = driverId;

		var authPromise = authMgr.getAuthLevel();

		authPromise.then(function(authData) {

			$scope.authLevel = authData.authLevel;

			var shiftsHistory = [];

			// first get historic shifts
			$http.get('/shifts/byDriverId/'+driverId).then(function(shifts) {
				if(shifts && shifts.data && shifts.data.length > 0) {
					shifts.data.forEach(function(shift) {
						var thisShift = {};
						thisShift.id = shift.id;
						thisShift.date = shift.date;
						thisShift.net = shift.net;
						thisShift.reconciledBy = shift.reconciledBy;
	
						shiftsHistory.push(thisShift);
					});
				}

				// next get current shift
				$http.get('/orders/byDriverIdToday/' +driverId).then(function(orders) {
					if(orders && orders.data && orders.data.length > 0) {
						var currentShift = {};
						var currentTotalTips = 0;
						var currentCashCollected = 0;
						var first = true;
						var currentDate;
						orders.data.forEach(function(order) {
							if(order.paymentMethods === 'cash') {
								currentCashCollected += parseFloat(order.total);
							} else {
								if(order.gratuity && parseFloat(order.gratuity) > 0) {
									currentTotalTips += parseFloat(order.gratuity);
								}
							}
							if(first) {
								var currentDateYear = new Date(order.paymentAcceptedAt).getFullYear();
								var currentDateMonth = new Date(order.paymentAcceptedAt).getMonth() + 1;
								var currentDateDate = new Date(order.paymentAcceptedAt).getDate();

								if(currentDateMonth < 10) {
									currentDateMonth = '0'+currentDateMonth;
								}
		
								if(currentDateDate < 10) {
									currentDateDate = '0'+currentDateDate;
								}
		
								currentDate = currentDateYear+''+currentDateMonth+''+currentDateDate;
							}

							first = false;
						});

						currentShift.date = currentDate;
						currentShift.net = '$'+(parseFloat(currentTotalTips) - parseFloat(currentCashCollected)).toFixed(2);
						currentShift.reconciledBy = 'PENDING';
	
						shiftsHistory.push(currentShift);
					}
				}).catch(function(err) {
					console.log('ShiftsList: orders-err:');
					console.log(err);
				});
			}).catch(function(err) {
				console.log('ShiftsList: shifts-err:');
				console.log(err);
			});

			$scope.shifts = shiftsHistory;
	
		});
	});

	app.controller('DriverShiftReconcileController', function(
		$scope, $http, $routeParams, $rootScope, authMgr, deviceMgr
	) {
		$scope.areaName = $rootScope.areaName;

		if(deviceMgr.isBigScreen()) {
			$scope.showBig = true;
		} else {
			$scope.showBig = false;
		}

		var currentHours = new Date().getHours();
		var currentMinutes = new Date().getMinutes();
		var ampm = 'am';
	
		if(currentHours > 11) {
			ampm = 'pm';
			if(currentHours > 12) {
				currentHours -= 12;;
			}
		}
	
		if(currentMinutes < 10) {
			currentMinutes = '0'+currentMinutes;
		}
	
		$scope.currentDisplayTime = currentHours+':'+currentMinutes+' '+ampm;

		var rtParamPcs = $routeParams.id.split('-date-');

		var driverId = rtParamPcs[0];
		var shiftDate = rtParamPcs[1];

		$scope.driverId = driverId;

		var authPromise = authMgr.getAuthLevel();

		authPromise.then(function(authData) {

			$scope.authLevel = authData.authLevel;

			// get orders for specified driver and date
			$http.get('/orders/byDriverIdDate/' +$routeParams.id).then(function(orders) {
				if(orders && orders.data && orders.data.length > 0) {
					var driverOrders = orders.data;

					var completeOrders = [];
					var currentCashCollected = 0;
					var currentTotalTips = 0;
					var numberOrders = 0;

					driverOrders.forEach(function(order) {
						var getCompleteOrderPromise = getCompleteOrder(order);

						getCompleteOrderPromise.then(function(completeOrder) {
							numberOrders ++;
							completeOrders.push(completeOrder);

							if(completeOrder.paymentMethods === 'cash') {
								currentCashCollected += parseFloat(completeOrder.total);
							}
							if(completeOrder.gratuity && parseFloat(completeOrder.gratuity) > 0) {
								currentTotalTips += parseFloat(completeOrder.gratuity);
							}

							$scope.numberOrders = numberOrders;
							$scope.currentCashCollected = '$' + parseFloat(currentCashCollected).toFixed(2);
							$scope.currentTotalTips = '$' + parseFloat(currentTotalTips).toFixed(2);
							$scope.currentNet = '$' + (parseFloat(currentTotalTips) - parseFloat(currentCashCollected)).toFixed(2);
							$scope.currentNetValue = (parseFloat(currentTotalTips) - parseFloat(currentCashCollected));

						});

					});

					$scope.orders = completeOrders;

				}
			}).catch(function(err) {
				console.log('DriverShiftReconcileController: driver-date-orders err:');
				console.log(err);
			});
		});

		function getCompleteOrder(order) {
			var thisDriverOrder = {};
			var customerId = order.customerId;

			thisDriverOrder.paymentMethods = order.paymentMethods;
			if(order.gratuity) {
				thisDriverOrder.gratuity = parseFloat(order.gratuity).toFixed(2);
			} else {
				thisDriverOrder.gratuity = '0.00';
			}
			thisDriverOrder.total = parseFloat(order.total).toFixed(2);

			// get destination address info for each order
			return $http.get('/customers/'+customerId).then(function(customers) {
				if(customers && customers.data) {
					var customer = customers.data;
					var destinationAddress = customer.addresses.primary.streetNumber+' '+customer.addresses.primary.streetName;
					thisDriverOrder.destination = destinationAddress;
				} else {
					console.log('DriverShiftReconcileController: order-customers empty');
					thisDriverOrder.destination = '';
				}
				return thisDriverOrder;
			}).catch(function(err) {
				console.log('DriverShiftReconcileController: order-customers err:');
				console.log(err);
			});
		};
	});

	app.controller('ShiftViewController', function(navMgr, messenger, pod, $scope, $http, $routeParams, $window, $rootScope) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.save = function save(story) {

			$http.post(
				'/stories/create', story
			).success(function(data, status, headers, config) {
				if(status >= 400) return;
		
				messenger.show('Story created', '');
		
				navMgr.protect(false);
				$window.location.href = '#/stories/' + data.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/stories');
		};
	});


	///
	// Controllers: Stories
	///

	app.controller('StoriesListController', function($scope, $http, $routeParams, $rootScope) {
		$scope.areaName = $rootScope.areaName;

		var p = $http.get('/stories/');

		p.error(function(err) {
			console.log('StoriesListController: ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.stories = res.data;
		});
	});

	app.controller('StoriesAddController', function(navMgr, messenger, pod, $scope, $http, $routeParams, $window, $rootScope) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.save = function save(story) {

			$http.post(
				'/stories/create', story
			).success(function(data, status, headers, config) {
				if(status >= 400) return;
		
				messenger.show('Story created', '');
		
				navMgr.protect(false);
				$window.location.href = '#/stories/' + data.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/stories');
		};
	});


	///
	// Controllers: Categories
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/categories/);
	});

	app.factory('categorySchema', function() {
		function nameTransform(category) {
			if(! category || ! category.name || category.name.length < 1) {
				return 'category-name';
			}
			return (category.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				category: {
					name: ''
				}
			},

			links: {
				website: {
					placeholder: function(category) {
						return 'www.' + nameTransform(category) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},

			populateDefaults: function(category) {
				$.map(service.defaults.category, function(value, key) {
					if(category[key]) return;
					if(typeof value === 'object') {
						category[key] = angular.copy(value);
						return;
					}
					category[key] = value;
				});
				return category;
			}
		};

		return service;
	});

	app.controller('CategoriesListController', function($scope, $http, $routeParams) {
		$scope.path = 'categories';

		var p = $http.get('/categories/' + $routeParams.id);

		p.error(function(err) {
			console.log('CategoriesListController: category ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.category = res.data;
		});

		var r = $http.get('/categories/');

		r.error(function(err) {
			console.log('CategoriesListController: categories ajax failed');
			console.log(err);
		});

		r.then(function(res) {
			$scope.categories = res.data;
		});

	});


	app.controller('CategoriesAddController', function(
		navMgr, messenger, pod, categorySchema, $scope, $http, $routeParams, $window
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.categorySchema = categorySchema;
		$scope.category = categorySchema.populateDefaults({});

		$scope.save = function save(category, options) {

			var p = $http.get('/categories/' + $routeParams.id);
		
			p.error(function(err) {
				console.log('CategoriesAddController: restaurant ajax failed');
				console.log(err);
			});
		
			p.then(function(res) {

				options || (options = {});
		
				$http.post(
					'/categories/create', category
				).success(function(data, status, headers, config) {
					if(status >= 400) return;
		
					messenger.show('Category created', '');
		
					if(options.addMore) {
						$scope.category = {};
						return;
					}
		
					navMgr.protect(false);
					$window.location.href = '#/categories/' + $routeParams.id;
				});
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/categories/'+$routeParams.id);
		};
	});

	app.controller('CategoriesEditController', function(
		navMgr, messenger, pod, categorySchema, $scope, $http, $routeParams
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.categorySchema = categorySchema;
		$scope.editMode = true;

		$http.get(
			'/categories/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.category = categorySchema.populateDefaults(data);
		});

		$scope.save = function save(category, options) {

			options || (options = {});

			$http.put(
				'/categories/' + category.id, category
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Category updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/categories/');
		};
	});


	///
	// Controllers: Popcorn
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/popcorn/);
	});

	app.factory('popcornSchema', function() {
		function nameTransform(popcorn) {
			if(! popcorn || ! popcorn.name || popcorn.name.length < 1) {
				return 'popcorn-name';
			}
			return (popcorn.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				popcorn: {
					name: '',
					description: '',
					category: '',
					active: '',
					months: []
				}
			},

			links: {
				website: {
					placeholder: function(popcorn) {
						return 'www.' + nameTransform(popcorn) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},

			populateDefaults: function(popcorn) {
				$.map(service.defaults.popcorn, function(value, key) {
					if(popcorn[key]) return;
					if(typeof value === 'object') {
						popcorn[key] = angular.copy(value);
						return;
					}
					popcorn[key] = value;
				});
				return popcorn;
			}
		};

		return service;
	});

	app.controller('PopcornListController', function(datatables, $http, $routeParams, $scope) {
		$scope.path = 'popcorn';

		var p = $http.get('/categories/' + $routeParams.id);

		p.error(function(err) {
			console.log('PopcornListController: category ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.category = res.data;
		});

		var r = $http.get('/popcorn/byCategoryId/' + $routeParams.id);

		r.error(function(err) {
			console.log('CategoriesListController: popcorn ajax failed');
			console.log(err);
		});

		r.then(function(res) {
			$scope.popcorn = res.data;
		});

	});

	app.controller('PopcornAddController', function(
		navMgr, messenger, pod, popcornSchema, $scope, $http, $routeParams, $window
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.popcornSchema = popcornSchema;
		$scope.popcorn = popcornSchema.populateDefaults({});

		$scope.popcorn.categoryId = $routeParams.id;
		$scope.popcorn.active = true;

		$scope.imageCropResult = null;
		$scope.showImageCropper = false;

		$scope.$watch('imageCropResult', function(image) {
			if($scope.popcorn) {
				$scope.popcorn.image = image;
			}
		});

		$scope.save = function save(popcorn, options) {
			options || (options = {});

			$http.post(
				'/popcorn/create', popcorn
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Item created', '');

				if(options.addMore) {
					$scope.popcorn = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/popcorn/' + $routeParams.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/popcorn/'+$routeParams.id);
		};
	});

	app.controller('PopcornEditController', function(
		navMgr, messenger, pod, popcornSchema, $scope, $http, $routeParams
	) {
		
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.popcornSchema = popcornSchema;
		$scope.editMode = true;

		$http.get(
			'/popcorn/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.popcorn = popcornSchema.populateDefaults(data);
		});

		$scope.imageCropResult = null;
		$scope.showImageCropper = false;

		$scope.$watch('imageCropResult', function(image) {
			if($scope.popcorn) {
				$scope.popcorn.image = image;
			}
		});

		$scope.save = function save(popcorn, options) {
			options || (options = {});

			$http.put(
				'/popcorn/' + popcorn.id, popcorn
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Item updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/popcorn');
		};
	});


	///
	// Controllers: Options
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/options/);
	});

	app.factory('optionSchema', function() {
		function nameTransform(option) {
			if(! option || ! option.name || option.name.length < 1) {
				return 'option-name';
			}
			return (option.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				option: {
					popcornId: '',
					name: '',
					price: ''
				}
			},

			links: {
				website: {
					placeholder: function(option) {
						return 'www.' + nameTransform(option) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},

			populateDefaults: function(option) {
				$.map(service.defaults.option, function(value, key) {
					if(option[key]) return;
					if(typeof value === 'object') {
						option[key] = angular.copy(value);
						return;
					}
					option[key] = value;
				});
				return option;
			}
		};

		return service;
	});

	app.controller('OptionsListController', function(datatables, $http, $routeParams, $scope) {
		$scope.path = 'options';

		var p = $http.get('/popcorn/' + $routeParams.id);

		p.error(function(err) {
			console.log('PopcornListController: popcorn ajax failed');
			console.log(err);
		});

		p.then(function(res) {
			$scope.popcorn = res.data;
		});

		var r = $http.get('/options/byPopcornId/' + $routeParams.id);

		r.error(function(err) {
			console.log('CategoriesListController: popcorn ajax failed');
			console.log(err);
		});

		r.then(function(res) {
			$scope.options = res.data;
		});

	});

	app.controller('OptionsAddController', function(
		navMgr, messenger, pod, optionSchema, $scope, $http, $routeParams, $window
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.optionSchema = optionSchema;
		$scope.option = optionSchema.populateDefaults({});

		$scope.option.popcornId = $routeParams.id;

		$scope.save = function save(option, options) {
			options || (options = {});

			$http.post(
				'/options/create', option
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Option created', '');

				if(options.addMore) {
					$scope.option = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/options/' + $routeParams.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/options/'+$routeParams.id);
		};
	});

	app.controller('OptionsEditController', function(
		navMgr, messenger, pod, optionSchema, $scope, $http, $routeParams
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.optionSchema = optionSchema;
		$scope.editMode = true;

		$http.get(
			'/options/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.option = optionSchema.populateDefaults(data);
		});

		$scope.save = function save(option, options) {
			options || (options = {});

			$http.put(
				'/options/' + option.id, option
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Option updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/options');
		};
	});


	///
	// Controllers: Bevs
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/bevs/);
	});

	app.factory('bevSchema', function() {
		function nameTransform(bev) {
			if(! bev || ! bev.name || bev.name.length < 1) {
				return 'bev-name';
			}
			return (bev.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				bev: {
					categoryId: '',
					name: '',
					desc: '',
					image: '',
					active: ''
				}
			},

			links: {
				website: {
					placeholder: function(bev) {
						return 'www.' + nameTransform(bev) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},

			populateDefaults: function(bev) {
				$.map(service.defaults.bev, function(value, key) {
					if(bev[key]) return;
					if(typeof value === 'object') {
						bev[key] = angular.copy(value);
						return;
					}
					bev[key] = value;
				});
				return bev;
			}
		};

		return service;
	});

	app.controller('BevsListController', function(
		datatables, $http, $routeParams, $scope, $rootScope
	) {
		var areaId = $rootScope.areaId;
		$scope.path = 'bevs';

		$http.get('/areas/' + areaId).then(function(res) {
			$scope.area = res.data;
		}).catch(function(err) {
			console.log('BevsListController areas ajax failed');
			console.log(err);
		});

		$http.get('/bevs/byAreaId/' + areaId).then(function(res) {
			$scope.bevs = res.data;
		}).catch(function(err) {
			console.log('BevsListController bevs ajax failed');
			console.log(err);
		});

	});

	app.controller('BevsAddController', function(
		navMgr, messenger, pod, bevSchema, $scope, $http, $routeParams, $window
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.bevSchema = bevSchema;
		$scope.bev = bevSchema.populateDefaults({});

		$scope.bev.areaId = $routeParams.id;
		$scope.bev.active = true;

		$scope.save = function save(bev, options) {
			options || (options = {});

			$http.post(
				'/bevs/create', bev
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Bev created', '');

				if(options.addMore) {
					$scope.bev = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/bevs/' + $routeParams.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/bevs/'+$routeParams.id);
		};
	});

	app.controller('BevsEditController', function(
		navMgr, messenger, pod, bevSchema, $scope, $http, $routeParams
	) {
		
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.bevSchema = bevSchema;
		$scope.editMode = true;

		$http.get(
			'/bevs/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.bev = bevSchema.populateDefaults(data);
		});

		$scope.save = function save(bev, options) {
			options || (options = {});

			$http.put(
				'/bevs/' + bev.id, bev
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('Bev updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/bevs');
		};
	});


	///
	// Controllers: BevOptions
	///

	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/bevOptions/);
	});

	app.factory('bevOptionSchema', function() {
		function nameTransform(bevOption) {
			if(! bevOption || ! bevOption.name || bevOption.name.length < 1) {
				return 'bevOption-name';
			}
			return (bevOption.name
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				bevOption: {
					bevId: '',
					name: '',
					price: ''
				}
			},

			links: {
				website: {
					placeholder: function(bevOption) {
						return 'www.' + nameTransform(bevOption) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},

			populateDefaults: function(bevOption) {
				$.map(service.defaults.bevOption, function(value, key) {
					if(bevOption[key]) return;
					if(typeof value === 'object') {
						bevOption[key] = angular.copy(value);
						return;
					}
					bevOption[key] = value;
				});
				return bevOption;
			}
		};

		return service;
	});

	app.controller('BevOptionsListController', function(datatables, $http, $routeParams, $scope) {
		$scope.path = 'bevOptions';

		$http.get('/bevs/' + $routeParams.id).then(function(res) {
			$scope.bev = res.data;
		}).catch(function(err) {
			console.log('BevOptionsListController bev ajax failed');
			console.log(err);
		});

		$http.get('/bevOptions/byBevId/' + $routeParams.id).then(function(res) {
			$scope.bevOptions = res.data;
		}).catch(function(err) {
			console.log('BevOptionsListController bevOptions ajax failed');
			console.log(err);
		});

	});

	app.controller('BevOptionsAddController', function(
		navMgr, messenger, pod, bevOptionSchema, $scope, $http, $routeParams, $window
	) {

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.bevOptionSchema = bevOptionSchema;
		$scope.bevOption = bevOptionSchema.populateDefaults({});

		$scope.bevOption.bevId = $routeParams.id;

		$scope.save = function save(bevOption, bevOptions) {
			bevOptions || (bevOptions = {});

			$http.post(
				'/bevOptions/create', bevOption
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('BevOption created', '');

				if(bevOptions.addMore) {
					$scope.bevOption = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/bevOptions/' + $routeParams.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/bevOptions/'+$routeParams.id);
		};
	});

	app.controller('BevOptionsEditController', function(
		navMgr, messenger, pod, bevOptionSchema, $scope, $http, $routeParams
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.bevOptionSchema = bevOptionSchema;
		$scope.editMode = true;

		$http.get(
			'/bevOptions/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.bevOption = bevOptionSchema.populateDefaults(data);
		});

		$scope.save = function save(bevOption, bevOptions) {
			bevOptions || (bevOptions = {});

			$http.put(
				'/bevOptions/' + bevOption.id, bevOption
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('BevOption updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/bevOptions');
		};
	});


	app.config(function(httpInterceptorProvider) {
		httpInterceptorProvider.register(/^\/users/);
	});

	app.factory('userSchema', function() {
		function nameTransform(user) {
			if(! user || ! user.fName || user.fName.length < 1) {
				return 'user-name';
			}
			return (user.fName
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
			);
		}

		var service = {
			defaults: {
				user: {
					areaId: '',
					fName: '',
					lName: '',
					username: '',
					phone: '',
					authLevel: '',
					wage: '',
					dependants: '',
					email: ''
				}
			},
	
			links: {
				website: {
					placeholder: function(user) {
						return 'www.' + nameTransform(user) + '.com';
					},
					addon: 'http://'
				},
				facebook: {
					placeholder: nameTransform,
					addon: 'facebook.com/'
				},
				twitter: {
					placeholder: nameTransform,
					addon: '@'
				},
				instagram: {
					placeholder: nameTransform,
					addon: 'instagram.com/'
				},
				pinterest: {
					placeholder: nameTransform,
					addon: 'pinterest.com/'
				},
			},
	
			populateDefaults: function(user) {
				$.map(service.defaults.user, function(value, key) {
					if(user[key]) return;
					if(typeof value === 'object') {
						user[key] = angular.copy(value);
						return;
					}
					user[key] = value;
				});
				return user;
			}
		};

		return service;
	});

	app.controller('UsersAddController', function(
		navMgr, messenger, pod, userSchema,
		$scope, $http, $window, $rootScope
	) {
		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.authLevels = [
			{id: 0, name: 'None'},
			{id: 1, name: 'Basic'},
			{id: 2, name: 'Driver'},
			{id: 3, name: 'Operator'},
			{id: 4, name: 'Manager'}
		];

		$scope.userSchema = userSchema;
		$scope.user = userSchema.populateDefaults({});

		$scope.user.areaId = $rootScope.areaId;

		// TODO 
		// clean phone number; integers only

		$scope.save = function save(user, options) {
			options || (options = {});

			user.active = true;

			$http.post(
				'/users/create', user
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('User created', '');

				if(options.addMore) {
					$scope.user = {};
					return;
				}

				navMgr.protect(false);
				$window.location.href = '#/users/' + data.id;
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/users');
		};
	});

	app.controller('UsersEditController', function(
		navMgr, messenger, pod, userSchema, $scope, $http, $routeParams
	) {

		$scope.authLevels = [
			{id: 0, name: 'None'},
			{id: 1, name: 'Basic'},
			{id: 2, name: 'Driver'},
			{id: 3, name: 'Operator'},
			{id: 4, name: 'Manager'}
		];

		navMgr.protect(function() { return $scope.form.$dirty; });
		pod.podize($scope);

		$scope.userSchema = userSchema;
		$scope.editMode = true;

		$http.get(
			'/users/' + $routeParams.id
		).success(function(data, status, headers, config) {
			$scope.user = userSchema.populateDefaults(data);
		});

		$scope.save = function save(user, options) {
			options || (options = {});

			// TODO 
			// clean phone number; integers only

			$http.put(
				'/users/' + user.id, user
			).success(function(data, status, headers, config) {
				if(status >= 400) return;

				messenger.show('User updated', '');

				$scope.form.$setPristine();
			});
		};

		$scope.cancel = function cancel() {
			navMgr.cancel('#/users');
		};
	});

	app.controller('UsersSearchController', function(
		userSchema,	$scope, $http, $window, $rootScope
	) {
		var areaId = $rootScope.areaId;
		
		var authLevelMap = [
			'None',
			'Basic',
			'Driver',
			'Operator',
			'Manager'
		];

		$scope.fNameSearch = function() {
			var p = $http.get('/users/byFName/' + $scope.fName);
	
			p.error(function(err) {
				console.log('UsersSearchController: users-fName ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				res.data.map(function(user) {
					user.authLevel = authLevelMap[user.authLevel];
				});
				$scope.users = res.data;
			});
		};

		$scope.lNameSearch = function() {
			var p = $http.get('/users/byLName/' + $scope.lName);
	
			p.error(function(err) {
				console.log('UsersSearchController: users-lName ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.users = res.data;
			});
		}

		$scope.phoneSearch = function() {
			var p = $http.get('/users/byPhone/' + $scope.phone);
	
			p.error(function(err) {
				console.log('UsersSearchController: users-phone ajax failed');
				console.log(err);
			});
	
			p.then(function(res) {
				$scope.users = res.data;
			});
		}

	});


	///
	// Holder
	///

	app.directive('holderJs', function() {
		return {
			link: function(scope, element, attrs) {
				attrs.$set('data-src', attrs.holderJs);
				Holder.run({images:element[0]});
			}
		};
	});

}());
