pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행
    stages {
        stage('Prepare'){
            steps{
                git branch: 'main', credentialsId: 'github_profit_intropage', url: 'https://github.com/kakaoProFit/team-homepage'
            }
            // post {
            //     success {
            //         slackSend(
            //             channel: "jenkins_alert",
            //             color: '#FAFAD2',
            //             message: "Git clone success!"
            //         )
            //     }
            //     failure {
            //         slackSend(
            //             channel: "jenkins_alert",
            //             color: '#FF0000',
            //             message: "Git clone Failed! Check latest log of build in http://54.180.106.229:8080/job/vue3-front/"
            //         )
            //     }
            // }
        }

        stage('Docker build'){
            // steps {
            //     sh '''docker build -t mango0422/homepage:0.0.1 .'''
            //     // docker hub에 push 하기위해 login
            //     sh 'docker login -u "tom990422@gmail.com" -p "mundoego!!3732"'
            //     // docker hub에 push
            //     sh '''docker push mango0422/homepage:0.0.1 mango0422/latest'''
            //     // tag가 latest인 image를 최신 버전을 통해 생성
            //     sh '''docker tag mango0422/homepage:0.0.1 mango0422/latest'''
            //     // latest를 docker hub에 push
            //     // sh 'docker push mango0422/homepage:latest'
            // }

            steps {
                sh '''docker build -t mango0422/homepage:$(docker images | awk '($1 == "mango0422/homepage") {print $2 += .01; exit}') .'''
                // docker hub에 push 하기위해 login
                sh 'docker login -u "tom990422@gmail.com" -p "mundoego!!3732"'
                // docker hub에 push
                sh '''docker push mango0422/homepage:$(docker images | awk '($1 == "mango0422/homepage") {print $2; exit}')'''
                // tag가 latest인 image를 최신 버전을 통해 생성
                sh '''docker tag mango0422/homepage:$(docker images | awk '($1 == "mango0422/homepage") {print $2; exit}') mango0422/homepage:latest'''
                // latest를 docker hub에 push
                // sh 'docker push mango0422/homepage:latest'
            }
            // post {
            //     success {
            //             slackSend(
            //             channel: "jenkins_alert",
            //             color: '#F0E68C',
            //             message: "Docker Build - SUCCESS"
            //         )   
            //     }
            //     failure {
            //         slackSend(
            //             channel: "jenkins_alert",
            //             color: '#FF0000',
            //             message: "Docker build Failed! Check latest log of build in http://54.180.106.229:8080/job/vue3-front/"
            //         )
            //     }
            // }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f front'
                // sh 'docker-compose up -d'
                sh 'docker run -d -p 3000:3000 mango0422/homepage'
            }
            // post {
            //     success {
            //             slackSend(
            //             channel: "jenkins_alert",
            //             color: '#F0E68C',
            //             message: "Docker-Compose up sucess: check in http://54.180.106.229:3000/"
            //         )
            //     }
            //     failure {
            //         slackSend(
            //             channel: "jenkins_alert",
            //             color: '#FF0000',
            //             message: "Docker-Compose up Failed! Check latest log of build in http://54.180.106.229:8080/job/vue3-front/"
            //         )
            //     }
            // }
        }
    }
}