<template>
    <main>
        <div class="container">
            <h1>Elenco delle canzoni</h1>

            <div class="row">
                <div class="col-4" v-for="post in posts" :key="post.id">
                    <div class="card">
                        <div class="card-body">

                        <h5 class="card-title">{{post.title}}</h5>

                        <p class="card-text">{{post.description}}</p>

                        <a href="#" class="btn btn-primary">Vedi dato completo</a>
                        </div>
                    </div>
                </div>
            </div>


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="(currentPage == 1)?'disabled':''" ><span class="page-link" @click="Post(currentPage - 1)">Indietro</span></li>

                    <li class="page-item" :class="(currentPage == lastPage)?'disabled':''"><span class="page-link" @click="Post(currentPage + 1)">Avanti</span></li>
                </ul>
            </nav>

        </div>
    </main>
</template>


<script>
export default {
    name: 'Main',

    data() {
        return {
            posts: [],
            currentPage: 1,
            lastPage: null
        };
    },

    methods: {
        Post(valore) {
            axios.get("/api/posts", {
                'params': {'page': valore}
            })

            .then((response) => {

                this.currentPage = response.data.results.current_page;
                this.posts = response.data.results.data;
                this.lastPage = response.data.results.last_page;
            });
        },
    },


    created() {
        this.Post();

        axios.get('/api/posts').then((response) => {console.log(response)});
    }
}
</script>



<style scoped>

</style>
