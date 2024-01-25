export default async function Page() {
  console.log(process.env.DATABASE_URL)
  return (
    <div className="text-white h-full flex items-center justify-center bg-[#121212]">
      <button className="bg-emerald-500 text-white rounded-md py-2.5 px-6">
        Hello from Dashboard
      </button>
    </div>
  );
}
