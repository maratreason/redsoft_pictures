import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pictures: [],
        searchText: ""
    },
    mutations: {
        setPictures(state, pictures) {
            state.pictures = pictures;
        },
        addToCart(state, updatedPicture) {
            // state.pictures.map(picture => {
            //     if (picture.id === updatedPicture.id) {
            //         picture.sold = !picture.sold;
            //     }
            // });
            // state.pictures = pictures;
        },
        setSearchtext(state, text) {
            state.searchText = text;
        }
    },
    actions: {
        async fetchPictures({commit}) {
            const pictures = await axios.get("http://localhost:3001/pictures");
            commit("setPictures", pictures.data);
        },
        async searchPictures({commit}, title) {
            // console.log("`http://localhost:3001/pictures?title=${title}`", `http://localhost:3001/pictures?title=${title}`);
            const pictures = await axios.get(`http://localhost:3001/pictures?q=${title}`);
            commit("setPictures", pictures.data);
        },
        async addToCart({ commit }, id) {
            let updatedPicture = {}
            this.state.pictures.map(picture => {
                if (picture.id === id) {
                    picture.sold = !picture.sold;
                    updatedPicture = picture;
                    return;
                }
                return picture;
            });
            await axios.patch(`http://localhost:3001/pictures/${id}`, updatedPicture);
            // commit("addToCart", updatedPicture);
        },
        changeText({ commit }, text) {
            commit("setSearchtext", text);
        }
    },
    getters: {
        pictures: (st) => st.pictures,
        searchText: (st) => st.searchText,
    },
    modules: {},
});
