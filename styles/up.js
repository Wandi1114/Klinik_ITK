window.addEventListener('scroll', function() {
const button = document.getElementById('up');
let top = 5
if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
  button.style.display = 'block';
} else {
  button.style.display = 'none';
}
});
function onklik() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// var vo = new Vue ({
// 	el:'#up',
// 	data:{
// 		top : 5,
// 		bodi : document.body.scrollTop,
// 		elmt : document.documentElement.scrollTop,
// 	},
// 	computed:
// })
// 	Vue.component('back-to-top', {
//   template: '#up',
//   name: 'UP',
//   props: {
//     text: {
//       type: String,
//       default: 'text'
//     },
//     visibleoffset: {
//       type: [String, Number],
//       default: 400
//     },
//     right: {
//       type: String,
//       default: '30px',
//     },
//     bottom: {
//       type: String,
//       default: '40px',
//     },
//   },
//   data () {
//     return {
//       visible: false
//     }
//   },
//   mounted () {
//     window.smoothscroll = () => {
//       let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
//       if (currentScroll > 0) {
//         window.requestAnimationFrame(window.smoothscroll)
//         window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
//       }
//     }
//     window.addEventListener('scroll', this.catchScroll)
//   },
//   destroyed () {
//     window.removeEventListener('scroll', this.catchScroll)
//   },
//   methods: {
//     catchScroll () {
//       this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
//     },
    
//     up() {
//       window.smoothscroll()
//       this.$emit('scrolled');
//     }
//   }
// }) 
// new Vue({
  
// }).$mount('#app')