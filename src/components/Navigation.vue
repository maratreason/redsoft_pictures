<template>
    <div class="header" :class="[bgColor ? 'bgColor' : '' ]">
        <div class="container justify-content-between">
            <div class="header__block">
                <div class="header__logo">
                    <img src="../assets/images/Vector.svg" alt="" class="header__logo-image" />
                </div>
                <ul class="header__menu">
                    <li class="header__item">
                        <router-link class="header__link" to="/" exact>Каталог</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/delivery" exact
                            >Доставка</router-link
                        >
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/paid" exact>Оплата</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/contacts" exact
                            >Контакты</router-link
                        >
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/gallery" exact
                            >О галерее</router-link
                        >
                    </li>
                </ul>
            </div>
            <div v-if="searchBlock"><SearchBlock /></div>
            <div v-if="contactsBlock" class="header__contacts-wrapper"><ContactsBlock /></div>
        </div>
    </div>
</template>

<script>
import SearchBlock from "@/components/SearchBlock/SearchBlock";
import ContactsBlock from "@/components/ContactsBlock/ContactsBlock";

export default {
    name: "Navigation",
    props: ["bgColor", "searchBlock", "contactsBlock"],
    components: {
        SearchBlock,
        ContactsBlock
    }
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    
    .header__block {
        display: flex;
        align-items: center;
        .header__logo {
            .header__logo-image {
                max-width: 100%;
            }
        }

        .header__menu {
            display: flex;
            justify-content: space-between;

            .header__item {
                margin-left: 42px;

                .header__link {
                    font-family: "Merriweather";
                    color: #343030;
                    font-size: 14px;
                    line-height: 21px;
                }
            }
        }
    }

    .header__contacts-wrapper {
        display: flex;
        align-items: center;
    }
}

.bgColor {
    background-color: #eceaea;
}
.justify-content-between {
    display: flex;
    justify-content: space-between;
}
</style>
