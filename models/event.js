/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    date: DataTypes.DATEONLY,
    time: DataTypes.STRING,
  });


  Event.associate = (models) => {
    models.Event.belongsTo(models.Park, {
      foreignKey: {
        allowNull: false,
      }
    });
  };

  return Event;
};
