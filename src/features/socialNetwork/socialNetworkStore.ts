import { defineStore } from "pinia";
import {reactive, ref} from "vue";

export interface ISocialNetwork {
    urlImage: string;
    urlSocialNetwork: string;
}

export const useSocialNetworkStore = defineStore('socialNetwork', () => {
    const socialNetwork: ISocialNetwork = reactive<ISocialNetwork>({
        urlImage: "",
        urlSocialNetwork: "",
    });

    const socialNetworks = ref<ISocialNetwork[]>([socialNetwork]);

    return {
        socialNetwork,
        socialNetworks
    }
})