<template>
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <h4 class="card-text">{{ category?category.name:'&nbsp;'}}</h4>
            <p class="card-text">{{ caratteri(description) }}</p>
            <router-link class="btn btn-primary" :to="{name: 'single-post', params: {slug: slug}}">Scopri di più</router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Post',
    props: ['title', 'description', 'slug', 'category', 'tags'],

      data() {
        return {
        numeroCaratteri: 70
        }
    },
    methods: {
        caratteri(text) {

            if (text.length > this.numeroCaratteri) {
                return text.substring(0, this.numeroCaratteri) + '...';
            } else {
               return text;
            }

        }
    }

}
</script>


<style lang="scss" scoped>

</style>
