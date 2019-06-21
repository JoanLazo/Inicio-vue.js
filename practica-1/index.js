// Instancia de Vue
const app = new Vue({
 el: '#app',
 data: {
     id: '1',
     name: 'Joan',
     age: 24,
     ropas: [
         { nombre:'polo', cantidad: 0 },
         { nombre:'falda', cantidad: 3 },
         { nombre:'media', cantidad: 5 }
     ],
     nuevaRopa: '',
     total: 0
 },
 methods: {
     agregarRopa () {
        this.ropas.push({
        nombre: this.nuevaRopa, cantidad: 0
        });
        this.nuevaRopa = '';    
     },
 },
 computed: {
    sumarRopa(){
        this.total = 0;
        for( ropa of this.ropas){
            this.total = this.total + ropa.cantidad;
        }
        return this.total;
    }
 }
})