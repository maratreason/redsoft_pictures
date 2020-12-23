<template>
    <div class="card">
        <router-link :to="'/picture/' + picture.id">
            <img class="card__image" :src="getImage(picture.image_url)" alt="" />
        </router-link>
        <div class="card__content">
            <router-link :to="'/picture/' + picture.id">
                <div class="card__title">
                    "{{ picture.title }}" <br />
                    {{ picture.author }}
                </div>
            </router-link>
            <div class="card__bottom">
                <div class="card__price">
                    <div class="card__old-price">{{ picture.old_price }}</div>
                    <div class="card__current-price">{{ picture.cur_price }}</div>
                </div>
                <div @click="addToCart(picture.id)">
                    <Button
                        :sold="picture.sold"
                        title="Купить"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button";

export default {
    props: ["picture"],
    components: {
        Button
    },
    methods: {
        getImage(picture) {
            return picture ? require(`@/assets/images/gallery/${picture}`) : "";
        },
        addToCart(id) {
            this.$store.dispatch("addToCart", id);
        }
    },
};
</script>

<style lang="scss" scoped>
.card {
    width: 300px;
    border: 1px solid #e1e1e1;
    margin: 0 15px 30px;
    
    .card__image {
        max-width: 100%;
        width: 100%;
    }
    .card__content {
        padding: 20px 24px;
        .card__title {
            font-weight: 400;
            color: #343030;
            font-size: 18px;
            line-height: 27px;
            margin-bottom: 23px;
        }
        .card__bottom {
            display: flex;
            justify-content: space-between;

            .card__price {
                .card__old-price {
                    font-weight: 300;
                    color: #a0a0a0;
                    font-size: 14px;
                    line-height: 21px;
                    text-decoration: line-through;
                }
                .card__current-price {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                }
            }

            .card__button {
                font-family: "Merriweather";
                font-weight: 700;
                font-size: 14px;
                background: #403432;
                padding: 13px 36px;
                outline: none;
                border: none;
                color: #fff;
            }
        }
    }
}
</style>
