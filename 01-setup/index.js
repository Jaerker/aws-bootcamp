


exports.handler = async (event) => {
    const response = {
        statusCode:  200,
        headers:{
            'Content-Type': 'application/json',
        },
        body:        JSON.stringify('Well hello there!'),
    };
 
   return response;
}