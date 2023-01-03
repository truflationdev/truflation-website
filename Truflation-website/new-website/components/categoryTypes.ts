
export enum CategoryType {
    FoodAndBev = "Food & Beverage",
    Housing = "Housing"
}

export interface GraphData {
    labels: string[]
    datasets: DataSet[]
}

export interface DataSet {
    label: string
    borderColor: string,
    backgroundColor: string,
    data: number[]
}

export interface SubCategory {
    title: string,
    data: GraphData
}

export interface CategoryDriver extends SubCategory {
    about: AboutData
    latestValue: number
}

export interface Source {
    title: string
    link: string
}

export interface AboutData {
    report: string
    source: Source
    frequency: string
    adjustment: string
    newRelease: string
}

export interface IndicatorData {
    title: string
    value: number
} 

export interface CategoryData{
    categoryType: CategoryType,
    about: string,
    indicatorData: IndicatorData[],
    subCategories: SubCategory[]
    categoryDrivers: CategoryDriver[]
    relativeImportance: number
}

export interface CategoryList {
    list: CategoryData[]
}
