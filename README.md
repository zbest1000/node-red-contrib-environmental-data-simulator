# node-red-contrib-evironmental-data-simulator

# **Description**

The Environmental Data Simulator node in Node-RED simulates data from a variety of environmental sensors commonly used in IoT (Internet of Things) and IIoT (Industrial Internet of Things) applications. The node generates random values within specified ranges for different sensor data points, including temperature, humidity, pressure, air quality, light intensity, soil moisture, water temperature, wind speed, and more. The values gradually ramp up or down in a realistic manner, with randomness introduced in the increment step.

This node is useful for testing and developing environmental monitoring applications without the need for physical sensors. It can also be used for demonstration purposes to showcase data-driven applications.

## **Usage**

Import the Environmental Data Simulator node into your Node-RED workspace.

Drag the Environmental Data Simulator node from the palette to your flow editor.

To trigger the sensor data simulation, use an Inject node. Connect the output of the Inject node to the input of the Environmental Data Simulator node.

Configure the Inject node with the desired trigger settings. You can choose to manually trigger the simulation by clicking the Inject node's button or to automatically trigger the simulation at regular intervals. To set up automatic triggering, select "Interval" in the Inject node's settings and specify the desired time interval (e.g., every 5 seconds).

To view the simulated sensor data, use a Debug node. Connect the output of the Environmental Data Simulator node to the input of the Debug node. Configure the Debug node to display the complete message object or just the payload.

Deploy the flow.

If you have set up manual triggering, click the button on the Inject node to generate simulated sensor data. If you have set up automatic triggering, the node will automatically generate sensor data at the specified interval.

The simulated sensor data will appear in the Debug sidebar. You can also connect the output to other nodes in your flow for further processing or visualization.

![Screenshot from 2023-04-09 00-46-14](https://user-images.githubusercontent.com/55817901/230754953-689944dd-29b4-4d5e-83f0-4267cf68318a.png)

## **Output Format**

The Environmental Data Simulator node outputs a message object with the simulated sensor data in the msg.payload property. The payload is an object containing key-value pairs for each sensor data point. The keys represent the names of the sensor data points, and the values represent the corresponding simulated data.

Example of the output payload:


{

    "Temperature °F": 75,
    "Humidity %": 45,
    "Pressure Psi": 25,
    "Air Quality AQI": 85,
    "Light Intensity Lux": 2000,
    "Soil Moisture %": 70,
    "Water Temperature °F": 65,
    "Wind Speed mph": 12,
    // ... additional sensor data points

}

To access individual sensor data points in a subsequent function node, use the msg.payload property followed by the key representing the desired sensor data point. For example:
`
 - 
var temperature = msg.payload["Temperature °F"];
 - 
var humidity = msg.payload["Humidity %"];
 - 
var airQuality = msg.payload["Air Quality AQI"];
 `
## **Notes**
The value ranges and sensor data points can be customized within the node's code.
 - The Environmental Data Simulator node uses context variables to retain state between runs, allowing values to ramp up and down in a dynamic manner.
 - The Inject node allows you to manually or automatically trigger the sensor data simulation as needed.
 - The Debug node provides a convenient way to view the simulated sensor data in the Debug sidebar.
