const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const writeReviews = fs.createWriteStream('fiftyMillionReviews.csv');
writeReviews.write('id,campgroundid,username,bodytext,profilephoto,helpful,reviewdate\n', 'utf8');

function writeFiftyMillionReviews(writer, encoding, callback) {
  let i = 50000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const campgroundid = Math.ceil(Math.random() * 10000000);
      const username = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
      let reviewLength = faker.random.number({min: 1, max: 3});
      const bodytext = faker.lorem.paragraph(reviewLength);
      const profilephoto = faker.image.avatar();
      const helpful = faker.random.number({min: 0, max: 14});
      let date = faker.date.between('2019-10-16', '2020-10-16')
      const reviewdate = moment(date).format();
      const data = `${id},${campgroundid},${username},${bodytext},${profilephoto},${helpful},${reviewdate}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeFiftyMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
})