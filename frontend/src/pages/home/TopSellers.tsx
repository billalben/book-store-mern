import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

// Types
import { TBooks } from "@/types";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [books, setBooks] = useState<TBooks>([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  useEffect(() => {
    // fetch books
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase(),
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold">Top Sellers</h2>
      {/* category filtering */}

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="category"
        id="category"
        className="my-6 rounded-md border border-gray-300 bg-[#EAEAEA] px-4 py-2 focus:outline-none"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex gap-4 overflow-x-auto snap-x no-scrollbar">
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <BookCard book={book} key={index} />
          ))}
      </div>
    </div>
  );
};

export default TopSellers;
