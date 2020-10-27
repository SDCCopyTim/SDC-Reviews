const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const writeReviews = fs.createWriteStream('oneHundredReviews.csv');
writeReviews.write('id,campgroundid,username,bodytext,profilephoto,helpful,reviewdate\n', 'utf8');

function writeOneHundredReviews(writer, encoding, callback) {
  let i = 100;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const campgroundid = Math.ceil(Math.random() * 10);
      const username = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
      let reviewLength = faker.random.number({min: 1, max: 4});
      const bodytext = faker.lorem.paragraph(reviewLength);
      const profilephoto = faker.image.avatar();
      const helpful = faker.random.number({min: 0, max: 14});
      let date = faker.date.between('2017-01-01', '2020-09-25')
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

writeOneHundredReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
})