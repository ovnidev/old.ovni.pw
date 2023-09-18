// deno-lint-ignore-file no-explicit-any

import { useEffect, useState } from "preact/hooks"
import { getCssColor, getPassword } from "../utils/password.ts"
import { copyToClipboard } from '../utils/clipboard.ts'
import Ufo from "../components/Ufo.tsx"
import Background from "../components/Background.tsx"

export default function Generator() {

    const [ master, setMaster ] = useState<string>('OVNIS')
    const [ service, setService ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ color, setColor ] = useState<string>('')
    
    useEffect(() => {
        setColor(getCssColor(master, service))
    }, [master, service])

    useEffect((async () => {
        setPassword(await getPassword(master, service))
    }) as () => void, [master, service])

    const onChangeMaster = (e: any) => setMaster(e.target.value)
    const onChangeService = (e: any) => setService(e.target.value)
    const onClickPassword = () => copyToClipboard(password)

    return(
        <>
            <Background color={ color } />
            <div class="h-screen p-5 md:p-[50px] z-[10] relative">

                <div class="mt-[50px] md:mt-[100px]">
                    <div class="w-[fit-content] mx-auto ufo">
                        <Ufo color={ color } />
                    </div>
                </div>

                <h2 class="mt-[20px] mb-[30px] w-[fit-content] mx-auto text-[28px] md:text-[30px] font-bold text-[#ffffff] text-center">
                    Super Secure Password Generator
                    <span class="block font-normal text-[14px] md:text-[20px] text-center opacity-[0.8]">
                        The <b>safest</b> way to create <b>passwords</b> is here!
                    </span>
                </h2>

                <div>

                    <div class="w-full md:max-w-[292px] md:mx-auto mb-2">
                        <input
                            class="w-full px-6 py-4 bg-[#1e252536] placeholder-[#fff] duration-300 appearance-none focus:appearance-none focus:outline-none outline-none focus:bg-[#1e25254f] text-[#fff] border border-[#ffffff30] focus:border-[#ffffff50] rounded-[4px] text-[15px] md:text-[21px] text-center"
                            type="password"
                            id="master"
                            placeholder="Your Master Password"
                            onKeyUp={ onChangeMaster }
                        />
                    </div>

                    <div class="w-full md:max-w-[292px] md:mx-auto mb-2">
                        <input
                            class="w-full px-6 py-4 bg-[#1e252536] placeholder-[#fff] duration-300 appearance-none focus:appearance-none focus:outline-none outline-none focus:bg-[#1e25254f] text-[#fff] border border-[#ffffff30] focus:border-[#ffffff50] rounded-[4px] text-[15px] md:text-[21px] text-center"
                            type="text"
                            id="service"
                            placeholder="Service"
                            onKeyUp={ onChangeService }
                        />
                    </div>

                    <div class="w-full md:max-w-[292px] mx-auto">

                        <input
                            class="px-1 w-full py-4 font-bold bg-[#ffffff1c] placeholder-[#ffffff1c] appearance-none focus:appearance-none focus:outline-none outline-none text-[#fff] border border-[#ffffff30] rounded-[4px] text-[18px] md:text-[21px] text-center"
                            type="text"
                            id="password"
                            readonly
                            value={ password }
                            onClick={ onClickPassword }
                        />

                    </div>
                </div>

                <div class="mt-[150px] justify-center w-[30px] mx-auto">
                    <svg width="30px" height="30px" class="animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"></path></svg>
                </div>

            </div>
        </>
    )
}