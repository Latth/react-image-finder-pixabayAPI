import React from "react";
import SearchInput from "./SearchInput.js";
import ImageList from "./ImageList.js";
import axios from "axios";

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (entry) => {
       const response =  await axios.get(`https://pixabay.com/api/?key=25986069-cee2790695747b594f34b7a0e&q=${entry}&image_type=photo&pretty=true`);
       this.setState({ images: response.data.hits });
    }

    render() {
        return (
            <div className="ui container">
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}


export default App;