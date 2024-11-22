exports.handler = async (event) => {
    console.log('Webhook URL', event.url);
    console.log('Webhook method', event.httpMethod);

    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);
        console.log('Webhook payload:', data);
    }

    // Perform actions based on the webhook payload
    // For example, you can trigger a build or process the data as needed

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Webhook received!' }),
    };
};