require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//PRODUCTION PROXY

// app.use(proxy("/stats", {target: 'http://randyservicesstats-env.5tntitqpr8.us-east-2.elasticbeanstalk.com/'}));
// app.use(proxy("stats", {target: "http://randyservicesteamleaderss-env.2cxqjhgwps.us-east-2.elasticbeanstalk.com/"}));
// app.use(proxy("/photos", {target: 'http://randyservicesteamleaderss-env.2cxqjhgwps.us-east-2.elasticbeanstalk.com/'}));
// app.use(proxy("/espn/feeds", {target: 'http://espnfeedv2-env.h823g2menx.us-east-2.elasticbeanstalk.com/'}));
// app.use(proxy("/espn/schedules", {target: 'http://SidebarAndStretch-env.mwmycbva5m.us-east-2.elasticbeanstalk.com/'}));
// app.use(proxy("/espn/teamstandings", {target: 'http://feckevinservicesfullstandings-env.uqrtgu3hp9.us-east-1.elasticbeanstalk.com/'}));
// app.use(proxy("/espn/teamstandings", {target: 'http://feckevinservicesnavbar-env.2iug2j2rda.us-east-1.elasticbeanstalk.com/'}));
// app.use(proxy("/espn/standings", {target: 'http://feckevinservicesstandings-env.w8ummvjxnm.us-east-1.elasticbeanstalk.com/'}));

//DEVELOPMENT PROXY
app.use(proxy("/espn/feeds", {target: 'http://localhost:3005'}));
app.use(proxy("/espn/teamstandings", {target: 'http://localhost:4000'}));
app.use(proxy("/stats", {target: 'http://localhost:3001'}));
app.use(proxy("/espn/schedules", {target: 'http://localhost:3007'}));
// app.use(proxy("/espn/standings", {target: 'http://localhost:4000'}));



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
