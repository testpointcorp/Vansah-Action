const core = require('@actions/core'); //ES5
const axios = require('axios').default;
const FormData = require('form-data');
const fs = require('fs');

const vansahConnectToken = core.getInput('vansahConnectToken');
const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');

const apiUrl = "https://vtrunk.vansahnode.app";
const nodeApiVersion = "v1";


let bodyFormData = new FormData();
bodyFormData.append('testFormat', testFormat);
bodyFormData.append('testPaths', fs.createReadStream(testPaths));



axios({
    method: "post",
    url: apiUrl+"/api/"+nodeApiVersion+"/testCase/import/XML",
    data: bodyFormData,
    headers: { "Authorization": vansahConnectToken , "Content-Type": "multipart/form-data" },
  })
  .then(function (response) {
    core.setOutput(response.data.message);
  })
  .catch(function (error) {
    core.setFailed(error.response.data.message);
    
  });