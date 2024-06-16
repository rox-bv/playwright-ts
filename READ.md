For this reporsitory, I'll be using Playwright-Typescript, the automation framework I recently have experience with.
See details below on how to set it up. 

DEPENDENCIES
1. Node JS - https://nodejs.org/en
2. VS Code - https://code.visualstudio.com/
3. GitHub Desktop - https://desktop.github.com/
4. Open VS Code > Extensions > install Playwright Test for VS Code

INSTALLATION
Installing Playwright - https://playwright.dev/docs/intro
1. Open your automation repo in VS Code
2. Open the terminal
3. Enter npm init playwright@latest
4. Follow the prompts
5. Install Git

COMMIT FIRST REPO
1. Open the test folder > right click > Open GitBash Here
2. git init
git add .
git commit -m "initial commit"

RUNNING TEST
1. Clone the repo
2. Open the VS Code terminal
3. Enter npx playwright test --headed
4. Wait for the test to run
5. Enter npx playwright show-report to show the detailed result