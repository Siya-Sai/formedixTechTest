# Automation Project README

## Project Description

This project is an example of automated end-to-end tests for the Ryze web application, using the Javascript/Typescript language with the WebdriverIO framework and the Cucumber testing tool. The tests involve scenarios such as login, navigation, form editing and verification, and logout.

## Project Structure

```
.
├── README.md
├── package.json
├── tsconfig.json
├── wdio.conf.js
├── src
│   ├── pageobjects
│   │   ├── login.page.ts
│   │   ├── repository.page.ts
│   │   ├── form.page.ts
│   │   └── user.page.ts
│   └── steps
│       ├── login.steps.ts
│       ├── navigation.steps.ts
│       ├── form.steps.ts
│       └── logout.steps.ts
└── features
    └── ryzeAppTests.feature
```

## Tech Stack

- Javascript/Typescript
- Node.js
- Cucumber
- WebdriverIO
- Visual Studio Code

## Prerequisites

- Node.js installed on your machine.
- Web browser installed (the tests are configured to run on Chrome by default).
- Visual Studio Code or any other IDE with Javascript/Typescript support.

## Setup & Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Update the username and password in `src/pageobjects/login.page.ts` if necessary.

## Running the tests

1. To run the tests, use the command `npm test` in the root directory of the project.
2. Test results will be displayed in the terminal.

## Features Tested

1. Login to the application with the provided credentials.
2. Navigation in the 'Repository->Studies' section.
3. User actions involving viewing and editing a form.
4. Confirmation of user updates.
5. Logout of the application.

## Page Object Model

This project uses the Page Object Model design for organizing and structuring the test code, making it more readable and maintainable.

## Author

Siyabonga Mhlanga
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
