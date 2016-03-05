# FE build tools

A training session for Frontend tooling & automation

## Tasks
1. Provide possibility to run development source via a zero-configuration HTTP server
- Manage the vendor packages and dependencies automatically with a tool
- Automate Building:
	1. Lint the app's JavaScript source
	- Minify and concatenate the application JavaScript files into a dist/ folder
	- Minify and concatenate the vendor JavaScript files into a dist/ folder, the information which vendor files are necessary **must** be provided by the tool of task 2
	- Watch for changes of app's JavaScript and trigger linting on changes
	- Sum up Linting, app minifactation and vendor minifcation & deps in a task called "build"

**Most importantly:** Feel free to add more features to the app and the build
(like adding CSS w/o preprocessor, minifying and concatenating the Angular templates, etc...)
