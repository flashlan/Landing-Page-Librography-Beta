pipeline {
    agent  { label 'Ubuntu18-openjdk1.8'}

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
				sh 'sudo apt-get update && sudo apt-get -y --no-install-recommends install && sudo apt-get clean'
				sh 'sudo apt-get install -y curl '
				sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -'
				sh 'sudo apt-get install -y nodejs && sudo apt-get install -y nginx'
                //sh 'npm install'	
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}