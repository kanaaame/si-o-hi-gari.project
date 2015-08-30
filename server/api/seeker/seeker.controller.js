'use strict';

var _ = require('lodash');
var Seeker = require('./seeker.model');

var data = [
  {'_id' : '0',  'mailaddress' : '',  'name' : '松尾利彦', 'motivated':'不明', 'area':[], 'social':[],  'sex' : '',  'birth' : '',  'marry' : '',  'address' : '茨城県つくばみらい市',  'work' : 'リクルートエージェント',  'university' : '福岡大学',  'friends' : '',  'Posting' : ''  },
  {'_id' : '1',  'mailaddress' : 'yamada_taro@gmail.com',  'name' : '山田太郎', 'motivated':'悪い', 'area':['HTML'], 'social':[],  'sex' : '男',  'birth' : '29556',  'marry' : '既婚',  'address' : '東京都練馬',  'work' : '東京技術社',  'university' : '',  'friends' : '',  'Posting' : ''  },
  {'_id' : '2',  'mailaddress' : 'suzuki_jiro@gmail.com',  'name' : '鈴木二郎', 'motivated':'かなり良い', 'area':['Architecture','Management','Java','HTML5','Oracle'], 'social':['Facebook','Twitter','Linked In','GitHub'],  'sex' : '男',  'birth' : '32172',  'marry' : '未婚',  'address' : '千葉県浦安市',  'work' : '鬼山株式会社',  'university' : '千葉大学',  'friends' : '',  'Posting' : ''  },
  {'_id' : '3',  'mailaddress' : 'yamada_atsuko@yahoo.co.jp',  'name' : '山田敦子', 'motivated':'良い', 'area':['Document'], 'social':['Facebook','Twitter'],  'sex' : '女',  'birth' : '29292',  'marry' : '未婚',  'address' : '北海道苫小牧',  'work' : '',  'university' : '北海道大学',  'friends' : '',  'Posting' : ''}
];

// Get list of seekers
exports.index = function(req, res) {
  // Seeker.find(function (err, seekers) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(200, seekers);
  // });
  return res.json(200, data);
};


// Get a single seeker
exports.show = function(req, res) {
  // Seeker.findById(req.params.id, function (err, seeker) {
  //   if(err) { return handleError(res, err); }
  //   if(!seeker) { return res.send(404); }
  //   return res.json(seeker);
  // });
  return res.json(200, data[req.params.id]);
};

// Creates a new seeker in the DB.
exports.create = function(req, res) {
  Seeker.create(req.body, function(err, seeker) {
    if(err) { return handleError(res, err); }
    return res.json(201, seeker);
  });
};

// Updates an existing seeker in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Seeker.findById(req.params.id, function (err, seeker) {
    if (err) { return handleError(res, err); }
    if(!seeker) { return res.send(404); }
    var updated = _.merge(seeker, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, seeker);
    });
  });
};

// Deletes a seeker from the DB.
exports.destroy = function(req, res) {
  Seeker.findById(req.params.id, function (err, seeker) {
    if(err) { return handleError(res, err); }
    if(!seeker) { return res.send(404); }
    seeker.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
