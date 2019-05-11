

// grabbing information from external websites and store it to db to be shown later
// api Link: https://api.themoviedb.org/3/movie/550?api_key=8c8e6671dee375daf51aada0fbc80c19
// the image https://image.tmdb.org/t/p/w400/ptkr63GoSBaOoUIX6TBXny5KJYl.jpg
// /ptkr63GoSBaOoUIX6TBXny5KJYl.jpg


import axios from 'axios';
import {loading,not_loading} from '../../login/actions';
import {BuildQuery} from '../Helpers/MoviesApiQueryBuilder';
import {MoviesListRef} from '../../assets/configs/firebase';


export const filter_params=(parent)=>{
 
  return ({adult: parent&&parent.adult?parent.adult: false,year: parent&&parent.year?parent.year:"2019" })
}

export const grapMoviesDataFromDb=(dispatch)=>{
  return ((dispatch,getState)=>{
      dispatch(loading())

      //filter params 
      let params=filter_params(getState().mainReducer.filter)
    axios.get(BuildQuery(params.adult,params.year))
     .then(res => {
        dispatch({type: "DISC_GATHERED",data: res.data.results})
        dispatch(not_loading())
    }).catch(error=>{
        console.log(error)
    })

  })



}


export const move_from_buffer_to_fb=(movies,dispatch)=>{


    return ((dispatch)=>{
      movies.map((movie)=>{console.log(movie)
        MoviesListRef.child(movie.id).set(
            {id: movie.id,
             title: movie.title,
             original_title: movie.original_title,
              overview: movie.overview,
              vote_average: movie.vote_average,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path
              });

            return   dispatch({type: "DATA_UPDATED"})
      })
    })

}

export const grapMoviesFromFb= (dispatch)=>{

  return((dispatch)=>{
    let moviesBuffer=[];
    dispatch(loading());
    MoviesListRef.once('value').then((movies)=>{


          movies.forEach((movie)=>{moviesBuffer.push(movie.val())  }  )

          dispatch({type: "FB_DATA_GATHERED",data: moviesBuffer})
          dispatch(not_loading());

    })
  })
}
export const GetMovieVote=async (id)=>{



  await MoviesListRef.child('/'+id+"/ranking").once('value').then((ranks)=>{

          if(ranks.val()===null){
              return 0;
          }else{
              console.log(ranks.val())
              }


              return 0;
    })
}


export const voteForMovie=(id,vote)=>{

  // steps to vote for a movie .

  // get the custom-ranks of the movie .
  // get the last rank of the same vote .
  // add +1 for instace if the same vote is existed
  //  add 1 if it doesn't existed
  return((dispatch)=>{
      dispatch(loading());
      MoviesListRef.child('/'+id+"/ranking").once('value').then((ranks)=>{
          if(ranks.val()===null){
            MoviesListRef.child('/'+id+"/ranking").set({
              "1": 0,"2": 0,"3":0 , "4":0,"5":0
            })
            MoviesListRef.child('/'+id+"/ranking/"+vote).once('value').then((rank)=>{
              MoviesListRef.child('/'+id+"/ranking/"+vote).set(rank.val()+1)
            })
          }else{
              MoviesListRef.child('/'+id+"/ranking/"+vote).once('value').then((rank)=>{
                MoviesListRef.child('/'+id+"/ranking/"+vote).set(rank.val()+1)
              })

          }

          dispatch(not_loading());
      }).catch((error)=>{console.log(error)})
      })
}

export const DeleteMovie=(id)=>{

  return ((dispatch)=>{
    dispatch(loading());




    dispatch(not_loading());
  })
}


//filter handlers 

export const  adult_state=(state)=>{
  return ((dispatch)=>{
        dispatch({type: "ADULT_STATE", state: state})
        dispatch(grapMoviesDataFromDb())
  })
}

export const  year_state=(year)=>{
  return ((dispatch)=>{
        dispatch({type: "YEAR_STATE", year: year})
        dispatch(grapMoviesDataFromDb())
  })
}