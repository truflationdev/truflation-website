import { defineStore } from "pinia";
import {
  CategoryType,
  DataSet,
  StateData,
  CategoryChanges,
  ChartLabels,
  GraphData,
  TimePeriod,
} from "~~/components/categoryTypes";

export const govData = {
  label: "Government Data",
  borderColor: "#002152",
  backgroundColor: "#002152",
  data: [
    { x: "2022-03-14", y: 8.5 },
    { x: "2022-04-14", y: 8.3 },
    { x: "2022-05-14", y: 8.6 },
    { x: "2022-06-14", y: 9.1 },
    { x: "2022-07-14", y: 8.5 },
    { x: "2022-08-14", y: 8.3 },
    { x: "2022-09-14", y: 8.2 },
    { x: "2022-10-14", y: 7.7 },
    { x: "2022-11-14", y: 7.1 },
    { x: "2022-12-14", y: 6.5 },
    { x: "2023-01-14", y: 6.4 },
  ],
};

export const ukGovData = {
  label: "Government Data",
  borderColor: "#002152",
  backgroundColor: "#002152",
  data: [
    { x: "2022-03-14", y: 7 },
    { x: "2022-04-14", y: 9 },
    { x: "2022-05-14", y: 9.1 },
    { x: "2022-06-14", y: 9.4 },
    { x: "2022-07-14", y: 10.1 },
    { x: "2022-08-14", y: 9.9 },
    { x: "2022-09-14", y: 10.1 },
    { x: "2022-10-14", y: 11.1 },
    { x: "2022-11-14", y: 10.7 },
    { x: "2022-12-14", y: 10.5 },
    { x: "2023-01-14", y: 10.1 },
  ],
};

export const categoryData: string[] = [
  "This covers food and non-alcoholic beverages consumed at home which is generally purchased at Supermarkets, Kiosks etc as well as food purchased away from home in quick service restaurants, restaurants, Hotels, bars etc.",
  "Housing data is broken down into three sub categories; Owned dwellings (includes mortgages, property taxes, maintenance repairs, insurance and other household expenses), Rented dwellings and other lodging.",
  "Transportation includes the intentional movement from one location to another and is broken down into 4 main areas: Purchased vehicles be it new or used vehicles, Gasoline and public transportation.",
  "These are services that are used by the public that include natural gas, electricity, fuel oil and other fuels and finally water and other public services.",
  "The heath sector consists of business that provide medical services, provide medical insurance, manufacturers medical supplies or drugs to facilitate the provision of health care to patients.",
  "These are items purchased for the household that include both durables as well as daily use items and household operations (personal services and household expenses)",
  "This includes all alcoholic beverages (beer, wine and spirits) and all tobacco products and smoking supplies no matter where the products are purchased.",
  "Apparel not only covers clothes but also footwear as well as other apparel products and services for men women children and babies.",
  "The communication sector includes entities that provide residential communication services such as phone, VOIP and phone cards as well as cellular / mobile phone services.",
  "The educational category comprises of establishments that provide instruction and training in a wide variety of subjects as well as content to facilitate the expansion of knowledge of individuals.",
  "The arts, entertainment and recreation sector include a wide range of establishments that operate facilitates or provide services to meet varied cultural, entertainment and recreational interest of their patrons.",
  "The others category captures all the remaining household expenditure items that have not been listed about but include things such as personal care products and services as well as miscellaneous expenses.",
];

export enum SelectedCountry {
  USA = "USA",
  GBR = "UK",
}

export const useDataStore = defineStore({
  id: "Data-store",
  state: () => {
    return {
      currentTime: "",
      loading: false as boolean,
      showBanner: false as boolean,
      selectedCountry: SelectedCountry.USA,
      selectedCategory: CategoryType.FoodAndBev,
      selectedCategoryDriver: "unknown",
      govData: {
        UK: {
          label: "Government Data",
          borderColor: "#002152",
          backgroundColor: "#002152",
          data: [
            { x: "2022-03-14", y: 7 },
            { x: "2022-04-14", y: 9 },
            { x: "2022-05-14", y: 9.1 },
            { x: "2022-06-14", y: 9.4 },
            { x: "2022-07-14", y: 10.1 },
            { x: "2022-08-14", y: 9.9 },
            { x: "2022-09-14", y: 10.1 },
            { x: "2022-10-14", y: 11.1 },
            { x: "2022-11-14", y: 10.7 },
            { x: "2022-12-14", y: 10.5 },
            { x: "2023-01-14", y: 10.1 },
          ],
        },
        US: {
          label: "Government Data",
          borderColor: "#002152",
          backgroundColor: "#002152",
          data: [
            { x: "2022-03-14", y: 8.5 },
            { x: "2022-04-14", y: 8.3 },
            { x: "2022-05-14", y: 8.6 },
            { x: "2022-06-14", y: 9.1 },
            { x: "2022-07-14", y: 8.5 },
            { x: "2022-08-14", y: 8.3 },
            { x: "2022-09-14", y: 8.2 },
            { x: "2022-10-14", y: 7.7 },
            { x: "2022-11-14", y: 7.1 },
            { x: "2022-12-14", y: 6.5 },
            { x: "2023-01-14", y: 6.4 },
          ],
        },
      },
      blog: [],
      chartLables: {
        generalChart: [] as string[],
        categoryChart: [] as string[],
        categorySelection: TimePeriod.OneYear,
        mainSelection: TimePeriod.OneYear,
        driverChart: {},
        totalLabels: [],
      },
      keyMetrics: {
        high: 0 as number,
        low: 0 as number,
        Inflation: 0 as number,
        change: 0 as number,
      },

      MainData: {
        datasets: [
          {
            label: "Truflation Rate",
            borderColor: "#A36FE4",
            fill: true,
            backgroundColor: "#f87979",
            data: [] as number[],
          },
        ],
      },
      list: [
        {
          categoryType: CategoryType.Housing,
          about:
            "Lorem ipsum dolor sit amet consectetur. Duis amet sed interdum tincidunt eu placerat pulvinar. Sit faucibus est ultricies platea ac pellentesque accumsan sit vitae. Egestas blandit faucibus scelerisque volutpat. Euismod turpis non commodo id. Ultrices nibh aenean tortor mi elementum.",
          indicatorData: [
            { title: "Yoy rate", value: 9.32 },
            { title: "Vs Yesterday", value: 0.43 },
            { title: "Vs Week", value: -0.79 },
            { title: "Vs Month", value: -0.59 },
          ],
          subCategories: {
            labels: ["01", "02", "04", "05", "06", "08", "09", "10", "11"],
            datasets: [
              {
                label: "Owned Dwellings",
                borderColor: "#0D58C6",
                backgroundColor: "#0D58C6",
                data: [
                  40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40, 40,
                  39, 10, 40, 39, 80, 40,
                ],
              },
              {
                label: "Rented Dwellings",
                borderColor: "#A36FE4",
                backgroundColor: "#A36FE4",
                data: [35, 22, 15, 10, 33, 80, 40],
              },
              {
                label: "Other",
                borderColor: "#A5C39C",
                backgroundColor: "#A5C39C",
                data: [10, 20, 15, 50, 33, 80, 40],
              },
            ],
          },
          categoryDrivers: [
            {
              about: {
                report: "New Residential Sales",
                source: {
                  title: "Census Buereu",
                  link: "Census Buereu",
                },
                frequency: "Monthly",
                adjustment: "Seasonally Adjusted Annual Rate",
                newRelease: "26th Oct, 2022",
              },
              latestValue: 50000,
              title: "New Residential Sales",
              data: {
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "New Residential Sales",
                    borderColor: "#0D58C6",
                    backgroundColor: "#0D58C6",
                    data: [40, 39, 10, 40, 39, 80, 40],
                  },
                ],
              },
            },
          ],
          relativeImportance: 14.9,
        },
        {
          categoryType: CategoryType.FoodAndBev,
          about:
            "Lorem ipsum dolor sit amet consectetur. Duis amet sed interdum tincidunt eu placerat pulvinar. Sit faucibus est ultricies platea ac pellentesque accumsan sit vitae. Egestas blandit faucibus scelerisque volutpat. Euismod turpis non commodo id. Ultrices nibh aenean tortor mi elementum.",
          indicatorData: [
            { title: "Yoy rate", value: 6.32 },
            { title: "Vs Yesterday", value: 0.22 },
            { title: "Vs Week", value: -0.59 },
            { title: "Vs Month", value: -0.39 },
          ],
          subCategories: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Owned Dwellings",
                borderColor: "#0D58C6",
                backgroundColor: "#0D58C6",
                data: [40, 39, 10, 40, 39, 80, 40],
              },
              {
                label: "Rented Dwellings",
                borderColor: "#0D58C6",
                backgroundColor: "#0D58C6",
                data: [35, 22, 15, 10, 33, 80, 40],
              },
              {
                label: "Other",
                borderColor: "#0D58C6",
                backgroundColor: "#0D58C6",
                data: [10, 20, 15, 50, 33, 80, 40],
              },
            ],
          },
          categoryDrivers: [
            {
              about: {
                report: "New Residential Sales",
                source: {
                  title: "Census Buereu",
                  link: "Census Buereu",
                },
                frequency: "Monthly",
                adjustment: "Seasonally Adjusted Annual Rate",
                newRelease: "26th Oct, 2022",
              },
              latestValue: 50000,
              title: "New Sales",
              data: {
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "New Residential Sales",
                    borderColor: "#0D58C6",
                    backgroundColor: "#0D58C6",
                    data: [40, 39, 10, 40, 39, 80, 40],
                  },
                ],
              },
            },
            {
              about: {
                report: " Residential Sales",
                source: {
                  title: "Census Buereu",
                  link: "Census Buereu",
                },
                frequency: "Monthly",
                adjustment: "Seasonally Adjusted Annual Rate",
                newRelease: "26th Oct, 2022",
              },
              latestValue: 50000,
              title: " Sales",
              data: {
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "New Residential Sales",
                    borderColor: "#0D58C6",
                    backgroundColor: "#0D58C6",
                    data: [10, 20, 15, 50, 33, 80, 40],
                  },
                ],
              },
            },
            {
              about: {
                report: "New Residential Sales",
                source: {
                  title: "Census Buereu",
                  link: "Census Buereu",
                },
                frequency: "Monthly",
                adjustment: "Seasonally Adjusted Annual Rate",
                newRelease: "26th Oct, 2022",
              },
              latestValue: 50000,
              title: "New Residential Sales",
              data: {
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "New Residential Sales",
                    borderColor: "#0D58C6",
                    backgroundColor: "#0D58C6",
                    data: [40, 39, 10, 40, 39, 80, 40],
                  },
                ],
              },
            },
          ],
          relativeImportance: 14.9,
        },
      ],
    };
  },
  actions: {
    updateCategory(categoryType: CategoryType) {
      if (categoryType !== null) {
        this.selectedCategory = categoryType;
      }
    },
    updateSelectedCategoryDriver(categoryType: CategoryType) {
      if (categoryType !== null) {
        this.selectedCategoryDriver = categoryType;
      }
    },

    updateBlog(blogData: any) {
      this.blog = blogData;
    },

    updateSelectedCountry(country: SelectedCountry) {
      this.selectedCountry = country;
    },

    hydrateState(state: any) {
      const MainRateData: number[] = [];
      const mainRateLabels: string[] = [];
      this.chartLables.generalChart = [];
      this.MainData.datasets[0].data = [];
      this.chartLables.generalChart = [];

      this.keyMetrics.low = state.w.ytdMin[1].toFixed(2);
      this.keyMetrics.high = state.w.ytdMax[1].toFixed(2);
      this.keyMetrics.Inflation = state.w.yoyCur[1].toFixed(2);
      const equation =
        ((state.w.yoyCur[1] - Object.values(state.n)[0][0]) /
          Object.values(state.n)[0][0]) *
        100;
      this.keyMetrics.change = equation.toFixed(1);

      Object.entries(state.n).forEach((entry) => {
        const [key, value] = entry;
        mainRateLabels.push(key);
        MainRateData.push(value[0]);
      });

      mainRateLabels.sort(function compare(a: any, b: any) {
        var dateA = new Date(a);
        var dateB = new Date(b);
        return dateA - dateB;
      });

      this.chartLables.generalChart = mainRateLabels;
      this.MainData.datasets[0].data = MainRateData;
      this.chartLables.generalChart = mainRateLabels;

      state.c.map((item: any, index: any) => {
        const newLabels: string[] = [];
        const values: number[] = [];

        Object.entries(state.n).forEach((entry) => {
          const [key, value] = entry;

          if (index + 1 > value.length) {
            return;
          }

          newLabels.push(key);
          values.push(value[index + 1]);
        });

        newLabels.sort(function compare(a: any, b: any) {
          var dateA = new Date(a);
          var dateB = new Date(b);
          return dateA - dateB;
        });

        const Dataset: DataSet = {
          label: item.name,
          fill: true,
          borderColor: "#A36FE4",
          backgroundColor: "#A36FE4",
          data: values,
        };

        const rateData: CategoryChanges = {
          quarter: state.d.lastQuarter[index],
          weekAgo: state.d.lastWeek[index],
          monthAgo: state.d.lastMonth[index],
          yesterday: state.d.yesterday[index],
        };

        const options = {
          scales: {
            x: {
              min: newLabels[newLabels.length - 365],
              max: newLabels[newLabels.length - 1],
            },
          },
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            point: {
              radius: 0,
            },
          },
        };

        const labels: ChartLabels = {
          generalChart: this.chartLables.generalChart,
          categoryChart: newLabels,
          categorySelection: TimePeriod.OneYear,
          mainSelection: TimePeriod.OneYear,
          driverChart: options,
          totalLabels: newLabels,
        };

        const stateObject: StateData = {
          categoryType: item.name,
          about: categoryData[index],
          categoryDrivers: item.names,
          relativeImportance: item.relative_importance.toFixed(2),
          categoryRate: rateData,
          data: {
            datasets: [Dataset],
          },
        };

        this.chartLables = labels;
        this.list[index] = stateObject;
        this.loading = false;
      });
    },

    updateCatLabel(period: number, timePeriod: TimePeriod) {
      const currentLabels = this.chartLables.totalLabels;
      const newArray = currentLabels.slice(
        currentLabels.length - period,
        currentLabels.length
      );
      this.chartLables.categoryChart = newArray;
      this.chartLables.categorySelection = timePeriod;
    },

    setLoading(loadingState: boolean) {
      this.loading = loadingState;
    },

    setShowBanner(bannerState: boolean) {
      this.showBanner = bannerState;
    },

    updateMainLabel(period: number, timePeriod: TimePeriod) {
      const currentLabels = this.chartLables.totalLabels;
      const newArray = currentLabels.slice(
        currentLabels.length - period,
        currentLabels.length
      );

      this.chartLables.generalChart = newArray;
      this.chartLables.mainSelection = timePeriod;

      if (this.selectedCountry === SelectedCountry.USA) {
        if (period < 60) {
          this.govData.US.data = [];
          return;
        }
        const newGovArray = govData.data.slice(
          govData.data.length - period / 30,
          govData.data.length
        );
        this.govData.US.data = newGovArray;
      }
      if (this.selectedCountry === SelectedCountry.GBR) {
        if (period < 60) {
          this.govData.UK.data = [];
          return;
        }
        const newGovArray = ukGovData.data.slice(
          ukGovData.data.length - period / 30 + 1,
          govData.data.length
        );
        this.govData.UK.data = newGovArray;
      }
    },

    updateCurrentTime(time: any) {
      this.currentTime = time;
    },

    updateMainLabelYTD(timePeriod: TimePeriod) {
      const currentLabels = this.chartLables.totalLabels;
      const index = currentLabels.indexOf("2023-01-01");
      const newArray = currentLabels.slice(index, currentLabels.length);

      if (this.selectedCountry === SelectedCountry.USA) {
        const index = govData.data.indexOf("2023-01-14");
        const newGovArray = govData.data.slice(index, govData.data.length);
        this.govData.US.data = newGovArray;
      }
      if (this.selectedCountry === SelectedCountry.GBR) {
        const index = ukGovData.data.indexOf("2023-01-14");
        const newGovArray = ukGovData.data.slice(index, ukGovData.data.length);
        this.govData.US.data = newGovArray;
      }

      this.chartLables.generalChart = newArray;
      this.chartLables.mainSelection = timePeriod;
    },

    updateCatLabelYTD(timePeriod: TimePeriod) {
      const currentLabels = this.chartLables.totalLabels;
      const index = currentLabels.indexOf("2023-01-01");
      const newArray = currentLabels.slice(index, currentLabels.length);
      this.chartLables.categoryChart = newArray;
      this.chartLables.categorySelection = timePeriod;
    },
  },
  getters: {
    getByCategoryType: (state) => (categoryType: CategoryType) => {
      return state.list.find((item) => item.categoryType === categoryType);
    },

    getSelectedDriver: (state) => () => {
      return state.selectedCategoryDriver;
    },

    getSubCategoryType: (state) => (categoryType: CategoryType) => {
      const initialState = state.list.find(
        (item) => item.categoryType === categoryType
      );
      return initialState?.subCategories;
    },

    getCatChart: (state) => (data: GraphData) => {
      const newArray = data.datasets[0].data.slice(
        data.datasets[0].data.length - state.chartLables.categoryChart.length,
        data.datasets[0].data.length
      );

      const dataset: DataSet = {
        label: data.datasets[0].label,
        borderWidth: 5,
        borderColor: "#0D58C6",
        backgroundColor: "#0D58C6",
        data: newArray,
      };

      const object = {
        labels: state.chartLables.categoryChart,
        datasets: [dataset],
      };
      return object;
    },

    getMainChart: (state) => (data: GraphData) => {
      const newArray = data.datasets[0].data.slice(
        data.datasets[0].data.length - state.chartLables.generalChart.length,
        data.datasets[0].data.length
      );

      const dataset: DataSet = {
        label: data.datasets[0].label,
        borderWidth: 5,
        borderColor: "#0D58C6",
        backgroundColor: "#0D58C6",
        data: newArray,
      };
      const dataArray = [dataset];

      if (state.selectedCountry === SelectedCountry.USA) {
        dataArray.push(state.govData.US);
      }
      if (state.selectedCountry === SelectedCountry.GBR) {
        dataArray.push(state.govData.UK);
      }

      const object = {
        labels: state.chartLables.generalChart,
        datasets: dataArray,
      };
      return object;
    },

    getInflationDayChange: (state) => (): number => {
      const dataSets = state.MainData.datasets[0].data;
      const equation =
        dataSets[dataSets.length - 1] - dataSets[dataSets.length - 2];
      return equation;
    },

    getMarkerWidth: (state) => () => {
      const low = state.keyMetrics.low;
      const high = state.keyMetrics.high;
      const spread = high - low;
      const number = (high - state.keyMetrics.Inflation) / high;
      return number * 100;
    },

    getHighAndLow: (state) => () => {
      return state.keyMetrics;
    },

    getCatRange: (state) => (data: GraphData) => {
      return state.chartLables.categoryChart;
    },

    getDateToday: (state) => () => {
      const date =
        state.chartLables.totalLabels[state.chartLables.totalLabels.length - 1];

      return (
        date.slice(-2) + " / " + date.slice(5, 7) + " / " + date.slice(0, 4)
      );
    },

    getCategoryDrivers:
      (state) => (categoryType: CategoryType, categoryDriver: string) => {
        const initialState = state.list.find(
          (item) => item.categoryType === categoryType
        );
        return initialState?.categoryDrivers.find(
          (item) => item.title === categoryDriver
        );
      },
  },
});
