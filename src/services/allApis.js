import { Base_URL } from "./base_url"
import { commonRequest } from "./commonStructure"

//add data
export const addBookApi=async(bodyData)=>{
return await   commonRequest('POST',`${Base_URL}/books`,bodyData)
}

//display data
export const getDataApi=async()=>{
return await   commonRequest('GET',`${Base_URL}/books`,{})
}

//delete data
export const delBookApi=async(id)=>{
    return await  commonRequest('DELETE',`${Base_URL}/books/${id}`,{})
}

//get SingleBook
export const SingelDataApi=async(id)=>{
   return await commonRequest('GET',`${Base_URL}/books/${id}`,{})
}

//update Book

export const UpdateBookApi=async(id,bodyData)=>{
  return await commonRequest('PUT',`${Base_URL}/books/${id}`,bodyData)
}