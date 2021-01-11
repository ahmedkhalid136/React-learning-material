// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

// const { speedStats } = tesla;
// const { topSpeed } = speedStats;
// const teslaTopSpeed = topSpeed;

// const [teslaTopColour] = tesla.coloursByPopularity;

// const { speedStats: hondaSpeedStats } = honda;
// const { topSpeed: hondatopSpeed } = hondaSpeedStats;
// const hondaTopSpeed = hondatopSpeed;
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

// const [hondaTopColour] = honda.coloursByPopularity;

const { coloursByPopularity: [teslaTopColour] } = tesla;
const { coloursByPopularity: [hondaTopColour] } = honda;

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
