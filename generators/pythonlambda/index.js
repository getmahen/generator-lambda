'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('lambdaName', {
      type: String,
      required: true
    });

    this.lambdaName = this.options.lambdaName;
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        lambdaName: this.lambdaName
      }
    );
  }
};