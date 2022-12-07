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
            update : "/market_place/services/update"
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