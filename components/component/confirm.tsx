import Link from "next/link"
import { Card } from "@/components/ui/card"

export function Confirm() {
  return (
    <Card className="max-w-md mx-auto p-6 bg-white dark:bg-gray-950 shadow-lg rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-green-500 text-white p-3 rounded-full">
          <CalendarCheckIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Appointment Confirmed</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Thank you for booking your appointment with us!</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Appointment ID</p>
            <p className="font-medium">#54321</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Appointment Date</p>
            <p className="font-medium">May 15, 2024</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Appointment Time</p>
            <p className="font-medium">2:00 PM</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Provider</p>
            <p className="font-medium">Dr. Jane Doe</p>
          </div>
        </div>
        <Link
          className="inline-flex mt-2 items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          href="#"
        >
          Confirm Appointment
        </Link>
      </div>
    </Card>
  )
}

function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}
