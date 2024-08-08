INSTANCE_ID_PORTEIRO=i-074362f6eb39119d1
IP_PORTEIRO=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID_PORTEIRO --query "Reservations[].Instances[].PublicIpAddress" --profile cliente-porteiro --region us-east-1 --output json | grep -vE '\[|\]' | awk -F'"' '{ print $2 }')
echo $IP_PORTEIRO

# exit 1
PEM_PATH="/home/eddev/Formacao-AWS/Chaves-PEM/porteiro.pem"
# SERVIDOR_RDS_1=SEU_SERVIDOR_1
# PORTA_LOCAL_RDS_1=3307 # Banco MySQL
SERVIDOR_RDS_2=database-bia.cd2owuoacfg0.us-east-1.rds.amazonaws.com
PORTA_LOCAL_RDS_2=5433 # Baoco Postgres
ssh -f -N -i $PEM_PATH ec2-user@$IP_PORTEIRO -L $PORTA_LOCAL_RDS_1:$SERVIDOR_RDS_1:3306 -L $PORTA_LOCAL_RDS_2:$SERVIDOR_RDS_2:5432

echo "Porteiro liberou acesso para:"
echo "> $SERVIDOR_RDS_1 no endereço *127.0.0.1:$PORTA_LOCAL_RDS_1"
echo "> $SERVIDOR_RDS_2 no endereço *127.0.0.1:$PORTA_LOCAL_RDS_2"
