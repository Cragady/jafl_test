import axios from "axios";

export const CmsAPI = {

    CmsUrl: process.env.REACT_APP_CMS_API,

    therapy: '/fast-food-version-of-therapies',

    getProducts() {
        return axios.get(`${this.CmsUrl}/products`)
    },

    getProduct(id) {
        return axios.get(`${this.CmsUrl}/products/` + id)
    },

    getTherapies() {
        return axios.get(this.CmsUrl + this.therapy)
    },

    getTherapy(id) {
        return axios.get(this.CmsUrl + this.therapy + '/' + id)
    }
}