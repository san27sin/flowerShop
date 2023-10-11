import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export interface IAdvantageSend {
    title: string;
    desc: string;
    urlImage: string;
    bEdited: boolean;
}

export const useAdvantageStore = defineStore('advantage', () => {
    const advantage: IAdvantageSend = reactive<IAdvantageSend>({
        title: "",
        desc: "",
        urlImage: "",
        bEdited: false,
    });

    const advantages = ref<IAdvantageSend[]>([]);

    const addAdvantage = () => {
        advantages.value.push({
            title: advantage.title,
            desc: advantage.desc,
            urlImage: advantage.urlImage,
            bEdited: advantage.bEdited,
        });
        advantage.title = "";
        advantage.desc = "";
        advantage.urlImage = "";
    }

    const deleteAdvantage = (ixd: number) => {
        advantages.value.splice(ixd, 1);
    }

    const editAdvantageMode = (ixd: number) => {
        const adv = advantages.value[ixd];
        adv.bEdited = true;
    }

    const commitAdvantageMode = (ixd: number) => {
        const adv = advantages.value[ixd];
        adv.bEdited = false;
    }

    return {
        advantage,
        advantages,
        addAdvantage,
        deleteAdvantage,
        editAdvantageMode,
        commitAdvantageMode
    }
})