import React, { useEffect, useState } from "react"
import { useActions } from "common/hooks/useActions"
import { usersThunk } from "features/users/model/usersSlice"
import { useSelector } from "react-redux"
import { AppRootState } from "app/store"
import { User } from "common/types/apiTypes"
import s from "./Users.module.css"
import Card from "antd/lib/card/Card"
import Meta from "antd/lib/card/Meta"
import Avatar from "antd/lib/avatar/avatar"
import { Button } from "antd/lib/radio"
import { Pagination } from "antd"


export const Users = () => {

  const { getUsers, followUser, unfollowUser } = useActions(usersThunk)

  const users = useSelector<AppRootState, User[]>(state => state.users.users)
  const totalUsersCount = useSelector<AppRootState, number>(state => state.users.totalUsersCount)


  const [params, setParams] = useState({
    count: 10,
    page: 1
  })

  useEffect(() => {
    getUsers(params)
  }, [params])

  const subscribeHandler = (userId: number, isFollowed: boolean) => {
    if (!isFollowed) {
      followUser(userId)
    } else {
      unfollowUser(userId)
    }
  }
  const onShowSizeChange = (current: number, pageSize: number) => {
    setParams({...params, page: current, count: pageSize});
  }

  const onPageChange = (page: number, pageSize: number) => {
    setParams({...params, page, count: pageSize});
  }

  return (
    <div>
      <Pagination
        onChange={onPageChange}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={params.page}
        total={totalUsersCount} />
      <div className={s.usersWrapper}>
        {users.map(u => {
          return (
            <Card
              style={{ width: 300, height: "max-content", backgroundColor: "#148ec0" }}
              actions={[
                <Button
                  key="subscription"
                  onClick={() => subscribeHandler(u.id, u.followed)}
                  type="primary">
                  {!u.followed ? "Follow" : "Unfollow"}
                </Button>
              ]}
            >
              <Meta avatar={u.photos.large || u.photos.small ? <img
                  className={s.avatar}
                  src={`${u.photos.large ? u.photos.large : u.photos.small}`}
                  alt="avatar" /> :
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title={u.name}
                    description={u.status}
              />
            </Card>
          )
        })}
      </div>
    </div>
  )
}