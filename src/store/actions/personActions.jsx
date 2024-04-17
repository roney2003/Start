export { removeperson } from "../reducers/personSlice"
import axios from "../../utils/Axios"
import { loadperson } from "../reducers/personSlice"


export const asyncloadperson = (id) => async(dispatch,getState) => {
    try{
       const detail = await axios.get(`/person/${id}`);
       const externalid =await axios.get(`/person/${id}/external_ids`);
       const combinedcredits =await axios.get(`/person/${id}/combined_credits`);
       const tvcredits =await axios.get(`/person/${id}/tv_credits`);
         const moviecredits =await axios.get(`/person/${id}/movie_credits`);
       let theultimatedetails = {
                detail: detail.data,
                externalid: externalid.data,
                combinedcredits: combinedcredits.data,
                tvcredits: tvcredits.data,
                moviecredits: moviecredits.data,
              
       };

       dispatch(loadperson(theultimatedetails));
       console.log(theultimatedetails);
} catch (error) {
    console.log(error);
}
}
 