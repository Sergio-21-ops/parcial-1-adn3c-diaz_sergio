Vue.component("ver-componente", {
	data:function(){
			return {
				local:[],
				sin_datos: ""
			}
	},
	template:`<div class="justify-content-center p-5">
				<h2 class="text-center">Noticias publicadas</h2>
				<div class="container">
				<div class="row">
                    <div class="card-body" v-for="item in local">
                        <h3 class="card-title">{{item.titulo}}</h3>
						<button class="X" @click="borrar(item)">X</button>
                        <h4 class="card-subtitle mb-2 text-muted">Por {{item.autor}}</h4>
                        <p class="card-text">{{item.sinopsis}}</p>
						<p class="card-text">{{item.descripcion}}</p>
					</div>
                </div>
				</div>
				<p>{{sin_datos}}</p>
				<button type="button" class="btn btn-lg btn-block" @click="ver()" value="Ver">Publicar noticia</button>				
			</div>`,





})