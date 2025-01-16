# README

## Project Title
Profile Explorer - A Dockerized Web Application

## Description
This project is a simple web application that showcases a list of professional profiles. The application consists of a backend API developed using Node.js and a React-based frontend. The project is fully containerized using Docker and supports multi-container orchestration with Docker Compose.

## Features
- Backend API providing profile data
- React frontend for displaying profiles
- Dockerized application with multi-stage builds
- Volume support for persisting logs
- Scalable backend with multiple instances using Docker Compose

---

## Getting Started

### Prerequisites
- Install [Docker](https://www.docker.com/)
- Install [Docker Compose](https://docs.docker.com/compose/)

### Folder Structure
```plaintext
.
├── backend
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── /logs
├── frontend
│   ├── Dockerfile
│   ├── src
│   ├── public
│   ├── package.json
│   └── package-lock.json
├── docker-compose.yml
└── README.md
```

### Setup Instructions

#### Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

#### Build and Run the Application
```bash
docker-compose up --build
```

#### Scale Backend Instances (Optional)
```bash
docker-compose up --build --scale backend=2
```

#### Access the Application
- Frontend: `http://localhost:3000`
- Backend Instance 1: `http://localhost:5000`
- Backend Instance 2 (if scaled): `http://localhost:5001`

### Verify Logs
To check persistent logs:
```bash
docker exec -it <backend_container_id> cat /app/logs/requests.log
```
