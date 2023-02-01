import { CategoryType } from "~~/components/categoryTypes";

export const categoryData: string[] = [
  "This covers food and non-alcoholic beverages consumed at home which is generally purchased at Supermarkets, Kiosks etc (includes cereals & bakery products, meat, poultry, fish, eggs,  dairy products, fruits & vegetables, other food at home, water, carbonated soft drinks, non carbonated soft drinks and other non alcoholic beverages) as well as food purchased away from home in quick service restaurants, restaurants, Hotels, bars etc.",
  "Housing data is broken down into three sub categories; Owned dwellings (includes mortgages, property taxes, maintenance repairs, insurance and other household expenses), Rented dwellings and other lodging.",
  "Transportation includes the intentional movement from one location to another and is broken down into 4 main areas: Purchased vehicles be it new or used vehicles, Gasoline / Petrol and motor oils, Other vehicle expenses (includes finance charges, maintenance and repairs, vehicle leases, rentals, insurance and other charges) and finally public transportation.",
  "These are services that are used by the public that include natural gas, electricity, fuel oil and other fuels and finally water and other public services.",
  "The heath sector consists of business that provide medical services, provide medical insurance, manufacturers medical supplies or drugs to facilitate the provision of health care to patients.",
  "These are items purchased for the household that include both durables as well as daily use items.  Categories included in this are household furnishings and equipment (textiles, furniture, floor coverings, appliances etc), General housekeeping supplies (laundry / cleaning supplies, postage, stationery, and other household products) and finally household operations (personal services and household expenses)",
  "This includes all alcoholic beverages (beer, wine and spirits) and all tobacco products and smoking supplies no matter where the products are purchased.",
  "Apparel not only covers clothes but also footwear as well as other apparel products and services for men women children and babies.",
  "The communication sector includes entities that provide residential communication services such as phone, VOIP and phone cards as well as cellular / mobile phone services.",
  "The educational category comprises of establishments that provide instruction and training in a wide variety of subjects as well as content to facilitate the expansion of knowledge of individuals.",
  "The arts, entertainment and recreation sector include a wide range of establishments that operate facilitates or provide services to meet varied cultural, entertainment and recreational interest of their patrons.  This sector includes the following sub categories: fees and admissions, audio and visual equipment and services, pets / toys / hobbies and playground equipment and finally any other entertainment supplies and services.",
  "The others category captures all the remaining household expenditure items that have not been listed about but include things such as personal care products and services as well as miscellaneous expenses (financial institutions fees, funeral services etc).",
];

export interface IconObject {
  name: CategoryType;
  icon: string;
}

export const categoryIcon: IconObject[] = [
  {
    name: CategoryType.FoodAndBev,
    icon: "food.svg",
  },
  {
    name: CategoryType.Housing,
    icon: "house.svg",
  },
  {
    name: CategoryType.Transportation,
    icon: "transport.svg",
  },
  {
    name: CategoryType.Utilities,
    icon: "Tools.svg",
  },
  {
    name: CategoryType.Health,
    icon: "heart.svg",
  },
  {
    name: CategoryType.HouseDailyItems,
    icon: "Dishwasher.svg",
  },
  {
    name: CategoryType.AlchTobac,
    icon: "wine.svg",
  },
  {
    name: CategoryType.Clothing,
    icon: "Clothes.svg",
  },
  {
    name: CategoryType.Communications,
    icon: "Chat.svg",
  },
  {
    name: CategoryType.Education,
    icon: "Graduation.svg",
  },
  {
    name: CategoryType.Recreation,
    icon: "Pyramids.svg",
  },
  {
    name: CategoryType.Others,
    icon: "Icon.svg",
  },
];
