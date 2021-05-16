module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("customers", "status", {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    }),

  down: (queryInterface) => queryInterface.removeColumn("customers", "status"),
};
