Vue.component('hijo', {
    template: //html
    `
    <div class="py-2 bg-success text-white">
    <h2>Componente hijo :{{numero}} </h2>
    <p> nombre: {{nombre}} </p>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Joan'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
})