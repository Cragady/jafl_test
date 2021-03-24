import axios from "axios";

export default {
    getProducts() {
        return axios.get(`${process.env.REACT_APP_CMS_API}/products`)
    }
}