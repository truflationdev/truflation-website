
export interface StaffData {
    name: string
    role: string
    pictureURL: string
}

export interface staffDataSet {
    list: StaffData[]
} 

export interface CustomerData {
    list : {
        name: string
        description: string
    }[]
}

export interface BlogData {
    list: {
        name: string,
        date: string
    }[]
}

export const staffData: staffDataSet = {
    list: [
        {
            name: "Stefan Rust",
            role: "CEO",
            pictureURL: "stefan-rust"
        },
        {
            name: "Oliver Rust",
            role: "Head of Product",
            pictureURL: "~/assets/img/staff/Oliver-rust.png"
        },
        {
            name: "Ken Cenna",
            role: "Business Development Manager",
            pictureURL: "~assets/img/staff/Ken-cenna.png"
        },
        {
            name: "Natalia Nowakowska",
            role: "Product Marketing and Community",
            pictureURL: "../assets/img/staff/nat.png"
        },
        {
            name: "Joseph Wang",
            role: "Architecture Lead",
            pictureURL: "../assets/img/staff/Joseph-wang.png"
        },
        {
            name: "Ivan Jelic",
            role: "Head of Data",
            pictureURL: "Truflation-website/new-website/assets/img/staff/Ivan-Jelic.png"
        },
        
    ]
}

export const CustomerData: CustomerData = {
    list: [
        {
            name: "Miner",
            description: "A utility token that tokenizes the service of gold mining. Truflation is backing their minertoken."
        },
        {
            name: "NUON",
            description: "The first stablecoin to launch that is based on the US dollar adjusted for inflation, measured by the Truflation rate."
        },
        {
            name: "DUEL Protocol",
            description: "A multi chain-synthetic asset & yield aggregator that uses the Truflation index to create a asset protected inflation product."
        },
        {
            name: "i-Bonds",
            description: "I-bonds is a decentralized version of I-bonds (inflation adjusted savings bonds) that pays rewards based on Truflation data."
        },
        {
            name: "Plation",
            description: "Plation is a decentralized prediction market, where users predict the movement of inflation provided by Truflation."
        },
        {
            name: "Inflotto",
            description: "Inflotto is a inflation based raffle used to bet on the increase or decrease in the Truflation rate. User closest to the correct results wins."
        }
    ]
}

export const blogData: BlogData = {
    list: [{
            name: "Truflation blog 1",
            date: "Nov 14 2022"
    },
    {
        name: "Truflation blog 2",
        date: "Nov 14 2022"
    },
    {
        name: "Truflation blog 3",
        date: "Nov 14 2022"
    }
]
}

export const resourcePoints: CustomerData = {
    list: [
        {
            name: "Truflation WhitePaper",
            description: "View the transparent data sources"
        },
        {
            name: "Core CPI Research",
            description: "Download key points of this category",
        },
        {
            name: "TFI Token Whitepaper",
            description: "Download data feed to spreadsheets"
        },
        {
            name: "Methodology Research",
            description: "Understand our advanced methods"
        }
    ]
}

export const devData: BlogData = {
    list: [{
            name: "Check out a video our CEO made with Chainlink Labs",
            date: "Nov 14 2022"
    },
    {
        name: "Check out Truflation AMA on Based Space",
        date: "Nov 14 2022"
    },
    {
        name: "Truflation Decentralized Inflation Data: Use Cases and Why It Matters",
        date: "Nov 14 2022"
    }
]
}