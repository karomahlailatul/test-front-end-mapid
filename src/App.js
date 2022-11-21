import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Map from "react-map-gl";
import * as Configs from "./configs";
import * as Components from "./components";
import "mapbox-gl/dist/mapbox-gl.css";

import { Store } from "./configs";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { popupInfo: null, styleId: "light", Datas: this.props.dataApi, token: this.props.token };
    this.updateState = this.updateState.bind(this);
  }

  updateState(nextState) {
    this.setState(nextState);
  }

  styles = {
    light: "mapbox://styles/mapbox/outdoors-v9",
    dark: "mapbox://styles/vinoarystio/cl6ttky7b000y14my3f7khdlk",
  };

  componentDidMount() {
    this.props.getApi();
    Store.subscribe(() => {
      this.setState(() => ({
        ...this.state,
        Datas: Store.getState().dataApi.Datas,
      }));
    });
  }

  render() {
    return (
      <Fragment>
        <Map
          style={{ width: "100%", height: "100vh" }}
          mapStyle={this.styles[this.state.styleId]}
          initialViewState={{
            longitude: 107.608238,
            latitude: -6.914864,
            zoom: 12,
          }}
          mapboxAccessToken={this.props.token}
        >
          <Routes>
            <Route path="/" element={<Components.Filter updateState={this.updateState} data={this.state} />} />
            <Route path="status-merah" element={<Components.Filter updateState={this.updateState} data={this.state} color="Merah" />} />
            <Route path="status-hijau" element={<Components.Filter updateState={this.updateState} data={this.state} color="Hijau" />} />
            <Route path="status-kuning" element={<Components.Filter updateState={this.updateState} data={this.state} color="Kuning" />} />
          </Routes>

          {this.state.popupInfo && <Components.PopUp popupInfo={this.state.popupInfo} updateState={this.updateState} />}

          <Components.Menu state={this.state} updateState={this.updateState} />
        </Map>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token.value,
    dataApi: state.dataApi.Datas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => dispatch(Configs.GetApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
