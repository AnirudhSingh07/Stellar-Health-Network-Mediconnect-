"use client";
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import Image from "next/image";

export function HospitalHomePage() {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            
            <span className="font-bold text-green-500">MediConnect  </span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/medical-history"
            >
              <HashIcon className="h-5 w-5" />
              <span>Medical History</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/telemedicine"
            >
              <BellIcon className="h-5 w-5" />
              <span>Tele-Medicine</span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/chatting"
            >
              <MailIcon className="h-5 w-5" />
              <span>Messages</span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <GaugeIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          
          </div>
        </div>
      </header>
      <main className="container mx-auto gap-6 px-4 py-6  md:px-6">
        <div className="space-y-6 grid grid-cols-1">
        <Card >
            <CardHeader>
              <CardTitle className="text-3l">Trending Diseases</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2">
                <div className=" ">
              <div className="space-y-4">
                <div className="flex items-center justify-between ">
                  <div className="grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-yellow-400">COVID -19 </h1>
                    <p className="text-sm font-medium text-gray-500 dark:text-white pt-2 pl-3">125k Patients world wide</p>
                    
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-blue-500">Malaria</h1>
                    <p className="text-sm font-medium text-gray-500 dark:text-white pt-2 pl-3">100k Patients world wide</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="grid grid-cols-2">
                    <h1 className="text-3xl font-bold text-red-600">Cancer</h1>
                    <p className="text-md font-medium text-gray-500 dark:text-white pt-2 pl-2 ">85k Patients world wide</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                  
                </div>
                
                <div>
                
          </div>
         
            
          
          </div>
              </div>
              <div> <LineChart className="aspect-[6/2] text-white" /> </div>
              
            </CardContent>
            
          </Card>
          <div className="grid grid-cols-3">
          <Card className="w-[70vh]">
            <CardHeader>
              <CardTitle>Patient Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
            <div>
                <Image src="/dash.jpg" alt="monitoring" width="450" height="350" className="rounded-xl" />
            </div>
            </CardContent>
          </Card>
          <Card className="w-[70vh]">
            <CardHeader>
              <CardTitle>Diagnosis</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1">
              <button className="transition-colors hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800 p-4 rounded-lg bg-white dark:text-black m-2">Malaria Detection</button>
              <button className="transition-colors hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800 p-4 rounded-lg bg-white dark:text-black m-2">Kidney Diagnosis</button>
              <button className="transition-colors hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800 p-4 rounded-lg bg-white dark:text-black m-2">Liver Diagnosis</button>

            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Heart Specialist</p>
                    <p className="text-base font-medium">Dr. Ramesh Chandra</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">General Physician</p>
                    <p className="text-base font-medium">Dr. Dinesh Sharma</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Dentist</p>
                    <p className="text-base font-medium">Dr. Rekha Khandelwal</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
          
        </div>
      </main>
    </>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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
                { x: "00:01", y: 5 },
                { x: "00:02", y: 10 },
                { x: "00:03", y: 72 },
                { x: "00:04", y: 69 },
                { x: "00:05", y: 25 },
                { x: "00:06", y: 75 },
              ],
            },
            {
                id: "malaria",
                data: [
                  { x: "00:01", y: 0 },
                  { x: "00:02", y: 25 },
                  { x: "00:03", y:  10},
                  { x: "00:04", y: 45 },
                  { x: "00:05", y: 20 },
                  { x: "00:06", y: 35 },
                ],
              },
            {
              id: "Mobile",
              data: [
                { x: "00:01", y: 25 },
                { x: "00:02", y: 45 },
                { x: "00:03", y: 59 },
                { x: "00:04", y: 89 },
                { x: "00:05", y:  39},
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
          colors={["#2563eb", "#e11d48","yellow"]}
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
  
  
function EllipsisVerticalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function HeartIcon(props) {
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
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function RepeatIcon(props) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}