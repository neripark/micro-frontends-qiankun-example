import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { unmountComponentAtNode } from "react-dom";
import packageJson from "../package.json";

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

const getContainer = (props?: any) =>
  props?.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");

const render = (props?: any) => {
  const container = getContainer(props);
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`${packageJson.name} bootstrap`);
}

export async function mount(props: any) {
  console.log(`${packageJson.name} mount`, props);
  render(props);
}

export async function unmount(props: any) {
  console.log(`${packageJson.name} unmount`, props);
  unmountComponentAtNode(getContainer(props));
}

export async function update(props: any) {
  console.log(`${packageJson.name} update`, props);
}
