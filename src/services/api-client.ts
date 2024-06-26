import axios, { AxiosRequestConfig } from "axios"

export interface IFetchResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "948e66fc8c4f47c1b9df643dd8f1698d",
  },
})

class APIClient<T> {
  enpoint: string

  constructor(endpoint: string) {
    this.enpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<IFetchResponse<T>>(this.enpoint, config)
      .then((res) => res.data)
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.enpoint + "/" + id).then((res) => res.data)
  }
}

export default APIClient
