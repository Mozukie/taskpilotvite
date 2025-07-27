#!/bin/bash

# Load environment variables from .env
export $(cat .env | xargs)

# Optional: confirm environment is loaded
echo "Running server on port $PORT"

# Start your server
node server.js
