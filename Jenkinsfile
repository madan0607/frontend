pipeline {
  agent any

  environment {
    S3_BUCKET = "jenkins-static-edf5aac7"
    AWS_REGION = "us-east-1"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/madan0607/frontend.git'
      }
    }

    stage('Build') {
      steps {
        sh '''
          cd frontend
          npm install
          npm run build
        '''
      }
    }

    stage('Upload to S3') {
      steps {
        sh '''
          aws s3 sync frontend/build s3://$S3_BUCKET --delete
        '''
      }
    }

    stage('Invalidate CloudFront') {
      steps {
        sh '''
          aws cloudfront create-invalidation \
          --distribution-id E10FJXD44BE1NF \
          --paths "/*"
        '''
      }
    }
  }
}