"use client"

import * as React from "react"
import {
  Settings2,
  SquareTerminal,
  PenTool,
  LibraryBig,
  CircleUserRound,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "ABN",
    email: "ABN@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "http://localhost:3000",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "http://localhost:3000",
        },
      ],
    },
    {
      title: "Authors",
      url: "/authors",
      icon: PenTool,
      items: [
        {
          title: "Authors",
          url: "/authors",
        },
      ],
    },
    {
      title: "Products",
      url: "/books",
      icon: LibraryBig ,
      items: [
        {
          title: "Books",
          url: "/books",
        },
      ],
    },
    {
      title: "Accounts",
      url: "#",
      icon: CircleUserRound,
      items: [
        {
          title: "Login",
          url: "http://localhost:3000/login",
        },
        {
          title: "Signup",
          url: "http://localhost:3000/signup",
        },
      ],
    },
    {
      title: "Kanban",
      url: "#",
      icon: Settings2,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
