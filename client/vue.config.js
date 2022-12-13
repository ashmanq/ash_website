module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // options here will be passed to css-loader
        prependData: `@import "@/assets/scss/main.scss";`
      }
    },
  }
};
