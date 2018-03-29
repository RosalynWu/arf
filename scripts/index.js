/**
 * Created by wuhaiying on 2018/3/26.
 */
var myApp = angular.module('arf',['ui.router']);
myApp.config(function($stateProvider){
    $stateProvider
        .state({
            name:'user',
            url:'/user',
            template:'<div class="user">../templates/user.html</div>'
        })
        .state({
            name:'payment_condition',
            url:'/payment_condition',
            template:'../templates/payment_condition.html'
        })
        .state({
            name:'test',
            views:{
                'test1':{
                    template:"<p>这是test1</p>"
                },
                'test2':{
                    template:"<h4>这是test2</h4>"
                }
            }
        })
});
myApp.run(function($state){
    $state.go('user');
});