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
    publishedDate: string;
    price: number;
    description: string;
}

async function fetchBooks(): Promise<Book[]> {
    try {
        const result = await fetch('http://localhost:4000/books');
        if (!result.ok) throw new Error(`HTTP error! Status: ${result.status}`);
        return await result.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}

export async function TableDisplay() {
    const books = await fetchBooks();
    return (
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
                            <TableCell className="text-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}