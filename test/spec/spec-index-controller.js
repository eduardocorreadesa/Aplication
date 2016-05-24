describe('test Home/IndexController', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;
    
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

	it('modelProblemaCombinacao deve inciar vazio', function () {
		var $scope = {};
		var controller = $controller('IndexController', { $scope: $scope });

		expect(controller.modelProblemaCombinacao).toEqual({ text: '', number: '' });
	});

	it('listResultadoCombinacao deve inciar vazia', function () {
		var $scope = {};
		var controller = $controller('IndexController', { $scope: $scope });

		expect(controller.listResultadoCombinacao).toEqual([]);
	});	

	it("text = 'a b c' number = 3 spec: [ [ 'a', 'b', 'c' ], '___', [ 'a', 'b', 'c' ] ]", function () {
		var $scope = {};
		var controller = $controller('IndexController', { $scope: $scope });

		controller.processar({ text: 'a b c', number: '3' });

		expect(controller.listResultadoCombinacao).toEqual([ [ 'a', 'b', 'c' ], '___', [ 'a', 'b', 'c' ] ]);
	});

	it("text = 'a b c' number = 2 spec: [ [ 'a', 'b', 'c' ], '___', [ 'a', 'b' ], [ 'a', 'c' ], [ 'b', 'c' ] ]", function () {
		var $scope = {};
		var controller = $controller('IndexController', { $scope: $scope });

		controller.processar({ text: 'a b c', number: '2' });

		expect(controller.listResultadoCombinacao).toEqual([ [ 'a', 'b', 'c' ], '___', [ 'a', 'b' ], [ 'a', 'c' ], [ 'b', 'c' ] ]);
	});

	it("text = 'a b c' number = 1 spec: [ [ 'a', 'b', 'c' ], '___', [ 'a' ], [ 'b' ], [ 'c' ] ]", function () {
		var $scope = {};
		var controller = $controller('IndexController', { $scope: $scope });

		controller.processar({ text: 'a b c', number: '1' });

		expect(controller.listResultadoCombinacao).toEqual([ [ 'a', 'b', 'c' ], '___', [ 'a' ], [ 'b' ], [ 'c' ] ]);
	});

});