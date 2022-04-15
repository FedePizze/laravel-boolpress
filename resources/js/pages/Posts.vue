<template>
    <div>
        <div class="container">
            <h1>Elenco delle canzoni</h1>

            <div class="row">
                <div class="col-6" v-for="post in posts" :key="post.id">
                    <Post
                        :title='post.title'
                        :description='post.description'
                        :slug='post.slug'
                        :category='post.category'
                        :tags='post.tags'
                        :img='post.cover'
                    />
                </div>
            </div>


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="(currentPage == 1)?'disabled':''" ><span class="page-link" @click="Post(currentPage - 1)">Indietro</span></li>

                    <li class="page-item" :class="(currentPage == lastPage)?'disabled':''"><span class="page-link" @click="Post(currentPage + 1)">Avanti</span></li>
                </ul>
            </nav>

        </div>
    </div>
</template>


<script>
import Post from '../components/Post';

export default {
    name: 'Posts',
    components: {
        Post
    },

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

                //console.log(response);
                this.currentPage = response.data.results.current_page;
                this.posts = response.data.results.data;
                this.lastPage = response.data.results.last_page;


            });


        },
    },


    created() {
        this.Post();
    }
}
</script>



<style scoped>

</style>
