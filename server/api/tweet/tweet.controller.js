'use strict';

var _ = require('lodash');
var Tweet = require('./tweet.model');

var data = [{
  'seekerId': '0',
  'tweets': [
  ]}, {
  'seekerId': '1',
  'tweets': [
    {  'id' : '1',  'mailaddress' : 'yamada_taro@gmail.com',  'account' : '山田太郎@T_Yamda',  'timestamp' : '42246.05459',  'posting' : '会議なげーな'  },
    {  'id' : '2',  'mailaddress' : 'yamada_taro@gmail.com',  'account' : '山田太郎@T_Yamda',  'timestamp' : '42246.14145',  'posting' : '会社行きたくないな'  },
    {  'id' : '3',  'mailaddress' : 'yamada_taro@gmail.com',  'account' : '山田太郎@T_Yamda',  'timestamp' : '42246.2283',  'posting' : 'Javaってなに？って感じ'  },
  ]}, {
  'seekerId': '2',
  'tweets': [
    {  'id' : '1',  'mailaddress' : 'suzuki_jiro@gmail.com',  'account' : '鈴木@JIRO_SUZUKI',  'timestamp' : '42246.31515',  'posting' : '尊敬するアーキテクトに「これが良いと思うのにビジネスからも技術からも賛成されずに何を悩んでいるんだろうって思うんです」と相談したら「アーキテクトは中途半端なもんだよ」っ言ってもらえてすごく楽になった。自らの信ずる道を行く以外に前に進む方法はないんだよ'  },
    {  'id' : '2',  'mailaddress' : 'suzuki_jiro@gmail.com',  'account' : '鈴木@JIRO_SUZUKI',  'timestamp' : '42246.402',  'posting' : 'なにかを抽象化して生産性を向上させるのは当然ことで、大事なのはどのように抽象化したのかというメタな部分。ツールは思想の塊だから、その思想を読み解くことで最適化できる。金槌クギ問題にならないように。'  },
    {  'id' : '3',  'mailaddress' : 'suzuki_jiro@gmail.com',  'account' : '鈴木@JIRO_SUZUKI',  'timestamp' : '42246.48885',  'posting' : 'プロジェクトの最重要課題が生産性、つまり工数（=お金）になっているなら、その時点で不健全と思った方がいい。こういうプロジェクトは生産性を上げるためにITそのものの価値を毀損しがち。保守性があっさり無視される。'  },
    {  'id' : '4',  'mailaddress' : 'suzuki_jiro@gmail.com',  'account' : '鈴木@JIRO_SUZUKI',  'timestamp' : '42246.5757',  'posting' : 'システム開発の立ち上げって、機能や業務を詰めるよりも先に、大きな目的や関係者との合意形成の進め方や導入計画を確認したほうが良いと思うんだけどね。飛び込む前に、飛び込み方や終わり方を考える。'  },
  ]}, {
  'seekerId': '3',
  'tweets': [
  ]}
];

// Get list of tweets
exports.index = function(req, res) {
  // Tweet.find(function (err, tweets) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(200, tweets);
  // });
  // seekerごとに取れないのでとりあえず
  return res.json(200, data);
};

// Get a single tweet
exports.show = function(req, res) {
  Tweet.findById(req.params.id, function (err, tweet) {
    if(err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    return res.json(tweet);
  });
};

// Creates a new tweet in the DB.
exports.create = function(req, res) {
  Tweet.create(req.body, function(err, tweet) {
    if(err) { return handleError(res, err); }
    return res.json(201, tweet);
  });
};

// Updates an existing tweet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tweet.findById(req.params.id, function (err, tweet) {
    if (err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    var updated = _.merge(tweet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tweet);
    });
  });
};

// Deletes a tweet from the DB.
exports.destroy = function(req, res) {
  Tweet.findById(req.params.id, function (err, tweet) {
    if(err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    tweet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
