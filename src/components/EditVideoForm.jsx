import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { useEditVideoMutation } from "../features/api/apiSlice";
import Success from "./ui/Success";
import Error from "./ui/Error";

export default function EditVideoForm({ video }) {
  const [editVideo, { isLoading, isSuccess, isError }] = useEditVideoMutation();

  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({ id: video.id, data: formData });
  };

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Edit video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please edit the form to update the video
            </p>
          </div>

          <div className="mb-4">
            {isSuccess && <Success message="Video was updated successfully" />}
            {isError && <Error message="There was an error occur!" />}
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Input
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <Textarea
                        label="Description"
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <Input
                        label="YouTube Video Link"
                        name="link"
                        value={formData.link}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <Input
                        label="Thumbnail link"
                        name="thumbnail"
                        value={formData.thumbnail}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <Input
                        label="Date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <Input
                        label="Duration"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <Input
                        label="Views"
                        name="views"
                        value={formData.views}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
