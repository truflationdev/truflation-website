import { defineStore } from 'pinia'
import { CategoryType, DataSet, StateData, CategoryChanges, ChartLabels, GraphData, TimePeriod } from '~~/components/categoryTypes'

export const useDataStore = defineStore({
  id: 'Data-store',
  state: () => {
    return {
        selectedCategory: CategoryType.Housing,
        selectedCategoryDriver: 'unknown',
        chartLables: {
            generalChart: {},
            categoryChart: [],
            categorySelection: TimePeriod.OneYear,
            driverChart: {},
            totalLabels: []
        },
        newData: {
            datasets: [
            {
                label: 'Owned Dwellings',
                borderColor: '#0D58C6',
                backgroundColor: "#0D58C6",
                data: [10.39, 10.32, 10.38, 10.4, 10.4, 10.41, 10.39, 10.56, 10.53, 10.55]
            }]
        },
      list: [
        {
            categoryType: CategoryType.Housing,
            about: "Lorem ipsum dolor sit amet consectetur. Duis amet sed interdum tincidunt eu placerat pulvinar. Sit faucibus est ultricies platea ac pellentesque accumsan sit vitae. Egestas blandit faucibus scelerisque volutpat. Euismod turpis non commodo id. Ultrices nibh aenean tortor mi elementum.",
            indicatorData:  [{ title: "Yoy rate", value: 9.32 }, {title: "Vs Yesterday", value: 0.43}, {title: "Vs Week", value: -0.79},
            {title: "Vs Month", value: -0.59}],
            subCategories:
                {
                        labels: ['01', '02', '04', '05', '06', '08', '09', '10', '11'],
                        datasets: [
                        {
                            label: 'Owned Dwellings',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40]
                        },
                        {
                            label: 'Rented Dwellings',
                            borderColor: '#A36FE4',
                            backgroundColor: "#A36FE4",
                            data: [35, 22, 15, 10, 33, 80, 40]
                        },
                        {
                            label: 'Other',
                            borderColor: '#A5C39C',
                            backgroundColor: "#A5C39C",
                            data: [10, 20, 15, 50, 33, 80, 40]
                        }
                     ]
                },
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
            subCategories:
            {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                    {
                        label: 'Owned Dwellings',
                        borderColor: '#0D58C6',
                        backgroundColor: "#0D58C6",
                        data: [40, 39, 10, 40, 39, 80, 40]
                    },
                    {
                        label: 'Rented Dwellings',
                        borderColor: '#0D58C6',
                        backgroundColor: "#0D58C6",
                        data: [35, 22, 15, 10, 33, 80, 40]
                    },
                    {
                        label: 'Other',
                        borderColor: '#0D58C6',
                        backgroundColor: "#0D58C6",
                        data: [10, 20, 15, 50, 33, 80, 40]
                    }
                 ]
            },
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
                        title: "New Sales",
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
                    },
                    {
                        about: {
                            report: " Residential Sales",
                            source: {
                                title: "Census Buereu",
                                link: "Census Buereu"
                            },
                            frequency: "Monthly",
                            adjustment: "Seasonally Adjusted Annual Rate",
                            newRelease: "26th Oct, 2022"

                        },
                        latestValue: 50000,
                        title: " Sales",
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets:[
                            {
                                label: 'New Residential Sales',
                                borderColor: '#0D58C6',
                                backgroundColor: "#0D58C6",
                                data: [10, 20, 15, 50, 33, 80, 40]
                            }]
                        }
                    },
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
    updateSelectedCategoryDriver(categoryType: CategoryType) {
        if(categoryType !== null) {
            this.selectedCategoryDriver = categoryType
        }
    },

    hydrateState(state: any) {

       state.c.map((item: any, index: any) => {
            const newLabels: string[] =[]
            const values: number[] = []
            const rates: CategoryChanges = {}

            Object.entries(state.n).forEach(entry => {
                const [key, value] = entry;
                newLabels.push(key)
                values.push(value[index])
            });

            

          const Dataset: DataSet = {
            label: item.name,
                borderWidth: 5,
                borderColor: '#0D58C6',
                backgroundColor: "#0D58C6",
                data: values
           }

           const rateData: CategoryChanges = {
            weekAgo: state.d.lastWeek[index],
            monthAgo: state.d.lastMonth[index],
            yesterday: state.d.yesterday[index],
           }

           const options = {
            scales: {
             x: {
               min: newLabels[newLabels.length - 365],
               max: newLabels[newLabels.length-1],
             }
            },
             responsive: true,
             maintainAspectRatio: true,
             elements: {
               point:{
                   radius: 0
               }
           }
           }

            const labels: ChartLabels = {
                generalChart: options,
                categoryChart: newLabels,
                driverChart: options,
                totalLabels: newLabels
            }

           const stateObject: StateData = {
            categoryType: item.name,
            categoryDrivers: item.names,
            relativeImportance: item.relative_importance,
            categoryRate: rateData,
            data: {
                datasets: [Dataset]
                }
            }


           this.chartLables = labels
           this.list[index] = stateObject
       })
    },


    updateCatLabel(period: number, timePeriod: TimePeriod) {
        const currentLabels = this.chartLables.totalLabels
        const newArray = currentLabels.slice(currentLabels.length - period, currentLabels.length)
        this.chartLables.categoryChart = newArray
        this.chartLables.categorySelection = timePeriod
    },

    updateCatLabelYTD(timePeriod: TimePeriod) {
        const currentLabels = this.chartLables.totalLabels
        const index = currentLabels.indexOf("2023-01-01")
        const newArray = currentLabels.slice(index, currentLabels.length)
        this.chartLables.categoryChart = newArray
        this.chartLables.categorySelection = timePeriod
    }
    

  },
  getters: {
    getByCategoryType: (state) => (categoryType: CategoryType) => {
        return state.list.find(item => item.categoryType === categoryType);
    },

    getSelectedDriver: (state) => () => {
        return state.selectedCategoryDriver
    },

    getSubCategoryType: (state) => (categoryType: CategoryType) => {
       const initialState = state.list.find(item => item.categoryType === categoryType);
       return initialState?.subCategories
    },

    getCatChart: (state) => (data: GraphData) => {
        const object = {
            labels: state.chartLables.categoryChart,
            datasets: data.datasets
        }
        return object
    },

    getCatRange: (state) => (data: GraphData) => {
        return state.chartLables.categoryChart
    },


    getCategoryDrivers: (state) => (categoryType: CategoryType, categoryDriver: string) => {
        const initialState = state.list.find(item => item.categoryType === categoryType);
        return initialState?.categoryDrivers.find(item => item.title === categoryDriver)
     },
 
  },
})


