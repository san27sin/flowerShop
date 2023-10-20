import { defineStore } from "pinia";
import {ref} from "vue";

export interface IPhone {
    id: number;
    phone: string;
}

export const usePhoneStore = defineStore('phone', () => {
    const phone: IPhone = {
        id: new Date().getTime(),
        phone: "",
    };

    const phones = ref<IPhone[]>([{...phone}]);

    const addInputPhone = () => {
        phones.value.push({...phone});
    }

    const deleteInputPhone = (index: number) => {
        phones.value.splice(index, 1);
    }

    const saveDateToDb = () => {
        // отправить на бэк в базу
        phones.value.splice(0, phones.value.length);
        phones.value.push({...phone});
    }

    return {
        phones,
        addInputPhone,
        deleteInputPhone,
        saveDateToDb
    }
})