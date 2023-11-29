# Aircraft Maintenance Tracking System - Frontend

## Overview

This repository contains the frontend code for an Aircraft Maintenance Tracking System. The system is built using React along with Material-UI and other libraries to provide a modern and user-friendly interface for managing and tracking information related to flights and maintenance records.

## Technologies Used

- **React**: The frontend is implemented using the React JavaScript library, providing a component-based architecture for building interactive user interfaces.

- **Material-UI**: Material-UI is used for the design and styling of the application. It provides a set of pre-built React components following the Material Design principles.

- **React Router**: React Router is used for client-side routing, enabling navigation between different views in a single-page application.

- **Fetch**: Fetch API is used for making HTTP requests to interact with the backend APIs.

- **Redux**: Redux is employed for state management, enabling a predictable and centralized way to manage the state of the application.

## Features

- **Home**: Navigate to the home page.
- **Get Flights List**: View a list of flights with detailed information, including the ability to delete and update flight records.
- **Get Maintenance List**: View a list of maintenance records with detailed information, including the ability to delete and update maintenance records.
- **Flights Damaged**: View a list of flights requiring maintenance.
- **Flights Status**: View a list of maintenance records based on status.
- **New Registry**: Add new flight and maintenance records using forms with features like pop-up forms and dialogs.
- **Search By ID**: Search for specific flights or maintenance records by ID.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/your-username/aircraft-maintenance-frontend.git`
2. Navigate to the project directory: `cd aircraft-maintenance-frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

Make sure you have Node.js and npm installed on your machine.

## Configuration

- Update the backend API endpoint in the configuration file if your backend server is running on a different URL.

## Folder Structure

- **src/components**: Contains React components used in the application.
- **src/pages**: Defines different pages of the application.
- **src/redux**: Manages Redux-related files including actions, reducers, and store configuration.
- **src/services**: Includes service files responsible for making API requests.

## Contributing

If you would like to contribute to the development of this project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Boniface Noel]

Feel free to reach out if you have any questions or feedback!
