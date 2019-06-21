
Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-dark text-while">
    <h1>Componente Padre: {{numeroPadre}} </h1>
    <button class="btn btn-danger" @click="numeroPadre++">+</button>
    {{nombrePadre}}
    <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijjo>
    </div>
    `,
    data(){
        return {
            numeroPadre: 2,
            nombrePadre: ''
        }
    }
});
