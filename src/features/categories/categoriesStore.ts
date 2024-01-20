import { defineStore } from "pinia";
import {reactive, ref} from "vue";
import {usePopupStore} from "@/features/popup/popupStore";
import { instance } from '@/shared/axios/index'

export interface ICategorySend {
    id: number;
    title: string;
    url: string;
}

export const useCategoriesStore = defineStore('categories', () => {
    
    const popupStore = usePopupStore();
    const categories = ref<ICategorySend[]>([]);

    let indexEdited: number;
    let editedIndex = -1;

    const category: ICategorySend = reactive<ICategorySend>({
        id: -1,
        title: "",
        url:""
    })

    const editedCategory: ICategorySend = reactive<ICategorySend>({
        id: -1,
        title: "",
        url:""
    })

    const createCategory = async () => {
        try {
            const { data } = await instance.post('categories', category)
            category.id = data.id
            categories.value.push({...category});
        } catch (e) {
            console.log(e)
        } finally {
            category.id = -1
            category.title = ''
            category.url = ''
        }
    }

    const deleteCategory = async (index: number) => {
        try {
            const delCategory = categories.value.splice(index,1)
            await instance.delete(`categories/${delCategory[0].id}`)
        } catch (e) {
            console.log(e)
        }
    }

    const editCategory = (index: number) => {
        popupStore.togglePopup()
        editedIndex = index
        editedCategory.id = categories.value[index].id
        editedCategory.title = categories.value[index].title
        editedCategory.url = categories.value[index].url
        indexEdited = index
    }

    const deleteEditedCategory = () => {
        deleteCategory(editedIndex);
        popupStore.togglePopup();
    }

    const updateCategory = async () => {
        try {
            categories.value[indexEdited].title = editedCategory.title;
            categories.value[indexEdited].url = editedCategory.url;
            await instance.patch(`categories`, editedCategory)
        } catch (e) {
            console.log(e)
        } finally {
            popupStore.togglePopup();
        }
    }

    const cancel = () => popupStore.togglePopup();
    
    const getAll = async ():Promise<void> => {
        try {
            const { data } =  await instance.get('categories')
            categories.value = data
        } catch (e) {
            console.log(e)
        }
    }
    
    return {
        categories,
        category,
        editedCategory,
        createCategory,
        deleteCategory,
        deleteEditedCategory,
        editCategory,
        updateCategory,
        cancel,
        getAll
    }
})