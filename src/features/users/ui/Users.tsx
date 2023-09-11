import React, { useEffect } from "react"
import { useActions } from "common/hooks/useActions"
import { usersThunk } from "features/users/model/usersSlice"
import { useSelector } from "react-redux"
import { AppRootState } from "app/store"

export const Users = () => {

  const { getUsers } = useActions(usersThunk)

  const pageSize = useSelector<AppRootState, number>(state => state.users.pageSize)
  const currentPage = useSelector<AppRootState, number>(state => state.users.currentPage)

  const params = {
    count: pageSize,
    page: currentPage
  }

  useEffect(() => {
    getUsers(params)
  }, [])

  return (
    <div>
      xcvbc
    </div>
  )
}