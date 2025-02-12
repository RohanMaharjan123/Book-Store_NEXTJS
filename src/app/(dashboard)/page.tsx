import { AppSidebar } from "@/components/common/app-sidebar"
import ModeToggle from "@/components/common/modeToggle";
import { NavBarMenu } from "@/components/common/navBar";
import { Profile } from "@/components/common/profile";
import {CardInfo} from "@/components/common/card";
import { BreadCrumb } from "@/components/common/breadCrumb";
import {TableDisplay} from "@/components/common/tableDisplay";
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
