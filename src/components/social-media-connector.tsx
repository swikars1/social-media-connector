'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, TwitterIcon as TikTok, Upload, Home, Settings, HelpCircle, Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SocialMediaConnector() {
  const [tiktokConnected, setTiktokConnected] = useState(false)
  const [instagramConnected, setInstagramConnected] = useState(false)
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const [postToTiktok, setPostToTiktok] = useState(true)
  const [postToInstagram, setPostToInstagram] = useState(true)
  const [credits, setCredits] = useState(100) // Example initial credits

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would implement the actual upload logic
    console.log('Uploading:', { file, caption, postToTiktok, postToInstagram })
  }

  const connectTiktok = () => {
    // Implement TikTok connection logic here
    setTiktokConnected(true)
  }

  const connectInstagram = () => {
    // Implement Instagram connection logic here
    setInstagramConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-purple-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">Social Media Connector</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-5 w-5 mr-1" />
              Help
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5 mr-1" />
              Settings
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New follower on TikTok</DropdownMenuItem>
                <DropdownMenuItem>Post reached 1k likes on Instagram</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Create New Post</CardTitle>
            <CardDescription className="text-center">
              Connect your TikTok and Instagram accounts to post simultaneously
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={connectTiktok}
                    className={`flex items-center ${tiktokConnected ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    disabled={tiktokConnected}
                  >
                    <TikTok className="mr-2 h-4 w-4" />
                    {tiktokConnected ? 'TikTok Connected' : 'Connect TikTok'}
                  </Button>
                  <Button
                    type="button"
                    onClick={connectInstagram}
                    className={`flex items-center ${instagramConnected ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    disabled={instagramConnected}
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    {instagramConnected ? 'Instagram Connected' : 'Connect Instagram'}
                  </Button>
                </div>
                <div>
                  <Label htmlFor="file">Upload Content</Label>
                  <div className="mt-1 flex items-center space-x-4">
                    <Input id="file" type="file" onChange={handleFileChange} className="flex-grow" />
                    {file && <Upload className="h-6 w-6 text-green-500" />}
                  </div>
                </div>
                <div>
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea
                    id="caption"
                    placeholder="Write your caption here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="tiktok"
                      checked={postToTiktok}
                      onCheckedChange={setPostToTiktok}
                    />
                    <Label htmlFor="tiktok">Post to TikTok</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="instagram"
                      checked={postToInstagram}
                      onCheckedChange={setPostToInstagram}
                    />
                    <Label htmlFor="instagram">Post to Instagram</Label>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              onClick={handleSubmit}
              disabled={!file || (!postToTiktok && !postToInstagram)}
            >
              Post to Selected Platforms
            </Button>
          </CardFooter>
        </Card>
      </div>
      <footer className="bg-white shadow-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">© 2023 Social Media Connector. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Available Credits:</span>
            <span className="text-sm font-bold text-purple-600">{credits}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}