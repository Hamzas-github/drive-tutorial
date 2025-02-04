"use client"

import React, { useState } from "react"
import { FolderIcon, FileIcon, Upload, ChevronRight } from "lucide-react"
import type { DriveItem, Breadcrumb, FolderItem } from "../types/drive.ts"
import { mockDriveData } from "../data/mockDriveData"
import { Button } from "~/components/ui/button"

const DriveItemComponent: React.FC<{ item: DriveItem; onNavigate: (item: FolderItem) => void }> = ({
  item,
  onNavigate,
}) => {
  return (
    <div
      className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
      onClick={() => item.type === "folder" && onNavigate(item as FolderItem)}
    >
      {item.type === "folder" ? (
        <FolderIcon className="mr-2 text-yellow-500" size={18} />
      ) : (
        <FileIcon className="mr-2 text-blue-500" size={18} />
      )}
      <span className="flex-grow">{item.name}</span>
      <span className="text-sm text-gray-400 mr-4">{item.lastModified}</span>
      {item.type === "file" && <span className="text-sm text-gray-400">{item.size}</span>}
    </div>
  )
}

export const Drive: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<FolderItem>({
    id: "root",
    name: "My Drive",
    type: "folder",
    children: mockDriveData,
    lastModified: "",
  })
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([{ id: "root", name: "My Drive" }])

  const handleNavigate = (folder: FolderItem) => {
    setCurrentFolder(folder)
    setBreadcrumbs((prev) => [...prev, { id: folder.id, name: folder.name }])
  }

  const handleBreadcrumbClick = (breadcrumb: Breadcrumb) => {
    const index = breadcrumbs.findIndex((b) => b.id === breadcrumb.id)
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
    setBreadcrumbs(newBreadcrumbs)

    if (breadcrumb.id === "root") {
      setCurrentFolder({ id: "root", name: "My Drive", type: "folder", children: mockDriveData, lastModified: "" })
    } else {
      const folder = findFolder(mockDriveData, breadcrumb.id)
      if (folder) setCurrentFolder(folder)
    }
  }

  const findFolder = (items: DriveItem[], id: string): FolderItem | null => {
    for (const item of items) {
      if (item.id === id && item.type === "folder") return item as FolderItem
      if (item.type === "folder") {
        const found = findFolder(item.children, id)
        if (found) return found
      }
    }
    return null
  }

  const handleUpload = () => {
    alert("Upload functionality would be implemented here.")
  }

  return (
    <div className="p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Google Drive Clone</h1>
        <Button onClick={handleUpload} variant="outline">
          <Upload className="mr-2" size={18} />
          Upload
        </Button>
      </div>
      <div className="flex items-center mb-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.id}>
            {index > 0 && <ChevronRight size={16} className="mx-2 text-gray-400" />}
            <span className="cursor-pointer hover:underline" onClick={() => handleBreadcrumbClick(breadcrumb)}>
              {breadcrumb.name}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center p-2 border-b border-gray-700 text-gray-400 text-sm">
          <span className="flex-grow">Name</span>
          <span className="w-32">Last Modified</span>
          <span className="w-20">Size</span>
        </div>
        {currentFolder.children.map((item) => (
          <DriveItemComponent key={item.id} item={item} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  )
}

