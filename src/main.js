import plugin from "../plugin.json";

class JavaX {

  async init() {

    console.log("JavaX v0.1.0 Loaded");

    if (window.acode) {
      acode.alert(
        "JavaX",
        "JavaX Plugin Loaded Successfully!"
      );
    }

  }

  async destroy() {

    console.log("JavaX Unloaded");

  }

}

if (window.acode) {

  const javax = new JavaX();

  acode.setPluginInit(
    plugin.id,
    async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {

      if (!baseUrl.endsWith("/"))
        baseUrl += "/";

      javax.baseUrl = baseUrl;

      await javax.init($page, cacheFile, cacheFileUrl);

    }
  );

  acode.setPluginUnmount(
    plugin.id,
    () => javax.destroy()
  );

}
