export const Userinfo = (props) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      <li key="1" className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          ></img>
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {props.name}
            </p>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {props.age}
            </p>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {props.email}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
