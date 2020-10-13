var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

// cron symbols  * * * * represent how often you want to refresh reference crontab.guru this updates once every minute
new CronJob('*/1 * * * * *', fetchGithub, null, true, 'America/Los_Angeles');
