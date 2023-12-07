# Semantic Analysis Project

## Overview

This project is a Semantic Analysis tool built using Python for backend evaluation and a React web app for a user-friendly GUI. The primary purpose of this tool is to analyze the semantic content of Twitter posts. The backend utilizes Beautiful Soup for web scraping from Twitter, and the evaluation of the semantic content is performed using OpenAI's GPT-3.5 language model through an Express API.

## Features

- **Web Scraping with Beautiful Soup:** The backend of the project uses Beautiful Soup to scrape data from Twitter. This includes extracting post details such as text, user information, and timestamps.

- **Semantic Analysis with ChatGPT:** The semantic analysis is powered by OpenAI's ChatGPT, a state-of-the-art language model. The Express API sends the scraped post details to ChatGPT, which evaluates and provides a semantic analysis of the text.

- **React Web App GUI:** The frontend of the project is built using React to provide an intuitive and user-friendly interface. Users can input Twitter handles or specific posts, and the application displays the semantic analysis results in an easy-to-understand format.

## Prerequisites

Before running the project, ensure that you have the following installed:

- Python 3.x
- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/semantic-analysis-project.git
    cd semantic-analysis-project
    ```

2. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Install Node.js dependencies:**

    ```bash
    cd client
    npm install
    ```

## Usage

1. **Run the Flask API for web scraping:**

    ```bash
    python app.py
    ```

    This will start the Flask API on `http://localhost:5000`.

2. **Run the React web app:**

    ```bash
    cd client
    npm start
    ```

    This will launch the React web app on `http://localhost:3000`.

3. **Open your web browser and go to** `http://localhost:3000` **to access the Semantic Analysis tool.**

## Configuration

Make sure to update configuration files as needed. You may want to configure Twitter API keys and OpenAI GPT API keys for secure and optimal performance.

## Contributors

- Your Name
- Additional contributors (if any)

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgments

- OpenAI for providing the powerful GPT-3.5 language model.
- Beautiful Soup for simplifying web scraping tasks.
- React for building a dynamic and responsive user interface.
