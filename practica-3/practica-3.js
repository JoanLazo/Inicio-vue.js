const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'joan',
        contador: 0
    },
    computed: {
        invertir(){
        return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.conador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    }
});