Vue.component('componente-pnoticias', {
	data:function(){
		return {
			form_data:{
				titulo:"",
				autor:"",
				cuerpo:"",
				sinopsis:"",
			},
		verificar:true,
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
		<textarea v-model.trim="form_data.descripcion" class="form-control"></textarea>
		</div>

		</div>
		

		<button type="button" class="btn btn-lg btn-block" @click="guardar(form_data)" value="Guardar">Enviar</button>
		
		</form>
		<div :class="verificar ? 'classBien' : 'classError'">
				<div id="openModal" class="modalDialog">
						<div class="modal-content" >
                            <div class="modal-body">
									<button class="X" @click="cerrar" >X</button>
									<p class="text-center my-5">Llene todos los espacios para continuar</p> 
                            </div>
                        </div>
				</div>
			</div>
		</div>
</div>`,
methods:{
	guardar:function(form_data){
		
		if (this.form_data.titulo == "") {
        this.verificar = false
        return
      }
	  
	  if (this.form_data.autor == "") {
        this.verificar = false
        return
      }
	  
	  if (this.form_data.sinopsis == "") {
        this.verificar = false
        return
      }
	  
	  if (this.form_data.descripcion == "") {
        this.verificar = false
        return
      }
		
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
cerrar:function(){
		 this.verificar = true
	},
destroyed: function(){
	console.log("se destruyo la instancia")
}
});
