import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./components/HelloWorld";

ReactDOM.hydrate(
    <HelloWorld firstName="Chris" lastName="Parker" />,
    document.getElementById("content")
);
