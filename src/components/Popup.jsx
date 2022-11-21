import React, { Fragment } from "react";
import { Popup } from "react-map-gl";
import * as cssModule from "../scss";

class PopUp extends React.Component {
  Card = ({ title, desc }) => (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );

  render() {
    return (
      <Fragment>
        <Popup
          longitude={this.props.popupInfo.geometry.coordinates[0]}
          latitude={this.props.popupInfo.geometry.coordinates[1]}
          onClose={() => this.props.updateState({ popupInfo: null })}
        >
          <div className={cssModule.Components.popUp}>
            <this.Card title="Nama" desc={this.props.popupInfo.properties.Nama} />
            <this.Card title="Status" desc={this.props.popupInfo.properties.Status} />
            <this.Card title="Angka" desc={this.props.popupInfo.properties.Angka} />
          </div>
        </Popup>
      </Fragment>
    );
  }
}
export default PopUp;
