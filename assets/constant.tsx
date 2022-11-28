export const ROUTES = {
    home: "/home",
    jobs: {
        index: "/jobs",
        create: "/create",
        filters: "/filters",
    },
    businesses: {
        index: "/businesses",
        create: "/business",
        filters: "/business",
    },
    market_place: {
        products: {
            index: "/market_place/products",
            create: "/products/create",
            filters: "/products/filters"
        },
        services: {
            index: "/market_place/services",
            create: "/services/create",
            filters: "/services/filters"
        }
    },
    real_estate: {
        index: "/real_estate",
    },
    cultural_groups: {
        index: "/cultural_groups",
    },
    litumba_hub: {
        index: "/litumba_hub"
    },
    notification : "/notifications",
    conversations : "/conversations",
    followers : "/followers",
    followed : "/following",
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