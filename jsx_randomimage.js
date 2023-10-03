import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

var url = "https://picsum.photos/200/300";

const myElement = (
  <div>
    <img className="picsumImg" alt="random1" src={url + "?random1"} />
    <img className="picsumImg" alt="random1" src={url + "?random2"} />
    <img className="picsumImg" alt="random1" src={url + "?random3"} />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(myElement);
