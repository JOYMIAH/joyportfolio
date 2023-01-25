import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/two.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Data Streaming Pipeline',
        projectDesc: 'This Project is About data streaming pipeline',
        tags: ['Kafka', 'Python', 'Logstash','Elasticsearch','Kibana','Docker Compose'],
        code: 'https://github.com/JOYMIAH/data-streaming-pipeline.git',
        demo: 'https://192.168.61.28:5601/',
        image: one
    },
    {
        id: 2,
        projectName: 'Deploy Python Application on EC2',
        projectDesc: 'In this project We Deployed Python Application on EC2 Using CI/CD Pipeline .',
        tags: ['Python', 'EC2', 'Jenkins'],
        code: 'https://github.com/JOYMIAH/automated-deployment.git',
        demo: 'http://13.234.18.140:8089/todos/',
        image: two
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/