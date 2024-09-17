import music from "../model/music.js";
import Music from "../model/music.js";
export const getAllMovie = async () => {
    const allMovie = await Music.find();
    console.log("from services", allMovie);
    return allMovie;
};

export const createMusic = async () => {
    try {
        const response = await Music.create({ "name": "song1" });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
export const Movie = async (id) => {
    const response = await Music.findOne({ "_id": id });
    return response;
};
export const musicAddition =async(data)=>{
    const response=await Music.create({name:data})
    return response
}
export const deleteMusic=async(id)=>{
    const response= await Music.deleteOne({"_id":id})
    return response


}
export const updateMusic=async(id,data)=>{
    try{
    const response= await music.findOneAndUpdate({"_id":id},data,{new:true})
    return response


    }
    catch(error){
        console.log("couldnot update")

    }

}
