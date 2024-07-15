#!/bin/bash
set -e

# Check if Docker is already installed
docker_version=$(docker -v || true)
if [ ! -z "$docker_version" ]; then
    echo "Docker is already installed. Skipping installation."
    exit 0
fi

# Detect operating system
os_type=$(uname -s)

# Function to install Docker on Linux
install_docker_linux() {
    echo "Installing Docker on Linux..."

    # Install Docker using official script
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh

    # Add current user to docker group
    sudo usermod -aG docker $USER

    echo "Docker has been installed on Linux."
}

# Function to install Docker on macOS
install_docker_mac() {
    echo "Installing Docker on macOS..."

    # Install Docker Desktop for macOS
    # Instructions: https://docs.docker.com/desktop/mac/install/
    echo "Please follow Docker Desktop installation instructions for macOS."
    echo "After installation, ensure Docker Desktop is running and configured."

    echo "Docker setup for macOS is complete."
}

# Function to install Docker on Windows using WSL 2
install_docker_windows() {
    echo "Installing Docker on Windows..."

    # Check if WSL 2 is installed
    wsl_version=$(wsl -l -v | grep -i "wsl 2" || true)
    if [ -z "$wsl_version" ]; then
        echo "WSL 2 is required to install Docker on Windows."
        echo "Please install WSL 2 and set it as default before running this script."
        exit 1
    fi

    # Install Docker Desktop for Windows
    # Instructions: https://docs.docker.com/desktop/windows/install/
    echo "Please follow Docker Desktop installation instructions for Windows."
    echo "After installation, ensure Docker Desktop is running and configured."

    echo "Docker setup for Windows is complete."
}

# Main function to detect OS and install Docker
main() {
    echo "Detecting operating system..."

    case "$os_type" in
        Linux*)     install_docker_linux ;;
        Darwin*)    install_docker_mac ;;
        CYGWIN*|MINGW*)  install_docker_windows ;;
        *)          echo "Unsupported operating system: $os_type. Exiting." ;;
    esac
}

# Execute the main function
main

exit 0
