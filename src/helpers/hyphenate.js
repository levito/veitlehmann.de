module.exports = function (string) {
  return string && string.toLowerCase().replace(/\s/g, '-');
};
