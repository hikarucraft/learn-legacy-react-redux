export type countStateType = {
  count: number
}

export type arrayStateType = {
  count: number
  posts: {
    id: number
    title: string
  }[]
}

export type AppComponentProps = {
  countDayo: number
  postsDayo: {
    id: number
    title: string
  }[]
}
