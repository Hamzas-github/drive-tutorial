export type FileItem = {
  id: string
  name: string
  type: "file"
  url: string
  lastModified: string
  size: string
}

export type FolderItem = {
  id: string
  name: string
  type: "folder"
  children: (FileItem | FolderItem)[]
  lastModified: string
}

export type DriveItem = FileItem | FolderItem

export type Breadcrumb = {
  id: string
  name: string
}

