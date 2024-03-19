pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행
    stages {
        stage('Prepare'){
            steps{
                git branch: 'main', credentialsId: 'github_profit_intropage', url: 'https://github.com/kakaoProFit/team-homepage'
            }

        }

        stage('Docker build'){

            steps {
                sh '''docker build -t mango0422/homepage:$(docker images | awk '($1 == "mango0422/homepage") {print $2 += .01; exit}') .'''
                sh '''docker tag mango0422/homepage:$(docker images | awk '($1 == "mango0422/homepage") {print $2; exit}') mango0422/homepage:latest'''
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f homepage'
                sh 'docker run -d -p 3000:3000 --name homepage mango0422/homepage'
            }
        }
    }
}