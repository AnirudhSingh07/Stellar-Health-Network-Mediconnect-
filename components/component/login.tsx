"use client";
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import AuthContract from "@/utils/contracts/AuthContract";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router =  useRouter();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const handleSubmit = async() => {
    const response = await AuthContract.methods.login(username,password).call();
    if(response == "true")
      {
        router.push('/home');
      }
    else
    {
      setError(response);
    }
  }
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-gradient-to-b from-black to-gray-500 px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto flex w-full max-w-[70vw] flex-col items-center justify-between gap-8 rounded-xl bg-white p-6 shadow-lg md:flex-row md:p-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl w-[25vw]">
            Welcome to Medi-Connect
          </h1>
          <p className="text-lg text-gray-600">Providing exceptional healthcare services to our community.</p>
          <div className="relative group">
            <img
              alt="Healthcare Hero"
              className="mx-auto rounded-lg object-cover md:mx-0 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500}
            />
            <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <Button
                className="animate-bounce hover:scale-105 transition-transform duration-300 ease-in-out"
                size="lg"
                variant="primary"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 ">
          <Card className="w-[25vw] h-[60vh]  ml-[3vw] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:border-gray-800">
            <CardHeader className="space-y-1 p-6">
              <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">
                Enter your credentials to access your MedCare account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="grid gap-2">
                <Label className="font-medium" htmlFor="username">
                  Username
                </Label>
                <Input
                  className="animate-[wiggle_0.5s_ease-in-out] hover:animate-[wiggle_0.5s_ease-in-out] focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 hover:border-[#0077B6] transition-colors duration-300 ease-in-out"
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => {setUsername(e.target.value)}}
                />
              </div>
              <div className="grid gap-2">
                <Label className="font-medium" htmlFor="password">
                  Password
                </Label>
                <Input
                  className="animate-[wiggle_0.5s_ease-in-out] hover:animate-[wiggle_0.5s_ease-in-out] focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 hover:border-[#0077B6] transition-colors duration-300 ease-in-out"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
              <span className="text-red-500 flex justify-center items-center">{error}</span>
            </CardContent>
            <CardFooter className="p-6">
              <Button
                className="w-full bg-gray-700 animate-[bounce_1s_ease-in-out] hover:animate-[bounce_1s_ease-in-out] hover:scale-105 transition-transform duration-300 ease-in-out"
                variant="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
