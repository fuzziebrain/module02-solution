(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', ['ngMaterial'])
    .config(function($mdThemingProvider, $mdIconProvider) {
      $mdThemingProvider.theme('mytheme').primaryPalette('brown').accentPalette('green');
    })
    .service('shopper', ShoppingListCheckOffService)
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

  ToBuyShoppingController.$inject = ['shopper'];
  AlreadyBoughtShoppingController.$inject = ['shopper'];

  function ShoppingListCheckOffService() {
    var service = this;

    var shoppingList = [
      {
        name: 'Cookie'
        , quantity: 10
      }
      , {
        name: 'Peanut'
        , quantity: 20
      }
      , {
        name: 'Apple'
        , quantity: 5
      }
      , {
        name: 'Mango'
        , quantity: 2
      }
      , {
        name: 'Potato Chip'
        , quantity: 20
      }
    ];

    var inventoryList = [];

    service.getShoppingList = function() {
      return shoppingList;
    };

    service.getInventoryList = function() {
      return inventoryList;
    };

    service.addToInventory = function(index) {
      var item = shoppingList[index];
      shoppingList.splice(index, 1);
      inventoryList.push(item);
    }
  }

  function ToBuyShoppingController(shopper) {
    var toBuy = this;

    toBuy.shoppingList = shopper.getShoppingList();

    toBuy.addToInventory = function(index) {
      shopper.addToInventory(index);
    }
  }

  function AlreadyBoughtShoppingController(shopper) {
    var bought = this;

    bought.inventoryList = shopper.getInventoryList();
  }
})();
