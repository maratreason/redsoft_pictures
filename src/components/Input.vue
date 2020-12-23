<template>
    <input
        class="header__search-input"
        type="text"
        placeholder="Поиск по названию картины"
        v-model="search"
        @input="changeText"
        @blur="searchText"
    />
</template>

<script>
export default {
    data() {
        return {
            search: "",
        };
    },
    methods: {
        changeText() {
            console.log(this.search);
            this.$store.dispatch("changeText", this.search);
        },
        searchText() {
            this.$store.dispatch("searchPictures", this.search);
        }
    },
};
</script>

<style lang="scss" scoped>
.header__search-input {
    width: 294px;
    padding: 13px 16px;
    border: 1px solid #e1e1e1;
    background: #f6f3f3;
    &::placeholder {
        font-family: "Merriweather";
        font-weight: 400;
        font-size: 14px;
        color: #9f9f9f;
    }
}
</style>
