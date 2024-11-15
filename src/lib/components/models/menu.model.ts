export interface Menu {
    id: string
    brandId: string
    code: string
    priority: number
    isBaseMenu: boolean
    dateFilter: string[]
    startTime: string
    endTime: string
    products: Product[]
    collections: Collection[]
    categories: Category[]

}

export interface Product {
    collectionIds: string[]
    extraCategoryIds: string[]
    variants: string[]
    menuProductId: string
    id: string
    code: string
    name: string
    sellingPrice: number
    picUrl: string
    status: string
    historicalPrice: number
    discountPrice: number
    description: string
    displayOrder: number
    size?: string
    type: string
    parentProductId?: string
    brandId: string
    categoryId: string
}

export interface Collection {
    id: string
    name: string
    code: string
    picUrl: string
    description: string
}

export interface Category {
    id: string
    childCategoryIds: string[]
    code: string
    name: string
    type: string
    displayOrder: number
    description: string
    picUrl: string
}
