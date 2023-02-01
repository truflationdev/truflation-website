import { CategoryType } from "~~/components/categoryTypes";

export const categoryData: string[] = [
  "This category includes the cost of food and non-alcoholic beverages consumed both at home and away from home. Home consumption is typically purchased from supermarkets and kiosks, while away-from-home consumption includes food from quick-service restaurants, full-service restaurants, hotels, bars, etc.",
  "The housing data is categorized into three sub-categories: 1) Owned dwellings, which encompasses mortgage payments, property taxes, maintenance costs, insurance, and other household expenses; 2) Rented dwellings; and 3) Other types of lodging.",
  "Transportation refers to the act of moving from one place to another, and it encompasses four main areas: 1) Purchased vehicles, both new and used; 2) Gasoline; and 3) Public transportation.",
  "This category encompasses services that are accessible to the general public, such as natural gas, electricity, fuel oil and other fuels, as well as water and other public services.",
  "The health sector encompasses businesses that offer medical services, provide medical insurance, manufacture medical supplies or drugs, and contribute to the provision of healthcare to patients.",
  "This category refers to items bought for household use, including durable goods, daily use items, and household expenses for personal services and operations.",
  "This category encompasses all alcoholic beverages (beer, wine, and spirits) and tobacco products and smoking supplies, regardless of where they are purchased.",
  "The apparel category encompasses clothing, footwear, and other clothing-related products and services for men, women, children, and babies.",
  "The communication sector encompasses entities that offer residential communication services, such as landline phone, VoIP, and phone cards, as well as cellular/mobile phone services.",
  "The education sector encompasses establishments that provide instruction and training in various subjects, as well as those that create content to aid individuals in expanding their knowledge.",
  "The arts, entertainment, and recreation sector encompasses a diverse array of establishments that operate facilities, provide services, or offer experiences to meet the cultural, entertainment, and recreational interests of their patrons.",
  "The 'others' category includes all remaining household expenses that have not been previously listed, such as personal care products and services and miscellaneous expenses.",
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
