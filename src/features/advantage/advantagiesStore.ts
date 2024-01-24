import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {instance} from "@/shared/axios";

export interface IAdvantageSend {
    id: number,
    title: string;
    description: string;
    url: string;
    bEdited: boolean;
}

export const useAdvantageStore = defineStore('advantage', () => {
    const advantage: IAdvantageSend = reactive<IAdvantageSend>({
        id: -1,
        title: "",
        description: "",
        url: "",
        bEdited: false,
    });

    const advantages = ref<IAdvantageSend[]>([]);

    const addAdvantage = async () => {
        try {
            const { data } = await instance.post('advantages', advantage)
            advantage.id = data.id
            advantages.value.push({
                id: advantage.id,
                title: advantage.title,
                description: advantage.description,
                url: advantage.url,
                bEdited: advantage.bEdited,
            });
        } catch (e) {
            console.log(e)
        } finally {
            advantage.id = -1
            advantage.title = ""
            advantage.description = ""
            advantage.url = ""
        }
    }

    const deleteAdvantage = async (ixd: number) => {
        try {
            const delAdvantage = advantages.value.splice(ixd, 1);
            await instance.delete(`advantages/${delAdvantage[0].id}`)
        } catch (e) {
            console.log(e)
        }
    }

    const editAdvantageMode = (ixd: number) => {
        const adv = advantages.value[ixd]
        adv.bEdited = true;
    }

    const commitAdvantageMode = async (ixd: number) => {
        const adv = advantages.value[ixd]
        adv.bEdited = false
        try {
            await instance.patch('advantages', adv)
        } catch (e) {
            console.log(e)
        }
    }
    
    const getAll = async () => {
        try {
            const { data } = await instance.get('advantages')
            advantages.value = data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        advantage,
        advantages,
        addAdvantage,
        deleteAdvantage,
        editAdvantageMode,
        commitAdvantageMode,
        getAll
    }
})