import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import about from "@/store/about";
import project from "@/store/project";
import setting from "./setting";

Vue.use ( Vuex );

export default new Vuex.Store ( {
                                    modules: {
                                        project,
                                        about,
                                        banner,
                                        setting
                                    },
                                    strict : true
                                } );