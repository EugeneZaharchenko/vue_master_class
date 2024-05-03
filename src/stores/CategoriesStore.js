import { defineStore } from 'pinia';
import sourceData from '@/data.json'

export const useCategoriesStoreStore = defineStore('CategoriesStore', {
    state: () => {
        return {
            categories: sourceData.categories
        }
    },
    getters: {
        
    },
    actions: {
        
    },
});
