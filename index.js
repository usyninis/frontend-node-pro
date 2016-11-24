const models = require('./models');

models.sequelize.sync().then(function() {

  // models.User
  //   .create({
  //     phoneNumber: '79507287767',
  //     name: 'Ivan',
  //     lastName: 'Usynin',
  //     deviceModel: 'a'
  //   });

  models.User
    .findAll()
    .then(result => {
      console.log(result);
    });

}, err => console.error(err));
