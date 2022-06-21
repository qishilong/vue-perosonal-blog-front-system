import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import about from "@/store/about";
import setting from "./setting";

Vue.use ( Vuex );

export default new Vuex.Store ( {
                                    modules: {
                                        about,
                                        banner,
                                        setting
                                    },
                                    strict : true
                                } );