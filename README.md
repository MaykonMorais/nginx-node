# Node.js + Nginx Project (Full Cycle)

This project demonstrates a Node.js application running behind an Nginx reverse proxy, using Docker and Docker Compose.

## Structure

- `backend/`: Node.js server code (Express)
- `app/nginx.conf`: Nginx reverse proxy configuration
- `docker-compose.yaml`: Container orchestration

## How to run

1. **Start the containers:**
   ```bash
   docker-compose up --build
   ```
2. **Access the application:**
   Open your browser at `http://localhost`.

## Endpoints

- `GET /api` — Returns a JSON message from the Node.js backend.

## Notes

- Nginx proxies requests to the Node.js backend on port 3000.
- Modify `nginx.conf` to customize the proxy as needed.

## Common issues

- Make sure port 3000 is not occupied locally.
- Check container logs with:
  ```bash
  docker-compose logs
  ```

## License

MIT
