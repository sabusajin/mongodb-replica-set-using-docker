# mongodb-replica-set-using-docker

Prerequisites-
Docker 17.03.1 (Any new version should do)
MongoDB 3.4.1

What is a replica set?
A replica set in MongoDB is a group of mongod processes that maintain the same data set. 
Replica sets provide redundancy and high availability, and are the basis for all production deployments. 

For more information, refer https://docs.mongodb.com/manual/replication/

In this implementation, we use three docker machines, one being the primary machine, the other two being workermachines. T
he scheme is shown below-


![alt tag](https://cloud.githubusercontent.com/assets/22894683/26602639/21083878-4552-11e7-90e7-3c3264d48727.png)



How to run - 
1. Open the shell in the project folder.
2. Type the command "bash < create-replica-set.sh"

Sources-
https://medium.com/towards-data-science/how-to-deploy-a-mongodb-replica-set-using-docker-6d0b9ac00e49

