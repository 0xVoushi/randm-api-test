// const React = require('react');
// const { ServerStyleSheet, StyleSheetManager } = require('styled-components');
// const { renderToString } = require('react-dom/server');
// const { Helmet } = require('react-helmet');

// /* eslint-disable */
// exports.replaceRenderer = ({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
//   setHtmlAttributes,
//   setBodyAttributes,
//   setPreBodyComponents,
//   setPostBodyComponents,
// }) => {
//   const sheet = new ServerStyleSheet();
//   const helmet = Helmet.renderStatic();
//   // eslint-disable-next-line
//   const html = renderToString(
//     <React.Fragment>
//       <StyleSheetManager sheet={sheet.instance}>{bodyComponent}</StyleSheetManager>
//     </React.Fragment>,
//   ); // eslint-disable-line
//   replaceBodyHTMLString(html);
//   setHtmlAttributes(helmet.htmlAttributes.toComponent());
//   setBodyAttributes(helmet.bodyAttributes.toComponent());
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     sheet.getStyleElement(),
//   ]);
// };
