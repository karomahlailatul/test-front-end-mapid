import React, { Fragment } from "react";

import * as Components from "./";

class Filter extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.data?.Datas?.map((data, index) => (
          <Fragment key={index}>
            {this.props.color ? (
              <Fragment>
                {data.properties.Status === this.props.color ? <Components.Layer data={data} updateState={this.props.updateState} /> : null}
              </Fragment>
            ) : (
              <Fragment key={index}>
                {this.props.data.Datas?.map((data, index) => (
                  <Components.Layer key={index} data={data} updateState={this.props.updateState} />
                ))}
              </Fragment>
            )}
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

export default Filter;
