import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import "./Board.css";

function Board(props) {

  return (
    <div className={"Board"}>
      <Clock timeZone={+5} location={"Samarkand, Uzbekistan"} />;
      <Clock timeZone={-8} location={"Los Angeles, USA"} />;
      <Clock timeZone={-4} location={"Puerto Rico, USA"} />;
      <Clock timeZone={-3} location={"Rio de Janeiro, Brazil"} />;
      <Clock timeZone={0} location={"Dublin, Ireland"} />;
      <Clock timeZone={+1} location={"Stockholm, Sweden"} />;
      <Clock timeZone={+2} location={"Kiev, Ukraine"} />;
      <Clock timeZone={+3.5} location={"Tehran, Iran"} />;
      <Clock timeZone={+7} location={"Bangkok, Thailand"} />;
      <Clock timeZone={+8} location={"Beijing, China"} />;
      <Clock timeZone={+9} location={"Tokyo, Japan"} />;
      <Clock timeZone={+10} location={"Guam, USA"} />;
    </div>
  );
}

export default Board;