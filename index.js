var jsonFile = require('jsonfile');
var file= './text1/text_data/data.json';
jsonFile.readFile(file, function (err, obj) {
  if (err) {
    console.log(err);
  } else {
    console.log('read ok.');
  }
});



var testJSONData = [{
    name: 'xugaoyang',
    avatar: 'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
    words: '��������Ҹ��ܱ������JavaScript����������ͬѧ��һ��ɳ��Ҹе��ǳ�������'
  }, {
    avatar: "https://avatars0.githubusercontent.com/u/384727?v=4&s=460",
    name: "�ض�",
    words: "��Ϊ�Ōŵ�ȫջ���ʦ"
  }];

jsonFile.writeFile(file, testJSONData, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('read ok.');
  }
});