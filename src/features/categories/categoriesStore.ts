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
    let editedIndex = -1;

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
        editedIndex = index;
        category.title = categories.value[index].title;
        category.urlImage = categories.value[index].urlImage;
        indexEdited = index;
    }

    const deleteEditedCategory = () => {
        deleteCategory(editedIndex);
        bEdited.value = false;
    }

    const updateCategory = () => {
        categories.value[indexEdited].title = category.title;
        categories.value[indexEdited].urlImage = category.urlImage;
        bEdited.value= false;
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
        deleteEditedCategory,
        editCategory,
        bEdited,
        updateCategory,
        cancel
    }
})