'use strict';

const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.log('\n' +
        '+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+-+-+\n' +
        '|l|a|m|b|d|a| |g|e|n|e|r|a|t|o|r|\n' +
        '+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+-+-+\n' +
        '\n'
      );

    const answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is the name of your Lambda function?',
      validate: function(value) {
        if(!value) {
          return 'Please enter a name for your Lambda function';
        } else {
          return true;
        }      
      }
    },
    {
      type    : 'list',
      name    : 'runtime',
      message : 'What is the runtime of your Lambda function? (NodeJs, Go, Python)',
      choices : ['NodeJs', 'Go', 'Python'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }]);

    this.lambdaName = answers.name;
    this.runtime = answers.runtime;

    // this.log('app name', answers.name);
    // this.log('Destination Path: ' + this.destinationRoot());
    // this.log('Context Path: ' + this.contextRoot);
    // this.log('Template Path: ' + this.sourceRoot());
  }

  writing() {
    this.destinationRoot(this.contextRoot + '/public')

    if(this.runtime === 'go'){
      this.log('Creating Go lambda scaffolding..');
      this.composeWith(require.resolve('../golambda'), {lambdaName: this.lambdaName});

    } else if(this.runtime === 'nodejs') {
      this.log('Creating NodeJs lambda scaffolding..');
      this.composeWith(require.resolve('../nodejslambda'), {lambdaName: this.lambdaName});

    } else if(this.runtime === 'python') {
      this.log('Creating Python lambda scaffolding..');
      this.composeWith(require.resolve('../pythonlambda'), {lambdaName: this.lambdaName});

    } 
    else {
      this.log('Unspecified lambda runtime...');
    }
  }
};
