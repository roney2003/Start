export { removetv } from "../reducers/tvSlice"
import axios from "../../utils/Axios"
import { loadtv } from "../reducers/tvSlice"


export const asyncloadtv = (id) => async(dispatch,getState) => {
    try{
       const detail = await axios.get(`/tv/${id}`);
       const externalid =await axios.get(`/tv/${id}/external_ids`);
       const recommendations =await axios.get(`/tv/${id}/recommendations`);
       const similar =await axios.get(`/tv/${id}/similar`);
       const vedios =await axios.get(`/tv/${id}/videos`);
         const translations =await axios.get(`/tv/${id}/translations`);
       const watchproviders =await axios.get(`/tv/${id}/watch/providers`);
       let theultimatedetails = {
                detail: detail.data,
                externalid: externalid.data,
                recommendations: recommendations.data,
                translations: translations.data.translations.map(t => t.english_name),  
                similar: similar.data.results,
                vedios: vedios.data.results.find(m => m.type === "Trailer"),
                watchproviders: watchproviders.data
       };

       dispatch(loadtv(theultimatedetails));
       console.log(theultimatedetails);
} catch (error) {
    console.log(error);
}
}
 
