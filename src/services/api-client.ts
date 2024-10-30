import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "03ba363e3190436a924a814a39fe942b"
    }
})
