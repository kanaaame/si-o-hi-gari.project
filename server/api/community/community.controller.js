'use strict';

var _ = require('lodash');
var Community = require('./community.model');

var data = [{
  'seekerId': '0',
  'gitHub': [
  ],
  'community': [
  ],
 'events': [
  ]}, {
  'seekerId': '1',
  'gitHub': [
  ],
 'community': [
  ],
 'events': [
  ]}, {
  'seekerId': '2',
  'gitHub': [
    {  'id' : '1',  'projects' : 'ec-Apps', 'commit' : '240', 'skill' : 'java' },
    {  'id' : '2',  'projects' : 'mobile-Apps', 'commit' : '33', 'skill' : 'objective-C' },
    {  'id' : '3',  'projects' : 'machine-learnning-Apps', 'commit' : '300', 'skill' : 'R' },
  ],
 'community': [
    {  'id' : '1',  'community' : 'Javaユーザグループ', 'link' : 'http://www.java-users.jp'},
  ],
 'events': [
    {  'id' : '1',  'part' : '機械学習　上級セミナー'},
    {  'id' : '2',  'part' : '自己啓発セミナー'},
  ]}, {
    'seekerId': '3',
    'gitHub': [
      {  'id' : '1',  'projects' : 'Marketting-Apps', 'commit' : '128', 'skill' : 'java' },
      {  'id' : '2',  'projects' : 'mobile-Apps', 'commit' : '210', 'skill' : 'objective-C' },
    ],
   'community': [
      {  'id' : '1',  'community' : '日本マーケティング学会', 'link' : 'http://www.j-mac.or.jp'},
    ],
   'events': [
      {  'id' : '1',  'part' : '第1回 アジア発マーケティング研究報告会'},
      {  'id' : '2',  'part' : '第3回 アグリ＆アクアフード・マーケティング研究報告会'},
    ]}
  ];

// Get list of communitys
exports.index = function(req, res) {
  // Community.find(function (err, communitys) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(200, communitys);
  // });
  return res.json(200, data);
};

// Get a single community
exports.show = function(req, res) {
  Community.findById(req.params.id, function (err, community) {
    if(err) { return handleError(res, err); }
    if(!community) { return res.send(404); }
    return res.json(community);
  });
};

// Creates a new community in the DB.
exports.create = function(req, res) {
  Community.create(req.body, function(err, community) {
    if(err) { return handleError(res, err); }
    return res.json(201, community);
  });
};

// Updates an existing community in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Community.findById(req.params.id, function (err, community) {
    if (err) { return handleError(res, err); }
    if(!community) { return res.send(404); }
    var updated = _.merge(community, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, community);
    });
  });
};

// Deletes a community from the DB.
exports.destroy = function(req, res) {
  Community.findById(req.params.id, function (err, community) {
    if(err) { return handleError(res, err); }
    if(!community) { return res.send(404); }
    community.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
