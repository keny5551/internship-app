# Nubedian GmbH Internship Task

This is a task project for the Nubedian GmbH internship program.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)

## Introduction

This project is a web application that will display a list of hard drives. The application provides a user interface to add, edit disks from the list. The application uses React.js for the frontend and Node.js with Express.js for the backend. The data is stored in a MySQL database. The user doesn't need to create a table as I have used the Sequelize library to create models that will automatically generate the database.

## Installation

To install and run the application, you need to have Node.js and npm installed on your system. Once you have these installed, you can follow these steps:

1. Clone the repository: `git clone https://github.com/keny5551/internship-app.git`
2. Install the dependencies: 
   - for backend `cd internship-app/server` and `npm install` 
   - for frontend `cd internship-app/client` and `npm install`
3. Create a `.env` file in `internship-app/server` with the following configuration:
   ```
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   ```
4. Run the application: `npm start`

## Usage

Once you have the application running, you can access it at http://localhost:3000/. The application allows you to add and edit drives from the list. Additionally, on the backend side, functions have been added to allow adding and getting interfaces and form factors.

## Configuration

The application can be configured by editing the `.env` file. You can change the database configuration in this file.
