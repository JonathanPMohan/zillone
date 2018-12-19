import React from 'react';
import './ListingForm.scss';


class ListingForm extends React.Component {
  render() {
    return (
      <div className="listing Form col">
        <h2>ADD NEW LISTING:</h2>
        <form>
          <div className="form-group">
            <label for="address">ADDRESS:</label>
            <input 
            type="text" 
            className="form-control" 
            id="address" 
            aria-describedby="addressHelp" 
            placeholder="123 Elm Street Nashville, TN  37205" 
            />
          </div>
          <button className="btn btn-danger">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
