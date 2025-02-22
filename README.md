# TaskSync

TaskSync is a task management application designed to help users organize their tasks efficiently and stay productive.

## Live Link

[TaskSync Live](https://github.com/miftah-mj/tasksync)

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
    -   [Client](#client)
    -   [Server](#server)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
    -   [Running the Client](#running-the-client)
    -   [Running the Server](#running-the-server)
-   [Contributing](#contributing)
-   [Contact](#contact)

## Features

-   Task management
-   Drag-and-drop task reordering
-   Responsive design
-   User authentication
-   Real-time updates

## Tech Stack

### Client

-   React
-   Vite
-   Tailwind CSS
-   DaisyUI
-   React Router
-   Firebase
-   ESLint

### Server

-   Express.js
-   MongoDB
-   Socket.io
-   JWT for authentication
-   CORS
-   Morgan for logging
-   Dotenv for environment variables

## Getting Started

### Prerequisites

-   Node.js
-   npm

### Installation

1. Clone the repository:

```sh
git clone https://github.com/miftah-mj/tasksync.git
cd tasksync
```

2. Install dependencies:

```sh
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

4. Start the development server:

```sh
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Running the Client

To start the client application, run the following command in the root directory:

```sh
npm run client
```

### Running the Server

To start the server application, run the following command in the root directory:

```sh
npm run server
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any inquiries, please contact [miftahuljannat952@gmail.com](mailto:miftahuljannat952@gmail.com).
