'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('evaluations', {
      fields: ['projectId', 'criterionId', 'jurorId'],
      type: 'unique',
      name: 'unique_project_criterion_juror'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'evaluations',
      'unique_project_criterion_juror'
    );
  }
};