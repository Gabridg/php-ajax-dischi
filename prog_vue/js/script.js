Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        discs: []
    },
    created() {
        axios.get('../api/discs/index.php').then(res => {
            this.discs = res.data;
        })
    }
})