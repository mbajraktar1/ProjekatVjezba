import React from 'react';

class Forma extends React.Component {
  render() {
    return (
      <div className="fff">
        <form>
            <p className="tekst"> Username: </p> <input type="text"></input> <br/>
            <p className="tekst"> Password : </p> <input type="password"></input> <br/> <br/>
            <button> Log In </button>
        </form> 
      </div>
    );
  }
}

export default Forma;
