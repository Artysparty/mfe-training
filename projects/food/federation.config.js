const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "food",
  exposes: {
    "./Component": "./projects/food/src/app/food.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  skip: ["rxjs/ajax", "rxjs/fetch", "rxjs/testing", "rxjs/webSocket"],
});
