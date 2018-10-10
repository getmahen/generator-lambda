# golamdbastarter

# Starter repository for lambdas using go in credo infrastructure

README for <%= lambdaName %>

To create a new lambda from this repository. 

* from the bitbucket UI, fork this repository into a new repository and give it an appropriate name. Use the name for the repository that will be the same name used for the lambda.
* clone this repository down to your local system using the clone command provided in the bitbucket UI
* create a feature branch to do your work. Branch naming should be something like \<initials>/\<JIRA ID>-\<short description> ( you can do this from the command line with _git checkout -b \<branchname>_
* run initproject.sh to seed your code with your new lambda name
* add your lambda specific code into your branch. Possible areas to edit/change - marked in files by the word _CHANGEME_
* * Modify handler/handler.go to add any vault or consul variables needed to be initialized with each new lambda invocation
* * Modify hanlder/initialize.go to add any vault, consule or other variables that can be cached for the life time of the lambda
* * Modify process/process.go to add your business logic, such as define the struct to hold your specific event data, define a struct to hold any contextual data for the process function, create logic to process each event.
* * Modify process/process_test.go to update unit tests for process.go

# consul variables
Put consul variables used here

# vault secrets
Put names of vault secrets used here

# aws resources
Put what additional AWS resources are used ( S3, SSM params, etc)

# aws trigger
Document what trigger is used for this lambda

# lambda deployment 
To deploy this lambda to dev:

	make test
	make build
	make upload #(need DEV aws creds)

cd to `./infrastructure/terraform` and follow README.md in that directory