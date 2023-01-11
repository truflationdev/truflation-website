import { defineStore } from 'pinia'
import { CategoryType } from '~~/components/categoryTypes'

export const useDataStore = defineStore({
  id: 'Data-store',
  state: () => {
    return {
        selectedCategory: CategoryType.Housing,
        selectedSubCategory: "unknown",
      list: [
        {
            categoryType: CategoryType.Housing,
            about: "Lorem ipsum dolor sit amet consectetur. Duis amet sed interdum tincidunt eu placerat pulvinar. Sit faucibus est ultricies platea ac pellentesque accumsan sit vitae. Egestas blandit faucibus scelerisque volutpat. Euismod turpis non commodo id. Ultrices nibh aenean tortor mi elementum.",
            indicatorData:  [{ title: "Yoy rate", value: 9.32 }, {title: "Vs Yesterday", value: 0.43}, {title: "Vs Week", value: -0.79},
            {title: "Vs Month", value: -0.59}],
            subCategories: [
                {
                    title: "Owned Dwellings",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [40, 39, 10, 40, 39, 80, 40]
                        } ]
                    }
                },
                {
                    title: "Rented Dwellings",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [35, 22, 15, 10, 33, 80, 40]
                        } ]
                    }
                },
                {
                    title: "No Dwellings",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [10, 20, 15, 50, 33, 80, 40]
                        } ]
                    }
                }
            ],
            categoryDrivers: [
                    {
                        about: {
                            report: "New Residential Sales",
                            source: {
                                title: "Census Buereu",
                                link: "Census Buereu"
                            },
                            frequency: "Monthly",
                            adjustment: "Seasonally Adjusted Annual Rate",
                            newRelease: "26th Oct, 2022"

                        },
                        latestValue: 50000,
                        title: "New Residential Sales",
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets:[
                            {
                                label: 'New Residential Sales',
                                borderColor: '#0D58C6',
                                backgroundColor: "#0D58C6",
                                data: [40, 39, 10, 40, 39, 80, 40]
                            }]
                        }
                    }
                ],
            relativeImportance: 14.9
        },
        {
            categoryType: CategoryType.FoodAndBev,
            about: "Lorem ipsum dolor sit amet consectetur. Duis amet sed interdum tincidunt eu placerat pulvinar. Sit faucibus est ultricies platea ac pellentesque accumsan sit vitae. Egestas blandit faucibus scelerisque volutpat. Euismod turpis non commodo id. Ultrices nibh aenean tortor mi elementum.",
            indicatorData:  [{ title: "Yoy rate", value: 6.32 }, {title: "Vs Yesterday", value: 0.22}, {title: "Vs Week", value: -0.59},
            {title: "Vs Month", value: -0.39}],
            subCategories: [
                {
                    title: "Beer",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [30, 29, 15, 30, 33, 80, 40]
                        } ]
                    }
                },
                {
                    title: "Spirits",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [35, 22, 15, 10, 33, 80, 40]
                        } ]
                    }
                },
                {
                    title: "wine",
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'wine',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [10, 20, 15, 50, 33, 80, 40]
                        } ]
                    }
                }
            ],
            categoryDrivers: [
                    {
                        about: {
                            report: "New Residential Sales",
                            source: {
                                title: "Census Buereu",
                                link: "Census Buereu"
                            },
                            frequency: "Monthly",
                            adjustment: "Seasonally Adjusted Annual Rate",
                            newRelease: "26th Oct, 2022"

                        },
                        latestValue: 50000,
                        title: "New Residential Sales",
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets:[
                            {
                                label: 'New Residential Sales',
                                borderColor: '#0D58C6',
                                backgroundColor: "#0D58C6",
                                data: [40, 39, 10, 40, 39, 80, 40]
                            }]
                        }
                    }
                ],
            relativeImportance: 14.9
        }
    ],
    }
  },
  actions: {
    updateCategory(categoryType: CategoryType) {
        if(categoryType !== null) {
            this.selectedCategory = categoryType
        }
    },

    updateSubCategory(subCategories: string) {
            this.selectedSubCategory = subCategories
    }
  },
  getters: {
    getByCategoryType: (state) => (categoryType: CategoryType) => {
        return state.list.find(item => item.categoryType === categoryType);
    },
    getSubCategoryType: (state) => (categoryType: CategoryType, SubCategory: string) => {
       const initialState = state.list.find(item => item.categoryType === categoryType);
       return initialState?.subCategories.find(item => item.title === SubCategory)
    },
    getSubCategory: (state) => () => {
        return state.selectedSubCategory
    }
  },
})


