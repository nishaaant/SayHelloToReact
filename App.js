import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parentdiv" },

    React.createElement("div", { id: "childdiv" }, [
        React.createElement("h1", { id: "heading" }, "Mai Mahaan hu 😤"),
        React.createElement("h2", { id: "heading" }, "huahahauahha")]),
    React.createElement("div", { id: "childdiv" }, [
        React.createElement("h1", { id: "heading" }, "The Third Heading"),
        React.createElement("h2", { id: "heading" }, "The Fourth Heading")])
);

//connecting ReactDOM root
const root = ReactDOM.createRoot(document.getElementById("root"));
//to render
root.render(parent);