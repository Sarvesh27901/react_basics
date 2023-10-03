// index.js file   

import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import MyList from "./components/mylist";

var url = "https://picsum.photos/200/300";

const myElement = <MyList />;

const root = createRoot(document.getElementById("root"));
root.render(myElement);


// in component/mylist file

function MyList(){
  return (
    <ol>
      <li>Insta </li>
      <li> whatsapp </li>
    </ol>

  )
}

export default MyList;
