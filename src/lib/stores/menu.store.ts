
import axiosInstance from '$lib/apis/ultil';
import type { Menu } from '$lib/components/models/menu.model';
import { writable } from 'svelte/store';



// Define a writable store for the menu
const menuStore = writable<Menu>();

// Function to fetch data from an API and update the store
export const fetchMenuData = async () => {
    try {
        const response = await axiosInstance.get("/brands/menus?brandCode=HATEMONDAY");
        if (response.status !== 200) {
            throw new Error('Failed to fetch menu data');
        }
        const data: Menu = await response.data;
        menuStore.set(data);
        console.log("menu", data)
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
};

// Export the menu store to be used across components
export default menuStore;