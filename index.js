"use strict";

export function WidgetContainer(props) {

    const { 
        scriptIn        = "<script></script>",
        divIn           = "<div></div>",
        widthIn         = "0",
        heightIn        = "0",
        zIndex          = "0",
        leftIn          = "auto",
        topIn           = "auto",
        rightIn         = "auto",
        bottomIn        = "auto",
        title           = "Clatch Widget",
        position        = "fixed",
        background      = "rgba(255,255,255,0.8)",
        sandboxRules    = "allow-scripts allow-same-origin allow-popups"
    } = props;

    const stylePosition = {
            position:   position,
            bottom:     bottomIn,
            left:       leftIn,
            top:        topIn,
            right:      rightIn,
            zIndex:     zIndex,
            width:      widthIn,
            height:     heightIn,
            overflow:   "hidden",
            background: background
    }

    const srcSource = `<!DOCTYPE html><head>${scriptIn}</head><body>${divIn}</body></html>`;

    return (
        <div style={stylePosition}>
            <iframe srcDoc={srcSource}
                    title={title}
                    loading="lazy"
                    sandbox={sandboxRules}
                    referrerPolicy="no-referrer"
                    allow="none"
                    style={{width: widthIn, height: heightIn, border: "none"}}>
            </iframe>
        </div>
    );
  }