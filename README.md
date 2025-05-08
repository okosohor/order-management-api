# order-management-api

# 🧾 Order Management API

This is a simple RESTful API for managing users, products, and orders. Built with Node.js, Express, Sequelize (ORM), and PostgreSQL. It uses Docker for containerized development.

---

## 🚀 Quick Start

### ⚙️ Prerequisites

- [Docker](https://www.docker.com/) installed
- A `.env` file in the project root with the following content:

```env
DB_HOST=db
DB_PORT=5432
DB_NAME=api_orders_db
DB_USER=postgres
DB_PASSWORD=api_orders
PORT=4444

1.Build and start containers:
docker compose up --build 

2.Run database migrations (creates tables):
docker compose exec backend npx sequelize-cli db:migrate

3.Seed test data:
docker compose exec backend npx sequelize-cli db:seed:all

Your API will be running at:
http://localhost:4444

Your client will be running at:
http://localhost:3000

As example you can use
UserID: 11111111-1111-1111-1111-111111111112
ProductID: 31111111-1111-1111-1111-111111111111

