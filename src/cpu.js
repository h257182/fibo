const si = require('systeminformation');

const cpu = async () => {
  const data = await si.cpu();
  const { brand, speed } = data;
  return `CPU: ${brand} @ ${speed}GHz`;
};

module.exports = { cpu };
