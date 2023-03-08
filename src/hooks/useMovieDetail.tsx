import React from 'react'
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import moviesDB from '../api/moviesDb';
import { MovieFull } from '../interface/movieInterface';
import { CreditsMovie, Cast } from '../interface/creditsInterface';


interface MovieDetailProps{
    isLoading:boolean;
    movieFull?:MovieFull
    cast:Cast[];
}

//INITIAL STATE
const useMovieDetail = (movieId:number) => {
 const[state, setState]=useState<MovieDetailProps>({
    isLoading:true,
    movieFull:undefined,
    cast:[],
 });

  

 const getMovieDetails = async()=>{
    const movieDetailPromise = await moviesDB.get<MovieFull>(`/${movieId}`)
    const movieCreditsPromise = await moviesDB.get<CreditsMovie>(`/${movieId}/credits`)
 

    const[movieDetailResp, movieCreditResp]= await Promise.all([movieDetailPromise, movieCreditsPromise])

setState({
    isLoading:false,
    movieFull:movieDetailResp.data,
    cast:movieCreditResp.data.cast,
})

}

useEffect(()=>{
    getMovieDetails()
}, []);

return {
    ...state
}
}




export default useMovieDetail