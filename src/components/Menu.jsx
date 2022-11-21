import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../scss";

class Menu extends React.Component {
  state = { clickSort: false, darkMode: false, navigate: true };

  clickMode = () => this.setState((e) => ({ ...this.state, darkMode: !e.darkMode }));
  showSort = () => this.setState((e) => ({ ...this.state, clickSort: !e.clickSort }));

  DarkMode = () => {
    this.clickMode();
    this.props.updateState({ styleId: "dark" });
  };

  LightMode = () => {
    this.clickMode();
    this.props.updateState({ styleId: "light" });
  };

  Button = ({ type, title, icon, onclick, path, classname }) => (
    <Fragment>
      {type === "href" && (
        // <Link className={classname} to={path}>
        <button className={classname} onClick={onclick}>
          <Link style={{ textDecoration: "none" }} to={path}>
            <p className={cssModule.Components.link}>{title}</p>
          </Link>
        </button>
      )}
      {type === "btn" && (
        <button className={classname} onClick={onclick}>
          {icon}
          <p>{title}</p>
        </button>
      )}
    </Fragment>
  );

  render() {
    return (
      <Fragment>
        <div className={cssModule.Components.sortRow}>
          <div className={this.state.clickSort ? cssModule.Components.sortColor : cssModule.Components.sortColorHide}>
            <this.Button type="href" path="/status-merah" title="Merah" />
            <this.Button type="href" path="/status-hijau" title="Hijau" />
            <this.Button type="href" path="/status-kuning" title="Kuning" />
            <this.Button type="href" path="/" title="Semua" />
          </div>
          <div className={cssModule.Components.sortButton}>
            {this.state.darkMode ? (
              <this.Button type="btn" onclick={this.LightMode} classname={cssModule.Components.buttonLight} icon={<FaIcons.FaSun />} />
            ) : (
              <this.Button type="btn" onclick={this.DarkMode} classname={cssModule.Components.buttonDark} icon={<FaIcons.FaMoon />} />
            )}
            <this.Button type="btn" onclick={this.showSort} classname={cssModule.Components.buttonSort} title="Sortir" icon={<FaIcons.FaFilter />} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Menu;
