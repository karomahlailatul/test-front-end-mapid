import React, { Fragment } from "react";
import { Marker } from "react-map-gl";

class Layer extends React.Component {
  size = 20;
  ICON =
    "m 5.5 12 z m 1.547 -12 q 2.906 0 4.945 2.039 t 2.039 4.945 q 0 1.453 -0.727 3.328 t -1.758 3.516 t -2.039 3.07 t -1.711 2.273 l -0.75 0.797 q -0.281 -0.328 -0.75 -0.867 t -1.688 -2.156 t -2.133 -3.141 t -1.664 -3.445 t -0.75 -3.375 q 0 -2.906 2.039 -4.945 t 4.9 -2.039 L 7 4 C 3 4 3 9 7 11 C 11 9 11 4 7 4 z";

  pinStyle = (color) => {
    let filledCol;
    if (color === "Merah") {
      filledCol = "#FF0000";
    }
    if (color === "Kuning") {
      filledCol = "#FFFF00";
    }
    if (color === "Hijau") {
      filledCol = "#008000";
    }
    if (!color) {
      filledCol = "#E9E9";
    }
    return {
      cursor: "pointer",
      fill: filledCol,
      stroke: "none",
    };
  };

  onMarkerClick = async (e, data) => {
    this.props.updateState({ popupInfo: data });
    e.originalEvent.stopPropagation();
  };

  render() {
    return (
      <Fragment>
        <Marker
          longitude={this.props.data.geometry.coordinates[0]}
          latitude={this.props.data.geometry.coordinates[1]}
          onClick={(e) => this.onMarkerClick(e, this.props.data)}
        >
          <svg height={this.size} viewBox="0 0 24 24" style={this.pinStyle(this.props.data.properties.Status)}>
            <path d={this.ICON} />
          </svg>
        </Marker>
      </Fragment>
    );
  }
}

export default Layer;
