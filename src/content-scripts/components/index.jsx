import React from "react";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpened: true
    };
    this.dialogRef = React.createRef();
  }
  componentDidMount() {
    const dialogElm = this.dialogRef.current;
    console.log(dialogElm);
    dialogElm.renderer = (root, dialog) => {
      const template = document.createElement("div");
      template.style.height = "100%";
      root.appendChild(template);
      const parentDiv = document.createElement("div");
      parentDiv.style.cssText =
        "display: flex; flex-direction: column; align-items: inherit; justify-content: end;height: 100%;";
      template.appendChild(parentDiv);
      const historyDiv = document.createElement("div");
      historyDiv.style.cssText = "flex: 3";
      parentDiv.appendChild(historyDiv);
      const input = document.createElement("vaadin-text-field");
      input.setAttribute("placeholder", ">");
      input.addEventListener("keyup", e => {
        console.log({ e, value: input.value });
      });
      parentDiv.appendChild(input);
    };
  }

  render() {
    return (
      <vaadin-dialog
        ref={this.dialogRef}
        modeless
        draggable
        resizable
        opened={this.state.modelOpened}
        aria-label="Floating javascript console"
      ></vaadin-dialog>
    );
  }
}
