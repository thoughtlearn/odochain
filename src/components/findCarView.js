import React from 'react';
import {Button, Heading, Project, Table, Words} from "arwes";
import axios from 'axios';

class FindCarView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vinValue: '',
      odoValue: ''
    }
  }

  componentWillReceiveProps() {
  }

  updateInput (event) {
      this.setState({
        vinValue: event.target.value
      })
  }

  checkOdoValue () {
    axios.get('http://localhost:8080/check-odovalue?vin=' + this.state.vinValue)
        .then(response => {
          this.setState({
            odoValue: response.data["odo_value"].toString()
          })
        }).catch(error => {
            this.setState({
              odoValue: "Invalid Vin Number"
            })
         });
  }

  render () {
    return (
        <div className="padding20LR">
          <Project animate header='Find Car'>
            <div className="findCarView">
              <Heading node='h3'> Enter VIN Number </Heading>
              {/*<p> { this.state.vinValue} </p>*/}
              <input type="text" className="findCarInput" onChange={this.updateInput.bind(this)}/>
              <Button onClick={this.checkOdoValue.bind(this)} className="odoCheckButton">
                <Heading className="odoButtonText">
                  Check Odometer Value
                </Heading>
              </Button>
              <div className="odoAnswer">
               { this.state.odoValue ?
                  (<Heading node='h1' > ODOMETER VALUE: {this.state.odoValue} Miles </Heading>):
                  ('')}

              </div>

            </div>
          </Project>
        </div>
    );
  }

}

export default FindCarView;