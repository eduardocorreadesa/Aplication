(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('IndexController', IndexController);

    IndexController.$inject = ['analiseCombinatoria'];

    function IndexController(analiseCombinatoria){
        var vm = this;
        vm.processar = processar;
        
        (function initController() {
        	vm.modelProblemaCombinacao = { 'text' : '', 'number' : ''};
        	vm.listResultadoCombinacao = [];
        })();
        
        function processar(modelProblemaCombinacao){          
            var arrayClean = analiseCombinatoria.removerDuplicados(modelProblemaCombinacao.text);

            vm.listResultadoCombinacao = [];
            vm.listResultadoCombinacao.push(arrayClean);
            vm.listResultadoCombinacao.push('___');

            var arrReturn = analiseCombinatoria.combina(arrayClean, modelProblemaCombinacao.number);

            vm.listResultadoCombinacao = vm.listResultadoCombinacao.concat(arrReturn);            
        }
    }
})();