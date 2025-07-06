// index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('repo-token', { required: true });
    const octokit = github.getOctokit(token);
    const { context } = github;

    const issue_number = context.payload.pull_request?.number;
    const { owner, repo } = context.repo;

    if (!issue_number) {
      core.setFailed("This action must be run on a pull_request event.");
      return;
    }

    const commentBody = `🚀 Great work on the PR! Just one last quick thing to check before merge:\n👉 [Final checklist](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`;

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body: commentBody,
    });

    core.info("Successfully rickrolled the PR author.");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

