1-Comandos do sam:
==================
- sam init
- aws configure --profile bia-serverless
- npm init -y
- npm install
- npm install aws-sdk
- sam local invoke LigarPorteiro --profile bia-serverless
- sam deplou --guided --profile bia-serverless
- sam deploy --profile bia-serverless
- sam delete --profile bia-serverless [y-y]

2-Criando um bucket:
aws s3 mb s3://meu-bucket-deploy-lambda --profile bia-serverless

3-Testando a conexao com o bucket:
aws s3 ls --profile bia-serverless

4-Executando o deploy:

➜  sam deploy --guided --profile bia-serverless

Configuring SAM deploy:
=======================
    Looking for config file [samconfig.toml] :  Found
    Reading default arguments  :  Success

    Setting default arguments for 'sam deploy'
    =========================================
    Stack Name [porteiro]: <enter>
    AWS Region [us-east-1]: <enter>
    #Shows you resources changes to be deployed and require a 'Y' to initiate deploy
    Confirm changes before deploy [y/N]: y
    #SAM needs permission to be able to create roles to connect to the resources in your template
    Allow SAM CLI IAM role creation [Y/n]: y
    #Preserves the state of previously provisioned resources when an operation fails
    Disable rollback [y/N]: N
    Save arguments to configuration file [Y/n]: y
    SAM configuration file [samconfig.toml]: <enter>
    SAM configuration environment [default]: <enter>