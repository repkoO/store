import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

import { changeSearchFilter } from "../../redux/slices/filterSlice";

export const Search = () => {
    const [searchParams] = useSearchParams()
    const [search, setSearch] = useState(() => {
        const firstSearch = searchParams.get('search')
        return firstSearch ? firstSearch : ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const debounceValue = useDebounce(search, 1000)

    useEffect(() => {
        dispatch(changeSearchFilter(debounceValue))
    }, [dispatch, debounceValue])

    const handleSearch = (event) => {
        setSearch(event.target.value)
        if(event.target.value) {
        return navigate({
            pathname: '/',
            search: `?search=${event.target.value}`
        })
       } 
      navigate({
        pathname: '/',
      })
    }

    return <input className="search__input"
    placeholder="Search..."
    value={search} 
    onChange={handleSearch}
    />
}