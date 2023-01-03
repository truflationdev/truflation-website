import { CategoryList, CategoryType } from "~~/components/categoryTypes";

export const categoryData: CategoryList = {
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
                        datasets: [{
                            label: 'Data One',
                            borderColor: '#0D58C6',
                            backgroundColor: "#0D58C6",
                            data: [40, 39, 10, 40, 39, 80, 40]
                        }]
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
                        title: "Owned Dwellings",
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [{
                                label: 'Data One',
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
};