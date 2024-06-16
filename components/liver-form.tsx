"use client";
import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function LiverForm() {
  const [bp,setBp] = useState('');
  const [sg,setSg] = useState('');
  const [al,setAl] = useState('');
  const [su,setSu] = useState('');
  const [rbc,setRbc] = useState('');
  const [pc,setPc] = useState('');
  const [pcc,setPcc] = useState('');

  const handleSubmit = async() => {
    const response = await fetch('http://127.0.0.1:5000/predictkidney',{
      method: 'POST',
      body: JSON.stringify({
        bp,sg,al,su,rbc,pcc,pc
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    localStorage.setItem('diagnosis',data.prediction);
  }
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-gray-400 to-gray-900">
      <Card className="w-full max-w-3xl scale-90 bg-gradient-to-br from-gray-900 to-gray-400 rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-white">Liver Diagnosis</CardTitle>
          <CardDescription className="text-white">
            Enter the patient's information to assess the risk of Liver infection.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Total Bilirubin
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="name" placeholder="Total Bilirubin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Direct Bilirubin
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="age" placeholder="Direct Bilirubin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="gender">
                Alkaline Phosphotase
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="gender" placeholder="Alkaline Phosphotase" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="symptoms">
                Alamine Aminotransferase
              </Label>
              <Input value={bp} onChange={(e) => setBp(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="BAlamine Aminotransferase" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Total Protiens
              </Label>
              <Input value={sg} onChange={(e) => setSg(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Total Protiens" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Albumin
              </Label>
              <Input value={al} onChange={(e) => setAl(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Albumin" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Albumin and Globulin Ratio
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Albumin and Globulin Ratio" required />
            </div>
            
          </div>
          <div className="w-[45vh] max-w-[45vh]">
        <Label htmlFor="pdf-upload">Upload PDF (Optional)</Label>
        <Input accept="application/pdf" id="pdf-upload" type="file"  />
      </div>
          <Button onClick={handleSubmit} className="w-full bg-white text-gray-400 hover:bg-gray-900 hover:text-black">Assess Risk</Button>
        </CardContent>
      </Card>
    </div>
  )
}
