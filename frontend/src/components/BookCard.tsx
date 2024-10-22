import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "@/utils/getImgUrl";

import { Link } from "react-router-dom";

// Types
import { TBook } from "@/types";

const BookCard = ({ book }: { book: TBook }) => {
  return (
    <div className="flex flex-row flex-grow-0 flex-shrink-0 overflow-hidden border rounded-md shadow-md snap-start basis-80 min-w-[620px]">
      <div className="shrink-0">
        <Link to={`/book/${book._id}`}>
          <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt=""
            className="object-cover w-full bg-cover cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex flex-col h-full p-4">
        <Link to={`/book/${book._id}`}>
          <h3 className="mb-3 text-xl font-semibold hover:text-blue-600 sm:mt-2">
            {book?.title}
          </h3>
        </Link>
        <p className="mb-5 text-gray-600">
          {book?.description.length > 80
            ? `${book.description.slice(0, 80)}...`
            : book?.description}
        </p>
        <p className="mb-5 font-medium">
          ${book?.newPrice}{" "}
          <span className="ml-2 font-normal line-through">
            $ {book?.oldPrice}
          </span>
        </p>
        <button
          onClick={() => console.log("Added to cart")}
          className="flex items-center justify-center gap-3 mt-auto btn-primary"
        >
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
