/*
* route: GET /notes
*/

const AWS = require ('aws-sdk');
const util = require ('./util.js')
AWS.config.update({ region: process.env.DEPLOY_REGION});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

exports.handler = async (event) =>{
    try{
        let query = event.queryStringParameters;
        let limit = query && query.limit ? parseInt(query.limit): 5
        let user_id = util.getUserId(event);//util.getUserId(event.headers);

        let params = {
            TableName: tableName,
            KeyConditionExpression: 'user_id = :uid',
            ExpressionAttributeValues:{
                ':uid': user_id
            },
            Limit:limit,
            ScanIndexForward: false
        };

        let startTimeStamp = query && query.start ? parseInt(query.start): 0;

        if(startTimeStamp>0){
            params.ExclusiveStartKey = {
                user_id : user_id,
                timestamp:startTimeStamp
            }
        }

        let data = await dynamodb.query(params).promise();

        return {
            statusCode: 200,
            headers: util.getResponseHeaders(),
            body:JSON.stringify(data)
        };

    }catch(err){
        console.log("Error", err);
        return{
            statusCode: err.statusCode? err.statusCode:500,
            headers: util.getResponseHeaders(),
            body: JSON.stringify({
                error: err.name? err.name : "Exception",
                message: err.message? err.mesage: "Unknown Error"
            })

        }
    }
}
