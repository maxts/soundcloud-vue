window.Vue = require('vue')
window.Vue.config.debug = true
var Search = require('./search.vue')
var Player = require('./player.vue')
var Recent = require('./recent.vue')

window.onload = function () {
	new Vue({
	  el: 'body',
	  components: { 'my-search': Search, 'player': Player, 'recent': Recent }
	})
}