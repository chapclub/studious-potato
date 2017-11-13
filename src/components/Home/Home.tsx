import * as React from 'react';
import './Home.css';

export interface HomeProps {}

export default class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div className="HomeContainer">
        <div className="HomeHeaderContainer">
          <span className="HomeHeader">
            detouch.club
            <span className="HomeSubHeader">
              touch. tell. tickle.
            </span>
          </span>

          <div className="HomeButtonContainer">
            <a className="HomeButton">
              Log In
            </a>

            <a className="HomeButton">
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}
