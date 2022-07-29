import axios from 'axios'

// Maps JavaScript API from https://console.cloud.google.com/ 
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '18b1474fd8msh511c6eaac15f774p10c289jsn29c2b7870c08',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })

        return data
    } catch (error) {
        console.log(error);
    }
}