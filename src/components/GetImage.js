import React, { Component } from 'react';
import { storage } from '../firebase';



class GetImage extends Component {

      state = {
            images: []
      }
      componentDidMount() {
            storage.ref('images/').listAll().then((image) => {
                  const imageRefs = image.items.map(item => {
                        return item.getDownloadURL()

                  })
                  Promise.all(imageRefs).then(images =>this.setState({
                        images
                  }));           
            })

      }

      render() {
            return (
                 <div>
                        <h4> Images  Render </h4>
                        {this.state.images.map(image=>{
                              return(
                                    <img src={image} width="100" height="150"/>
                              )
                        })}

                  </div>
            )
      }




}


export default GetImage;