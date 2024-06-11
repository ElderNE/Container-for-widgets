<div style="text-align: center;">
[![License](https://github.com/ElderNE/c-widget-container/blob/main/images/licence.svg)]()
</div>

<hr>

# clutch-widget-nextjs

Module for Clutch widget in Next Js/React environment.
Wrap the widget code to iframe.

## Installation

```sh
npm install clutch-widget-nextjs
```

### Data from Clatch:

scriptIn    "string"
divIn       "string"

### Size:

widthIn     "string"
heightIn    "string"

### Position:

position    "static" | "relative" | "absolute" | "sticky" | "fixed"
zIndex      "string"
leftIn      "string"
topIn       "string"
rightIn     "string"
bottomIn    "string"

### Title:

title

### Background:

background

## Default values

scriptIn        = "`<script></script>`",
divIn           = "`<div></div>`",
widthIn         = "0",
heightIn        = "0",
zIndex          = "0",
leftIn          = "auto",
topIn           = "auto",
rightIn         = "auto",
bottomIn        = "auto",
title           = "Clatch Widget",
position        = "fixed",
background      = "rgba(255,255,255,0.8)"
sandboxRules    = "allow-scripts allow-same-origin allow-popups"

### Example:

```sh
import { WidgetContainer } from "clutch-widget-nextjs";

<WidgetContainer
    scriptIn={`<script></script>`}
    divIn={`<div></div>`}
    widthIn={"205px"}
    heightIn={"65px"}
    zIndex={"1"}
    leftIn={"auto"}
    bottomIn={"auto"}
    topIn={"10px"}
    rightIn={"auto"}
    position={"absolute"}
    background={"rgba(255,255,255,0.7)"}
    sandboxRules={"allow-scripts allow-same-origin allow-popups"}
/>
```

## License

MIT

