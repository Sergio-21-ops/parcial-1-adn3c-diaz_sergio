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
mounted:function(){
		console.log("se monto")
		this.ver_local();
	},
	destroyed: function(){
			console.log("se destruyo la instancia")
	},
	methods:{
		ver_local:function(){
			
		if(localStorage.dato){
		this.local=JSON.parse(localStorage.getItem("dato"))	
				
		}else{
	
		this.sin_datos = "No hay noticias publicadas , se el primero";
}
		console.log( this.$route)
	},
	borrar:function(item){
		
		if(!localStorage.dato){
			this.sin_datos = "La noticia fue eliminada con exito";	
					
			}else{
		
				this.sin_datos = ""
	}
	this.local.splice(item,1)
	this.sin_datos = "La noticia fue eliminada con exito"		
	this.item=JSON.stringify(localStorage.removeItem("dato"))	
	},
	ver:function(){
			
		this.$router.push('/publicar');
		console.log( this.$route)
	}


	}




})
