import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Component } from "react";
import axios from "axios";

export class App extends Component {

  state = {
    images: [],
  };

  async componentDidMount() {
    const key = '30986125-b49381751b2e2f4b8e31e6edc';
    axios.defaults.baseURL = 'https://pixabay.com/api/'
    const response = await axios.get(`?key=${key}`);
    this.setState({ images: response.data.hits });
  }

  render () {
 
    return (
      <>
        <SearchBar/>
        <ImageGallery images={this.state.images}/>
          
        
      </>
    );
  }
};
