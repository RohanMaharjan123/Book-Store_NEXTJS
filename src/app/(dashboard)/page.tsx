import { AppSidebar } from "@/components/app-sidebar"
import ModeToggle from "@/components/modeToggle";
import { NavBarMenu } from "@/components/navBar";
import { Profile } from "@/components/profile";
import {CardInfo} from "@/components/card";
import { BreadCrumb } from "@/components/breadCrumb";
import {TableDisplay} from "@/components/tableDisplay";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex justify-between space-x-4">
          <NavBarMenu />
              <Profile />
              <ModeToggle />
          </div>
          <BreadCrumb/>
          <CardInfo/>
          <TableDisplay/>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
