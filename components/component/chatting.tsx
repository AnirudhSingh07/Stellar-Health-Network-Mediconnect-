"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import MedicalHistoryCard from "../MedicalHistoryCard"
import Link from "next/link"

export function Chatting() {
  const [sender,setSender] = useState('');
  const [sent,setSent] = useState(false);
  useEffect(()=> {
    let x = localStorage.getItem('chat');
    setSender(x);
  },[])
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
        <div className="flex items-center gap-4">
          <Avatar className="rounded-full">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h1
                className="max-w-[150px] bg-transparent font-medium focus:outline-none text-white">
                {sender} 
              </h1>
            </div>
            <p className="text-sm text-gray-300">{`@${sender.toLowerCase().split(' ').join('')}`}</p>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto bg-black">
        <div className="grid gap-4 p-4">
          <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <p>Hey there! What is your age?</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-3 text-sm text-white">
              <p>21</p>
            </div>
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <p>How are you feeling?</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-3 text-sm text-white">
              <p>I am feeling drizzy, and also have body pain.</p>
            </div>
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="grid gap-4 p-4">
          <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <p>Please share your Medical History</p>
            </div>
          </div>
          {sent && <div className="flex justify-end gap-2">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-1 text-sm text-white">
              <MedicalHistoryCard />
            </div>
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>}
          {sent && <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <Link href={'/appointments'}><p>Click this message to book appointment</p></Link>
            </div>
          </div>}
        </div>
      </div>
      <div className="bg-black px-4 py-3 text-white">
        <div className="flex items-center justify-center gap-2">
          <Input
            className="bg-gray-900 text-white flex-1 h-12 rounded-full w-[55vw]"
            placeholder="Type your message..."
            type="text"
          />
          <Button className="text-gray-500 rounded-md px-2 py-2 flex items-center justify-center">
            <SendIcon className="h-6 w-6" />
          </Button>
          <Button onClick={() => {
            setSent(!sent);
          }} className="text-gray-500 rounded-md px-2 py-2 flex items-center justify-center ">
            {sent? 'Unsend Medical History' : 'Send Medical History'}
          </Button>
        </div>
      </div>
    </div>
  )
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
