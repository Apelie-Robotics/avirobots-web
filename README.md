# Avisense website

This project was developed in May 2024 and updated in December 2024 to serve as the website for the project Avisense by Apelie Robotics.

## Technologies used

- React
- SCSS
- Formspree

## Libraries used

- React Icons

## How to run

To run the project, you should:

1. git clone the repository in your pc
2. run npm install to install all the packages used
3. run npm run dev to create the local host
4. run sass --watch src/scss/main.scss src/App.css to make sure the changes made in the scss files are compiled to the app styles file. Sass must be previously installed.

About SCSS: the .scss files are all located in the /src/scss folder and divided according to their uses. Each file is then imported in the main.scss file, which is the one the sass compiler uses to write in the App.css file, then imported in the App.jsx file as its styles

## How to make contact forms work

To do this, you should:

1. Create an account at formspree.io
2. Create a form for each of the forms present in the project (trial and contact)
3. Go to the bottom of each form's page and copy the id of the form: https://formspree.io/f/[the id should be here]
4. Copy these ids in a .env file with this code:

```
VITE_TRIAL_FORM_ID="your_id"
VITE_CONTACT_FORM_ID="your_id"
VITE_TSHIRT_FORM_ID="your_id"
```
