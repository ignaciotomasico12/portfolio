"use client"

let cachedResult: boolean | null = null

export function hasHardwareAcceleration(): boolean {
  if (cachedResult !== null) return cachedResult

  if (typeof window === "undefined") {
    return false
  }

  try {
    const canvas = document.createElement("canvas")
    const gl = (canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null
    if (!gl) {
      cachedResult = false
      return cachedResult
    }

    const debugInfo = gl.getExtension!("WEBGL_debug_renderer_info")
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      const lower = renderer.toLowerCase()
      if (lower.includes("swiftshader") || lower.includes("llvmpipe") || lower.includes("softpipe") || lower.includes("software")) {
        cachedResult = false
        return cachedResult
      }
    }

    cachedResult = true
  } catch {
    cachedResult = false
  }

  return cachedResult!
}
