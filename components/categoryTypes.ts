export enum CategoryType {
  FoodAndBev = "Food & Non-alcoholic Beverages",
  Housing = "Housing",
  Transportation = "Transport",
  Utilities = "Utilities",
  Health = "Health",
  HouseDailyItems = "Household Durables & Daily Use Items",
  AlchTobac = "Alcohol & Tobacco",
  Clothing = "Clothing & Footwear",
  Communications = "Communications",
  Education = "Education",
  Recreation = "Recreation & Culture",
  Others = "Other",
}

export enum TimePeriod {
  OneWeek = "1W",
  OneMonth = "1M",
  SixMonths = "6M",
  YTD = "YTD",
  OneYear = "1Y",
}

export interface ChartLabels {
  generalChart: string[];
  categoryChart: string[];
  driverChart: ChartConfig;
  categorySelection: TimePeriod;
  mainSelection: TimePeriod;
  totalLabels: string[];
}

export interface ChartConfig {
  scales: {
    x: {
      min: string;
      max: string;
    };
  };
  responsive: boolean;
  maintainAspectRatio: boolean;
  elements: {
    point: {
      radius: number;
    };
  };
}

export interface GraphData {
  datasets: DataSet[];
}

export interface DataSet {
  label: string;
  fill: boolean;
  borderColor: string;
  backgroundColor: string;
  data: number[];
}

export interface SubCategory {
  title: string;
  data: GraphData;
}

export interface CategoryDriver extends SubCategory {
  about: AboutData;
  latestValue: number;
}

export interface Source {
  title: string;
  link: string;
}

export interface AboutData {
  report: string;
  source: Source;
  frequency: string;
  adjustment: string;
  newRelease: string;
}

export interface CategoryChanges {
  quarter: number;
  yesterday: number;
  weekAgo: number;
  monthAgo: number;
}

export interface IndicatorData {
  title: string;
  value: number;
}

export interface CategoryData {
  categoryType: CategoryType;
  about: string;
  indicatorData: IndicatorData[];
  subCategories: GraphData[];
  categoryDrivers: CategoryDriver[];
  relative_importance: number;
}

export interface StateData {
  categoryType: CategoryType;
  about: string;
  categoryDrivers: string[];
  relativeImportance: number;
  categoryRate: CategoryChanges;
  data: GraphData;
}

export interface InflationData {
  selectedPeriod: TimePeriod;
  periodData: {
    title: TimePeriod;
    currentRate: number;
    high: number;
    low: number;
    change: number;
    data: number;
  };
}

export interface CategoryList {
  selectedCategory: CategoryType;
  selectedSubCategory: string;
  selectedCountry: string;
  list: CategoryData[];
}

export interface VideoLinks {
  title: string;
  link: string;
}
