
interface MethodologyData {
    list: {
        title: string
        amount: string 
        description: string
    }[]
}

interface MethodologyRadial {
        title: string
        amount: number
        fill: string
}





export const methodologyTitle: MethodologyData = {
    list: [
        {
            title: "Total Data Points",
            amount: "10M+",
            description: "More data points than traditional inflation data"
        },
        {
            title: "Real-time daily data",
            amount: "30x",
            description: "Faster than traditional inflation tracking methods"
        },
        {
            title: "Total Data Sources",
            amount: "40+",
            description: "with various methodologies for more balanced outcome"
        },
        {
            title: "Prioritizing transparency",
            amount: "Unbiased",
            description: "Providing a verifiable census level data oracle"
        }
          
]
}

export const methodologyRadials: MethodologyRadial[] = [
    {
        title: "Food & Non-alcoholic beverage",
        amount: 15.3,
        fill: "#F9C80E"
    },
    {
        title: "Housing",
        amount: 23.3,
        fill: "#E8727D"
    },
    {
        title: "Transportation",
        amount: 19.8,
        fill: "#E9919B"

    },
    {
        title: "Utilities",
        amount: 5.9,
        fill: "#926EB5"

    },
    {
        title: "Health",
        amount: 8.6,
        fill: "#556366"

    },
    {
        title: "Houshold durables & Daily use items",
        amount: 7.2,
        fill: "#7CCAD5"

    },
    {
        title: "Alcohol & Tobacco",
        amount: 1.9,
        fill: "#F19267"

    },
    {
        title: "Clothing & Footwear",
        amount: 3.8,
        fill: "#7C9DBE"

    },
    {
        title: "Communication",
        amount: 3.8,
        fill: "#EFCDB1"

    },
    {
        title: "Education",
        amount: 2.3,
        fill: "#697DAE"

    },
    {
        title: "Recreation & Culture",
        amount: 5.6,
        fill: "#A081B0"

    },
    {
        title: "Other",
        amount: 3.2,
        fill: "#99F1B7"

    }

]


