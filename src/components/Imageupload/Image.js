import React, { Component } from "react";

export class Image extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };

  componentDidMount() {
    this.setState({
      profileImg: JSON.parse(localStorage.getItem("imgFile")) || null,
      screenState: JSON.parse(localStorage.getItem("screenState") || 0)
    });
  }
  imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    //error on empty file, reproduce the error by choosing large file >> alert will pop >> choose file then close without choosing

    reader.onload = () => {
      console.log("hello", file.size);
      if (file.size > 5000000) {
        alert("File size limit reached");
        return;
      }
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result, screenState: 1 });
        localStorage.imgFile = JSON.stringify(reader.result);
        localStorage.screenState = JSON.stringify(1);
      } else {
        return <h1>Loading</h1>;
      }
    };

    if (file && file.type.match("image.*")) {
      reader.readAsDataURL(file);
    } else {
      alert("Please choose a valid image file");
    }
  };
  render() {
    const { profileImg, screenState } = this.state;
    if (screenState === 0) {
      return (
        
          <div className='card'>
            
              {console.log(profileImg)}
              {/* <img src={profileImg} alt="" id="img"  /> */}
           
            <button className='button' type="file" onChange={this.imageHandler}>+</button>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={this.imageHandler} //set screen state to the other screen */}
            />
          </div>
        
      );
    } else {
      return (
        <>
          <div className="Card">
            {console.log(profileImg)}
            <img src={profileImg} alt=""  className="card" />
          </div>
        </>
      );
    }
  }
}



export default Image
