module.exports = {
  webpack: (config) => {
    const rule = config.module.rules[0];
    const originalExcludeMethod = rule.exclude;
    config.module.rules[0].exclude = (moduleName, ...otherArgs) => {
      // we want to explicitly allow our plugin
      if (moduleName.indexOf("node_modules/next-subproject-example") >= 0) {
        return false;
      }

      // otherwise, use the original rule
      return originalExcludeMethod(moduleName, ...otherArgs);
    };

    return config;
  },
};
