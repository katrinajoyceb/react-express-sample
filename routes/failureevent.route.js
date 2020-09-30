const express = require('express');
const app = express();
const failureeventRoutes = express.Router();
var fs = require('fs');
const d3 = require("d3");
const path = require("path");


const dirPath = 'sessions/September';
var parameterArray = [];
var dataArray = [];

const getAllFiles = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(dirPath, "/", file))
      }
    })
    return arrayOfFiles;
  
}

const result = getAllFiles(dirPath);
const pattern = 'g2';
const parameterFiles = result.filter(function (str) { return str.includes(pattern); })

parameterFiles.forEach(function(file) {
  
    fs.readFile(file, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      dataArray.push(data);
      //console.log(dataArray);

  });
});


failureeventRoutes.route('/').get(function (req, res) {
    // fs.readFile('sessions/September/session_2865/event_d2018-09-18_t16:43:35_s2865_g2.evt.csv', 'utf8', function (err,data) {
    //     if (err) {
    //       return console.log(err);


    //     }


        const headers = ["col1","col2","col3","col4","col5","col6", "col7", "col8", "col9", "col10"].join(",");
        const rows = d3.csvParse(headers + "\n" + dataArray);
        console.log(rows)

        const memberSystemName = rows.filter(r => r.col4 === "MemberSystemName");
        const failureName = rows.filter(r => r.col4 === "FailureName");
        const transitionState = rows.filter(r => r.col4 === "TransitionState");
        const headFaultName = rows.filter(r => r.col4 === "HeadFaultReportName");
        const ataChapter = rows.filter(r => r.col4 === "ATAChapter");
        const flightLeg = rows.filter(r => r.col4 === "FlightLeg");
        const flightPhase = rows.filter(r => r.col4 === "FlightPhase");


        const eventTime = rows.filter(r => r.col3 === "UTCTimeStamp");
        const parameterNames = rows.filter(r => r.col4 === "ParameterNames");
        const parameterUnits = rows.filter(r => r.col4 === "ParameterUnits");
        const parameterData = rows.filter(r => r.col4 === "ParameterData");
        const memberSystemNames = rows.filter(r => r.col4 === "MemberSystemNames");
        const faultNames = rows.filter(r => r.col4 === "FaultNames");
        const faultStatus = rows.filter(r => r.col4 === "FaultStatus");

        let eventArray = [];
        const el = parameterNames[0];
        for(var x = 0; x < memberSystemName.length; x++){
          for(var i in el){
            if(el[i] != 'ParameterNames' && el[i] != '1' && el[i] != 'Event' && el[i] != 'Failure:Details' && el[i] != ''){
                let event = new Object();
                event.type = 'FAILURE';
                event.time = eventTime[x].col4;
                event.memberSystemName = memberSystemName[x].col5;
                event.failureName = failureName[x].col5;
                event.headFaultName = headFaultName[x].col5;
                event.ataChapter = ataChapter[x].col5;
                event.flightLeg = flightLeg[x].col5;
                event.flightPhase = flightPhase[x].col5;

                event.memberSystem = memberSystemNames[x][i];
                event.faultName = faultNames[x][i];
                event.faultStatus = faultStatus[x][i];
                event.parameterName = parameterNames[x][i];
                event.parameterUnit = parameterUnits[x][i];
                event.parameterData = parameterData[x][i];
                
                //console.log(event);

                eventArray.push(event);
            }
            
        }
        }
        
         
        
        
        console.log(eventArray);
        res.json({ event: eventArray});

   
      });
//});

module.exports = failureeventRoutes;