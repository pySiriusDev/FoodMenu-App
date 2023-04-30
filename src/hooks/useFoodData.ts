import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { FoodData } from '../interfaces/FoodData'
import { API_URL } from './settings'

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + '/food')

  return response
}

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}
