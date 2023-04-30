import axios, { AxiosPromise } from 'axios'
import { FoodData } from '../interfaces/FoodData'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const postData = async (data: FoodData): AxiosPromise<any> => {
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
