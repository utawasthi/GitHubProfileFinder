# GitHub Profile Finder

GitHub Profile Finder is a simple React app built with Vite that allows users to search and view GitHub profiles. The app uses the GitHub API to fetch user data and displays it in an easy-to-read format. The app is built without using any third-party packages like Axios, relying solely on JavaScript's native `fetch` method. Styling is done using plain CSS.

## Features

- Search GitHub users by username.
- Display user details like username, profile picture, bio, location, etc.
- Fetch user data using GitHub's public API.
- No third-party libraries like Axios are used for data fetching.
- Clean, responsive design using plain CSS.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: A fast build tool and development server for React.
- **GitHub API**: For fetching user profiles.
- **CSS**: Plain CSS for styling the app.

## Getting Started

To run the GitHub Profile Finder app locally on your machine, follow these steps:

### Prerequisites

- Node.js (version 12 or higher) installed on your machine.
- A code editor like VS Code (optional, but recommended).

### Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/GitHubProfileFinder.git

2. Navigate to the project directory:

   ```bash
   cd GitHubProfileFinder

3. Install the required dependencies:

  ```bash
   npm install

4. Start the development server:

  ```bash
   npm run dev

5. Open your browser and go to http://localhost:3000 to view the app.

6. How It Works

The app uses the fetch API to make requests to GitHub's public API when a user searches for a profile.
The response data is then displayed, including the user's profile picture, username, bio, location, and other information.
The UI is responsive and works on different screen sizes.
There is no dependency on third-party libraries for HTTP requests, as the native fetch method is used.

7. Contributing
If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Any contributions or suggestions are welcome!