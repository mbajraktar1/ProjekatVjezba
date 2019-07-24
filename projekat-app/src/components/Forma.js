import React from 'react';

class Forma extends React.Component {
  render() {
    return (
      <div className="fff">
        <form>
            Username: <input type="text"></input> <br/> <br/>
            Password : <input type="text"></input> <br/> <br/>
            <button> Log In </button>
        </form> 
      </div>
    );
  }
}

export default Forma;
