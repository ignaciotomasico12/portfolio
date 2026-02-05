"use client"

export function loadFromStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null

  try {
    const data = localStorage.getItem(key)
    return data ? (JSON.parse(data) as T) : null
  } catch (error) {
    console.error("Error loading from localStorage:", error)
    return null
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error("Error saving to localStorage:", error)
  }
}

export function clearFromStorage(key: string): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error clearing from localStorage (${key}):`, error)
  }
}
