const home = { 
  template: `<div><h2 class="text-center my-5">Bienvenidos a Prenpub</h2></div>`,
  name:"componenteHome"
};
const publicar = {
  template: `<componente-pnoticias> </componente-pnoticias>`, 
  name:"formulario"
};
const ver = {
  template: `<ver-componente></ver-componente>`, 
  name:"componentevVer"
};
const routes = [
  { path: '/', component: home },
  { path: '/publicar', component: publicar },
  { path: '/ver', component: ver }

];
const router = new VueRouter({
	  routes
});
const app = new Vue({
	el:"#app",
  data: {
    barraNav: true,
    fondo: true,
    pFooter: true,
    titulo:"Logo de prensapub"
  },
  router,

});

