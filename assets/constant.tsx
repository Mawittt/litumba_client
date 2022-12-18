
export const ROUTES = {
    home: "/home",
    jobs: {
        index: "/jobs",
        create: "/jobs/create",
        update: '/jobs/update',
        filters: "/jobs/filters",
    },
    businesses: {
        index: "/businesses",
        create: "/businesses/create",
        filters: "/businesses/filters",
        update : "/businesses/update"
    },
    market_place: {
        products: {
            index: "/market_place/products",
            create: "/market_place/products/create",
            filters: "/market_place/products/filters",
            update: "/market_place/products/update"
        },
        services: {
            index: "/market_place/services",
            create: "/market_place/services/create",
            filters: "/market_place/services/filters",
            update : "/market_place/services/update",
            caseStudy : {
                index : "/market_place/services/case-study/",
                update : "/market_place/services/case-study/update"
            }

        }
    },
    real_estate: {
        index: "/real_estate",
        filters : "/real_estate/filters",
        create : "/real_estate/create",
        update : "/real_estate/update",
    },
    cultural_groups: {
        index: "/cultural_groups",
        filters: "/cultural_groups/filters",
        create: "/cultural_groups/create",
        update : "/cultural_groups/update"
    },
    litumba_hub: {
        index: "/litumba_hub"
    },
    notification : "/notifications",
    conversations : "/conversations",
    followers : "/followers",
    following : "/following",
    settings : "/settings",
    profile : "/profile",
    post_details : "/post_details"
    

}


export const actions = {
    like : "like",
    follow : "follow",
    system : "system",
    review : "review",
} 

export const generalNiches = ["manual job", "health" , "art" , "web development" , "app development" , "tourism" , "business", "marketing" , "social media" ]

export const jobFilterFormOptions = {
    price : ["30k - 50k", "50k - 100k" , "100k - 500K" , "500k - 1M" , "1M++"],
    urgency : ["now", "1-3 days" , "1 week" , "1-3 weeks" , "1 month" , "1-3months" , "3months++"],
    niche : generalNiches,
    expertise : ["beginner" , "intermediate" , "expert"],
    schedule : ["part time" , "full time"]
}

export const BusinessFormOptions = {
    niches : generalNiches
}

export const productFormOptions = {
    prices : ["1k-5k", "5k-10k" , "10k-50k" , "50k-100k" , "100k-500k" , "500k-1M" , "1M+"],
    niches : ["electronics", "dressing" , "kitchen utensils" , "furniture" , "tools & utensils" , "books" , "Agricultural products" , "machineries" , "vehicles"],
    quantities : ["1-5", "5-10" , "10-50" , "50-100" , "100-500" , "500-1k" , "1k+"]
}

export const servicesFormOptions = {
    prices : ["1k - 5k" , "5k - 10k" , "10k - 50k" , "50k - 100k" , "100k - 500k" , "500k - 1M" , "1M+"],
    niches : generalNiches
}

export const RealEstateFormOptions = {
    prices : ["10K - 30K" , "30k - 50K" , "50k - 100k" , "100k - 500K" , "500k - 1M" , "1M+"],
    types : ["room" , "apartment" , "studio" , "hall" , "villa" , "duplex"]
}

export const LitumbaHubFormOptions = {
    prices : ["1k - 5k" , "5k - 10k" , "10k - 50k" , "50k - 100k" , "100k - 500k" , "500k - 1M" , "1M+"],
    niches : generalNiches
}