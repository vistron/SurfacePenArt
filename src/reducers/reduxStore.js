const storeData = {
    "cards": [
    {
        key: 1,
        to: '/portrait',
        imageURL: "/assets/images/prasenjit.jpg"
    },
    {
        key: 2,
        to: '/illustration',
        imageURL: "/assets/images/superman.jpg"
    },
    {
        key: 3,
        to: '/fanart',
        imageURL: "/assets/images/stanlee.jpg"
    }
]
}

const reducer = (state = storeData, action) => {
    return state;
}

export default reducer;