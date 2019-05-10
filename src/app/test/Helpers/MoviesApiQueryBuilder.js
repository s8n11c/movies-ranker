/*
query attributes :
  apikey

  language
  sort_by
  include_adult
  year
  popularity

  ...others
  */
import {API_KEY}  from '../../assets/configs/config';





  export const BuildQuery=(adult=false,primary_release_year='2019')=>{
    // will be altered later
    return "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult="+adult+"&include_video=false&page=1&primary_release_year="+primary_release_year
}
