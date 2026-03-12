pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    environment {
        EC2_HOST = "3.6.132.160"
        EC2_USER = "ubuntu"
        APP_DIR = "/home/ubuntu/new-repo"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'git@github.com:renjithpj3-ux/new-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh """
                scp -o StrictHostKeyChecking=no -r * ${EC2_USER}@${EC2_HOST}:${APP_DIR}
                """
            }
        }

        stage('Restart Application') {
            steps {
                sh """
                ssh ${EC2_USER}@${EC2_HOST} '
                cd ${APP_DIR}
                npm install
                pm2 delete nodeapp || true
                pm2 start app.js --name nodeapp
                '
                """
            }
        }
    }
}
