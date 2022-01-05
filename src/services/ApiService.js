import axios from "axios";

export const getVillain = () =>
    axios
        .get("https://api.fbi.gov/wanted/v1/list")
        .then(response => response.data)