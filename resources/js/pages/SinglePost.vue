<template>
    <div class="container">
        <div class="row">

            <div class="col-12">
                <div v-if="post">
                    <h1>{{post.title}}</h1>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SinglePost',

    data() {
        return {
            post: null
        }
    },

    mounted() {
        const slug = this.$route.params.slug;

        axios.get('/api/posts' + slug).then(response => {
            if (response.data.success == false) {
                this.router.push({name: 'page-not-found'})
            } else {
                //console.log(response);
                this.post = response.data.result;
                console.log(this.post);
            }
        });
    }
}
</script>

<style scoped>

</style>
