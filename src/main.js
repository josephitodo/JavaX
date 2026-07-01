import plugin from "../plugin.json";
import { showHome } from "./ui";
import { createJavaProject } from "./projectGenerator";

class JavaX {

  async init() {
    showHome();
  }

  async destroy() {
    console.log("JavaX unloaded");
  }
}

if (window.acode) {
  const app = new JavaX();

  acode.setPluginInit(plugin.id, async () => {
    await app.init();
  });

  acode.setPluginUnmount(plugin.id, () => {
    app.destroy();
  });
}
