const heapDump = require('heapdump');

const writeSnapShot = () => {
  heapDump.writeSnapshot(function (err, filename) {
    console.log('dump written to', filename);
  });
};

module.exports = writeSnapShot;

