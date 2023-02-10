const core = require('@actions/core'); //ES5
const axios = require('axios').default;
const FormData = require('form-data');

const vansahConnectToken = core.getInput('vansahConnectToken');
const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');

const apiUrl = "";
const nodeApiVersion = "";


let bodyFormData = new FormData();
bodyFormData.append('testFormat', testFormat);
bodyFormData.append('testPaths', testPaths);
console.log(bodyFormData);



axios({
    method: "post",
    url: apiUrl+"/api/"+nodeApiVersion+"/testCase/import/XML",
    data: bodyFormData,
    headers: { "Authorization": vansahConnectToken , "Content-Type": "multipart/form-data" },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });