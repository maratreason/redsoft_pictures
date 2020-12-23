<template>
    <div id="app">
        <Navigation searchBlock="true" />
        <div class="hr"></div>
        <router-view />
        <Navigation contactsBlock="true" bgColor="true" />
    </div>
</template>

<script>
import styles from "@/assets/css/reset.css";
import fonts from "@/assets/css/fonts.css";
import Navigation from "@/components/Navigation.vue";

export default {
    components: {
        Navigation,
    },
    
};
</script>

<style lang="scss">
#app {
    background: #f6f3f3;
    max-height: 100%;
    height: 100vh;
}

.container {
    width: 1300px;
    margin: 0 auto;
}

.hr {
    border-bottom: 1px solid #e1e1e1 !important;
}
</style>
