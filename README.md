# Todo List Website

This is a simple Todo List application built with React and TypeScript. It allows users to manage their daily tasks efficiently.

## Features

- Add new todo items
- Toggle completion status of todo items
- Remove todo items from the list

## Project Structure

```
todo-list-website
├── public
│   └── index.html        # Main HTML file for the website
├── src
│   ├── components
│   │   └── TodoItem.tsx  # Component for rendering individual todo items
│   ├── App.tsx           # Main application component managing the todo list
│   ├── index.tsx         # Entry point of the React application
│   └── types
│       └── index.ts      # Type definitions for todo items and props
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.