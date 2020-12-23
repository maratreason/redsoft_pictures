<template>
    <button v-if="sold" class="header__search-button">{{ soldButton }}</button>
    <button v-else class="header__search-button" @click="search">{{ title }}</button>
</template>

<script>
export default {
    props: ["title", "sold"],
    computed: {
        soldButton() {
            return this.sold ? "В корзине" : "Купить"
        }
    },
    methods: {
        search() {
            this.$store.dispatch("searchPictures", this.$store.getters.searchText);
        }
    }
};
</script>

<style lang="scss" scoped>
.header__search-button {
    font-family: "Merriweather";
    font-weight: 700;
    font-size: 14px;
    background: #403432;
    padding: 13px 36px;
    outline: none;
    border: 1px solid #403432;
    color: #fff;
}
</style>
