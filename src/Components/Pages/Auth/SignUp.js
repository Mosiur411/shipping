import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <div className="bg-cover min-h-[80vh]"  style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/369e73a1e57c429eebbe77e211eb97ec107ad46f-1923x1090.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#f6f6f6' }}>
                <div className="bg-white/80 w-[90%] md:w-[80%] max-w-3xl m-auto min-h-[80vh] py-8 px-8 sm:px-16 md:px-32 lg:py-16 lg:pb-32 lg:px-40">
                    <h1 className="text-2xl lg:text-3xl font-bold">Sign In</h1>
                    <div className="pt-12">
                        <button className="px-4 md:px-12 py-4 bg-white border border-gray-1 rounded-xl shadow-md hover:bg-gray-1 focus:ring-2 focus:ring-gray-200 text-lg">
                            <span className="inline-block before:content-google-icon before:mr-4 before:align-middle font-medium text-subheading-gray hover:text-black">Sign in with Google</span>
                        </button>
                        <div className="mt-8 lg:mt-10"><p className="font-bold text-md">OR</p></div>
                        <div>
                            <form method="post">
                                <input type="hidden" name="csrfToken" value="b582e37aa206a87cbd0695511a3a124bd2569f07018c1bf5bda3ffff39986379" />
                                <div className="relative">
                                    <label className="text-light-purple focus-within:text-dark-purple focus-within:font-medium" htmlFor="input-username-for-credentials-provider">
                                        <p className="hidden">Login Email</p>
                                        <input
                                            required=""
                                            placeholder="Login Email"
                                            type="email"
                                            className="block pl-2 pr-10 py-4 md:pt-7 md:pb-5 mt-2 w-full bg-transparent border-b border-light-purple focus:border-b-2 placeholder:text-subtext-gray rounded-sm focus:outline-none text-black"
                                            name="username"
                                            id="input-username-for-credentials-provider"
                                        />
                                    </label>
                                </div>
                                <div className="relative">
                                    <label className="text-light-purple focus-within:text-dark-purple focus-within:font-medium" htmlFor="input-password-for-credentials-provider">
                                        <p className="hidden">Password</p>
                                        <input
                                            required=""
                                            placeholder="Password"
                                            type="password"
                                            className="block pl-2 pr-10 py-4 md:pt-7 md:pb-5 mt-2 w-full bg-transparent border-b border-light-purple focus:border-b-2 placeholder:text-subtext-gray rounded-sm focus:outline-none text-black"
                                            name="password"
                                            id="input-password-for-credentials-provider"
                                        />
                                    </label>
                                    <button className="absolute right-2 bottom-4 text-subtext-gray hover:text-dark-purple focus:outline-none" aria-hidden="true"  tabIndex="-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" className="h-6 w-6 [object Object]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-end"><a className="mt-2 text-subtext-gray hover:text-dark-purple text-sm" href="/forgot-password">Forgot Password?</a></div>
                                <div className="w-full md:w-4/5 lg:w-3/5 m-auto">
                                    <button className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-full mt-8" type="submit">Sign in</button>
                                    <a target="" href="/register">
                                        <button
                                            className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 border-2 border-light-purple hover:border-dark-purple bg-transparent hover:bg-dark-purple text-dark-purple hover:text-white w-full mt-4"
                                            type="button"
                                        >
                                            Create an account
                                        </button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
