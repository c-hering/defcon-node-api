exports.geturl = (req,res) => {
  var tabletojson = require('tabletojson');
  var url;
  typeof req.params.urlAddition === 'undefined' ?
    url = "https://media.defcon.org/" :
    url = "https://media.defcon.org/" + req.params.urlAddition;
  tabletojson.convertUrl(url).then(table => {
    table = JSON.parse(JSON.stringify(table).replace(/\s|↓/gi,"_").toLowerCase());
    res.json(table);
  })
};
