import axios from "axios";

export const CmsAPI = {

    CmsUrl: process.env.REACT_APP_CMS_API,

    getProducts() {
        return axios.get(`${this.CmsUrl}/products`)
    },

    getProduct(id) {
        return axios.get(`${this.CmsUrl}/products/` + id)
    }
}