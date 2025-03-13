import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/two.jpg'


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
        projectName: 'Secured CI/CD Pipeline With Monitoriing and Alerting system',
        projectDesc: 'In this project We build a pipeline to deliver appliation frequently and reliability.',
        tags: ['Java', 'Docker','Kubernetes','Prometheus','Grafana','ArgoCD','Trivy', 'Jenkins'],
        code: 'https://github.com/JOYMIAH/CI-CD-Pipeline-DIU.git',
        demo: 'https://docs.google.com/document/d/1RXs9pM-XzMvkVBr0AAZzyjptBYM-3e7h/edit?usp=sharing&ouid=104569912899093862301&rtpof=true&sd=true',
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