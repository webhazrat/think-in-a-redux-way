import Input from "../Input";
import Checkbox from "../Checkbox";
import { useAddBookMutation } from "../../features/api/apiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function From() {
  const navigate = useNavigate();
  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();
  const initFormData = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "featured") {
      value = e.target.checked;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reset = () => {
    setFormData(initFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    reset();
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Input
          label="Book Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          label="Author"
          name="author"
          type="text"
          value={formData.author}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <div className="space-y-2">
        <Input
          label="Image Url"
          name="thumbnail"
          type="text"
          value={formData.thumbnail}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <Input
            label="Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            label="Rating"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox
          label="This is a featured book"
          name="featured"
          checked={formData.featured}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="submit"
        id="lws-submit"
      >
        Add Book
      </button>
    </form>
  );
}
