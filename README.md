# Recipe Book App

This is a simple Recipe Book App that fetches random recipes from the Spoonacular API and displays them in a list format.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that contains the styles for the web page.
- `app.js`: The JavaScript file that contains the logic for fetching and displaying recipes.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/ShuaibAlam12/Recipe-App.git
    ```
2. Open the project directory:
    ```sh
    cd <project-directory>
    ```
3. Open `index.html` in your web browser to view the app.

## Usage

The app fetches random recipes from the Spoonacular API and displays them in a list. Each recipe includes an image, title, ingredients, and a link to view details.

## API Key

This project uses the Spoonacular API to fetch recipes. You need to provide your own API key. Replace the `api` variable in `app.js` with your API key:

```js
const api = 'your-api-key';
