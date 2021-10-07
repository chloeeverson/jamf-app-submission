# Jamf Now Recruitment Task
Hi! Welcome to the front-end recruitment task.

Please use the mockups in the `_mockups` folder to create a multi-step wizard. You don't need to be pixel-perfect, instead focus on the overall project architecture and technical implementation.


## Technologies
The wizard comes with a base Angular setup, but you do not have to use Angular. Feel free to use any JS framework (vanilla JS is fine too).

If you choose to use something other than Angular you may need remove unwanted files or folders from this package, or start from scratch
using the assets in the `_mockups`, `_assets`, and `_data` directories.

You can create the styles from scratch, or re-skin an existing design library/css framework.

When working on the project, bonus points will be given for the following factors:

- Possibility of component re-use (the wizard itself does not need to be re-usable)
- Accessibility of the solution (eg. keyboard navigation, semantic markup)
- Responsive design (eg. the wizard displays nicely on different screen sizes)
- Cover at least one component with unit tests.
- Host the final application online for review (eg. Heroku or a personal site)

Feel free to move files around within the repository if you need them to be somewhere else.


## Requirements
- All form inputs in wizard steps 1 and 2 are required.
- The user cannot proceed to the next step unless they have filled all fields (form validation).
- Dynamically load the `_data/mock.json` file to fill the dropdown options in wizard step 2 (eg. with a GET request instead of hardcoding the values in).
- In the final step, the user should be able to verify the data they have entered in previous wizard steps in read-only mode.
- The final step does not need to submit anything.


## Deliverable
- Please send us a zip file or link to a Github repository. If the repository is private please share it with the following users:
    > litzinger, swierczek, dunnmj42, pawlisiak, agnieszkaziaja


## Other notes
Use the `FEEDBACK.md` file to tell us what you thought about the task and how it could be improved.
