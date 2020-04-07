import React, { Component } from 'react'
import {storage} from '../firebase';
export class ImageUpload extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  image:null,
                  url:'',
                  progress:0
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
      }

      handleChange = (e) =>{
            if(e.target.files[0]){
                  const image = e.target.files[0];
                  this.setState(()=> ({image}));
            }
      }
      handleUpload = () =>{
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed', 
            (snapshot)=>{
                  //Progress
                  const progress = Math.round((snapshot.bytesTransferred / snapshot .totalBytes) * 100);
                  this.setState({progress})
      
            }           
            ,(error)=>{
                  //error
                        console.log(error);
            },()=>{
                  //complete
                  storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                       this.setState({url});
                  })
            })


      }
      render() {
            return (
                  <div>
                        <h3>Upload Image Here</h3>
                        <progress value={this.state.progress} max='100'/>
                        <br/>
                        <input type="file" onChange={this.handleChange} />
                        <button onClick={this.handleUpload}>upload</button>
                        <img src = {this.state.url || 'https://via.placeholder.com/300'} alt="image coming soon" height='200'width='300'/> 
                        <br/>
                        <br/>
                        <br/>  
                        

                  </div>
            )
      }
}

export default ImageUpload;
