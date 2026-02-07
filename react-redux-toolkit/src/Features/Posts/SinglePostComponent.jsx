const SinglePostComponent = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="flex flex-col gap-4 bg-violet-900 text-white rounded-md p-6 h-full shadow-lg">
      <h3 className="text-xl font-bold capitalize line-clamp-2 min-h-[3.5rem]">
        {title}
      </h3>

      <p className="text-sm text-violet-200 line-clamp-5">{body}</p>
    </div>
  );
};

export default SinglePostComponent;
