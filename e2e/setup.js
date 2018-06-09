var appium = require("nativescript-dev-appium");

before("start server", async () => {
    await appium.startServer();
});

after("stop server", async () => {
    await appium.stopServer();
});
