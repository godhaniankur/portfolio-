// import React from 'react'
// import { VideoContext } from './VideoContext'
// import { useState } from 'react'

// const VideoProvider = ({ children }) => {
//     const [showvideo, setshowvideo] = useState(false);
//     const [source, setsource] = useState(null)

//     const file = (value) => {
//         setshowvideo(true);
//         setsource(value);
//     }

//     return (
//         <VideoContext.Provider value={file}>
//             {children}
//             {
//                 showvideo && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[99]">
                        
//                     </div>
//                 )
//             }
//         </VideoContext.Provider>
//     )
// }

// export default VideoProvider


import React, { useState, useRef, useEffect } from 'react'
import { VideoContext } from './VideoContext'

const VideoProvider = ({ children }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [source, setSource] = useState(null)
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  const openVideo = (src) => {
    setSource(src)
    setShowVideo(true)
    setPlaying(false)
    setProgress(0)
  }

  const closeVideo = () => {
    setShowVideo(false)
    setSource(null)
    videoRef.current?.pause()
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    playing ? v.pause() : v.play()
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleSeek = (e) => {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    v.currentTime = pct * v.duration
  }

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (videoRef.current) videoRef.current.volume = val
  }

  const formatTime = (sec) => {
    if (isNaN(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    return `${m}:${String(s).padStart(2, '0')}`
  }

  // close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeVideo() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <VideoContext.Provider value={openVideo}>
      {children}

      {showVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-[99]"
          onClick={(e) => { if (e.target === e.currentTarget) closeVideo() }}
        >
          <div className="bg-black rounded-xl overflow-hidden w-full max-w-3xl shadow-2xl">

            {/* Video element */}
            <div className="relative bg-black">
              <video
                ref={videoRef}
                src={source}
                className="w-full aspect-video"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration)}
                onEnded={() => setPlaying(false)}
              />

              {/* Close button */}
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/75 cursor-pointer transition"
              >
                ✕
              </button>
            </div>

            {/* Controls */}
            <div className="bg-neutral-900 px-4 py-3 space-y-2">

              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50 w-10">
                  {formatTime(videoRef.current?.currentTime)}
                </span>
                <div
                  className="flex-1 h-1 bg-white/20 rounded cursor-pointer relative"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-white rounded"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-white/50 w-10 text-right">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Buttons row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play / Pause */}
                  <button onClick={togglePlay} className="text-white cursor-pointer text-lg">
                    {playing ? '⏸' : '▶'}
                  </button>

                  {/* Volume */}
                  <input
                    type="range"
                    min="0" max="1" step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-white"
                  />
                </div>

                {/* Fullscreen */}
                <button
                  onClick={() => videoRef.current?.requestFullscreen()}
                  className="text-white/60 cursor-pointer hover:text-white text-sm transition"
                >
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </VideoContext.Provider>
  )
}

export default VideoProvider