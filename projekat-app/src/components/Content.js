import React from 'react'

class Content extends React.Component {
  render() {
    return (
      <div className="sadrzaj">
        <div className="kvadrat"> <p className="tekst2"> PRVI </p> </div>
        <div className="kvadrat"> <p className="tekst2"> DRUGI </p> </div>
        <div className="kvadrat"> <p className="tekst2"> TRECI </p> </div>
        <div className="kvadrat"> <p className="tekst2"> CETVRTI </p> </div>
      </div>
    );
  }
}

export default Content;