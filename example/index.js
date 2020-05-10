import React from "react";
import { render } from "react-dom";
import { ThemeProvider, Typography, Button } from "@material-ui/core";
import { Carousel } from "../src";

function App() {
    return (
        <>
            <Typography color="primary" variant="h4">
                Demo Page for mui-carousel
            </Typography>
            <Carousel />
        </>
    );
}

function Root() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

render(<Root />, document.getElementById("root"));
