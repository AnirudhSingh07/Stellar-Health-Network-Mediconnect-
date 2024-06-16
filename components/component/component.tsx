"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function Component() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-gray-400 to-gray-900 text-white">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-white">Book Appointment</CardTitle>
        <CardDescription><span className="text-gray-200">Choose how you'd like to meet with your doctor.</span></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={() => {router.push('/videocall')}} className="bg-white text-[#000] hover:bg-gray-100" variant="solid">
            Online
          </Button>
          <Button onClick={() => {router.push('/confirmation')}} className="bg-white text-[#000] hover:bg-gray-100" variant="solid">
            Offline
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
