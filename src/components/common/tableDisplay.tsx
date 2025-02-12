"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Book {
    id: string;
    title: string;
    authorId: number;
    genre: string;
    publishedDate: string;
    price: number;
    description: string;
}

export function TableDisplay() {
    const [books, setBooks] = useState<Book[]>([]);
    const router = useRouter();
    const [, setTotalBooks] = useState("0");
    // const [totalBooks, setTotalBooks] = useState("0");
    // // const [showAll, setShowAll] = useState(true);
    // const [newBook, setNewBook] = useState({ name: "", author: "", price: "" });
    // const [editingBook, setEditingBook] = useState<Book | null>(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        try {
            const response = await fetch("http://localhost:4000/books");
            const data: Book[] = await response.json();
            setBooks(data);
            setTotalBooks(data.length.toString());
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    async function deleteBook(bookId: string) {
        try {
            const response = await fetch(`http://localhost:4000/books/${bookId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setBooks(books.filter((book) => book.id !== bookId));
                setTotalBooks((books.length - 1).toString());
            }
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }
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
                    {books.map((book, index) => (
                        <TableRow key={book.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium">{book.title}</TableCell>
                            <TableCell>{book.description}</TableCell>
                            <TableCell>${book.price}</TableCell>
                            <TableCell>{book.publishedDate}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell className="text-center">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={() => router.push(`/books/${book.id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => deleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}