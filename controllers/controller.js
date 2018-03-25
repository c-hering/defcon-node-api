exports.geturl = (req,res) => {
  var tabletojson = require('tabletojson');
  var url;
  console.log(req.params.urlAddition);
  if(typeof req.params.urlAddition === 'undefined'){
    url = "https://media.defcon.org/"
  }else{
    let addition = req.params.urlAddition.replace(/_/g, "/")
    url = "https://media.defcon.org/" + addition;
  }
  tabletojson.convertUrl(url).then(table => {
    table = JSON.parse(JSON.stringify(table).replace(/\s|↓/gi,"_").toLowerCase());
    res.json(table);
  })
};
