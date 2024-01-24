import { defineStore } from "pinia"
import {reactive, ref} from "vue"
import {instance} from '@/shared/axios/index'


export interface IPhone {
    id: number;
    phone: string;
}

export const usePhoneStore = defineStore('phone', () => {
    const phone: IPhone = reactive<IPhone>({
        id: -1,
        phone: "",
    });

    const phones = ref<IPhone[]>([{...phone}]);

    const addInputPhone = () => {
        phones.value.unshift({...phone});
    }

    const deleteInputPhone = async (index: number) => {
        const phone = phones.value.splice(index, 1);
        try {
            await instance.delete(`phones/${phone[0].id}`)
        } catch (e) {
            console.log(e)
        }
    }

    const saveDateToDb = async () => {
        const newPhones: IPhone[] = phones.value.filter((phone) => phone.id === -1)
        if (newPhones.length === 0)
            return
        
        try {
            for (const phone of newPhones) {
                const { data } = await instance.post('phones', phone)
                phone.id = data.id
            }
            phones.value.unshift({...phone});
        } catch (e) {
            console.log(e)
        }
    }
    
    const getAll = async ():Promise<void> => {
        try {
            const { data } = await instance.get('phones')
            phones.value.push(...data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        phones,
        addInputPhone,
        deleteInputPhone,
        saveDateToDb,
        getAll
    }
})