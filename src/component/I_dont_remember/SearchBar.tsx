import 'react'
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <input
            type="text"
            placeholder="Поиск по названию"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar