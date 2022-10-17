const connection = require('../dbConnect');

const db = {
  getCounts: (cb) => {
    connection.query('Select counts FROM praticedb.visitor', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  incCounts: (cb) => {
    connection.query(
      'UPDATE praticedb.visitor SET counts = counts+1 where id=1;',
      (err) => {
        if (err) throw err;
        cb(JSON.stringify('업데이트 성공'));
      }
    );
  },
};

module.exports = db;
