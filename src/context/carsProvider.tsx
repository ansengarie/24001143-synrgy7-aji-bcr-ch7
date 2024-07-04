import React, { createContext, useEffect, useState } from "react"
import { addCarFormData, updateCarFormData } from "../utils/types/cars"
import { axiosInstance } from "../services/axios"

interface ICars {
  id: number
  plate: string
  manufacture: string
  model: string
  image: string | null
  image_public_id: string | null
  rent_per_day: number
  capacity: number
  description: string
  available_at: Date | null
  transmission: "manual" | "automatic"
  available: boolean
  type: string
  year: number
  options: string[]
  specs: string[]
  created_by: number
  updated_by: number
  deleted_by: number
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

type CarsContextType = {
  carsPublic: ICars[] | null
  carsPrivate: ICars[] | null
  error: string | null
  fetchCarsPublic: () => void
  searchCars: (capacity?: string, availableAt?: string, pickupTime?: string) => void
  fetchCarsPrivate: () => void
  fetchCarsById: (id: number) => Promise<updateCarFormData | undefined>
  addCar: (data: addCarFormData) => Promise<void>
  updateCar: (data: updateCarFormData, id: number) => Promise<void>
  deleteCar: (id: number) => Promise<void>
}

export const CarsContext = createContext<CarsContextType | null>(null)

const CarsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carsPublic, setCarsPublic] = useState<ICars[] | null>(null)
  const [carsPrivate, setCarsPrivate] = useState<ICars[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    searchCars()
  }, [])

  const fetchCarsPrivate = async () => {
    try {
      const response = await axiosInstance.get("cars", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      setCarsPrivate(response.data.data)
    } catch (error) {
      setError("Failed to fetch cars")
    }
  }

  const fetchCarsPublic = async () => {
    try {
      const response = await axiosInstance.get("cars/public")
      setCarsPublic(response.data.data)
      return response.data.data
    } catch (error) {
      setError("Failed to fetch cars")
    }
  }

  const searchCars = async (capacity?: string, availableAt?: string, pickupTime?: string) => {
    try {
      const queryParams: Record<string, string | undefined> = {};

      if (capacity) queryParams["capacityFilter"] = capacity
      if (availableAt && pickupTime) {
        const dateFilter = `${availableAt}T${pickupTime}`
        queryParams["dateFilter"] = dateFilter
      }

      const response = await axiosInstance.get("/cars/public", {
        params: queryParams,
      })

      if (response.status !== 200) {
        setError("Failed to fetch cars.")
        throw new Error("Failed to fetch cars.")
      }

      setCarsPublic(response.data.data)
    } catch (error) {
      setCarsPublic([])
      setError("Failed to fetch cars. Please try again.")
    }
  }

  const fetchCarsById = async (id: number): Promise<updateCarFormData | undefined> => {
    try {
      const token = localStorage.getItem("token")
      const response = await axiosInstance.get(`cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data.data
    } catch (error) {
      console.error("Failed to fetch cars by id", error)
    }
  }

  const addCar = async (data: addCarFormData): Promise<void> => {
    try {
      const token = localStorage.getItem("token")
      const formData = new FormData()
      formData.append("plate", data.plate)
      formData.append("manufacture", data.manufacture)
      formData.append("model", data.model)
      formData.append("rent_per_day", String(data.rent_per_day)) // Convert to string
      formData.append("capacity", String(data.capacity)) // Convert to string
      formData.append("description", data.description)
      formData.append("available_at", data.available_at.toISOString()) // Convert Date to string
      formData.append("transmission", data.transmission)
      formData.append("available", String(data.available)) // Convert to string
      formData.append("type", data.type)
      formData.append("year", String(data.year)) // Convert to string
      data.options.forEach((option, index) => formData.append(`options[${index}]`, option))
      data.specs.forEach((spec, index) => formData.append(`specs[${index}]`, spec))

      const imageFile = document.getElementById("imageInput") as HTMLInputElement
      formData.append("image", imageFile?.files?.item(0) as File)

      const response = await axiosInstance.post("cars", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Car added successfully!", response.data.data)
    } catch (error) {
      console.error("Error adding car:", error)
    }
  }

  const updateCar = async (data: updateCarFormData, id: number): Promise<void> => {
    try {
      const token = localStorage.getItem("token")
      const formData = new FormData()
      formData.append("plate", data.plate)
      formData.append("manufacture", data.manufacture)
      formData.append("model", data.model)
      formData.append("rent_per_day", String(data.rent_per_day))
      formData.append("capacity", String(data.capacity))
      formData.append("description", data.description)
      formData.append("available_at", data.available_at.toISOString())
      formData.append("transmission", data.transmission)
      formData.append("available", data.available)
      formData.append("type", data.type)
      formData.append("year", String(data.year))

      // Append options and specs directly from data
      data.options.forEach((option, index) => formData.append(`options[${index}]`, option))
      data.specs.forEach((spec, index) => formData.append(`specs[${index}]`, spec))

      if (data.image && data.image.length > 0) {
        const imageFile = document.getElementById("imageInput") as HTMLInputElement
        if (imageFile?.files?.length) {
          formData.append("image", imageFile.files[0])
        }
      }

      const response = await axiosInstance.patch(`cars/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Car updated successfully!", response.data.data)
    } catch (error) {
      console.error("Error updating car:", error)
    }
  }

  const deleteCar = async (id: number): Promise<void> => {
    try {
      const data = await axiosInstance.delete(`cars/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      console.log("Car deleted successfully!", data)
    } catch (error) {
      console.error("Error deleting car:", error)
    }
  }

  const contextValue: CarsContextType = {
    carsPublic,
    carsPrivate,
    fetchCarsPrivate,
    fetchCarsPublic,
    searchCars,
    fetchCarsById,
    addCar,
    updateCar,
    deleteCar,
    error,
  }

  return <CarsContext.Provider value={contextValue}>{children}</CarsContext.Provider>
}

export default CarsProvider
