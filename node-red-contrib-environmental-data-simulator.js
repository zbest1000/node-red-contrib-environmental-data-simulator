const fs = require("fs");
const path = require("path");
const os = require("os");

module.exports = function(RED) {
    // Get the user's home directory
    const homeDir = os.homedir();
    
    // Construct the path to the desired directory
    const dir = path.join(homeDir, ".node-red", "node_modules", "node-red-contrib-environmental-data-simulator");
    
    // Construct the path to the subflow file using the specified subflow name
    const subflowFile = path.join(dir, "node-red-contrib-evironmental-data-simulator.json");
    
    // Read the contents of the subflow file
    const subflowContents = fs.readFileSync(subflowFile, 'utf8');
    
    // Parse the contents into a JSON object
    const subflowJSON = JSON.parse(subflowContents);
    
    // Register the subflow with Node-RED
    RED.nodes.registerSubflow(subflowJSON);
}

