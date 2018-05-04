
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        // console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="../assets/red.png"
                    alt="red"
                  />
                  <div className="carousel-caption">
                    <h1>Front End Developer</h1>
                  </div>
                </div>
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="../assets/mountains.png"
                    alt="mountains"
                  />
                  <div className="carousel-caption">
                    <h1>Front End Developer</h1>
                  </div>
                </div><div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src="../assets/snow.png"
                    alt="snow"
                  />
                  <div className="carousel-caption">
                    <h1>Front End Developer</h1>
                  </div>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};

export default Carousel
