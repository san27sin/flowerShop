import { defineStore } from "pinia";
import { reactive, ref} from "vue";

export interface ISocialNetwork {
    id: number;
    urlImage: string;
    urlSocialNetwork: string;
}

export const useSocialNetworkStore = defineStore('socialNetwork', () => {
    const socialNetwork: ISocialNetwork = reactive<ISocialNetwork>({
        id: new Date().getTime(),
        urlImage: "",
        urlSocialNetwork: "",
    });

    const socialNetworks = ref<ISocialNetwork[]>([{...socialNetwork}]);

    const createInput = () => {
        socialNetworks.value.push({...socialNetwork});
    };

    const deleteInput = (index: number) => {
        socialNetworks.value.splice(index, 1);
    }

    const saveDateAndSendToDb = () => {
        // отправить на бэк данные и очистить массив
        socialNetworks.value.splice(0, socialNetworks.value.length);
        socialNetworks.value.push({...socialNetwork});
    }

    return {
        socialNetworks,
        createInput,
        deleteInput,
        saveDateAndSendToDb,
    }
})