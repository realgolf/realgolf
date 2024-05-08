# Contribution Guidelines

Thank you for considering contributing to our repository by translating important files like README, CONTRIBUTORS, FAQ, SECURITY, CODE_OF_CONDUCT, and LICENSE. Your efforts are crucial in making our project accessible to a wider audience. Below are the guidelines for contributing translations to these files while ensuring that code within Markdown files remains untranslated.

## Translations

### 1. Adding New Translations

- To contribute a new translation of any of the mentioned files, ensure that it aligns with the purpose and content of the original file.
- Translations should be accurate and faithful to the original content.

### 2. Modifying Existing Translations

- If you notice any errors, inaccuracies, or improvements that can be made to existing translations, please submit a pull request with your proposed changes.
- Ensure that any modifications maintain the original meaning and intent of the content.

## Contribution Process

### 1. Fork the Repository

- Visit the repository on GitHub at [repository_link].
- Click on the "Fork" button in the top-right corner of the page. This will create a copy of the repository in your own GitHub account.

### 2. Clone the Repository

- Open your terminal (command prompt) on your local machine.
- Use the `git clone` command to clone the forked repository to your local machine.

```bash
git clone https://github.com/realgolf/Golf.git
```

- Name your version of the repository "web" if possible.

### 3. Create a New Branch

- Change into the directory of the cloned repository using `cd` command:

```bash
cd web
```

- Create a new branch for your changes based on the `main` branch.

```bash
git checkout -b translating-[the file name you are translating]-into-[the lnaguage you are translating the file to]
```

If your are translating all files or multiple file, you can remove the "-[the file name you are translating]" bit of the branch name.

### 4. Make Changes

- Make your desired modifications or additions to the translations of the README, CONTRIBUTORS, FAQ, SECURITY, CODE_OF_CONDUCT, or LICENSE files using your preferred text editor.

### 5. Stage and Commit Changes

- Once you've made your changes, stage them for commit using the `git add` command:

```bash
git add .
```

- Commit your changes with a descriptive message using the `git commit` command:

```bash
git commit -m "Your descriptive commit message here"
```

### 6. Push Changes to Your Fork

- Push your changes to your forked repository on GitHub using the `git push` command:

```bash
git push origin [branch_name]
```

### 7. Submit Pull Request

- Visit your forked repository on GitHub and switch to the branch you just pushed.
- Click on the "Compare & pull request" button next to your branch.
- Clearly describe the changes you've made and the rationale behind them in the pull request description.
- Ensure that your pull request title is descriptive and concise.
- Click on the "Create pull request" button to submit your pull request to the main repository for review.

### 8. Review Process

- Your pull request will be reviewed by the maintainers. Please be patient during this process.
- Any necessary feedback or requested changes will be provided in the pull request comments.

### 9. Merge

- After your pull request has been approved and any requested changes have been made, it will be merged into the main repository.

## Code of Conduct

- Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) throughout the contribution process.
- Treat all contributors with respect and kindness.

## Markdown Formatting

- When translating Markdown files like README, FAQ, and CODE_OF_CONDUCT, ensure that the formatting, such as headers, lists, and links, is preserved.
- **Do not translate code blocks or inline code snippets.** Ensure they remain in their original language to maintain functionality and readability.

## Attribution

- Properly attribute any contributions to yourself in the pull request description or commit messages, if necessary.

## Feedback

- We welcome feedback on the translation process and any suggestions for improving it. Feel free to open an issue to share your thoughts.

Your efforts help make our project more accessible to a wider audience. If you have any questions or need further assistance, don't hesitate to reach out to the repository maintainers.

Thank you for your contributions! ❤️⛳️
