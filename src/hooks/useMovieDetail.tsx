import React from 'react'
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import moviesDB from '../api/moviesDb';
import { MovieFull } from '../interface/movieInterface';


interface MovieDetailProps{
    isLoading:boolean;
    movieFull:MovieFull
    cost:any[]
}
const useMovieDetail = (movieId:number) => {
 const[state, setState]=useState<MovieDetailProps>();
  

 const getMovieDetails = async()=>{
    const resp= await moviesDB.get<MovieFull>(`/${movieId}`)

console.log(resp.data.overview)
}

useEffect(()=>{
    getMovieDetails
}, []);

return {
    state
}
}




export default useMovieDetail
