function BuiltWith() {
  const react = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="React Logo"
    />
  );
  const tailwind = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Tailwind CSS Logo"
    />
  );
  const redux = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Redux Logo"
    />
  );
  const bootstrap = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Bootstrap Logo"
    />
  );

  // const typescript = (
  //   <img
  //     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  //     className="w-16 h-16 hover:animate-jump"
  //     alt="TypeScript Logo"
  //   />
  // );

  const ruby = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Ruby Logo"
    />
  );

  const rails = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Rails Logo"
    />
  );

  const websockets = (
    <img
      src="https://cdn.worldvectorlogo.com/logos/websocket.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="WebSockets Logo"
    />
  );

  const github = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="GitHub Logo"
    />
  );

  const heroku = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Heroku Logo"
    />
  );

  const vercel = (
    <img
      src="https://cdn.worldvectorlogo.com/logos/vercel.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="Vercel Logo"
    />
  );

  const aws = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      className="w-16 h-16 hover:animate-jump"
      alt="AWS Logo"
    />
  );

  return (
    <div className="built-with font-fjalla flex flex-col w-full text-center mt-5 gap-4">
      <div className="built-with-text text-lg">
        THIS APPLICATION WAS BUILT WITH
      </div>
      <div className="flex justify-center">
        <div className="built-with-images flex flex-wrap gap-2 cursor-pointer hover:animate-wiggle hover:animate-infinite hover:animate-duration-2000 justify-center">
          {react}
          {tailwind}
          {redux}
          {bootstrap}
          {ruby}
          {rails}
          {websockets}
          {github}
          {heroku}
          {vercel}
          {aws}
        </div>
      </div>
    </div>
  );
}

export default BuiltWith;
