import { AppSidebar } from "@/components/app-sidebar"
import InfoCard from "@/components/ui/InfoCard";
import ModeToggle from "@/components/modeToggle";
import { NavBarMenu } from "@/components/navBar";
import { Profile } from "@/components/profile";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Book {
  id: number;
  title: string;
  authorId: number;
  genre: string;
  publishedDate: string; // ISO date format (YYYY-MM-DD)
  price: number;
  description: string;
}
async function fetchBooks(): Promise<Book[]> {
  try {
    const result = await fetch('http://localhost:4000/books');

    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // Return an empty array on error to prevent UI crashes
  }
}

export default async function Page() {
  const books = await fetchBooks();

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
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-2">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Overview</BreadcrumbPage>
                    </BreadcrumbItem>

                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
            <InfoCard
              title="Total Revenue"
              description="+25.6% from last month"
              content="$135,000.00"
            />
            <InfoCard
              title="Subscription"
              description="+280.1% from last month"
              content="+23,500"
            />
            <InfoCard
              title="Sales"
              description="+29% from last month"
              content="+125,234"
            />
            <InfoCard
              title="Active now"
              description="+2401 since last hour"
              content="+5734"
            />
          </div>
          <div>
            <Table>
              <TableCaption>A list of available books.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead className="w-[200px]">Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Published Date</TableHead>
                  <TableHead>Genre</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id}</TableCell>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.description}</TableCell>
                    <TableCell>${book.price}</TableCell>
                    <TableCell>{book.publishedDate}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableHead className="text-center"><button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                      <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </TableHead>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
