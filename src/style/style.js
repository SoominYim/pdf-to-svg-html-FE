const css = `@charset "utf-8";
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  .annotationLayer {
    --annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
    --input-focus-border-color: Highlight;
    --input-focus-outline: 1px solid Canvas;
    --input-unfocused-border-color: transparent;
    --input-disabled-border-color: transparent;
    --input-hover-border-color: black;
    --link-outline: none;
    @media screen and (forced-colors: active) {
      --input-focus-border-color: CanvasText;
      --input-unfocused-border-color: ActiveText;
      --input-disabled-border-color: GrayText;
      --input-hover-border-color: Highlight;
      --link-outline: 1.5px solid LinkText;
      .textWidgetAnnotation :is(input, textarea):required,
      .choiceWidgetAnnotation select:required,
      .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required {
        outline: 1.5px solid selectedItem;
      }
      .linkAnnotation {
        outline: var(--link-outline);
        &:hover {
          backdrop-filter: var(--hcm-highlight-filter);
        }
        & > a:hover {
          opacity: 0 !important;
          background: none !important;
          box-shadow: none;
        }
      }
      .popupAnnotation .popup {
        outline: calc(1.5px * var(--scale-factor)) solid CanvasText !important;
        background-color: ButtonFace !important;
        color: ButtonText !important;
      }
      .highlightArea:hover::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: var(--hcm-highlight-filter);
        content: "";
        pointer-events: none;
      }
      .popupAnnotation.focused .popup {
        outline: calc(3px * var(--scale-factor)) solid Highlight !important;
      }
    }
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transform-origin: 0 0;
    &[data-main-rotation="90"] .norotate {
      transform: rotate(270deg) translateX(-100%);
    }
    &[data-main-rotation="180"] .norotate {
      transform: rotate(180deg) translate(-100%, -100%);
    }
    &[data-main-rotation="270"] .norotate {
      transform: rotate(90deg) translateY(-100%);
    }
    &.disabled {
      section,
      .popup {
        pointer-events: none;
      }
    }
    canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    section {
      position: absolute;
      text-align: initial;
      pointer-events: auto;
      box-sizing: border-box;
      transform-origin: 0 0;
    }
    :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton) > a {
      position: absolute;
      font-size: 1em;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton):not(.hasBorder) > a:hover {
      opacity: 0.2;
      background-color: rgb(255 255 0);
      box-shadow: 0 2px 10px rgb(255 255 0);
    }
    .linkAnnotation.hasBorder:hover {
      background-color: rgb(255 255 0 / 0.2);
    }
    .hasBorder {
      background-size: 100% 100%;
    }
    .textAnnotation img {
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .textWidgetAnnotation :is(input, textarea),
    .choiceWidgetAnnotation select,
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) input {
      background-image: var(--annotation-unfocused-field-background);
      border: 2px solid var(--input-unfocused-border-color);
      box-sizing: border-box;
      font: calc(9px * var(--scale-factor)) sans-serif;
      height: 100%;
      margin: 0;
      vertical-align: top;
      width: 100%;
    }
    .textWidgetAnnotation :is(input, textarea):required,
    .choiceWidgetAnnotation select:required,
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required {
      outline: 1.5px solid red;
    }
    .choiceWidgetAnnotation select option {
      padding: 0;
    }
    .buttonWidgetAnnotation.radioButton input {
      border-radius: 50%;
    }
    .textWidgetAnnotation textarea {
      resize: none;
    }
    .textWidgetAnnotation :is(input, textarea)[disabled],
    .choiceWidgetAnnotation select[disabled],
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) input[disabled] {
      background: none;
      border: 2px solid var(--input-disabled-border-color);
      cursor: not-allowed;
    }
    .textWidgetAnnotation :is(input, textarea):hover,
    .choiceWidgetAnnotation select:hover,
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:hover {
      border: 2px solid var(--input-hover-border-color);
    }
    .textWidgetAnnotation :is(input, textarea):hover,
    .choiceWidgetAnnotation select:hover,
    .buttonWidgetAnnotation.checkBox input:hover {
      border-radius: 2px;
    }
    .textWidgetAnnotation :is(input, textarea):focus,
    .choiceWidgetAnnotation select:focus {
      background: none;
      border: 2px solid var(--input-focus-border-color);
      border-radius: 2px;
      outline: var(--input-focus-outline);
    }
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) :focus {
      background-image: none;
      background-color: transparent;
    }
    .buttonWidgetAnnotation.checkBox :focus {
      border: 2px solid var(--input-focus-border-color);
      border-radius: 2px;
      outline: var(--input-focus-outline);
    }
    .buttonWidgetAnnotation.radioButton :focus {
      border: 2px solid var(--input-focus-border-color);
      outline: var(--input-focus-outline);
    }
    .buttonWidgetAnnotation.checkBox input:checked::before,
    .buttonWidgetAnnotation.checkBox input:checked::after,
    .buttonWidgetAnnotation.radioButton input:checked::before {
      background-color: CanvasText;
      content: "";
      display: block;
      position: absolute;
    }
    .buttonWidgetAnnotation.checkBox input:checked::before,
    .buttonWidgetAnnotation.checkBox input:checked::after {
      height: 80%;
      left: 45%;
      width: 1px;
    }
    .buttonWidgetAnnotation.checkBox input:checked::before {
      transform: rotate(45deg);
    }
    .buttonWidgetAnnotation.checkBox input:checked::after {
      transform: rotate(-45deg);
    }
    .buttonWidgetAnnotation.radioButton input:checked::before {
      border-radius: 50%;
      height: 50%;
      left: 25%;
      top: 25%;
      width: 50%;
    }
    .textWidgetAnnotation input.comb {
      font-family: monospace;
      padding-left: 2px;
      padding-right: 0;
    }
    .textWidgetAnnotation input.comb:focus {
      width: 103%;
    }
    .buttonWidgetAnnotation:is(.checkBox, .radioButton) input {
      appearance: none;
    }
    .fileAttachmentAnnotation .popupTriggerArea {
      height: 100%;
      width: 100%;
    }
    .popupAnnotation {
      position: absolute;
      font-size: calc(9px * var(--scale-factor));
      pointer-events: none;
      width: max-content;
      max-width: 45%;
      height: auto;
    }
    .popup {
      background-color: rgb(255 255 153);
      box-shadow: 0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor)) rgb(136 136 136);
      border-radius: calc(2px * var(--scale-factor));
      outline: 1.5px solid rgb(255 255 74);
      padding: calc(6px * var(--scale-factor));
      cursor: pointer;
      font: message-box;
      white-space: normal;
      word-wrap: break-word;
      pointer-events: auto;
    }
    .popupAnnotation.focused .popup {
      outline-width: 3px;
    }
    .popup * {
      font-size: calc(9px * var(--scale-factor));
    }
    .popup > .header {
      display: inline-block;
    }
    .popup > .header h1 {
      display: inline;
    }
    .popup > .header .popupDate {
      display: inline-block;
      margin-left: calc(5px * var(--scale-factor));
      width: fit-content;
    }
    .popupContent {
      border-top: 1px solid rgb(51 51 51);
      margin-top: calc(2px * var(--scale-factor));
      padding-top: calc(2px * var(--scale-factor));
    }
    .richText > * {
      white-space: pre-wrap;
      font-size: calc(9px * var(--scale-factor));
    }
    .popupTriggerArea {
      cursor: pointer;
    }
    section svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .annotationTextContent {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      color: transparent;
      user-select: none;
      pointer-events: none;
      span {
        width: 100%;
        display: inline-block;
      }
    }
    svg.quadrilateralsContainer {
      contain: strict;
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .textLayer {
    position: absolute;
    text-align: initial;
    inset: 0;
    overflow: hidden;
    opacity: 1;
    line-height: 1;
    text-size-adjust: none;
    forced-color-adjust: none;
    transform-origin: 0 0;
    caret-color: CanvasText;
    &.highlighting {
      touch-action: none;
    }
    :is(span, br) {
      color: transparent;
      position: absolute;
      white-space: pre;
      cursor: text;
      transform-origin: 0% 0%;
    }
    span.markedContent {
      top: 0;
      height: 0;
    }
    /*#endif*/
    .highlight {
      --highlight-bg-color: rgb(180 0 170 / 0.25);
      --highlight-selected-bg-color: rgb(0 100 0 / 0.25);
      --highlight-backdrop-filter: none;
      --highlight-selected-backdrop-filter: none;
      @media screen and (forced-colors: active) {
        --highlight-bg-color: transparent;
        --highlight-selected-bg-color: transparent;
        --highlight-backdrop-filter: var(--hcm-highlight-filter);
        --highlight-selected-backdrop-filter: var(--hcm-highlight-selected-filter);
      }
      margin: -1px;
      padding: 1px;
      background-color: var(--highlight-bg-color);
      backdrop-filter: var(--highlight-backdrop-filter);
      border-radius: 4px;
      &.appended {
        position: initial;
      }
      &.begin {
        border-radius: 4px 0 0 4px;
      }
      &.end {
        border-radius: 0 4px 4px 0;
      }
      &.middle {
        border-radius: 0;
      }
      &.selected {
        background-color: var(--highlight-selected-bg-color);
        backdrop-filter: var(--highlight-selected-backdrop-filter);
      }
    }
    ::selection {
      background: rgba(0 0 255 / 0.25);
      background: color-mix(in srgb, AccentColor, transparent 75%);
    }
    br::selection {
      background: transparent;
    }
    .endOfContent {
      display: block;
      position: absolute;
      inset: 100% 0 0;
      z-index: -1;
      cursor: default;
      user-select: none;
      &.active {
        top: 0;
      }
    }
  }
  .textLayer {
    position: absolute;
    text-align: initial;
    inset: 0;
    overflow: hidden;
    opacity: 1;
    line-height: 1;
    text-size-adjust: none;
    forced-color-adjust: none;
    transform-origin: 0 0;
    caret-color: CanvasText;
    &.highlighting {
      touch-action: none;
    }
    :is(span, br) {
      color: transparent;
      position: absolute;
      white-space: pre;
      cursor: text;
      transform-origin: 0% 0%;
    }
    span.markedContent {
      top: 0;
      height: 0;
    }
    /*#endif*/
    .highlight {
      --highlight-bg-color: rgb(180 0 170 / 0.25);
      --highlight-selected-bg-color: rgb(0 100 0 / 0.25);
      --highlight-backdrop-filter: none;
      --highlight-selected-backdrop-filter: none;
      @media screen and (forced-colors: active) {
        --highlight-bg-color: transparent;
        --highlight-selected-bg-color: transparent;
        --highlight-backdrop-filter: var(--hcm-highlight-filter);
        --highlight-selected-backdrop-filter: var(--hcm-highlight-selected-filter);
      }
      margin: -1px;
      padding: 1px;
      background-color: var(--highlight-bg-color);
      backdrop-filter: var(--highlight-backdrop-filter);
      border-radius: 4px;
      &.appended {
        position: initial;
      }
      &.begin {
        border-radius: 4px 0 0 4px;
      }
      &.end {
        border-radius: 0 4px 4px 0;
      }
      &.middle {
        border-radius: 0;
      }
      &.selected {
        background-color: var(--highlight-selected-bg-color);
        backdrop-filter: var(--highlight-selected-backdrop-filter);
      }
    }
    ::selection {
      background: rgba(0 0 255 / 0.25);
      background: color-mix(in srgb, AccentColor, transparent 75%);
    }
    br::selection {
      background: transparent;
    }
    .endOfContent {
      display: block;
      position: absolute;
      inset: 100% 0 0;
      z-index: -1;
      cursor: default;
      user-select: none;
      &.active {
        top: 0;
      }
    }
  }
  `;
export default css;
