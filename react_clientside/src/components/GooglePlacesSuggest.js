import React, {Component} from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
import "react-google-places-suggest/lib/index.css"

const MY_API_KEY = "AIzaSyDwsdjfskhdbfjsdjbfksiTgnoriOAoUOgsUqOs10J0" // fake

class MyGoogleSuggest extends Component {
  state = {
  }

  render() {
    const {search} = this.state
    const {googleMaps} = this.props

    return (
      <GooglePlacesSuggest
        googleMaps={googleMaps}
        onSelectSuggest={this.props.onSelectSuggest}
        search={this.props.query}
      >
        <input
          id = "destination_input"
          type="text"
          value={this.props.query}
          onChange={this.props.onChange}
        />
        <label>Where to?</label>
      </GooglePlacesSuggest>
    )
  }
}

export default GoogleMapLoader(MyGoogleSuggest, {
  libraries: ["places"],
  key: MY_API_KEY,
})
