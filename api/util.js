const getResponseHeaders = () => {
    return {
        'Access-Control-Allow-Origin': '*'
    }
}

const getUserId = (event)=>{ //pass headers in case passing user info via header
    //return headers.app_user_id;    
    return event.requestContext.authorizer.app_user_id;
}

const getUserName = (event)=>{
    //return headers.app_user_name;    
    return event.requestContext.authorizer.app_user_name;
}

module.exports = {
    getResponseHeaders,
    getUserId,
    getUserName
}