import request from '../Axios/request'
const Authbase = `${process.env.REACT_COMMON_URL}`

export default {

    restaurents() {
        return request({
            url: `${Authbase}/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
            method: "GET",
        })
    },

    restaurentMenu(resId) {
        return request({
            url: `${Authbase}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}`,
            method: "GET",

        })
    }


}