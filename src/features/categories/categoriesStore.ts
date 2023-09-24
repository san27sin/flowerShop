import { defineStore } from "pinia";
import {reactive, ref} from "vue";

export interface ICategorySend {
    title: string;
    urlImage: string;
}

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<ICategorySend[]>([]);

    const bEdited = ref<boolean>(false);
    let indexEdited: number;

    const category: ICategorySend = reactive<ICategorySend>({
        title: "",
        urlImage:""
    })

    const createCategory = () => {
        categories.value.push({...category});
        category.title = ''
        category.urlImage = ''
    }

    const deleteCategory = (index: number) => {
        categories.value.splice(index,1);
    }

    const editCategory = (index: number) => {
        bEdited.value = true;
        category.title = categories.value[index].title;
        category.urlImage = categories.value[index].urlImage;
        indexEdited = index;
    }

    const updateCategory = () => {
        categories.value[indexEdited].title = category.title;
        categories.value[indexEdited].urlImage = category.urlImage;
    }

    const cancel = ()=> {
        bEdited.value = false;
        category.title = '';
        category.urlImage = '';
    }

    return {
        categories,
        category,
        createCategory,
        deleteCategory,
        editCategory,
        bEdited,
        updateCategory,
        cancel
    }
})