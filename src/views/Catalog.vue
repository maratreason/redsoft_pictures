<template>
    <div class="container">
        <div class="catalog">
            <h1 class="catalog__title">Картины эпохи возврождения</h1>
            <div class="catalog__cards">
              <Card v-for="picture of pictures" :picture="picture" :key="picture.id" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
    name: "Catalog",
    components: {
        Card,
    },
    mounted() {
        this.$store.dispatch("fetchPictures");
    },
    computed: {
        pictures() {
            return this.$store.getters.pictures;
        },
    },
};
</script>

<style lang="scss" scoped>
.catalog {
    padding: 40px 0;

    .catalog__title {
        font-family: "Merriweather";
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #343030;
        margin-bottom: 40px;
    }
    .catalog__cards {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    }
}
</style>
