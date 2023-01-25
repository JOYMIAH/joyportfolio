import docker from '../assets/svg/skills/docker.svg'
import kubernetes from '../assets/svg/skills/kubernets.svg'
import helmchart from '../assets/svg/skills/helm-chart.svg'
import agrocd from '../assets/svg/skills/agrocd.svg'
import kafka from '../assets/svg/skills/kafka.svg'
import python from '../assets/svg/skills/python.svg'
import jenkins from '../assets/svg/skills/jenkins2.svg'
import ansible from '../assets/svg/skills/ansible.svg'
import prometheus from '../assets/svg/skills/prometheus.svg'
import grafana from '../assets/svg/skills/grafana.svg'
import elasticstack from '../assets/svg/skills/elastic-stack.svg'
import logstash from '../assets/svg/skills/logstash.svg'
import elasticsearch from '../assets/svg/skills/elasticsearch.svg'
import kibana from '../assets/svg/skills/kibana.svg'
import filebeat from '../assets/svg/skills/filebeat.svg'
import metricbeat from '../assets/svg/skills/metricbeat.svg'
import heartbeat from '../assets/svg/skills/heartbeat-2.svg'
import auditbeat from '../assets/svg/skills/Auditbeat.svg'
import xpack from '../assets/svg/skills/elastic-x-pack.svg'
import aws from '../assets/svg/skills/aws.svg'
import s3 from '../assets/svg/skills/s3.svg'
import ebs from '../assets/svg/skills/ebs.svg'
import ec2 from '../assets/svg/skills/ec2.svg'
import eks from '../assets/svg/skills/eks.svg'
import ecr from '../assets/svg/skills/eks.svg'
import elb from '../assets/svg/skills/elb.svg'
import terraform from '../assets/svg/skills/terraform.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import tomcat from '../assets/svg/skills/tomcat.svg'
import mongodb from '../assets/svg/skills/mongoDB.svg'
import oracle from '../assets/svg/skills/oracle.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import jasperreports from '../assets/svg/skills/tibco.svg'
import sql from '../assets/svg/skills/sql.svg'
import github from '../assets/svg/skills/github.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'docker':
            return docker;
        case 'kubernetes':
            return kubernetes;
        case 'helmchart':
            return helmchart;
        case 'agrocd':
            return agrocd;
        case 'kafka':
            return kafka;
        case 'python':
            return python;
        case 'jenkins':
            return jenkins;
        case 'ansible':
            return ansible;
        case 'prometheus':
            return prometheus;
        case 'grafana':
            return grafana;
        case 'elasticstack':
            return elasticstack;
        case 'logstash':
            return logstash;
        case 'elasticsearch':
            return elasticsearch;
        case 'kibana':
            return kibana;
        case 'filebeat':
            return filebeat;
        case 'metricbeat':
            return metricbeat;
        case 'heartbeat':
            return heartbeat;
        case 'auditbeat':
            return auditbeat;
        case 'xpack':
            return xpack;
        case 'aws':
            return aws;
        case 's3':
            return s3;
        case 'ebs':
            return ebs;
        case 'ec2':
            return ec2;
        case 'eks':
            return eks;
        case 'ecr':
            return ecr;
        case 'elb':
            return elb;
        case 'terraform':
            return terraform;
        case 'nginx':
            return nginx;
        case 'tomcat':
            return tomcat;
        case 'mongodb':
            return mongodb;
        case 'oracle':
            return oracle;
        case 'postgresql':
            return postgresql;
        case 'jasperreports':
            return jasperreports;
        case 'sql':
            return sql;
        case 'github':
            return github;
        default:
            break;
    }
}
