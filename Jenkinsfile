pipeline {
 agent any

 stages {

  stage('Checkout Code') {
   steps {
    deleteDir()
    git branch: 'main', url: 'git@github.com:renjithpj3-ux/new-repo.git'
   }
  }

  stage('Install Dependencies') {
   steps {
    sh 'npm install'
   }
  }

stage('deploy'){
steps {
sh 'rsync -av --delete ./ /home/ubuntu/new-repo/app.js'
}
}
stage('Restart application'){ 
steps {
 sh '''
 pkill node || true
 nohup npm start > app.log 2>&1 &
 '''
   }
  }

 }
}
