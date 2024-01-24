import { defineStore } from "pinia"
import { reactive, ref} from "vue"
import {instance} from '@/shared/axios/index'

export interface ISocialNetwork {
    id: number
    urlPicture: string
    urlSocialNet: string
}

export const useSocialNetworkStore = defineStore('socialNetwork', () => {
    const socialNetwork: ISocialNetwork = reactive<ISocialNetwork>({
        id: -1,
        urlPicture: "",
        urlSocialNet: "",
    });

    const socialNetworks = ref<ISocialNetwork[]>([{...socialNetwork}]);

    const createInput = () => {
        socialNetworks.value.unshift({...socialNetwork});
    };

    const deleteInput = async (index: number) => {
        const delNet = socialNetworks.value.splice(index, 1)
        
        try {
            await instance.delete(`socialNetwork/${delNet[0].id}`)
        } catch (e) {
            console.log(e)
        }
    }

    const saveDateAndSendToDb = async () => {
        const newSocialNetworks = socialNetworks.value.filter((socialNet) => socialNet.id === -1)
        if (newSocialNetworks.length === 0)
            return
        
        try {
            for (const net of newSocialNetworks) {
                const { data } = await instance.post('socialNetwork', net)
                net.id = data.id
            }
            socialNetworks.value.unshift({...socialNetwork});
        } catch (e) {
            console.log(e)
        }
    }
    
    const getAll = async() => {
        try {
            const { data } = await instance.get('socialNetwork')
            socialNetworks.value.push(...data)
        } catch (e) {
            console.log(e)
        }
        
    }

    return {
        socialNetworks,
        createInput,
        deleteInput,
        saveDateAndSendToDb,
        getAll
    }
})