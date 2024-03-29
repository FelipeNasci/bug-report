import { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { Loading } from '@/components/Loading'

interface ScreenshotButtonProps {
  screenshot?: string
  onScreenshotTook: (screenshot?: string) => void
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')
    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false)
  }

  const handleTakeScreenshotReset = () => onScreenshotTook(undefined)

  return screenshot ? (
    <button
      className='p-1 h-10 w-10 text-zinc-400 rounded-md border-transparent hover:text-zinc-100 flex justify-end items-end transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
      type='button'
      onClick={handleTakeScreenshotReset}
      style={{
        background: `url(${screenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 100,
      }}
    >
      <Trash weight='fill' />
    </button>
  ) : (
    <button
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
      type='button'
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  )
}
