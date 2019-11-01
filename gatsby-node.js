const path = require(`path`);

// Webpack
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
    },
  });

  if (stage === 'build-javascript') {
    const timestamp = Date.now();
    actions.setWebpackConfig({
      output: {
        filename: `[name]-${timestamp}-[chunkhash].js`,
        chunkFilename: `[name]-${timestamp}-[chunkhash].js`,
      },
    });
  }
};
