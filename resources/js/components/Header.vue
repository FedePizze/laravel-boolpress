<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <a class="navbar-brand" href="#">LOGO</a>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="menu in menu" :key="menu.routeName">
                <router-link class="nav-link" :to="{name: menu.routeName}">{{menu.label}}</router-link>
            </li>
        </ul>

            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/admin">Accesso Admin</a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'Header',
    data() {
        return {
            menu: [
                {
                    routeName: 'home',
                    label: 'Home'
                },
                {
                    routeName: 'about',
                    label: 'Chi Siamo'
                },
                {
                    routeName: 'contact',
                    label: 'Contatti'
                },
                {
                    routeName: 'blog',
                    label: 'Blog'
                },
            ]
        }
    }

}
</script>


<style scoped>
    .router-link-exact-active {
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
