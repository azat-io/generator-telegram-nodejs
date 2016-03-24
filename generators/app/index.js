'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Hi! I\'m a generator of your future Node.js ' + chalk.green('Telegram Bot') + '!'
    ));

    var prompts = [
      {
        name: 'name',
        message: 'What is your name?'
      },
      {
        name: 'githubname',
        message: 'What is your GitHub username?'
      },
      {
        name: 'botname',
        message: 'What is the bot name?'
      },
      {
        name: 'botusername',
        message: 'What is the bot username?'
      },
      {
        name: 'botdescription',
        message: 'What does this bot will do?'
      },
      {
        name: 'token',
        message: 'What is the bot secret token?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.githubname = props.githubname;
      this.botname = props.botname;
      this.botdescription = props.botdescription;
      this.token = props.token;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_app.js'),
        this.destinationPath('app.js')
      );
      this.fs.copy(
        this.templatePath('_CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_LICENSE.md'),
        this.destinationPath('LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copy(
        this.templatePath('_token.js'),
        this.destinationPath('token.js')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    projectfiles: function () {
    }
  },

  // install: function () {
  //   this.installDependencies();
  // }
});
