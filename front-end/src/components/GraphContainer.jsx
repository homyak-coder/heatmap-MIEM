import React, { useEffect, useState } from "react";
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
  VictoryScatter,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import axios from "axios";
import h337 from "heatmap.js";

function WindowHeatMap(props) {
  return (
    <div class="heatmap-pic">
      <div className="heatmap-iframe">
        <iframe
          class="heatmap-home"
          id="heatmap-home"
          src="http://localhost:3000/"
          height="1000px"
        ></iframe>
      </div>
    </div>
  );
}

function WindowGraphs(props) {
  return (
    <div class="victorypie">
      <div class="graph-description">
        <p>Зависимость количества кликов от типа браузера</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>

      </div>
    </div>
  );
}


class GraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onHeatMap = this.onHeatMap.bind(this);
    this.onGraphs = this.onGraphs.bind(this);
    this.state = { isHeatMap: true };
  }
  onHeatMap() {
    this.setState({ isHeatMap: true });
  }
  onGraphs() {
    this.setState({ isHeatMap: false });
  }

  render() {
    const isHeatMap = this.state.isHeatMap;
    let window = null;
    if (isHeatMap) {
      window = <WindowHeatMap />
    } else {
      window = <WindowGraphs />;
    }
    return (
      <section className="graphs" >
        <div className="graphs-container">
          <div className="graphs-buttons">
            <button onClick={this.onHeatMap}>
              Тепловая карта
            </button>
            <button onClick={this.onGraphs}>
              Графики
            </button>
          </div>
          <div className="graphs-main-content">
            <div className="graphs-filters"></div>
            <div className="graphs-window">
              {window}
            </div>
          </div>
        </div>
      </section>
    )
  }
};
export default GraphContainer;
