/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

render(
  () => <App settings={{ iso: "" }} />,
  document.getElementById("root") as HTMLElement,
);
