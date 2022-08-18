const core = require('@actions/core'); //ES5
const axios = require('axios').default;
const FormData = require('form-data');

const vansahToken = core.getInput('vansahToken');
const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');
const Issue_TestFolders = core.getInput('Issue_TestFolders');
const comment = core.getInput('comment');

console.log(vansahToken);
// console.log(testFormat);
console.log(testPaths);
// console.log(projectKeyonJira);
console.log(case_key);
console.log(log_identifier);
console.log(comment);
//11050

// var bodyFormData = new FormData();
// bodyFormData.append('file', testPaths);
// bodyFormData.append('log_identifier', log_identifier);
// bodyFormData.append('result_key', 2);
// bodyFormData.append('comment', comment);
// console.log(bodyFormData);




// axios({
//     method: "post",
//     url: "https://apiuat.vansah.online/api/v3/auto/test_case/update_test_log",
//     data: bodyFormData,
//     headers: { "vansah-token": "abe63e37-0741-11ed-bdf2-ae827922bf87" , "Content-Type": "multipart/form-data" },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });