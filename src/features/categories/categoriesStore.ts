import { defineStore } from "pinia";
import {reactive, ref} from "vue";

export interface ICategorySend {
    title: string;
    urlImage: string;
}

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<ICategorySend[]>([]);

    const category: ICategorySend = reactive<ICategorySend>({
        title: "",
        urlImage:""
    })

    function createCategory() {
        categories.value.push({...category});
        category.title = ''
        category.urlImage = ''
    }

    return {
        categories,
        category,
        createCategory
    }
})