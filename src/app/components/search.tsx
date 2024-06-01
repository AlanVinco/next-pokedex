'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import Image from "next/image"

export default function Search({ placeholder }: { placeholder: string}) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term:string) => { 
        const params = new URLSearchParams(searchParams)
        if (term){
            params.set('query', term)
        }else {
            params.delete('query')
        }

        replace(`${pathname}?${params.toString()}`)
     }, 300)

     return (
    <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search"  className="mr-3">
            <Image loading="lazy" draggable="false" height="100" width="100" src="/images/search-icon.png" alt="PokéLogo"/>
        </label>
        <input
        onChange={(event) => handleSearch(event.target.value)} 
        className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500 text-center" 
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}/>
    </div>
  )
}

