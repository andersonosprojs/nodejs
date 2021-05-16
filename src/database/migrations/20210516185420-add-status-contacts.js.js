module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("contact", "status", {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    }),

  down: (queryInterface) => queryInterface.removeColumn("contact", "status"),
};
