[![Netlify Status](https://api.netlify.com/api/v1/badges/f952da7d-e9f3-4c3a-a5e0-ffc3a6f6cc28/deploy-status?branch=main)](https://app.netlify.com/sites/rad-rolypoly-6e94db/deploys)

# AI Summarizer Website

![Screenshot 2023-09-15 at 17 39 35](https://github.com/KChakhalyan/ai-summariser/assets/10487372/8ad08090-0da5-48f0-ac88-39c1e1ff1387)

## Check the Website :- [Demo](https://rad-rolypoly-6e94db.netlify.app)

Welcome to the AI Summarizer Website project! This project aims to simplify and enhance the reading experience by providing concise article summaries using AI technology. Below, you'll find a step-by-step guide on how to set up and use this website.

## Table of Contents

1. Introduction
2. Technologies Used
3. Getting Started
4. Project Structure
5. How to Use

## Introduction

This website leverages React, Redux Toolkit, Tailwind CSS, Vite, and Rapid API to provide users with high-quality article summaries in real-time. The global state management capabilities of Redux Toolkit ensure a responsive and interactive user experience.

## Technologies Used

-  React
-  Redux Toolkit
-  Tailwind CSS
-  Vite
-  Rapid API

## Getting Started

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**

   ```
   git clone https://github.com/your-username/ai-summarizer-website.git
   cd ai-summarizer-website
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Set Up Rapid API**

   -  Sign up for a Rapid API account and obtain your API key.
   -  Replace `REACT_APP_RAPID_API_KEY` in the `.env` file with your API key.

4. **Start the Development Server**

   ```
   npm run dev
   ```

5. **Open the Application**
   Open your web browser and go to `http://localhost:3000` to access the website.

## Project Structure

The project structure is organized as follows:

-  `src/`
   -  `components/`: React components
   -  `services/`: Redux Toolkit slices and reducers
   -  `main.jsx/`: Website pages
   -  `styles/`: Tailwind CSS styles
   -  `App.js`: Main application component
   -  `store.js`: Redux store configuration

## How to Use

1. Enter or Paste the URL of the article you want to summarize in the input field.
2. Click the "↩" button to Submit.
3. The summarized article will be displayed on the screen in real-time.
4. Enjoy a concise and informative summary of the article!

Thank you for checking out. I hope You found it useful.
