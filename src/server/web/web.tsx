import express from "express";
import http from "http";
import path from "path";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import { HelloWorld as App } from "./components/HelloWorld"; //replace with the client side app route
import html from "../../template";
const PORT = process.env.PORT || 3000;

// const html = fs.readFileSync("../../index.html").toString();
console.log(html);
const parts = html.split("not rendered");

const app = express();

app.use(express.static("public"));
app.use("/", (req, res) => {
    res.write(parts[0]);
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App firstName="Chris" lastName="Parker" />
        </ServerLocation>
    );

    const stream = renderToNodeStream(reactMarkup);
    stream.pipe(res, { end: false });
    stream.on("end", () => {
        res.write(parts[1]);
        res.end();
    });
});

export const start = (port: number): Promise<void> => {
    const server = http.createServer(app);

    return new Promise<void>((resolve, reject) => {
        server.listen(port, resolve);
    });
};
