const { createUpwardServer } = require("@magento/upward-js");

async function serve() {
  await createUpwardServer({
    port: 8000,
    bindLocal: true,
    logUrl: true,
    upwardPath: "./upward-hello.yml",
    env: { COUNTRIES_GRAPHQL_URL: "https://countries.trevorblades.com" },
  });
}

serve();
