module.exports = function override(config, env) {

    config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
    //do stuff with the webpack config...
    return config;
  }