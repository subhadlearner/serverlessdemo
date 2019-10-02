# serverlessdemo
Note app using serverless framework.

jwt.io => Below body will generate an token which needs to be sent as part of the request header.
    {
        "sub": "note_app_user",
        "app_user_id": "sumajumd",
        "app_user_name": "subh"
    }
Request Header from Postman:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s


