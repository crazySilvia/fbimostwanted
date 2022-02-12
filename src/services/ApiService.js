import axios from "axios";

export const getVillain = async (i) =>
    await axios
        .get("https://api.fbi.gov/wanted/v1/list?page=" + i)
        .then(response => response.data)