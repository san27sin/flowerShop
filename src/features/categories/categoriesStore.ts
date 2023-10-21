import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {usePopupStore} from "@/features/popup/popupStore";

export interface ICategorySend {
    title: string;
    urlImage: string;
}

export const useCategoriesStore = defineStore('categories', () => {
    const popupStore = usePopupStore();
    const categories = ref<ICategorySend[]>([]);

    let indexEdited: number;
    let editedIndex = -1;

    const category: ICategorySend = reactive<ICategorySend>({
        title: "",
        urlImage:""
    })

    const editedCategory: ICategorySend = reactive<ICategorySend>({
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
        popupStore.togglePopup();
        editedIndex = index;
        editedCategory.title = categories.value[index].title;
        editedCategory.urlImage = categories.value[index].urlImage;
        indexEdited = index;
    }

    const deleteEditedCategory = () => {
        deleteCategory(editedIndex);
        popupStore.togglePopup();
    }

    const updateCategory = () => {
        categories.value[indexEdited].title = editedCategory.title;
        categories.value[indexEdited].urlImage = editedCategory.urlImage;
        popupStore.togglePopup();
    }

    const cancel = () => popupStore.togglePopup();

    return {
        categories,
        category,
        editedCategory,
        createCategory,
        deleteCategory,
        deleteEditedCategory,
        editCategory,
        updateCategory,
        cancel
    }
})