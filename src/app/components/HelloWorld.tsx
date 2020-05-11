import * as React from "react";

export interface HelloWorldProps {
    firstName: string;
    lastName: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
    <h1>heeeu i m the client</h1>
);
