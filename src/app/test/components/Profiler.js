
import eye from '../../../app/assets/images/eye.jpg';
import logout from '../../../app/assets/images/logout.png';
import React from 'react'

class Profiler extends React.Component{

  render(){


    const style={
        container: {display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              color: this.props.color,
              marginTop: "2vh",
              marginBottom: "2vh",
              marginLeft: "1vw",
              marginRight: "1vw"
        },
        eye:{
          width: "45px",
          height: "45px",
           borderRadius: "50%"
        },
        HeaderContainer: {
          flexShrink: "0vw",flexDirection: "o"
        }
    }
    return(<div style={style.container} >
      <img src={eye} style={style.eye} alt="Avatar" />
      <div style={style.HeaderContainer}>
        <h3 style={{flex: 1,margin: "auto", fontSize: "28px"}}> King Kong </h3>
        <h5 style={{ flex: 1,margin: "auto",color: "#4fd2b2"}}> online </h5>
      </div>
      <img src={logout} alt="logout" style={{width: "29px",height: "32px", borderRadius: "50%"}}  />
    </div>)
  }
};


export default Profiler;
