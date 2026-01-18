pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'echo "Static frontend build completed"'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy to S3 + CloudFront'
      }
    }
  }
}