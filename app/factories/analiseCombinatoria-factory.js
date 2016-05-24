angular.module('app').factory('analiseCombinatoria', function () {

    var _removerDuplicados = function (text) {
        /*Remove os caracteres duplicados na string e também os ' '*/
        var arrayResult = [];
        var arr = text.split(' ');
        angular.forEach(arr, function(elem) {
            if (arrayResult.indexOf(elem) < 0 && elem != " ") {
                arrayResult.push(elem);
            }
        });

        return arrayResult;
    }

    var _combina = function (array, n) {
       var arrResult = [];
       var arrChild = [];
       var start;
        
        if (n > array.length || n <= 0) { return arrResult; }
        
        if (n == array.length) { return [array]; }
        
        if (n == 1) {
            for (i = 0; i < array.length; i++) {
                arrResult.push([array[i]]);
            }
            return arrResult;
        }
        
        for (var i = 0; i < array.length - n + 1; i++) {
            start = array.slice(i, i + 1);
            
            arrChild = _combina(array.slice(i + 1), n - 1);

            for (var j = 0; j < arrChild.length; j++) {
                arrResult.push(start.concat(arrChild[j]));
            }
        }

        return arrResult;
    }

	return {
        removerDuplicados : function (text) {
            return _removerDuplicados(text);
        },

        combina : function (array, n) {
            return _combina(array, n);
        }
	}
});