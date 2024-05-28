import { IProduct } from "./interfaceProduct";

export const filterProducts = (products: IProduct[], filterStatus: 'semua' | 'aktif' | 'nonaktif', searchTerm: string, selectedCategories: string[]): IProduct[] => {
    return products.filter(product => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchTermLowerCase) ||
            product.category.toLowerCase().includes(searchTermLowerCase) ||
            product.sku.toLowerCase().includes(searchTermLowerCase)
        );
    }).filter(product => {
        if (selectedCategories.length > 0) {
            return selectedCategories.includes(product.category);
        }
        return true;
    }).filter(product => {
        if (filterStatus === 'aktif') {
            return product.isActive;
        } else if (filterStatus === 'nonaktif') {
            return !product.isActive;
        }
        return true;
    });
};

export const sortedProducts = (products: IProduct[], sortBy: string): IProduct[] => {
    return [...products].sort((a, b) => {
        switch (sortBy) {
            case "termurah":
                return a.price - b.price;
            case "termahal":
                return b.price - a.price;
            case "stokterbanyak":
                return b.stock - a.stock;
            case "stokterkecil":
                return a.stock - b.stock;
            case "terakhirdiubah":
                return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
            case "terlaris":
                return b.popularity - a.popularity;
            case "kurangdiminati":
                return a.popularity - b.popularity;
            default:
                return 0;
        }
    });
};


export const toggleAllChecked = (isChecked: boolean, setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>, finalProducts: IProduct[]) => {
    setCheckedItems(new Array(finalProducts.length).fill(isChecked));
};

export const toggleItemChecked = (index: number, checkedItems: boolean[], setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>, setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    setIsAllChecked(updatedCheckedItems.every(item => item));
};

export const toggleProductActive = (index: number, products: IProduct[], setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>, finalProducts: IProduct[]) => {
    const updatedProducts = [...products];
    const productIndex = products.indexOf(finalProducts[index]);
    updatedProducts[productIndex].isActive = !updatedProducts[productIndex].isActive;
    setProducts(updatedProducts);
};
