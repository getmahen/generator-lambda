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
        this.templatePath('main.go'),
        this.destinationPath('main.go'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('handler/handler.go'),
        this.destinationPath('handler/handler.go'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('process/'),
        this.destinationPath('process/')
      );

      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('Makefile'),
        this.destinationPath('Makefile'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('Jenkinsfile'),
        this.destinationPath('Jenkinsfile'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'),
        {
          lambdaName: this.lambdaName
        }
      );

      this.fs.copyTpl(
        this.templatePath('Gopkg.toml'),
        this.destinationPath('Gopkg.toml')
      );

      this.fs.copyTpl(
        this.templatePath('Gopkg.lock'),
        this.destinationPath('Gopkg.lock')
      );

      this.fs.copyTpl(
        this.templatePath('vault-cas.crt'),
        this.destinationPath('vault-cas.crt')
      );

      //Infrastructure Terraform folder
      this.fs.copyTpl(
        this.templatePath('infrastructure/terraform/'),
        this.destinationPath('infrastructure/terraform/'),
        {
          lambdaName: this.lambdaName
        }
      );

       //Infrastructure Ansible folder
       this.fs.copyTpl(
        this.templatePath('infrastructure/ansible/'),
        this.destinationPath('infrastructure/ansible/'),
        {
          lambdaName: this.lambdaName
        }
      );
  }
};