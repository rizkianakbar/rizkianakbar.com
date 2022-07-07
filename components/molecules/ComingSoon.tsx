export default function ComingSoon({ name }: { name: string }) {
  return (
    <div className='flex justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto mb-[50px]'>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
        {name} Coming soon...
      </h1>
    </div>
  );
}
