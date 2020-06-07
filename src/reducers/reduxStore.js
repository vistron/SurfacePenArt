const storeData = {
    "cards": [
    {
        key: 1,
        title: "Portrait",
        to: '/portrait',
        imageURL: "/assets/images/prasenjit.jpg"
    },
    {
        key: 2,
        to: '/illustration',
        title: "Illustration",
        imageURL: "/assets/images/superman.jpg"
    },
    {
        key: 3,
        to: '/fanart',
        title: "Fan Art",
        imageURL: "/assets/images/stanlee.jpg"
    }
]
}

const reducer = (state = storeData, action) => {
    return state;
}

export default reducer;