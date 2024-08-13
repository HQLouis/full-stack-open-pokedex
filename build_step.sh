#!/bin/bash

# This script is used to build the project
echo "Building the project"
npm install
npm audit fix
npm run build
echo "Build completed"

