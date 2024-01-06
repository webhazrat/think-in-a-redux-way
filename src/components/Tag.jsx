import { useSelector, useDispatch } from "react-redux";
import { tagsToggle } from "../slices/filters/filtersSlice";
export default function Tag({ tag }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filters);

  const isSelected = tags.includes(tag.title) ? true : false;

  const handleToggle = () => {
    dispatch(tagsToggle(tag.title));
  };

  return (
    <div
      className={`${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleToggle}
    >
      {tag.title}
    </div>
  );
}
