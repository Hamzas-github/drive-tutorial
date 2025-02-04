import type { DriveItem } from "../types/drive.ts"

export const mockDriveData: DriveItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    lastModified: "2023-05-15 14:30",
    children: [
      {
        id: "2",
        name: "Work",
        type: "folder",
        lastModified: "2023-05-14 09:15",
        children: [
          {
            id: "3",
            name: "Project Proposal.docx",
            type: "file",
            url: "https://example.com/project-proposal.docx",
            lastModified: "2023-05-13 16:45",
            size: "2.5 MB",
          },
          {
            id: "4",
            name: "Budget.xlsx",
            type: "file",
            url: "https://example.com/budget.xlsx",
            lastModified: "2023-05-12 11:20",
            size: "1.8 MB",
          },
        ],
      },
      {
        id: "5",
        name: "Personal",
        type: "folder",
        lastModified: "2023-05-11 18:00",
        children: [
          {
            id: "6",
            name: "Resume.pdf",
            type: "file",
            url: "https://example.com/resume.pdf",
            lastModified: "2023-05-10 20:30",
            size: "500 KB",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Photos",
    type: "folder",
    lastModified: "2023-05-09 12:45",
    children: [
      {
        id: "8",
        name: "Vacation.jpg",
        type: "file",
        url: "https://example.com/vacation.jpg",
        lastModified: "2023-05-08 09:00",
        size: "3.2 MB",
      },
      {
        id: "9",
        name: "Family.jpg",
        type: "file",
        url: "https://example.com/family.jpg",
        lastModified: "2023-05-07 14:15",
        size: "2.8 MB",
      },
    ],
  },
  {
    id: "10",
    name: "Important Notes.txt",
    type: "file",
    url: "https://example.com/important-notes.txt",
    lastModified: "2023-05-06 10:30",
    size: "10 KB",
  },
]

