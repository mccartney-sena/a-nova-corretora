import { getCsrfToken } from 'next-auth/client'

export default function SignIn({ csrfToken }) {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <form
        method="post"
        action="/api/auth/signin/email"
        className="px-4 py-3 bg-gray-50 text-right sm:px-6 overflow-hidden sm:rounded-md flex flex-col items-center w-auto shadow-2xl"
      >
        <h2 className="mb-2 text-3xl font-mono font-bold">Login</h2>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="mt-1 mb-2 rounded-md shadow-sm h-8">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="border-solid border-2 px-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-80 h-12"
            placeholder="example@provider.com"
          />
        </div>
        <button
          type="submit"
          className="justify-center mt-5 mb-5 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-80"
        >
          ENTRAR
        </button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}
