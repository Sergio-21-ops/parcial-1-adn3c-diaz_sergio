Vue.component('componente-pnoticias', {
	data:function(){
		return {
			form_data:{
				titulo:"",
				autor:"",
				cuerpo:"",
				sinopsis:"",
			},
		arr:[]
		}

	},
template:`
<div class="justify-content-center p-5">

		<div class="form">
		
		<form v-on:submit.prevent>
		
		<div class="form-row">
		
		<div class="col">			
		<label>Titulo de la noticia</label>
		<input type="text" v-model.trim="form_data.titulo" class="form-control" placeholder="Titulo"/>
		</div>
		
		<div class="col">			
		<label>Autor</label>
		<input type="text" v-model.trim="form_data.autor" class="form-control" placeholder="Autor"/>
		</div>

		</div>

		<div class="row">
		
		<div class="col">			
		<label>Sinopsis</label>
		<input type="text" v-model.trim="form_data.sinopsis" class="form-control" placeholder="Sinopsis"/>
		</div>

		</div>
		
		<div class="row">
		
		<div class="col">			
		<label>Descripcion</label>
		<textarea v-model="form_data.descripcion" class="form-control"></textarea>
		</div>

		</div>
		

		<button type="button" class="btn btn-lg btn-block" @click="guardar(form_data)" value="Guardar">Enviar</button>
		
		</form>

		</div>
</div>`,
methods:{
	guardar:function(form_data){
		if(!localStorage.dato){
			arr=[]
		}else{
			arr=JSON.parse(localStorage.getItem("dato"))
			}

		arr.push(form_data)
		localStorage.setItem("dato",JSON.stringify(arr))
	
		this.$router.push('/ver');
}
},

destroyed: function(){
	console.log("se destruyo la instancia")
}
});
