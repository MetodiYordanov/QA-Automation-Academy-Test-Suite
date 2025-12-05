# Skillo Social Media - Test Automation Suite

## 📖 Project Overview

This project is a test suite which tests some of the most important functionalities (register user, login user, logout user, creating new post) in the Skillo Social Media application using JavaScript and Playwright.

The tested application is a social media app where users can create profile, make posts, see other user's posts and comment them.

## 🎯 Project Purpose

This automation suite was created as final project from QA Automation course I took at Skillo IT Academy. The idea behind this project is to show knowledge in JavaScript basics like using variables, arrays, loops, objects, classes, asynchronous JavaScript, etc. and Playwright basics like creating tests, make basic setup through the Playwright's configuration file, locate elements in web applications, understanding Page Object Model (POM), data-driven testing, hooks, fixtures, parallel execution, etc.

## 🛠️ Technologies Used

The technologies that were used for this project are JavaScript and Playwright as test automation framework.

## 🗒️ Prerequisites

- Node.js 18.18+ (ESLint v9 requires Node 18.18 or newer)
- npm 9+
- VS Code (recommended) with ESLint and Prettier extensions

## 🚀 Installation & Setup

```bash
# Install dependencies
npm install
```

Open in VS Code and install the recommended extensions when prompted.

## Linting and formatting

This repo uses ESLint and Prettier for code quality and formatting.

- ESLint config: `eslint.config.mjs`
- Prettier: installed as a dev dependency; use default settings.

Run locally:

```bash
# Check lint errors
npx eslint .

# Auto-fix lint issues where possible
npx eslint . --fix

# Check formatting
npx prettier . --check

# Format files in place
npx prettier . --write
```

Tip: Install the "ESLint" and "Prettier - Code formatter" VS Code extensions for on-save feedback and formatting.

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run tests from specific file
npx playwright test fileName.spec.js

# Run tests in headed mode
npx playwright test --headed
```

## 📁 Project Structure
Top-level layout and where to look for things:

```
QA-Automation-Academy-Test-Suite
	.vscode/					# VS Code workspace settings
		extenstions.json		# Recommended extensions
		settings.json			# Workspace settings
	pages/						# Page Object Model classes
		BasePage.js				# Base page with common methods
		HomePage.js				# Home/Posts page object
		LoginPage.js			# Login page object
		NewPostPage.js			# New post creation page object
		ProfilePage.js			# User profile page object
		RegistrationPage.js		# Registration page object
	test-cases/					# Test cases for tested functionalities
		create-post-tests.md	# Create new post test cases
		login-tests.md			# Login test cases
		logout-tests.md			# Logout test cases
		registration-tests.md	# Registration test cases
	test-data/					# Static test data (images, arrays)
		test-image.jpg			# Sample image for post creation
		userData.js				# Arrays with valid and invalid user data
	tests/						# Test specifications & test-only
		fixtures/				# Custom Playwright fixtures
			base.js				# Base extended test with common
		login.spec.js			# Login tests
		logout.spec.js			# Logout tests
		newPost.spec.js			# New post tests
		registration.spec.js	# Registration tests
	.gitignore					# Git ignore file
	eslint.config.mjs			# ESLint configuration
	package.json				# NPM dependencies
	playwright.config.js		# Playwright configuration
	README.md					# Project documentation
```

## 🧪 Test Scenarios
All test scenarios can be found in `test-cases` folder.

### Registration Tests
Registration tests can be found in `registration.spec.js`.

### Login Tests
Login tests can be found in `login.spec.js`.

### Logout Tests
Logout tests can be found in `logout.spec.js`

### New Post Tests
New post tests can be found in `newPost.spec.js`.

## 📊 Test Coverage
- Total test cases: 18
- Positive tests: 7
- Negative tests: 11

## 👤 Author
Metodi Yordanov<br>
GitHub - MetodiYordanov

## 📄 License
This project is for educational purposes.