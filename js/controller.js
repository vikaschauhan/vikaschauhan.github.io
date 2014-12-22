var huntDiscount = angular.module('huntDiscount', []);

huntDiscount.controller('ProductListCtrl', function ($scope) {
	$scope.products = [
		{
			'percent': '40%',
			'imgsrc': 'http://img6a.flixcart.com/image/sweater/p/c/a/58aekrobin-dkblue-french-connection-m-400x400-imaey7znscjczenf.jpeg',
			'name': 'French Connection Striped V-neck Casual Men Sweater',
			'url':'http://www.flipkart.com/french-connection-striped-v-neck-casual-men-s-sweater/p/itmdz7x8dhw3zwdq?pid=SWTDZ7WHCFNNZNTU&srno=b_1&offer=s%3Awsr%3Ac%3A1098bd9113.&ref=9e14c683-8820-4edf-9c81-229d5d0477ea',
			'brand':'Flipkart',
			'price': 'Rs. 2,999',
			'snippet': 'Fast just got faster with Nexus S.'
		},
		{
			'percent': '40%',
			'imgsrc': 'http://img5a.flixcart.com/image/shirt/f/s/s/msm-02855-wine-mufti-m-400x400-imaeyqkrey36pgwc.jpeg',
			'name': 'Mufti Mens Solid Party Shirt',
			'url':'http://www.flipkart.com/mufti-men-s-solid-party-shirt/p/itmdqcy2attwua2m?pid=SHTDQCY2DBMXVKAP&srno=b_2&offer=s%3Awsr%3Ac%3A1098bd9113.&ref=9211b5ae-b9f1-4ae0-824b-ecb8183682a3',
			'brand':'Flipkart',
			'price': 'Rs. 1,199',
			'snippet': ''
		},
		{
			'percent': '40%',
			'imgsrc': 'http://img6a.flixcart.com/image/shirt/3/a/4/gmsff0099-gant-m-400x400-imadyaftsgngguqs.jpeg',
			'name': 'Gant Mens Striped Casual Linen Shirt',
			'url':'http://www.flipkart.com/gant-men-s-striped-casual-linen-shirt/p/itmdxd73tbe4yggz?pid=SHTDXD73PHC9XUJW&srno=b_3&offer=s%3Awsr%3Ac%3A1098bd9113.&ref=9211b5ae-b9f1-4ae0-824b-ecb8183682a3',
			'brand':'Flipkart',
			'price': 'Rs. 2,999',
			'snippet': ''
		}
  ];
});