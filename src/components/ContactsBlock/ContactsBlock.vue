<template>
    <ul class="header__contacts">
        <li class="header__contacts-item">
            <a class="header__contacts-link" href="tel:+7 (495) 555-55-55">
                <img class="header__icon-phone" :src="getImage('phone.svg')" /> +7 (495) 555-55-55
            </a>
        </li>
        <li><img class="header__icon-map" :src="getImage('map.svg')" /> г. Москва, ул. Расплетина, 24</li>
    </ul>
</template>

<script>
export default {
    methods: {
        getImage(icon) {
            return icon ? require(`@/assets/images/icons/${icon}`) : "";
        },
    }
};
</script>

<style lang="scss" scoped>
    .header__contacts {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .header__contacts-item {
            margin-right: 34px;
            .header__contacts-link {
                font-size: 14px;
                font-weight: 700;
                color: #555555;
                .header__icon-phone {
                }
                .header__icon-map {

                }
            }
        }
    }
</style>
