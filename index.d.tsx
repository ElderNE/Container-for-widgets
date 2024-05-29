"use strict";

import React from "react";

type PropsIn = {
    scriptIn:   string,
    divIn:      string,
    widthIn:    string,
    heightIn:   string,
    zIndex:     string,
    leftIn:     string,
    topIn:      string,
    rightIn:    string,
    bottomIn:   string,
    title:      string,
    position:   "static" | "relative" | "absolute" | "sticky" | "fixed",
    background: string,
}

export const WidgetContainer: React.FC<PropsIn> = (props:PropsIn) => {

    const { 
        scriptIn    = "<script></script>",
        divIn       = "<div></div>",
        widthIn     = "0",
        heightIn    = "0",
        zIndex      = "0",
        leftIn      = "auto",
        topIn       = "auto",
        rightIn     = "auto",
        bottomIn    = "auto",
        title       = "Clatch Widget",
        position    = "fixed",
        background  = "rgba(255,255,255,0.8)"
    } = props;

    const style: React.CSSProperties = {
            position:   position,
            bottom:     bottomIn,
            left:       leftIn,
            top:        topIn,
            right:      rightIn,
            zIndex:     zIndex,
            width:      widthIn,
            height:     heightIn,
            overflow:   "hidden",
            background: background,
    }

    const srcSource = `<!DOCTYPE html><head>${scriptIn}</head><body>${divIn}</body></html>`;

    return (
        <div style={style}>
            <iframe srcDoc={srcSource}
                    title={title}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    referrerPolicy="no-referrer"
                    allow="none"
                    style={{width: widthIn, height: heightIn, border: "none"}}>
            </iframe>
        </div>
    );
  }
  