import { ResponsiveLine } from "@nivo/line"
import { useState,useEffect } from "react"

export default function Monitoring() {
  const [Status, setStatus] = useState<boolean>(true);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.42.57/dustbin",{
          method: "GET"
        });
        const data = await response.json();
        console.log(data);
        if(data.sensorData === 4095) setStatus(true);
        else setStatus(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId); 
 }, []);
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
         
          <div>
            <h1 className="text-lg font-medium">John Doe</h1>
            <p className="text-sm text-gray-400">Age: 45</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6" />
            <p className="text-sm">Last updated: Just Now</p>
          </div>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-3 gap-6 p-6">
      <div className="bg-gray-500 rounded-lg shadow-md p-6 flex flex-col items-center justify-center ">
      
          <h2 className="text-xl font-bold mb-2 text-white">Wrist Band</h2>
          <WatchIcon className="w-6 h-6 bg-gray-500" />
          <div className={`text-3xl font-bold ${Status? 'text-green-500' : 'text-red-800'}`}>{Status ? 'On-Wrist' : 'Off-Wrist'}</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center ">
          <h2 className="text-xl font-bold mb-2 text-black">Pulse Rate</h2>
          <div className="text-3xl font-bold text-green-500">{Status? '72' : '-'} bpm</div>
          <p className="text-gray-500 mt-2">Normal range: 60-100 bpm</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center ">
          <h2 className="text-xl font-bold mb-2 text-black">Blood Oxygen</h2>
          <div className="text-3xl font-bold text-green-500">98%</div>
          <p className="text-gray-500 mt-2">Normal range: 95-100%</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6   ">
        <div className="bg-white rounded-lg shadow-md p-2 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-black">Connected Devices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center w-[25vh] gap-2">
              <BluetoothIcon className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-lg font-medium text-black">Fitbit Charge 4</h3>
                <p className="text-gray-500">Connected 10 min ago</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center w-[25vh]  gap-2">
              <ThermometerIcon className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-lg font-medium text-black">Thermometer Pro</h3>
                <p className="text-gray-500">Connected 30 min ago</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center w-[25vh]  gap-2">
              <HeartPulseIcon className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-medium text-black">Heart Rate Monitor</h3>
                <p className="text-gray-500">Connected 1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
          
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 text-black">Pulse Rate Trend</h2>
          <LineChart className="aspect-[8/2] mt-12" />
        </div>
        
      </main>
    </div>
  )
}

function BluetoothIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function HeartPulseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "00:01", y: 75 },
              { x: "00:02", y: 70 },
              { x: "00:03", y: 72 },
              { x: "00:04", y: 69 },
              { x: "00:05", y: 75 },
              { x: "00:06", y: 82 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "00:01", y: 62 },
              { x: "00:02", y: 95 },
              { x: "00:03", y: 59 },
              { x: "00:04", y: 89 },
              { x: "00:05", y:  65},
              { x: "00:06", y: 79},
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function WatchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  )
}
