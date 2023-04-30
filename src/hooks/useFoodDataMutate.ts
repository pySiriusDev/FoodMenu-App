import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { FoodData } from '../interfaces/FoodData'
import { API_URL } from './settings'

const postData = async (data: FoodData): AxiosPromise<unknown> => {
  const response = axios.post(API_URL + '/food', data)

  return response
}

export function useFoodDataMutate() {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess() {
      queryClient.invalidateQueries(['food-data'])
    }
  })

  return mutate
}
