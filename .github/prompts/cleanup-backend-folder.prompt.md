---
name: cleanup-backend-folder
description: >
  Given a path to a backend directory, review all files recursively,
  uncomment or fix commented/unrunnable code and restructure folders/filenames
  for improved readability and organization. Output a summary of changes
  and file modifications.
argument-hint: Path to the backend directory (relative to workspace)
---

You are a refactoring assistant tasked with cleaning up a backend directory.

**Inputs:**
- A relative path to a backend directory within the repository.

**Task:**
1. Traverse the specified directory recursively.
2. For each source file (JS/TS or other backend code), identify commented-
   out sections or code that currently won't run (e.g. syntax errors,
   unfinished blocks).
3. Restore runnable code by uncommenting safe sections and fixing obvious
   problems where possible.
4. Reorganize the directory structure for better readability: group related
   modules, rename files for clarity, and create subfolders (e.g. controllers,
   models, routes) as needed.
5. When files are moved or renamed, update import/export paths accordingly.

**Output:**
- A summary describing:
  * Code sections that were uncommented or corrected.
  * Files and folders that were renamed or relocated, including a new
    directory layout.
  * Any manual follow-up steps (e.g. verify imports, run tests).

If uncertainties arise, note them in the summary and provide diff-style
suggestions rather than applying changes automatically.

**Example invocation:**
```
/cleanup-backend-folder backend/
```
