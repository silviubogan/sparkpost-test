# SparkPost evaluation and API test for jillix
The free plan supports 100000 emails per month, webhooks and has a very nice
NodeJS API with [a good (sufficient)
documentation](https://github.com/SparkPost/node-sparkpost/blob/master/docs/resources/transmissions.md)
([the documentation for the general APIs](https://developers.sparkpost.com/api/)
is also good and completes the NodeJS documentation).

[Here](https://developers.sparkpost.com/api/#/reference/transmissions) it is
said that the content of the transmissions (emails) should not go over 20MBs. If
you are using templates, then that content represents the ID of the currently
used template, the content of the attachments and of the inline content.

To run [`example.js`](example.js) first run `npm install` in its directory and
complete the values of the first 4 variables declared at the beginning of the
script.

Other relevant links:

- [Mandrill Alternative: The SparkPost Survival Guide for Mandrill
  Users](https://www.sparkpost.com/blog/mandrill-alternative-sparkpost-survival-guide/)

## Other arguments
### Advantages
1. SparkPost is based on the Momentum platform used by Facebook, between others
   such as LinkedIn, Twitter, PayPal, Oracle and Pinterest. "25% of global email
   is send through our software."
2. [Here](http://blog.mailchimp.com/important-changes-to-mandrill/) MailChimp
   recommends SparkPost.
3. The web UI looks similar to Mandrill, the API is cleaner than SendGrid's API
   and the template substitutions (merge vars) [are more
   powerful](https://developers.sparkpost.com/api/#/introduction/substitutions-reference)
   than SendGrid's.

### Disadvantages
1. The sending domains must be verified using the DNS records, which is different
   from SendGrid where domain verification is optional. With the sandbox domain
   you can only send 50 emails.
2. It does not have a visual drag & drop HTML template designer like SendGrid
   although it has an HTML editor.
