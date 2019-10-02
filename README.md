# serverlessdemo
Note app using serverless framework.

# jwt.io => body to generate a token for authentication.
    {
        "sub": "note_app_user",
        "app_user_id": "sumajumd",
        "app_user_name": "subh"
    }

    

# /note - POST
Request Header:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s

Request Body:
    {
        "Item":{
            "title": "My note 1",
            "content":"Content of my note 1",
            "cat":"General"
        }
    }

# /note - PATCH

Request Header:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s

Request Body:
    {
        "Item":{
            "timestamp": 1569992201,
            "note_id": "sumajumd:cfc88b0e-209b-44a8-aee7-bd7aa1a4568a",
            "title": "My note 1 Updated",
            "content":"Content of my note 1 updated",
            "cat":"General"
        }
    }

# /notes - GET

Request Header:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s

# /note/n/{note_id} - GET

Request Header:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s

# /note/t/{timestamp} - DELETE

Request Header:
    Content-Type : application/json
    Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3RlX2FwcF91c2VyIiwiYXBwX3VzZXJfaWQiOiJzdW1hanVtZCIsImFwcF91c2VyX25hbWUiOiJzdWJoIn0.nJXGS3Y3ZZigLek8qnQzFFMVj11MQUW3kzoT4z9Qp1s
