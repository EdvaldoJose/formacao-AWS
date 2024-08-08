
const AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"})
const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });
const params = {
    InstanceIds: [
      "i-0c00dc0f59dd7a41d",
      "i-0a5392e559e817067",
      "i-0b054582346aedd78",
    ],
};

exports.startEC2Instances = () => {
  return ec2.startInstances(params, function(err, data) {
    if (err)
      console.log(err, err.stack);
    else
    console.log("Start porteiro com Success");
  });
};

exports.stopEC2Instances = () => {
  return ec2.stopInstances(params, function(err, data) {
    if (err)
      console.log(err, err.stack);
    else
    console.log("Stop porteiro com Success");
  });
};

// Usando outra funcao lambda com a mesma logica

// const AWS = require("aws-sdk");

// AWS.config.update({region: "us-east-1"});
// const ec2 = new AWS.EC2({apiVersion: "2016-11-15"});
// const params = {
//     InstanceIds: (["i-0a5392e559e817067"],["i-0b054582346aedd78"])
// };

// // Function Start
// exports.startEC2Instances = (event, context, callback) => {
//     ec2.startInstances(params, function(err, data) {
//         if (err) {
//             console.log("Error", err.stack);
//             callback(err);
//         } else {
//             console.log("Start porteiro com Success");
//             callback(null, "Start porteiro com Success");
//         }
//     });
// };

// // Function Stop
// exports.stopEC2Instances = (event, context, callback) => {
//     ec2.stopInstances(params, function(err, data) {
//         if (err) {
//             console.log("Error", err.stack);
//             callback(err);
//         } else {
//             console.log("Stop porteiro com Success");
//             callback(null, "Stop porteiro com Success");
//         }
//     });
// };
