// TODO: Complete the values of the following 4 variables to make the script
// work.
// The SparkPost API Key.
var apiKey = '';
// The first email address used in the From email field and as a recipient.
var target = '';
// The second email address used as a second recipient.
var target2 = '';
// The ID of the used SparkPost email template.
var templateId = '';


// START OF THE SCRIPT:
var util = require('util'); // for debugging
var SparkPost = require('sparkpost');
var client = new SparkPost(apiKey);

// In SparkPost an email sent to one or more recipients is called a transmission
client.transmissions.send({
    // In templates, inline-passed HTML or plain text, substitutions look like
    // {{firstName}} (they are the suggested replacement of (global) merge vars
    // when migrating from Mandrill)
    transmissionBody: {
        content: {
            template_id: templateId
        },
        // Transmission-level substitution data (like global merge vars in
        // Mandrill)
        substitution_data: {
            verb: 'sent'
        },
        recipients: [
            // Here we have recipient-level substitution data
            { address: target, substitution_data: { firstName: 'A', verb: 'received' } },
            { address: target2, substitution_data: { firstName: 'B' } }
        ]
    }
}, function (err, res) {
    if (err) { return console.error(err); }

    console.log('Woohoo! You just sent a SparkPost transmission!');
    console.log(util.inspect(res, {
        colors: true, // default is false
        depth: 1 // default depth is 2 with which too much detail is printed
    }));
});
