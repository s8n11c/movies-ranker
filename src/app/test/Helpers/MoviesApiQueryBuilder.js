/*
query attributes :
  apikey
  language
  sort_by
  include_adult
  include_video

  ...others
  */
import {API_KEY}  from '../../assets/configs/config';



let adult=false;
  export const BuildQuery=()=>{
    // will be altered later
    return "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult="+adult+"&include_video=false&page=1&primary_release_year=2019"
}
