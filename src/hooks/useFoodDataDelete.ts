import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { API_URL } from './settings'

const deleteData = async (id: number): AxiosPromise<unknown> => {
  const response = axios.delete(API_URL + '/food?id=' + id)
  return response
}

export function useFoodDataDelete() {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess() {
      queryClient.invalidateQueries(['food-data'])
    }
  })

  return mutate
}
