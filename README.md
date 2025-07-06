# 🪝 Rickroll PR Action

Posts a totally serious “Final Checklist” comment on pull requests… that turns out to be a Rickroll 😏

## Usage

```yaml
on:
  pull_request_target:
    types: [opened]

jobs:
  rickroll:
    runs-on: ubuntu-latest
    steps:
      - uses: govindup63/rickroll-pr-action@v1
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}

