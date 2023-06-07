const home = { 
  template: `<div>
  <h2 class="text-center my-5">Bienvenidos a Prenpub</h2>
  <p class="text-left">Te damos la bienvenida a nuestra aplicacion dedicada exclusivamente para quienes buscan proyectar su propio espacio abocado al publico para difundir y compartir sus opiniones e intereses , dedicado especificamente a aquel quien siente que merece ser leido entre mas usuarios.</p>
  <p class="text-left">Prensapub nace en 2020 despues de la fusion entre la productora Prensa entre nos y publico para todos  con el objetivo de llegar a cada vez mas personas interesadas en este proyecto, si bien somos relativamente nuevos en el ambiente nuestras ideas en menos de 4 años logramos llegar a una audiencia bastante amplia en variedad de edad y centrada en la diversidad de categorias distinguidas entre entrevistas, editoriales, opiniones y columnas  .</p>	
  <p class="text-left">Nuestro staff esta compuesto por un grupo de personas jovenes, algunos estudiantes de periodismo, otros en las puertas de su recibimiento en la carrera ,otros con la carrera consolidada y al frente de una inmejorable oportunidad para crecer con el tiempo,  a todos estos los une la conjugacion de las dos palabras en comun que dieron origen a esta idea. Tenemos a su disposición Nuestros contenidos se rigen con una amplia variedad de temas y le es util a quien quiera hacer sus primeras armas en el mundo del periodismo o bien para otro publico el cual simplementa quiera dar a conocer su voz en este ambiente.</p>
  <h3 class="text-center my-5">Por que descargarse nuestra aplicacion</h3>
  <ul class="row m-3">
			<li v-for="item in tips" class="col-sm-4">
				<h4 class="text-center">{{item.tiptitulo}} </h4>
				<img class="col" v-bind:src="item.img" v-bind:alt="item.alt"/>				
				<p>{{item.texto}} </p>
			</li>
  </ul>
  </div>`,
  data () {
    return {
      tips: [
        {
					tiptitulo: "Alcance", 
					img:"img/alcance.jpg", 
					alt:"Imagen de alcance",
					texto:"Nuestra aplicacion permite relacionar su contenido a un largo nivel de difusion junto con el de otros usuarios, lo cual permite subir su calificacion y facilitar su reputacion ",
				},
				{
          tiptitulo: "Experiencia", 
					img:"img/experiencia.jpg", 
					alt:"Imagen de experiencia",
					texto:"No importa su nivel de conocimiento en la aplicacion o en el ambiente periodistico, la app le permite ir evolucionando su contenido en base a sugerencias a nivel de lectura u ortografico",
				},
				{
          tiptitulo: "Desarrollo", 
					img:"img/desarrollo.jpg", 
					alt:"Imagen desarrollo",
					texto:"Pese a estar poco tiempo en play store, la app tiende a mejorar cada cierto tiempo para facilitar la fluidez de la usabilidad",
				}
			]
      
    }
  },	
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

