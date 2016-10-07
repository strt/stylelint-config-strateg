module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-length": "long",
    "function-comma-space-after": "always-single-line",
    "declaration-empty-line-before": "never",
    "at-rule-empty-line-before": {
      "ignoreAtRules": [
        "else",
        "if"
      ]
    },
    "string-quotes": "single",
    "declaration-block-properties-order": [
      [
        // Positioning
        {
          "order": "flexible",
          "properties": [
            "position",
            "z-index",
            "top",
            "right",
            "bottom",
            "left"
          ]
        },

        // Box-Model
        {
          "order": "flexible",
          "properties": [
            "align-content",
            "align-items",
            "align-self",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-bottom",
            "border-color",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-image",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-left",
            "border-radius",
            "border-radius",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-right",
            "border-style",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-top",
            "border-width",
            "border",
            "box-sizing",
            "clear",
            "display",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "flex",
            "float",
            "height",
            "justify-content",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "margin",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "order",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "outline",
            "overflow-x",
            "overflow-y",
            "overflow",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "padding",
            "visibility",
            "width"
          ]
        },

        // Table
        {
          "order": "flexible",
          "properties": [
            "border-collapse",
            "border-spacing",
            "caption-side",
            "empty-cells",
            "table-layout"
          ]
        },

        // Typography
        {
          "order": "flexible",
          "properties": [
            "color",
            "font-family",
            "font-size-adjust",
            "font-size",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "font",
            "letter-spacing",
            "line-height",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-shadow",
            "text-transform",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap"
          ]
        },

        // Visual
        {
          "order": "flexible",
          "properties": [
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position-x",
            "background-position-y",
            "background-position",
            "background-repeat",
            "background-size",
            "background",
            "box-decoration-break",
            "box-shadow",
            "opacity"
          ]
        }
      ], { "unspecified": "ignore" }
    ]
  }
}
