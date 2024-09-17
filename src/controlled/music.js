import { response } from "express";
import * as MovieService from "../service/music.js";

export const getAllMovie = async (req, res) => {
    const response = await MovieService.getAllMovie();
    console.log(response);
    res.status(200).json(
        // response.map((music) => ({ id: music._id, name: music.name }))
        response
    );
};


export const Music = async (req, res) => {
    const { id } = req.params;
    const music = await MovieService.Movie(id);
    res.status(200).json(music);
};

export const musicAddition=async(req,res)=>{
    const {name}=req.body
    const music=await MovieService.musicAddition(name)
    res.status(200).json({name:music}  )

}
export const musicRemoval=async(req,res)=>{
    const { id } = req.params
    const music=await MovieService.deleteMusic(id)
    res.status(200).json("deleted")
}
export const musicUpdate=async(req,res)=>{
    const{id}=req.params
    const{name}=req.body 
    const music=await MovieService.updateMusic(id,name)
res.status(200).json("updated")
}