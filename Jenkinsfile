pipeline {
    agent {
        label "vinod"
    }

    stages {
        stage("Code") {
            steps {
                echo "Cloning AgentMarketPlace repository"
                git url: "https://github.com/meetmish/AgentMarketPlace.git",
                    branch: "main"
            }
        }

        stage("Build") {
            steps {
                echo "Building Docker image"
                sh 'docker build -t agent-marketplace:latest .'
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying AgentMarketPlace"

                sh 'docker rm -f agent-marketplace || true'

                sh '''
                    docker run -d \
                    --name agent-marketplace \
                    -p 8000:8000 \
                    --restart unless-stopped \
                    agent-marketplace:latest
                '''
            }
        }

        stage("Verify") {
            steps {
                echo "Verifying deployment"
                sh 'docker ps --filter name=agent-marketplace'
                sh 'curl -f http://localhost:8000'
            }
        }
    }
}
