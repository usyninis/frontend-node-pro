module.exports = function (sequelize, DataTypes) {

  const User = sequelize.define('User', {

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    deviceModel: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    freezeTableName: true,

    index: [
      {
        fields: ['phoneNumber'],
        unique: true
      },
      {
        fields: ['name', 'lastName']
      }
    ],

    getterMethods: {
      fullName: function () {
        return (this.lastName + ' ' + this.name).trim();
      }
    },

    hooks: {
      beforeUpdate(user, options) {
        //
        return user;
      },
      beforeCreate(user, options) {
        //
        return user;
      },
    }

  });

  return User;

};
