/* eslint-disable no-undef */
const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackPlugin
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production";

const addCompression = () => (config) => {
  if (isEnvProduction) {
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.(css|js)$/,
        threshold: 1024,
        minRatio: 0.9
      })
    );
  }

  return config;
};

const addAnalyzer = () => (config) => {
  if (process.env.ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};

const rewiredMap = () => (config) => {
  config.devtool =
    config.mode === "development" ? "cheap-module-source-map" : false;

  return config;
};

const addWebpackModules = () => (config) => {
  const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf))
    .oneOf;
  const scssRule = {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: ["./node_modules/@veracity/js-internal/themes/light/"]
          }
        }
      }
    ]
  };

  loaders[5] = scssRule;

  return config;
};
const dropConsole = () => {
  return (config) => {
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === "TerserPlugin") {
          minimizer.options.terserOptions.compress.drop_console = true;
        }
      });
    }
    return config;
  };
};

module.exports = override(
  fixBabelImports("import", [
    {
      libraryName: "antd",
      libraryDirectory: "es",
      // 若修改antd主题，"css"需改为true
      style: "css"
    },
    {
      libraryName: "@material-ui/core",
      libraryDirectory: "esm",
      camel2DashComponentName: false
    }
  ]),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { "@primary-color": "#1DA57A" }
  }),
  dropConsole(),
  rewiredMap(),
  addWebpackModules(),
  addCompression(),
  addAnalyzer(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
