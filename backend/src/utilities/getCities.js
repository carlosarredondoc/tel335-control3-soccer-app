import { getCommunes,getRegions } from 'dpacl'

export const getCitiesForRegions = () => {
    let data = {}
    const cities = getCommunes()
    const regions = getRegions()
    for (const city of cities) {
        if (!data[regions.filter(region => region.id == city.regionId)[0]['name']] ){
            data[regions.filter(region => region.id == city.regionId)[0]['name']] = []
        }else{
            data[regions.filter(region => region.id == city.regionId)[0]['name']].push(city.name)
        }
        
    }
    return data
}
