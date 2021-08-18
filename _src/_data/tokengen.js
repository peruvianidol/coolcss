// const fs = require('fs');

// const themeObject = JSON.parse(fs.readFileSync('/_src/_data/tokens.json'));

// const styles = [];
// function generateStyles(objectOrString, existingTokens = []) {
//   if (objectOrString.value) {
//     styles.push(`${existingTokens.join('-')}: ${objectOrString.value}`);
//     return;
//   }
//   for (const [key, value] of Object.entries(objectOrString)) {
//     const newTokens = [
//       ...existingTokens,
//       existingTokens.length ? key : `$${key}`,
//     ];
//     generateStyles(value, newTokens);
//   }
// }

// generateStyles(themeObject);
// console.log(styles.join('\n'));