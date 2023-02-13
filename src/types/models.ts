export interface Profile {
  name: string,
  photo: string,
  id: number,
  createdAt: string,
  updatedAt: string,
  userId: number
}

export interface User {
  name: string,
  email: string,
  profile: { id: number },
  id: number
}

export interface Comment {
  id: number,
  content: string,
  authorId: number,
  postId: number,
  createdAt: string,
  updatedAt: string
}

export interface Post {
  id: number,
  title: string,
  content: string,
  authorId: number,
  createdAt: string,
  updatedAt: string,
  comments: Comment[]
}