# OpenAI Trivia Generator

Welcome to the OpenAI Trivia Generator! This application allows users to generate trivia questions based on topics they are interested in using OpenAI's GPT models.

### Live demo: https://openai-serprisingly.vercel.app/

## Frontend Development

### Interface Components
- *Text Field*: For users to enter the topic.
- *Send Button*: To submit the topic and fetch trivia questions.
- *Display Area*: To show the trivia questions received from the backend.

### React.js Setup
- Use functional components and hooks for state management and effects.
- Utilize Axios or Fetch API to handle the POST request to the backend.
- Implement basic styling using CSS or a framework like Tailwind CSS to ensure the UI is responsive and user-friendly.

### User Experience
- The UI should be clean and intuitive, with clear indications when data is loading or if an error occurs.
- Ensure the layout is responsive, adapting well to both mobile and desktop views.
- 
## Frontend Functionalities

- *Trivia Generation*: Users can enter any topic of their interest into the input field and hit "Generate Trivia" to fetch trivia questions related to that topic.
- *Responsive Design*: The application is designed to work seamlessly on any device, providing a consistent user experience across desktop and mobile platforms.
- *Error Handling*: Robust error handling ensures that users are informed of any issues that may arise during the trivia generation process, such as failed API requests or unexpected errors.


## Backend Development

### API Endpoint
- *Endpoint*: /v1/api/trivia
- *Method*: POST
- *Request Body*: JSON object containing the key topic, which is a string.
- *Response*: JSON object containing an array of at least 20 trivia questions related to the topic.

### API Integration
- Use OpenAI’s GPT models to generate trivia questions. You will need to handle API requests to OpenAI, passing the topic as a prompt and formatting the output to return trivia questions.

### Error Handling
- Implement error handling for both the API request to OpenAI and the incoming POST request to your endpoint.



## Backend Functionalities

- *API Endpoint*: Provides a /v2/api/trivia endpoint for fetching trivia questions based on user-provided topics.
- *OpenAI Integration*: Utilizes OpenAI's GPT models to generate trivia questions. The backend handles API requests to OpenAI, passing the topic as a prompt and formatting the output to return trivia questions.
- *Error Handling*: Implements error handling for both the API request to OpenAI and the incoming POST request to the endpoint. Any hiccups with the API request to OpenAI or from the frontend are handled gracefully, providing meaningful feedback to users.



## Technologies Used

- *Frontend*: React.js, Redux Toolkit, Axios, Tailwind CSS.
- *Backend*: Node.js, Express.js.
- *Deployment*: Vercel (for frontend), Render (for backend).


## Usage

1. Visit the [OpenAI Trivia Generator](https://openai-serprisingly.vercel.app/) deployed on Vercel.
2. Enter a topic of interest into the input field.
3. Hit "Generate Trivia" to fetch trivia questions related to the entered topic.
4. View the generated trivia questions displayed on the screen.

## Technologies Used

- *React.js*: Frontend framework for building the user interface.
- *Redux Toolkit*: State management library for managing application state.
- *Axios*: HTTP client for making requests to the backend API.
- *Tailwind CSS*: Utility-first CSS framework for styling the application.
- *Vercel*: Cloud platform for deploying and hosting frontend applications.
- *Render*: Cloud platform for deploying and hosting backend applications.

## Installation
1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd <project-folder>
3. Install dependencies for both frontend and backend:
   - Frontend: cd frontend && npm install
   - Backend: cd backend && npm install
4. Set up environment variables:
   - Create a .env file in the backend directory.
   - Add necessary environment variable i.e., OPENAI_API_KEY
5. Start the application:
   - Frontend: cd frontend && npm start
   - Backend: cd backend && npm run dev
